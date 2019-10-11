import { clamp, throttle } from './utils';

export default class Controller {
    constructor(wf) {
        this.wf = wf;
        this.timer = null;
        this.wf.on('load', () => {
            this.clickInit();
            this.resizeInit();
            this.playInit();
        });
    }

    clickInit() {
        const { canvas } = this.wf.template;
        const { proxy } = this.wf.events;
        proxy(canvas, ['click', 'contextmenu'], event => {
            const { perDuration, padding, container } = this.wf.options;
            const gridNum = perDuration * 10 + padding * 2;
            const gridGap = canvas.width / gridNum;
            const left = clamp(event.pageX - container.offsetLeft - padding * gridGap, 0, Infinity);
            const beginTime = Math.floor(this.wf.currentTime / perDuration) * 10;
            const currentTime = clamp(left / gridGap / 10 + beginTime, beginTime, beginTime + perDuration);
            this.wf.emit(event.type, currentTime, event);
        });
    }

    resizeInit() {
        const throttleResize = throttle(() => {
            this.wf.template.update();
            this.wf.drawer.update();
            this.wf.emit('resize');
        }, 500);

        const { proxy } = this.wf.events;
        proxy(window, ['resize', 'orientationchange'], () => {
            throttleResize();
        });
    }

    playInit() {
        const { mediaElement } = this.wf.options;
        if (!mediaElement) return;
        (function loop() {
            this.timer = requestAnimationFrame(() => {
                const playing = !!(
                    mediaElement.currentTime > 0 &&
                    !mediaElement.paused &&
                    !mediaElement.ended &&
                    mediaElement.readyState > 2
                );

                if (playing) {
                    this.wf.drawer.update();
                    this.wf.emit('play', mediaElement.currentTime);
                }

                if (!this.wf.destroy) {
                    loop.call(this);
                }
            });
        }.call(this));
    }

    destroy() {
        cancelAnimationFrame(this.timer);
    }
}
