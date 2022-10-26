var $video = document.querySelector('.video');
var $version = document.querySelector('.version');
var $open = document.querySelector('.open');
var $checkboxs = Array.from(document.querySelectorAll('.checkbox'));
var $pickers = Array.from(document.querySelectorAll('.color-picker'));
var $range = Array.from(document.querySelectorAll('.range'));

var wf = null;
$version.innerHTML = 'Beta ' + WFPlayer.version;

function initWFPlayer(url) {
    if (wf) wf.destroy();

    wf = new WFPlayer({
        container: '.waveform',
        mediaElement: $video,
        scrollable: true,
        useWorker: true,
    });

    wf.load(url);
    wf.on('click', (currentTime) => wf.smoothSeek(currentTime));
    wf.on('grabbing', (currentTime) => wf.seek(currentTime));
    wf.on('scroll', (deltaY) => wf.seek(wf.currentTime + deltaY / 5));
}

initWFPlayer('audio.mp3');

$open.addEventListener('change', async function () {
    var file = $open.files[0];
    if (file) {
        var canPlayType = $video.canPlayType(file.type);
        if (canPlayType === 'maybe' || canPlayType === 'probably') {
            if (file.size <= 128 * 1024 * 1024) {
                $video.src = URL.createObjectURL(file);
                initWFPlayer($video.src);
            } else {
                alert('This file size cannot be greater than 128M');
            }
        } else {
            alert('This file format is not supported');
        }
    }
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
    $el.onchange = $el.oninput = function () {
        $el.nextElementSibling.textContent = $el.value;
        wf.setOptions({
            [name]: Number($el.value),
        });
    };
});

$checkboxs.forEach(function ($el) {
    var name = $el.getAttribute('name');
    $el.onchange = function () {
        wf.setOptions({
            [name]: $el.checked,
        });
    };
});
