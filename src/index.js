import validator from 'option-validator';
import Emitter from './emitter';
import Events from './events';
import Template from './template';
import Drawer from './drawer';
import Decoder from './decoder';
import Loader from './loader';
import Controller from './controller';

let id = 0;
class WFPlayer extends Emitter {
    static get version() {
        return '__VERSION__';
    }

    static get env() {
        return '__ENV__';
    }

    static get default() {
        return {
            container: '#wfplayer',
            mediaElement: '',
            waveColor: 'rgba(255, 255, 255, 0.1)',
            backgroundColor: 'rgb(28, 32, 34)',
            cursor: true,
            cursorColor: '#ff0000',
            progress: true,
            progressColor: '#fff',
            grid: true,
            gridColor: 'rgba(255, 255, 255, 0.05)',
            ruler: true,
            rulerColor: 'rgba(255, 255, 255, 0.5)',
            rulerAtTop: true,
            pixelRatio: window.devicePixelRatio,
            zoom: 1,
            withCredentials: false,
            cors: false,
            headers: {},
            channel: 0,
            perDuration: 10,
            padding: 5,
        };
    }

    static get scheme() {
        return {
            container: 'string|htmlelement',
            mediaElement: 'string|HTMLVideoElement|HTMLAudioElement',
            waveColor: 'string',
            backgroundColor: 'string',
            cursor: 'boolean',
            cursorColor: 'string',
            progress: 'boolean',
            progressColor: 'string',
            grid: 'boolean',
            gridColor: 'string',
            ruler: 'boolean',
            rulerColor: 'string',
            rulerAtTop: 'boolean',
            pixelRatio: 'number',
            zoom: 'number',
            withCredentials: 'boolean',
            cors: 'boolean',
            headers: 'object',
            channel: 'number',
            perDuration: 'number',
            padding: 'number',
        };
    }

    constructor(options = {}) {
        super();

        this.destroy = false;
        this.options = {};
        this.setOptions(options);

        this.events = new Events(this);
        this.template = new Template(this);
        this.decoder = new Decoder(this);
        this.drawer = new Drawer(this);
        this.controller = new Controller(this);
        this.loader = new Loader(this);

        id += 1;
        this.id = id;
        WFPlayer.instances.push(this);
    }

    get currentTime() {
        return this.options.mediaElement ? this.options.mediaElement.currentTime : 0;
    }

    get duration() {
        return this.options.mediaElement ? this.options.mediaElement.duration : 0;
    }

    setOptions(options = {}) {
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

        this.emit('options', this.options);
        return this;
    }

    load(target) {
        if (target instanceof HTMLVideoElement || target instanceof HTMLAudioElement) {
            this.options.mediaElement = target;
            target = target.src;
        }

        this.loader.load(target);
        this.emit('load', target);
        return this;
    }

    seek(time) {
        this.drawer.seek(time);
        return this;
    }

    zoom(scale, startTime) {
        this.drawer.zoom(scale, startTime);
        return this;
    }

    exportImage() {
        this.template.exportImage();
        return this;
    }

    destroy() {
        this.destroy = true;
        this.events.destroy();
        this.template.destroy();
        this.drawer.destroy();
        this.controller.destroy();
        this.decoder.destroy();
        this.loader.destroy();
        WFPlayer.instances.splice(WFPlayer.instances.indexOf(this), 1);
    }
}

Object.defineProperty(WFPlayer, 'instances', {
    value: [],
});

export default WFPlayer;
