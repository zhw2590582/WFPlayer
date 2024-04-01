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
let lastDataString = '';

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
    if (gridGap === 0) return 1;
    const fontSize = 11;
    ctx.font = `${fontSize * data.pixelRatio}px Arial`;
    const rulerWidth = ctx.measureText('99:99:99').width;
    return (function loop(second) {
        const rate = (gridGap * second) / (rulerWidth * 1.5);
        if (rate > 1) return Math.floor(second / 10);
        return loop(second + 10);
    })(10);
}

function drawBackground(data) {
    const { width, height, backgroundColor, paddingColor, padding } = data;
    ctx.clearRect(0, 0, width, height);
    ctx.fillStyle = backgroundColor;
    ctx.fillRect(0, 0, width, height);
    ctx.fillStyle = paddingColor;
    ctx.fillRect(0, 0, padding * gridGap, height);
    ctx.fillRect(width - padding * gridGap, 0, padding * gridGap, height);
}

function drawGrid(data) {
    const { width, height, currentTime, gridColor, pixelRatio, scrollable, waveAlign } = data;
    ctx.fillStyle = gridColor;
    for (let index = 0; index < gridNum + 10; index += density) {
        // maybe just use x = gridGap * index, other statement is not useful
        let x;
        if (scrollable) {
            if (waveAlign === 'left') {
                x = gridGap * index;
            } else {
                x = gridGap * index - (currentTime - parseInt(currentTime, 10)) * gridGap * 10;
            }
        } else {
            x = gridGap * index;
        }
        ctx.fillRect(x, 0, pixelRatio, height);
    }
    for (let index = 0; index < height / gridGap; index += density) {
        ctx.fillRect(0, gridGap * index, width, pixelRatio);
    }
}

function drawRuler(data) {
    const { height, currentTime, rulerColor, pixelRatio, padding, rulerAtTop, scrollable, waveAlign } = data;
    const fontSize = 11;
    const fontHeight = 15;
    const fontTop = 30;
    ctx.font = `${fontSize * pixelRatio}px Arial`;
    ctx.fillStyle = rulerColor;
    let second = -1;
    for (let index = 0; index < gridNum + 10; index += 1) {
        let x;
        if (scrollable) {
            if (waveAlign === 'left') {
                x = gridGap * index;
            } else {
                x = gridGap * index - (currentTime - parseInt(currentTime, 10)) * gridGap * 10;
            }
        } else {
            x = gridGap * index;
        }
        if ((index - padding) % 10 === 0) {
            second += 1;
            ctx.fillRect(x, rulerAtTop ? 0 : height - fontHeight * pixelRatio, pixelRatio, fontHeight * pixelRatio);
            const time = Math.floor(beginTime + second);
            if (time % density === 0 && time >= 0) {
                ctx.fillText(
                    secondToTime(time),
                    x - fontSize * pixelRatio * 2 + pixelRatio,
                    rulerAtTop ? fontTop * pixelRatio : height - fontTop * pixelRatio + fontSize,
                );
            }
        } else if ((index - padding) % 5 === 0) {
            ctx.fillRect(
                x,
                rulerAtTop ? 0 : height - (fontHeight / 2) * pixelRatio,
                pixelRatio,
                (fontHeight / 2) * pixelRatio,
            );
        }
    }
}

/**
 * draw wave by data
 *
 * @param {Object} data
 */
function drawWave(data) {
    const {
        width,
        height,
        currentTime,
        progress,
        waveColor,
        progressColor,
        duration,
        padding,
        waveScale,
        waveSize,
        scrollable,
        waveBorder,
        waveBorderWidth,
        waveBorderColor,
        waveAlign,
    } = data;

    const middle = height / 2;
    const waveWidth = width - gridGap * padding * 2;
    const startIndex = Math.floor(beginTime * sampleRate);
    const endIndex = Math.floor(clamp((beginTime + duration) * sampleRate, startIndex, Infinity));
    const step = Math.floor((endIndex - startIndex) / waveWidth);
    let cursorX;
    if (scrollable) {
        // really is not useful, there is no padding between the wave and the canvas edge
        if (waveAlign === 'left') {
            cursorX = gridGap * padding;
        } else {
            cursorX = width / 2;
        }
    } else {
        cursorX = gridGap * padding + (currentTime - beginTime) * gridGap * 10;
    }
    let stepIndex = 0;
    let xIndex = 0;
    let min = 1;
    let max = -1;
    for (let i = startIndex; i < endIndex; i += waveSize) {
        stepIndex += 1;
        const item = channelData[i] || 0;
        if (item < min) {
            min = item;
        } else if (item > max) {
            max = item;
        }
        if (stepIndex >= step && xIndex < waveWidth) {
            const waveX = gridGap * padding + xIndex;

            if (waveBorder) {
                ctx.strokeStyle = waveBorderColor; // Set the border color
                ctx.lineWidth = waveBorderWidth; // Set the border width

                // Draw the border around the rectangle
                ctx.strokeRect(
                    waveX,
                    (1 + min * waveScale) * middle,
                    waveSize,
                    Math.max(1, (max - min) * middle * waveScale),
                );
            }

            // Fill the rectangle with the desired color
            ctx.fillStyle = progress && cursorX >= waveX ? progressColor : waveColor;
            ctx.fillRect(
                waveX + (waveBorder ? waveBorderWidth / 2 : 0), // Offset the x-coordinate to accommodate the border
                (1 + min * waveScale) * middle + (waveBorder ? waveBorderWidth / 2 : 0), // Offset the y-coordinate
                waveSize - (waveBorder ? waveBorderWidth : 0), // Adjust the width for the border
                Math.max(1, (max - min) * middle * waveScale) - (waveBorder ? waveBorderWidth : 0), // Adjust the height for the border
            );

            xIndex += waveSize;
            stepIndex = 0;
            min = 1;
            max = -1;
        }
    }
}

function drawScrollbar(data) {
    const { width, height, currentTime, pixelRatio, rulerAtTop, totolDuration, scrollable, scrollbarColor } = data;
    if (!scrollable || !totolDuration || totolDuration === Infinity) return;
    const totolWidth = (gridGap / pixelRatio) * 10 * totolDuration;
    const scrollbarWidth = (width / totolWidth) * width;
    const scrollbarHeight = 5 * pixelRatio;
    const scrollbarLeft = (currentTime / totolDuration) * (width - scrollbarWidth);
    const scrollbarTop = rulerAtTop ? height - scrollbarHeight : 0;
    ctx.fillStyle = scrollbarColor;
    ctx.fillRect(scrollbarLeft, scrollbarTop, scrollbarWidth, scrollbarHeight);
}

/**
 * draw cursor line by currentTime
 *
 * if scrollable is true, and waveAlign is not left, the cursor will be drawn in the middle of the canvas
 * if scrollable is true, and waveAlign is left, the cursor will be drawn at the left of the canvas
 * if scrollable is false, the cursor will be drawn at the currentTime position
 *
 * @param {Object} data
 */
function drawCursor(data) {
    const { height, width, currentTime, cursorColor, pixelRatio, padding, scrollable, waveAlign } = data;
    ctx.fillStyle = cursorColor;
    let x;
    if (scrollable) {
        if (waveAlign === 'left') {
            x = padding * gridGap;
        } else {
            x = width / 2;
        }
    } else {
        x = padding * gridGap + (currentTime - beginTime) * gridGap * 10;
    }
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
        const dataString = JSON.stringify(data);
        if (lastDataString === dataString) {
            return (lastDataString = dataString);
        }

        if (canvas.width !== data.width) {
            canvas.width = data.width;
        }

        if (canvas.height !== data.height) {
            canvas.height = data.height;
        }

        const { byteLength } = channelData;
        gridNum = data.duration * 10 + data.padding * 2;
        gridGap = data.width / gridNum;
        density = getDensity(data);
        // calculate the begin time
        if (data.scrollable) {
            // if waveAlign is left, the beginTime is 0, make sure the wave align left
            if (data.waveAlign === 'left') {
                beginTime = data.currentTime;
            } else {
                beginTime = data.currentTime - data.duration / 2;
            }
        } else {
            beginTime = Math.floor(data.currentTime / data.duration) * data.duration;
        }

        drawBackground(data);

        if (data.grid) {
            drawGrid(data);
        }

        if (data.ruler) {
            drawRuler(data);
        }

        if (data.wave) {
            drawWave(data);
        }

        if (data.scrollbar) {
            drawScrollbar(data);
        }

        if (data.cursor) {
            drawCursor(data);
        }

        const config = {
            gridNum,
            gridGap,
            beginTime,
            density,
            sampleRate,
            byteLength,
            ...data,
        };

        if (isWorker) {
            self.postMessage({
                type: 'UPDATE',
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

export const postMessage = (data) => {
    self.onmessage({ data });
};
