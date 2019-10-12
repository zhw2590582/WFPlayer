/*!
 * WFPlayer.js v1.0.1
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
  function timeToDuration(time) {
    return durationTimeConversion.t2d(time);
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
  function getMinAndMax(arr) {
    var min = 1;
    var max = -1;

    for (var i = 0; i < arr.length; i += 1) {
      var item = arr[i];

      if (item < min) {
        min = item;
      } else if (item > max) {
        max = item;
      }
    }

    return [min, max];
  }
  function clamp(num, a, b) {
    return Math.max(Math.min(num, Math.max(a, b)), Math.min(a, b));
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
        var clientWidth = container.clientWidth,
            clientHeight = container.clientHeight;

        if (this.canvas) {
          this.canvas.width = clientWidth * pixelRatio;
          this.canvas.height = clientHeight * pixelRatio;
        } else {
          errorHandle(this.wf.constructor.instances.every(function (wf) {
            return wf.options.container !== container;
          }), 'Cannot mount multiple instances on the same dom element, please destroy the previous instance first.');
          errorHandle(clientWidth && clientHeight, 'The width and height of the container cannot be 0');
          container.innerHTML = '';
          this.canvas = document.createElement('canvas');
          this.canvas.width = clientWidth * pixelRatio;
          this.canvas.height = clientHeight * pixelRatio;
          this.canvas.style.width = '100%';
          this.canvas.style.height = '100%';
          container.appendChild(this.canvas);
        }
      }
    }, {
      key: "exportImage",
      value: function exportImage() {
        var elink = document.createElement('a');
        elink.style.display = 'none';
        elink.href = this.canvas.toDataURL('image/png');
        elink.download = "".concat(Date.now(), ".png");
        document.body.appendChild(elink);
        elink.click();
        document.body.removeChild(elink);
      }
    }, {
      key: "destroy",
      value: function destroy() {
        this.wf.options.container.innerHTML = '';
      }
    }]);

    return Template;
  }();

  function _arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr;
  }

  var arrayWithHoles = _arrayWithHoles;

  function _iterableToArrayLimit(arr, i) {
    if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) {
      return;
    }

    var _arr = [];
    var _n = true;
    var _d = false;
    var _e = undefined;

    try {
      for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);

        if (i && _arr.length === i) break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"] != null) _i["return"]();
      } finally {
        if (_d) throw _e;
      }
    }

    return _arr;
  }

  var iterableToArrayLimit = _iterableToArrayLimit;

  function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance");
  }

  var nonIterableRest = _nonIterableRest;

  function _slicedToArray(arr, i) {
    return arrayWithHoles(arr) || iterableToArrayLimit(arr, i) || nonIterableRest();
  }

  var slicedToArray = _slicedToArray;

  var Drawer =
  /*#__PURE__*/
  function () {
    function Drawer(wf) {
      var _this = this;

      classCallCheck(this, Drawer);

      this.wf = wf;
      this.canvas = wf.template.canvas;
      this.ctx = this.canvas.getContext('2d');
      this.gridNum = 0;
      this.gridGap = 0;
      this.beginTime = 0;
      this.update();
      wf.on('options', function () {
        _this.update();
      });
      wf.on('channelData', function () {
        _this.update();
      });
    }

    createClass(Drawer, [{
      key: "update",
      value: function update() {
        var _this$wf = this.wf,
            currentTime = _this$wf.currentTime,
            _this$wf$options = _this$wf.options,
            cursor = _this$wf$options.cursor,
            grid = _this$wf$options.grid,
            ruler = _this$wf$options.ruler,
            duration = _this$wf$options.duration,
            padding = _this$wf$options.padding;
        this.gridNum = duration * 10 + padding * 2;
        this.gridGap = this.canvas.width / this.gridNum;
        this.beginTime = Math.floor(currentTime / duration) * duration;
        this.updateBackground();

        if (grid) {
          this.updateGrid();
        }

        if (ruler) {
          this.updateRuler();
        }

        this.updateWave();

        if (cursor) {
          this.updateCursor();
        }
      }
    }, {
      key: "updateBackground",
      value: function updateBackground() {
        var backgroundColor = this.wf.options.backgroundColor;
        var _this$canvas = this.canvas,
            width = _this$canvas.width,
            height = _this$canvas.height;
        this.ctx.clearRect(0, 0, width, height);
        this.ctx.fillStyle = backgroundColor;
        this.ctx.fillRect(0, 0, width, height);
      }
    }, {
      key: "updateWave",
      value: function updateWave() {
        var _this$wf2 = this.wf,
            currentTime = _this$wf2.currentTime,
            _this$wf2$options = _this$wf2.options,
            progress = _this$wf2$options.progress,
            waveColor = _this$wf2$options.waveColor,
            progressColor = _this$wf2$options.progressColor,
            duration = _this$wf2$options.duration,
            padding = _this$wf2$options.padding,
            _this$wf2$decoder = _this$wf2.decoder,
            channelData = _this$wf2$decoder.channelData,
            sampleRate = _this$wf2$decoder.audiobuffer.sampleRate;
        var _this$canvas2 = this.canvas,
            width = _this$canvas2.width,
            height = _this$canvas2.height;
        var middle = height / 2;
        var waveWidth = width - this.gridGap * padding * 2;
        var startIndex = clamp(this.beginTime * sampleRate, 0, channelData.length);
        var endIndex = clamp((this.beginTime + duration) * sampleRate, startIndex, channelData.length);
        if (endIndex <= startIndex || channelData.length - 1 < endIndex) return;
        var step = Math.floor((endIndex - startIndex) / waveWidth);
        var cursorX = padding * this.gridGap + (currentTime - this.beginTime) * this.gridGap * 10;
        var index = -1;
        var arr = [];

        for (var i = startIndex; i < endIndex; i += 1) {
          arr.push(channelData[i] || 0);

          if (arr.length >= step && index < waveWidth) {
            index += 1;

            var _getMinAndMax = getMinAndMax(arr),
                _getMinAndMax2 = slicedToArray(_getMinAndMax, 2),
                min = _getMinAndMax2[0],
                max = _getMinAndMax2[1];

            var waveX = this.gridGap * padding + index;
            this.ctx.fillStyle = progress && cursorX >= waveX ? progressColor : waveColor;
            this.ctx.fillRect(waveX, (1 + min) * middle, 1, Math.max(1, (max - min) * middle));
            arr.length = 0;
          }
        }
      }
    }, {
      key: "updateGrid",
      value: function updateGrid() {
        var _this$wf$options2 = this.wf.options,
            gridColor = _this$wf$options2.gridColor,
            pixelRatio = _this$wf$options2.pixelRatio;
        var _this$canvas3 = this.canvas,
            width = _this$canvas3.width,
            height = _this$canvas3.height;
        this.ctx.fillStyle = gridColor;

        for (var index = 0; index < this.gridNum; index += 1) {
          this.ctx.fillRect(this.gridGap * index, 0, pixelRatio, height);
        }

        for (var _index = 0; _index < height / this.gridGap; _index += 1) {
          this.ctx.fillRect(0, this.gridGap * _index, width, pixelRatio);
        }
      }
    }, {
      key: "updateRuler",
      value: function updateRuler() {
        var _this$wf$options3 = this.wf.options,
            rulerColor = _this$wf$options3.rulerColor,
            pixelRatio = _this$wf$options3.pixelRatio,
            padding = _this$wf$options3.padding,
            rulerAtTop = _this$wf$options3.rulerAtTop;
        var height = this.canvas.height;
        var fontSize = 11;
        var fontHeight = 15;
        var fontTop = 30;
        this.ctx.font = "".concat(fontSize * pixelRatio, "px Arial");
        this.ctx.fillStyle = rulerColor;
        var second = -1;

        for (var index = 0; index < this.gridNum; index += 1) {
          if ((index - padding) % 10 === 0) {
            second += 1;
            this.ctx.fillRect(this.gridGap * index, rulerAtTop ? 0 : height - fontHeight * pixelRatio, pixelRatio, fontHeight * pixelRatio);
            this.ctx.fillText(durationToTime(this.beginTime + second).split('.')[0], this.gridGap * index - fontSize * pixelRatio * 2 + pixelRatio, rulerAtTop ? fontTop * pixelRatio : height - fontTop * pixelRatio + fontSize);
          } else if ((index - padding) % 5 === 0 && index) {
            this.ctx.fillRect(this.gridGap * index, rulerAtTop ? 0 : height - fontHeight / 2 * pixelRatio, pixelRatio, fontHeight / 2 * pixelRatio);
          }
        }
      }
    }, {
      key: "updateCursor",
      value: function updateCursor() {
        var _this$wf3 = this.wf,
            currentTime = _this$wf3.currentTime,
            _this$wf3$options = _this$wf3.options,
            cursorColor = _this$wf3$options.cursorColor,
            pixelRatio = _this$wf3$options.pixelRatio,
            padding = _this$wf3$options.padding;
        var height = this.canvas.height;
        this.ctx.fillStyle = cursorColor;
        this.ctx.fillRect(padding * this.gridGap + (currentTime - this.beginTime) * this.gridGap * 10, 0, pixelRatio, height);
      }
    }]);

    return Drawer;
  }();

  /**
   * Checks if `value` is the
   * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
   * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is an object, else `false`.
   * @example
   *
   * _.isObject({});
   * // => true
   *
   * _.isObject([1, 2, 3]);
   * // => true
   *
   * _.isObject(_.noop);
   * // => true
   *
   * _.isObject(null);
   * // => false
   */
  function isObject(value) {
    var type = typeof value;
    return value != null && (type == 'object' || type == 'function');
  }

  var isObject_1 = isObject;

  /** Detect free variable `global` from Node.js. */
  var freeGlobal = typeof commonjsGlobal == 'object' && commonjsGlobal && commonjsGlobal.Object === Object && commonjsGlobal;

  var _freeGlobal = freeGlobal;

  /** Detect free variable `self`. */
  var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

  /** Used as a reference to the global object. */
  var root = _freeGlobal || freeSelf || Function('return this')();

  var _root = root;

  /**
   * Gets the timestamp of the number of milliseconds that have elapsed since
   * the Unix epoch (1 January 1970 00:00:00 UTC).
   *
   * @static
   * @memberOf _
   * @since 2.4.0
   * @category Date
   * @returns {number} Returns the timestamp.
   * @example
   *
   * _.defer(function(stamp) {
   *   console.log(_.now() - stamp);
   * }, _.now());
   * // => Logs the number of milliseconds it took for the deferred invocation.
   */
  var now = function() {
    return _root.Date.now();
  };

  var now_1 = now;

  /** Built-in value references. */
  var Symbol$1 = _root.Symbol;

  var _Symbol = Symbol$1;

  /** Used for built-in method references. */
  var objectProto = Object.prototype;

  /** Used to check objects for own properties. */
  var hasOwnProperty = objectProto.hasOwnProperty;

  /**
   * Used to resolve the
   * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
   * of values.
   */
  var nativeObjectToString = objectProto.toString;

  /** Built-in value references. */
  var symToStringTag = _Symbol ? _Symbol.toStringTag : undefined;

  /**
   * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
   *
   * @private
   * @param {*} value The value to query.
   * @returns {string} Returns the raw `toStringTag`.
   */
  function getRawTag(value) {
    var isOwn = hasOwnProperty.call(value, symToStringTag),
        tag = value[symToStringTag];

    try {
      value[symToStringTag] = undefined;
      var unmasked = true;
    } catch (e) {}

    var result = nativeObjectToString.call(value);
    if (unmasked) {
      if (isOwn) {
        value[symToStringTag] = tag;
      } else {
        delete value[symToStringTag];
      }
    }
    return result;
  }

  var _getRawTag = getRawTag;

  /** Used for built-in method references. */
  var objectProto$1 = Object.prototype;

  /**
   * Used to resolve the
   * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
   * of values.
   */
  var nativeObjectToString$1 = objectProto$1.toString;

  /**
   * Converts `value` to a string using `Object.prototype.toString`.
   *
   * @private
   * @param {*} value The value to convert.
   * @returns {string} Returns the converted string.
   */
  function objectToString(value) {
    return nativeObjectToString$1.call(value);
  }

  var _objectToString = objectToString;

  /** `Object#toString` result references. */
  var nullTag = '[object Null]',
      undefinedTag = '[object Undefined]';

  /** Built-in value references. */
  var symToStringTag$1 = _Symbol ? _Symbol.toStringTag : undefined;

  /**
   * The base implementation of `getTag` without fallbacks for buggy environments.
   *
   * @private
   * @param {*} value The value to query.
   * @returns {string} Returns the `toStringTag`.
   */
  function baseGetTag(value) {
    if (value == null) {
      return value === undefined ? undefinedTag : nullTag;
    }
    return (symToStringTag$1 && symToStringTag$1 in Object(value))
      ? _getRawTag(value)
      : _objectToString(value);
  }

  var _baseGetTag = baseGetTag;

  /**
   * Checks if `value` is object-like. A value is object-like if it's not `null`
   * and has a `typeof` result of "object".
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
   * @example
   *
   * _.isObjectLike({});
   * // => true
   *
   * _.isObjectLike([1, 2, 3]);
   * // => true
   *
   * _.isObjectLike(_.noop);
   * // => false
   *
   * _.isObjectLike(null);
   * // => false
   */
  function isObjectLike(value) {
    return value != null && typeof value == 'object';
  }

  var isObjectLike_1 = isObjectLike;

  /** `Object#toString` result references. */
  var symbolTag = '[object Symbol]';

  /**
   * Checks if `value` is classified as a `Symbol` primitive or object.
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
   * @example
   *
   * _.isSymbol(Symbol.iterator);
   * // => true
   *
   * _.isSymbol('abc');
   * // => false
   */
  function isSymbol(value) {
    return typeof value == 'symbol' ||
      (isObjectLike_1(value) && _baseGetTag(value) == symbolTag);
  }

  var isSymbol_1 = isSymbol;

  /** Used as references for various `Number` constants. */
  var NAN = 0 / 0;

  /** Used to match leading and trailing whitespace. */
  var reTrim = /^\s+|\s+$/g;

  /** Used to detect bad signed hexadecimal string values. */
  var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

  /** Used to detect binary string values. */
  var reIsBinary = /^0b[01]+$/i;

  /** Used to detect octal string values. */
  var reIsOctal = /^0o[0-7]+$/i;

  /** Built-in method references without a dependency on `root`. */
  var freeParseInt = parseInt;

  /**
   * Converts `value` to a number.
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Lang
   * @param {*} value The value to process.
   * @returns {number} Returns the number.
   * @example
   *
   * _.toNumber(3.2);
   * // => 3.2
   *
   * _.toNumber(Number.MIN_VALUE);
   * // => 5e-324
   *
   * _.toNumber(Infinity);
   * // => Infinity
   *
   * _.toNumber('3.2');
   * // => 3.2
   */
  function toNumber(value) {
    if (typeof value == 'number') {
      return value;
    }
    if (isSymbol_1(value)) {
      return NAN;
    }
    if (isObject_1(value)) {
      var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
      value = isObject_1(other) ? (other + '') : other;
    }
    if (typeof value != 'string') {
      return value === 0 ? value : +value;
    }
    value = value.replace(reTrim, '');
    var isBinary = reIsBinary.test(value);
    return (isBinary || reIsOctal.test(value))
      ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
      : (reIsBadHex.test(value) ? NAN : +value);
  }

  var toNumber_1 = toNumber;

  /** Error message constants. */
  var FUNC_ERROR_TEXT = 'Expected a function';

  /* Built-in method references for those with the same name as other `lodash` methods. */
  var nativeMax = Math.max,
      nativeMin = Math.min;

  /**
   * Creates a debounced function that delays invoking `func` until after `wait`
   * milliseconds have elapsed since the last time the debounced function was
   * invoked. The debounced function comes with a `cancel` method to cancel
   * delayed `func` invocations and a `flush` method to immediately invoke them.
   * Provide `options` to indicate whether `func` should be invoked on the
   * leading and/or trailing edge of the `wait` timeout. The `func` is invoked
   * with the last arguments provided to the debounced function. Subsequent
   * calls to the debounced function return the result of the last `func`
   * invocation.
   *
   * **Note:** If `leading` and `trailing` options are `true`, `func` is
   * invoked on the trailing edge of the timeout only if the debounced function
   * is invoked more than once during the `wait` timeout.
   *
   * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
   * until to the next tick, similar to `setTimeout` with a timeout of `0`.
   *
   * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
   * for details over the differences between `_.debounce` and `_.throttle`.
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @category Function
   * @param {Function} func The function to debounce.
   * @param {number} [wait=0] The number of milliseconds to delay.
   * @param {Object} [options={}] The options object.
   * @param {boolean} [options.leading=false]
   *  Specify invoking on the leading edge of the timeout.
   * @param {number} [options.maxWait]
   *  The maximum time `func` is allowed to be delayed before it's invoked.
   * @param {boolean} [options.trailing=true]
   *  Specify invoking on the trailing edge of the timeout.
   * @returns {Function} Returns the new debounced function.
   * @example
   *
   * // Avoid costly calculations while the window size is in flux.
   * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
   *
   * // Invoke `sendMail` when clicked, debouncing subsequent calls.
   * jQuery(element).on('click', _.debounce(sendMail, 300, {
   *   'leading': true,
   *   'trailing': false
   * }));
   *
   * // Ensure `batchLog` is invoked once after 1 second of debounced calls.
   * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
   * var source = new EventSource('/stream');
   * jQuery(source).on('message', debounced);
   *
   * // Cancel the trailing debounced invocation.
   * jQuery(window).on('popstate', debounced.cancel);
   */
  function debounce(func, wait, options) {
    var lastArgs,
        lastThis,
        maxWait,
        result,
        timerId,
        lastCallTime,
        lastInvokeTime = 0,
        leading = false,
        maxing = false,
        trailing = true;

    if (typeof func != 'function') {
      throw new TypeError(FUNC_ERROR_TEXT);
    }
    wait = toNumber_1(wait) || 0;
    if (isObject_1(options)) {
      leading = !!options.leading;
      maxing = 'maxWait' in options;
      maxWait = maxing ? nativeMax(toNumber_1(options.maxWait) || 0, wait) : maxWait;
      trailing = 'trailing' in options ? !!options.trailing : trailing;
    }

    function invokeFunc(time) {
      var args = lastArgs,
          thisArg = lastThis;

      lastArgs = lastThis = undefined;
      lastInvokeTime = time;
      result = func.apply(thisArg, args);
      return result;
    }

    function leadingEdge(time) {
      // Reset any `maxWait` timer.
      lastInvokeTime = time;
      // Start the timer for the trailing edge.
      timerId = setTimeout(timerExpired, wait);
      // Invoke the leading edge.
      return leading ? invokeFunc(time) : result;
    }

    function remainingWait(time) {
      var timeSinceLastCall = time - lastCallTime,
          timeSinceLastInvoke = time - lastInvokeTime,
          timeWaiting = wait - timeSinceLastCall;

      return maxing
        ? nativeMin(timeWaiting, maxWait - timeSinceLastInvoke)
        : timeWaiting;
    }

    function shouldInvoke(time) {
      var timeSinceLastCall = time - lastCallTime,
          timeSinceLastInvoke = time - lastInvokeTime;

      // Either this is the first call, activity has stopped and we're at the
      // trailing edge, the system time has gone backwards and we're treating
      // it as the trailing edge, or we've hit the `maxWait` limit.
      return (lastCallTime === undefined || (timeSinceLastCall >= wait) ||
        (timeSinceLastCall < 0) || (maxing && timeSinceLastInvoke >= maxWait));
    }

    function timerExpired() {
      var time = now_1();
      if (shouldInvoke(time)) {
        return trailingEdge(time);
      }
      // Restart the timer.
      timerId = setTimeout(timerExpired, remainingWait(time));
    }

    function trailingEdge(time) {
      timerId = undefined;

      // Only invoke if we have `lastArgs` which means `func` has been
      // debounced at least once.
      if (trailing && lastArgs) {
        return invokeFunc(time);
      }
      lastArgs = lastThis = undefined;
      return result;
    }

    function cancel() {
      if (timerId !== undefined) {
        clearTimeout(timerId);
      }
      lastInvokeTime = 0;
      lastArgs = lastCallTime = lastThis = timerId = undefined;
    }

    function flush() {
      return timerId === undefined ? result : trailingEdge(now_1());
    }

    function debounced() {
      var time = now_1(),
          isInvoking = shouldInvoke(time);

      lastArgs = arguments;
      lastThis = this;
      lastCallTime = time;

      if (isInvoking) {
        if (timerId === undefined) {
          return leadingEdge(lastCallTime);
        }
        if (maxing) {
          // Handle invocations in a tight loop.
          clearTimeout(timerId);
          timerId = setTimeout(timerExpired, wait);
          return invokeFunc(lastCallTime);
        }
      }
      if (timerId === undefined) {
        timerId = setTimeout(timerExpired, wait);
      }
      return result;
    }
    debounced.cancel = cancel;
    debounced.flush = flush;
    return debounced;
  }

  var debounce_1 = debounce;

  /** Error message constants. */
  var FUNC_ERROR_TEXT$1 = 'Expected a function';

  /**
   * Creates a throttled function that only invokes `func` at most once per
   * every `wait` milliseconds. The throttled function comes with a `cancel`
   * method to cancel delayed `func` invocations and a `flush` method to
   * immediately invoke them. Provide `options` to indicate whether `func`
   * should be invoked on the leading and/or trailing edge of the `wait`
   * timeout. The `func` is invoked with the last arguments provided to the
   * throttled function. Subsequent calls to the throttled function return the
   * result of the last `func` invocation.
   *
   * **Note:** If `leading` and `trailing` options are `true`, `func` is
   * invoked on the trailing edge of the timeout only if the throttled function
   * is invoked more than once during the `wait` timeout.
   *
   * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
   * until to the next tick, similar to `setTimeout` with a timeout of `0`.
   *
   * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
   * for details over the differences between `_.throttle` and `_.debounce`.
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @category Function
   * @param {Function} func The function to throttle.
   * @param {number} [wait=0] The number of milliseconds to throttle invocations to.
   * @param {Object} [options={}] The options object.
   * @param {boolean} [options.leading=true]
   *  Specify invoking on the leading edge of the timeout.
   * @param {boolean} [options.trailing=true]
   *  Specify invoking on the trailing edge of the timeout.
   * @returns {Function} Returns the new throttled function.
   * @example
   *
   * // Avoid excessively updating the position while scrolling.
   * jQuery(window).on('scroll', _.throttle(updatePosition, 100));
   *
   * // Invoke `renewToken` when the click event is fired, but not more than once every 5 minutes.
   * var throttled = _.throttle(renewToken, 300000, { 'trailing': false });
   * jQuery(element).on('click', throttled);
   *
   * // Cancel the trailing throttled invocation.
   * jQuery(window).on('popstate', throttled.cancel);
   */
  function throttle(func, wait, options) {
    var leading = true,
        trailing = true;

    if (typeof func != 'function') {
      throw new TypeError(FUNC_ERROR_TEXT$1);
    }
    if (isObject_1(options)) {
      leading = 'leading' in options ? !!options.leading : leading;
      trailing = 'trailing' in options ? !!options.trailing : trailing;
    }
    return debounce_1(func, wait, {
      'leading': leading,
      'maxWait': wait,
      'trailing': trailing
    });
  }

  var throttle_1 = throttle;

  var Decoder =
  /*#__PURE__*/
  function () {
    function Decoder(wf) {
      var _this = this;

      classCallCheck(this, Decoder);

      this.wf = wf;
      this.audioCtx = new (window.AudioContext || window.webkitAudioContext)();
      this.throttleDecodeAudioData = throttle_1(this.decodeAudioData, 500);
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

        var _this$wf = this.wf,
            channel = _this$wf.options.channel,
            duration = _this$wf.duration;
        this.audioCtx.decodeAudioData(uint8.buffer).then(function (audiobuffer) {
          _this2.wf.emit('decodeing', audiobuffer.duration / duration);

          _this2.audiobuffer = audiobuffer;
          _this2.channelData = audiobuffer.getChannelData(channel);

          _this2.wf.emit('channelData', _this2.channelData);
        }).catch(function (error) {
          errorHandle(false, "It seems that the AudioContext decoding get wrong: ".concat(error.message.trim()));
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
      this.abortController = null;
    }

    createClass(Loader, [{
      key: "load",
      value: function load(url) {
        var _this = this;

        this.destroy();
        this.abortController = new AbortController();
        var _this$wf$options = this.wf.options,
            withCredentials = _this$wf$options.withCredentials,
            cors = _this$wf$options.cors,
            headers = _this$wf$options.headers;
        this.wf.emit('loadStart');
        return fetch(url, {
          credentials: withCredentials ? 'include' : 'omit',
          mode: cors ? 'cors' : 'no-cors',
          signal: this.abortController.signal,
          headers: headers
        }).then(function (response) {
          if (response.body && typeof response.body.getReader === 'function') {
            _this.fileSize = Number(response.headers.get('content-length'));

            _this.wf.emit('fileSize', _this.fileSize);

            _this.reader = response.body.getReader();
            return function read() {
              var _this2 = this;

              return this.reader.read().then(function (_ref) {
                var done = _ref.done,
                    value = _ref.value;

                if (done) {
                  _this2.wf.emit('loadEnd');

                  return null;
                }

                _this2.loadSize += value.byteLength;

                _this2.wf.emit('downloading', _this2.loadSize / _this2.fileSize);

                _this2.data = mergeBuffer(_this2.data, value);

                _this2.wf.emit('loading', _this2.data.slice());

                return read.call(_this2);
              });
            }.call(_this);
          }

          return response.arrayBuffer();
        }).then(function (arrayBuffer) {
          if (arrayBuffer && arrayBuffer.byteLength) {
            var uint8 = new Uint8Array(arrayBuffer);
            _this.fileSize = uint8.byteLength;

            _this.wf.emit('fileSize', _this.fileSize);

            _this.loadSize = uint8.byteLength;

            _this.wf.emit('downloading', _this.loadSize / _this.fileSize);

            _this.wf.emit('loading', uint8);

            _this.wf.emit('loadEnd');
          }
        });
      }
    }, {
      key: "destroy",
      value: function destroy() {
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
      this.playTimer = null;
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

        var _this$wf = this.wf,
            canvas = _this$wf.template.canvas,
            proxy = _this$wf.events.proxy;
        proxy(canvas, ['click', 'contextmenu'], function (event) {
          var _this2$wf = _this2.wf,
              currentTime = _this2$wf.currentTime,
              _this2$wf$options = _this2$wf.options,
              duration = _this2$wf$options.duration,
              padding = _this2$wf$options.padding,
              container = _this2$wf$options.container;
          var gridNum = duration * 10 + padding * 2;
          var gridGap = canvas.width / gridNum;
          var left = clamp(event.pageX - container.offsetLeft - padding * gridGap, 0, Infinity);
          var beginTime = Math.floor(currentTime / duration) * 10;
          var time = clamp(left / gridGap / 10 + beginTime, beginTime, beginTime + duration);

          _this2.wf.emit(event.type, time, event);
        });
      }
    }, {
      key: "resizeInit",
      value: function resizeInit() {
        var _this3 = this;

        var _this$wf2 = this.wf,
            template = _this$wf2.template,
            drawer = _this$wf2.drawer,
            proxy = _this$wf2.events.proxy;
        var throttleResize = throttle_1(function () {
          template.update();
          drawer.update();

          _this3.wf.emit('resize');
        }, 500);
        proxy(window, ['resize', 'orientationchange'], function () {
          throttleResize();
        });
      }
    }, {
      key: "playInit",
      value: function playInit() {
        var _this$wf3 = this.wf,
            drawer = _this$wf3.drawer,
            mediaElement = _this$wf3.options.mediaElement;
        if (!mediaElement) return;
        (function loop() {
          var _this4 = this;

          this.playTimer = requestAnimationFrame(function () {
            if (_this4.wf.playing) {
              drawer.update();

              _this4.wf.emit('playing', mediaElement.currentTime);
            }

            if (!_this4.wf.isDestroy) {
              loop.call(_this4);
            }
          });
        }).call(this);
      }
    }, {
      key: "destroy",
      value: function destroy() {
        cancelAnimationFrame(this.playTimer);
      }
    }]);

    return Controller;
  }();

  function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

  function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }
  var id = 0;
  var instances = [];

  var WFPlayer =
  /*#__PURE__*/
  function (_Emitter) {
    inherits(WFPlayer, _Emitter);

    createClass(WFPlayer, null, [{
      key: "instances",
      get: function get() {
        return instances;
      }
    }, {
      key: "version",
      get: function get() {
        return '1.0.1';
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
          container: '#waveform',
          mediaElement: null,
          waveColor: 'rgba(255, 255, 255, 0.1)',
          backgroundColor: 'rgb(28, 32, 34)',
          cursor: true,
          cursorColor: '#ff0000',
          progress: true,
          progressColor: 'rgba(255, 255, 255, 0.5)',
          grid: true,
          gridColor: 'rgba(255, 255, 255, 0.05)',
          ruler: true,
          rulerColor: 'rgba(255, 255, 255, 0.5)',
          rulerAtTop: true,
          withCredentials: false,
          cors: false,
          headers: {},
          pixelRatio: window.devicePixelRatio,
          channel: 0,
          duration: 10,
          padding: 5
        };
      }
    }, {
      key: "scheme",
      get: function get() {
        var checkNum = function checkNum(name, min) {
          return function (value, type) {
            errorHandle(type === 'number', "".concat(name, " expects to receive object as a parameter."));
            errorHandle(value >= min && Number.isInteger(value), "".concat(name, " expect a positive integer greater than or equal to ").concat(min, ", but got ").concat(value, "."));
            return true;
          };
        };

        return {
          container: 'htmlelement',
          mediaElement: 'null|htmlvideoelement|htmlaudioelement',
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
          withCredentials: 'boolean',
          cors: 'boolean',
          headers: 'object',
          pixelRatio: checkNum('pixelRatio', 1),
          channel: checkNum('channel', 0),
          duration: checkNum('duration', 1),
          padding: checkNum('padding', 1)
        };
      }
    }]);

    function WFPlayer() {
      var _this;

      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      classCallCheck(this, WFPlayer);

      _this = possibleConstructorReturn(this, getPrototypeOf(WFPlayer).call(this));
      _this._currentTime = 0;
      _this.isDestroy = false;
      _this.options = {};

      _this.setOptions(options);

      _this.events = new Events(assertThisInitialized(_this));
      _this.template = new Template(assertThisInitialized(_this));
      _this.decoder = new Decoder(assertThisInitialized(_this));
      _this.drawer = new Drawer(assertThisInitialized(_this));
      _this.controller = new Controller(assertThisInitialized(_this));
      _this.loader = new Loader(assertThisInitialized(_this));
      id += 1;
      _this.id = id;
      instances.push(assertThisInitialized(_this));
      return _this;
    }

    createClass(WFPlayer, [{
      key: "setOptions",
      value: function setOptions() {
        var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        errorHandle(optionValidator.kindOf(options) === 'object', 'setOptions expects to receive object as a parameter.');

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

        errorHandle(typeof target === 'string', "The load target is not a string. If you are loading a mediaElement, make sure the mediaElement.src is not empty.");
        this.loader.load(target);
        this.emit('load');
        return this;
      }
    }, {
      key: "seek",
      value: function seek(second) {
        errorHandle(typeof second === 'number', 'seek expects to receive number as a parameter.');
        this._currentTime = clamp(second, 0, this.duration);
        this.drawer.update();
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
        this.isDestroy = true;
        this.events.destroy();
        this.template.destroy();
        this.controller.destroy();
        this.decoder.destroy();
        this.loader.destroy();
        instances.splice(instances.indexOf(this), 1);
      }
    }, {
      key: "currentTime",
      get: function get() {
        return this.options.mediaElement ? this.options.mediaElement.currentTime : this._currentTime;
      }
    }, {
      key: "duration",
      get: function get() {
        return this.options.mediaElement ? this.options.mediaElement.duration : timeToDuration('99:59:59.999');
      }
    }, {
      key: "playing",
      get: function get() {
        var mediaElement = this.options.mediaElement;

        if (mediaElement) {
          return !!(mediaElement.currentTime > 0 && !mediaElement.paused && !mediaElement.ended && mediaElement.readyState > 2);
        }

        return false;
      }
    }]);

    return WFPlayer;
  }(Emitter);

  return WFPlayer;

}));
//# sourceMappingURL=wfplayer.js.map
