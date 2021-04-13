(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.WFPlayer = factory());
}(this, (function () { 'use strict';

	var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

	function unwrapExports (x) {
		return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
	}

	function createCommonjsModule(fn, module) {
		return module = { exports: {} }, fn(module, module.exports), module.exports;
	}

	var defineProperty = createCommonjsModule(function (module) {
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

	module.exports = _defineProperty;
	module.exports["default"] = module.exports, module.exports.__esModule = true;
	});

	var _defineProperty = unwrapExports(defineProperty);

	var classCallCheck = createCommonjsModule(function (module) {
	function _classCallCheck(instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	}

	module.exports = _classCallCheck;
	module.exports["default"] = module.exports, module.exports.__esModule = true;
	});

	var _classCallCheck = unwrapExports(classCallCheck);

	var createClass = createCommonjsModule(function (module) {
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

	module.exports = _createClass;
	module.exports["default"] = module.exports, module.exports.__esModule = true;
	});

	var _createClass = unwrapExports(createClass);

	var assertThisInitialized = createCommonjsModule(function (module) {
	function _assertThisInitialized(self) {
	  if (self === void 0) {
	    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	  }

	  return self;
	}

	module.exports = _assertThisInitialized;
	module.exports["default"] = module.exports, module.exports.__esModule = true;
	});

	var _assertThisInitialized = unwrapExports(assertThisInitialized);

	var setPrototypeOf = createCommonjsModule(function (module) {
	function _setPrototypeOf(o, p) {
	  module.exports = _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
	    o.__proto__ = p;
	    return o;
	  };

	  module.exports["default"] = module.exports, module.exports.__esModule = true;
	  return _setPrototypeOf(o, p);
	}

	module.exports = _setPrototypeOf;
	module.exports["default"] = module.exports, module.exports.__esModule = true;
	});

	unwrapExports(setPrototypeOf);

	var inherits = createCommonjsModule(function (module) {
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

	module.exports = _inherits;
	module.exports["default"] = module.exports, module.exports.__esModule = true;
	});

	var _inherits = unwrapExports(inherits);

	var _typeof_1 = createCommonjsModule(function (module) {
	function _typeof(obj) {
	  "@babel/helpers - typeof";

	  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
	    module.exports = _typeof = function _typeof(obj) {
	      return typeof obj;
	    };

	    module.exports["default"] = module.exports, module.exports.__esModule = true;
	  } else {
	    module.exports = _typeof = function _typeof(obj) {
	      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
	    };

	    module.exports["default"] = module.exports, module.exports.__esModule = true;
	  }

	  return _typeof(obj);
	}

	module.exports = _typeof;
	module.exports["default"] = module.exports, module.exports.__esModule = true;
	});

	unwrapExports(_typeof_1);

	var possibleConstructorReturn = createCommonjsModule(function (module) {
	var _typeof = _typeof_1["default"];



	function _possibleConstructorReturn(self, call) {
	  if (call && (_typeof(call) === "object" || typeof call === "function")) {
	    return call;
	  }

	  return assertThisInitialized(self);
	}

	module.exports = _possibleConstructorReturn;
	module.exports["default"] = module.exports, module.exports.__esModule = true;
	});

	var _possibleConstructorReturn = unwrapExports(possibleConstructorReturn);

	var getPrototypeOf = createCommonjsModule(function (module) {
	function _getPrototypeOf(o) {
	  module.exports = _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
	    return o.__proto__ || Object.getPrototypeOf(o);
	  };
	  module.exports["default"] = module.exports, module.exports.__esModule = true;
	  return _getPrototypeOf(o);
	}

	module.exports = _getPrototypeOf;
	module.exports["default"] = module.exports, module.exports.__esModule = true;
	});

	var _getPrototypeOf = unwrapExports(getPrototypeOf);

	var optionValidator = createCommonjsModule(function (module, exports) {
	!function(r,t){module.exports=t();}(commonjsGlobal,function(){function e(r){return (e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(r){return typeof r}:function(r){return r&&"function"==typeof Symbol&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r})(r)}var n=Object.prototype.toString,c=function(r){if(void 0===r)return "undefined";if(null===r)return "null";var t=e(r);if("boolean"===t)return "boolean";if("string"===t)return "string";if("number"===t)return "number";if("symbol"===t)return "symbol";if("function"===t)return function(r){return "GeneratorFunction"===o(r)}(r)?"generatorfunction":"function";if(function(r){return Array.isArray?Array.isArray(r):r instanceof Array}(r))return "array";if(function(r){if(r.constructor&&"function"==typeof r.constructor.isBuffer)return r.constructor.isBuffer(r);return !1}(r))return "buffer";if(function(r){try{if("number"==typeof r.length&&"function"==typeof r.callee)return !0}catch(r){if(-1!==r.message.indexOf("callee"))return !0}return !1}(r))return "arguments";if(function(r){return r instanceof Date||"function"==typeof r.toDateString&&"function"==typeof r.getDate&&"function"==typeof r.setDate}(r))return "date";if(function(r){return r instanceof Error||"string"==typeof r.message&&r.constructor&&"number"==typeof r.constructor.stackTraceLimit}(r))return "error";if(function(r){return r instanceof RegExp||"string"==typeof r.flags&&"boolean"==typeof r.ignoreCase&&"boolean"==typeof r.multiline&&"boolean"==typeof r.global}(r))return "regexp";switch(o(r)){case"Symbol":return "symbol";case"Promise":return "promise";case"WeakMap":return "weakmap";case"WeakSet":return "weakset";case"Map":return "map";case"Set":return "set";case"Int8Array":return "int8array";case"Uint8Array":return "uint8array";case"Uint8ClampedArray":return "uint8clampedarray";case"Int16Array":return "int16array";case"Uint16Array":return "uint16array";case"Int32Array":return "int32array";case"Uint32Array":return "uint32array";case"Float32Array":return "float32array";case"Float64Array":return "float64array"}if(function(r){return "function"==typeof r.throw&&"function"==typeof r.return&&"function"==typeof r.next}(r))return "generator";switch(t=n.call(r)){case"[object Object]":return "object";case"[object Map Iterator]":return "mapiterator";case"[object Set Iterator]":return "setiterator";case"[object String Iterator]":return "stringiterator";case"[object Array Iterator]":return "arrayiterator"}return t.slice(8,-1).toLowerCase().replace(/\s/g,"")};function o(r){return r.constructor?r.constructor.name:null}function f(r,t){var e=2<arguments.length&&void 0!==arguments[2]?arguments[2]:["option"];return s(r,t,e),y(r,t,e),function(a,i,u){var r=c(i),t=c(a);if("object"===r){if("object"!==t)throw new Error("[Type Error]: '".concat(u.join("."),"' require 'object' type, but got '").concat(t,"'"));Object.keys(i).forEach(function(r){var t=a[r],e=i[r],n=u.slice();n.push(r),s(t,e,n),y(t,e,n),f(t,e,n);});}if("array"===r){if("array"!==t)throw new Error("[Type Error]: '".concat(u.join("."),"' require 'array' type, but got '").concat(t,"'"));a.forEach(function(r,t){var e=a[t],n=i[t]||i[0],o=u.slice();o.push(t),s(e,n,o),y(e,n,o),f(e,n,o);});}}(r,t,e),r}function s(r,t,e){if("string"===c(t)){var n=c(r);if("?"===t[0]&&(t=t.slice(1)+"|undefined"),!(-1<t.indexOf("|")?t.split("|").map(function(r){return r.toLowerCase().trim()}).filter(Boolean).some(function(r){return n===r}):t.toLowerCase().trim()===n))throw new Error("[Type Error]: '".concat(e.join("."),"' require '").concat(t,"' type, but got '").concat(n,"'"))}}function y(r,t,e){if("function"===c(t)){var n=t(r,c(r),e);if(!0!==n){var o=c(n);throw "string"===o?new Error(n):"error"===o?n:new Error("[Validator Error]: The scheme for '".concat(e.join("."),"' validator require return true, but got '").concat(n,"'"))}}}return f.kindOf=c,f});
	});

	var Emitter = /*#__PURE__*/function () {
	  function Emitter() {
	    _classCallCheck(this, Emitter);
	  }

	  _createClass(Emitter, [{
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

	var Events = /*#__PURE__*/function () {
	  function Events() {
	    _classCallCheck(this, Events);

	    this.destroyEvents = [];
	    this.proxy = this.proxy.bind(this);
	  }

	  _createClass(Events, [{
	    key: "proxy",
	    value: function proxy(target, name, callback) {
	      var _this = this;

	      var option = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

	      if (Array.isArray(name)) {
	        return name.map(function (item) {
	          return _this.proxy(target, item, callback, option);
	        });
	      }

	      target.addEventListener(name, callback, option);

	      var destroyEvent = function destroyEvent() {
	        return target.removeEventListener(name, callback, option);
	      };

	      this.destroyEvents.push(destroyEvent);
	      return destroyEvent;
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

	var isNativeFunction = createCommonjsModule(function (module) {
	function _isNativeFunction(fn) {
	  return Function.toString.call(fn).indexOf("[native code]") !== -1;
	}

	module.exports = _isNativeFunction;
	module.exports["default"] = module.exports, module.exports.__esModule = true;
	});

	unwrapExports(isNativeFunction);

	var isNativeReflectConstruct = createCommonjsModule(function (module) {
	function _isNativeReflectConstruct() {
	  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
	  if (Reflect.construct.sham) return false;
	  if (typeof Proxy === "function") return true;

	  try {
	    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
	    return true;
	  } catch (e) {
	    return false;
	  }
	}

	module.exports = _isNativeReflectConstruct;
	module.exports["default"] = module.exports, module.exports.__esModule = true;
	});

	unwrapExports(isNativeReflectConstruct);

	var construct = createCommonjsModule(function (module) {
	function _construct(Parent, args, Class) {
	  if (isNativeReflectConstruct()) {
	    module.exports = _construct = Reflect.construct;
	    module.exports["default"] = module.exports, module.exports.__esModule = true;
	  } else {
	    module.exports = _construct = function _construct(Parent, args, Class) {
	      var a = [null];
	      a.push.apply(a, args);
	      var Constructor = Function.bind.apply(Parent, a);
	      var instance = new Constructor();
	      if (Class) setPrototypeOf(instance, Class.prototype);
	      return instance;
	    };

	    module.exports["default"] = module.exports, module.exports.__esModule = true;
	  }

	  return _construct.apply(null, arguments);
	}

	module.exports = _construct;
	module.exports["default"] = module.exports, module.exports.__esModule = true;
	});

	unwrapExports(construct);

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

	  module.exports["default"] = module.exports, module.exports.__esModule = true;
	  return _wrapNativeSuper(Class);
	}

	module.exports = _wrapNativeSuper;
	module.exports["default"] = module.exports, module.exports.__esModule = true;
	});

	var _wrapNativeSuper = unwrapExports(wrapNativeSuper);

	function _createSuper$1(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$1(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

	function _isNativeReflectConstruct$1() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

	var WFPlayerError = /*#__PURE__*/function (_Error) {
	  _inherits(WFPlayerError, _Error);

	  var _super = _createSuper$1(WFPlayerError);

	  function WFPlayerError(message) {
	    var _this;

	    _classCallCheck(this, WFPlayerError);

	    _this = _super.call(this, message);
	    _this.name = 'WFPlayerError';
	    return _this;
	  }

	  return WFPlayerError;
	}( /*#__PURE__*/_wrapNativeSuper(Error));
	function errorHandle(condition, msg) {
	  if (!condition) throw new WFPlayerError(msg);
	  return condition;
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
	function throttle(func, delay, context) {
	  var prev = Date.now();
	  return function () {
	    var now = Date.now();

	    if (now - prev >= delay) {
	      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
	        args[_key2] = arguments[_key2];
	      }

	      func.apply(context, args);
	      prev = Date.now();
	    }
	  };
	}

	var Template = /*#__PURE__*/function () {
	  function Template(wf) {
	    _classCallCheck(this, Template);

	    this.wf = wf;
	    this.canvas = null;
	    this.update();
	  }

	  _createClass(Template, [{
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

	var objectWithoutPropertiesLoose = createCommonjsModule(function (module) {
	function _objectWithoutPropertiesLoose(source, excluded) {
	  if (source == null) return {};
	  var target = {};
	  var sourceKeys = Object.keys(source);
	  var key, i;

	  for (i = 0; i < sourceKeys.length; i++) {
	    key = sourceKeys[i];
	    if (excluded.indexOf(key) >= 0) continue;
	    target[key] = source[key];
	  }

	  return target;
	}

	module.exports = _objectWithoutPropertiesLoose;
	module.exports["default"] = module.exports, module.exports.__esModule = true;
	});

	unwrapExports(objectWithoutPropertiesLoose);

	var objectWithoutProperties = createCommonjsModule(function (module) {
	function _objectWithoutProperties(source, excluded) {
	  if (source == null) return {};
	  var target = objectWithoutPropertiesLoose(source, excluded);
	  var key, i;

	  if (Object.getOwnPropertySymbols) {
	    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

	    for (i = 0; i < sourceSymbolKeys.length; i++) {
	      key = sourceSymbolKeys[i];
	      if (excluded.indexOf(key) >= 0) continue;
	      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
	      target[key] = source[key];
	    }
	  }

	  return target;
	}

	module.exports = _objectWithoutProperties;
	module.exports["default"] = module.exports, module.exports.__esModule = true;
	});

	var _objectWithoutProperties = unwrapExports(objectWithoutProperties);

	var worker = createCommonjsModule(function (module, exports) {
	  var isWorker = self.document === undefined;
	  var wf = null;
	  var canvas = null;
	  var ctx = null;
	  var gridNum = 0;
	  var gridGap = 0;
	  var beginTime = 0;
	  var density = 1;
	  var sampleRate = 44100;
	  var channelData = new Float32Array();

	  function secondToTime(second) {
	    var add0 = function add0(num) {
	      return num < 10 ? "0".concat(num) : String(num);
	    };

	    var hour = Math.floor(second / 3600);
	    var min = Math.floor((second - hour * 3600) / 60);
	    var sec = Math.floor(second - hour * 3600 - min * 60);
	    return [hour, min, sec].map(add0).join(':');
	  }

	  function clamp(num, a, b) {
	    return Math.max(Math.min(num, Math.max(a, b)), Math.min(a, b));
	  }

	  function getDensity(data) {
	    var pixelRatio = data.options.pixelRatio;
	    var fontSize = 11;
	    ctx.font = "".concat(fontSize * pixelRatio, "px Arial");
	    var rulerWidth = ctx.measureText('99:99:99').width;
	    return function loop(second) {
	      var rate = gridGap * second / (rulerWidth * 1.5);
	      if (rate > 1) return Math.floor(second / 10);
	      return loop(second + 10);
	    }(10);
	  }

	  function drawBackground(data) {
	    var _data$options = data.options,
	        backgroundColor = _data$options.backgroundColor,
	        paddingColor = _data$options.paddingColor,
	        padding = _data$options.padding;
	    var _canvas = canvas,
	        width = _canvas.width,
	        height = _canvas.height;
	    ctx.clearRect(0, 0, width, height);
	    ctx.fillStyle = backgroundColor;
	    ctx.fillRect(0, 0, width, height);
	    ctx.fillStyle = paddingColor;
	    ctx.fillRect(0, 0, padding * gridGap, height);
	    ctx.fillRect(width - padding * gridGap, 0, padding * gridGap, height);
	  }

	  function drawGrid(data) {
	    var _data$options2 = data.options,
	        gridColor = _data$options2.gridColor,
	        pixelRatio = _data$options2.pixelRatio;
	    var _canvas2 = canvas,
	        width = _canvas2.width,
	        height = _canvas2.height;
	    ctx.fillStyle = gridColor;

	    for (var index = 0; index < gridNum; index += density) {
	      ctx.fillRect(gridGap * index, 0, pixelRatio, height);
	    }

	    for (var _index = 0; _index < height / gridGap; _index += density) {
	      ctx.fillRect(0, gridGap * _index, width, pixelRatio);
	    }
	  }

	  function drawRuler(data) {
	    var _data$options3 = data.options,
	        rulerColor = _data$options3.rulerColor,
	        pixelRatio = _data$options3.pixelRatio,
	        padding = _data$options3.padding,
	        rulerAtTop = _data$options3.rulerAtTop;
	    var _canvas3 = canvas,
	        height = _canvas3.height;
	    var fontSize = 11;
	    var fontHeight = 15;
	    var fontTop = 30;
	    ctx.font = "".concat(fontSize * pixelRatio, "px Arial");
	    ctx.fillStyle = rulerColor;
	    var second = -1;

	    for (var index = 0; index < gridNum; index += 1) {
	      if (index && index >= padding && index <= gridNum - padding && (index - padding) % 10 === 0) {
	        second += 1;
	        ctx.fillRect(gridGap * index, rulerAtTop ? 0 : height - fontHeight * pixelRatio, pixelRatio, fontHeight * pixelRatio);

	        if ((index - padding) % (density * 10) === 0) {
	          ctx.fillText(secondToTime(beginTime + second), gridGap * index - fontSize * pixelRatio * 2 + pixelRatio, rulerAtTop ? fontTop * pixelRatio : height - fontTop * pixelRatio + fontSize);
	        }
	      } else if (index && (index - padding) % 5 === 0) {
	        ctx.fillRect(gridGap * index, rulerAtTop ? 0 : height - fontHeight / 2 * pixelRatio, pixelRatio, fontHeight / 2 * pixelRatio);
	      }
	    }
	  }

	  function drawWave(data) {
	    var currentTime = data.currentTime,
	        _data$options4 = data.options,
	        progress = _data$options4.progress,
	        waveColor = _data$options4.waveColor,
	        progressColor = _data$options4.progressColor,
	        duration = _data$options4.duration,
	        padding = _data$options4.padding,
	        waveScale = _data$options4.waveScale;
	    var _canvas4 = canvas,
	        width = _canvas4.width,
	        height = _canvas4.height;
	    var middle = height / 2;
	    var waveWidth = width - gridGap * padding * 2;
	    var startIndex = clamp(beginTime * sampleRate, 0, Infinity);
	    var endIndex = clamp((beginTime + duration) * sampleRate, startIndex, Infinity);
	    var step = Math.floor((endIndex - startIndex) / waveWidth);
	    var cursorX = padding * gridGap + (currentTime - beginTime) * gridGap * 10;
	    var stepIndex = 0;
	    var xIndex = 0;
	    var min = 1;
	    var max = -1;

	    for (var i = startIndex; i < endIndex; i += 1) {
	      stepIndex += 1;
	      var item = channelData[i] || 0;

	      if (item < min) {
	        min = item;
	      } else if (item > max) {
	        max = item;
	      }

	      if (stepIndex >= step && xIndex < waveWidth) {
	        xIndex += 1;
	        var waveX = gridGap * padding + xIndex;
	        ctx.fillStyle = progress && cursorX >= waveX ? progressColor : waveColor;
	        ctx.fillRect(waveX, (1 + min * waveScale) * middle, 1, Math.max(1, (max - min) * middle * waveScale));
	        stepIndex = 0;
	        min = 1;
	        max = -1;
	      }
	    }
	  }

	  function drawCursor(data) {
	    var currentTime = data.currentTime,
	        _data$options5 = data.options,
	        cursorColor = _data$options5.cursorColor,
	        pixelRatio = _data$options5.pixelRatio,
	        padding = _data$options5.padding;
	    var _canvas5 = canvas,
	        height = _canvas5.height;
	    ctx.fillStyle = cursorColor;
	    var x = padding * gridGap + (currentTime - beginTime) * gridGap * 10;
	    ctx.fillRect(x, 0, pixelRatio, height);
	  }

	  self.onmessage = function onmessage(event) {
	    var _event$data = event.data,
	        type = _event$data.type,
	        data = _event$data.data;

	    if (type === 'INIT') {
	      if (isWorker) {
	        canvas = new OffscreenCanvas(data.width, data.height);
	      } else {
	        wf = data.wf;
	        canvas = data.canvas;
	      }

	      ctx = canvas.getContext('2d');
	    }

	    if (type === 'CHANNE_DATA') {
	      sampleRate = data.sampleRate;
	      channelData = data.channelData;
	    }

	    if (type === 'UPDATE') {
	      var currentTime = data.currentTime,
	          width = data.width,
	          height = data.height,
	          _data$options6 = data.options,
	          cursor = _data$options6.cursor,
	          grid = _data$options6.grid,
	          ruler = _data$options6.ruler,
	          wave = _data$options6.wave,
	          duration = _data$options6.duration,
	          padding = _data$options6.padding;

	      if (canvas.width !== width) {
	        canvas.width = width;
	      }

	      if (canvas.height !== height) {
	        canvas.height = height;
	      }

	      gridNum = duration * 10 + padding * 2;
	      gridGap = width / gridNum;
	      beginTime = Math.floor(currentTime / duration) * duration;
	      density = getDensity(data);
	      drawBackground(data);

	      if (grid) {
	        drawGrid(data);
	      }

	      if (ruler) {
	        drawRuler(data);
	      }

	      if (wave) {
	        drawWave(data);
	      }

	      if (cursor) {
	        drawCursor(data);
	      }

	      var config = {
	        padding: padding,
	        duration: duration,
	        gridGap: gridGap,
	        gridNum: gridNum,
	        beginTime: beginTime,
	        currentTime: currentTime,
	        density: density,
	        width: width,
	        height: height
	      };

	      if (isWorker) {
	        self.postMessage({
	          type: 'RENDER',
	          date: config
	        });
	        self.postMessage({
	          type: 'DRAW',
	          data: canvas.transferToImageBitmap()
	        });
	      } else {
	        wf.emit('render', config);
	      }
	    }
	  };

	  if (!isWorker) {
	    exports.postMessage = function (data) {
	      self.onmessage({
	        data: data
	      });
	    };
	  }
	});
	worker.postMessage;

	var Drawer = /*#__PURE__*/function () {
	  function Drawer(wf) {
	    var _this = this;

	    _classCallCheck(this, Drawer);

	    this.wf = wf;
	    this.canvas = wf.template.canvas;
	    var _wf$options = wf.options,
	        refreshRate = _wf$options.refreshRate,
	        useWorker = _wf$options.useWorker;
	    this.update = throttle(this.update, refreshRate, this);

	    if (useWorker && window.OffscreenCanvas && window.Worker) {
	      this.worker = new Worker(URL.createObjectURL(new Blob(["\"use strict\";var isWorker=self.document===void 0,wf=null,canvas=null,ctx=null,gridNum=0,gridGap=0,beginTime=0,density=1,sampleRate=44100,channelData=new Float32Array;function secondToTime(a){var b=Math.floor(a/3600),c=Math.floor((a-3600*b)/60),d=Math.floor(a-3600*b-60*c);return[b,c,d].map(function add0(a){return 10>a?\"0\".concat(a):a+\"\"}).join(\":\")}function clamp(c,d,a){return Math.max(Math.min(c,Math.max(d,a)),Math.min(d,a))}function getDensity(a){var b=a.options.pixelRatio;ctx.font=\"\".concat(11*b,\"px Arial\");var c=ctx.measureText(\"99:99:99\").width;return function a(b){var d=gridGap*b/(1.5*c);return 1<d?Math.floor(b/10):a(b+10)}(10)}function drawBackground(a){var b=a.options,c=b.backgroundColor,d=b.paddingColor,e=b.padding,f=canvas,g=f.width,h=f.height;ctx.clearRect(0,0,g,h),ctx.fillStyle=c,ctx.fillRect(0,0,g,h),ctx.fillStyle=d,ctx.fillRect(0,0,e*gridGap,h),ctx.fillRect(g-e*gridGap,0,e*gridGap,h)}function drawGrid(a){var b=a.options,c=b.gridColor,d=b.pixelRatio,e=canvas,f=e.width,g=e.height;ctx.fillStyle=c;for(var h=0;h<gridNum;h+=density)ctx.fillRect(gridGap*h,0,d,g);for(var i=0;i<g/gridGap;i+=density)ctx.fillRect(0,gridGap*i,f,d)}function drawRuler(a){var b=a.options,c=b.rulerColor,d=b.pixelRatio,e=b.padding,f=b.rulerAtTop,g=canvas,h=g.height,i=11,j=15,k=30;ctx.font=\"\".concat(i*d,\"px Arial\"),ctx.fillStyle=c;for(var l=-1,m=0;m<gridNum;m+=1)m&&m>=e&&m<=gridNum-e&&0==(m-e)%10?(l+=1,ctx.fillRect(gridGap*m,f?0:h-j*d,d,j*d),0==(m-e)%(10*density)&&ctx.fillText(secondToTime(beginTime+l),gridGap*m-2*(i*d)+d,f?k*d:h-k*d+i)):m&&0==(m-e)%5&&ctx.fillRect(gridGap*m,f?0:h-j/2*d,d,j/2*d)}function drawWave(a){for(var b=a.currentTime,c=a.options,d=c.progress,e=c.waveColor,f=c.progressColor,g=c.duration,h=c.padding,j=c.waveScale,k=canvas,l=k.width,m=k.height,n=m/2,o=l-2*(gridGap*h),p=clamp(beginTime*sampleRate,0,1/0),q=clamp((beginTime+g)*sampleRate,p,1/0),r=Math.floor((q-p)/o),s=h*gridGap+10*((b-beginTime)*gridGap),t=0,u=0,v=1,w=-1,x=p;x<q;x+=1){t+=1;var y=channelData[x]||0;if(y<v?v=y:y>w&&(w=y),t>=r&&u<o){u+=1;var z=gridGap*h+u;ctx.fillStyle=d&&s>=z?f:e,ctx.fillRect(z,(1+v*j)*n,1,Math.max(1,(w-v)*n*j)),t=0,v=1,w=-1}}}function drawCursor(a){var b=a.currentTime,c=a.options,d=c.cursorColor,e=c.pixelRatio,f=c.padding,g=canvas,h=g.height;ctx.fillStyle=d;var i=f*gridGap+10*((b-beginTime)*gridGap);ctx.fillRect(i,0,e,h)}self.onmessage=function(a){var b=a.data,c=b.type,d=b.data;if(\"INIT\"===c&&(isWorker?canvas=new OffscreenCanvas(d.width,d.height):(wf=d.wf,canvas=d.canvas),ctx=canvas.getContext(\"2d\")),\"CHANNE_DATA\"===c&&(sampleRate=d.sampleRate,channelData=d.channelData),\"UPDATE\"===c){var e=d.currentTime,f=d.width,g=d.height,h=d.options,i=h.cursor,j=h.grid,k=h.ruler,l=h.wave,m=h.duration,n=h.padding;canvas.width!==f&&(canvas.width=f),canvas.height!==g&&(canvas.height=g),gridNum=10*m+2*n,gridGap=f/gridNum,beginTime=Math.floor(e/m)*m,density=getDensity(d),drawBackground(d),j&&drawGrid(d),k&&drawRuler(d),l&&drawWave(d),i&&drawCursor(d);var o={padding:n,duration:m,gridGap:gridGap,gridNum:gridNum,beginTime:beginTime,currentTime:e,density:density,width:f,height:g};isWorker?(self.postMessage({type:\"RENDER\",date:o}),self.postMessage({type:\"DRAW\",data:canvas.transferToImageBitmap()})):wf.emit(\"render\",o)}},\"undefined\"==typeof exports||isWorker||(exports.postMessage=function(a){self.onmessage({data:a})});"])));
	      this.ctx = this.canvas.getContext('bitmaprenderer');
	      this.wf.events.proxy(this.worker, 'message', function (event) {
	        var _event$data = event.data,
	            type = _event$data.type,
	            data = _event$data.data;
	        if (type === 'RENDER') _this.wf.emit('render', data);
	        if (type === 'DRAW') _this.ctx.transferFromImageBitmap(data);
	      });
	      this.worker.postMessage({
	        type: 'INIT',
	        data: {
	          width: this.canvas.width,
	          height: this.canvas.height
	        }
	      });
	    } else {
	      this.worker = worker;
	      this.worker.postMessage({
	        type: 'INIT',
	        data: {
	          canvas: this.canvas,
	          wf: this.wf
	        }
	      });
	    }

	    wf.on('options', function () {
	      _this.update();
	    });
	    wf.on('channelData', function (_ref) {
	      var channelData = _ref.channelData,
	          sampleRate = _ref.sampleRate;

	      _this.worker.postMessage({
	        type: 'CHANNE_DATA',
	        data: {
	          channelData: channelData,
	          sampleRate: sampleRate
	        }
	      });

	      _this.update();
	    });
	    this.update();
	  }

	  _createClass(Drawer, [{
	    key: "update",
	    value: function update() {
	      var _this$wf = this.wf,
	          currentTime = _this$wf.currentTime,
	          _this$wf$options = _this$wf.options;
	          _this$wf$options.container;
	          _this$wf$options.mediaElement;
	          var options = _objectWithoutProperties(_this$wf$options, ["container", "mediaElement"]);

	      var _this$canvas = this.canvas,
	          width = _this$canvas.width,
	          height = _this$canvas.height;
	      this.worker.postMessage({
	        type: 'UPDATE',
	        data: {
	          options: options,
	          currentTime: currentTime,
	          width: width,
	          height: height
	        }
	      });
	    }
	  }, {
	    key: "destroy",
	    value: function destroy() {
	      if (this.worker.terminate) {
	        this.worker.terminate();
	      }
	    }
	  }]);

	  return Drawer;
	}();

	var Decoder = /*#__PURE__*/function () {
	  function Decoder(wf) {
	    var _this = this;

	    _classCallCheck(this, Decoder);

	    this.wf = wf;
	    this.audioCtx = new (window.OfflineAudioContext || window.webkitOfflineAudioContext)(1, 2, 44100);
	    this.throttleDecodeAudioData = throttle(this.decodeAudioData, 1000, this);
	    this.audiobuffer = this.audioCtx.createBuffer(1, 2, 44100);
	    this.channelData = new Float32Array();
	    this.wf.on('loading', function (uint8) {
	      _this.throttleDecodeAudioData(uint8);
	    });
	  }

	  _createClass(Decoder, [{
	    key: "decodeAudioData",
	    value: function decodeAudioData(uint8) {
	      var _this2 = this;

	      return new Promise(function (resolve, reject) {
	        _this2.audioCtx.decodeAudioData(uint8.buffer, function (audiobuffer) {
	          _this2.decodeSuccess(audiobuffer);

	          resolve(audiobuffer);
	        }, function (err) {
	          return reject(err);
	        });
	      });
	    }
	  }, {
	    key: "decodeSuccess",
	    value: function decodeSuccess(audiobuffer) {
	      this.audiobuffer = audiobuffer;
	      this.wf.emit('audiobuffer', this.audiobuffer);
	      this.wf.emit('decodeing', this.audiobuffer.duration / this.wf.duration);
	      this.channelData = audiobuffer.getChannelData(this.wf.options.channel);
	      this.wf.emit('channelData', {
	        channelData: this.channelData,
	        sampleRate: this.audiobuffer.sampleRate
	      });
	    }
	  }, {
	    key: "changeChannel",
	    value: function changeChannel(channel) {
	      this.channelData = this.audiobuffer.getChannelData(channel) || new Float32Array();
	      this.wf.emit('channelData', {
	        channelData: this.channelData,
	        sampleRate: this.audiobuffer.sampleRate
	      });
	    }
	  }, {
	    key: "destroy",
	    value: function destroy() {
	      this.audiobuffer = this.audioCtx.createBuffer(1, 2, 44100);
	      this.channelData = new Float32Array();
	    }
	  }]);

	  return Decoder;
	}();

	var Loader = /*#__PURE__*/function () {
	  function Loader(wf) {
	    _classCallCheck(this, Loader);

	    this.wf = wf;
	    this.fileSize = 0;
	    this.loadSize = 0;
	    this.data = new Uint8Array();
	    this.reader = null;
	  }

	  _createClass(Loader, [{
	    key: "load",
	    value: function load(url) {
	      var _this = this;

	      this.destroy();
	      this.wf.emit('loadStart');
	      return fetch(url).then(function (response) {
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
	    }
	  }]);

	  return Loader;
	}();

	var Controller = /*#__PURE__*/function () {
	  function Controller(wf) {
	    var _this = this;

	    _classCallCheck(this, Controller);

	    this.wf = wf;
	    this.playTimer = null;
	    this.wf.on('load', function () {
	      _this.clickInit();

	      _this.resizeInit();

	      _this.playInit();
	    });
	  }

	  _createClass(Controller, [{
	    key: "getTimeFromEvent",
	    value: function getTimeFromEvent(event) {
	      var _this$wf = this.wf,
	          currentTime = _this$wf.currentTime,
	          canvas = _this$wf.template.canvas,
	          _this$wf$options = _this$wf.options,
	          duration = _this$wf$options.duration,
	          padding = _this$wf$options.padding,
	          container = _this$wf$options.container,
	          pixelRatio = _this$wf$options.pixelRatio;
	      var gridNum = duration * 10 + padding * 2;
	      var gridGap = canvas.width / gridNum;
	      var left = clamp(event.pageX - container.offsetLeft - padding * gridGap / pixelRatio, 0, Infinity);
	      var beginTime = Math.floor(currentTime / duration) * duration;
	      var time = beginTime + clamp(left / gridGap * pixelRatio / 10, 0, duration);
	      return time;
	    }
	  }, {
	    key: "clickInit",
	    value: function clickInit() {
	      var _this2 = this;

	      var _this$wf2 = this.wf,
	          canvas = _this$wf2.template.canvas,
	          proxy = _this$wf2.events.proxy,
	          mediaElement = _this$wf2.options.mediaElement;
	      proxy(canvas, ['click', 'contextmenu'], function (event) {
	        var time = _this2.getTimeFromEvent(event);

	        _this2.wf.emit(event.type, time, event);

	        if (mediaElement && mediaElement.currentTime !== time) {
	          mediaElement.currentTime = time;
	        }

	        _this2.wf.drawer.update();
	      });
	    }
	  }, {
	    key: "resizeInit",
	    value: function resizeInit() {
	      var _this3 = this;

	      var _this$wf3 = this.wf,
	          template = _this$wf3.template,
	          drawer = _this$wf3.drawer,
	          proxy = _this$wf3.events.proxy;
	      var throttleResize = throttle(function () {
	        template.update();
	        drawer.update();

	        _this3.wf.emit('resize');
	      }, 500, this);
	      proxy(window, ['resize', 'orientationchange'], function () {
	        throttleResize();
	      });
	    }
	  }, {
	    key: "playInit",
	    value: function playInit() {
	      var _this$wf4 = this.wf,
	          drawer = _this$wf4.drawer,
	          proxy = _this$wf4.events.proxy,
	          mediaElement = _this$wf4.options.mediaElement;
	      if (!mediaElement) return;
	      proxy(mediaElement, 'seeked', function () {
	        drawer.update();
	      });
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

	function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

	function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

	function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
	var id = 0;
	var instances = [];

	var WFPlayer = /*#__PURE__*/function (_Emitter) {
	  _inherits(WFPlayer, _Emitter);

	  var _super = _createSuper(WFPlayer);

	  function WFPlayer() {
	    var _this;

	    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

	    _classCallCheck(this, WFPlayer);

	    _this = _super.call(this);
	    _this._currentTime = 0;
	    _this.isDestroy = false;
	    _this.options = {};

	    _this.setOptions(options);

	    _this.events = new Events(_assertThisInitialized(_this));
	    _this.template = new Template(_assertThisInitialized(_this));
	    _this.decoder = new Decoder(_assertThisInitialized(_this));
	    _this.drawer = new Drawer(_assertThisInitialized(_this));
	    _this.controller = new Controller(_assertThisInitialized(_this));
	    _this.loader = new Loader(_assertThisInitialized(_this));
	    id += 1;
	    _this.id = id;
	    instances.push(_assertThisInitialized(_this));
	    return _this;
	  }

	  _createClass(WFPlayer, [{
	    key: "currentTime",
	    get: function get() {
	      return this.options.mediaElement ? this.options.mediaElement.currentTime : this._currentTime;
	    }
	  }, {
	    key: "duration",
	    get: function get() {
	      return this.options.mediaElement ? this.options.mediaElement.duration : Infinity;
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
	  }, {
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

	      this.options = optionValidator(_objectSpread(_objectSpread(_objectSpread({}, WFPlayer.default), this.options), options), WFPlayer.scheme);
	      this.emit('options', this.options);
	      return this;
	    }
	  }, {
	    key: "load",
	    value: function load(target) {
	      if (target && typeof target.getChannelData === 'function') {
	        this.decoder.decodeSuccess(target);
	        this.emit('load');
	        return this;
	      }

	      if (target instanceof HTMLVideoElement || target instanceof HTMLAudioElement) {
	        this.options.mediaElement = target;
	        target = target.src;
	      }

	      errorHandle(typeof target === 'string' && target.trim(), "The load target is not a string. If you are loading a mediaElement, make sure the mediaElement.src is not empty.");
	      this.loader.load(target);
	      this.emit('load');
	      return this;
	    }
	  }, {
	    key: "seek",
	    value: function seek(second) {
	      errorHandle(typeof second === 'number', 'seek expects to receive number as a parameter.');
	      this._currentTime = clamp(second, 0, this.duration);

	      if (this.options.mediaElement && this.options.mediaElement.currentTime !== this._currentTime) {
	        this.options.mediaElement.currentTime = this._currentTime;
	      }

	      this.drawer.update();
	      return this;
	    }
	  }, {
	    key: "changeChannel",
	    value: function changeChannel(channel) {
	      this.decoder.changeChannel(channel);
	      this.setOptions({
	        channel: channel
	      });
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
	      this.drawer.destroy();
	      instances.splice(instances.indexOf(this), 1);
	      return this;
	    }
	  }], [{
	    key: "instances",
	    get: function get() {
	      return instances;
	    }
	  }, {
	    key: "version",
	    get: function get() {
	      return '2.0.0';
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
	        useWorker: true,
	        wave: true,
	        waveColor: 'rgba(255, 255, 255, 0.1)',
	        backgroundColor: 'rgb(28, 32, 34)',
	        paddingColor: 'rgba(255, 255, 255, 0.05)',
	        cursor: true,
	        cursorColor: '#ff0000',
	        progress: true,
	        progressColor: 'rgba(255, 255, 255, 0.5)',
	        grid: true,
	        gridColor: 'rgba(255, 255, 255, 0.05)',
	        ruler: true,
	        rulerColor: 'rgba(255, 255, 255, 0.5)',
	        rulerAtTop: true,
	        refreshRate: 50,
	        channel: 0,
	        duration: 10,
	        padding: 5,
	        waveScale: 0.8,
	        pixelRatio: Math.ceil(window.devicePixelRatio)
	      };
	    }
	  }, {
	    key: "scheme",
	    get: function get() {
	      var checkNum = function checkNum(name, min, max, isInteger) {
	        return function (value, type) {
	          errorHandle(type === 'number', "".concat(name, " expects to receive number as a parameter, but got ").concat(type, "."));
	          var numberType = isInteger ? 'an integer' : 'a';
	          errorHandle(value >= min && value <= max && (isInteger ? Number.isInteger(value) : true), "'options.".concat(name, "' expect ").concat(numberType, " number that >= ").concat(min, " and <= ").concat(max, ", but got ").concat(value, "."));
	          return true;
	        };
	      };

	      return {
	        container: 'htmlelement|htmldivelement',
	        mediaElement: 'null|htmlvideoelement|htmlaudioelement',
	        useWorker: 'boolean',
	        wave: 'boolean',
	        waveColor: 'string',
	        backgroundColor: 'string',
	        paddingColor: 'string',
	        cursor: 'boolean',
	        cursorColor: 'string',
	        progress: 'boolean',
	        progressColor: 'string',
	        grid: 'boolean',
	        gridColor: 'string',
	        ruler: 'boolean',
	        rulerColor: 'string',
	        rulerAtTop: 'boolean',
	        refreshRate: checkNum('channel', 16, 1000, true),
	        channel: checkNum('channel', 0, 5, true),
	        duration: checkNum('duration', 1, 100, true),
	        padding: checkNum('padding', 1, 100, true),
	        waveScale: checkNum('waveScale', 0.1, 10, false),
	        pixelRatio: checkNum('pixelRatio', 1, 10, false)
	      };
	    }
	  }]);

	  return WFPlayer;
	}(Emitter);

	return WFPlayer;

})));
//# sourceMappingURL=wfplayer.js.map
