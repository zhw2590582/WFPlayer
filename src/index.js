import validator from 'option-validator';
import Emitter from './emitter';
import Events from './events';
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

        if (typeof this.options.container === 'string') {
            this.options.container = document.querySelector(this.options.container);
        }

        if (this.options.mediaElement && typeof this.options.mediaElement === 'string') {
            this.options.mediaElement = document.querySelector(this.options.mediaElement);
        }

        this.events = new Events(this);
        this.drawer = new Drawer(this);

        id += 1;
        this.id = id;
        WFPlayer.instances.push(this);
    }

    setOptions(options) {
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
    }

    destroy() {
        this.events.destroy();
    }
}

Object.defineProperty(WFPlayer, 'instances', {
    value: [],
});

export default WFPlayer;
