import { throttle, addClass, removeClass } from './utils';

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
                this.hoverInit();
                this.scrollbarInit();
            }
        };
    }

    clickInit() {
        const {
            options: { container },
            events: { proxy },
        } = this.wf;

        proxy(container, ['click', 'contextmenu'], (event) => {
            if (this.wf.grabbing) return;
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

        let grabStart = false;
        let lastCurrentTime = 0;
        let lastPageX = 0;

        proxy(container, 'mousedown', (event) => {
            this.wf.emit('mousedown', event);
            if (event.button !== 0) return;
            grabStart = true;
            const { scrollable } = this.wf.config;
            lastCurrentTime = scrollable ? this.wf.currentTime : this.wf.getCurrentTimeFromEvent(event);
            lastPageX = event.pageX;
        });

        proxy(container, 'mousemove', (event) => {
            this.wf.emit('mousemove', event);
            if (!grabStart) return;
            this.wf.grabbing = true;
            addClass(container, 'wf-grabbing');
            const { scrollable } = this.wf.config;
            const diffWidth = event.pageX - lastPageX;
            const diffTime = this.wf.getDurationFromWidth(diffWidth);
            const currentTime = lastCurrentTime + (scrollable ? -diffTime : diffTime);
            this.wf.emit('grabbing', currentTime, event);
        });

        proxy(document, 'mouseup', (event) => {
            this.wf.emit('mouseup', event);
            if (!grabStart) return;
            setTimeout(() => (this.wf.grabbing = false));
            removeClass(container, 'wf-grabbing');
            grabStart = false;
            lastCurrentTime = 0;
            lastPageX = 0;
        });
    }

    hoverInit() {
        const {
            events: { proxy },
            options: { container },
        } = this.wf;

        const $cursor = document.createElement('div');
        addClass($cursor, 'wf-cursor');
        $cursor.style.cssText = `position:absolute;top:0;left:0;bottom:0;z-index:1;width:1px;height:100%;background-color:#ffffff;opacity:0.25;user-select:none;pointer-events:none;display:none;`;
        container.appendChild($cursor);
        this.wf.template.cursor = $cursor;

        this.wf.on('mousemove', (event) => {
            $cursor.style.left = event.pageX - container.getBoundingClientRect().left + 'px';
        });

        proxy(container, 'mouseenter', (event) => {
            this.wf.emit('mouseenter', event);
            $cursor.style.display = null;
        });

        proxy(container, 'mouseleave', (event) => {
            this.wf.emit('mouseleave', event);
            $cursor.style.display = 'none';
        });
    }

    scrollbarInit() {
        const {
            events: { proxy },
            options: { container, mediaElement, scrollable },
        } = this.wf;

        const $scrollbar = document.createElement('div');
        addClass($scrollbar, 'wf-scrollbar');
        $scrollbar.style.cssText = `position:absolute;bottom:0;left:0;z-index:2;width:0;border-radius:2px;height:15px;background-color:#ffffff;opacity:0.25;user-select:none;`;
        container.appendChild($scrollbar);
        this.wf.template.scrollbar = $scrollbar;

        function initWidth(duration) {
            const totolWidth = this.wf.getWidthFromDuration(duration);
            const clientWidth = container.clientWidth;
            $scrollbar.style.width = (clientWidth / totolWidth) * 100 + '%';
        }

        function checkConfig(duration) {
            if (this.wf.config.gridGap) {
                initWidth.call(this, duration);
            } else {
                this.wf.once('update', () => {
                    initWidth.call(this, duration);
                });
            }
        }

        if (this.wf.duration && this.wf.duration !== Infinity) {
            checkConfig.call(this, this.wf.duration);
        } else {
            if (mediaElement) {
                proxy(
                    mediaElement,
                    'canplay',
                    () => {
                        checkConfig.call(this, this.wf.duration);
                    },
                    {
                        once: true,
                    },
                );
            }
        }

        $scrollbar.style.display = scrollable ? null : 'none';
        this.wf.on('options', (options) => {
            $scrollbar.style.display = options.scrollable ? null : 'none';
        });
    }

    destroy() {
        cancelAnimationFrame(this.playTimer);
    }
}
