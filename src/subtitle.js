import { addClass, removeClass } from './utils';

export default class Subtitle {
    constructor(wf) {
        this.wf = wf;
        this.$els = [];
        this.$subtitle = null;
        this.elSymbol = Symbol('el');
        this.data = [{ start: 1, end: 2, html: 'test' }];
        this.renderData = [];
        this.timer = null;
        this.isInit = false;
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
            $el.innerHTML = item.html || '';
            return $el;
        } else {
            const $el = document.createElement('div');
            $el.innerHTML = item.html || '';
            addClass($el, 'wf-subtitle-item');
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

            if (this.wf.checkCurrent(item.start, item.end)) {
                addClass(item[this.elSymbol], 'wf-subtitle-current');
            } else {
                removeClass(item[this.elSymbol], 'wf-subtitle-current');
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
            delete item[this.elSymbol];
        }

        this.data = data;

        if (!this.isInit) {
            this.isInit = true;
            this.init();
        }
    }

    destroy() {
        cancelAnimationFrame(this.timer);
    }
}
