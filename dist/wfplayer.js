/*!
 * wfplayer.js v2.2.3
 * Github: https://github.com/zhw2590582/WFPlayer
 * (c) 2017-2022 Harvey Zack
 * Released under the MIT License.
 */
!function(e,t,r,n,o){var i="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},s="function"==typeof i.parcelRequireb650&&i.parcelRequireb650,a=s.cache||{},l="undefined"!=typeof module&&"function"==typeof module.require&&module.require.bind(module);function c(t,r){if(!a[t]){if(!e[t]){var n="function"==typeof i.parcelRequireb650&&i.parcelRequireb650;if(!r&&n)return n(t,!0);if(s)return s(t,!0);if(l&&"string"==typeof t)return l(t);var o=new Error("Cannot find module '"+t+"'");throw o.code="MODULE_NOT_FOUND",o}f.resolve=function(r){var n=e[t][1][r];return null!=n?n:r},f.cache={};var u=a[t]=new c.Module(t);e[t][0].call(u.exports,f,u,u.exports,this)}return a[t].exports;function f(e){var t=f.resolve(e);return!1===t?{}:c(t)}}c.isParcelRequire=!0,c.Module=function(e){this.id=e,this.bundle=c,this.exports={}},c.modules=e,c.cache=a,c.parent=s,c.register=function(t,r){e[t]=[function(e,t){t.exports=r},{}]},Object.defineProperty(c,"root",{get:function(){return i.parcelRequireb650}}),i.parcelRequireb650=c;for(var u=0;u<t.length;u++)c(t[u]);var f=c(r);"object"==typeof exports&&"undefined"!=typeof module?module.exports=f:"function"==typeof define&&define.amd&&define((function(){return f}))}({bqk8e:[function(e,t,r){var n=e("@parcel/transformer-js/src/esmodule-helpers.js");n.defineInteropFlag(r),n.export(r,"default",(()=>C));var o=e("option-validator"),i=n.interopDefault(o),s=e("./emitter"),a=n.interopDefault(s),l=e("./events"),c=n.interopDefault(l),u=e("./template"),f=n.interopDefault(u),h=e("./drawer"),d=n.interopDefault(h),p=e("./decoder"),m=n.interopDefault(p),g=e("./loader"),y=n.interopDefault(g),w=e("./controller"),b=n.interopDefault(w),v=e("./utils");let x=0;const T=[];class C extends a.default{static get instances(){return T}static get version(){return"2.2.3"}static get env(){return"production"}static get default(){return{container:"#waveform",mediaElement:null,useWorker:!0,wave:!0,waveColor:"rgba(255, 255, 255, 0.1)",backgroundColor:"rgb(28, 32, 34)",paddingColor:"rgba(255, 255, 255, 0.05)",cursor:!0,cursorColor:"#ff0000",progress:!0,progressColor:"rgba(255, 255, 255, 0.5)",grid:!0,gridColor:"rgba(255, 255, 255, 0.05)",ruler:!0,rulerColor:"rgba(255, 255, 255, 0.5)",scrollbar:!0,scrollbarColor:"rgba(255, 255, 255, 0.25)",rulerAtTop:!0,scrollable:!1,refreshDelay:50,channel:0,duration:10,padding:5,waveScale:.8,pixelRatio:Math.ceil(window.devicePixelRatio)}}static get scheme(){return{container:"htmlelement|htmldivelement",mediaElement:"null|htmlvideoelement|htmlaudioelement",useWorker:"boolean",wave:"boolean",waveColor:"string",backgroundColor:"string",paddingColor:"string",cursor:"boolean",cursorColor:"string",progress:"boolean",progressColor:"string",grid:"boolean",gridColor:"string",ruler:"boolean",rulerColor:"string",scrollbar:"boolean",scrollbarColor:"string",rulerAtTop:"boolean",scrollable:"boolean",refreshDelay:"number",channel:"number",duration:"number",padding:"number",waveScale:"number",pixelRatio:"number"}}get currentTime(){return this.options.mediaElement?this.options.mediaElement.currentTime:this._currentTime}get duration(){return this.options.mediaElement?this.options.mediaElement.duration:1/0}get playing(){const{mediaElement:e}=this.options;return!!e&&!!(e.currentTime>0&&!e.paused&&!e.ended&&e.readyState>2)}get canvas(){return this.template.canvas}get config(){return this.drawer.config}get proxy(){return this.events.proxy}setOptions(e={}){return(0,v.errorHandle)("object"===i.default.kindOf(e),"setOptions expects to receive object as a parameter."),"string"==typeof e.container&&(e.container=document.querySelector(e.container)),"string"==typeof e.mediaElement&&(e.mediaElement=document.querySelector(e.mediaElement)),this.options=(0,i.default)({...C.default,...this.options,...e},C.scheme),this.emit("options",this.options),this.options.scrollable?(0,v.addClass)(this.options.container,"wf-scrollable"):(0,v.removeClass)(this.options.container,"wf-scrollable"),this.update(),this}load(e){return e&&"function"==typeof e.getChannelData?(this.decoder.decodeSuccess(e),this.controller.init(),this):e&&e.buffer?(this.decoder.decodeAudioData(e),this.controller.init(),this):((e instanceof HTMLVideoElement||e instanceof HTMLAudioElement)&&(this.options.mediaElement=e,e=e.currentSrc||e.src),(0,v.errorHandle)("string"==typeof e&&e.trim(),"The load target is not a string. If you are loading a mediaElement, make sure the mediaElement.src is not empty."),this.loader.load(e),this.controller.init(),this)}getCurrentTimeFromEvent(e){const{container:t}=this.options,{padding:r,beginTime:n,gridGap:o,pixelRatio:i}=this.drawer.config,s=e.pageX-t.getBoundingClientRect().left-r*o/i;return this.getDurationFromWidth(s)+n}getDurationFromWidth(e){const{gridGap:t,pixelRatio:r}=this.drawer.config;return e/(t/r*10)}getWidthFromDuration(e){const{gridGap:t,pixelRatio:r}=this.drawer.config;return t/r*10*e}getLeftFromTime(e){const{gridGap:t,pixelRatio:r,beginTime:n,padding:o}=this.drawer.config;return this.getWidthFromDuration(e-n)+o*t/r}checkVisible(e,t){const{beginTime:r,duration:n}=this.drawer.config;return"number"==typeof e&&"number"==typeof t&&(!(e>=t)&&(!(t<r)&&!(e>r+n)))}seek(e){return(0,v.errorHandle)("number"==typeof e,"seek expects to receive number as a parameter."),cancelAnimationFrame(this._playTimer),this._currentTime=(0,v.clamp)(e,0,this.duration),this.options.mediaElement&&this.options.mediaElement.currentTime!==this._currentTime&&(this.options.mediaElement.currentTime=this._currentTime),this.update(),this}smoothSeek(e,t=.2){return new Promise((r=>{(0,v.errorHandle)("number"==typeof e,"smoothSeek expects to receive number as a parameter."),cancelAnimationFrame(this._playTimer);const n=(0,v.clamp)(e,0,this.duration),o=n-this.currentTime;if(0===o)return r(this);const i=o/t/100,{mediaElement:s}=this.options,{playing:a}=this;a&&s.pause(),function e(){this._playTimer=requestAnimationFrame((()=>{o>0&&this.currentTime<n||o<0&&this.currentTime>n?(this.seek(this.currentTime+i),this.isDestroy||e.call(this)):(this.seek(n),a&&s.play(),r(this))}))}.call(this)}))}changeChannel(e){return this.decoder.changeChannel(e),this.setOptions({channel:e}),this.update(),this}exportImage(){return this.template.exportImage(),this}update(){return this.template&&this.drawer&&(this.template.update(),this.drawer.update()),this}destroy(){return this.isDestroy=!0,this.events.destroy(),this.template.destroy(),this.controller.destroy(),this.decoder.destroy(),this.loader.destroy(),this.drawer.destroy(),T.splice(T.indexOf(this),1),this}constructor(e={}){super(),this._playTimer=null,this._currentTime=0,this.isDestroy=!1,this.grabbing=!1,this.options={},this.setOptions(e),this.events=new(0,c.default)(this),this.template=new(0,f.default)(this),this.decoder=new(0,m.default)(this),this.drawer=new(0,d.default)(this),this.controller=new(0,b.default)(this),this.loader=new(0,y.default)(this),this.update(),x+=1,this.id=x,T.push(this)}}"undefined"!=typeof window&&(window.WFPlayer=C)},{"option-validator":"e1J0t","./emitter":"eQX3k","./events":"giPUg","./template":"2OQDE","./drawer":"5ozk4","./decoder":"2xfV6","./loader":"kF7nB","./controller":"3y0fD","./utils":"50e2b","@parcel/transformer-js/src/esmodule-helpers.js":"47PTV"}],e1J0t:[function(e,t,r){t.exports=function(){"use strict";function e(t){return(e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(t)}var t=Object.prototype.toString,r=function(r){if(void 0===r)return"undefined";if(null===r)return"null";var o=e(r);if("boolean"===o)return"boolean";if("string"===o)return"string";if("number"===o)return"number";if("symbol"===o)return"symbol";if("function"===o)return function(e){return"GeneratorFunction"===n(e)}(r)?"generatorfunction":"function";if(function(e){return Array.isArray?Array.isArray(e):e instanceof Array}(r))return"array";if(function(e){return!(!e.constructor||"function"!=typeof e.constructor.isBuffer)&&e.constructor.isBuffer(e)}(r))return"buffer";if(function(e){try{if("number"==typeof e.length&&"function"==typeof e.callee)return!0}catch(e){if(-1!==e.message.indexOf("callee"))return!0}return!1}(r))return"arguments";if(function(e){return e instanceof Date||"function"==typeof e.toDateString&&"function"==typeof e.getDate&&"function"==typeof e.setDate}(r))return"date";if(function(e){return e instanceof Error||"string"==typeof e.message&&e.constructor&&"number"==typeof e.constructor.stackTraceLimit}(r))return"error";if(function(e){return e instanceof RegExp||"string"==typeof e.flags&&"boolean"==typeof e.ignoreCase&&"boolean"==typeof e.multiline&&"boolean"==typeof e.global}(r))return"regexp";switch(n(r)){case"Symbol":return"symbol";case"Promise":return"promise";case"WeakMap":return"weakmap";case"WeakSet":return"weakset";case"Map":return"map";case"Set":return"set";case"Int8Array":return"int8array";case"Uint8Array":return"uint8array";case"Uint8ClampedArray":return"uint8clampedarray";case"Int16Array":return"int16array";case"Uint16Array":return"uint16array";case"Int32Array":return"int32array";case"Uint32Array":return"uint32array";case"Float32Array":return"float32array";case"Float64Array":return"float64array"}if(function(e){return"function"==typeof e.throw&&"function"==typeof e.return&&"function"==typeof e.next}(r))return"generator";switch(o=t.call(r)){case"[object Object]":return"object";case"[object Map Iterator]":return"mapiterator";case"[object Set Iterator]":return"setiterator";case"[object String Iterator]":return"stringiterator";case"[object Array Iterator]":return"arrayiterator"}return o.slice(8,-1).toLowerCase().replace(/\s/g,"")};function n(e){return e.constructor?e.constructor.name:null}function o(e,t){var n=2<arguments.length&&void 0!==arguments[2]?arguments[2]:["option"];return i(e,t,n),s(e,t,n),function(e,t,n){var a=r(t),l=r(e);if("object"===a){if("object"!==l)throw new Error("[Type Error]: '".concat(n.join("."),"' require 'object' type, but got '").concat(l,"'"));Object.keys(t).forEach((function(r){var a=e[r],l=t[r],c=n.slice();c.push(r),i(a,l,c),s(a,l,c),o(a,l,c)}))}if("array"===a){if("array"!==l)throw new Error("[Type Error]: '".concat(n.join("."),"' require 'array' type, but got '").concat(l,"'"));e.forEach((function(r,a){var l=e[a],c=t[a]||t[0],u=n.slice();u.push(a),i(l,c,u),s(l,c,u),o(l,c,u)}))}}(e,t,n),e}function i(e,t,n){if("string"===r(t)){var o=r(e);if("?"===t[0]&&(t=t.slice(1)+"|undefined"),!(-1<t.indexOf("|")?t.split("|").map((function(e){return e.toLowerCase().trim()})).filter(Boolean).some((function(e){return o===e})):t.toLowerCase().trim()===o))throw new Error("[Type Error]: '".concat(n.join("."),"' require '").concat(t,"' type, but got '").concat(o,"'"))}}function s(e,t,n){if("function"===r(t)){var o=t(e,r(e),n);if(!0!==o){var i=r(o);throw"string"===i?new Error(o):"error"===i?o:new Error("[Validator Error]: The scheme for '".concat(n.join("."),"' validator require return true, but got '").concat(o,"'"))}}}return o.kindOf=r,o}()},{}],eQX3k:[function(e,t,r){var n=e("@parcel/transformer-js/src/esmodule-helpers.js");n.defineInteropFlag(r),n.export(r,"default",(()=>o));class o{on(e,t,r){const n=this.e||(this.e={});return(n[e]||(n[e]=[])).push({fn:t,ctx:r}),this}once(e,t,r){const n=this;function o(...i){n.off(e,o),t.apply(r,i)}return o._=t,this.on(e,o,r)}emit(e,...t){const r=((this.e||(this.e={}))[e]||[]).slice();for(let e=0;e<r.length;e+=1)r[e].fn.apply(r[e].ctx,t);return this}off(e,t){const r=this.e||(this.e={}),n=r[e],o=[];if(n&&t)for(let e=0,r=n.length;e<r;e+=1)n[e].fn!==t&&n[e].fn._!==t&&o.push(n[e]);return o.length?r[e]=o:delete r[e],this}}},{"@parcel/transformer-js/src/esmodule-helpers.js":"47PTV"}],"47PTV":[function(e,t,r){r.interopDefault=function(e){return e&&e.__esModule?e:{default:e}},r.defineInteropFlag=function(e){Object.defineProperty(e,"__esModule",{value:!0})},r.exportAll=function(e,t){return Object.keys(e).forEach((function(r){"default"===r||"__esModule"===r||t.hasOwnProperty(r)||Object.defineProperty(t,r,{enumerable:!0,get:function(){return e[r]}})})),t},r.export=function(e,t,r){Object.defineProperty(e,t,{enumerable:!0,get:r})}},{}],giPUg:[function(e,t,r){var n=e("@parcel/transformer-js/src/esmodule-helpers.js");n.defineInteropFlag(r),n.export(r,"default",(()=>o));class o{proxy(e,t,r,n={}){if(Array.isArray(t))return t.map((t=>this.proxy(e,t,r,n)));e.addEventListener(t,r,n);const o=()=>e.removeEventListener(t,r,n);return this.destroyEvents.push(o),o}destroy(){this.destroyEvents.forEach((e=>e()))}constructor(){this.destroyEvents=[],this.proxy=this.proxy.bind(this)}}},{"@parcel/transformer-js/src/esmodule-helpers.js":"47PTV"}],"2OQDE":[function(e,t,r){var n=e("@parcel/transformer-js/src/esmodule-helpers.js");n.defineInteropFlag(r),n.export(r,"default",(()=>i));var o=e("./utils");class i{init(){const{container:e,pixelRatio:t}=this.wf.options,{clientWidth:r,clientHeight:n}=e,i=r*t,s=n*t;this.canvas?(this.canvas.width!==i&&(this.canvas.width=i),this.canvas.height!==s&&(this.canvas.height=s)):((0,o.errorHandle)(this.wf.constructor.instances.every((t=>t.options.container!==e)),"Cannot mount multiple instances on the same dom element, please destroy the previous instance first."),e.innerHTML="",e.style.overflow="hidden",this.canvas=document.createElement("canvas"),this.canvas.width=i,this.canvas.height=s,this.canvas.style.width="100%",this.canvas.style.height="100%",e.appendChild(this.canvas))}exportImage(){const e=document.createElement("a");e.style.display="none",e.href=this.canvas.toDataURL("image/png"),e.download=`${Date.now()}.png`,document.body.appendChild(e),e.click(),document.body.removeChild(e)}destroy(){this.wf.options.container.innerHTML=""}constructor(e){this.wf=e,this.canvas=null;const{refreshDelay:t}=e.options;this.update=(0,o.throttle)(this.init,t,this),this.init()}}},{"./utils":"50e2b","@parcel/transformer-js/src/esmodule-helpers.js":"47PTV"}],"50e2b":[function(e,t,r){var n=e("@parcel/transformer-js/src/esmodule-helpers.js");n.defineInteropFlag(r),n.export(r,"WFPlayerError",(()=>o)),n.export(r,"errorHandle",(()=>i)),n.export(r,"mergeBuffer",(()=>s)),n.export(r,"clamp",(()=>a)),n.export(r,"throttle",(()=>l)),n.export(r,"addClass",(()=>c)),n.export(r,"removeClass",(()=>u));class o extends Error{constructor(e){super(e),this.name="WFPlayerError"}}function i(e,t){if(!e)throw new o(t);return e}function s(...e){const t=e[0].constructor;return e.reduce(((e,r)=>{const n=new t((0|e.byteLength)+(0|r.byteLength));return n.set(e,0),n.set(r,0|e.byteLength),n}),new t)}function a(e,t,r){return Math.max(Math.min(e,Math.max(t,r)),Math.min(t,r))}function l(e,t,r){let n=Date.now();return(...o)=>{Date.now()-n>=t&&(e.apply(r,o),n=Date.now())}}function c(e,t){return e.classList.add(t)}function u(e,t){return e.classList.remove(t)}},{"@parcel/transformer-js/src/esmodule-helpers.js":"47PTV"}],"5ozk4":[function(e,t,r){var n=e("@parcel/transformer-js/src/esmodule-helpers.js");n.defineInteropFlag(r),n.export(r,"default",(()=>l));var o=e("./utils"),i=e("bundle-text:./worker"),s=n.interopDefault(i),a=e("./worker");class l{update(){const{currentTime:e,duration:t,options:{container:r,mediaElement:n,...o}}=this.wf,{width:i,height:s}=this.canvas;this.worker.postMessage({type:"UPDATE",data:{...o,currentTime:e,width:i,height:s,totolDuration:t}})}destroy(){this.worker.terminate&&this.worker.terminate()}constructor(e){this.wf=e,this.canvas=e.template.canvas,this.config={};const{refreshDelay:t,useWorker:r}=e.options;this.update=(0,o.throttle)(this.update,t,this),r&&window.OffscreenCanvas&&window.Worker?(this.worker=new Worker(URL.createObjectURL(new Blob([s.default]))),this.ctx=this.canvas.getContext("bitmaprenderer"),this.wf.events.proxy(this.worker,"message",(t=>{const{type:r,data:n}=t.data;"UPFATE"!==r||e.isDestroy||(this.config=n.config,this.wf.emit("update",n.config),this.ctx.transferFromImageBitmap(n.imageBitmap))})),this.worker.postMessage({type:"INIT",data:{width:this.canvas.width,height:this.canvas.height}})):(this.worker={postMessage:a.postMessage},this.worker.postMessage({type:"INIT",data:{canvas:this.canvas,wf:this.wf}})),e.on("decode",(({channelData:e,sampleRate:t})=>{this.worker.postMessage({type:"DECODE",data:{channelData:e,sampleRate:t}}),this.update()}))}}},{"./utils":"50e2b","bundle-text:./worker":"2nCk3","./worker":"iCc9f","@parcel/transformer-js/src/esmodule-helpers.js":"47PTV"}],"2nCk3":[function(e,t,r){t.exports='!function(e,t,o,r,n){var l="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},i="function"==typeof l.parcelRequireb650&&l.parcelRequireb650,a=i.cache||{},f="undefined"!=typeof module&&"function"==typeof module.require&&module.require.bind(module);function c(t,o){if(!a[t]){if(!e[t]){var r="function"==typeof l.parcelRequireb650&&l.parcelRequireb650;if(!o&&r)return r(t,!0);if(i)return i(t,!0);if(f&&"string"==typeof t)return f(t);var n=new Error("Cannot find module \'"+t+"\'");throw n.code="MODULE_NOT_FOUND",n}s.resolve=function(o){var r=e[t][1][o];return null!=r?r:o},s.cache={};var u=a[t]=new c.Module(t);e[t][0].call(u.exports,s,u,u.exports,this)}return a[t].exports;function s(e){var t=s.resolve(e);return!1===t?{}:c(t)}}c.isParcelRequire=!0,c.Module=function(e){this.id=e,this.bundle=c,this.exports={}},c.modules=e,c.cache=a,c.parent=i,c.register=function(t,o){e[t]=[function(e,t){t.exports=o},{}]},Object.defineProperty(c,"root",{get:function(){return l.parcelRequireb650}}),l.parcelRequireb650=c;for(var u=0;u<t.length;u++)c(t[u]);var s=c(o);"object"==typeof exports&&"undefined"!=typeof module?module.exports=s:"function"==typeof define&&define.amd&&define((function(){return s}))}({"04Ftm":[function(e,t,o){var r=e("@parcel/transformer-js/src/esmodule-helpers.js");r.defineInteropFlag(o),r.export(o,"postMessage",(()=>m));const n=void 0===self.document;let l=null,i=null,a=null,f=0,c=0,u=0,s=1,d=44100,p=new Float32Array;function h(e){const t=Math.floor(e/3600),o=Math.floor((e-3600*t)/60);return[t,o,Math.floor(e-3600*t-60*o)].map((e=>e<10?`0${e}`:String(e))).join(":")}function g(e){const{width:t,height:o,currentTime:r,progress:n,waveColor:l,progressColor:i,duration:f,padding:s,waveScale:h,scrollable:g}=e,m=o/2,b=t-c*s*2,y=Math.floor(u*d),R=Math.floor((w=(u+f)*d,x=y,M=1/0,Math.max(Math.min(w,Math.max(x,M)),Math.min(x,M))));var w,x,M;const T=Math.floor((R-y)/b),v=g?t/2:s*c+(r-u)*c*10;let C=0,j=0,O=1,P=-1;for(let e=y;e<R;e+=1){C+=1;const t=p[e]||0;if(t<O?O=t:t>P&&(P=t),C>=T&&j<b){j+=1;const e=c*s+j;a.fillStyle=n&&v>=e?i:l,a.fillRect(e,(1+O*h)*m,1,Math.max(1,(P-O)*m*h)),C=0,O=1,P=-1}}}self.onmessage=function(e){const{type:t,data:o}=e.data;if("INIT"===t&&(n?i=new OffscreenCanvas(o.width,o.height):(l=o.wf,i=o.canvas),a=i.getContext("2d")),"DECODE"===t&&(d=o.sampleRate,p=o.channelData),"UPDATE"===t){const{width:e,height:t,currentTime:r,cursor:m,grid:b,ruler:y,wave:R,duration:w,padding:x,scrollable:M,scrollbar:T}=o;i.width!==e&&(i.width=e),i.height!==t&&(i.height=t),f=10*w+2*x,c=e/f,u=M?r-w/2:Math.floor(r/w)*w,s=function(e){const{pixelRatio:t}=e;a.font=11*t+"px Arial";const o=a.measureText("99:99:99").width;return function e(t){return c*t/(1.5*o)>1?Math.floor(t/10):e(t+10)}(10)}(o),function(e){const{width:t,height:o,backgroundColor:r,paddingColor:n,padding:l}=e;a.clearRect(0,0,t,o),a.fillStyle=r,a.fillRect(0,0,t,o),a.fillStyle=n,a.fillRect(0,0,l*c,o),a.fillRect(t-l*c,0,l*c,o)}(o),b&&function(e){const{width:t,height:o,currentTime:r,gridColor:n,pixelRatio:l,scrollable:i}=e;a.fillStyle=n;for(let e=0;e<f+10;e+=s){const t=i?c*e-(r-parseInt(r,10))*c*10:c*e;a.fillRect(t,0,l,o)}for(let e=0;e<o/c;e+=s)a.fillRect(0,c*e,t,l)}(o),y&&function(e){const{height:t,currentTime:o,rulerColor:r,pixelRatio:n,padding:l,rulerAtTop:i,scrollable:d}=e;a.font=11*n+"px Arial",a.fillStyle=r;let p=-1;for(let e=0;e<f+10;e+=1){const r=d?c*e-(o-parseInt(o,10))*c*10:c*e;if((e-l)%10==0){p+=1,a.fillRect(r,i?0:t-15*n,n,15*n);const e=Math.floor(u+p);e%s==0&&e>=0&&a.fillText(h(e),r-11*n*2+n,i?30*n:t-30*n+11)}else(e-l)%5==0&&a.fillRect(r,i?0:t-7.5*n,n,7.5*n)}}(o),R&&g(o),T&&function(e){const{width:t,height:o,currentTime:r,pixelRatio:n,rulerAtTop:l,totolDuration:i,scrollable:f,scrollbarColor:u}=e;if(!f||!i||i===1/0)return;const s=t/(c/n*10*i)*t,d=5*n,p=r/i*(t-s),h=l?o-d:0;a.fillStyle=u,a.fillRect(p,h,s,d)}(o),m&&function(e){const{height:t,width:o,currentTime:r,cursorColor:n,pixelRatio:l,padding:i,scrollable:f}=e;a.fillStyle=n;const s=f?o/2:i*c+(r-u)*c*10;a.fillRect(s,0,l,t)}(o);const{byteLength:v}=p,C={gridNum:f,gridGap:c,beginTime:u,density:s,sampleRate:d,byteLength:v,...o};n?self.postMessage({type:"UPFATE",data:{config:C,imageBitmap:i.transferToImageBitmap()}}):l.emit("update",C)}};const m=e=>{self.onmessage({data:e})}},{"@parcel/transformer-js/src/esmodule-helpers.js":"47PTV"}],"47PTV":[function(e,t,o){o.interopDefault=function(e){return e&&e.__esModule?e:{default:e}},o.defineInteropFlag=function(e){Object.defineProperty(e,"__esModule",{value:!0})},o.exportAll=function(e,t){return Object.keys(e).forEach((function(o){"default"===o||"__esModule"===o||t.hasOwnProperty(o)||Object.defineProperty(t,o,{enumerable:!0,get:function(){return e[o]}})})),t},o.export=function(e,t,o){Object.defineProperty(e,t,{enumerable:!0,get:o})}},{}]},["04Ftm"],"04Ftm");'},{}],iCc9f:[function(e,t,r){var n=e("@parcel/transformer-js/src/esmodule-helpers.js");n.defineInteropFlag(r),n.export(r,"postMessage",(()=>g));const o=void 0===self.document;let i=null,s=null,a=null,l=0,c=0,u=0,f=1,h=44100,d=new Float32Array;function p(e){const t=Math.floor(e/3600),r=Math.floor((e-3600*t)/60);return[t,r,Math.floor(e-3600*t-60*r)].map((e=>e<10?`0${e}`:String(e))).join(":")}function m(e){const{width:t,height:r,currentTime:n,progress:o,waveColor:i,progressColor:s,duration:l,padding:f,waveScale:p,scrollable:m}=e,g=r/2,y=t-c*f*2,w=Math.floor(u*h),b=Math.floor((v=(u+l)*h,x=w,T=1/0,Math.max(Math.min(v,Math.max(x,T)),Math.min(x,T))));var v,x,T;const C=Math.floor((b-w)/y),j=m?t/2:f*c+(n-u)*c*10;let R=0,D=0,E=1,M=-1;for(let e=w;e<b;e+=1){R+=1;const t=d[e]||0;if(t<E?E=t:t>M&&(M=t),R>=C&&D<y){D+=1;const e=c*f+D;a.fillStyle=o&&j>=e?s:i,a.fillRect(e,(1+E*p)*g,1,Math.max(1,(M-E)*g*p)),R=0,E=1,M=-1}}}self.onmessage=function(e){const{type:t,data:r}=e.data;if("INIT"===t&&(o?s=new OffscreenCanvas(r.width,r.height):(i=r.wf,s=r.canvas),a=s.getContext("2d")),"DECODE"===t&&(h=r.sampleRate,d=r.channelData),"UPDATE"===t){const{width:e,height:t,currentTime:n,cursor:g,grid:y,ruler:w,wave:b,duration:v,padding:x,scrollable:T,scrollbar:C}=r;s.width!==e&&(s.width=e),s.height!==t&&(s.height=t),l=10*v+2*x,c=e/l,u=T?n-v/2:Math.floor(n/v)*v,f=function(e){const{pixelRatio:t}=e;a.font=11*t+"px Arial";const r=a.measureText("99:99:99").width;return function e(t){return c*t/(1.5*r)>1?Math.floor(t/10):e(t+10)}(10)}(r),function(e){const{width:t,height:r,backgroundColor:n,paddingColor:o,padding:i}=e;a.clearRect(0,0,t,r),a.fillStyle=n,a.fillRect(0,0,t,r),a.fillStyle=o,a.fillRect(0,0,i*c,r),a.fillRect(t-i*c,0,i*c,r)}(r),y&&function(e){const{width:t,height:r,currentTime:n,gridColor:o,pixelRatio:i,scrollable:s}=e;a.fillStyle=o;for(let e=0;e<l+10;e+=f){const t=s?c*e-(n-parseInt(n,10))*c*10:c*e;a.fillRect(t,0,i,r)}for(let e=0;e<r/c;e+=f)a.fillRect(0,c*e,t,i)}(r),w&&function(e){const{height:t,currentTime:r,rulerColor:n,pixelRatio:o,padding:i,rulerAtTop:s,scrollable:h}=e;a.font=11*o+"px Arial",a.fillStyle=n;let d=-1;for(let e=0;e<l+10;e+=1){const n=h?c*e-(r-parseInt(r,10))*c*10:c*e;if((e-i)%10==0){d+=1,a.fillRect(n,s?0:t-15*o,o,15*o);const e=Math.floor(u+d);e%f==0&&e>=0&&a.fillText(p(e),n-11*o*2+o,s?30*o:t-30*o+11)}else(e-i)%5==0&&a.fillRect(n,s?0:t-7.5*o,o,7.5*o)}}(r),b&&m(r),C&&function(e){const{width:t,height:r,currentTime:n,pixelRatio:o,rulerAtTop:i,totolDuration:s,scrollable:l,scrollbarColor:u}=e;if(!l||!s||s===1/0)return;const f=t/(c/o*10*s)*t,h=5*o,d=n/s*(t-f),p=i?r-h:0;a.fillStyle=u,a.fillRect(d,p,f,h)}(r),g&&function(e){const{height:t,width:r,currentTime:n,cursorColor:o,pixelRatio:i,padding:s,scrollable:l}=e;a.fillStyle=o;const f=l?r/2:s*c+(n-u)*c*10;a.fillRect(f,0,i,t)}(r);const{byteLength:j}=d,R={gridNum:l,gridGap:c,beginTime:u,density:f,sampleRate:h,byteLength:j,...r};o?self.postMessage({type:"UPFATE",data:{config:R,imageBitmap:s.transferToImageBitmap()}}):i.emit("update",R)}};const g=e=>{self.onmessage({data:e})}},{"@parcel/transformer-js/src/esmodule-helpers.js":"47PTV"}],"2xfV6":[function(e,t,r){var n=e("@parcel/transformer-js/src/esmodule-helpers.js");n.defineInteropFlag(r),n.export(r,"default",(()=>o));class o{decodeAudioData(e){return new Promise(((t,r)=>{this.wf.emit("decode:start",e),this.audioCtx.decodeAudioData(e.buffer,(e=>{this.wf.emit("decode:success",e),this.decodeSuccess(e),t(e)}),(e=>{this.wf.emit("decode:error",e),r(e)}))}))}decodeSuccess(e){this.audiobuffer=e,this.channelData=e.getChannelData(this.wf.options.channel),this.wf.emit("decode",{channelData:this.channelData,sampleRate:this.audiobuffer.sampleRate,duration:this.audiobuffer.duration}),this.wf.update()}changeChannel(e){this.channelData=this.audiobuffer.getChannelData(e)||new Float32Array,this.wf.emit("decode",{channelData:this.channelData,sampleRate:this.audiobuffer.sampleRate,duration:this.audiobuffer.duration}),this.wf.update()}destroy(){this.audiobuffer=this.audioCtx.createBuffer(1,2,44100),this.channelData=new Float32Array,this.wf.emit("decode",{channelData:this.channelData,sampleRate:this.audiobuffer.sampleRate,duration:this.audiobuffer.duration}),this.wf.update()}constructor(e){this.wf=e,this.audioCtx=new(window.OfflineAudioContext||window.webkitOfflineAudioContext)(1,2,44100),this.audiobuffer=this.audioCtx.createBuffer(1,2,44100),this.channelData=new Float32Array}}},{"@parcel/transformer-js/src/esmodule-helpers.js":"47PTV"}],kF7nB:[function(e,t,r){var n=e("@parcel/transformer-js/src/esmodule-helpers.js");n.defineInteropFlag(r),n.export(r,"default",(()=>i));var o=e("./utils");class i{load(e){return this.destroy(),fetch(e).then((e=>e.body&&"function"==typeof e.body.getReader?(this.fileSize=Number(e.headers.get("content-length")),this.reader=e.body.getReader(),function e(){return this.reader.read().then((({done:t,value:r})=>t?null:(this.loadSize+=r.byteLength,this.data=(0,o.mergeBuffer)(this.data,r),this.wf.decoder.decodeAudioData(this.data.slice()),this.wf.emit("load",{fileSize:this.fileSize,loadSize:this.loadSize,data:this.data}),e.call(this))))}.call(this)):e.arrayBuffer())).then((e=>(e&&e.byteLength&&(this.data=new Uint8Array(e),this.fileSize=this.data.byteLength,this.loadSize=this.data.byteLength,this.wf.decoder.decodeAudioData(this.data),this.wf.emit("load",{fileSize:this.fileSize,loadSize:this.loadSize,data:this.data})),e)))}destroy(){this.fileSize=0,this.loadSize=0,this.data=new Uint8Array,this.reader&&(this.reader.cancel(),this.reader=null)}constructor(e){this.wf=e,this.fileSize=0,this.loadSize=0,this.data=new Uint8Array,this.reader=null}}},{"./utils":"50e2b","@parcel/transformer-js/src/esmodule-helpers.js":"47PTV"}],"3y0fD":[function(e,t,r){var n=e("@parcel/transformer-js/src/esmodule-helpers.js");n.defineInteropFlag(r),n.export(r,"default",(()=>i));var o=e("./utils");class i{clickInit(){const{options:{container:e},events:{proxy:t}}=this.wf;t(e,["click","contextmenu"],(e=>{if(this.wf.grabbing)return;const t=this.wf.getCurrentTimeFromEvent(e);this.wf.emit(e.type,t,e)}))}resizeInit(){const{proxy:e}=this.wf.events,t=(0,o.throttle)((()=>{this.wf.update(),this.wf.emit("resize")}),200,this);e(window,["resize","orientationchange"],(()=>{t()}))}playInit(){const{events:{proxy:e},options:{mediaElement:t}}=this.wf;t&&(e(t,["seeked","seeking","canplay"],(()=>{this.wf.update()})),function e(){this.playTimer=requestAnimationFrame((()=>{this.wf.playing&&this.wf.update(),this.wf.isDestroy||e.call(this)}))}.call(this))}scrollInit(){const{events:{proxy:e},options:{container:t}}=this.wf;e(t,"wheel",(e=>{this.wf.emit("scroll",Math.sign(e.deltaY),e)}))}grabInit(){const{events:{proxy:e},options:{container:t}}=this.wf;let r=!1,n=0,i=0;e(t,"mousedown",(e=>{if(this.wf.emit("mousedown",e),0!==e.button)return;r=!0;const{scrollable:t}=this.wf.config;n=t?this.wf.currentTime:this.wf.getCurrentTimeFromEvent(e),i=e.pageX})),e(t,"mousemove",(e=>{if(this.wf.emit("mousemove",e),!r)return;this.wf.grabbing=!0,(0,o.addClass)(t,"wf-grabbing");const{scrollable:s}=this.wf.config,a=e.pageX-i,l=this.wf.getDurationFromWidth(a),c=n+(s?-l:l);this.wf.emit("grabbing",c,e)})),e(document,"mouseup",(e=>{this.wf.emit("mouseup",e),r&&(setTimeout((()=>this.wf.grabbing=!1)),(0,o.removeClass)(t,"wf-grabbing"),r=!1,n=0,i=0)}))}hoverInit(){const{events:{proxy:e},options:{container:t}}=this.wf,r=document.createElement("div");(0,o.addClass)(r,"wf-cursor"),r.style.cssText="position:absolute;top:0;left:0;bottom:0;z-index:10;width:1px;height:100%;background-color:#ffffff;opacity:0.25;user-select:none;pointer-events:none;display:none;",t.appendChild(r),this.wf.template.cursor=r,this.wf.on("mousemove",(e=>{r.style.left=e.pageX-t.getBoundingClientRect().left+"px"})),e(t,"mouseenter",(e=>{this.wf.emit("mouseenter",e),r.style.display=null})),e(t,"mouseleave",(e=>{this.wf.emit("mouseleave",e),r.style.display="none"}))}destroy(){cancelAnimationFrame(this.playTimer)}constructor(e){this.wf=e,this.playTimer=null,this.isInit=!1,this.init=()=>{this.isInit||(this.isInit=!0,this.clickInit(),this.resizeInit(),this.playInit(),this.scrollInit(),this.grabInit(),this.hoverInit())}}}},{"./utils":"50e2b","@parcel/transformer-js/src/esmodule-helpers.js":"47PTV"}]},["bqk8e"],"bqk8e");