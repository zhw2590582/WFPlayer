import WFPlayer from '../';

var wf = new WFPlayer({
    container: document.querySelector('#waveform') as HTMLDivElement,
    mediaElement: document.querySelector('#video') as HTMLVideoElement,
});

wf.load('path/to/audio.mp3');
