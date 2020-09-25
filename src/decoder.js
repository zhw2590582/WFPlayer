import throttle from 'lodash/throttle';

export default class Decoder {
    constructor(wf) {
        this.wf = wf;
        this.audioCtx = new (window.AudioContext || window.webkitAudioContext)();
        this.throttleDecodeAudioData = throttle(this.decodeAudioData, 1000);
        this.audiobuffer = this.audioCtx.createBuffer(2, 22050, 44100);
        this.channelData = new Float32Array();

        this.wf.on('loading', (uint8) => {
            this.throttleDecodeAudioData(uint8);
        });
    }

    decodeAudioData(uint8) {
        this.audioCtx.decodeAudioData(
            uint8.buffer,
            (audiobuffer) => this.decodeSuccess(audiobuffer),
            () => null,
        );
    }

    decodeSuccess(audiobuffer) {
        this.audiobuffer = audiobuffer;
        this.wf.emit('audiobuffer', this.audiobuffer);
        this.wf.emit('decodeing', this.audiobuffer.duration / this.wf.duration);
        this.channelData = audiobuffer.getChannelData(this.wf.options.channel);
        this.wf.emit('channelData', this.channelData);
    }

    changeChannel(channel) {
        this.channelData = this.audiobuffer.getChannelData(channel);
        this.wf.emit('channelData', this.channelData);
    }

    destroy() {
        this.audiobuffer = this.audioCtx.createBuffer(2, 22050, 44100);
        this.channelData = new Float32Array();
    }
}
