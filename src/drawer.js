export default class Drawer {
    constructor(wf) {
        this.wf = wf;
        this.canvas = wf.template.canvas;
        this.ctx = this.canvas.getContext('bitmaprenderer');
        this.worker = new Worker('./worker.js');

        wf.events.proxy(this.worker, 'message', (event) => {
            const { type, data } = event.data;

            if (type === 'RENDER') {
                wf.emit('render', data);
            }

            if (type === 'DRAW') {
                this.ctx.transferFromImageBitmap(data);
            }
        });

        this.worker.postMessage({
            type: 'INIT',
            data: {
                width: this.canvas.width,
                height: this.canvas.height,
            },
        });

        wf.on('options', () => {
            this.update();
        });

        wf.on('channelData', ({ channelData, sampleRate }) => {
            this.worker.postMessage({
                type: 'CHANNE_DATA',
                data: { channelData, sampleRate },
            });
            this.update();
        });

        this.update();
    }

    update() {
        const {
            currentTime,
            options: { container, mediaElement, ...options },
        } = this.wf;

        this.worker.postMessage({
            type: 'UPDATE',
            data: { options, currentTime },
        });
    }

    destroy() {
        this.worker.terminate();
    }
}
