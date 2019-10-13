import throttle from 'lodash/throttle';
import { clamp } from './utils';

export default class Controller {
    constructor(wf) {
        this.wf = wf;
        this.playTimer = null;
        this.wf.on('load', () => {
            this.clickInit();
            this.resizeInit();
            this.playInit();
        });
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
        const time = clamp(((left / gridGap) * pixelRatio) / 10 + beginTime, beginTime, beginTime + duration);
        return time;
    }

    clickInit() {
        const {
            template: { canvas },
            events: { proxy },
        } = this.wf;
        proxy(canvas, ['click', 'contextmenu'], event => {
            const time = this.getTimeFromEvent(event);
            this.wf.emit(event.type, time, event);
        });
    }

    moveInit() {
        const {
            template: { canvas },
            events: { proxy },
        } = this.wf;

        let isDroging = false;
        let startTime = 0;
        let endTime = 0;
        proxy(canvas, 'mousedown', event => {
            isDroging = true;
            startTime = this.getTimeFromEvent(event);
            this.wf.emit(event.type, startTime, event);
        });

        proxy(document, 'mousemove', event => {
            if (!isDroging) return;
            endTime = this.getTimeFromEvent(event);
            this.wf.emit(event.type, endTime, event);
        });

        proxy(document, 'mouseup', event => {
            const startTimeCopy = startTime;
            const endTimeCopy = endTime;
            startTime = 0;
            endTime = 0;
            if (!endTimeCopy) return;
            const minTime = Math.floor(Math.min(startTimeCopy, endTimeCopy));
            const maxTime = Math.ceil(Math.max(startTimeCopy, endTimeCopy));
            const duration = maxTime - minTime;
            if (duration < 1) return;
            if (!isDroging) return;
            isDroging = false;
            this.wf.emit(
                event.type,
                {
                    minTime,
                    maxTime,
                    duration,
                },
                event,
            );
        });
    }

    resizeInit() {
        const {
            template,
            drawer,
            events: { proxy },
        } = this.wf;
        const throttleResize = throttle(() => {
            template.update();
            drawer.update();
            this.wf.emit('resize');
        }, 500);
        proxy(window, ['resize', 'orientationchange'], () => {
            throttleResize();
        });
    }

    playInit() {
        const {
            drawer,
            options: { mediaElement },
        } = this.wf;
        if (!mediaElement) return;
        (function loop() {
            this.playTimer = requestAnimationFrame(() => {
                if (this.wf.playing) {
                    drawer.update();
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
