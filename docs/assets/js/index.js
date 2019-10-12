var art = new Artplayer({
    container: '.artplayer',
    url: 'https://zhw2590582.github.io/assets-cdn/video/your-name.mp4',
    autoSize: true,
    loop: true,
    moreVideoAttr: {
        crossOrigin: 'anonymous',
    },
});

var wf = new WFPlayer({
    container: '.waveform',
    cors: true,
});

art.on('ready', function() {
    wf.load(art.template.$video);
});
