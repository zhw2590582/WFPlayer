import { throttle } from './utils';
import worker from './worker';

export default class Drawer {
    constructor(wf) {
        this.wf = wf;
        this.canvas = wf.template.canvas;

        const { refreshRate, useWorker } = wf.options;
        this.update = throttle(this.update, refreshRate, this);

        if (useWorker && window.OffscreenCanvas && window.Worker) {
            this.worker = new Worker('./worker.js');
            this.ctx = this.canvas.getContext('bitmaprenderer');

            this.wf.events.proxy(this.worker, 'message', (event) => {
                const { type, data } = event.data;
                if (type === 'RENDER') this.wf.emit('render', data);
                if (type === 'DRAW') this.ctx.transferFromImageBitmap(data);
            });

            this.worker.postMessage({
                type: 'INIT',
                data: {
                    width: this.canvas.width,
                    height: this.canvas.height,
                },
            });
        } else {
            this.worker = worker;
            this.worker.postMessage({
                type: 'INIT',
                data: {
                    canvas: this.canvas,
                    wf: this.wf,
                },
            });
        }

        wf.on('channelData', ({ channelData, sampleRate }) => {
            this.worker.postMessage({
                type: 'CHANNE_DATA',
                data: { channelData, sampleRate },
            });
        });
    }

    update() {
        const {
            currentTime,
            options: { container, mediaElement, ...options },
        } = this.wf;
        const { width, height } = this.canvas;

        this.worker.postMessage({
            type: 'UPDATE',
            data: { options, currentTime, width, height },
        });
    }

    destroy() {
        if (this.worker.terminate) {
            this.worker.terminate();
        }
    }
}
