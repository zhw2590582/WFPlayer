import { durationToTime, clamp, getMinAndMax } from './utils';

export default class Drawer {
    constructor(wf) {
        this.wf = wf;
        this.canvas = wf.template.canvas;
        this.ctx = this.canvas.getContext('2d');
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
            options: { cursor, grid, ruler, duration, padding },
        } = this.wf;
        this.gridNum = duration * 10 + padding * 2;
        this.gridGap = this.canvas.width / this.gridNum;
        this.beginTime = Math.floor(currentTime / duration) * duration;
        this.updateBackground();
        if (grid) {
            this.updateGrid();
        }
        if (ruler) {
            this.updateRuler();
        }
        this.updateWave();
        if (cursor) {
            this.updateCursor();
        }
    }

    updateBackground() {
        const { backgroundColor } = this.wf.options;
        const { width, height } = this.canvas;
        this.ctx.clearRect(0, 0, width, height);
        this.ctx.fillStyle = backgroundColor;
        this.ctx.fillRect(0, 0, width, height);
    }

    updateWave() {
        const {
            currentTime,
            options: { progress, waveColor, progressColor, duration, pixelRatio, padding },
            decoder: {
                channelData,
                audiobuffer: { sampleRate },
            },
        } = this.wf;
        const { width, height } = this.canvas;
        const middle = height / 2;
        const waveWidth = width - this.gridGap * padding * 2;
        const startIndex = clamp(this.beginTime * sampleRate, 0, channelData.length);
        const endIndex = clamp((this.beginTime + duration) * sampleRate, startIndex, channelData.length);
        if (endIndex <= startIndex || channelData.length - 1 < endIndex) return;
        const step = Math.floor((endIndex - startIndex) / waveWidth);
        const cursorX = padding * this.gridGap + (currentTime - this.beginTime) * this.gridGap * 10;

        let index = -1;
        const arr = [];
        for (let i = startIndex; i < endIndex; i += 1) {
            arr.push(channelData[i] || 0);
            if (arr.length >= step && index < waveWidth) {
                index += 1;
                const [min, max] = getMinAndMax(arr);
                const waveX = this.gridGap * padding + index;
                this.ctx.fillStyle = progress && cursorX >= waveX ? progressColor : waveColor;
                this.ctx.fillRect(waveX, (1 + min) * middle, pixelRatio, Math.max(1, (max - min) * middle));
                arr.length = 0;
            }
        }
    }

    updateGrid() {
        const { gridColor, pixelRatio } = this.wf.options;
        const { width, height } = this.canvas;
        this.ctx.fillStyle = gridColor;
        for (let index = 0; index < this.gridNum; index += 1) {
            this.ctx.fillRect(this.gridGap * index, 0, pixelRatio, height);
        }
        for (let index = 0; index < height / this.gridGap; index += 1) {
            this.ctx.fillRect(0, this.gridGap * index, width, pixelRatio);
        }
    }

    updateRuler() {
        const { rulerColor, pixelRatio, padding, rulerAtTop } = this.wf.options;
        const { height } = this.canvas;
        const fontSize = 11;
        const fontHeight = 15;
        const fontTop = 30;
        this.ctx.font = `${fontSize * pixelRatio}px Arial`;
        this.ctx.fillStyle = rulerColor;
        let second = -1;
        for (let index = 0; index < this.gridNum; index += 1) {
            if ((index - padding) % 10 === 0) {
                second += 1;
                this.ctx.fillRect(
                    this.gridGap * index,
                    rulerAtTop ? 0 : height - fontHeight * pixelRatio,
                    pixelRatio,
                    fontHeight * pixelRatio,
                );
                this.ctx.fillText(
                    durationToTime(this.beginTime + second).split('.')[0],
                    this.gridGap * index - fontSize * pixelRatio * 2 + pixelRatio,
                    rulerAtTop ? fontTop : height - fontTop + fontSize,
                );
            } else if ((index - padding) % 5 === 0 && index) {
                this.ctx.fillRect(
                    this.gridGap * index,
                    rulerAtTop ? 0 : height - (fontHeight / 2) * pixelRatio,
                    pixelRatio,
                    (fontHeight / 2) * pixelRatio,
                );
            }
        }
    }

    updateCursor() {
        const {
            currentTime,
            options: { cursorColor, pixelRatio, padding },
        } = this.wf;
        const { height } = this.canvas;
        this.ctx.fillStyle = cursorColor;
        this.ctx.fillRect(
            padding * this.gridGap + (currentTime - this.beginTime) * this.gridGap * 10,
            0,
            pixelRatio,
            height,
        );
    }
}
