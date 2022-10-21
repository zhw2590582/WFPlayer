import { addClass } from './utils';

export default class Subtitle {
    constructor(wf) {
        this.wf = wf;
        this.elSymbol = Symbol('el');
        this.idSymbol = Symbol('id');
        this.$els = [];
        this.data = [{ start: 1, end: 2 }];
        this.renderData = [];
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
                if (!this.wf.isDestroy) {
                    loop.call(this);
                }
            });
        }.call(this));
    }

    createEl() {
        if (this.$els.length) {
            const $el = this.$els.pop();
            $el.style.display = null;
            return $el;
        } else {
            const $el = document.createElement('div');
            addClass($el, 'wf-subtitle-item');
            return $el;
        }
    }

    update() {
        this.renderData = this.data.filter((item) => this.wf.checkVisible(item.start, item.end));
    }

    load(data) {
        this.data = data;
    }

    destroy() {
        cancelAnimationFrame(this.timer);
    }
}
