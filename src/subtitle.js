import { addClass } from './utils';

export default class Subtitle {
    constructor(wf) {
        this.wf = wf;
        this.data = [{ start: 1, end: 2 }];
        this.timer = null;
        this.init();
    }

    init() {
        const $subtitle = document.createElement('div');
        addClass($subtitle, 'wf-subtitle');
        this.wf.options.container.appendChild($subtitle);

        (function loop() {
            this.timer = requestAnimationFrame(() => {
                this.update();
                loop.call(this);
            });
        }.call(this));
    }

    update() {
        // const arr = this.data.filter((item) => this.wf.checkVisible(item.start, item.end));
    }

    load(data) {
        this.data = data;
    }

    destroy() {
        cancelAnimationFrame(this.timer);
    }
}
