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
	    var refreshRate = wf.options.refreshRate;
	    this.update = throttle(this.init, refreshRate, this);
	    this.init();
	  }

	  _createClass(Template, [{
	    key: "init",
	    value: function init() {
	      var _this$wf$options = this.wf.options,
	          container = _this$wf$options.container,
	          pixelRatio = _this$wf$options.pixelRatio;
	      var clientWidth = container.clientWidth,
	          clientHeight = container.clientHeight;
	      var width = clientWidth * pixelRatio;
	      var height = clientHeight * pixelRatio;

	      if (this.canvas) {
	        if (this.canvas.width !== width) {
	          this.canvas.width = width;
	        }

	        if (this.canvas.height !== height) {
	          this.canvas.height = height;
	        }
	      } else {
	        errorHandle(this.wf.constructor.instances.every(function (wf) {
	          return wf.options.container !== container;
	        }), 'Cannot mount multiple instances on the same dom element, please destroy the previous instance first.');
	        container.innerHTML = '';
	        this.canvas = document.createElement('canvas');
	        this.canvas.width = width;
	        this.canvas.height = height;
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

	function ownKeys$2(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

	function _objectSpread$2(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$2(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$2(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }
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
	    var pixelRatio = data.pixelRatio;
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
	    var width = data.width,
	        height = data.height,
	        backgroundColor = data.backgroundColor,
	        paddingColor = data.paddingColor,
	        padding = data.padding;
	    ctx.clearRect(0, 0, width, height);
	    ctx.fillStyle = backgroundColor;
	    ctx.fillRect(0, 0, width, height);
	    ctx.fillStyle = paddingColor;
	    ctx.fillRect(0, 0, padding * gridGap, height);
	    ctx.fillRect(width - padding * gridGap, 0, padding * gridGap, height);
	  }

	  function drawGrid(data) {
	    var width = data.width,
	        height = data.height,
	        currentTime = data.currentTime,
	        gridColor = data.gridColor,
	        pixelRatio = data.pixelRatio,
	        scrollable = data.scrollable;
	    ctx.fillStyle = gridColor;

	    for (var index = 0; index < gridNum + 10; index += density) {
	      var x = scrollable ? gridGap * index - (currentTime - parseInt(currentTime, 10)) * gridGap * 10 : gridGap * index;
	      ctx.fillRect(x, 0, pixelRatio, height);
	    }

	    for (var _index = 0; _index < height / gridGap; _index += density) {
	      ctx.fillRect(0, gridGap * _index, width, pixelRatio);
	    }
	  }

	  function drawRuler(data) {
	    var height = data.height,
	        currentTime = data.currentTime,
	        rulerColor = data.rulerColor,
	        pixelRatio = data.pixelRatio,
	        padding = data.padding,
	        rulerAtTop = data.rulerAtTop,
	        scrollable = data.scrollable;
	    var fontSize = 11;
	    var fontHeight = 15;
	    var fontTop = 30;
	    ctx.font = "".concat(fontSize * pixelRatio, "px Arial");
	    ctx.fillStyle = rulerColor;
	    var second = -1;

	    for (var index = 0; index < gridNum + 10; index += 1) {
	      var x = scrollable ? gridGap * index - (currentTime - parseInt(currentTime, 10)) * gridGap * 10 : gridGap * index;

	      if ((index - padding) % 10 === 0) {
	        second += 1;
	        ctx.fillRect(x, rulerAtTop ? 0 : height - fontHeight * pixelRatio, pixelRatio, fontHeight * pixelRatio);
	        var time = Math.floor(beginTime + second);

	        if (time % density === 0 && time >= 0) {
	          ctx.fillText(secondToTime(time), x - fontSize * pixelRatio * 2 + pixelRatio, rulerAtTop ? fontTop * pixelRatio : height - fontTop * pixelRatio + fontSize);
	        }
	      } else if ((index - padding) % 5 === 0) {
	        ctx.fillRect(x, rulerAtTop ? 0 : height - fontHeight / 2 * pixelRatio, pixelRatio, fontHeight / 2 * pixelRatio);
	      }
	    }
	  }

	  function drawWave(data) {
	    var width = data.width,
	        height = data.height,
	        currentTime = data.currentTime,
	        progress = data.progress,
	        waveColor = data.waveColor,
	        progressColor = data.progressColor,
	        duration = data.duration,
	        padding = data.padding,
	        waveScale = data.waveScale,
	        scrollable = data.scrollable;
	    var middle = height / 2;
	    var waveWidth = width - gridGap * padding * 2;
	    var startIndex = Math.floor(beginTime * sampleRate);
	    var endIndex = Math.floor(clamp((beginTime + duration) * sampleRate, startIndex, Infinity));
	    var step = Math.floor((endIndex - startIndex) / waveWidth);
	    var cursorX = scrollable ? width / 2 : padding * gridGap + (currentTime - beginTime) * gridGap * 10;
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
	    var height = data.height,
	        width = data.width,
	        currentTime = data.currentTime,
	        cursorColor = data.cursorColor,
	        pixelRatio = data.pixelRatio,
	        padding = data.padding,
	        scrollable = data.scrollable;
	    ctx.fillStyle = cursorColor;
	    var x = scrollable ? width / 2 : padding * gridGap + (currentTime - beginTime) * gridGap * 10;
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

	    if (type === 'DECODE') {
	      sampleRate = data.sampleRate;
	      channelData = data.channelData;
	    }

	    if (type === 'UPDATE') {
	      var width = data.width,
	          height = data.height,
	          currentTime = data.currentTime,
	          cursor = data.cursor,
	          grid = data.grid,
	          ruler = data.ruler,
	          wave = data.wave,
	          duration = data.duration,
	          padding = data.padding,
	          scrollable = data.scrollable;

	      if (canvas.width !== width) {
	        canvas.width = width;
	      }

	      if (canvas.height !== height) {
	        canvas.height = height;
	      }

	      gridNum = duration * 10 + padding * 2;
	      gridGap = width / gridNum;
	      beginTime = scrollable ? currentTime - duration / 2 : Math.floor(currentTime / duration) * duration;
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

	      var _channelData = channelData,
	          byteLength = _channelData.byteLength;

	      var config = _objectSpread$2({
	        gridNum: gridNum,
	        gridGap: gridGap,
	        beginTime: beginTime,
	        density: density,
	        sampleRate: sampleRate,
	        byteLength: byteLength
	      }, data);

	      if (isWorker) {
	        self.postMessage({
	          type: 'UPFATE',
	          data: {
	            config: config,
	            imageBitmap: canvas.transferToImageBitmap()
	          }
	        });
	      } else {
	        wf.emit('update', config);
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

	function ownKeys$1(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

	function _objectSpread$1(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$1(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$1(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

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
	      this.worker = new Worker(URL.createObjectURL(new Blob(["\"use strict\";function ownKeys(a,b){var c=Object.keys(a);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(a);b&&(d=d.filter(function(b){return Object.getOwnPropertyDescriptor(a,b).enumerable})),c.push.apply(c,d)}return c}function _objectSpread(a){for(var b,c=1;c<arguments.length;c++)b=null==arguments[c]?{}:arguments[c],c%2?ownKeys(Object(b),!0).forEach(function(c){_defineProperty(a,c,b[c])}):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(b)):ownKeys(Object(b)).forEach(function(c){Object.defineProperty(a,c,Object.getOwnPropertyDescriptor(b,c))});return a}function _defineProperty(a,b,c){return b in a?Object.defineProperty(a,b,{value:c,enumerable:!0,configurable:!0,writable:!0}):a[b]=c,a}var isWorker=self.document===void 0,wf=null,canvas=null,ctx=null,gridNum=0,gridGap=0,beginTime=0,density=1,sampleRate=44100,channelData=new Float32Array;function secondToTime(a){var b=Math.floor(a/3600),c=Math.floor((a-3600*b)/60),d=Math.floor(a-3600*b-60*c);return[b,c,d].map(function add0(a){return 10>a?\"0\".concat(a):a+\"\"}).join(\":\")}function clamp(c,d,a){return Math.max(Math.min(c,Math.max(d,a)),Math.min(d,a))}function getDensity(a){var b=a.pixelRatio;ctx.font=\"\".concat(11*b,\"px Arial\");var c=ctx.measureText(\"99:99:99\").width;return function a(b){var d=gridGap*b/(1.5*c);return 1<d?Math.floor(b/10):a(b+10)}(10)}function drawBackground(a){var b=a.width,c=a.height,d=a.backgroundColor,e=a.paddingColor,f=a.padding;ctx.clearRect(0,0,b,c),ctx.fillStyle=d,ctx.fillRect(0,0,b,c),ctx.fillStyle=e,ctx.fillRect(0,0,f*gridGap,c),ctx.fillRect(b-f*gridGap,0,f*gridGap,c)}function drawGrid(a){var b=a.width,c=a.height,d=a.currentTime,e=a.gridColor,f=a.pixelRatio,g=a.scrollable;ctx.fillStyle=e;for(var h,i=0;i<gridNum+10;i+=density)h=g?gridGap*i-10*((d-parseInt(d,10))*gridGap):gridGap*i,ctx.fillRect(h,0,f,c);for(var j=0;j<c/gridGap;j+=density)ctx.fillRect(0,gridGap*j,b,f)}function drawRuler(a){var b=a.height,c=a.currentTime,d=a.rulerColor,e=a.pixelRatio,f=a.padding,g=a.rulerAtTop,h=a.scrollable,i=11,j=15,k=30;ctx.font=\"\".concat(i*e,\"px Arial\"),ctx.fillStyle=d;for(var l,m=-1,n=0;n<gridNum+10;n+=1)if(l=h?gridGap*n-10*((c-parseInt(c,10))*gridGap):gridGap*n,0==(n-f)%10){m+=1,ctx.fillRect(l,g?0:b-j*e,e,j*e);var o=Math.floor(beginTime+m);0==o%density&&0<=o&&ctx.fillText(secondToTime(o),l-2*(i*e)+e,g?k*e:b-k*e+i)}else 0==(n-f)%5&&ctx.fillRect(l,g?0:b-j/2*e,e,j/2*e)}function drawWave(a){for(var b=a.width,c=a.height,d=a.currentTime,e=a.progress,f=a.waveColor,g=a.progressColor,h=a.duration,j=a.padding,k=a.waveScale,l=a.scrollable,m=c/2,n=b-2*(gridGap*j),o=Math.floor(beginTime*sampleRate),p=Math.floor(clamp((beginTime+h)*sampleRate,o,1/0)),q=Math.floor((p-o)/n),r=l?b/2:j*gridGap+10*((d-beginTime)*gridGap),s=0,t=0,u=1,v=-1,w=o;w<p;w+=1){s+=1;var x=channelData[w]||0;if(x<u?u=x:x>v&&(v=x),s>=q&&t<n){t+=1;var y=gridGap*j+t;ctx.fillStyle=e&&r>=y?g:f,ctx.fillRect(y,(1+u*k)*m,1,Math.max(1,(v-u)*m*k)),s=0,u=1,v=-1}}}function drawCursor(a){var b=a.height,c=a.width,d=a.currentTime,e=a.cursorColor,f=a.pixelRatio,g=a.padding,h=a.scrollable;ctx.fillStyle=e;var i=h?c/2:g*gridGap+10*((d-beginTime)*gridGap);ctx.fillRect(i,0,f,b)}self.onmessage=function(a){var b=a.data,c=b.type,d=b.data;if(\"INIT\"===c&&(isWorker?canvas=new OffscreenCanvas(d.width,d.height):(wf=d.wf,canvas=d.canvas),ctx=canvas.getContext(\"2d\")),\"DECODE\"===c&&(sampleRate=d.sampleRate,channelData=d.channelData),\"UPDATE\"===c){var e=d.width,f=d.height,g=d.currentTime,h=d.cursor,i=d.grid,j=d.ruler,k=d.wave,l=d.duration,m=d.padding,n=d.scrollable;canvas.width!==e&&(canvas.width=e),canvas.height!==f&&(canvas.height=f),gridNum=10*l+2*m,gridGap=e/gridNum,beginTime=n?g-l/2:Math.floor(g/l)*l,density=getDensity(d),drawBackground(d),i&&drawGrid(d),j&&drawRuler(d),k&&drawWave(d),h&&drawCursor(d);var o=channelData,p=o.byteLength,q=_objectSpread({gridNum:gridNum,gridGap:gridGap,beginTime:beginTime,density:density,sampleRate:sampleRate,byteLength:p},d);isWorker?self.postMessage({type:\"UPFATE\",data:{config:q,imageBitmap:canvas.transferToImageBitmap()}}):wf.emit(\"update\",q)}},\"undefined\"==typeof exports||isWorker||(exports.postMessage=function(a){self.onmessage({data:a})});"])));
	      this.ctx = this.canvas.getContext('bitmaprenderer');
	      this.wf.events.proxy(this.worker, 'message', function (event) {
	        var _event$data = event.data,
	            type = _event$data.type,
	            data = _event$data.data;

	        if (type === 'UPFATE') {
	          _this.wf.emit('update', data.config);

	          _this.ctx.transferFromImageBitmap(data.imageBitmap);
	        }
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

	    wf.on('decode', function (_ref) {
	      var channelData = _ref.channelData,
	          sampleRate = _ref.sampleRate;

	      _this.worker.postMessage({
	        type: 'DECODE',
	        data: {
	          channelData: channelData,
	          sampleRate: sampleRate
	        }
	      });

	      _this.update();
	    });
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
	        data: _objectSpread$1(_objectSpread$1({}, options), {}, {
	          currentTime: currentTime,
	          width: width,
	          height: height
	        })
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
	    _classCallCheck(this, Decoder);

	    this.wf = wf;
	    this.audioCtx = new (window.OfflineAudioContext || window.webkitOfflineAudioContext)(1, 2, 44100);
	    this.audiobuffer = this.audioCtx.createBuffer(1, 2, 44100);
	    this.channelData = new Float32Array();
	  }

	  _createClass(Decoder, [{
	    key: "decodeAudioData",
	    value: function decodeAudioData(uint8) {
	      var _this = this;

	      return new Promise(function (resolve, reject) {
	        _this.audioCtx.decodeAudioData(uint8.buffer, function (audiobuffer) {
	          _this.decodeSuccess(audiobuffer);

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
	      this.channelData = audiobuffer.getChannelData(this.wf.options.channel);
	      this.wf.emit('decode', {
	        channelData: this.channelData,
	        sampleRate: this.audiobuffer.sampleRate,
	        duration: this.audiobuffer.duration
	      });
	      this.wf.update();
	    }
	  }, {
	    key: "changeChannel",
	    value: function changeChannel(channel) {
	      this.channelData = this.audiobuffer.getChannelData(channel) || new Float32Array();
	      this.wf.emit('decode', {
	        channelData: this.channelData,
	        sampleRate: this.audiobuffer.sampleRate,
	        duration: this.audiobuffer.duration
	      });
	      this.wf.update();
	    }
	  }, {
	    key: "destroy",
	    value: function destroy() {
	      this.audiobuffer = this.audioCtx.createBuffer(1, 2, 44100);
	      this.channelData = new Float32Array();
	      this.wf.emit('decode', {
	        channelData: this.channelData,
	        sampleRate: this.audiobuffer.sampleRate,
	        duration: this.audiobuffer.duration
	      });
	      this.wf.update();
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
	      return fetch(url).then(function (response) {
	        if (response.body && typeof response.body.getReader === 'function') {
	          _this.fileSize = Number(response.headers.get('content-length'));
	          _this.reader = response.body.getReader();
	          return function read() {
	            var _this2 = this;

	            return this.reader.read().then(function (_ref) {
	              var done = _ref.done,
	                  value = _ref.value;
	              if (done) return null;
	              _this2.loadSize += value.byteLength;
	              _this2.data = mergeBuffer(_this2.data, value);

	              _this2.wf.decoder.decodeAudioData(_this2.data.slice());

	              _this2.wf.emit('load', {
	                fileSize: _this2.fileSize,
	                loadSize: _this2.loadSize,
	                data: _this2.data
	              });

	              return read.call(_this2);
	            });
	          }.call(_this);
	        }

	        return response.arrayBuffer();
	      }).then(function (arrayBuffer) {
	        if (arrayBuffer && arrayBuffer.byteLength) {
	          _this.data = new Uint8Array(arrayBuffer);
	          _this.fileSize = _this.data.byteLength;
	          _this.loadSize = _this.data.byteLength;

	          _this.wf.decoder.decodeAudioData(_this.data);

	          _this.wf.emit('load', {
	            fileSize: _this.fileSize,
	            loadSize: _this.loadSize,
	            data: _this.data
	          });
	        }

	        return arrayBuffer;
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

	    this.init = function () {
	      _this.resizeInit();

	      _this.playInit();
	    };
	  }

	  _createClass(Controller, [{
	    key: "resizeInit",
	    value: function resizeInit() {
	      var _this2 = this;

	      var proxy = this.wf.events.proxy;
	      var throttleResize = throttle(function () {
	        _this2.wf.update();

	        _this2.wf.emit('resize');
	      }, 200, this);
	      proxy(window, ['resize', 'orientationchange'], function () {
	        throttleResize();
	      });
	    }
	  }, {
	    key: "playInit",
	    value: function playInit() {
	      var _this3 = this;

	      var _this$wf = this.wf,
	          proxy = _this$wf.events.proxy,
	          mediaElement = _this$wf.options.mediaElement;
	      if (!mediaElement) return;
	      proxy(mediaElement, ['seeked', 'seeking', 'canplay'], function () {
	        _this3.wf.update();
	      });
	      (function loop() {
	        var _this4 = this;

	        this.playTimer = requestAnimationFrame(function () {
	          if (_this4.wf.playing) {
	            _this4.wf.update();
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

	    _this.update();

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
	      this.update();
	      return this;
	    }
	  }, {
	    key: "load",
	    value: function load(target) {
	      if (target && typeof target.getChannelData === 'function') {
	        this.decoder.decodeSuccess(target);
	        this.controller.init();
	        return this;
	      }

	      if (target && target.buffer) {
	        this.decoder.decodeAudioData(target);
	        this.controller.init();
	        return this;
	      }

	      if (target instanceof HTMLVideoElement || target instanceof HTMLAudioElement) {
	        this.options.mediaElement = target;
	        target = target.src;
	      }

	      errorHandle(typeof target === 'string' && target.trim(), "The load target is not a string. If you are loading a mediaElement, make sure the mediaElement.src is not empty.");
	      this.loader.load(target);
	      this.controller.init();
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

	      this.update();
	      return this;
	    }
	  }, {
	    key: "changeChannel",
	    value: function changeChannel(channel) {
	      this.decoder.changeChannel(channel);
	      this.setOptions({
	        channel: channel
	      });
	      this.update();
	      return this;
	    }
	  }, {
	    key: "exportImage",
	    value: function exportImage() {
	      this.template.exportImage();
	      return this;
	    }
	  }, {
	    key: "update",
	    value: function update() {
	      if (this.template && this.drawer) {
	        this.template.update();
	        this.drawer.update();
	      }

	      return this;
	    }
	  }, {
	    key: "reset",
	    value: function reset() {
	      this.decoder.destroy();
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
	      return '2.0.8';
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
	        scrollable: false,
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
	        scrollable: 'boolean',
	        refreshRate: checkNum('refreshRate', 16, 1000, true),
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
