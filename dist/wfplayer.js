/*!
 * WFPlayer.js v1.0.9
 * Github: https://github.com/zhw2590582/WFPlayer#readme
 * (c) 2017-2019 Harvey Zack
 * Released under the MIT License.
 */

!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(t=t||self).WFPlayer=e()}(this,function(){"use strict";var n=function(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t};var i=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")},t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function e(t,e){return t(e={exports:{}},e.exports),e.exports}var r=e(function(e){function r(t){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function n(t){return"function"==typeof Symbol&&"symbol"===r(Symbol.iterator)?e.exports=n=function(t){return r(t)}:e.exports=n=function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":r(t)},n(t)}e.exports=n});var o=function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t};var a=function(t,e){return!e||"object"!==r(e)&&"function"!=typeof e?o(t):e},u=e(function(e){function r(t){return e.exports=r=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},r(t)}e.exports=r});function c(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}var s=function(t,e,r){return e&&c(t.prototype,e),r&&c(t,r),t},f=e(function(r){function n(t,e){return r.exports=n=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},n(t,e)}r.exports=n});var l=function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&f(t,e)},h=e(function(t,e){function r(t){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function n(t){return t.constructor?t.constructor.name:null}function c(t,e){var r=2<arguments.length&&void 0!==arguments[2]?arguments[2]:["option"];return s(t,e,r),f(t,e,r),function(o,a,u){var t=l(a),e=l(o);if("object"===t){if("object"!==e)throw new Error("[Type Error]: '".concat(u.join("."),"' require 'object' type, but got '").concat(e,"'"));Object.keys(a).forEach(function(t){var e=o[t],r=a[t],n=u.slice();n.push(t),s(e,r,n),f(e,r,n),c(e,r,n)})}if("array"===t){if("array"!==e)throw new Error("[Type Error]: '".concat(u.join("."),"' require 'array' type, but got '").concat(e,"'"));o.forEach(function(t,e){var r=o[e],n=a[e]||a[0],i=u.slice();i.push(e),s(r,n,i),f(r,n,i),c(r,n,i)})}}(t,e,r),t}function s(t,e,r){if("string"===l(e)){var n=l(t);if(!(-1<e.indexOf("|")?e.split("|").map(function(t){return t.toLowerCase().trim()}).filter(Boolean).some(function(t){return n===t}):e.toLowerCase().trim()===n))throw new Error("[Type Error]: '".concat(r.join("."),"' require '").concat(e,"' type, but got '").concat(n,"'"))}}function f(t,e,r){if("function"===l(e)){var n=e(t,l(t),r);if(!0!==n){var i=l(n);throw"string"===i?new Error(n):"error"===i?n:new Error("[Validator Error]: The scheme for '".concat(r.join("."),"' validator require return true, but got '").concat(n,"'"))}}}var i,l;t.exports=(i=Object.prototype.toString,c.kindOf=l=function(t){if(void 0===t)return"undefined";if(null===t)return"null";var e=r(t);if("boolean"===e)return"boolean";if("string"===e)return"string";if("number"===e)return"number";if("symbol"===e)return"symbol";if("function"===e)return function(t){return"GeneratorFunction"===n(t)}(t)?"generatorfunction":"function";if(function(t){return Array.isArray?Array.isArray(t):t instanceof Array}(t))return"array";if(function(t){return!(!t.constructor||"function"!=typeof t.constructor.isBuffer)&&t.constructor.isBuffer(t)}(t))return"buffer";if(function(t){try{if("number"==typeof t.length&&"function"==typeof t.callee)return!0}catch(t){if(-1!==t.message.indexOf("callee"))return!0}return!1}(t))return"arguments";if(function(t){return t instanceof Date||"function"==typeof t.toDateString&&"function"==typeof t.getDate&&"function"==typeof t.setDate}(t))return"date";if(function(t){return t instanceof Error||"string"==typeof t.message&&t.constructor&&"number"==typeof t.constructor.stackTraceLimit}(t))return"error";if(function(t){return t instanceof RegExp||"string"==typeof t.flags&&"boolean"==typeof t.ignoreCase&&"boolean"==typeof t.multiline&&"boolean"==typeof t.global}(t))return"regexp";switch(n(t)){case"Symbol":return"symbol";case"Promise":return"promise";case"WeakMap":return"weakmap";case"WeakSet":return"weakset";case"Map":return"map";case"Set":return"set";case"Int8Array":return"int8array";case"Uint8Array":return"uint8array";case"Uint8ClampedArray":return"uint8clampedarray";case"Int16Array":return"int16array";case"Uint16Array":return"uint16array";case"Int32Array":return"int32array";case"Uint32Array":return"uint32array";case"Float32Array":return"float32array";case"Float64Array":return"float64array"}if(function(t){return"function"==typeof t.throw&&"function"==typeof t.return&&"function"==typeof t.next}(t))return"generator";switch(e=i.call(t)){case"[object Object]":return"object";case"[object Map Iterator]":return"mapiterator";case"[object Set Iterator]":return"setiterator";case"[object String Iterator]":return"stringiterator";case"[object Array Iterator]":return"arrayiterator"}return e.slice(8,-1).toLowerCase().replace(/\s/g,"")},c)}),d=function(){function t(){i(this,t)}return s(t,[{key:"on",value:function(t,e,r){var n=this.e||(this.e={});return(n[t]||(n[t]=[])).push({fn:e,ctx:r}),this}},{key:"once",value:function(n,i,o){var a=this;function u(){a.off(n,u);for(var t=arguments.length,e=new Array(t),r=0;r<t;r++)e[r]=arguments[r];i.apply(o,e)}return u._=i,this.on(n,u,o)}},{key:"emit",value:function(t){for(var e=((this.e||(this.e={}))[t]||[]).slice(),r=arguments.length,n=new Array(1<r?r-1:0),i=1;i<r;i++)n[i-1]=arguments[i];for(var o=0;o<e.length;o+=1)e[o].fn.apply(e[o].ctx,n);return this}},{key:"off",value:function(t,e){var r=this.e||(this.e={}),n=r[t],i=[];if(n&&e)for(var o=0,a=n.length;o<a;o+=1)n[o].fn!==e&&n[o].fn._!==e&&i.push(n[o]);return i.length?r[t]=i:delete r[t],this}}]),t}(),p=function(){function t(){i(this,t),this.destroyEvents=[],this.proxy=this.proxy.bind(this)}return s(t,[{key:"proxy",value:function(e,t,r,n){var i=this,o=3<arguments.length&&void 0!==n?n:{};Array.isArray(t)?t.forEach(function(t){return i.proxy(e,t,r,o)}):(e.addEventListener(t,r,o),this.destroyEvents.push(function(){e.removeEventListener(t,r,o)}))}},{key:"destroy",value:function(){this.destroyEvents.forEach(function(t){return t()})}}]),t}();var y=function(t){return-1!==Function.toString.call(t).indexOf("[native code]")},m=e(function(n){function i(t,e,r){return!function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(t){return!1}}()?n.exports=i=function(t,e,r){var n=[null];n.push.apply(n,e);var i=new(Function.bind.apply(t,n));return r&&f(i,r.prototype),i}:n.exports=i=Reflect.construct,i.apply(null,arguments)}n.exports=i}),v=e(function(e){function n(t){var r="function"==typeof Map?new Map:void 0;return e.exports=n=function(t){if(null===t||!y(t))return t;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==r){if(r.has(t))return r.get(t);r.set(t,e)}function e(){return m(t,arguments,u(this).constructor)}return e.prototype=Object.create(t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),f(e,t)},n(t)}e.exports=n}),g=e(function(t,e){t.exports={d2t:function(t){if(function(t){return t=String(t),/^(\d+)(\.\d{1,3})?$/.test(t)}(t)){var e=new Date(null),r=String(t).split("."),n=r[0],i=r[1]?r[1].padEnd(3,0):0;return e.setSeconds(Number(n)),e.setMilliseconds(Number(i)),e.toISOString().substr(11,12)}throw new Error("The format of the duration is incorrect: "+t)},t2d:function(t){if(function(t){return/^(\d+):([0-5][0-9]):([0-5][0-9])(\.\d{3})?$/.test(t)}(t)){var e=t.split(".")[0].split(":"),r=Number(t.split(".")[1]||0)/1e3,n=3600*Number(e[0]),i=60*Number(e[1]),o=Number(e[2]);return n+i+o+r}throw new Error("The format of the time is incorrect: "+t)}}}),b=function(t){function r(t){var e;return i(this,r),(e=a(this,u(r).call(this,t))).name="WFPlayerError",e}return l(r,t),r}(v(Error));function w(t,e){if(!t)throw new b(e);return t}function x(t){var e=0<arguments.length&&void 0!==t?t:0;return g.d2t(e.toFixed(3))}function O(t,e){for(var r=1,n=-1,i=0;i<t.length;i+=1){var o=t[i];o<r?r=o:n<o&&(n=o)}return[r*e,n*e]}function A(t,e,r){return Math.max(Math.min(t,Math.max(e,r)),Math.min(e,r))}var S=function(){function e(t){i(this,e),this.wf=t,this.canvas=null,this.update()}return s(e,[{key:"update",value:function(){var t=this.wf.options,e=t.container,r=t.pixelRatio,n=e.clientWidth,i=e.clientHeight;this.canvas?(this.canvas.width=n*r,this.canvas.height=i*r):(w(this.wf.constructor.instances.every(function(t){return t.options.container!==e}),"Cannot mount multiple instances on the same dom element, please destroy the previous instance first."),w(n&&i,"The width and height of the container cannot be 0"),e.innerHTML="",this.canvas=document.createElement("canvas"),this.canvas.width=n*r,this.canvas.height=i*r,this.canvas.style.width="100%",this.canvas.style.height="100%",e.appendChild(this.canvas))}},{key:"exportImage",value:function(){var t=document.createElement("a");t.style.display="none",t.href=this.canvas.toDataURL("image/png"),t.download="".concat(Date.now(),".png"),document.body.appendChild(t),t.click(),document.body.removeChild(t)}},{key:"destroy",value:function(){this.wf.options.container.innerHTML=""}}]),e}();var k=function(t){if(Array.isArray(t))return t};var E=function(t,e){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t)){var r=[],n=!0,i=!1,o=void 0;try{for(var a,u=t[Symbol.iterator]();!(n=(a=u.next()).done)&&(r.push(a.value),!e||r.length!==e);n=!0);}catch(t){i=!0,o=t}finally{try{n||null==u.return||u.return()}finally{if(i)throw o}}return r}};var T=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")};var D=function(t,e){return k(t)||E(t,e)||T()},j=function(){function r(t){var e=this;i(this,r),this.wf=t,this.canvas=t.template.canvas,this.ctx=this.canvas.getContext("2d"),this.gridNum=0,this.gridGap=0,this.beginTime=0,this.update(),t.on("options",function(){e.update()}),t.on("channelData",function(){e.update()})}return s(r,[{key:"update",value:function(){var t=this.wf,e=t.currentTime,r=t.options,n=r.cursor,i=r.grid,o=r.ruler,a=r.wave,u=r.duration,c=r.padding;this.gridNum=10*u+2*c,this.gridGap=this.canvas.width/this.gridNum,this.beginTime=Math.floor(e/u)*u,this.drawBackground(),i&&this.drawGrid(),o&&this.drawRuler(),a&&this.drawWave(),n&&this.drawCursor()}},{key:"drawBackground",value:function(){var t=this.wf.options,e=t.backgroundColor,r=t.paddingColor,n=t.padding,i=this.canvas,o=i.width,a=i.height;this.ctx.clearRect(0,0,o,a),this.ctx.fillStyle=e,this.ctx.fillRect(0,0,o,a),this.ctx.fillStyle=r,this.ctx.fillRect(0,0,n*this.gridGap,a),this.ctx.fillRect(o-n*this.gridGap,0,n*this.gridGap,a)}},{key:"drawWave",value:function(){for(var t=this.wf,e=t.currentTime,r=t.options,n=r.progress,i=r.waveColor,o=r.progressColor,a=r.duration,u=r.padding,c=r.waveScale,s=t.decoder,f=s.channelData,l=s.audiobuffer.sampleRate,h=this.canvas,d=h.width,p=h.height/2,y=d-this.gridGap*u*2,m=A(this.beginTime*l,0,1/0),v=A((this.beginTime+a)*l,m,1/0),g=Math.floor((v-m)/y),b=u*this.gridGap+(e-this.beginTime)*this.gridGap*10,w=-1,x=[],S=m;S<v;S+=1)if(x.push(f[S]||0),x.length>=g&&w<y){w+=1;var k=O(x,c),E=D(k,2),T=E[0],j=E[1],C=this.gridGap*u+w;this.ctx.fillStyle=n&&C<=b?o:i,this.ctx.fillRect(C,(1+T)*p,1,Math.max(1,(j-T)*p)),x.length=0}}},{key:"drawGrid",value:function(){var t=this.wf.options,e=t.gridColor,r=t.pixelRatio,n=this.canvas,i=n.width,o=n.height;this.ctx.fillStyle=e;for(var a=0;a<this.gridNum;a+=1)this.ctx.fillRect(this.gridGap*a,0,r,o);for(var u=0;u<o/this.gridGap;u+=1)this.ctx.fillRect(0,this.gridGap*u,i,r)}},{key:"drawRuler",value:function(){var t=this.wf.options,e=t.rulerColor,r=t.pixelRatio,n=t.padding,i=t.rulerAtTop,o=this.canvas.height;this.ctx.font="".concat(11*r,"px Arial"),this.ctx.fillStyle=e;for(var a=-1,u=0;u<this.gridNum;u+=1)u&&n<=u&&u<=this.gridNum-n&&(u-n)%10==0?(a+=1,this.ctx.fillRect(this.gridGap*u,i?0:o-15*r,r,15*r),this.ctx.fillText(x(this.beginTime+a).split(".")[0],this.gridGap*u-11*r*2+r,i?30*r:o-30*r+11)):u&&(u-n)%5==0&&this.ctx.fillRect(this.gridGap*u,i?0:o-7.5*r,r,7.5*r)}},{key:"drawCursor",value:function(){var t=this.wf,e=t.currentTime,r=t.options,n=r.cursorColor,i=r.pixelRatio,o=r.padding,a=this.canvas.height;this.ctx.fillStyle=n,this.ctx.fillRect(o*this.gridGap+(e-this.beginTime)*this.gridGap*10,0,i,a)}}]),r}();var C=function(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)},R="object"==typeof t&&t&&t.Object===Object&&t,I="object"==typeof self&&self&&self.Object===Object&&self,z=R||I||Function("return this")(),G=function(){return z.Date.now()},M=z.Symbol,P=Object.prototype,L=P.hasOwnProperty,N=P.toString,F=M?M.toStringTag:void 0;var _=function(t){var e=L.call(t,F),r=t[F];try{var n=!(t[F]=void 0)}catch(t){}var i=N.call(t);return n&&(e?t[F]=r:delete t[F]),i},W=Object.prototype.toString;var U=function(t){return W.call(t)},B=M?M.toStringTag:void 0;var q=function(t){return null==t?void 0===t?"[object Undefined]":"[object Null]":B&&B in Object(t)?_(t):U(t)};var $=function(t){return null!=t&&"object"==typeof t};var H=function(t){return"symbol"==typeof t||$(t)&&"[object Symbol]"==q(t)},V=/^\s+|\s+$/g,X=/^[-+]0x[0-9a-f]+$/i,J=/^0b[01]+$/i,K=/^0o[0-7]+$/i,Q=parseInt;var Y=function(t){if("number"==typeof t)return t;if(H(t))return NaN;if(C(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=C(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(V,"");var r=J.test(t);return r||K.test(t)?Q(t.slice(2),r?2:8):X.test(t)?NaN:+t},Z=Math.max,tt=Math.min;var et=function(n,r,t){var i,o,a,u,c,s,f=0,l=!1,h=!1,e=!0;if("function"!=typeof n)throw new TypeError("Expected a function");function d(t){var e=i,r=o;return i=o=void 0,f=t,u=n.apply(r,e)}function p(t){var e=t-s;return void 0===s||r<=e||e<0||h&&a<=t-f}function y(){var t=G();if(p(t))return m(t);c=setTimeout(y,function(t){var e=r-(t-s);return h?tt(e,a-(t-f)):e}(t))}function m(t){return c=void 0,e&&i?d(t):(i=o=void 0,u)}function v(){var t=G(),e=p(t);if(i=arguments,o=this,s=t,e){if(void 0===c)return function(t){return f=t,c=setTimeout(y,r),l?d(t):u}(s);if(h)return clearTimeout(c),c=setTimeout(y,r),d(s)}return void 0===c&&(c=setTimeout(y,r)),u}return r=Y(r)||0,C(t)&&(l=!!t.leading,a=(h="maxWait"in t)?Z(Y(t.maxWait)||0,r):a,e="trailing"in t?!!t.trailing:e),v.cancel=function(){void 0!==c&&clearTimeout(c),i=s=o=c=void(f=0)},v.flush=function(){return void 0===c?u:m(G())},v};var rt=function(t,e,r){var n=!0,i=!0;if("function"!=typeof t)throw new TypeError("Expected a function");return C(r)&&(n="leading"in r?!!r.leading:n,i="trailing"in r?!!r.trailing:i),et(t,e,{leading:n,maxWait:e,trailing:i})},nt=function(){function r(t){var e=this;i(this,r),this.wf=t,this.audioCtx=new(window.AudioContext||window.webkitAudioContext),this.throttleDecodeAudioData=rt(this.decodeAudioData,500),this.audiobuffer=this.audioCtx.createBuffer(2,22050,44100),this.channelData=new Float32Array,this.wf.on("loading",function(t){e.throttleDecodeAudioData(t)})}return s(r,[{key:"decodeAudioData",value:function(t){var e=this,r=this.wf,n=r.options.channel,i=r.duration;this.audioCtx.decodeAudioData(t.buffer).then(function(t){e.audiobuffer=t,e.wf.emit("audiobuffer",e.audiobuffer),e.wf.emit("decodeing",e.audiobuffer.duration/i),e.channelData=t.getChannelData(n),e.wf.emit("channelData",e.channelData)}).catch(function(t){w(!1,"It seems that the AudioContext decoding get wrong: ".concat(t.message.trim()))})}},{key:"destroy",value:function(){this.audiobuffer=this.audioCtx.createBuffer(2,22050,44100),this.channelData=new Float32Array}}]),r}(),it=function(){function e(t){i(this,e),this.wf=t,this.fileSize=0,this.loadSize=0,this.data=new Uint8Array,this.reader=null,this.abortController=null}return s(e,[{key:"load",value:function(t){var r=this;this.destroy(),this.abortController=new AbortController;var e=this.wf.options,n=e.withCredentials,i=e.cors,o=e.headers;return this.wf.emit("loadStart"),fetch(t,{credentials:n?"include":"omit",mode:i?"cors":"no-cors",signal:this.abortController.signal,headers:o}).then(function(t){return t.body&&"function"==typeof t.body.getReader?(r.fileSize=Number(t.headers.get("content-length")),r.wf.emit("fileSize",r.fileSize),r.reader=t.body.getReader(),function n(){var i=this;return this.reader.read().then(function(t){var e=t.done,r=t.value;return e?(i.wf.emit("loadEnd"),null):(i.loadSize+=r.byteLength,i.wf.emit("downloading",i.loadSize/i.fileSize),i.data=function(){for(var t=arguments.length,e=new Array(t),r=0;r<t;r++)e[r]=arguments[r];var n=e[0].constructor;return e.reduce(function(t,e){var r=new n((0|t.byteLength)+(0|e.byteLength));return r.set(t,0),r.set(e,0|t.byteLength),r},new n)}(i.data,r),i.wf.emit("loading",i.data.slice()),n.call(i))})}.call(r)):t.arrayBuffer()}).then(function(t){if(t&&t.byteLength){var e=new Uint8Array(t);r.fileSize=e.byteLength,r.wf.emit("fileSize",r.fileSize),r.loadSize=e.byteLength,r.wf.emit("downloading",r.loadSize/r.fileSize),r.wf.emit("loading",e),r.wf.emit("loadEnd")}})}},{key:"destroy",value:function(){this.fileSize=0,this.loadSize=0,this.data=new Uint8Array,this.reader&&(this.reader.cancel(),this.reader=null),this.abortController&&(this.abortController.abort(),this.abortController=null)}}]),e}(),ot=function(){function r(t){var e=this;i(this,r),this.wf=t,this.playTimer=null,this.wf.on("load",function(){e.clickInit(),e.resizeInit(),e.playInit()})}return s(r,[{key:"getTimeFromEvent",value:function(t){var e=this.wf,r=e.currentTime,n=e.template.canvas,i=e.options,o=i.duration,a=i.padding,u=i.container,c=i.pixelRatio,s=10*o+2*a,f=n.width/s,l=A(t.pageX-u.offsetLeft-a*f/c,0,1/0),h=Math.floor(r/o)*o;return A(l/f*c/10+h,h,h+o)}},{key:"clickInit",value:function(){var r=this,t=this.wf,e=t.template.canvas;(0,t.events.proxy)(e,["click","contextmenu"],function(t){var e=r.getTimeFromEvent(t);r.wf.emit(t.type,e,t)})}},{key:"resizeInit",value:function(){var t=this,e=this.wf,r=e.template,n=e.drawer,i=e.events.proxy,o=rt(function(){r.update(),n.update(),t.wf.emit("resize")},500);i(window,["resize","orientationchange"],function(){o()})}},{key:"playInit",value:function(){var t=this.wf,r=t.drawer,n=t.options.mediaElement;n&&function t(){var e=this;this.playTimer=requestAnimationFrame(function(){e.wf.playing&&(r.update(),e.wf.emit("playing",n.currentTime)),e.wf.isDestroy||t.call(e)})}.call(this)}},{key:"destroy",value:function(){cancelAnimationFrame(this.playTimer)}}]),r}();function at(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}var ut=0,ct=[];return function(){function r(){var t,e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{};return i(this,r),(t=a(this,u(r).call(this)))._currentTime=0,t.isDestroy=!1,t.options={},t.setOptions(e),t.events=new p(o(t)),t.template=new S(o(t)),t.decoder=new nt(o(t)),t.drawer=new j(o(t)),t.controller=new ot(o(t)),t.loader=new it(o(t)),ut+=1,t.id=ut,ct.push(o(t)),t}return l(r,d),s(r,null,[{key:"instances",get:function(){return ct}},{key:"version",get:function(){return"1.0.9"}},{key:"env",get:function(){return'"production"'}},{key:"default",get:function(){return{container:"#waveform",mediaElement:null,wave:!0,waveColor:"rgba(255, 255, 255, 0.1)",backgroundColor:"rgb(28, 32, 34)",paddingColor:"rgba(255, 255, 255, 0.05)",cursor:!0,cursorColor:"#ff0000",progress:!0,progressColor:"rgba(255, 255, 255, 0.5)",grid:!0,gridColor:"rgba(255, 255, 255, 0.05)",ruler:!0,rulerColor:"rgba(255, 255, 255, 0.5)",rulerAtTop:!0,withCredentials:!1,cors:!1,headers:{},channel:0,duration:10,padding:5,waveScale:.8,pixelRatio:window.devicePixelRatio}}},{key:"scheme",get:function(){function t(r,n,i,o){return function(t,e){return w("number"===e,"".concat(r," expects to receive number as a parameter, but got ").concat(e,".")),w(n<=t&&t<=i&&(!o||Number.isInteger(t)),"'options.".concat(r,"' expect ").concat(o?"an integer ":"a ","number that >= ").concat(n," and <= ").concat(i,", but got ").concat(t,".")),!0}}return{container:"htmlelement|htmldivelement",mediaElement:"null|htmlvideoelement|htmlaudioelement",wave:"boolean",waveColor:"string",backgroundColor:"string",paddingColor:"string",cursor:"boolean",cursorColor:"string",progress:"boolean",progressColor:"string",grid:"boolean",gridColor:"string",ruler:"boolean",rulerColor:"string",rulerAtTop:"boolean",withCredentials:"boolean",cors:"boolean",headers:"object",channel:t("channel",0,5,!0),duration:t("duration",1,100,!0),padding:t("padding",1,100,!0),waveScale:t("waveScale",.1,10,!1),pixelRatio:t("pixelRatio",1,10,!1)}}}]),s(r,[{key:"setOptions",value:function(t){var e=0<arguments.length&&void 0!==t?t:{};return w("object"===h.kindOf(e),"setOptions expects to receive object as a parameter."),"string"==typeof e.container&&(e.container=document.querySelector(e.container)),"string"==typeof e.mediaElement&&(e.mediaElement=document.querySelector(e.mediaElement)),this.options=h(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?at(r,!0).forEach(function(t){n(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):at(r).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}({},r.default,{},this.options,{},e),r.scheme),this.emit("options",this.options),this}},{key:"load",value:function(t){return(t instanceof HTMLVideoElement||t instanceof HTMLAudioElement)&&(t=(this.options.mediaElement=t).src),w("string"==typeof t&&t.trim(),"The load target is not a string. If you are loading a mediaElement, make sure the mediaElement.src is not empty."),this.loader.load(t),this.emit("load"),this}},{key:"seek",value:function(t){return w("number"==typeof t,"seek expects to receive number as a parameter."),this._currentTime=A(t,0,this.duration),this.drawer.update(),this}},{key:"exportImage",value:function(){return this.template.exportImage(),this}},{key:"destroy",value:function(){this.isDestroy=!0,this.events.destroy(),this.template.destroy(),this.controller.destroy(),this.decoder.destroy(),this.loader.destroy(),ct.splice(ct.indexOf(this),1)}},{key:"currentTime",get:function(){return this.options.mediaElement?this.options.mediaElement.currentTime:this._currentTime}},{key:"duration",get:function(){return this.options.mediaElement?this.options.mediaElement.duration:function(t){return g.t2d(t)}("99:59:59.999")}},{key:"playing",get:function(){var t=this.options.mediaElement;return!!t&&!!(0<t.currentTime&&!t.paused&&!t.ended&&2<t.readyState)}}]),r}()});
