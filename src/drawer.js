import { durationToTime, clamp } from './utils';

export default class Drawer {
    constructor(wf) {
        this.wf = wf;
        this.update();

        this.wf.on('options', () => {
            this.update();
        });
    }

    update() {
        const { canvas } = this.wf.template;
        const { cursor, grid, ruler } = this.wf.options;
        const ctx = canvas.getContext('2d');
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        this.updateBackground(ctx);
        if (grid) {
            this.updateGrid(ctx);
        }
        if (ruler) {
            this.updateRuler(ctx);
        }
        if (this.wf.decoder && this.wf.decoder.ready) {
            this.updateWave(ctx);
        }
        if (cursor) {
            this.updateCursor(ctx);
        }
    }

    updateBackground(ctx) {
        const { backgroundColor } = this.wf.options;
        ctx.fillStyle = backgroundColor;
        ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    }

    updateWave(ctx) {
        const { channelData } = this.wf.decoder;
        const { sampleRate } = this.wf.decoder.audiobuffer;
        const { waveColor, perDuration, pixelRatio, padding } = this.wf.options;
        ctx.fillStyle = waveColor;
        const gridNum = perDuration * 10 + padding * 2;
        const gridGap = ctx.canvas.width / gridNum;
        const beginTime = Math.floor(this.wf.currentTime / perDuration) * 10;
        const startIndex = clamp(beginTime * sampleRate, 0, channelData.length - 1);
        const endIndex = clamp((beginTime + perDuration) * sampleRate, startIndex, channelData.length - 1);
        const middle = ctx.canvas.height / 2;
        const width = ctx.canvas.width - gridGap * padding * 2;
        const step = Math.ceil((endIndex - startIndex) / width);
        for (let i = 0; i < width; i += 1) {
            let min = 1.0;
            let max = -1.0;
            for (let j = startIndex; j < step; j += 1) {
                const datum = channelData[i * step + j];
                if (datum < min) {
                    min = datum;
                } else if (datum > max) {
                    max = datum;
                }
            }
            ctx.fillRect(gridGap * padding + i, (1 + min) * middle, pixelRatio, Math.max(1, (max - min) * middle));
        }
    }

    updateGrid(ctx) {
        const { gridColor, perDuration, pixelRatio, padding } = this.wf.options;
        ctx.fillStyle = gridColor;
        const gridNum = perDuration * 10 + padding * 2;
        const gridGap = ctx.canvas.width / gridNum;
        for (let index = 0; index < gridNum; index += 1) {
            ctx.fillRect(gridGap * index, 0, pixelRatio, ctx.canvas.height);
        }
        for (let index = 0; index < ctx.canvas.height / gridGap; index += 1) {
            ctx.fillRect(0, gridGap * index, ctx.canvas.width, pixelRatio);
        }
    }

    updateRuler(ctx) {
        const { rulerColor, perDuration, pixelRatio, padding, rulerAtTop } = this.wf.options;
        let ruler = -1;
        const fontSize = 11;
        ctx.font = `${fontSize * pixelRatio}px Arial`;
        ctx.fillStyle = rulerColor;
        const gridNum = perDuration * 10 + padding * 2;
        const gridGap = ctx.canvas.width / gridNum;
        const beginTime = Math.floor(this.wf.currentTime / perDuration) * 10;
        const { height } = ctx.canvas;
        for (let index = 0; index < gridNum; index += 1) {
            if ((index - padding) % 10 === 0) {
                ruler += 1;
                ctx.fillRect(gridGap * index, rulerAtTop ? 0 : height - gridGap, pixelRatio, gridGap);
                ctx.fillText(
                    durationToTime(beginTime + ruler).split('.')[0],
                    gridGap * index - fontSize * pixelRatio * 2,
                    rulerAtTop ? gridGap * 2 : height - gridGap * 2 + fontSize,
                );
            } else if ((index - padding) % 5 === 0 && index) {
                ctx.fillRect(gridGap * index, rulerAtTop ? 0 : height - gridGap / 2, pixelRatio, gridGap / 2);
            }
        }
    }

    updateCursor(ctx) {
        const { cursorColor, perDuration, pixelRatio, padding } = this.wf.options;
        ctx.fillStyle = cursorColor;
        const gridNum = perDuration * 10 + padding * 2;
        const gridGap = ctx.canvas.width / gridNum;
        const beginTime = Math.floor(this.wf.currentTime / perDuration) * 10;
        ctx.fillRect(
            padding * gridGap + (this.wf.currentTime - beginTime) * gridGap * 10,
            0,
            pixelRatio,
            ctx.canvas.height,
        );
    }

    updateProgress(ctx) {
        const { progressColor } = this.wf.options;
    }
}
