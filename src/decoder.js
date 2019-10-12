import throttle from 'lodash/throttle';

export default class Decoder {
    constructor(wf) {
        this.wf = wf;
        this.audioCtx = new (window.AudioContext || window.webkitAudioContext)();
        this.throttleDecodeAudioData = throttle(this.decodeAudioData, 500);
        this.audiobuffer = this.audioCtx.createBuffer(2, 22050, 44100);
        this.channelData = new Float32Array();

        this.wf.on('loading', uint8 => {
            this.throttleDecodeAudioData(uint8);
        });
    }

    decodeAudioData(uint8) {
        const { channel } = this.wf.options;
        this.audioCtx
            .decodeAudioData(uint8.buffer)
            .then(audiobuffer => {
                this.audiobuffer = audiobuffer;
                this.channelData = audiobuffer.getChannelData(channel);
                this.wf.emit('channelData', this.channelData);
            })
            .catch(error => {
                throw error;
            });
    }

    destroy() {
        this.audiobuffer = this.audioCtx.createBuffer(2, 22050, 44100);
        this.channelData = new Float32Array();
    }
}
