import { throttle } from './utils';
import workerText from 'bundle-text:./worker';
import { postMessage } from './worker';

export default class Drawer {
    constructor(wf) {
        this.wf = wf;
        this.canvas = wf.template.canvas;
        this.config = {};

        const { refreshDelay, useWorker } = wf.options;
        this.update = throttle(this.update, refreshDelay, this);

        if (useWorker && window.OffscreenCanvas && window.Worker) {
            this.worker = new Worker(URL.createObjectURL(new Blob([workerText])));
            this.ctx = this.canvas.getContext('bitmaprenderer');

            this.wf.events.proxy(this.worker, 'message', (event) => {
                const { type, data } = event.data;
                if (type === 'UPFATE' && !wf.isDestroy) {
                    this.config = data.config;
                    this.wf.emit('update', data.config);
                    this.ctx.transferFromImageBitmap(data.imageBitmap);
                }
            });

            this.worker.postMessage({
                type: 'INIT',
                data: {
                    width: this.canvas.width,
                    height: this.canvas.height,
                },
            });
        } else {
            this.worker = { postMessage };

            this.wf.on('update', (config) => {
                this.config = config;
            });

            this.worker.postMessage({
                type: 'INIT',
                data: {
                    canvas: this.canvas,
                    wf: this.wf,
                },
            });
        }

        wf.on('decode', ({ channelData, sampleRate }) => {
            this.worker.postMessage({
                type: 'DECODE',
                data: { channelData, sampleRate },
            });
            this.update();
        });
    }

    update() {
        const {
            currentTime,
            duration: totolDuration,
            // eslint-disable-next-line no-unused-vars
            options: { container, mediaElement, ...options },
        } = this.wf;

        const { width, height } = this.canvas;

        this.worker.postMessage({
            type: 'UPDATE',
            data: { ...options, currentTime, width, height, totolDuration },
        });
    }

    destroy() {
        if (this.worker.terminate) {
            this.worker.terminate();
        }
    }
}
