export default class Events {
    constructor() {
        this.destroyEvents = [];
        this.proxy = this.proxy.bind(this);
    }

    proxy(target, name, callback, option = {}) {
        if (Array.isArray(name)) {
            return name.map((item) => this.proxy(target, item, callback, option));
        }

        target.addEventListener(name, callback, option);
        const destroyEvent = () => target.removeEventListener(name, callback, option);
        this.destroyEvents.push(destroyEvent);
        return destroyEvent;
    }

    destroy() {
        this.destroyEvents.forEach((event) => event());
    }
}
