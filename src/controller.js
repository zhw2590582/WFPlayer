import { throttle, clamp } from './utils';

export default class Controller {
    constructor(wf) {
        this.wf = wf;
        this.playTimer = null;
        this.init = () => {
            this.clickInit();
            this.resizeInit();
            this.playInit();
        };
    }

    getTimeFromEvent(event) {
        const {
            currentTime,
            template: { canvas },
            options: { duration, padding, container, pixelRatio },
        } = this.wf;
        const gridNum = duration * 10 + padding * 2;
        const gridGap = canvas.width / gridNum;
        const left = clamp(event.pageX - container.offsetLeft - (padding * gridGap) / pixelRatio, 0, Infinity);
        const beginTime = Math.floor(currentTime / duration) * duration;
        const time = beginTime + clamp(((left / gridGap) * pixelRatio) / 10, 0, duration);
        return time;
    }

    clickInit() {
        const {
            template: { canvas },
            events: { proxy },
            options: { mediaElement },
        } = this.wf;
        proxy(canvas, ['click', 'contextmenu'], (event) => {
            const time = this.getTimeFromEvent(event);
            this.wf.emit(event.type, time, event);
            if (mediaElement && mediaElement.currentTime !== time) {
                mediaElement.currentTime = time;
            }
            this.wf.update();
        });
    }

    resizeInit() {
        const { proxy } = this.wf.events;

        const throttleResize = throttle(
            () => {
                this.wf.update();
                this.wf.emit('resize');
            },
            500,
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

        proxy(mediaElement, 'seeked', () => {
            this.wf.update();
        });

        (function loop() {
            this.playTimer = requestAnimationFrame(() => {
                if (this.wf.playing) {
                    this.wf.update();
                    this.wf.emit('playing', mediaElement.currentTime);
                }

                if (!this.wf.isDestroy) {
                    loop.call(this);
                }
            });
        }.call(this));
    }

    destroy() {
        cancelAnimationFrame(this.playTimer);
    }
}
