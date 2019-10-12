import DT from 'duration-time-conversion';

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

export function durationToTime(duration = 0) {
    return DT.d2t(duration.toFixed(3));
}

export function timeToDuration(time) {
    return DT.t2d(time);
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

export function getMinAndMax(arr) {
    let min = 1;
    let max = -1;
    for (let i = 0; i < arr.length; i += 1) {
        const item = arr[i];
        if (item < min) {
            min = item;
        } else if (item > max) {
            max = item;
        }
    }
    return [min, max];
}

export function clamp(num, a, b) {
    return Math.max(Math.min(num, Math.max(a, b)), Math.min(a, b));
}
