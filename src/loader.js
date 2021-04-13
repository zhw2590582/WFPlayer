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
        this.wf.emit('loadStart');
        return fetch(url)
            .then((response) => {
                if (response.body && typeof response.body.getReader === 'function') {
                    this.fileSize = Number(response.headers.get('content-length'));
                    this.wf.emit('fileSize', this.fileSize);
                    this.reader = response.body.getReader();
                    return function read() {
                        return this.reader.read().then(({ done, value }) => {
                            if (done) {
                                this.wf.emit('loadEnd');
                                return null;
                            }
                            this.loadSize += value.byteLength;
                            this.wf.emit('downloading', this.loadSize / this.fileSize);
                            this.data = mergeBuffer(this.data, value);
                            this.wf.emit('loading', this.data.slice());
                            return read.call(this);
                        });
                    }.call(this);
                }
                return response.arrayBuffer();
            })
            .then((arrayBuffer) => {
                if (arrayBuffer && arrayBuffer.byteLength) {
                    const uint8 = new Uint8Array(arrayBuffer);
                    this.fileSize = uint8.byteLength;
                    this.wf.emit('fileSize', this.fileSize);
                    this.loadSize = uint8.byteLength;
                    this.wf.emit('downloading', this.loadSize / this.fileSize);
                    this.wf.emit('loading', uint8);
                    this.wf.emit('loadEnd');
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
