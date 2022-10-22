import { errorHandle, throttle, addClass } from './utils';

export default class Template {
    constructor(wf) {
        this.wf = wf;
        this.canvas = null;
        const { refreshDelay } = wf.options;
        this.update = throttle(this.init, refreshDelay, this);
        this.init();
    }

    init() {
        const { container, pixelRatio } = this.wf.options;
        const { clientWidth, clientHeight } = container;
        const width = clientWidth * pixelRatio;
        const height = clientHeight * pixelRatio;

        if (this.canvas) {
            if (this.canvas.width !== width) {
                this.canvas.width = width;
            }
            if (this.canvas.height !== height) {
                this.canvas.height = height;
            }
        } else {
            errorHandle(
                this.wf.constructor.instances.every((wf) => wf.options.container !== container),
                'Cannot mount multiple instances on the same dom element, please destroy the previous instance first.',
            );
            container.innerHTML = '';
            addClass(container, 'wf-player');
            this.canvas = document.createElement('canvas');
            this.canvas.width = width;
            this.canvas.height = height;
            this.canvas.style.width = '100%';
            this.canvas.style.height = '100%';
            container.appendChild(this.canvas);
        }
    }

    exportImage() {
        const elink = document.createElement('a');
        elink.style.display = 'none';
        elink.href = this.canvas.toDataURL('image/png');
        elink.download = `${Date.now()}.png`;
        document.body.appendChild(elink);
        elink.click();
        document.body.removeChild(elink);
    }

    destroy() {
        this.wf.options.container.innerHTML = '';
    }
}
