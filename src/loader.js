import { mergeBuffer } from './utils';

export default class Loader {
    constructor(wf) {
        this.wf = wf;
        this.fileSize = 0;
        this.loadSize = 0;
        this.data = new Uint8Array();
        this.reader = null;
    }

    load(url) {
        this.destroy();
        return fetch(url)
            .then((response) => {
                if (response.body && typeof response.body.getReader === 'function') {
                    this.fileSize = Number(response.headers.get('content-length'));
                    this.reader = response.body.getReader();
                    return function read() {
                        return this.reader.read().then(({ done, value }) => {
                            if (done) return null;
                            this.loadSize += value.byteLength;
                            this.data = mergeBuffer(this.data, value);
                            this.wf.decoder.decodeAudioData(this.data.slice());
                            this.wf.emit('load', {
                                fileSize: this.fileSize,
                                loadSize: this.loadSize,
                                data: this.data,
                            });
                            return read.call(this);
                        });
                    }.call(this);
                }
                return response.arrayBuffer();
            })
            .then((arrayBuffer) => {
                if (arrayBuffer && arrayBuffer.byteLength) {
                    this.data = new Uint8Array(arrayBuffer);
                    this.fileSize = this.data.byteLength;
                    this.loadSize = this.data.byteLength;
                    this.wf.decoder.decodeAudioData(this.data);
                    this.wf.emit('load', {
                        fileSize: this.fileSize,
                        loadSize: this.loadSize,
                        data: this.data,
                    });
                }
                return arrayBuffer;
            });
    }

    destroy() {
        this.fileSize = 0;
        this.loadSize = 0;
        this.data = new Uint8Array();
        if (this.reader) {
            this.reader.cancel();
            this.reader = null;
        }
    }
}
