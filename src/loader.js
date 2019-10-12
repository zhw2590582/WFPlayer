import validator from 'option-validator';
import { errorHandle, mergeBuffer } from './utils';

export default class Loader {
    constructor(wf) {
        this.wf = wf;
        this.fileSize = 0;
        this.loadSize = 0;
        this.data = new Uint8Array();
        this.reader = null;
        this.abortController = null;
    }

    load(target) {
        this.destroy();
        const targetType = validator.kindOf(target);
        if (targetType === 'string') {
            this.loadFromUrl(target);
        } else if (targetType === 'blob' || targetType === 'file') {
            this.loadFromFile(target);
        } else {
            errorHandle(false, `This format is not supported: ${targetType}`);
        }
    }

    loadFromUrl(url) {
        this.abortController = new AbortController();
        const { withCredentials, cors, headers } = this.wf.options;
        this.wf.emit('loadStart');
        return fetch(url, {
            credentials: withCredentials ? 'include' : 'omit',
            mode: cors ? 'cors' : 'no-cors',
            headers,
            signal: this.abortController.signal,
        })
            .then(response => {
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
            .then(arrayBuffer => {
                if (arrayBuffer && arrayBuffer.byteLength) {
                    const uint8 = new Uint8Array(arrayBuffer);
                    this.fileSize = uint8.byteLength;
                    this.wf.emit('fileSize', this.fileSize);
                    this.loadSize = uint8.byteLength;
                    this.wf.emit('loading', uint8);
                    this.wf.emit('loadEnd');
                }
            });
    }

    loadFromFile(file) {
        this.reader = new FileReader();
        this.reader.onload = e => {
            const uint8 = new Uint8Array(e.target.result);
            this.fileSize = uint8.byteLength;
            this.wf.emit('fileSize', this.fileSize);
            this.loadSize = uint8.byteLength;
            this.wf.emit('loading', uint8);
            this.wf.emit('loadEnd');
            this.reader.onload = null;
        };
        this.wf.emit('loadStart');
        this.reader.readAsArrayBuffer(file);
    }

    destroy() {
        this.fileSize = 0;
        this.loadSize = 0;
        this.data = new Uint8Array();
        if (this.reader) {
            this.reader.cancel();
            this.reader = null;
        }
        if (this.abortController) {
            this.abortController.abort();
            this.abortController = null;
        }
    }
}
