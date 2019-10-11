/*!
 * WFPlayer.js v1.1.3
 * Github: https://github.com/zhw2590582/WFPlayer#readme
 * (c) 2017-2019 Harvey Zack
 * Released under the MIT License.
 */

(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = global || self, global.WFPlayer = factory());
}(this, function () { 'use strict';

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }

  var defineProperty = _defineProperty;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var classCallCheck = _classCallCheck;

  var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

  function createCommonjsModule(fn, module) {
  	return module = { exports: {} }, fn(module, module.exports), module.exports;
  }

  var _typeof_1 = createCommonjsModule(function (module) {
  function _typeof2(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

  function _typeof(obj) {
    if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
      module.exports = _typeof = function _typeof(obj) {
        return _typeof2(obj);
      };
    } else {
      module.exports = _typeof = function _typeof(obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
      };
    }

    return _typeof(obj);
  }

  module.exports = _typeof;
  });

  function _assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  }

  var assertThisInitialized = _assertThisInitialized;

  function _possibleConstructorReturn(self, call) {
    if (call && (_typeof_1(call) === "object" || typeof call === "function")) {
      return call;
    }

    return assertThisInitialized(self);
  }

  var possibleConstructorReturn = _possibleConstructorReturn;

  var getPrototypeOf = createCommonjsModule(function (module) {
  function _getPrototypeOf(o) {
    module.exports = _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
  }

  module.exports = _getPrototypeOf;
  });

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  var createClass = _createClass;

  var setPrototypeOf = createCommonjsModule(function (module) {
  function _setPrototypeOf(o, p) {
    module.exports = _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };

    return _setPrototypeOf(o, p);
  }

  module.exports = _setPrototypeOf;
  });

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        writable: true,
        configurable: true
      }
    });
    if (superClass) setPrototypeOf(subClass, superClass);
  }

  var inherits = _inherits;

  var optionValidator = createCommonjsModule(function (module, exports) {
  !function(r,t){module.exports=t();}(commonjsGlobal,function(){function e(r){return (e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(r){return typeof r}:function(r){return r&&"function"==typeof Symbol&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r})(r)}var n=Object.prototype.toString,c=function(r){if(void 0===r)return "undefined";if(null===r)return "null";var t=e(r);if("boolean"===t)return "boolean";if("string"===t)return "string";if("number"===t)return "number";if("symbol"===t)return "symbol";if("function"===t)return function(r){return "GeneratorFunction"===o(r)}(r)?"generatorfunction":"function";if(function(r){return Array.isArray?Array.isArray(r):r instanceof Array}(r))return "array";if(function(r){if(r.constructor&&"function"==typeof r.constructor.isBuffer)return r.constructor.isBuffer(r);return !1}(r))return "buffer";if(function(r){try{if("number"==typeof r.length&&"function"==typeof r.callee)return !0}catch(r){if(-1!==r.message.indexOf("callee"))return !0}return !1}(r))return "arguments";if(function(r){return r instanceof Date||"function"==typeof r.toDateString&&"function"==typeof r.getDate&&"function"==typeof r.setDate}(r))return "date";if(function(r){return r instanceof Error||"string"==typeof r.message&&r.constructor&&"number"==typeof r.constructor.stackTraceLimit}(r))return "error";if(function(r){return r instanceof RegExp||"string"==typeof r.flags&&"boolean"==typeof r.ignoreCase&&"boolean"==typeof r.multiline&&"boolean"==typeof r.global}(r))return "regexp";switch(o(r)){case"Symbol":return "symbol";case"Promise":return "promise";case"WeakMap":return "weakmap";case"WeakSet":return "weakset";case"Map":return "map";case"Set":return "set";case"Int8Array":return "int8array";case"Uint8Array":return "uint8array";case"Uint8ClampedArray":return "uint8clampedarray";case"Int16Array":return "int16array";case"Uint16Array":return "uint16array";case"Int32Array":return "int32array";case"Uint32Array":return "uint32array";case"Float32Array":return "float32array";case"Float64Array":return "float64array"}if(function(r){return "function"==typeof r.throw&&"function"==typeof r.return&&"function"==typeof r.next}(r))return "generator";switch(t=n.call(r)){case"[object Object]":return "object";case"[object Map Iterator]":return "mapiterator";case"[object Set Iterator]":return "setiterator";case"[object String Iterator]":return "stringiterator";case"[object Array Iterator]":return "arrayiterator"}return t.slice(8,-1).toLowerCase().replace(/\s/g,"")};function o(r){return r.constructor?r.constructor.name:null}function f(r,t){var e=2<arguments.length&&void 0!==arguments[2]?arguments[2]:["option"];return s(r,t,e),y(r,t,e),function(a,i,u){var r=c(i),t=c(a);if("object"===r){if("object"!==t)throw new Error("[Type Error]: '".concat(u.join("."),"' require 'object' type, but got '").concat(t,"'"));Object.keys(i).forEach(function(r){var t=a[r],e=i[r],n=u.slice();n.push(r),s(t,e,n),y(t,e,n),f(t,e,n);});}if("array"===r){if("array"!==t)throw new Error("[Type Error]: '".concat(u.join("."),"' require 'array' type, but got '").concat(t,"'"));a.forEach(function(r,t){var e=a[t],n=i[t]||i[0],o=u.slice();o.push(t),s(e,n,o),y(e,n,o),f(e,n,o);});}}(r,t,e),r}function s(r,t,e){if("string"===c(t)){var n=c(r);if(!(-1<t.indexOf("|")?t.split("|").map(function(r){return r.toLowerCase().trim()}).filter(Boolean).some(function(r){return n===r}):t.toLowerCase().trim()===n))throw new Error("[Type Error]: '".concat(e.join("."),"' require '").concat(t,"' type, but got '").concat(n,"'"))}}function y(r,t,e){if("function"===c(t)){var n=t(r,c(r),e);if(!0!==n){var o=c(n);throw"string"===o?new Error(n):"error"===o?n:new Error("[Validator Error]: The scheme for '".concat(e.join("."),"' validator require return true, but got '").concat(n,"'"))}}}return f.kindOf=c,f});
  });

  var Emitter =
  /*#__PURE__*/
  function () {
    function Emitter() {
      classCallCheck(this, Emitter);
    }

    createClass(Emitter, [{
      key: "on",
      value: function on(name, fn, ctx) {
        var e = this.e || (this.e = {});
        (e[name] || (e[name] = [])).push({
          fn: fn,
          ctx: ctx
        });
        return this;
      }
    }, {
      key: "once",
      value: function once(name, fn, ctx) {
        var self = this;

        function listener() {
          self.off(name, listener);

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          fn.apply(ctx, args);
        }

        listener._ = fn;
        return this.on(name, listener, ctx);
      }
    }, {
      key: "emit",
      value: function emit(name) {
        var evtArr = ((this.e || (this.e = {}))[name] || []).slice();

        for (var _len2 = arguments.length, data = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
          data[_key2 - 1] = arguments[_key2];
        }

        for (var i = 0; i < evtArr.length; i += 1) {
          evtArr[i].fn.apply(evtArr[i].ctx, data);
        }

        return this;
      }
    }, {
      key: "off",
      value: function off(name, callback) {
        var e = this.e || (this.e = {});
        var evts = e[name];
        var liveEvents = [];

        if (evts && callback) {
          for (var i = 0, len = evts.length; i < len; i += 1) {
            if (evts[i].fn !== callback && evts[i].fn._ !== callback) liveEvents.push(evts[i]);
          }
        }

        if (liveEvents.length) {
          e[name] = liveEvents;
        } else {
          delete e[name];
        }

        return this;
      }
    }]);

    return Emitter;
  }();

  var Events =
  /*#__PURE__*/
  function () {
    function Events() {
      classCallCheck(this, Events);

      this.destroyEvents = [];
      this.proxy = this.proxy.bind(this);
    }

    createClass(Events, [{
      key: "proxy",
      value: function proxy(target, name, callback) {
        var _this = this;

        var option = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

        if (Array.isArray(name)) {
          name.forEach(function (item) {
            return _this.proxy(target, item, callback, option);
          });
        } else {
          target.addEventListener(name, callback, option);
          this.destroyEvents.push(function () {
            target.removeEventListener(name, callback, option);
          });
        }
      }
    }, {
      key: "destroy",
      value: function destroy() {
        this.destroyEvents.forEach(function (event) {
          return event();
        });
      }
    }]);

    return Events;
  }();

  function _isNativeFunction(fn) {
    return Function.toString.call(fn).indexOf("[native code]") !== -1;
  }

  var isNativeFunction = _isNativeFunction;

  var construct = createCommonjsModule(function (module) {
  function isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;

    try {
      Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
      return true;
    } catch (e) {
      return false;
    }
  }

  function _construct(Parent, args, Class) {
    if (isNativeReflectConstruct()) {
      module.exports = _construct = Reflect.construct;
    } else {
      module.exports = _construct = function _construct(Parent, args, Class) {
        var a = [null];
        a.push.apply(a, args);
        var Constructor = Function.bind.apply(Parent, a);
        var instance = new Constructor();
        if (Class) setPrototypeOf(instance, Class.prototype);
        return instance;
      };
    }

    return _construct.apply(null, arguments);
  }

  module.exports = _construct;
  });

  var wrapNativeSuper = createCommonjsModule(function (module) {
  function _wrapNativeSuper(Class) {
    var _cache = typeof Map === "function" ? new Map() : undefined;

    module.exports = _wrapNativeSuper = function _wrapNativeSuper(Class) {
      if (Class === null || !isNativeFunction(Class)) return Class;

      if (typeof Class !== "function") {
        throw new TypeError("Super expression must either be null or a function");
      }

      if (typeof _cache !== "undefined") {
        if (_cache.has(Class)) return _cache.get(Class);

        _cache.set(Class, Wrapper);
      }

      function Wrapper() {
        return construct(Class, arguments, getPrototypeOf(this).constructor);
      }

      Wrapper.prototype = Object.create(Class.prototype, {
        constructor: {
          value: Wrapper,
          enumerable: false,
          writable: true,
          configurable: true
        }
      });
      return setPrototypeOf(Wrapper, Class);
    };

    return _wrapNativeSuper(Class);
  }

  module.exports = _wrapNativeSuper;
  });

  var durationTimeConversion = createCommonjsModule(function (module, exports) {
  (function(global, factory) {
     (module.exports = factory())
      ;
  })(commonjsGlobal, function() {
    function checkTime(time) {
      return /^(\d+):([0-5][0-9]):([0-5][0-9])(\.\d{3})?$/.test(time);
    }

    function checkDuration(duration) {
      duration = String(duration);
      return /^(\d+)(\.\d{1,3})?$/.test(duration);
    }

    return {
      d2t: function(duration) {
        if (checkDuration(duration)) {
          var date = new Date(null);
          var arr = String(duration).split(".");
          var s = arr[0];
          var ms = arr[1] ? arr[1].padEnd(3, 0) : 0;
          date.setSeconds(Number(s));
          date.setMilliseconds(Number(ms));
          return date.toISOString().substr(11, 12);
        } else {
          throw new Error("The format of the duration is incorrect: " + duration);
        }
      },
      t2d: function(time) {
        if (checkTime(time)) {
          var arr = time.split(".")[0].split(":");
          var ms = Number(time.split(".")[1] || 0) / 1000;
          var h = Number(arr[0]) * 3600;
          var m = Number(arr[1]) * 60;
          var s = Number(arr[2]);
          return h + m + s + ms;
        } else {
          throw new Error("The format of the time is incorrect: " + time);
        }
      }
    };
  });
  });

  var WFPlayerError =
  /*#__PURE__*/
  function (_Error) {
    inherits(WFPlayerError, _Error);

    function WFPlayerError(message) {
      var _this;

      classCallCheck(this, WFPlayerError);

      _this = possibleConstructorReturn(this, getPrototypeOf(WFPlayerError).call(this, message));
      _this.name = 'WFPlayerError';
      return _this;
    }

    return WFPlayerError;
  }(wrapNativeSuper(Error));
  function errorHandle(condition, msg) {
    if (!condition) {
      throw new WFPlayerError(msg);
    }

    return condition;
  }
  function durationToTime() {
    var duration = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    return durationTimeConversion.d2t(duration.toFixed(3));
  }
  function checkReadableStream() {
    return typeof window.ReadableStream === 'function' && typeof window.Response === 'function' && Object.prototype.hasOwnProperty.call(window.Response.prototype, 'body');
  }
  function mergeBuffer() {
    for (var _len = arguments.length, buffers = new Array(_len), _key = 0; _key < _len; _key++) {
      buffers[_key] = arguments[_key];
    }

    var Cons = buffers[0].constructor;
    return buffers.reduce(function (pre, val) {
      var merge = new Cons((pre.byteLength | 0) + (val.byteLength | 0));
      merge.set(pre, 0);
      merge.set(val, pre.byteLength | 0);
      return merge;
    }, new Cons());
  }
  function clamp(num, a, b) {
    return Math.max(Math.min(num, Math.max(a, b)), Math.min(a, b));
  }
  function throttle(callback, delay) {
    var isThrottled = false;
    var args;
    var context;
    return function fn() {
      for (var _len3 = arguments.length, args2 = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
        args2[_key3] = arguments[_key3];
      }

      if (isThrottled) {
        args = args2;
        context = this;
        return;
      }

      isThrottled = true;
      callback.apply(this, args2);
      setTimeout(function () {
        isThrottled = false;

        if (args) {
          fn.apply(context, args);
          args = null;
          context = null;
        }
      }, delay);
    };
  }

  var Template =
  /*#__PURE__*/
  function () {
    function Template(wf) {
      classCallCheck(this, Template);

      this.wf = wf;
      this.canvas = null;
      this.update();
    }

    createClass(Template, [{
      key: "update",
      value: function update() {
        var _this$wf$options = this.wf.options,
            container = _this$wf$options.container,
            pixelRatio = _this$wf$options.pixelRatio;
        var containerWidth = container.clientWidth;
        var containerHeight = container.clientHeight;

        if (this.canvas) {
          this.canvas.width = containerWidth * pixelRatio;
          this.canvas.height = containerHeight * pixelRatio;
        } else {
          container.innerHTML = '';
          errorHandle(containerWidth && containerHeight, 'The width and height of the container cannot be 0');
          this.canvas = document.createElement('canvas');
          this.canvas.width = containerWidth * pixelRatio;
          this.canvas.height = containerHeight * pixelRatio;
          this.canvas.style.width = '100%';
          this.canvas.style.height = '100%';
          container.appendChild(this.canvas);
        }
      }
    }, {
      key: "destroy",
      value: function destroy() {
        this.wf.options.container.innerHTML = '';
      }
    }]);

    return Template;
  }();

  var Drawer =
  /*#__PURE__*/
  function () {
    function Drawer(wf) {
      var _this = this;

      classCallCheck(this, Drawer);

      this.wf = wf;
      this.update();
      this.wf.on('options', function () {
        _this.update();
      });
    }

    createClass(Drawer, [{
      key: "update",
      value: function update() {
        var canvas = this.wf.template.canvas;
        var _this$wf$options = this.wf.options,
            cursor = _this$wf$options.cursor,
            grid = _this$wf$options.grid,
            ruler = _this$wf$options.ruler;
        var ctx = canvas.getContext('2d');
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        this.updateBackground(ctx);

        if (grid) {
          this.updateGrid(ctx);
        }

        if (ruler) {
          this.updateRuler(ctx);
        }

        if (this.wf.decoder && this.wf.decoder.ready) {
          this.updateWave(ctx);
        }

        if (cursor) {
          this.updateCursor(ctx);
        }
      }
    }, {
      key: "updateBackground",
      value: function updateBackground(ctx) {
        var backgroundColor = this.wf.options.backgroundColor;
        ctx.fillStyle = backgroundColor;
        ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);
      }
    }, {
      key: "updateWave",
      value: function updateWave(ctx) {
        var channelData = this.wf.decoder.channelData;
        var sampleRate = this.wf.decoder.audiobuffer.sampleRate;
        var _this$wf$options2 = this.wf.options,
            waveColor = _this$wf$options2.waveColor,
            perDuration = _this$wf$options2.perDuration,
            pixelRatio = _this$wf$options2.pixelRatio,
            padding = _this$wf$options2.padding;
        ctx.fillStyle = waveColor;
        var gridNum = perDuration * 10 + padding * 2;
        var gridGap = ctx.canvas.width / gridNum;
        var beginTime = Math.floor(this.wf.currentTime / perDuration) * 10;
        var startIndex = clamp(beginTime * sampleRate, 0, channelData.length - 1);
        var endIndex = clamp((beginTime + perDuration) * sampleRate, startIndex, channelData.length - 1);
        var middle = ctx.canvas.height / 2;
        var width = ctx.canvas.width - gridGap * padding * 2;
        var step = Math.ceil((endIndex - startIndex) / width);

        for (var i = 0; i < width; i += 1) {
          var min = 1.0;
          var max = -1.0;

          for (var j = startIndex; j < step; j += 1) {
            var datum = channelData[i * step + j];

            if (datum < min) {
              min = datum;
            } else if (datum > max) {
              max = datum;
            }
          }

          ctx.fillRect(gridGap * padding + i, (1 + min) * middle, pixelRatio, Math.max(1, (max - min) * middle));
        }
      }
    }, {
      key: "updateGrid",
      value: function updateGrid(ctx) {
        var _this$wf$options3 = this.wf.options,
            gridColor = _this$wf$options3.gridColor,
            perDuration = _this$wf$options3.perDuration,
            pixelRatio = _this$wf$options3.pixelRatio,
            padding = _this$wf$options3.padding;
        ctx.fillStyle = gridColor;
        var gridNum = perDuration * 10 + padding * 2;
        var gridGap = ctx.canvas.width / gridNum;

        for (var index = 0; index < gridNum; index += 1) {
          ctx.fillRect(gridGap * index, 0, pixelRatio, ctx.canvas.height);
        }

        for (var _index = 0; _index < ctx.canvas.height / gridGap; _index += 1) {
          ctx.fillRect(0, gridGap * _index, ctx.canvas.width, pixelRatio);
        }
      }
    }, {
      key: "updateRuler",
      value: function updateRuler(ctx) {
        var _this$wf$options4 = this.wf.options,
            rulerColor = _this$wf$options4.rulerColor,
            perDuration = _this$wf$options4.perDuration,
            pixelRatio = _this$wf$options4.pixelRatio,
            padding = _this$wf$options4.padding,
            rulerAtTop = _this$wf$options4.rulerAtTop;
        var ruler = -1;
        var fontSize = 11;
        ctx.font = "".concat(fontSize * pixelRatio, "px Arial");
        ctx.fillStyle = rulerColor;
        var gridNum = perDuration * 10 + padding * 2;
        var gridGap = ctx.canvas.width / gridNum;
        var beginTime = Math.floor(this.wf.currentTime / perDuration) * 10;
        var height = ctx.canvas.height;

        for (var index = 0; index < gridNum; index += 1) {
          if ((index - padding) % 10 === 0) {
            ruler += 1;
            ctx.fillRect(gridGap * index, rulerAtTop ? 0 : height - gridGap, pixelRatio, gridGap);
            ctx.fillText(durationToTime(beginTime + ruler).split('.')[0], gridGap * index - fontSize * pixelRatio * 2, rulerAtTop ? gridGap * 2 : height - gridGap * 2 + fontSize);
          } else if ((index - padding) % 5 === 0 && index) {
            ctx.fillRect(gridGap * index, rulerAtTop ? 0 : height - gridGap / 2, pixelRatio, gridGap / 2);
          }
        }
      }
    }, {
      key: "updateCursor",
      value: function updateCursor(ctx) {
        var _this$wf$options5 = this.wf.options,
            cursorColor = _this$wf$options5.cursorColor,
            perDuration = _this$wf$options5.perDuration,
            pixelRatio = _this$wf$options5.pixelRatio,
            padding = _this$wf$options5.padding;
        ctx.fillStyle = cursorColor;
        var gridNum = perDuration * 10 + padding * 2;
        var gridGap = ctx.canvas.width / gridNum;
        var beginTime = Math.floor(this.wf.currentTime / perDuration) * 10;
        ctx.fillRect(padding * gridGap + (this.wf.currentTime - beginTime) * gridGap * 10, 0, pixelRatio, ctx.canvas.height);
      }
    }, {
      key: "updateProgress",
      value: function updateProgress(ctx) {
        var progressColor = this.wf.options.progressColor;
      }
    }]);

    return Drawer;
  }();

  var Decoder =
  /*#__PURE__*/
  function () {
    function Decoder(wf) {
      var _this = this;

      classCallCheck(this, Decoder);

      this.wf = wf;
      this.ready = false;
      this.audioCtx = new (window.AudioContext || window.webkitAudioContext)();
      this.throttleDecodeAudioData = throttle(this.decodeAudioData, 1000);
      this.audiobuffer = this.audioCtx.createBuffer(2, 22050, 44100);
      this.channelData = new Float32Array();
      this.wf.on('loading', function (uint8) {
        _this.throttleDecodeAudioData(uint8);
      });
    }

    createClass(Decoder, [{
      key: "decodeAudioData",
      value: function decodeAudioData(uint8) {
        var _this2 = this;

        var channel = this.wf.options.channel;
        this.audioCtx.decodeAudioData(uint8.buffer, function (audiobuffer) {
          _this2.audiobuffer = audiobuffer;
          _this2.channelData = audiobuffer.getChannelData(channel);
          _this2.ready = true;

          _this2.wf.emit('channelData', _this2.channelData);
        });
      }
    }, {
      key: "destroy",
      value: function destroy() {
        this.audiobuffer = this.audioCtx.createBuffer(2, 22050, 44100);
        this.channelData = new Float32Array();
      }
    }]);

    return Decoder;
  }();

  var Loader =
  /*#__PURE__*/
  function () {
    function Loader(wf) {
      classCallCheck(this, Loader);

      this.wf = wf;
      this.fileSize = 0;
      this.loadSize = 0;
      this.data = new Uint8Array();
      this.reader = null;
    }

    createClass(Loader, [{
      key: "load",
      value: function load(target) {
        this.destroy();
        var targetType = optionValidator.kindOf(target);

        if (targetType === 'string') {
          if (checkReadableStream()) {
            this.loadFromSteam(target);
          } else {
            this.loadFromUrl(target);
          }
        } else if (targetType === 'Blob' || targetType === 'File') {
          this.loadFromFile(target);
        } else {
          errorHandle(false, "This format is not supported: ".concat(targetType));
        }
      }
    }, {
      key: "loadFromSteam",
      value: function loadFromSteam(url) {
        var _this = this;

        var _this$wf$options = this.wf.options,
            withCredentials = _this$wf$options.withCredentials,
            cors = _this$wf$options.cors,
            headers = _this$wf$options.headers;
        this.wf.emit('loadStart');
        return fetch(url, {
          credentials: withCredentials ? 'include' : 'omit',
          mode: cors ? 'cors' : 'no-cors',
          headers: headers
        }).then(function (response) {
          if (response.body && response.body.getReader) {
            _this.fileSize = Number(response.headers.get('content-length'));
            _this.reader = response.body.getReader();
            return function read() {
              var _this2 = this;

              return this.reader.read().then(function (_ref) {
                var done = _ref.done,
                    value = _ref.value;

                if (done) {
                  _this2.wf.emit('loadEnd');

                  return _this2.reader;
                }

                _this2.fileSize += value.byteLength;
                _this2.data = mergeBuffer(_this2.data, value);

                _this2.wf.emit('loading', _this2.data.slice());

                return read.call(_this2);
              });
            }.call(_this);
          }

          _this.destroy();

          return _this.loadFromUrl(url);
        });
      }
    }, {
      key: "loadFromUrl",
      value: function loadFromUrl(url) {
        var _this3 = this;

        this.reader = new AbortController();
        var _this$wf$options2 = this.wf.options,
            withCredentials = _this$wf$options2.withCredentials,
            cors = _this$wf$options2.cors,
            headers = _this$wf$options2.headers;
        this.wf.emit('loadStart');
        return fetch(url, {
          credentials: withCredentials ? 'include' : 'omit',
          mode: cors ? 'cors' : 'no-cors',
          headers: headers,
          signal: this.reader.signal
        }).then(function (response) {
          _this3.fileSize = Number(response.headers.get('content-length'));
          return response.arrayBuffer();
        }).then(function (arrayBuffer) {
          var uint8 = new Uint8Array(arrayBuffer);
          _this3.loadSize = uint8.byteLength;

          _this3.wf.emit('loading', uint8);

          _this3.wf.emit('loadEnd');
        });
      }
    }, {
      key: "loadFromFile",
      value: function loadFromFile(file) {
        var _this4 = this;

        var proxy = this.wf.events.proxy;
        this.reader = new FileReader();
        proxy(this.reader, 'load', function (e) {
          var uint8 = new Uint8Array(e.target.result);
          _this4.fileSize = uint8.byteLength;
          _this4.loadSize = uint8.byteLength;

          _this4.wf.emit('loading', uint8);

          _this4.wf.emit('loadEnd');
        });
        this.wf.emit('loadStart');
        this.reader.readAsArrayBuffer(file);
      }
    }, {
      key: "destroy",
      value: function destroy() {
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
    }]);

    return Loader;
  }();

  var Controller =
  /*#__PURE__*/
  function () {
    function Controller(wf) {
      var _this = this;

      classCallCheck(this, Controller);

      this.wf = wf;
      this.timer = null;
      this.wf.on('load', function () {
        _this.clickInit();

        _this.resizeInit();

        _this.playInit();
      });
    }

    createClass(Controller, [{
      key: "clickInit",
      value: function clickInit() {
        var _this2 = this;

        var canvas = this.wf.template.canvas;
        var proxy = this.wf.events.proxy;
        proxy(canvas, ['click', 'contextmenu'], function (event) {
          var _this2$wf$options = _this2.wf.options,
              perDuration = _this2$wf$options.perDuration,
              padding = _this2$wf$options.padding,
              container = _this2$wf$options.container;
          var gridNum = perDuration * 10 + padding * 2;
          var gridGap = canvas.width / gridNum;
          var left = clamp(event.pageX - container.offsetLeft - padding * gridGap, 0, Infinity);
          var beginTime = Math.floor(_this2.wf.currentTime / perDuration) * 10;
          var currentTime = clamp(left / gridGap / 10 + beginTime, beginTime, beginTime + perDuration);

          _this2.wf.emit(event.type, currentTime, event);
        });
      }
    }, {
      key: "resizeInit",
      value: function resizeInit() {
        var _this3 = this;

        var throttleResize = throttle(function () {
          _this3.wf.template.update();

          _this3.wf.drawer.update();

          _this3.wf.emit('resize');
        }, 500);
        var proxy = this.wf.events.proxy;
        proxy(window, ['resize', 'orientationchange'], function () {
          throttleResize();
        });
      }
    }, {
      key: "playInit",
      value: function playInit() {
        var mediaElement = this.wf.options.mediaElement;
        if (!mediaElement) return;
        (function loop() {
          var _this4 = this;

          this.timer = requestAnimationFrame(function () {
            var playing = !!(mediaElement.currentTime > 0 && !mediaElement.paused && !mediaElement.ended && mediaElement.readyState > 2);

            if (playing) {
              _this4.wf.drawer.update();

              _this4.wf.emit('play', mediaElement.currentTime);
            }

            if (!_this4.wf.destroy) {
              loop.call(_this4);
            }
          });
        }).call(this);
      }
    }, {
      key: "destroy",
      value: function destroy() {
        cancelAnimationFrame(this.timer);
      }
    }]);

    return Controller;
  }();

  function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

  function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }
  var id = 0;

  var WFPlayer =
  /*#__PURE__*/
  function (_Emitter) {
    inherits(WFPlayer, _Emitter);

    createClass(WFPlayer, null, [{
      key: "version",
      get: function get() {
        return '1.1.3';
      }
    }, {
      key: "env",
      get: function get() {
        return '"development"';
      }
    }, {
      key: "default",
      get: function get() {
        return {
          container: '#wfplayer',
          mediaElement: '',
          waveColor: 'rgba(255, 255, 255, 0.1)',
          backgroundColor: 'rgb(28, 32, 34)',
          cursor: true,
          cursorColor: '#ff0000',
          progress: true,
          progressColor: '#fff',
          grid: true,
          gridColor: 'rgba(255, 255, 255, 0.05)',
          ruler: true,
          rulerColor: 'rgba(255, 255, 255, 0.5)',
          rulerAtTop: true,
          pixelRatio: window.devicePixelRatio,
          zoom: 1,
          withCredentials: false,
          cors: false,
          headers: {},
          channel: 0,
          perDuration: 10,
          padding: 5
        };
      }
    }, {
      key: "scheme",
      get: function get() {
        return {
          container: 'string|htmlelement',
          mediaElement: 'string|HTMLVideoElement|HTMLAudioElement',
          waveColor: 'string',
          backgroundColor: 'string',
          cursor: 'boolean',
          cursorColor: 'string',
          progress: 'boolean',
          progressColor: 'string',
          grid: 'boolean',
          gridColor: 'string',
          ruler: 'boolean',
          rulerColor: 'string',
          rulerAtTop: 'boolean',
          pixelRatio: 'number',
          zoom: 'number',
          withCredentials: 'boolean',
          cors: 'boolean',
          headers: 'object',
          channel: 'number',
          perDuration: 'number',
          padding: 'number'
        };
      }
    }]);

    function WFPlayer() {
      var _this;

      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      classCallCheck(this, WFPlayer);

      _this = possibleConstructorReturn(this, getPrototypeOf(WFPlayer).call(this));
      _this.destroy = false;
      _this.options = {};

      _this.setOptions(options);

      _this.events = new Events(assertThisInitialized(_this));
      _this.template = new Template(assertThisInitialized(_this));
      _this.drawer = new Drawer(assertThisInitialized(_this));
      _this.controller = new Controller(assertThisInitialized(_this));
      _this.decoder = new Decoder(assertThisInitialized(_this));
      _this.loader = new Loader(assertThisInitialized(_this));
      id += 1;
      _this.id = id;
      WFPlayer.instances.push(assertThisInitialized(_this));
      return _this;
    }

    createClass(WFPlayer, [{
      key: "setOptions",
      value: function setOptions() {
        var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        if (typeof options.container === 'string') {
          options.container = document.querySelector(options.container);
        }

        if (typeof options.mediaElement === 'string') {
          options.mediaElement = document.querySelector(options.mediaElement);
        }

        this.options = optionValidator(_objectSpread({}, WFPlayer.default, {}, this.options, {}, options), WFPlayer.scheme);
        this.emit('options', this.options);
        return this;
      }
    }, {
      key: "load",
      value: function load(target) {
        if (target instanceof HTMLVideoElement || target instanceof HTMLAudioElement) {
          this.options.mediaElement = target;
          target = target.src;
        }

        this.loader.load(target);
        this.emit('load', target);
        return this;
      }
    }, {
      key: "seek",
      value: function seek(time) {
        this.drawer.seek(time);
        return this;
      }
    }, {
      key: "zoom",
      value: function zoom(scale, startTime) {
        this.drawer.zoom(scale, startTime);
        return this;
      }
    }, {
      key: "exportImage",
      value: function exportImage() {
        this.template.exportImage();
        return this;
      }
    }, {
      key: "destroy",
      value: function destroy() {
        this.destroy = true;
        this.events.destroy();
        this.template.destroy();
        this.drawer.destroy();
        this.controller.destroy();
        this.decoder.destroy();
        this.loader.destroy();
        WFPlayer.instances.splice(WFPlayer.instances.indexOf(this), 1);
      }
    }, {
      key: "currentTime",
      get: function get() {
        return this.options.mediaElement ? this.options.mediaElement.currentTime : 0;
      }
    }, {
      key: "duration",
      get: function get() {
        return this.options.mediaElement ? this.options.mediaElement.duration : 0;
      }
    }]);

    return WFPlayer;
  }(Emitter);

  Object.defineProperty(WFPlayer, 'instances', {
    value: []
  });

  return WFPlayer;

}));
//# sourceMappingURL=wfplayer.js.map
