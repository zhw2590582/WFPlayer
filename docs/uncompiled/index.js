// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"gEVO5":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _optionValidator = require("option-validator");
var _optionValidatorDefault = parcelHelpers.interopDefault(_optionValidator);
var _emitter = require("./emitter");
var _emitterDefault = parcelHelpers.interopDefault(_emitter);
var _events = require("./events");
var _eventsDefault = parcelHelpers.interopDefault(_events);
var _template = require("./template");
var _templateDefault = parcelHelpers.interopDefault(_template);
var _drawer = require("./drawer");
var _drawerDefault = parcelHelpers.interopDefault(_drawer);
var _decoder = require("./decoder");
var _decoderDefault = parcelHelpers.interopDefault(_decoder);
var _loader = require("./loader");
var _loaderDefault = parcelHelpers.interopDefault(_loader);
var _controller = require("./controller");
var _controllerDefault = parcelHelpers.interopDefault(_controller);
var _utils = require("./utils");
let id = 0;
const instances = [];
class WFPlayer extends (0, _emitterDefault.default) {
    static get instances() {
        return instances;
    }
    static get version() {
        return "2.1.3";
    }
    static get env() {
        return "development";
    }
    static get default() {
        return {
            container: "#waveform",
            mediaElement: null,
            useWorker: true,
            wave: true,
            waveColor: "rgba(255, 255, 255, 0.1)",
            backgroundColor: "rgb(28, 32, 34)",
            paddingColor: "rgba(255, 255, 255, 0.05)",
            cursor: true,
            cursorColor: "#ff0000",
            progress: true,
            progressColor: "rgba(255, 255, 255, 0.5)",
            grid: true,
            gridColor: "rgba(255, 255, 255, 0.05)",
            ruler: true,
            rulerColor: "rgba(255, 255, 255, 0.5)",
            rulerAtTop: true,
            scrollable: false,
            refreshDelay: 50,
            channel: 0,
            duration: 10,
            padding: 5,
            waveScale: 0.8,
            pixelRatio: Math.ceil(window.devicePixelRatio)
        };
    }
    static get scheme() {
        const checkNum = (name, min, max, isInteger)=>(value, type)=>{
                (0, _utils.errorHandle)(type === "number", `${name} expects to receive number as a parameter, but got ${type}.`);
                const numberType = isInteger ? "an integer" : "a";
                (0, _utils.errorHandle)(value >= min && value <= max && (isInteger ? Number.isInteger(value) : true), `'options.${name}' expect ${numberType} number that >= ${min} and <= ${max}, but got ${value}.`);
                return true;
            };
        return {
            container: "htmlelement|htmldivelement",
            mediaElement: "null|htmlvideoelement|htmlaudioelement",
            useWorker: "boolean",
            wave: "boolean",
            waveColor: "string",
            backgroundColor: "string",
            paddingColor: "string",
            cursor: "boolean",
            cursorColor: "string",
            progress: "boolean",
            progressColor: "string",
            grid: "boolean",
            gridColor: "string",
            ruler: "boolean",
            rulerColor: "string",
            rulerAtTop: "boolean",
            scrollable: "boolean",
            refreshDelay: checkNum("refreshDelay", 16, 1000, true),
            channel: checkNum("channel", 0, 5, true),
            duration: checkNum("duration", 1, 100, true),
            padding: checkNum("padding", 1, 100, true),
            waveScale: checkNum("waveScale", 0.1, 10, false),
            pixelRatio: checkNum("pixelRatio", 1, 10, false)
        };
    }
    constructor(options = {}){
        super();
        this._currentTime = 0;
        this.isDestroy = false;
        this.options = {};
        this.setOptions(options);
        this.events = new (0, _eventsDefault.default)(this);
        this.template = new (0, _templateDefault.default)(this);
        this.decoder = new (0, _decoderDefault.default)(this);
        this.drawer = new (0, _drawerDefault.default)(this);
        this.controller = new (0, _controllerDefault.default)(this);
        this.loader = new (0, _loaderDefault.default)(this);
        this.update();
        id += 1;
        this.id = id;
        instances.push(this);
    }
    get currentTime() {
        return this.options.mediaElement ? this.options.mediaElement.currentTime : this._currentTime;
    }
    get duration() {
        return this.options.mediaElement ? this.options.mediaElement.duration : Infinity;
    }
    get playing() {
        const { mediaElement  } = this.options;
        if (mediaElement) return !!(mediaElement.currentTime > 0 && !mediaElement.paused && !mediaElement.ended && mediaElement.readyState > 2);
        return false;
    }
    setOptions(options = {}) {
        (0, _utils.errorHandle)((0, _optionValidatorDefault.default).kindOf(options) === "object", "setOptions expects to receive object as a parameter.");
        if (typeof options.container === "string") options.container = document.querySelector(options.container);
        if (typeof options.mediaElement === "string") options.mediaElement = document.querySelector(options.mediaElement);
        this.options = (0, _optionValidatorDefault.default)({
            ...WFPlayer.default,
            ...this.options,
            ...options
        }, WFPlayer.scheme);
        this.update();
        return this;
    }
    load(target) {
        this.emit("load", target);
        // Audiobuffer
        if (target && typeof target.getChannelData === "function") {
            this.decoder.decodeSuccess(target);
            this.controller.init();
            return this;
        }
        // Uint8Array
        if (target && target.buffer) {
            this.decoder.decodeAudioData(target);
            this.controller.init();
            return this;
        }
        // HTMLVideoElement or HTMLAudioElement
        if (target instanceof HTMLVideoElement || target instanceof HTMLAudioElement) {
            this.options.mediaElement = target;
            target = target.currentSrc || target.src;
        }
        (0, _utils.errorHandle)(typeof target === "string" && target.trim(), `The load target is not a string. If you are loading a mediaElement, make sure the mediaElement.src is not empty.`);
        // String Url
        this.loader.load(target);
        this.controller.init();
        return this;
    }
    getCurrentTimeFromEvent(event) {
        const { template: { canvas  } , drawer: { config: { padding , beginTime , gridNum  } ,  } ,  } = this;
        const gridGap = canvas.width / gridNum;
        return (event.pageX - padding * gridGap) / gridGap / 10 + beginTime;
    }
    seek(second) {
        (0, _utils.errorHandle)(typeof second === "number", "seek expects to receive number as a parameter.");
        this._currentTime = (0, _utils.clamp)(second, 0, this.duration);
        if (this.options.mediaElement && this.options.mediaElement.currentTime !== this._currentTime) this.options.mediaElement.currentTime = this._currentTime;
        this.update();
        return this;
    }
    changeChannel(channel) {
        this.decoder.changeChannel(channel);
        this.setOptions({
            channel
        });
        this.update();
        return this;
    }
    exportImage() {
        this.template.exportImage();
        return this;
    }
    update() {
        if (this.template && this.drawer) {
            this.template.update();
            this.drawer.update();
        }
        return this;
    }
    reset() {
        this.decoder.destroy();
        return this;
    }
    destroy() {
        this.isDestroy = true;
        this.events.destroy();
        this.template.destroy();
        this.controller.destroy();
        this.decoder.destroy();
        this.loader.destroy();
        this.drawer.destroy();
        instances.splice(instances.indexOf(this), 1);
        return this;
    }
}
exports.default = WFPlayer;
if (typeof window !== "undefined") window["WFPlayer"] = WFPlayer;

},{"option-validator":"2tbdu","./emitter":"2ZQK0","./events":"jVQIf","./template":"eG0JW","./drawer":"7NL0G","./decoder":"eDdom","./loader":"6Zr4E","./controller":"5fGZE","./utils":"5vF3n","@parcel/transformer-js/src/esmodule-helpers.js":"5dUr6"}],"2tbdu":[function(require,module,exports) {
!function(r, t) {
    module.exports = t();
}(this, function() {
    "use strict";
    function e(r) {
        return (e = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(r) {
            return typeof r;
        } : function(r) {
            return r && "function" == typeof Symbol && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r;
        })(r);
    }
    var n = Object.prototype.toString, c = function(r) {
        if (void 0 === r) return "undefined";
        if (null === r) return "null";
        var t = e(r);
        if ("boolean" === t) return "boolean";
        if ("string" === t) return "string";
        if ("number" === t) return "number";
        if ("symbol" === t) return "symbol";
        if ("function" === t) return function(r) {
            return "GeneratorFunction" === o(r);
        }(r) ? "generatorfunction" : "function";
        if (function(r) {
            return Array.isArray ? Array.isArray(r) : r instanceof Array;
        }(r)) return "array";
        if (function(r) {
            if (r.constructor && "function" == typeof r.constructor.isBuffer) return r.constructor.isBuffer(r);
            return !1;
        }(r)) return "buffer";
        if (function(r) {
            try {
                if ("number" == typeof r.length && "function" == typeof r.callee) return !0;
            } catch (r1) {
                if (-1 !== r1.message.indexOf("callee")) return !0;
            }
            return !1;
        }(r)) return "arguments";
        if (function(r) {
            return r instanceof Date || "function" == typeof r.toDateString && "function" == typeof r.getDate && "function" == typeof r.setDate;
        }(r)) return "date";
        if (function(r) {
            return r instanceof Error || "string" == typeof r.message && r.constructor && "number" == typeof r.constructor.stackTraceLimit;
        }(r)) return "error";
        if (function(r) {
            return r instanceof RegExp || "string" == typeof r.flags && "boolean" == typeof r.ignoreCase && "boolean" == typeof r.multiline && "boolean" == typeof r.global;
        }(r)) return "regexp";
        switch(o(r)){
            case "Symbol":
                return "symbol";
            case "Promise":
                return "promise";
            case "WeakMap":
                return "weakmap";
            case "WeakSet":
                return "weakset";
            case "Map":
                return "map";
            case "Set":
                return "set";
            case "Int8Array":
                return "int8array";
            case "Uint8Array":
                return "uint8array";
            case "Uint8ClampedArray":
                return "uint8clampedarray";
            case "Int16Array":
                return "int16array";
            case "Uint16Array":
                return "uint16array";
            case "Int32Array":
                return "int32array";
            case "Uint32Array":
                return "uint32array";
            case "Float32Array":
                return "float32array";
            case "Float64Array":
                return "float64array";
        }
        if (function(r) {
            return "function" == typeof r.throw && "function" == typeof r.return && "function" == typeof r.next;
        }(r)) return "generator";
        switch(t = n.call(r)){
            case "[object Object]":
                return "object";
            case "[object Map Iterator]":
                return "mapiterator";
            case "[object Set Iterator]":
                return "setiterator";
            case "[object String Iterator]":
                return "stringiterator";
            case "[object Array Iterator]":
                return "arrayiterator";
        }
        return t.slice(8, -1).toLowerCase().replace(/\s/g, "");
    };
    function o(r) {
        return r.constructor ? r.constructor.name : null;
    }
    function f(r, t) {
        var e = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : [
            "option"
        ];
        return s(r, t, e), y(r, t, e), function(a, i, u) {
            var r = c(i), t = c(a);
            if ("object" === r) {
                if ("object" !== t) throw new Error("[Type Error]: '".concat(u.join("."), "' require 'object' type, but got '").concat(t, "'"));
                Object.keys(i).forEach(function(r) {
                    var t = a[r], e = i[r], n = u.slice();
                    n.push(r), s(t, e, n), y(t, e, n), f(t, e, n);
                });
            }
            if ("array" === r) {
                if ("array" !== t) throw new Error("[Type Error]: '".concat(u.join("."), "' require 'array' type, but got '").concat(t, "'"));
                a.forEach(function(r, t) {
                    var e = a[t], n = i[t] || i[0], o = u.slice();
                    o.push(t), s(e, n, o), y(e, n, o), f(e, n, o);
                });
            }
        }(r, t, e), r;
    }
    function s(r, t, e) {
        if ("string" === c(t)) {
            var n = c(r);
            if ("?" === t[0] && (t = t.slice(1) + "|undefined"), !(-1 < t.indexOf("|") ? t.split("|").map(function(r) {
                return r.toLowerCase().trim();
            }).filter(Boolean).some(function(r) {
                return n === r;
            }) : t.toLowerCase().trim() === n)) throw new Error("[Type Error]: '".concat(e.join("."), "' require '").concat(t, "' type, but got '").concat(n, "'"));
        }
    }
    function y(r, t, e) {
        if ("function" === c(t)) {
            var n = t(r, c(r), e);
            if (!0 !== n) {
                var o = c(n);
                throw "string" === o ? new Error(n) : "error" === o ? n : new Error("[Validator Error]: The scheme for '".concat(e.join("."), "' validator require return true, but got '").concat(n, "'"));
            }
        }
    }
    return f.kindOf = c, f;
});

},{}],"2ZQK0":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
class Emitter {
    on(name, fn, ctx) {
        const e = this.e || (this.e = {});
        (e[name] || (e[name] = [])).push({
            fn,
            ctx
        });
        return this;
    }
    once(name, fn, ctx) {
        const self = this;
        function listener(...args) {
            self.off(name, listener);
            fn.apply(ctx, args);
        }
        listener._ = fn;
        return this.on(name, listener, ctx);
    }
    emit(name, ...data) {
        const evtArr = ((this.e || (this.e = {}))[name] || []).slice();
        for(let i = 0; i < evtArr.length; i += 1)evtArr[i].fn.apply(evtArr[i].ctx, data);
        return this;
    }
    off(name, callback) {
        const e = this.e || (this.e = {});
        const evts = e[name];
        const liveEvents = [];
        if (evts && callback) {
            for(let i = 0, len = evts.length; i < len; i += 1)if (evts[i].fn !== callback && evts[i].fn._ !== callback) liveEvents.push(evts[i]);
        }
        if (liveEvents.length) e[name] = liveEvents;
        else delete e[name];
        return this;
    }
}
exports.default = Emitter;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"5dUr6"}],"5dUr6":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"jVQIf":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
class Events {
    constructor(){
        this.destroyEvents = [];
        this.proxy = this.proxy.bind(this);
    }
    proxy(target, name, callback, option = {}) {
        if (Array.isArray(name)) return name.map((item)=>this.proxy(target, item, callback, option));
        target.addEventListener(name, callback, option);
        const destroyEvent = ()=>target.removeEventListener(name, callback, option);
        this.destroyEvents.push(destroyEvent);
        return destroyEvent;
    }
    destroy() {
        this.destroyEvents.forEach((event)=>event());
    }
}
exports.default = Events;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"5dUr6"}],"eG0JW":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _utils = require("./utils");
class Template {
    constructor(wf){
        this.wf = wf;
        this.canvas = null;
        const { refreshDelay  } = wf.options;
        this.update = (0, _utils.throttle)(this.init, refreshDelay, this);
        this.init();
    }
    init() {
        const { container , pixelRatio  } = this.wf.options;
        const { clientWidth , clientHeight  } = container;
        const width = clientWidth * pixelRatio;
        const height = clientHeight * pixelRatio;
        if (this.canvas) {
            if (this.canvas.width !== width) this.canvas.width = width;
            if (this.canvas.height !== height) this.canvas.height = height;
        } else {
            (0, _utils.errorHandle)(this.wf.constructor.instances.every((wf)=>wf.options.container !== container), "Cannot mount multiple instances on the same dom element, please destroy the previous instance first.");
            container.innerHTML = "";
            this.canvas = document.createElement("canvas");
            this.canvas.width = width;
            this.canvas.height = height;
            this.canvas.style.width = "100%";
            this.canvas.style.height = "100%";
            container.appendChild(this.canvas);
        }
    }
    exportImage() {
        const elink = document.createElement("a");
        elink.style.display = "none";
        elink.href = this.canvas.toDataURL("image/png");
        elink.download = `${Date.now()}.png`;
        document.body.appendChild(elink);
        elink.click();
        document.body.removeChild(elink);
    }
    destroy() {
        this.wf.options.container.innerHTML = "";
    }
}
exports.default = Template;

},{"./utils":"5vF3n","@parcel/transformer-js/src/esmodule-helpers.js":"5dUr6"}],"5vF3n":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "WFPlayerError", ()=>WFPlayerError);
parcelHelpers.export(exports, "errorHandle", ()=>errorHandle);
parcelHelpers.export(exports, "mergeBuffer", ()=>mergeBuffer);
parcelHelpers.export(exports, "clamp", ()=>clamp);
parcelHelpers.export(exports, "throttle", ()=>throttle);
class WFPlayerError extends Error {
    constructor(message){
        super(message);
        this.name = "WFPlayerError";
    }
}
function errorHandle(condition, msg) {
    if (!condition) throw new WFPlayerError(msg);
    return condition;
}
function mergeBuffer(...buffers) {
    const Cons = buffers[0].constructor;
    return buffers.reduce((pre, val)=>{
        const merge = new Cons((pre.byteLength | 0) + (val.byteLength | 0));
        merge.set(pre, 0);
        merge.set(val, pre.byteLength | 0);
        return merge;
    }, new Cons());
}
function clamp(num, a, b) {
    return Math.max(Math.min(num, Math.max(a, b)), Math.min(a, b));
}
function throttle(func, delay, context) {
    let prev = Date.now();
    return (...args)=>{
        const now = Date.now();
        if (now - prev >= delay) {
            func.apply(context, args);
            prev = Date.now();
        }
    };
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"5dUr6"}],"7NL0G":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _utils = require("./utils");
var _worker = require("bundle-text:./worker");
var _workerDefault = parcelHelpers.interopDefault(_worker);
var _worker1 = require("./worker");
class Drawer {
    constructor(wf){
        this.wf = wf;
        this.canvas = wf.template.canvas;
        this.config = {};
        const { refreshDelay , useWorker  } = wf.options;
        this.update = (0, _utils.throttle)(this.update, refreshDelay, this);
        if (useWorker && window.OffscreenCanvas && window.Worker) {
            this.worker = new Worker(URL.createObjectURL(new Blob([
                (0, _workerDefault.default)
            ])));
            this.ctx = this.canvas.getContext("bitmaprenderer");
            this.wf.events.proxy(this.worker, "message", (event)=>{
                const { type , data  } = event.data;
                if (type === "UPFATE" && !wf.isDestroy) {
                    this.config = data.config;
                    this.wf.emit("update", data.config);
                    this.ctx.transferFromImageBitmap(data.imageBitmap);
                }
            });
            this.worker.postMessage({
                type: "INIT",
                data: {
                    width: this.canvas.width,
                    height: this.canvas.height
                }
            });
        } else {
            this.worker = {
                postMessage: (0, _worker1.postMessage)
            };
            this.worker.postMessage({
                type: "INIT",
                data: {
                    canvas: this.canvas,
                    wf: this.wf
                }
            });
        }
        wf.on("decode", ({ channelData , sampleRate  })=>{
            this.worker.postMessage({
                type: "DECODE",
                data: {
                    channelData,
                    sampleRate
                }
            });
            this.update();
        });
    }
    update() {
        const { currentTime , // eslint-disable-next-line no-unused-vars
        options: { container , mediaElement , ...options } ,  } = this.wf;
        const { width , height  } = this.canvas;
        this.worker.postMessage({
            type: "UPDATE",
            data: {
                ...options,
                currentTime,
                width,
                height
            }
        });
    }
    destroy() {
        if (this.worker.terminate) this.worker.terminate();
    }
}
exports.default = Drawer;

},{"./utils":"5vF3n","bundle-text:./worker":"5gMmV","./worker":"lPZ5X","@parcel/transformer-js/src/esmodule-helpers.js":"5dUr6"}],"5gMmV":[function(require,module,exports) {
module.exports = "// modules are defined as an array\n// [ module function, map of requires ]\n//\n// map of requires is short require name -> numeric require\n//\n// anything defined in a previous bundle is accessed via the\n// orig method which is the require for previous bundles\n\n(function (modules, entry, mainEntry, parcelRequireName, globalName) {\n  /* eslint-disable no-undef */\n  var globalObject =\n    typeof globalThis !== 'undefined'\n      ? globalThis\n      : typeof self !== 'undefined'\n      ? self\n      : typeof window !== 'undefined'\n      ? window\n      : typeof global !== 'undefined'\n      ? global\n      : {};\n  /* eslint-enable no-undef */\n\n  // Save the require from previous bundle to this closure if any\n  var previousRequire =\n    typeof globalObject[parcelRequireName] === 'function' &&\n    globalObject[parcelRequireName];\n\n  var cache = previousRequire.cache || {};\n  // Do not use `require` to prevent Webpack from trying to bundle this call\n  var nodeRequire =\n    typeof module !== 'undefined' &&\n    typeof module.require === 'function' &&\n    module.require.bind(module);\n\n  function newRequire(name, jumped) {\n    if (!cache[name]) {\n      if (!modules[name]) {\n        // if we cannot find the module within our internal map or\n        // cache jump to the current global require ie. the last bundle\n        // that was added to the page.\n        var currentRequire =\n          typeof globalObject[parcelRequireName] === 'function' &&\n          globalObject[parcelRequireName];\n        if (!jumped && currentRequire) {\n          return currentRequire(name, true);\n        }\n\n        // If there are other bundles on this page the require from the\n        // previous one is saved to 'previousRequire'. Repeat this as\n        // many times as there are bundles until the module is found or\n        // we exhaust the require chain.\n        if (previousRequire) {\n          return previousRequire(name, true);\n        }\n\n        // Try the node require function if it exists.\n        if (nodeRequire && typeof name === 'string') {\n          return nodeRequire(name);\n        }\n\n        var err = new Error(\"Cannot find module '\" + name + \"'\");\n        err.code = 'MODULE_NOT_FOUND';\n        throw err;\n      }\n\n      localRequire.resolve = resolve;\n      localRequire.cache = {};\n\n      var module = (cache[name] = new newRequire.Module(name));\n\n      modules[name][0].call(\n        module.exports,\n        localRequire,\n        module,\n        module.exports,\n        this\n      );\n    }\n\n    return cache[name].exports;\n\n    function localRequire(x) {\n      var res = localRequire.resolve(x);\n      return res === false ? {} : newRequire(res);\n    }\n\n    function resolve(x) {\n      var id = modules[name][1][x];\n      return id != null ? id : x;\n    }\n  }\n\n  function Module(moduleName) {\n    this.id = moduleName;\n    this.bundle = newRequire;\n    this.exports = {};\n  }\n\n  newRequire.isParcelRequire = true;\n  newRequire.Module = Module;\n  newRequire.modules = modules;\n  newRequire.cache = cache;\n  newRequire.parent = previousRequire;\n  newRequire.register = function (id, exports) {\n    modules[id] = [\n      function (require, module) {\n        module.exports = exports;\n      },\n      {},\n    ];\n  };\n\n  Object.defineProperty(newRequire, 'root', {\n    get: function () {\n      return globalObject[parcelRequireName];\n    },\n  });\n\n  globalObject[parcelRequireName] = newRequire;\n\n  for (var i = 0; i < entry.length; i++) {\n    newRequire(entry[i]);\n  }\n\n  if (mainEntry) {\n    // Expose entry point to Node, AMD or browser globals\n    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js\n    var mainExports = newRequire(mainEntry);\n\n    // CommonJS\n    if (typeof exports === 'object' && typeof module !== 'undefined') {\n      module.exports = mainExports;\n\n      // RequireJS\n    } else if (typeof define === 'function' && define.amd) {\n      define(function () {\n        return mainExports;\n      });\n\n      // <script>\n    } else if (globalName) {\n      this[globalName] = mainExports;\n    }\n  }\n})({\"dbBlS\":[function(require,module,exports) {\nvar parcelHelpers = require(\"@parcel/transformer-js/src/esmodule-helpers.js\");\nparcelHelpers.defineInteropFlag(exports);\nparcelHelpers.export(exports, \"postMessage\", ()=>postMessage);\nconst isWorker = self.document === undefined;\nlet wf = null;\nlet canvas = null;\nlet ctx = null;\nlet gridNum = 0;\nlet gridGap = 0;\nlet beginTime = 0;\nlet density = 1;\nlet sampleRate = 44100;\nlet channelData = new Float32Array();\nfunction secondToTime(second) {\n    const add0 = (num)=>num < 10 ? `0${num}` : String(num);\n    const hour = Math.floor(second / 3600);\n    const min = Math.floor((second - hour * 3600) / 60);\n    const sec = Math.floor(second - hour * 3600 - min * 60);\n    return [\n        hour,\n        min,\n        sec\n    ].map(add0).join(\":\");\n}\nfunction clamp(num, a, b) {\n    return Math.max(Math.min(num, Math.max(a, b)), Math.min(a, b));\n}\nfunction getDensity(data) {\n    const { pixelRatio  } = data;\n    const fontSize = 11;\n    ctx.font = `${fontSize * pixelRatio}px Arial`;\n    const rulerWidth = ctx.measureText(\"99:99:99\").width;\n    return function loop(second) {\n        const rate = gridGap * second / (rulerWidth * 1.5);\n        if (rate > 1) return Math.floor(second / 10);\n        return loop(second + 10);\n    }(10);\n}\nfunction drawBackground(data) {\n    const { width , height , backgroundColor , paddingColor , padding  } = data;\n    ctx.clearRect(0, 0, width, height);\n    ctx.fillStyle = backgroundColor;\n    ctx.fillRect(0, 0, width, height);\n    ctx.fillStyle = paddingColor;\n    ctx.fillRect(0, 0, padding * gridGap, height);\n    ctx.fillRect(width - padding * gridGap, 0, padding * gridGap, height);\n}\nfunction drawGrid(data) {\n    const { width , height , currentTime , gridColor , pixelRatio , scrollable  } = data;\n    ctx.fillStyle = gridColor;\n    for(let index = 0; index < gridNum + 10; index += density){\n        const x = scrollable ? gridGap * index - (currentTime - parseInt(currentTime, 10)) * gridGap * 10 : gridGap * index;\n        ctx.fillRect(x, 0, pixelRatio, height);\n    }\n    for(let index1 = 0; index1 < height / gridGap; index1 += density)ctx.fillRect(0, gridGap * index1, width, pixelRatio);\n}\nfunction drawRuler(data) {\n    const { height , currentTime , rulerColor , pixelRatio , padding , rulerAtTop , scrollable  } = data;\n    const fontSize = 11;\n    const fontHeight = 15;\n    const fontTop = 30;\n    ctx.font = `${fontSize * pixelRatio}px Arial`;\n    ctx.fillStyle = rulerColor;\n    let second = -1;\n    for(let index = 0; index < gridNum + 10; index += 1){\n        const x = scrollable ? gridGap * index - (currentTime - parseInt(currentTime, 10)) * gridGap * 10 : gridGap * index;\n        if ((index - padding) % 10 === 0) {\n            second += 1;\n            ctx.fillRect(x, rulerAtTop ? 0 : height - fontHeight * pixelRatio, pixelRatio, fontHeight * pixelRatio);\n            const time = Math.floor(beginTime + second);\n            if (time % density === 0 && time >= 0) ctx.fillText(secondToTime(time), x - fontSize * pixelRatio * 2 + pixelRatio, rulerAtTop ? fontTop * pixelRatio : height - fontTop * pixelRatio + fontSize);\n        } else if ((index - padding) % 5 === 0) ctx.fillRect(x, rulerAtTop ? 0 : height - fontHeight / 2 * pixelRatio, pixelRatio, fontHeight / 2 * pixelRatio);\n    }\n}\nfunction drawWave(data) {\n    const { width , height , currentTime , progress , waveColor , progressColor , duration , padding , waveScale , scrollable  } = data;\n    const middle = height / 2;\n    const waveWidth = width - gridGap * padding * 2;\n    const startIndex = Math.floor(beginTime * sampleRate);\n    const endIndex = Math.floor(clamp((beginTime + duration) * sampleRate, startIndex, Infinity));\n    const step = Math.floor((endIndex - startIndex) / waveWidth);\n    const cursorX = scrollable ? width / 2 : padding * gridGap + (currentTime - beginTime) * gridGap * 10;\n    let stepIndex = 0;\n    let xIndex = 0;\n    let min = 1;\n    let max = -1;\n    for(let i = startIndex; i < endIndex; i += 1){\n        stepIndex += 1;\n        const item = channelData[i] || 0;\n        if (item < min) min = item;\n        else if (item > max) max = item;\n        if (stepIndex >= step && xIndex < waveWidth) {\n            xIndex += 1;\n            const waveX = gridGap * padding + xIndex;\n            ctx.fillStyle = progress && cursorX >= waveX ? progressColor : waveColor;\n            ctx.fillRect(waveX, (1 + min * waveScale) * middle, 1, Math.max(1, (max - min) * middle * waveScale));\n            stepIndex = 0;\n            min = 1;\n            max = -1;\n        }\n    }\n}\nfunction drawCursor(data) {\n    const { height , width , currentTime , cursorColor , pixelRatio , padding , scrollable  } = data;\n    ctx.fillStyle = cursorColor;\n    const x = scrollable ? width / 2 : padding * gridGap + (currentTime - beginTime) * gridGap * 10;\n    ctx.fillRect(x, 0, pixelRatio, height);\n}\nself.onmessage = function onmessage(event) {\n    const { type , data  } = event.data;\n    if (type === \"INIT\") {\n        if (isWorker) canvas = new OffscreenCanvas(data.width, data.height);\n        else {\n            wf = data.wf;\n            canvas = data.canvas;\n        }\n        ctx = canvas.getContext(\"2d\");\n    }\n    if (type === \"DECODE\") {\n        sampleRate = data.sampleRate;\n        channelData = data.channelData;\n    }\n    if (type === \"UPDATE\") {\n        const { width , height , currentTime , cursor , grid , ruler , wave , duration , padding , scrollable  } = data;\n        if (canvas.width !== width) canvas.width = width;\n        if (canvas.height !== height) canvas.height = height;\n        gridNum = duration * 10 + padding * 2;\n        gridGap = width / gridNum;\n        beginTime = scrollable ? currentTime - duration / 2 : Math.floor(currentTime / duration) * duration;\n        density = getDensity(data);\n        drawBackground(data);\n        if (grid) drawGrid(data);\n        if (ruler) drawRuler(data);\n        if (wave) drawWave(data);\n        if (cursor) drawCursor(data);\n        const { byteLength  } = channelData;\n        const config = {\n            gridNum,\n            gridGap,\n            beginTime,\n            density,\n            sampleRate,\n            byteLength,\n            ...data\n        };\n        if (isWorker) self.postMessage({\n            type: \"UPFATE\",\n            data: {\n                config,\n                imageBitmap: canvas.transferToImageBitmap()\n            }\n        });\n        else wf.emit(\"update\", config);\n    }\n};\nconst postMessage = (data)=>{\n    self.onmessage({\n        data\n    });\n};\n\n},{\"@parcel/transformer-js/src/esmodule-helpers.js\":\"5dUr6\"}],\"5dUr6\":[function(require,module,exports) {\nexports.interopDefault = function(a) {\n    return a && a.__esModule ? a : {\n        default: a\n    };\n};\nexports.defineInteropFlag = function(a) {\n    Object.defineProperty(a, \"__esModule\", {\n        value: true\n    });\n};\nexports.exportAll = function(source, dest) {\n    Object.keys(source).forEach(function(key) {\n        if (key === \"default\" || key === \"__esModule\" || dest.hasOwnProperty(key)) return;\n        Object.defineProperty(dest, key, {\n            enumerable: true,\n            get: function() {\n                return source[key];\n            }\n        });\n    });\n    return dest;\n};\nexports.export = function(dest, destName, get) {\n    Object.defineProperty(dest, destName, {\n        enumerable: true,\n        get: get\n    });\n};\n\n},{}]},[\"dbBlS\"], \"dbBlS\", \"parcelRequireb650\")\n\n";

},{}],"lPZ5X":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "postMessage", ()=>postMessage);
const isWorker = self.document === undefined;
let wf = null;
let canvas = null;
let ctx = null;
let gridNum = 0;
let gridGap = 0;
let beginTime = 0;
let density = 1;
let sampleRate = 44100;
let channelData = new Float32Array();
function secondToTime(second) {
    const add0 = (num)=>num < 10 ? `0${num}` : String(num);
    const hour = Math.floor(second / 3600);
    const min = Math.floor((second - hour * 3600) / 60);
    const sec = Math.floor(second - hour * 3600 - min * 60);
    return [
        hour,
        min,
        sec
    ].map(add0).join(":");
}
function clamp(num, a, b) {
    return Math.max(Math.min(num, Math.max(a, b)), Math.min(a, b));
}
function getDensity(data) {
    const { pixelRatio  } = data;
    const fontSize = 11;
    ctx.font = `${fontSize * pixelRatio}px Arial`;
    const rulerWidth = ctx.measureText("99:99:99").width;
    return function loop(second) {
        const rate = gridGap * second / (rulerWidth * 1.5);
        if (rate > 1) return Math.floor(second / 10);
        return loop(second + 10);
    }(10);
}
function drawBackground(data) {
    const { width , height , backgroundColor , paddingColor , padding  } = data;
    ctx.clearRect(0, 0, width, height);
    ctx.fillStyle = backgroundColor;
    ctx.fillRect(0, 0, width, height);
    ctx.fillStyle = paddingColor;
    ctx.fillRect(0, 0, padding * gridGap, height);
    ctx.fillRect(width - padding * gridGap, 0, padding * gridGap, height);
}
function drawGrid(data) {
    const { width , height , currentTime , gridColor , pixelRatio , scrollable  } = data;
    ctx.fillStyle = gridColor;
    for(let index = 0; index < gridNum + 10; index += density){
        const x = scrollable ? gridGap * index - (currentTime - parseInt(currentTime, 10)) * gridGap * 10 : gridGap * index;
        ctx.fillRect(x, 0, pixelRatio, height);
    }
    for(let index1 = 0; index1 < height / gridGap; index1 += density)ctx.fillRect(0, gridGap * index1, width, pixelRatio);
}
function drawRuler(data) {
    const { height , currentTime , rulerColor , pixelRatio , padding , rulerAtTop , scrollable  } = data;
    const fontSize = 11;
    const fontHeight = 15;
    const fontTop = 30;
    ctx.font = `${fontSize * pixelRatio}px Arial`;
    ctx.fillStyle = rulerColor;
    let second = -1;
    for(let index = 0; index < gridNum + 10; index += 1){
        const x = scrollable ? gridGap * index - (currentTime - parseInt(currentTime, 10)) * gridGap * 10 : gridGap * index;
        if ((index - padding) % 10 === 0) {
            second += 1;
            ctx.fillRect(x, rulerAtTop ? 0 : height - fontHeight * pixelRatio, pixelRatio, fontHeight * pixelRatio);
            const time = Math.floor(beginTime + second);
            if (time % density === 0 && time >= 0) ctx.fillText(secondToTime(time), x - fontSize * pixelRatio * 2 + pixelRatio, rulerAtTop ? fontTop * pixelRatio : height - fontTop * pixelRatio + fontSize);
        } else if ((index - padding) % 5 === 0) ctx.fillRect(x, rulerAtTop ? 0 : height - fontHeight / 2 * pixelRatio, pixelRatio, fontHeight / 2 * pixelRatio);
    }
}
function drawWave(data) {
    const { width , height , currentTime , progress , waveColor , progressColor , duration , padding , waveScale , scrollable  } = data;
    const middle = height / 2;
    const waveWidth = width - gridGap * padding * 2;
    const startIndex = Math.floor(beginTime * sampleRate);
    const endIndex = Math.floor(clamp((beginTime + duration) * sampleRate, startIndex, Infinity));
    const step = Math.floor((endIndex - startIndex) / waveWidth);
    const cursorX = scrollable ? width / 2 : padding * gridGap + (currentTime - beginTime) * gridGap * 10;
    let stepIndex = 0;
    let xIndex = 0;
    let min = 1;
    let max = -1;
    for(let i = startIndex; i < endIndex; i += 1){
        stepIndex += 1;
        const item = channelData[i] || 0;
        if (item < min) min = item;
        else if (item > max) max = item;
        if (stepIndex >= step && xIndex < waveWidth) {
            xIndex += 1;
            const waveX = gridGap * padding + xIndex;
            ctx.fillStyle = progress && cursorX >= waveX ? progressColor : waveColor;
            ctx.fillRect(waveX, (1 + min * waveScale) * middle, 1, Math.max(1, (max - min) * middle * waveScale));
            stepIndex = 0;
            min = 1;
            max = -1;
        }
    }
}
function drawCursor(data) {
    const { height , width , currentTime , cursorColor , pixelRatio , padding , scrollable  } = data;
    ctx.fillStyle = cursorColor;
    const x = scrollable ? width / 2 : padding * gridGap + (currentTime - beginTime) * gridGap * 10;
    ctx.fillRect(x, 0, pixelRatio, height);
}
self.onmessage = function onmessage(event) {
    const { type , data  } = event.data;
    if (type === "INIT") {
        if (isWorker) canvas = new OffscreenCanvas(data.width, data.height);
        else {
            wf = data.wf;
            canvas = data.canvas;
        }
        ctx = canvas.getContext("2d");
    }
    if (type === "DECODE") {
        sampleRate = data.sampleRate;
        channelData = data.channelData;
    }
    if (type === "UPDATE") {
        const { width , height , currentTime , cursor , grid , ruler , wave , duration , padding , scrollable  } = data;
        if (canvas.width !== width) canvas.width = width;
        if (canvas.height !== height) canvas.height = height;
        gridNum = duration * 10 + padding * 2;
        gridGap = width / gridNum;
        beginTime = scrollable ? currentTime - duration / 2 : Math.floor(currentTime / duration) * duration;
        density = getDensity(data);
        drawBackground(data);
        if (grid) drawGrid(data);
        if (ruler) drawRuler(data);
        if (wave) drawWave(data);
        if (cursor) drawCursor(data);
        const { byteLength  } = channelData;
        const config = {
            gridNum,
            gridGap,
            beginTime,
            density,
            sampleRate,
            byteLength,
            ...data
        };
        if (isWorker) self.postMessage({
            type: "UPFATE",
            data: {
                config,
                imageBitmap: canvas.transferToImageBitmap()
            }
        });
        else wf.emit("update", config);
    }
};
const postMessage = (data)=>{
    self.onmessage({
        data
    });
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"5dUr6"}],"eDdom":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
class Decoder {
    constructor(wf){
        this.wf = wf;
        this.audioCtx = new (window.OfflineAudioContext || window.webkitOfflineAudioContext)(1, 2, 44100);
        this.audiobuffer = this.audioCtx.createBuffer(1, 2, 44100);
        this.channelData = new Float32Array();
    }
    decodeAudioData(uint8) {
        return new Promise((resolve, reject)=>{
            this.wf.emit("decode:start", uint8);
            this.audioCtx.decodeAudioData(uint8.buffer, (audiobuffer)=>{
                this.wf.emit("decode:success", audiobuffer);
                this.decodeSuccess(audiobuffer);
                resolve(audiobuffer);
            }, (error)=>{
                this.wf.emit("decode:error", error);
                reject(error);
            });
        });
    }
    decodeSuccess(audiobuffer) {
        this.audiobuffer = audiobuffer;
        this.channelData = audiobuffer.getChannelData(this.wf.options.channel);
        this.wf.emit("decode", {
            channelData: this.channelData,
            sampleRate: this.audiobuffer.sampleRate,
            duration: this.audiobuffer.duration
        });
        this.wf.update();
    }
    changeChannel(channel) {
        this.channelData = this.audiobuffer.getChannelData(channel) || new Float32Array();
        this.wf.emit("decode", {
            channelData: this.channelData,
            sampleRate: this.audiobuffer.sampleRate,
            duration: this.audiobuffer.duration
        });
        this.wf.update();
    }
    destroy() {
        this.audiobuffer = this.audioCtx.createBuffer(1, 2, 44100);
        this.channelData = new Float32Array();
        this.wf.emit("decode", {
            channelData: this.channelData,
            sampleRate: this.audiobuffer.sampleRate,
            duration: this.audiobuffer.duration
        });
        this.wf.update();
    }
}
exports.default = Decoder;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"5dUr6"}],"6Zr4E":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _utils = require("./utils");
class Loader {
    constructor(wf){
        this.wf = wf;
        this.fileSize = 0;
        this.loadSize = 0;
        this.data = new Uint8Array();
        this.reader = null;
    }
    load(url) {
        this.destroy();
        return fetch(url).then((response)=>{
            if (response.body && typeof response.body.getReader === "function") {
                this.fileSize = Number(response.headers.get("content-length"));
                this.reader = response.body.getReader();
                return (function read() {
                    return this.reader.read().then(({ done , value  })=>{
                        if (done) return null;
                        this.loadSize += value.byteLength;
                        this.data = (0, _utils.mergeBuffer)(this.data, value);
                        this.wf.decoder.decodeAudioData(this.data.slice());
                        this.wf.emit("load", {
                            fileSize: this.fileSize,
                            loadSize: this.loadSize,
                            data: this.data
                        });
                        return read.call(this);
                    });
                }).call(this);
            }
            return response.arrayBuffer();
        }).then((arrayBuffer)=>{
            if (arrayBuffer && arrayBuffer.byteLength) {
                this.data = new Uint8Array(arrayBuffer);
                this.fileSize = this.data.byteLength;
                this.loadSize = this.data.byteLength;
                this.wf.decoder.decodeAudioData(this.data);
                this.wf.emit("load", {
                    fileSize: this.fileSize,
                    loadSize: this.loadSize,
                    data: this.data
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
exports.default = Loader;

},{"./utils":"5vF3n","@parcel/transformer-js/src/esmodule-helpers.js":"5dUr6"}],"5fGZE":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _utils = require("./utils");
class Controller {
    constructor(wf){
        this.wf = wf;
        this.playTimer = null;
        this.isInit = false;
        this.init = ()=>{
            if (!this.isInit) {
                this.isInit = true;
                this.clickInit();
                this.resizeInit();
                this.playInit();
            }
        };
    }
    clickInit() {
        const { template: { canvas  } , events: { proxy  } ,  } = this.wf;
        proxy(canvas, [
            "click",
            "contextmenu"
        ], (event)=>{
            const time = this.wf.getCurrentTimeFromEvent(event);
            this.wf.emit(event.type, time, event);
        });
    }
    resizeInit() {
        const { proxy  } = this.wf.events;
        const throttleResize = (0, _utils.throttle)(()=>{
            this.wf.update();
            this.wf.emit("resize");
        }, 200, this);
        proxy(window, [
            "resize",
            "orientationchange"
        ], ()=>{
            throttleResize();
        });
    }
    playInit() {
        const { events: { proxy  } , options: { mediaElement  } ,  } = this.wf;
        if (!mediaElement) return;
        proxy(mediaElement, [
            "seeked",
            "seeking",
            "canplay"
        ], ()=>{
            this.wf.update();
        });
        (function loop() {
            this.playTimer = requestAnimationFrame(()=>{
                if (this.wf.playing) this.wf.update();
                if (!this.wf.isDestroy) loop.call(this);
            });
        }).call(this);
    }
    destroy() {
        cancelAnimationFrame(this.playTimer);
    }
}
exports.default = Controller;

},{"./utils":"5vF3n","@parcel/transformer-js/src/esmodule-helpers.js":"5dUr6"}]},["gEVO5"], "gEVO5", "parcelRequireb650")

//# sourceMappingURL=index.js.map