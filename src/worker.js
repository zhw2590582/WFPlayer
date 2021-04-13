let canvas = null;
let ctx = null;
let gridNum = 0;
let gridGap = 0;
let beginTime = 0;
let density = 1;
let sampleRate = 44100;
let channelData = new Float32Array();

function secondToTime(second = 0) {
    const add0 = (num) => (num < 10 ? `0${num}` : String(num));
    const hour = Math.floor(second / 3600);
    const min = Math.floor((second - hour * 3600) / 60);
    const sec = Math.floor(second - hour * 3600 - min * 60);
    return (hour > 0 ? [hour, min, sec] : [min, sec]).map(add0).join(':');
}

function clamp(num, a, b) {
    return Math.max(Math.min(num, Math.max(a, b)), Math.min(a, b));
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
    const { gridColor, pixelRatio } = data.options;
    const { width, height } = canvas;
    ctx.fillStyle = gridColor;
    for (let index = 0; index < gridNum; index += density) {
        ctx.fillRect(gridGap * index, 0, pixelRatio, height);
    }
    for (let index = 0; index < height / gridGap; index += density) {
        ctx.fillRect(0, gridGap * index, width, pixelRatio);
    }
}

function drawRuler(data) {
    const { rulerColor, pixelRatio, padding, rulerAtTop } = data.options;
    const { height } = canvas;
    const fontSize = 11;
    const fontHeight = 15;
    const fontTop = 30;
    ctx.font = `${fontSize * pixelRatio}px Arial`;
    ctx.fillStyle = rulerColor;
    let second = -1;
    for (let index = 0; index < gridNum; index += 1) {
        if (index && index >= padding && index <= gridNum - padding && (index - padding) % 10 === 0) {
            second += 1;
            ctx.fillRect(
                gridGap * index,
                rulerAtTop ? 0 : height - fontHeight * pixelRatio,
                pixelRatio,
                fontHeight * pixelRatio,
            );
            if ((index - padding) % (density * 10) === 0) {
                ctx.fillText(
                    secondToTime(beginTime + second),
                    gridGap * index - fontSize * pixelRatio * 2 + pixelRatio,
                    rulerAtTop ? fontTop * pixelRatio : height - fontTop * pixelRatio + fontSize,
                );
            }
        } else if (index && (index - padding) % 5 === 0) {
            ctx.fillRect(
                gridGap * index,
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
        options: { progress, waveColor, progressColor, duration, padding, waveScale },
    } = data;
    const { width, height } = canvas;
    const middle = height / 2;
    const waveWidth = width - gridGap * padding * 2;
    const startIndex = clamp(beginTime * sampleRate, 0, Infinity);
    const endIndex = clamp((beginTime + duration) * sampleRate, startIndex, Infinity);
    const step = Math.floor((endIndex - startIndex) / waveWidth);
    const cursorX = padding * gridGap + (currentTime - beginTime) * gridGap * 10;

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
        options: { cursorColor, pixelRatio, padding },
    } = data;
    const { height } = canvas;
    ctx.fillStyle = cursorColor;
    const x = padding * gridGap + (currentTime - beginTime) * gridGap * 10;
    ctx.fillRect(x, 0, pixelRatio, height);
}

self.onmessage = (event) => {
    const { type, data } = event.data;

    if (type === 'INIT') {
        canvas = new OffscreenCanvas(data.width, data.height);
        ctx = canvas.getContext('2d');
    }

    if (type === 'CHANNE_DATA') {
        sampleRate = data.sampleRate;
        channelData = data.channelData;
    }

    if (type === 'UPDATE') {
        const {
            currentTime,
            options: { cursor, grid, ruler, wave, duration, padding },
        } = data;
        const { width, height } = canvas;

        gridNum = duration * 10 + padding * 2;
        gridGap = width / gridNum;
        beginTime = Math.floor(currentTime / duration) * duration;

        density =
            {
                1: 5,
                2: 4,
                3: 3,
                4: 3,
                5: 2,
                6: 2,
                7: 2,
                8: 2,
            }[Math.floor(gridGap)] || 1;

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

        postMessage({
            type: 'RENDER',
            date: {
                padding,
                duration,
                gridGap,
                gridNum,
                beginTime,
                width,
                height,
            },
        });

        postMessage({
            type: 'DRAW',
            data: canvas.transferToImageBitmap(),
        });
    }
};

if (typeof exports !== 'undefined') {
    exports.onmessage = self.onmessage;
}
