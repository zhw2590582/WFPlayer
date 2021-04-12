import DT from 'duration-time-conversion';
import { clamp } from './utils';

export default class Drawer {
    constructor(wf) {
        this.wf = wf;
        this.canvas = wf.template.canvas;

        const offscreen = this.canvas.transferControlToOffscreen();
        this.worker = new Worker('./worker.js');
        this.worker.postMessage({ canvas: offscreen }, [offscreen]);

        wf.events.proxy(this.worker, 'message', (event) => {
            console.log(event.data);
        });

        this.gridNum = 0;
        this.gridGap = 0;
        this.beginTime = 0;

        this.update();

        wf.on('options', () => {
            this.update();
        });

        wf.on('channelData', () => {
            this.update();
        });
    }

    update() {
        const {
            currentTime,
            options: { container, mediaElement, ...options },
            decoder: {
                channelData,
                audiobuffer: { sampleRate },
            },
        } = this.wf;
        this.worker.postMessage({ options, currentTime, channelData, sampleRate });
    }

    update2() {
        const {
            currentTime,
            options: { cursor, grid, ruler, wave, duration, padding },
        } = this.wf;
        this.gridNum = duration * 10 + padding * 2;
        this.gridGap = this.canvas.width / this.gridNum;
        this.beginTime = Math.floor(currentTime / duration) * duration;

        this.density =
            {
                1: 5,
                2: 4,
                3: 3,
                4: 3,
                5: 2,
                6: 2,
                7: 2,
                8: 2,
            }[Math.floor(this.gridGap)] || 1;

        this.wf.emit('render', {
            padding,
            duration,
            gridGap: this.gridGap,
            gridNum: this.gridNum,
            beginTime: this.beginTime,
        });

        this.drawBackground();
        if (grid) {
            this.drawGrid();
        }
        if (ruler) {
            this.drawRuler();
        }
        if (wave) {
            this.drawWave();
        }
        if (cursor) {
            this.drawCursor();
        }
    }

    drawBackground() {
        const { backgroundColor, paddingColor, padding } = this.wf.options;
        const { width, height } = this.canvas;
        this.ctx.clearRect(0, 0, width, height);
        this.ctx.fillStyle = backgroundColor;
        this.ctx.fillRect(0, 0, width, height);
        this.ctx.fillStyle = paddingColor;
        this.ctx.fillRect(0, 0, padding * this.gridGap, height);
        this.ctx.fillRect(width - padding * this.gridGap, 0, padding * this.gridGap, height);
    }

    drawWave() {
        const {
            currentTime,
            options: { progress, waveColor, progressColor, duration, padding, waveScale },
            decoder: {
                channelData,
                audiobuffer: { sampleRate },
            },
        } = this.wf;
        const { width, height } = this.canvas;
        const middle = height / 2;
        const waveWidth = width - this.gridGap * padding * 2;
        const startIndex = clamp(this.beginTime * sampleRate, 0, Infinity);
        const endIndex = clamp((this.beginTime + duration) * sampleRate, startIndex, Infinity);
        const step = Math.floor((endIndex - startIndex) / waveWidth);
        const cursorX = padding * this.gridGap + (currentTime - this.beginTime) * this.gridGap * 10;

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
                const waveX = this.gridGap * padding + xIndex;
                this.ctx.fillStyle = progress && cursorX >= waveX ? progressColor : waveColor;
                this.ctx.fillRect(
                    waveX,
                    (1 + min * waveScale) * middle,
                    1,
                    Math.max(1, (max - min) * middle * waveScale),
                );
                stepIndex = 0;
                min = 1;
                max = -1;
            }
        }
    }

    drawGrid() {
        const { gridColor, pixelRatio } = this.wf.options;
        const { width, height } = this.canvas;
        this.ctx.fillStyle = gridColor;
        for (let index = 0; index < this.gridNum; index += this.density) {
            this.ctx.fillRect(this.gridGap * index, 0, pixelRatio, height);
        }
        for (let index = 0; index < height / this.gridGap; index += this.density) {
            this.ctx.fillRect(0, this.gridGap * index, width, pixelRatio);
        }
    }

    drawRuler() {
        const { rulerColor, pixelRatio, padding, rulerAtTop } = this.wf.options;
        const { height } = this.canvas;
        const fontSize = 11;
        const fontHeight = 15;
        const fontTop = 30;
        this.ctx.font = `${fontSize * pixelRatio}px Arial`;
        this.ctx.fillStyle = rulerColor;
        let second = -1;
        for (let index = 0; index < this.gridNum; index += 1) {
            if (index && index >= padding && index <= this.gridNum - padding && (index - padding) % 10 === 0) {
                second += 1;
                this.ctx.fillRect(
                    this.gridGap * index,
                    rulerAtTop ? 0 : height - fontHeight * pixelRatio,
                    pixelRatio,
                    fontHeight * pixelRatio,
                );
                if ((index - padding) % (this.density * 10) === 0) {
                    this.ctx.fillText(
                        DT.d2t(this.beginTime + second).split('.')[0],
                        this.gridGap * index - fontSize * pixelRatio * 2 + pixelRatio,
                        rulerAtTop ? fontTop * pixelRatio : height - fontTop * pixelRatio + fontSize,
                    );
                }
            } else if (index && (index - padding) % 5 === 0) {
                this.ctx.fillRect(
                    this.gridGap * index,
                    rulerAtTop ? 0 : height - (fontHeight / 2) * pixelRatio,
                    pixelRatio,
                    (fontHeight / 2) * pixelRatio,
                );
            }
        }
    }

    drawCursor() {
        const {
            currentTime,
            options: { cursorColor, pixelRatio, padding },
        } = this.wf;
        const { height } = this.canvas;
        this.ctx.fillStyle = cursorColor;
        const x = padding * this.gridGap + (currentTime - this.beginTime) * this.gridGap * 10;
        this.ctx.fillRect(x, 0, pixelRatio, height);
    }
}
