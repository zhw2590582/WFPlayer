var $version = document.querySelector('.version');
var $open = document.querySelector('.open');
var $download = document.querySelector('.download');
var $filesize = document.querySelector('.filesize');
var $numberOfChannels = document.querySelector('.numberOfChannels');
var $sampleRate = document.querySelector('.sampleRate');
var $downloading = document.querySelector('.downloading');
var $decodeing = document.querySelector('.decodeing');
var $pickers = Array.from(document.querySelectorAll('.color-picker'));
var $range = Array.from(document.querySelectorAll('.range input'));

$version.innerHTML = 'Beta ' + WFPlayer.version;

var art = new Artplayer({
    container: '.artplayer',
    url: '/your-name.mp4',
    autoSize: true,
    loop: true,
    moreVideoAttr: {
        crossOrigin: 'anonymous',
    },
});

var wf = null;

function initWFPlayer() {
    wf = new WFPlayer({
        container: '.waveform',
        cors: true,
    });

    wf.on('fileSize', function (fileSize) {
        $filesize.innerHTML = (fileSize / 1024 / 1024).toFixed(3) + ' M';
    });

    wf.on('downloading', function (value) {
        $downloading.innerHTML = ((value === Infinity ? 0 : value) * 100).toFixed(3) + ' %';
    });

    wf.on('decodeing', function (value) {
        $decodeing.innerHTML = (value * 100 || 0).toFixed(3) + ' %';
    });

    wf.on('audiobuffer', function (audiobuffer) {
        $numberOfChannels.innerHTML = audiobuffer.numberOfChannels;
        $sampleRate.innerHTML = audiobuffer.sampleRate;
    });
}

initWFPlayer();
art.on('ready', function () {
    art.seek = 3;
    wf.seek(3);
    wf.load(art.template.$video);
});

art.on('seek', function () {
    wf.seek(art.currentTime);
});

$open.addEventListener('change', function () {
    var file = $open.files[0];
    if (file) {
        var $video = document.createElement('video');
        var canPlayType = $video.canPlayType(file.type);
        if (canPlayType === 'maybe' || canPlayType === 'probably') {
            var url = URL.createObjectURL(file);
            art.player.switchUrl(url, file.name).then(() => {
                wf.destroy();
                initWFPlayer();
                wf.load(art.template.$video);
            });
        } else {
            alert('This file format is not supported');
        }
    }
});

$download.addEventListener('click', function () {
    wf.exportImage();
});

$pickers.forEach(function ($el) {
    var name = $el.getAttribute('name');
    var pickr = Pickr.create({
        el: $el,
        theme: 'classic',
        default: wf.options[name],
        swatches: [
            'rgba(244, 67, 54, 1)',
            'rgba(233, 30, 99, 0.95)',
            'rgba(156, 39, 176, 0.9)',
            'rgba(103, 58, 183, 0.85)',
            'rgba(63, 81, 181, 0.8)',
            'rgba(33, 150, 243, 0.75)',
            'rgba(3, 169, 244, 0.7)',
            'rgba(0, 188, 212, 0.7)',
            'rgba(0, 150, 136, 0.75)',
            'rgba(76, 175, 80, 0.8)',
            'rgba(139, 195, 74, 0.85)',
            'rgba(205, 220, 57, 0.9)',
            'rgba(255, 235, 59, 0.95)',
            'rgba(255, 193, 7, 1)',
        ],
        components: {
            preview: true,
            opacity: true,
            hue: true,
            interaction: {
                hex: true,
                rgba: true,
                input: true,
                save: true,
            },
        },
    });
    pickr
        .on('save', function (color) {
            wf.setOptions({
                [name]: color.toRGBA().toString(),
            });
            pickr.hide();
        })
        .on('change', function (color) {
            wf.setOptions({
                [name]: color.toRGBA().toString(),
            });
        });
});

$range.forEach(function ($el) {
    var name = $el.getAttribute('name');
    var min = Number($el.getAttribute('min'));
    var max = Number($el.getAttribute('max'));
    var step = Number($el.getAttribute('step'));
    new Powerange($el, {
        start: $el.value,
        min: min || 1,
        max: max || 20,
        step: step || 1,
        hideRange: true,
        decimal: true,
    });
    $el.onchange = function () {
        $el.previousElementSibling.innerHTML = $el.value;
        wf.setOptions({
            [name]: name === 'waveScale' ? Number($el.value) : Math.floor(Number($el.value)),
        });
    };
});