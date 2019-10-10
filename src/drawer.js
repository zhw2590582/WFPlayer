export default class Drawer {
    constructor(wf) {
        this.wf = wf;
        this.wf.on('peaks', peaks => {
            this.update(peaks);
        });
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
        this.updateWave(ctx);
        if (progress) {
            this.updateProgress(ctx);
        }
        if (cursor) {
            this.updateCursor(ctx);
        }
    }

    updateBackground(ctx) {
        const { backgroundColor } = this.wf.options;
        ctx.fillStyle = backgroundColor;
        ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.width);
    }

    updateGrid(ctx) {
        const { gridColor } = this.wf.options;
    }

    updateRuler(ctx) {
        const { rulerColor } = this.wf.options;
    }

    updateProgress(ctx) {
        const { progressColor } = this.wf.options;
    }

    updateCursor(ctx) {
        const { cursorColor } = this.wf.options;
    }

    updateWave(ctx) {
        const { waveColor } = this.wf.options;
    }
}
