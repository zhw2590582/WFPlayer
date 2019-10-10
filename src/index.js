import validator from 'option-validator';
import Emitter from './emitter';
import Events from './events';
import Template from './template';
import Drawer from './drawer';

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
            waveColor: '#fff',
            backgroundColor: '#000',
            cursor: true,
            cursorColor: '#fff',
            progress: true,
            progressColor: '#fff',
            grid: true,
            gridColor: '#fff',
            pixelRatio: window.devicePixelRatio,
        };
    }

    static get scheme() {
        return {
            container: 'string|HTMLDivElement',
            mediaElement: 'string|HTMLVideoElement|HTMLAudioElement',
            waveColor: 'string',
            backgroundColor: 'string',
            cursor: 'boolean',
            cursorColor: 'string',
            progress: 'boolean',
            progressColor: 'string',
            grid: 'boolean',
            gridColor: 'string',
            pixelRatio: 'number',
        };
    }

    constructor(options = {}) {
        super();
        this.options = {};
        this.setOptions(options);

        this.events = new Events(this);
        this.template = new Template(this);
        this.drawer = new Drawer(this);

        id += 1;
        this.id = id;
        WFPlayer.instances.push(this);
    }

    setOptions(options) {
        if (typeof options.container === 'string') {
            options.container = document.querySelector(options.container);
        }

        if (options.mediaElement === 'string') {
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

        return this;
    }

    seek(time) {
        this.drawer.seek(time);
        return this;
    }

    zoom(scale) {
        this.drawer.zoom(scale);
        return this;
    }

    destroy() {
        this.events.destroy();
        return this;
    }
}

Object.defineProperty(WFPlayer, 'instances', {
    value: [],
});

export default WFPlayer;
