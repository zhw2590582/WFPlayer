import { durationToTime } from './utils';

export default class Drawer {
    constructor(wf) {
        this.wf = wf;
        this.update();
    }

    update() {
        const { canvas } = this.wf.template;
        const { cursor, progress, grid, ruler } = this.wf.options;
        const ctx = canvas.getContext('2d');
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        this.updateBackground(ctx);
        if (grid) {
            this.updateGrid(ctx);
        }
        if (ruler) {
            this.updateRuler(ctx);
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
        ctx.font = `${11 * pixelRatio}px Arial`;
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
                    gridGap * index - 22 * pixelRatio,
                    rulerAtTop ? gridGap * 2 : height - gridGap * 2 + 11,
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

    updateWave(ctx) {
        const { waveColor } = this.wf.options;
    }
}
