export default class Decoder {
    constructor(wf) {
        this.wf = wf;
        this.audioCtx = new (window.OfflineAudioContext || window.webkitOfflineAudioContext)(1, 2, 44100);
        this.audiobuffer = this.audioCtx.createBuffer(1, 2, 44100);
        this.channelData = new Float32Array();
    }

    decodeAudioData(uint8) {
        return new Promise((resolve, reject) => {
            this.wf.emit('decode:start', uint8);
            this.audioCtx.decodeAudioData(
                uint8.buffer,
                (audiobuffer) => {
                    this.wf.emit('decode:success', audiobuffer);
                    this.decodeSuccess(audiobuffer);
                    resolve(audiobuffer);
                },
                (error) => {
                    this.wf.emit('decode:error', error);
                    reject(error);
                },
            );
        });
    }

    decodeSuccess(audiobuffer) {
        this.audiobuffer = audiobuffer;
        this.channelData = audiobuffer.getChannelData(this.wf.options.channel);
        this.wf.emit('decode', {
            channelData: this.channelData,
            sampleRate: this.audiobuffer.sampleRate,
            duration: this.audiobuffer.duration,
        });
        this.wf.update();
    }

    changeChannel(channel) {
        this.channelData = this.audiobuffer.getChannelData(channel) || new Float32Array();
        this.wf.emit('decode', {
            channelData: this.channelData,
            sampleRate: this.audiobuffer.sampleRate,
            duration: this.audiobuffer.duration,
        });
        this.wf.update();
    }

    destroy() {
        this.audiobuffer = this.audioCtx.createBuffer(1, 2, 44100);
        this.channelData = new Float32Array();
        this.wf.emit('decode', {
            channelData: this.channelData,
            sampleRate: this.audiobuffer.sampleRate,
            duration: this.audiobuffer.duration,
        });
        this.wf.update();
    }
}
