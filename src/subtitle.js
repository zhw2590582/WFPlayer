import { addClass } from './utils';

export default class Subtitle {
    constructor(wf) {
        this.wf = wf;
        this.elSymbol = Symbol('el');
        this.idSymbol = Symbol('id');
        this.$els = [];
        this.$subtitle = null;
        this.data = [{ start: 1, end: 2 }];
        this.renderData = [];
        this.timer = null;
        this.init();
    }

    init() {
        this.$subtitle = document.createElement('div');
        addClass(this.$subtitle, 'wf-subtitle');
        this.wf.options.container.appendChild(this.$subtitle);
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
        const renderData = this.data.filter((item) => this.wf.checkVisible(item.start, item.end));

        for (let index = 0; index < renderData.length; index++) {
            const item = renderData[index];

            if (!this.renderData.includes(item)) {
                item[this.elSymbol] = this.createEl();
                this.$subtitle.appendChild(item[this.elSymbol]);
            }

            const left = this.wf.getLeftFromTime(item.start);
            const width = this.wf.getWidthFromDuration(item.end - item.start);
            item[this.elSymbol].style.left = left + 'px';
            item[this.elSymbol].style.width = width + 'px';
        }

        this.renderData = renderData;
    }

    load(data) {
        this.data = data;
    }

    destroy() {
        cancelAnimationFrame(this.timer);
    }
}
