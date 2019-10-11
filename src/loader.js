import validator from 'option-validator';
import { errorHandle, checkReadableStream, mergeBuffer } from './utils';

export default class Loader {
    constructor(wf) {
        this.wf = wf;
        this.fileSize = 0;
        this.loadSize = 0;
        this.data = new Uint8Array();
        this.reader = null;
    }

    load(target) {
        this.destroy();
        const targetType = validator.kindOf(target);
        if (targetType === 'string') {
            if (checkReadableStream()) {
                this.loadFromSteam(target);
            } else {
                this.loadFromUrl(target);
            }
        } else if (targetType === 'Blob' || targetType === 'File') {
            this.loadFromFile(target);
        } else {
            errorHandle(false, `This format is not supported: ${targetType}`);
        }
    }

    loadFromSteam(url) {
        const { withCredentials, cors, headers } = this.wf.options;
        this.wf.emit('loadStart');
        return fetch(url, {
            credentials: withCredentials ? 'include' : 'omit',
            mode: cors ? 'cors' : 'no-cors',
            headers,
        }).then(response => {
            if (response.body && response.body.getReader) {
                this.fileSize = Number(response.headers.get('content-length'));
                this.reader = response.body.getReader();
                return function read() {
                    return this.reader.read().then(({ done, value }) => {
                        if (done) {
                            this.wf.emit('loadEnd');
                            return this.reader;
                        }

                        this.fileSize += value.byteLength;
                        this.data = mergeBuffer(this.data, value);
                        this.wf.emit('loading', this.data.slice());
                        return read.call(this);
                    });
                }.call(this);
            }

            this.destroy();
            return this.loadFromUrl(url);
        });
    }

    loadFromUrl(url) {
        this.reader = new AbortController();
        const { withCredentials, cors, headers } = this.wf.options;
        this.wf.emit('loadStart');
        return fetch(url, {
            credentials: withCredentials ? 'include' : 'omit',
            mode: cors ? 'cors' : 'no-cors',
            headers,
            signal: this.reader.signal,
        })
            .then(response => {
                this.fileSize = Number(response.headers.get('content-length'));
                return response.arrayBuffer();
            })
            .then(arrayBuffer => {
                const uint8 = new Uint8Array(arrayBuffer);
                this.loadSize = uint8.byteLength;
                this.wf.emit('loading', uint8);
                this.wf.emit('loadEnd');
            });
    }

    loadFromFile(file) {
        const { proxy } = this.wf.events;
        this.reader = new FileReader();

        proxy(this.reader, 'load', e => {
            const uint8 = new Uint8Array(e.target.result);
            this.fileSize = uint8.byteLength;
            this.loadSize = uint8.byteLength;
            this.wf.emit('loading', uint8);
            this.wf.emit('loadEnd');
        });

        this.wf.emit('loadStart');
        this.reader.readAsArrayBuffer(file);
    }

    destroy() {
        this.fileSize = 0;
        this.loadSize = 0;
        this.data = new Uint8Array();
        if (this.reader) {
            if (this.reader.cancel) {
                this.reader.cancel();
            }
            if (this.reader.abort) {
                this.reader.abort();
            }
            this.reader = null;
        }
    }
}
