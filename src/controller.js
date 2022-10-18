import { throttle } from './utils';

export default class Controller {
    constructor(wf) {
        this.wf = wf;
        this.playTimer = null;
        this.isInit = false;
        this.init = () => {
            if (!this.isInit) {
                this.isInit = true;
                this.clickInit();
                this.resizeInit();
                this.playInit();
                this.scrollInit();
                this.grabInit();
            }
        };
    }

    clickInit() {
        const {
            options: { container },
            events: { proxy },
        } = this.wf;

        proxy(container, ['click', 'contextmenu'], (event) => {
            const time = this.wf.getCurrentTimeFromEvent(event);
            this.wf.emit(event.type, time, event);
        });
    }

    resizeInit() {
        const { proxy } = this.wf.events;

        const throttleResize = throttle(
            () => {
                this.wf.update();
                this.wf.emit('resize');
            },
            200,
            this,
        );

        proxy(window, ['resize', 'orientationchange'], () => {
            throttleResize();
        });
    }

    playInit() {
        const {
            events: { proxy },
            options: { mediaElement },
        } = this.wf;

        if (!mediaElement) return;

        proxy(mediaElement, ['seeked', 'seeking', 'canplay'], () => {
            this.wf.update();
        });

        (function loop() {
            this.playTimer = requestAnimationFrame(() => {
                if (this.wf.playing) {
                    this.wf.update();
                }

                if (!this.wf.isDestroy) {
                    loop.call(this);
                }
            });
        }.call(this));
    }

    scrollInit() {
        const {
            events: { proxy },
            options: { container },
        } = this.wf;

        proxy(container, 'wheel', (event) => {
            this.wf.emit('scroll', Math.sign(event.deltaY), event);
        });
    }

    grabInit() {
        const {
            events: { proxy },
            options: { container },
        } = this.wf;

        let lastCurrentTime = 0;
        let lastPageX = 0;

        proxy(container, 'mousedown', (event) => {
            if (event.button !== 0) return;
            this.wf.grabbing = true;
            const { scrollable } = this.wf.config;
            lastCurrentTime = scrollable ? this.wf.currentTime : this.wf.getCurrentTimeFromEvent(event);
            lastPageX = event.pageX;
        });

        proxy(container, 'mousemove', (event) => {
            if (!this.wf.grabbing) return;
            container.classList.add('wf-grabbing');
            const diffWidth = event.pageX - lastPageX;
            const { gridGap, pixelRatio, scrollable } = this.wf.config;
            const diffTime = diffWidth / ((gridGap / pixelRatio) * 10);
            const currentTime = lastCurrentTime + (scrollable ? -diffTime : diffTime);
            this.wf.emit('grabbing', currentTime, event);
        });

        proxy(document, 'mouseup', () => {
            if (!this.wf.grabbing) return;
            container.classList.remove('wf-grabbing');
            this.wf.grabbing = false;
            lastCurrentTime = 0;
            lastPageX = 0;
        });
    }

    destroy() {
        cancelAnimationFrame(this.playTimer);
    }
}
