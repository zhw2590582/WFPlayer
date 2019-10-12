/*!
 * WFPlayer.js v1.0.3
 * Github: https://github.com/zhw2590582/WFPlayer#readme
 * (c) 2017-2019 Harvey Zack
 * Released under the MIT License.
 */(function(a,b){"object"==typeof exports&&"undefined"!=typeof module?module.exports=b():"function"==typeof define&&define.amd?define(b):(a=a||self,a.WFPlayer=b())})(this,function(){'use strict';var q=Math.floor,r=Math.min,s=Math.max;function a(a,b,c){return b in a?Object.defineProperty(a,b,{value:c,enumerable:!0,configurable:!0,writable:!0}):a[b]=c,a}function b(a,b){return b={exports:{}},a(b,b.exports),b.exports}function c(a,b){for(var c,d=0;d<b.length;d++)c=b[d],c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(a,c.key,c)}function d(a,b){if(!a)throw new K(b);return a}function e(){var a=0<arguments.length&&arguments[0]!==void 0?arguments[0]:0;return J.d2t(a.toFixed(3))}function f(a){return J.t2d(a)}function g(){for(var a=arguments.length,b=Array(a),c=0;c<a;c++)b[c]=arguments[c];var d=b[0].constructor;return b.reduce(function(a,b){var c=new d((0|a.byteLength)+(0|b.byteLength));return c.set(a,0),c.set(b,0|a.byteLength),c},new d)}function h(a){for(var b,c=1,d=-1,e=0;e<a.length;e+=1)b=a[e],b<c?c=b:b>d&&(d=b);return[c,d]}function j(c,d,a){return s(r(c,s(d,a)),r(d,a))}function k(a,b){if(Symbol.iterator in Object(a)||"[object Arguments]"===Object.prototype.toString.call(a)){var c=[],d=!0,e=!1,f=void 0;try{for(var g,h=a[Symbol.iterator]();!(d=(g=h.next()).done)&&(c.push(g.value),!(b&&c.length===b));d=!0);}catch(a){e=!0,f=a}finally{try{d||null==h["return"]||h["return"]()}finally{if(e)throw f}}return c}}/**
   * The base implementation of `getTag` without fallbacks for buggy environments.
   *
   * @private
   * @param {*} value The value to query.
   * @returns {string} Returns the `toStringTag`.
   */function l(a){return null==a?void 0===a?"[object Undefined]":"[object Null]":ea&&ea in Object(a)?aa(a):da(a)}/**
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
   */function m(a,b,c){function d(b){var c=m,d=n;return m=n=void 0,s=b,p=a.apply(d,c),p}function e(a){// Invoke the leading edge.
return s=a,q=setTimeout(h,b),t?d(a):p}function f(a){var c=a-r,d=a-s,e=b-c;return u?pa(e,o-d):e}function g(a){var c=a-r,d=a-s;// Either this is the first call, activity has stopped and we're at the
// trailing edge, the system time has gone backwards and we're treating
// it as the trailing edge, or we've hit the `maxWait` limit.
return void 0===r||c>=b||0>c||u&&d>=o}function h(){var a=V();return g(a)?i(a):void(// Restart the timer.
q=setTimeout(h,f(a)))}function i(a){// Only invoke if we have `lastArgs` which means `func` has been
// debounced at least once.
return(q=void 0,v&&m)?d(a):(m=n=void 0,p)}function j(){void 0!==q&&clearTimeout(q),s=0,m=r=n=q=void 0}function k(){return void 0===q?p:i(V())}function l(){var a=V(),c=g(a);if(m=arguments,n=this,r=a,c){if(void 0===q)return e(r);if(u)return clearTimeout(q),q=setTimeout(h,b),d(r)}return void 0===q&&(q=setTimeout(h,b)),p}var m,n,o,p,q,r,s=0,t=!1,u=!1,v=!0;if("function"!=typeof a)throw new TypeError("Expected a function");return b=na(b)||0,Q(c)&&(t=!!c.leading,u="maxWait"in c,o=u?oa(na(c.maxWait)||0,b):o,v="trailing"in c?!!c.trailing:v),l.cancel=j,l.flush=k,l}/**
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
   */function n(a,b,c){var d=!0,e=!0;if("function"!=typeof a)throw new TypeError("Expected a function");return Q(c)&&(d="leading"in c?!!c.leading:d,e="trailing"in c?!!c.trailing:e),qa(a,b,{leading:d,maxWait:b,trailing:e})}function o(a,b){var c=Object.keys(a);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(a);b&&(d=d.filter(function(b){return Object.getOwnPropertyDescriptor(a,b).enumerable})),c.push.apply(c,d)}return c}function p(a){for(var b,c=1;c<arguments.length;c++)b=null==arguments[c]?{}:arguments[c],c%2?o(b,!0).forEach(function(c){t(a,c,b[c])}):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(b)):o(b).forEach(function(c){Object.defineProperty(a,c,Object.getOwnPropertyDescriptor(b,c))});return a}var t=a,u=function(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")},v="undefined"==typeof globalThis?"undefined"==typeof window?"undefined"==typeof global?"undefined"==typeof self?{}:self:global:window:globalThis,w=b(function(a){function b(a){return b="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(a){return typeof a}:function(a){return a&&"function"==typeof Symbol&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},b(a)}function c(d){return a.exports="function"==typeof Symbol&&"symbol"===b(Symbol.iterator)?c=function(a){return b(a)}:c=function(a){return a&&"function"==typeof Symbol&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":b(a)},c(d)}a.exports=c}),x=function(a){if(void 0===a)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return a},y=function(a,b){return b&&("object"===w(b)||"function"==typeof b)?b:x(a)},z=b(function(a){function b(c){return a.exports=b=Object.setPrototypeOf?Object.getPrototypeOf:function(a){return a.__proto__||Object.getPrototypeOf(a)},b(c)}a.exports=b}),A=function(a,b,d){return b&&c(a.prototype,b),d&&c(a,d),a},B=b(function(a){function b(c,d){return a.exports=b=Object.setPrototypeOf||function(a,b){return a.__proto__=b,a},b(c,d)}a.exports=b}),C=function(a,b){if("function"!=typeof b&&null!==b)throw new TypeError("Super expression must either be null or a function");a.prototype=Object.create(b&&b.prototype,{constructor:{value:a,writable:!0,configurable:!0}}),b&&B(a,b)},D=b(function(a){!function(b,c){a.exports=c()}(v,function(){function a(b){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(a){return typeof a}:function(a){return a&&"function"==typeof Symbol&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a})(b)}function b(a){return a.constructor?a.constructor.name:null}function d(a,b){var c=2<arguments.length&&void 0!==arguments[2]?arguments[2]:["option"];return f(a,b,c),g(a,b,c),function(b,a,c){var e=j(a),h=j(b);if("object"===e){if("object"!==h)throw new Error("[Type Error]: '".concat(c.join("."),"' require 'object' type, but got '").concat(h,"'"));Object.keys(a).forEach(function(h){var i=b[h],j=a[h],e=c.slice();e.push(h),f(i,j,e),g(i,j,e),d(i,j,e)})}if("array"===e){if("array"!==h)throw new Error("[Type Error]: '".concat(c.join("."),"' require 'array' type, but got '").concat(h,"'"));b.forEach(function(h,i){var j=b[i],e=a[i]||a[0],k=c.slice();k.push(i),f(j,e,k),g(j,e,k),d(j,e,k)})}}(a,b,c),a}function f(a,b,c){if("string"===j(b)){var d=j(a);if(-1<b.indexOf("|")?!b.split("|").map(function(a){return a.toLowerCase().trim()}).filter(Boolean).some(function(a){return d===a}):b.toLowerCase().trim()!==d)throw new Error("[Type Error]: '".concat(c.join("."),"' require '").concat(b,"' type, but got '").concat(d,"'"))}}function g(a,b,c){if("function"===j(b)){var d=b(a,j(a),c);if(!0!==d){var e=j(d);throw"string"===e?new Error(d):"error"===e?d:new Error("[Validator Error]: The scheme for '".concat(c.join("."),"' validator require return true, but got '").concat(d,"'"))}}}var h=Object.prototype.toString,j=function(c){if(void 0===c)return"undefined";if(null===c)return"null";var d=a(c);if("boolean"===d)return"boolean";if("string"===d)return"string";if("number"===d)return"number";if("symbol"===d)return"symbol";if("function"===d)return function(a){return"GeneratorFunction"===b(a)}(c)?"generatorfunction":"function";if(function(a){return Array.isArray?Array.isArray(a):a instanceof Array}(c))return"array";if(function(a){return!!(a.constructor&&"function"==typeof a.constructor.isBuffer)&&a.constructor.isBuffer(a)}(c))return"buffer";if(function(a){try{if("number"==typeof a.length&&"function"==typeof a.callee)return!0}catch(a){if(-1!==a.message.indexOf("callee"))return!0}return!1}(c))return"arguments";if(function(a){return a instanceof Date||"function"==typeof a.toDateString&&"function"==typeof a.getDate&&"function"==typeof a.setDate}(c))return"date";if(function(a){return a instanceof Error||"string"==typeof a.message&&a.constructor&&"number"==typeof a.constructor.stackTraceLimit}(c))return"error";if(function(a){return a instanceof RegExp||"string"==typeof a.flags&&"boolean"==typeof a.ignoreCase&&"boolean"==typeof a.multiline&&"boolean"==typeof a.global}(c))return"regexp";switch(b(c)){case"Symbol":return"symbol";case"Promise":return"promise";case"WeakMap":return"weakmap";case"WeakSet":return"weakset";case"Map":return"map";case"Set":return"set";case"Int8Array":return"int8array";case"Uint8Array":return"uint8array";case"Uint8ClampedArray":return"uint8clampedarray";case"Int16Array":return"int16array";case"Uint16Array":return"uint16array";case"Int32Array":return"int32array";case"Uint32Array":return"uint32array";case"Float32Array":return"float32array";case"Float64Array":return"float64array";}if(function(a){return"function"==typeof a.throw&&"function"==typeof a.return&&"function"==typeof a.next}(c))return"generator";switch(d=h.call(c)){case"[object Object]":return"object";case"[object Map Iterator]":return"mapiterator";case"[object Set Iterator]":return"setiterator";case"[object String Iterator]":return"stringiterator";case"[object Array Iterator]":return"arrayiterator";}return d.slice(8,-1).toLowerCase().replace(/\s/g,"")};return d.kindOf=j,d})}),E=/*#__PURE__*/function(){function a(){u(this,a)}return A(a,[{key:"on",value:function(a,b,c){var d=this.e||(this.e={});return(d[a]||(d[a]=[])).push({fn:b,ctx:c}),this}},{key:"once",value:function(a,b,c){function d(){e.off(a,d);for(var f=arguments.length,g=Array(f),h=0;h<f;h++)g[h]=arguments[h];b.apply(c,g)}var e=this;return d._=b,this.on(a,d,c)}},{key:"emit",value:function(a){for(var b=((this.e||(this.e={}))[a]||[]).slice(),c=arguments.length,d=Array(1<c?c-1:0),e=1;e<c;e++)d[e-1]=arguments[e];for(var f=0;f<b.length;f+=1)b[f].fn.apply(b[f].ctx,d);return this}},{key:"off",value:function(a,b){var c=this.e||(this.e={}),d=c[a],e=[];if(d&&b)for(var f=0,g=d.length;f<g;f+=1)d[f].fn!==b&&d[f].fn._!==b&&e.push(d[f]);return e.length?c[a]=e:delete c[a],this}}]),a}(),F=/*#__PURE__*/function(){function a(){u(this,a),this.destroyEvents=[],this.proxy=this.proxy.bind(this)}return A(a,[{key:"proxy",value:function(a,b,c){var d=this,e=3<arguments.length&&void 0!==arguments[3]?arguments[3]:{};Array.isArray(b)?b.forEach(function(b){return d.proxy(a,b,c,e)}):(a.addEventListener(b,c,e),this.destroyEvents.push(function(){a.removeEventListener(b,c,e)}))}},{key:"destroy",value:function(){this.destroyEvents.forEach(function(a){return a()})}}]),a}(),G=function(a){return-1!==Function.toString.call(a).indexOf("[native code]")},H=b(function(a){function b(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(a){return!1}}function c(){return a.exports=b()?c=Reflect.construct:c=function(b,c,d){var e=[null];e.push.apply(e,c);var a=Function.bind.apply(b,e),f=new a;return d&&B(f,d.prototype),f},c.apply(null,arguments)}a.exports=c}),I=b(function(a){function b(c){var d="function"==typeof Map?new Map:void 0;return a.exports=b=function(a){function b(){return H(a,arguments,z(this).constructor)}if(null===a||!G(a))return a;if("function"!=typeof a)throw new TypeError("Super expression must either be null or a function");if("undefined"!=typeof d){if(d.has(a))return d.get(a);d.set(a,b)}return b.prototype=Object.create(a.prototype,{constructor:{value:b,enumerable:!1,writable:!0,configurable:!0}}),B(b,a)},b(c)}a.exports=b}),J=b(function(a){(function(b,c){a.exports=c()})(v,function(){function a(a){return /^(\d+):([0-5][0-9]):([0-5][0-9])(\.\d{3})?$/.test(a)}function b(a){return a+="",/^(\d+)(\.\d{1,3})?$/.test(a)}return{d2t:function(a){if(b(a)){var c=new Date(null),d=(a+"").split("."),e=d[0],f=d[1]?d[1].padEnd(3,0):0;return c.setSeconds(+e),c.setMilliseconds(+f),c.toISOString().substr(11,12)}throw new Error("The format of the duration is incorrect: "+a)},t2d:function(b){if(a(b)){var c=b.split(".")[0].split(":"),d=+(b.split(".")[1]||0)/1e3,e=3600*+c[0],f=60*+c[1],g=+c[2];return e+f+g+d}throw new Error("The format of the time is incorrect: "+b)}}})}),K=/*#__PURE__*/function(a){function b(a){var c;return u(this,b),c=y(this,z(b).call(this,a)),c.name="WFPlayerError",c}return C(b,a),b}(I(Error)),L=/*#__PURE__*/function(){function a(b){u(this,a),this.wf=b,this.canvas=null,this.update()}return A(a,[{key:"update",value:function(){var a=this.wf.options,b=a.container,c=a.pixelRatio,e=b.clientWidth,f=b.clientHeight;this.canvas?(this.canvas.width=e*c,this.canvas.height=f*c):(d(this.wf.constructor.instances.every(function(a){return a.options.container!==b}),"Cannot mount multiple instances on the same dom element, please destroy the previous instance first."),d(e&&f,"The width and height of the container cannot be 0"),b.innerHTML="",this.canvas=document.createElement("canvas"),this.canvas.width=e*c,this.canvas.height=f*c,this.canvas.style.width="100%",this.canvas.style.height="100%",b.appendChild(this.canvas))}},{key:"exportImage",value:function(){var a=document.createElement("a");a.style.display="none",a.href=this.canvas.toDataURL("image/png"),a.download="".concat(Date.now(),".png"),document.body.appendChild(a),a.click(),document.body.removeChild(a)}},{key:"destroy",value:function(){this.wf.options.container.innerHTML=""}}]),a}(),M=function(a){if(Array.isArray(a))return a},N=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")},O=function(a,b){return M(a)||k(a,b)||N()},P=/*#__PURE__*/function(){function a(b){var c=this;u(this,a),this.wf=b,this.canvas=b.template.canvas,this.ctx=this.canvas.getContext("2d"),this.gridNum=0,this.gridGap=0,this.beginTime=0,this.update(),b.on("options",function(){c.update()}),b.on("channelData",function(){c.update()})}return A(a,[{key:"update",value:function(){var a=this.wf,b=a.currentTime,c=a.options,d=c.cursor,e=c.grid,f=c.ruler,g=c.duration,h=c.padding;this.gridNum=10*g+2*h,this.gridGap=this.canvas.width/this.gridNum,this.beginTime=q(b/g)*g,this.updateBackground(),e&&this.updateGrid(),f&&this.updateRuler(),this.updateWave(),d&&this.updateCursor()}},{key:"updateBackground",value:function(){var a=this.wf.options.backgroundColor,b=this.canvas,c=b.width,d=b.height;this.ctx.clearRect(0,0,c,d),this.ctx.fillStyle=a,this.ctx.fillRect(0,0,c,d)}},{key:"updateWave",value:function(){for(var a=this.wf,b=a.currentTime,c=a.options,d=c.progress,e=c.waveColor,f=c.progressColor,g=c.duration,k=c.padding,l=a.decoder,m=l.channelData,n=l.audiobuffer.sampleRate,o=this.canvas,p=o.width,r=o.height,t=r/2,u=p-2*(this.gridGap*k),v=j(this.beginTime*n,0,1/0),w=j((this.beginTime+g)*n,v,1/0),x=q((w-v)/u),y=k*this.gridGap+10*((b-this.beginTime)*this.gridGap),z=-1,A=[],B=v;B<w;B+=1)if(A.push(m[B]||0),A.length>=x&&z<u){z+=1;var C=h(A),D=O(C,2),E=D[0],F=D[1],G=this.gridGap*k+z;this.ctx.fillStyle=d&&y>=G?f:e,this.ctx.fillRect(G,(1+E)*t,1,s(1,(F-E)*t)),A.length=0}}},{key:"updateGrid",value:function(){var a=this.wf.options,b=a.gridColor,c=a.pixelRatio,d=this.canvas,e=d.width,f=d.height;this.ctx.fillStyle=b;for(var g=0;g<this.gridNum;g+=1)this.ctx.fillRect(this.gridGap*g,0,c,f);for(var h=0;h<f/this.gridGap;h+=1)this.ctx.fillRect(0,this.gridGap*h,e,c)}},{key:"updateRuler",value:function(){var a=this.wf.options,b=a.rulerColor,c=a.pixelRatio,d=a.padding,f=a.rulerAtTop,g=this.canvas.height,h=11,i=15,j=30;this.ctx.font="".concat(h*c,"px Arial"),this.ctx.fillStyle=b;for(var k=-1,l=0;l<this.gridNum;l+=1)0==(l-d)%10&&l?(k+=1,this.ctx.fillRect(this.gridGap*l,f?0:g-i*c,c,i*c),this.ctx.fillText(e(this.beginTime+k).split(".")[0],this.gridGap*l-2*(h*c)+c,f?j*c:g-j*c+h)):0==(l-d)%5&&l&&this.ctx.fillRect(this.gridGap*l,f?0:g-i/2*c,c,i/2*c)}},{key:"updateCursor",value:function(){var a=this.wf,b=a.currentTime,c=a.options,d=c.cursorColor,e=c.pixelRatio,f=c.padding,g=this.canvas.height;this.ctx.fillStyle=d,this.ctx.fillRect(f*this.gridGap+10*((b-this.beginTime)*this.gridGap),0,e,g)}}]),a}(),Q=/**
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
   */function(a){var b=typeof a;return null!=a&&("object"==b||"function"==b)},R="object"==typeof v&&v&&v.Object===Object&&v,S="object"==typeof self&&self&&self.Object===Object&&self,T=R||S||Function("return this")(),U=T,V=function(){return U.Date.now()},W=U.Symbol,X=W,Y=Object.prototype,Z=Y.hasOwnProperty,$=Y.toString,_=X?X.toStringTag:void 0,aa=/**
   * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
   *
   * @private
   * @param {*} value The value to query.
   * @returns {string} Returns the raw `toStringTag`.
   */function(a){var b=Z.call(a,_),c=a[_];try{a[_]=void 0;var d=!0}catch(a){}var e=$.call(a);return d&&(b?a[_]=c:delete a[_]),e},ba=Object.prototype,ca=ba.toString,da=/**
   * Converts `value` to a string using `Object.prototype.toString`.
   *
   * @private
   * @param {*} value The value to convert.
   * @returns {string} Returns the converted string.
   */function(a){return ca.call(a)},ea=X?X.toStringTag:void 0,fa=/**
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
   */function(a){return null!=a&&"object"==typeof a},ga=/**
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
   */function(a){return"symbol"==typeof a||fa(a)&&l(a)=="[object Symbol]"},ha=0/0,ia=/^\s+|\s+$/g,ja=/^[-+]0x[0-9a-f]+$/i,ka=/^0b[01]+$/i,la=/^0o[0-7]+$/i,ma=parseInt,na=/**
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
   */function(a){if("number"==typeof a)return a;if(ga(a))return ha;if(Q(a)){var b="function"==typeof a.valueOf?a.valueOf():a;a=Q(b)?b+"":b}if("string"!=typeof a)return 0===a?a:+a;a=a.replace(ia,"");var c=ka.test(a);return c||la.test(a)?ma(a.slice(2),c?2:8):ja.test(a)?ha:+a},oa=s,pa=r,qa=m,ra=n,sa=/*#__PURE__*/function(){function a(b){var c=this;u(this,a),this.wf=b,this.audioCtx=new(window.AudioContext||window.webkitAudioContext),this.throttleDecodeAudioData=ra(this.decodeAudioData,500),this.audiobuffer=this.audioCtx.createBuffer(2,22050,44100),this.channelData=new Float32Array,this.wf.on("loading",function(a){c.throttleDecodeAudioData(a)})}return A(a,[{key:"decodeAudioData",value:function(a){var b=this,c=this.wf,e=c.options.channel,f=c.duration;this.audioCtx.decodeAudioData(a.buffer).then(function(a){b.wf.emit("decodeing",a.duration/f),b.audiobuffer=a,b.channelData=a.getChannelData(e),b.wf.emit("channelData",b.channelData)}).catch(function(a){d(!1,"It seems that the AudioContext decoding get wrong: ".concat(a.message.trim()))})}},{key:"destroy",value:function(){this.audiobuffer=this.audioCtx.createBuffer(2,22050,44100),this.channelData=new Float32Array}}]),a}(),ta=/*#__PURE__*/function(){function a(b){u(this,a),this.wf=b,this.fileSize=0,this.loadSize=0,this.data=new Uint8Array,this.reader=null,this.abortController=null}return A(a,[{key:"load",value:function(a){var b=this;this.destroy(),this.abortController=new AbortController;var c=this.wf.options,d=c.withCredentials,e=c.cors,f=c.headers;return this.wf.emit("loadStart"),fetch(a,{credentials:d?"include":"omit",mode:e?"cors":"no-cors",signal:this.abortController.signal,headers:f}).then(function(a){return a.body&&"function"==typeof a.body.getReader?(b.fileSize=+a.headers.get("content-length"),b.wf.emit("fileSize",b.fileSize),b.reader=a.body.getReader(),function a(){var b=this;return this.reader.read().then(function(c){var d=c.done,e=c.value;return d?(b.wf.emit("loadEnd"),null):(b.loadSize+=e.byteLength,b.wf.emit("downloading",b.loadSize/b.fileSize),b.data=g(b.data,e),b.wf.emit("loading",b.data.slice()),a.call(b))})}.call(b)):a.arrayBuffer()}).then(function(a){if(a&&a.byteLength){var c=new Uint8Array(a);b.fileSize=c.byteLength,b.wf.emit("fileSize",b.fileSize),b.loadSize=c.byteLength,b.wf.emit("downloading",b.loadSize/b.fileSize),b.wf.emit("loading",c),b.wf.emit("loadEnd")}})}},{key:"destroy",value:function(){this.fileSize=0,this.loadSize=0,this.data=new Uint8Array,this.reader&&(this.reader.cancel(),this.reader=null),this.abortController&&(this.abortController.abort(),this.abortController=null)}}]),a}(),ua=/*#__PURE__*/function(){function a(b){var c=this;u(this,a),this.wf=b,this.playTimer=null,this.wf.on("load",function(){c.clickInit(),c.resizeInit(),c.playInit()})}return A(a,[{key:"clickInit",value:function(){var a=this,b=this.wf,c=b.template.canvas,d=b.events.proxy;d(c,["click","contextmenu"],function(b){var d=a.wf,e=d.currentTime,f=d.options,g=f.duration,h=f.padding,i=f.container,k=c.width/(10*g+2*h),l=j(b.pageX-i.offsetLeft-h*k,0,1/0),m=10*q(e/g),n=j(l/k/10+m,m,m+g);a.wf.emit(b.type,n,b)})}},{key:"resizeInit",value:function(){var a=this,b=this.wf,c=b.template,d=b.drawer,e=b.events.proxy,f=ra(function(){c.update(),d.update(),a.wf.emit("resize")},500);e(window,["resize","orientationchange"],function(){f()})}},{key:"playInit",value:function(){var a=this.wf,b=a.drawer,c=a.options.mediaElement;c&&function a(){var d=this;this.playTimer=requestAnimationFrame(function(){d.wf.playing&&(b.update(),d.wf.emit("playing",c.currentTime)),d.wf.isDestroy||a.call(d)})}.call(this)}},{key:"destroy",value:function(){cancelAnimationFrame(this.playTimer)}}]),a}(),va=0,i=[],wa=/*#__PURE__*/function(a){function b(){var a,c=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{};return u(this,b),a=y(this,z(b).call(this)),a._currentTime=0,a.isDestroy=!1,a.options={},a.setOptions(c),a.events=new F(x(a)),a.template=new L(x(a)),a.decoder=new sa(x(a)),a.drawer=new P(x(a)),a.controller=new ua(x(a)),a.loader=new ta(x(a)),va+=1,a.id=va,i.push(x(a)),a}return C(b,a),A(b,null,[{key:"instances",get:function(){return i}},{key:"version",get:function(){return"1.0.3"}},{key:"env",get:function(){return"\"production\""}},{key:"default",get:function(){return{container:"#waveform",mediaElement:null,waveColor:"rgba(255, 255, 255, 0.1)",backgroundColor:"rgb(28, 32, 34)",cursor:!0,cursorColor:"#ff0000",progress:!0,progressColor:"rgba(255, 255, 255, 0.5)",grid:!0,gridColor:"rgba(255, 255, 255, 0.05)",ruler:!0,rulerColor:"rgba(255, 255, 255, 0.5)",rulerAtTop:!0,withCredentials:!1,cors:!1,headers:{},pixelRatio:window.devicePixelRatio,channel:0,duration:10,padding:5}}},{key:"scheme",get:function(){var a=function(a,b){return function(c,e){var f=Number.isInteger;return d("number"===e,"".concat(a," expects to receive object as a parameter.")),d(c>=b&&f(c),"".concat(a," expect a positive integer greater than or equal to ").concat(b,", but got ").concat(c,".")),!0}};return{container:"htmlelement",mediaElement:"null|htmlvideoelement|htmlaudioelement",waveColor:"string",backgroundColor:"string",cursor:"boolean",cursorColor:"string",progress:"boolean",progressColor:"string",grid:"boolean",gridColor:"string",ruler:"boolean",rulerColor:"string",rulerAtTop:"boolean",withCredentials:"boolean",cors:"boolean",headers:"object",pixelRatio:a("pixelRatio",1),channel:a("channel",0),duration:a("duration",1),padding:a("padding",1)}}}]),A(b,[{key:"setOptions",value:function(){var a=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{};return d("object"===D.kindOf(a),"setOptions expects to receive object as a parameter."),"string"==typeof a.container&&(a.container=document.querySelector(a.container)),"string"==typeof a.mediaElement&&(a.mediaElement=document.querySelector(a.mediaElement)),this.options=D(p({},b.default,{},this.options,{},a),b.scheme),this.emit("options",this.options),this}},{key:"load",value:function(a){return(a instanceof HTMLVideoElement||a instanceof HTMLAudioElement)&&(this.options.mediaElement=a,a=a.src),d("string"==typeof a,"The load target is not a string. If you are loading a mediaElement, make sure the mediaElement.src is not empty."),this.loader.load(a),this.emit("load"),this}},{key:"seek",value:function(a){return d("number"==typeof a,"seek expects to receive number as a parameter."),this._currentTime=j(a,0,this.duration),this.drawer.update(),this}},{key:"exportImage",value:function(){return this.template.exportImage(),this}},{key:"destroy",value:function(){this.isDestroy=!0,this.events.destroy(),this.template.destroy(),this.controller.destroy(),this.decoder.destroy(),this.loader.destroy(),i.splice(i.indexOf(this),1)}},{key:"currentTime",get:function(){return this.options.mediaElement?this.options.mediaElement.currentTime:this._currentTime}},{key:"duration",get:function(){return this.options.mediaElement?this.options.mediaElement.duration:f("99:59:59.999")}},{key:"playing",get:function(){var a=this.options.mediaElement;return!!a&&0<a.currentTime&&!a.paused&&!a.ended&&2<a.readyState}}]),b}(E);return wa});
