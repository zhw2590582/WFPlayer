import { addClass } from './utils';

export default class Subtitle {
    constructor(wf) {
        this.wf = wf;
        this.$els = [];
        this.$subtitle = null;
        this.elSymbol = Symbol('el');
        this.idSymbol = Symbol('id');
        this.data = [];
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
                if (this.data.length) {
                    this.update();
                }

                if (!this.wf.isDestroy) {
                    loop.call(this);
                }
            });
        }.call(this));
    }

    createEl(item) {
        if (this.$els.length) {
            const $el = this.$els.pop();
            $el.style.display = null;
            const $center = $el.querySelector('wf-subtitle-center');
            $center.innerHTML = item.html || '';
            return $el;
        } else {
            const $el = document.createElement('div');
            addClass($el, 'wf-subtitle-item');

            const $left = document.createElement('div');
            addClass($left, 'wf-subtitle-left');
            $el.appendChild($left);

            const $center = document.createElement('div');
            addClass($center, 'wf-subtitle-center');
            $center.innerHTML = item.html || '';
            $el.appendChild($center);

            const $right = document.createElement('div');
            addClass($right, 'wf-subtitle-right');
            $el.appendChild($right);

            return $el;
        }
    }

    update() {
        const renderData = this.data.filter((item) => this.wf.checkVisible(item.start, item.end));

        for (let index = 0; index < renderData.length; index++) {
            const item = renderData[index];

            if (!this.renderData.includes(item)) {
                item[this.elSymbol] = this.createEl(item);
                this.$subtitle.appendChild(item[this.elSymbol]);
            }

            const left = this.wf.getLeftFromTime(item.start);
            const width = this.wf.getWidthFromDuration(item.end - item.start);
            item[this.elSymbol].style.left = left + 'px';
            item[this.elSymbol].style.width = width + 'px';
        }

        for (let index = 0; index < this.renderData.length; index++) {
            const item = this.renderData[index];
            if (!renderData.includes(item)) {
                item[this.elSymbol].style.display = 'none';
                this.$els.push(item[this.elSymbol]);
                delete item[this.elSymbol];
            }
        }

        this.renderData = renderData;
    }

    load(data = []) {
        for (let index = 0; index < data.length; index++) {
            const item = data[index];
            item[this.idSymbol] = index;
            delete item[this.elSymbol];
        }
        this.data = data;
    }

    destroy() {
        cancelAnimationFrame(this.timer);
    }
}
