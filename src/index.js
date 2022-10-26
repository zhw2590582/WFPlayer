import validator from 'option-validator';
import Emitter from './emitter';
import Events from './events';
import Template from './template';
import Drawer from './drawer';
import Decoder from './decoder';
import Loader from './loader';
import Controller from './controller';
import style from 'bundle-text:./style.less';
import { clamp, errorHandle, addClass, removeClass } from './utils';

let id = 0;
const instances = [];
export default class WFPlayer extends Emitter {
    static get instances() {
        return instances;
    }

    static get version() {
        return process.env.APP_VER;
    }

    static get env() {
        return process.env.NODE_ENV;
    }

    static get default() {
        return {
            container: '#waveform',
            mediaElement: null,
            useWorker: true,
            wave: true,
            waveColor: 'rgba(255, 255, 255, 0.1)',
            backgroundColor: 'rgb(28, 32, 34)',
            paddingColor: 'rgba(255, 255, 255, 0.05)',
            cursor: true,
            cursorColor: '#ff0000',
            progress: true,
            progressColor: 'rgba(255, 255, 255, 0.5)',
            grid: true,
            gridColor: 'rgba(255, 255, 255, 0.05)',
            ruler: true,
            rulerColor: 'rgba(255, 255, 255, 0.5)',
            scrollbar: true,
            scrollbarColor: 'rgba(255, 255, 255, 0.25)',
            rulerAtTop: true,
            scrollable: false,
            refreshDelay: 50,
            channel: 0,
            duration: 10,
            padding: 5,
            waveScale: 0.8,
            waveSize: 1,
            pixelRatio: Math.ceil(window.devicePixelRatio),
        };
    }

    static get scheme() {
        return {
            container: 'htmlelement|htmldivelement',
            mediaElement: 'null|htmlvideoelement|htmlaudioelement',
            useWorker: 'boolean',
            wave: 'boolean',
            waveColor: 'string',
            backgroundColor: 'string',
            paddingColor: 'string',
            cursor: 'boolean',
            cursorColor: 'string',
            progress: 'boolean',
            progressColor: 'string',
            grid: 'boolean',
            gridColor: 'string',
            ruler: 'boolean',
            rulerColor: 'string',
            scrollbar: 'boolean',
            scrollbarColor: 'string',
            rulerAtTop: 'boolean',
            scrollable: 'boolean',
            refreshDelay: 'number',
            channel: 'number',
            duration: 'number',
            padding: 'number',
            waveScale: 'number',
            waveSize: 'number',
            pixelRatio: 'number',
        };
    }

    constructor(options = {}) {
        super();

        this._seekTimer = null;
        this._currentTime = 0;
        this.isDestroy = false;
        this.grabbing = false;
        this.options = {};
        this.setOptions(options);

        this.events = new Events(this);
        this.template = new Template(this);
        this.decoder = new Decoder(this);
        this.drawer = new Drawer(this);
        this.controller = new Controller(this);
        this.loader = new Loader(this);

        this.update();

        id += 1;
        this.id = id;
        instances.push(this);
    }

    get currentTime() {
        return this.options.mediaElement ? this.options.mediaElement.currentTime : this._currentTime;
    }

    get duration() {
        return this.options.mediaElement ? this.options.mediaElement.duration : Infinity;
    }

    get playing() {
        const { mediaElement } = this.options;
        if (mediaElement) {
            return !!(
                mediaElement.currentTime > 0 &&
                !mediaElement.paused &&
                !mediaElement.ended &&
                mediaElement.readyState > 2
            );
        }
        return false;
    }

    get canvas() {
        return this.template.canvas;
    }

    get config() {
        return this.drawer.config;
    }

    get proxy() {
        return this.events.proxy;
    }

    setOptions(options = {}) {
        errorHandle(validator.kindOf(options) === 'object', 'setOptions expects to receive object as a parameter.');

        if (typeof options.container === 'string') {
            options.container = document.querySelector(options.container);
        }

        if (typeof options.mediaElement === 'string') {
            options.mediaElement = document.querySelector(options.mediaElement);
        }

        this.options = validator(
            {
                ...WFPlayer.default,
                ...this.options,
                ...options,
            },
            WFPlayer.scheme,
        );

        this.options.channel = Math.abs(Math.floor(this.options.channel));
        this.options.duration = Math.abs(Math.floor(this.options.duration));
        this.options.padding = Math.abs(Math.floor(this.options.padding));
        this.options.pixelRatio = Math.abs(Math.floor(this.options.pixelRatio));
        this.options.waveSize = Math.abs(Math.floor(this.options.waveSize));
        this.options.waveScale = Math.abs(this.options.waveScale);

        if (this.options.duration % 2 !== 0) {
            this.options.duration -= 1;
        }

        this.emit('options', this.options);

        if (this.options.scrollable) {
            addClass(this.options.container, 'wf-scrollable');
        } else {
            removeClass(this.options.container, 'wf-scrollable');
        }

        this.update();
        return this;
    }

    load(target) {
        // Audiobuffer
        if (target && typeof target.getChannelData === 'function') {
            this.decoder.decodeSuccess(target);
            this.controller.init();
            return this;
        }

        // Uint8Array
        if (target && target.buffer) {
            this.decoder.decodeAudioData(target);
            this.controller.init();
            return this;
        }

        // HTMLVideoElement or HTMLAudioElement
        if (target instanceof HTMLVideoElement || target instanceof HTMLAudioElement) {
            this.options.mediaElement = target;
            target = target.currentSrc || target.src;
        }

        errorHandle(
            typeof target === 'string' && target.trim(),
            `The load target is not a string. If you are loading a mediaElement, make sure the mediaElement.src is not empty.`,
        );

        // String Url
        this.loader.load(target);
        this.controller.init();
        return this;
    }

    getCurrentTimeFromEvent(event) {
        const { container } = this.options;
        const { padding, beginTime, gridGap, pixelRatio } = this.drawer.config;
        const left = event.pageX - container.getBoundingClientRect().left;
        const paddingWidth = (padding * gridGap) / pixelRatio;
        const offsetLeft = left - paddingWidth;
        const duration = this.getDurationFromWidth(offsetLeft);
        return duration + beginTime;
    }

    getDurationFromWidth(width) {
        const { gridGap, pixelRatio } = this.drawer.config;
        return width / ((gridGap / pixelRatio) * 10);
    }

    getWidthFromDuration(duration) {
        const { gridGap, pixelRatio } = this.drawer.config;
        return (gridGap / pixelRatio) * 10 * duration;
    }

    getLeftFromTime(time) {
        const { gridGap, pixelRatio, beginTime, padding } = this.drawer.config;
        const width = this.getWidthFromDuration(time - beginTime);
        return width + (padding * gridGap) / pixelRatio;
    }

    checkVisible(start, end) {
        const { beginTime, duration } = this.drawer.config;
        if (typeof start !== 'number' || typeof end !== 'number') return false;
        if (start >= end) return false;
        if (end < beginTime) return false;
        if (start > beginTime + duration) return false;
        return true;
    }

    checkCurrent(start, end) {
        return this.checkVisible(start, end) && this.currentTime >= start && this.currentTime <= end;
    }

    seek(second) {
        errorHandle(typeof second === 'number', 'seek expects to receive number as a parameter.');
        cancelAnimationFrame(this._seekTimer);
        this._currentTime = clamp(second, 0, this.duration);
        if (this.options.mediaElement && this.options.mediaElement.currentTime !== this._currentTime) {
            this.options.mediaElement.currentTime = this._currentTime;
        }
        this.update();
        return this;
    }

    smoothSeek(second, duration = 0.2) {
        return new Promise((resolve) => {
            errorHandle(typeof second === 'number', 'smoothSeek expects to receive number as a parameter.');
            cancelAnimationFrame(this._seekTimer);
            const clampSecond = clamp(second, 0, this.duration);
            const diff = clampSecond - this.currentTime;
            if (diff === 0) return resolve(this);
            const step = diff / duration / 100;
            const { mediaElement } = this.options;
            const { playing } = this;
            if (playing) mediaElement.pause();

            (function loop() {
                this._seekTimer = requestAnimationFrame(() => {
                    if ((diff > 0 && this.currentTime < clampSecond) || (diff < 0 && this.currentTime > clampSecond)) {
                        this.seek(this.currentTime + step);
                        if (!this.isDestroy) loop.call(this);
                    } else {
                        this.seek(clampSecond);
                        if (playing) mediaElement.play();
                        resolve(this);
                    }
                });
            }.call(this));
        });
    }

    changeChannel(channel) {
        this.decoder.changeChannel(channel);
        this.setOptions({ channel });
        this.update();
        return this;
    }

    exportImage() {
        this.template.exportImage();
        return this;
    }

    update() {
        if (this.template && this.drawer) {
            this.template.update();
            this.drawer.update();
        }
        return this;
    }

    reset() {
        this.decoder.destroy();
        return this;
    }

    destroy() {
        this.isDestroy = true;
        this.events.destroy();
        this.template.destroy();
        this.controller.destroy();
        this.decoder.destroy();
        this.loader.destroy();
        this.drawer.destroy();
        instances.splice(instances.indexOf(this), 1);
        return this;
    }
}

if (typeof document !== 'undefined') {
    if (!document.getElementById('wfplayer-style')) {
        const $style = document.createElement('style');
        $style.id = 'wfplayer-style';
        $style.textContent = style;
        document.head.appendChild($style);
    }
}

if (typeof window !== 'undefined') {
    window['WFPlayer'] = WFPlayer;
}
