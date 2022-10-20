export class WFPlayerError extends Error {
    constructor(message) {
        super(message);
        this.name = 'WFPlayerError';
    }
}

export function errorHandle(condition, msg) {
    if (!condition) throw new WFPlayerError(msg);
    return condition;
}

export function mergeBuffer(...buffers) {
    const Cons = buffers[0].constructor;
    return buffers.reduce((pre, val) => {
        const merge = new Cons((pre.byteLength | 0) + (val.byteLength | 0));
        merge.set(pre, 0);
        merge.set(val, pre.byteLength | 0);
        return merge;
    }, new Cons());
}

export function clamp(num, a, b) {
    return Math.max(Math.min(num, Math.max(a, b)), Math.min(a, b));
}

export function throttle(func, delay, context) {
    let prev = Date.now();
    return (...args) => {
        const now = Date.now();
        if (now - prev >= delay) {
            func.apply(context, args);
            prev = Date.now();
        }
    };
}

export function addClass(el, className) {
    return el.classList.add(className);
}

export function removeClass(el, className) {
    return el.classList.remove(className);
}
