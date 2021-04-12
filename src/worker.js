let canvas = null;
let ctx = null;

onmessage = (event) => {
    const { mode, data } = event.data;

    if (mode === 'INIT') {
        canvas = new OffscreenCanvas(data.width, data.height);
        ctx = canvas.getContext('2d');
    }

    if (mode === 'UPDATE') {
        const { backgroundColor } = data.options;
        const { width, height } = canvas;
        ctx.fillStyle = backgroundColor;
        ctx.fillRect(0, 0, width, height);
        postMessage(canvas.transferToImageBitmap());
    }
};
