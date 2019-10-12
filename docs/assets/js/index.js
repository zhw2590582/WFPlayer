var art = new Artplayer({
    container: '.artplayer',
    url: 'https://zhw2590582.github.io/assets-cdn/video/one-more-time-one-more-chance-480p.mp4',
    autoSize: true,
    loop: true,
    moreVideoAttr: {
        crossOrigin: 'anonymous',
    },
});

var wf = new WFPlayer({
    container: '.waveform',
});

art.on('ready', function() {
    wf.load(art.template.$video);
});
