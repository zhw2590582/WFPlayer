const isWorker = self.document === undefined;

let wf = null;
let canvas = null;
let ctx = null;
let gridNum = 0;
let gridGap = 0;
let beginTime = 0;
let density = 1;
let sampleRate = 44100;
let channelData = new Float32Array();

function secondToTime(second) {
    const add0 = (num) => (num < 10 ? `0${num}` : String(num));
    const hour = Math.floor(second / 3600);
    const min = Math.floor((second - hour * 3600) / 60);
    const sec = Math.floor(second - hour * 3600 - min * 60);
    return [hour, min, sec].map(add0).join(':');
}

function clamp(num, a, b) {
    return Math.max(Math.min(num, Math.max(a, b)), Math.min(a, b));
}

function getDensity(data) {
    const { pixelRatio } = data.options;
    const fontSize = 11;
    ctx.font = `${fontSize * pixelRatio}px Arial`;
    const rulerWidth = ctx.measureText('99:99:99').width;
    return (function loop(second) {
        const rate = (gridGap * second) / (rulerWidth * 1.5);
        if (rate > 1) return Math.floor(second / 10);
        return loop(second + 10);
    })(10);
}

function drawBackground(data) {
    const { backgroundColor, paddingColor, padding } = data.options;
    const { width, height } = canvas;
    ctx.clearRect(0, 0, width, height);
    ctx.fillStyle = backgroundColor;
    ctx.fillRect(0, 0, width, height);
    ctx.fillStyle = paddingColor;
    ctx.fillRect(0, 0, padding * gridGap, height);
    ctx.fillRect(width - padding * gridGap, 0, padding * gridGap, height);
}

function drawGrid(data) {
    const { currentTime } = data;
    const { gridColor, pixelRatio, scrollable } = data.options;
    const { width, height } = canvas;
    ctx.fillStyle = gridColor;
    for (let index = 0; index < gridNum + 10; index += density) {
        const x = scrollable
            ? gridGap * index - (currentTime - parseInt(currentTime, 10)) * gridGap * 10
            : gridGap * index;
        ctx.fillRect(x, 0, pixelRatio, height);
    }
    for (let index = 0; index < height / gridGap; index += density) {
        ctx.fillRect(0, gridGap * index, width, pixelRatio);
    }
}

function drawRuler(data) {
    const { currentTime } = data;
    const { rulerColor, pixelRatio, padding, rulerAtTop, scrollable } = data.options;
    const { height } = canvas;
    const fontSize = 11;
    const fontHeight = 15;
    const fontTop = 30;
    ctx.font = `${fontSize * pixelRatio}px Arial`;
    ctx.fillStyle = rulerColor;
    let second = -1;
    for (let index = 0; index < gridNum + 10; index += 1) {
        const x = scrollable
            ? gridGap * index - (currentTime - parseInt(currentTime, 10)) * gridGap * 10
            : gridGap * index;
        if (index && index >= padding && index <= gridNum + 10 && (index - padding) % 10 === 0) {
            second += 1;
            ctx.fillRect(x, rulerAtTop ? 0 : height - fontHeight * pixelRatio, pixelRatio, fontHeight * pixelRatio);
            const time = beginTime + second;
            if ((index - padding) % (density * 10) === 0 && time > 0) {
                ctx.fillText(
                    secondToTime(time),
                    x - fontSize * pixelRatio * 2 + pixelRatio,
                    rulerAtTop ? fontTop * pixelRatio : height - fontTop * pixelRatio + fontSize,
                );
            }
        } else if (index && (index - padding) % 5 === 0) {
            ctx.fillRect(
                x,
                rulerAtTop ? 0 : height - (fontHeight / 2) * pixelRatio,
                pixelRatio,
                (fontHeight / 2) * pixelRatio,
            );
        }
    }
}

function drawWave(data) {
    const {
        currentTime,
        options: { progress, waveColor, progressColor, duration, padding, waveScale, scrollable },
    } = data;
    const { width, height } = canvas;
    const middle = height / 2;
    const waveWidth = width - gridGap * padding * 2;
    const startIndex = Math.floor(beginTime * sampleRate);
    const endIndex = Math.floor(clamp((beginTime + duration) * sampleRate, startIndex, Infinity));
    const step = Math.floor((endIndex - startIndex) / waveWidth);
    const cursorX = scrollable ? width / 2 : padding * gridGap + (currentTime - beginTime) * gridGap * 10;
    let stepIndex = 0;
    let xIndex = 0;
    let min = 1;
    let max = -1;
    for (let i = startIndex; i < endIndex; i += 1) {
        stepIndex += 1;
        const item = channelData[i] || 0;
        if (item < min) {
            min = item;
        } else if (item > max) {
            max = item;
        }
        if (stepIndex >= step && xIndex < waveWidth) {
            xIndex += 1;
            const waveX = gridGap * padding + xIndex;
            ctx.fillStyle = progress && cursorX >= waveX ? progressColor : waveColor;
            ctx.fillRect(waveX, (1 + min * waveScale) * middle, 1, Math.max(1, (max - min) * middle * waveScale));
            stepIndex = 0;
            min = 1;
            max = -1;
        }
    }
}

function drawCursor(data) {
    const {
        currentTime,
        options: { cursorColor, pixelRatio, padding, scrollable },
    } = data;
    const { height, width } = canvas;
    ctx.fillStyle = cursorColor;
    const x = scrollable ? width / 2 : padding * gridGap + (currentTime - beginTime) * gridGap * 10;
    ctx.fillRect(x, 0, pixelRatio, height);
}

self.onmessage = function onmessage(event) {
    const { type, data } = event.data;

    if (type === 'INIT') {
        if (isWorker) {
            canvas = new OffscreenCanvas(data.width, data.height);
        } else {
            wf = data.wf;
            canvas = data.canvas;
        }
        ctx = canvas.getContext('2d');
    }

    if (type === 'DECODE') {
        sampleRate = data.sampleRate;
        channelData = data.channelData;
    }

    if (type === 'UPDATE') {
        const {
            width,
            height,
            currentTime,
            options: { cursor, grid, ruler, wave, duration, padding, scrollable },
        } = data;

        if (canvas.width !== width) {
            canvas.width = width;
        }

        if (canvas.height !== height) {
            canvas.height = height;
        }

        gridNum = duration * 10 + padding * 2;
        gridGap = width / gridNum;
        beginTime = scrollable ? currentTime - duration / 2 : Math.floor(currentTime / duration) * duration;
        density = getDensity(data);

        drawBackground(data);

        if (grid) {
            drawGrid(data);
        }

        if (ruler) {
            drawRuler(data);
        }

        if (wave) {
            drawWave(data);
        }

        if (cursor) {
            drawCursor(data);
        }

        const { byteLength } = channelData;
        const config = {
            padding,
            duration,
            gridGap,
            gridNum,
            beginTime,
            currentTime,
            density,
            width,
            height,
            sampleRate,
            byteLength,
        };

        if (isWorker) {
            self.postMessage({
                type: 'UPFATE',
                data: {
                    config,
                    imageBitmap: canvas.transferToImageBitmap(),
                },
            });
        } else {
            wf.emit('update', config);
        }
    }
};

if (typeof exports !== 'undefined' && !isWorker) {
    exports.postMessage = (data) => {
        self.onmessage({ data });
    };
}
