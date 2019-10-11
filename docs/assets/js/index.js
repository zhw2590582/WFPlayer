var art = new Artplayer({
    container: '.artplayer',
    url: './fullmetal-alchemist-again.mp4',
    autoSize: true,
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
