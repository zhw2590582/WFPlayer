import validator from 'option-validator';
import { errorHandle, checkReadableStream } from './utils';

export default class Loader {
    constructor(wf) {
        this.wf = wf;
        this.fileSize = 0;
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
        const self = this;
        this.wf.emit('loadStart');
        return fetch(url, {
            credentials: withCredentials ? 'include' : 'omit',
            mode: cors ? 'cors' : 'no-cors',
            headers,
        }).then(response => {
            self.reader = response.body.getReader();
            return (function read() {
                return self.reader.read().then(({ done, value }) => {
                    if (done) {
                        self.wf.emit('loadEnd');
                        return self.reader;
                    }

                    const uint8 = new Uint8Array(value);
                    self.fileSize += uint8.byteLength;
                    self.wf.emit('loading', uint8);
                    return read();
                });
            })();
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
            .then(response => response.arrayBuffer())
            .then(arrayBuffer => {
                this.fileSize = arrayBuffer.byteLength;
                this.wf.emit('loading', new Uint8Array(arrayBuffer));
                this.wf.emit('loadEnd');
            });
    }

    loadFromFile(file) {
        const { proxy } = this.wf.events;
        this.reader = new FileReader();

        proxy(this.reader, 'load', e => {
            const uint8 = new Uint8Array(e.target.result);
            this.fileSize = uint8.byteLength;
            this.wf.emit('loading', uint8);
            this.wf.emit('loadEnd');
        });

        this.wf.emit('loadStart');
        this.reader.readAsArrayBuffer(file);
    }

    destroy() {
        this.fileSize = 0;
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
