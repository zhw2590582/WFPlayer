import validator from 'option-validator';
import Emitter from './emitter';
import Events from './events';

let id = 0;
class WFPlayer extends Emitter {
    static get version() {
        return '__VERSION__';
    }

    static get env() {
        return '__ENV__';
    }

    static get default() {
        return {};
    }

    static get scheme() {
        return {};
    }

    constructor(options = {}) {
        super();
        this.setOptions(options);

        this.events = new Events(this);

        id += 1;
        this.id = id;
        WFPlayer.instances.push(this);
    }

    setOptions(options) {
        this.options = validator(
            {
                ...WFPlayer.default,
                ...options,
            },
            WFPlayer.scheme,
        );

        return this;
    }

    destroy() {
        this.events.destroy();
    }
}

Object.defineProperty(WFPlayer, 'instances', {
    value: [],
});

export default WFPlayer;
