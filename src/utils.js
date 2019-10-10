export class WFPlayerError extends Error {
    constructor(message) {
        super(message);
        this.name = 'WFPlayerError';
    }
}

export function errorHandle(condition, msg) {
    if (!condition) {
        throw new WFPlayerError(msg);
    }
    return condition;
}

export function checkReadableStream() {
    return (
        typeof window.ReadableStream === 'function' &&
        typeof window.Response === 'function' &&
        Object.prototype.hasOwnProperty.call(window.Response.prototype, 'body')
    );
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

export function sleep(ms = 0) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

export function hasOwnProperty(obj, name) {
    return Object.prototype.hasOwnProperty.call(obj, name);
}

export function clamp(num, a, b) {
    return Math.max(Math.min(num, Math.max(a, b)), Math.min(a, b));
}
