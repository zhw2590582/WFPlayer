/*!
 * wfplayer.js v2.2.8
 * Github: https://github.com/zhw2590582/WFPlayer
 * (c) 2017-2023 Harvey Zack
 * Released under the MIT License.
 */
!// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
function(e,t,r,i,n){/* eslint-disable no-undef */var o="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},s="function"==typeof o[i]&&o[i],a=s.cache||{},l="undefined"!=typeof module&&"function"==typeof module.require&&module.require.bind(module);function u(t,r){if(!a[t]){if(!e[t]){// if we cannot find the module within our internal map or
// cache jump to the current global require ie. the last bundle
// that was added to the page.
var n="function"==typeof o[i]&&o[i];if(!r&&n)return n(t,!0);// If there are other bundles on this page the require from the
// previous one is saved to 'previousRequire'. Repeat this as
// many times as there are bundles until the module is found or
// we exhaust the require chain.
if(s)return s(t,!0);// Try the node require function if it exists.
if(l&&"string"==typeof t)return l(t);var f=Error("Cannot find module '"+t+"'");throw f.code="MODULE_NOT_FOUND",f}h.resolve=function(r){var i=e[t][1][r];return null!=i?i:r},h.cache={};var c=a[t]=new u.Module(t);e[t][0].call(c.exports,h,c,c.exports,this)}return a[t].exports;function h(e){var t=h.resolve(e);return!1===t?{}:u(t)}}u.isParcelRequire=!0,u.Module=function(e){this.id=e,this.bundle=u,this.exports={}},u.modules=e,u.cache=a,u.parent=s,u.register=function(t,r){e[t]=[function(e,t){t.exports=r},{}]},Object.defineProperty(u,"root",{get:function(){return o[i]}}),o[i]=u;for(var f=0;f<t.length;f++)u(t[f]);if(r){// Expose entry point to Node, AMD or browser globals
// Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
var c=u(r);// CommonJS
"object"==typeof exports&&"undefined"!=typeof module?module.exports=c:"function"==typeof define&&define.amd?define(function(){return c}):n&&(this[n]=c)}}({bqk8e:[function(e,t,r){var i=e("@parcel/transformer-js/src/esmodule-helpers.js");i.defineInteropFlag(r);var n=e("option-validator"),o=i.interopDefault(n),s=e("./emitter"),a=i.interopDefault(s),l=e("./events"),u=i.interopDefault(l),f=e("./template"),c=i.interopDefault(f),h=e("./drawer"),d=i.interopDefault(h),p=e("./decoder"),m=i.interopDefault(p),g=e("./loader"),y=i.interopDefault(g),w=e("./controller"),b=i.interopDefault(w),v=e("bundle-text:./style.less"),x=i.interopDefault(v),T=e("./utils");let M=0,j=[];class C extends a.default{static get instances(){return j}static get version(){return"2.2.8"}static get env(){return"production"}static get default(){return{container:"#waveform",mediaElement:null,useWorker:!0,wave:!0,waveColor:"rgba(255, 255, 255, 0.1)",backgroundColor:"rgb(28, 32, 34)",paddingColor:"rgba(255, 255, 255, 0.05)",cursor:!0,cursorColor:"#ff0000",progress:!0,progressColor:"rgba(255, 255, 255, 0.5)",grid:!0,gridColor:"rgba(255, 255, 255, 0.05)",ruler:!0,rulerColor:"rgba(255, 255, 255, 0.5)",scrollbar:!0,scrollbarColor:"rgba(255, 255, 255, 0.25)",rulerAtTop:!0,scrollable:!1,refreshDelay:50,channel:0,duration:10,padding:5,waveScale:.8,waveSize:1,pixelRatio:Math.ceil(window.devicePixelRatio),waveBorder:!1,waveBorderWidth:1,waveBorderColor:"rgba(255, 255, 255, 0.1)"}}static get scheme(){return{container:"htmlelement|htmldivelement",mediaElement:"null|htmlvideoelement|htmlaudioelement",useWorker:"boolean",wave:"boolean",waveColor:"string",backgroundColor:"string",paddingColor:"string",cursor:"boolean",cursorColor:"string",progress:"boolean",progressColor:"string",grid:"boolean",gridColor:"string",ruler:"boolean",rulerColor:"string",scrollbar:"boolean",scrollbarColor:"string",rulerAtTop:"boolean",scrollable:"boolean",refreshDelay:"number",channel:"number",duration:"number",padding:"number",waveScale:"number",waveSize:"number",pixelRatio:"number",waveBorder:"boolean",waveBorderWidth:"number",waveBorderColor:"string"}}constructor(e={}){super(),this._seekTimer=null,this._currentTime=0,this.isDestroy=!1,this.grabbing=!1,this.options={},this.setOptions(e),this.events=new u.default(this),this.template=new c.default(this),this.decoder=new m.default(this),this.drawer=new d.default(this),this.controller=new b.default(this),this.loader=new y.default(this),this.update(),M+=1,this.id=M,j.push(this)}get currentTime(){return this.options.mediaElement?this.options.mediaElement.currentTime:this._currentTime}get duration(){return this.options.mediaElement?this.options.mediaElement.duration:1/0}get playing(){let{mediaElement:e}=this.options;return!!e&&!!(e.currentTime>0&&!e.paused&&!e.ended&&e.readyState>2)}get canvas(){return this.template.canvas}get config(){return this.drawer.config}get proxy(){return this.events.proxy}setOptions(e={}){return(0,T.errorHandle)("object"===(0,o.default).kindOf(e),"setOptions expects to receive object as a parameter."),"string"==typeof e.container&&(e.container=document.querySelector(e.container)),"string"==typeof e.mediaElement&&(e.mediaElement=document.querySelector(e.mediaElement)),this.options=(0,o.default)({...C.default,...this.options,...e},C.scheme),this.options.channel=Math.abs(Math.floor(this.options.channel)),this.options.duration=Math.abs(Math.floor(this.options.duration)),this.options.padding=Math.abs(Math.floor(this.options.padding)),this.options.pixelRatio=Math.abs(Math.floor(this.options.pixelRatio)),this.options.waveSize=Math.abs(Math.floor(this.options.waveSize)),this.options.waveScale=Math.abs(this.options.waveScale),this.options.duration%2!=0&&(this.options.duration-=1),this.emit("options",this.options),this.options.scrollable?(0,T.addClass)(this.options.container,"wf-scrollable"):(0,T.removeClass)(this.options.container,"wf-scrollable"),this.update(),this}load(e){return e&&"function"==typeof e.getChannelData?this.decoder.decodeSuccess(e):e&&e.buffer?this.decoder.decodeAudioData(e):((e instanceof HTMLVideoElement||e instanceof HTMLAudioElement)&&(this.options.mediaElement=e,e=e.currentSrc||e.src),(0,T.errorHandle)("string"==typeof e&&e.trim(),"The load target is not a string. If you are loading a mediaElement, make sure the mediaElement.src is not empty."),// String Url
this.loader.load(e)),this.controller.init(),this}getCurrentTimeFromEvent(e){let{container:t}=this.options,{padding:r,beginTime:i,gridGap:n,pixelRatio:o}=this.drawer.config,s=e.pageX-t.getBoundingClientRect().left,a=this.getDurationFromWidth(s-r*n/o);return a+i}getDurationFromWidth(e){let{gridGap:t,pixelRatio:r}=this.drawer.config;return e/(t/r*10)}getWidthFromDuration(e){let{gridGap:t,pixelRatio:r}=this.drawer.config;return t/r*10*e}getLeftFromTime(e){let{gridGap:t,pixelRatio:r,beginTime:i,padding:n}=this.drawer.config,o=this.getWidthFromDuration(e-i);return o+n*t/r}checkVisible(e,t){let{beginTime:r,duration:i}=this.drawer.config;return"number"==typeof e&&"number"==typeof t&&!(e>=t)&&!(t<r)&&!(e>r+i)}checkCurrent(e,t){return this.checkVisible(e,t)&&this.currentTime>=e&&this.currentTime<=t}seek(e){return(0,T.errorHandle)("number"==typeof e,"seek expects to receive number as a parameter."),cancelAnimationFrame(this._seekTimer),this._currentTime=(0,T.clamp)(e,0,this.duration),this.options.mediaElement&&this.options.mediaElement.currentTime!==this._currentTime&&(this.options.mediaElement.currentTime=this._currentTime),this.update(),this}smoothSeek(e,t=.2){return new Promise(r=>{(0,T.errorHandle)("number"==typeof e,"smoothSeek expects to receive number as a parameter."),cancelAnimationFrame(this._seekTimer);let i=(0,T.clamp)(e,0,this.duration),n=i-this.currentTime;if(0===n)return r(this);let o=n/t/100,{mediaElement:s}=this.options,{playing:a}=this;a&&s.pause(),(function e(){this._seekTimer=requestAnimationFrame(()=>{n>0&&this.currentTime<i||n<0&&this.currentTime>i?(this.seek(this.currentTime+o),this.isDestroy||e.call(this)):(this.seek(i),a&&s.play(),r(this))})}).call(this)})}changeChannel(e){return this.decoder.changeChannel(e),this.setOptions({channel:e}),this.update(),this}exportImage(){return this.template.exportImage(),this}update(){return this.template&&this.drawer&&(this.template.update(),this.drawer.update()),this}reset(){return this.decoder.destroy(),this}destroy(){return this.isDestroy=!0,this.events.destroy(),this.template.destroy(),this.controller.destroy(),this.decoder.destroy(),this.loader.destroy(),this.drawer.destroy(),j.splice(j.indexOf(this),1),this}}if(r.default=C,"undefined"!=typeof document&&!document.getElementById("wfplayer-style")){let e=document.createElement("style");e.id="wfplayer-style",e.textContent=x.default,document.head.appendChild(e)}"undefined"!=typeof window&&(window.WFPlayer=C)},{"option-validator":"e1J0t","./emitter":"eQX3k","./events":"giPUg","./template":"2OQDE","./drawer":"5ozk4","./decoder":"2xfV6","./loader":"kF7nB","./controller":"3y0fD","bundle-text:./style.less":"4okRS","./utils":"50e2b","@parcel/transformer-js/src/esmodule-helpers.js":"47PTV"}],e1J0t:[function(e,t,r){t.exports=function(){function e(t){return(e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(t)}var t=Object.prototype.toString,r=function(r){if(void 0===r)return"undefined";if(null===r)return"null";var n=e(r);if("boolean"===n)return"boolean";if("string"===n)return"string";if("number"===n)return"number";if("symbol"===n)return"symbol";if("function"===n)return"GeneratorFunction"===i(r)?"generatorfunction":"function";if(Array.isArray?Array.isArray(r):r instanceof Array)return"array";if(r.constructor&&"function"==typeof r.constructor.isBuffer&&r.constructor.isBuffer(r))return"buffer";if(function(e){try{if("number"==typeof e.length&&"function"==typeof e.callee)return!0}catch(e){if(-1!==e.message.indexOf("callee"))return!0}return!1}(r))return"arguments";if(r instanceof Date||"function"==typeof r.toDateString&&"function"==typeof r.getDate&&"function"==typeof r.setDate)return"date";if(r instanceof Error||"string"==typeof r.message&&r.constructor&&"number"==typeof r.constructor.stackTraceLimit)return"error";if(r instanceof RegExp||"string"==typeof r.flags&&"boolean"==typeof r.ignoreCase&&"boolean"==typeof r.multiline&&"boolean"==typeof r.global)return"regexp";switch(i(r)){case"Symbol":return"symbol";case"Promise":return"promise";case"WeakMap":return"weakmap";case"WeakSet":return"weakset";case"Map":return"map";case"Set":return"set";case"Int8Array":return"int8array";case"Uint8Array":return"uint8array";case"Uint8ClampedArray":return"uint8clampedarray";case"Int16Array":return"int16array";case"Uint16Array":return"uint16array";case"Int32Array":return"int32array";case"Uint32Array":return"uint32array";case"Float32Array":return"float32array";case"Float64Array":return"float64array"}if("function"==typeof r.throw&&"function"==typeof r.return&&"function"==typeof r.next)return"generator";switch(n=t.call(r)){case"[object Object]":return"object";case"[object Map Iterator]":return"mapiterator";case"[object Set Iterator]":return"setiterator";case"[object String Iterator]":return"stringiterator";case"[object Array Iterator]":return"arrayiterator"}return n.slice(8,-1).toLowerCase().replace(/\s/g,"")};function i(e){return e.constructor?e.constructor.name:null}function n(e,t){var i=2<arguments.length&&void 0!==arguments[2]?arguments[2]:["option"];return o(e,t,i),s(e,t,i),function(e,t,i){var a=r(t),l=r(e);if("object"===a){if("object"!==l)throw Error("[Type Error]: '".concat(i.join("."),"' require 'object' type, but got '").concat(l,"'"));Object.keys(t).forEach(function(r){var a=e[r],l=t[r],u=i.slice();u.push(r),o(a,l,u),s(a,l,u),n(a,l,u)})}if("array"===a){if("array"!==l)throw Error("[Type Error]: '".concat(i.join("."),"' require 'array' type, but got '").concat(l,"'"));e.forEach(function(r,a){var l=e[a],u=t[a]||t[0],f=i.slice();f.push(a),o(l,u,f),s(l,u,f),n(l,u,f)})}}(e,t,i),e}function o(e,t,i){if("string"===r(t)){var n=r(e);if("?"===t[0]&&(t=t.slice(1)+"|undefined"),!(-1<t.indexOf("|")?t.split("|").map(function(e){return e.toLowerCase().trim()}).filter(Boolean).some(function(e){return n===e}):t.toLowerCase().trim()===n))throw Error("[Type Error]: '".concat(i.join("."),"' require '").concat(t,"' type, but got '").concat(n,"'"))}}function s(e,t,i){if("function"===r(t)){var n=t(e,r(e),i);if(!0!==n){var o=r(n);throw"string"===o?Error(n):"error"===o?n:Error("[Validator Error]: The scheme for '".concat(i.join("."),"' validator require return true, but got '").concat(n,"'"))}}}return n.kindOf=r,n}()},{}],eQX3k:[function(e,t,r){e("@parcel/transformer-js/src/esmodule-helpers.js").defineInteropFlag(r),r.default=class{on(e,t,r){let i=this.e||(this.e={});return(i[e]||(i[e]=[])).push({fn:t,ctx:r}),this}once(e,t,r){let i=this;function n(...o){i.off(e,n),t.apply(r,o)}return n._=t,this.on(e,n,r)}emit(e,...t){let r=((this.e||(this.e={}))[e]||[]).slice();for(let e=0;e<r.length;e+=1)r[e].fn.apply(r[e].ctx,t);return this}off(e,t){let r=this.e||(this.e={}),i=r[e],n=[];if(i&&t)for(let e=0,r=i.length;e<r;e+=1)i[e].fn!==t&&i[e].fn._!==t&&n.push(i[e]);return n.length?r[e]=n:delete r[e],this}}},{"@parcel/transformer-js/src/esmodule-helpers.js":"47PTV"}],"47PTV":[function(e,t,r){r.interopDefault=function(e){return e&&e.__esModule?e:{default:e}},r.defineInteropFlag=function(e){Object.defineProperty(e,"__esModule",{value:!0})},r.exportAll=function(e,t){return Object.keys(e).forEach(function(r){"default"===r||"__esModule"===r||t.hasOwnProperty(r)||Object.defineProperty(t,r,{enumerable:!0,get:function(){return e[r]}})}),t},r.export=function(e,t,r){Object.defineProperty(e,t,{enumerable:!0,get:r})}},{}],giPUg:[function(e,t,r){e("@parcel/transformer-js/src/esmodule-helpers.js").defineInteropFlag(r),r.default=class{constructor(){this.destroyEvents=[],this.proxy=this.proxy.bind(this)}proxy(e,t,r,i={}){if(Array.isArray(t))return t.map(t=>this.proxy(e,t,r,i));e.addEventListener(t,r,i);let n=()=>e.removeEventListener(t,r,i);return this.destroyEvents.push(n),n}destroy(){this.destroyEvents.forEach(e=>e())}}},{"@parcel/transformer-js/src/esmodule-helpers.js":"47PTV"}],"2OQDE":[function(e,t,r){e("@parcel/transformer-js/src/esmodule-helpers.js").defineInteropFlag(r);var i=e("./utils");r.default=class{constructor(e){this.wf=e,this.canvas=null;let{refreshDelay:t}=e.options;this.update=(0,i.throttle)(this.init,t,this),this.init()}init(){let{container:e,pixelRatio:t}=this.wf.options,{clientWidth:r,clientHeight:n}=e,o=r*t,s=n*t;this.canvas?(this.canvas.width!==o&&(this.canvas.width=o),this.canvas.height!==s&&(this.canvas.height=s)):((0,i.errorHandle)(this.wf.constructor.instances.every(t=>t.options.container!==e),"Cannot mount multiple instances on the same dom element, please destroy the previous instance first."),e.innerHTML="",(0,i.addClass)(e,"wf-player"),this.canvas=document.createElement("canvas"),this.canvas.width=o,this.canvas.height=s,this.canvas.style.width="100%",this.canvas.style.height="100%",e.appendChild(this.canvas))}exportImage(){let e=document.createElement("a");e.style.display="none",e.href=this.canvas.toDataURL("image/png"),e.download=`${Date.now()}.png`,document.body.appendChild(e),e.click(),document.body.removeChild(e)}destroy(){this.wf.options.container.innerHTML=""}}},{"./utils":"50e2b","@parcel/transformer-js/src/esmodule-helpers.js":"47PTV"}],"50e2b":[function(e,t,r){var i=e("@parcel/transformer-js/src/esmodule-helpers.js");i.defineInteropFlag(r),i.export(r,"WFPlayerError",()=>n),i.export(r,"errorHandle",()=>o),i.export(r,"mergeBuffer",()=>s),i.export(r,"clamp",()=>a),i.export(r,"throttle",()=>l),i.export(r,"addClass",()=>u),i.export(r,"removeClass",()=>f);class n extends Error{constructor(e){super(e),this.name="WFPlayerError"}}function o(e,t){if(!e)throw new n(t);return e}function s(...e){let t=e[0].constructor;return e.reduce((e,r)=>{let i=new t((0|e.byteLength)+(0|r.byteLength));return i.set(e,0),i.set(r,0|e.byteLength),i},new t)}function a(e,t,r){return Math.max(Math.min(e,Math.max(t,r)),Math.min(t,r))}function l(e,t,r){let i=Date.now();return(...n)=>{let o=Date.now();o-i>=t&&(e.apply(r,n),i=Date.now())}}function u(e,t){return e.classList.add(t)}function f(e,t){return e.classList.remove(t)}},{"@parcel/transformer-js/src/esmodule-helpers.js":"47PTV"}],"5ozk4":[function(e,t,r){var i=e("@parcel/transformer-js/src/esmodule-helpers.js");i.defineInteropFlag(r);var n=e("./utils"),o=e("bundle-text:./worker"),s=i.interopDefault(o),a=e("./worker");r.default=class{constructor(e){this.wf=e,this.canvas=e.template.canvas,this.config={};let{refreshDelay:t,useWorker:r}=e.options;this.update=(0,n.throttle)(this.update,t,this),r&&window.OffscreenCanvas&&window.Worker?(this.worker=new Worker(URL.createObjectURL(new Blob([s.default]))),this.ctx=this.canvas.getContext("bitmaprenderer"),this.wf.events.proxy(this.worker,"message",t=>{let{type:r,data:i}=t.data;"UPFATE"!==r||e.isDestroy||(this.config=i.config,this.wf.emit("update",i.config),this.ctx.transferFromImageBitmap(i.imageBitmap))}),this.worker.postMessage({type:"INIT",data:{width:this.canvas.width,height:this.canvas.height}})):(this.worker={postMessage:a.postMessage},this.wf.on("update",e=>{this.config=e}),this.worker.postMessage({type:"INIT",data:{canvas:this.canvas,wf:this.wf}})),e.on("decode",({channelData:e,sampleRate:t})=>{this.worker.postMessage({type:"DECODE",data:{channelData:e,sampleRate:t}}),this.update()})}update(){let{currentTime:e,duration:t,options:{container:r,mediaElement:i,...n}}=this.wf,{width:o,height:s}=this.canvas;this.worker.postMessage({type:"UPDATE",data:{...n,currentTime:e,width:o,height:s,totolDuration:t}})}destroy(){this.worker.terminate&&this.worker.terminate()}}},{"./utils":"50e2b","bundle-text:./worker":"2nCk3","./worker":"iCc9f","@parcel/transformer-js/src/esmodule-helpers.js":"47PTV"}],"2nCk3":[function(e,t,r){t.exports='!// modules are defined as an array\n// [ module function, map of requires ]\n//\n// map of requires is short require name -> numeric require\n//\n// anything defined in a previous bundle is accessed via the\n// orig method which is the require for previous bundles\nfunction(e,t,l,n,r){/* eslint-disable no-undef */var o="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},i="function"==typeof o[n]&&o[n],f=i.cache||{},a="undefined"!=typeof module&&"function"==typeof module.require&&module.require.bind(module);function u(t,l){if(!f[t]){if(!e[t]){// if we cannot find the module within our internal map or\n// cache jump to the current global require ie. the last bundle\n// that was added to the page.\nvar r="function"==typeof o[n]&&o[n];if(!l&&r)return r(t,!0);// If there are other bundles on this page the require from the\n// previous one is saved to \'previousRequire\'. Repeat this as\n// many times as there are bundles until the module is found or\n// we exhaust the require chain.\nif(i)return i(t,!0);// Try the node require function if it exists.\nif(a&&"string"==typeof t)return a(t);var c=Error("Cannot find module \'"+t+"\'");throw c.code="MODULE_NOT_FOUND",c}d.resolve=function(l){var n=e[t][1][l];return null!=n?n:l},d.cache={};var s=f[t]=new u.Module(t);e[t][0].call(s.exports,d,s,s.exports,this)}return f[t].exports;function d(e){var t=d.resolve(e);return!1===t?{}:u(t)}}u.isParcelRequire=!0,u.Module=function(e){this.id=e,this.bundle=u,this.exports={}},u.modules=e,u.cache=f,u.parent=i,u.register=function(t,l){e[t]=[function(e,t){t.exports=l},{}]},Object.defineProperty(u,"root",{get:function(){return o[n]}}),o[n]=u;for(var c=0;c<t.length;c++)u(t[c]);if(l){// Expose entry point to Node, AMD or browser globals\n// Based on https://github.com/ForbesLindesay/umd/blob/master/template.js\nvar s=u(l);// CommonJS\n"object"==typeof exports&&"undefined"!=typeof module?module.exports=s:"function"==typeof define&&define.amd?define(function(){return s}):r&&(this[r]=s)}}({"04Ftm":[function(e,t,l){var n=e("@parcel/transformer-js/src/esmodule-helpers.js");n.defineInteropFlag(l),n.export(l,"postMessage",()=>m);let r=void 0===self.document,o=null,i=null,f=null,a=0,u=0,c=0,s=1,d=44100,h=new Float32Array,p="";self.onmessage=function(e){let{type:t,data:l}=e.data;if("INIT"===t&&(r?i=new OffscreenCanvas(l.width,l.height):(o=l.wf,i=l.canvas),f=i.getContext("2d")),"DECODE"===t&&(d=l.sampleRate,h=l.channelData),"UPDATE"===t){let e=JSON.stringify(l);if(p===e)return p=e;i.width!==l.width&&(i.width=l.width),i.height!==l.height&&(i.height=l.height);let{byteLength:t}=h;a=10*l.duration+2*l.padding,u=l.width/a,s=function(e){if(0===u)return 1;f.font=`${11*e.pixelRatio}px Arial`;let t=f.measureText("99:99:99").width;return function e(l){let n=u*l/(1.5*t);return n>1?Math.floor(l/10):e(l+10)}(10)}(l),c=l.scrollable?l.currentTime-l.duration/2:Math.floor(l.currentTime/l.duration)*l.duration,function(e){let{width:t,height:l,backgroundColor:n,paddingColor:r,padding:o}=e;f.clearRect(0,0,t,l),f.fillStyle=n,f.fillRect(0,0,t,l),f.fillStyle=r,f.fillRect(0,0,o*u,l),f.fillRect(t-o*u,0,o*u,l)}(l),l.grid&&function(e){let{width:t,height:l,currentTime:n,gridColor:r,pixelRatio:o,scrollable:i}=e;f.fillStyle=r;for(let e=0;e<a+10;e+=s){let t=i?u*e-(n-parseInt(n,10))*u*10:u*e;f.fillRect(t,0,o,l)}for(let e=0;e<l/u;e+=s)f.fillRect(0,u*e,t,o)}(l),l.ruler&&function(e){let{height:t,currentTime:l,rulerColor:n,pixelRatio:r,padding:o,rulerAtTop:i,scrollable:d}=e;f.font=`${11*r}px Arial`,f.fillStyle=n;let h=-1;for(let e=0;e<a+10;e+=1){let n=d?u*e-(l-parseInt(l,10))*u*10:u*e;if((e-o)%10==0){h+=1,f.fillRect(n,i?0:t-15*r,r,15*r);let e=Math.floor(c+h);e%s==0&&e>=0&&f.fillText(function(e){let t=Math.floor(e/3600),l=Math.floor((e-3600*t)/60);return[t,l,Math.floor(e-3600*t-60*l)].map(e=>e<10?`0${e}`:String(e)).join(":")}(e),n-11*r*2+r,i?30*r:t-30*r+11)}else(e-o)%5==0&&f.fillRect(n,i?0:t-7.5*r,r,7.5*r)}}(l),l.wave&&function(e){var t;let{width:l,height:n,currentTime:r,progress:o,waveColor:i,progressColor:a,duration:s,padding:p,waveScale:m,waveSize:y,scrollable:g,waveBorder:M,waveBorderWidth:x,waveBorderColor:w}=e,b=n/2,v=l-u*p*2,R=Math.floor(c*d),T=Math.floor(Math.max(Math.min((c+s)*d,Math.max(R,t=1/0)),Math.min(R,t))),O=Math.floor((T-R)/v),j=g?l/2:p*u+(r-c)*u*10,P=0,S=0,F=1,_=-1;for(let e=R;e<T;e+=y){P+=1;let t=h[e]||0;if(t<F?F=t:t>_&&(_=t),P>=O&&S<v){let e=u*p+S;M&&(f.strokeStyle=w,f.lineWidth=x,// Draw the border around the rectangle\nf.strokeRect(e,(1+F*m)*b,y,Math.max(1,(_-F)*b*m))),// Fill the rectangle with the desired color\nf.fillStyle=o&&j>=e?a:i,f.fillRect(e+(M?x/2:0),(1+F*m)*b+(M?x/2:0),y-(M?x:0),Math.max(1,(_-F)*b*m)-(M?x:0// Adjust the height for the border\n)),S+=y,P=0,F=1,_=-1}}}(l),l.scrollbar&&function(e){let{width:t,height:l,currentTime:n,pixelRatio:r,rulerAtTop:o,totolDuration:i,scrollable:a,scrollbarColor:c}=e;if(!a||!i||i===1/0)return;let s=u/r*10*i,d=t/s*t,h=5*r,p=n/i*(t-d),m=o?l-h:0;f.fillStyle=c,f.fillRect(p,m,d,h)}(l),l.cursor&&function(e){let{height:t,width:l,currentTime:n,cursorColor:r,pixelRatio:o,padding:i,scrollable:a}=e;f.fillStyle=r;let s=a?l/2:i*u+(n-c)*u*10;f.fillRect(s,0,o,t)}(l);let n={gridNum:a,gridGap:u,beginTime:c,density:s,sampleRate:d,byteLength:t,...l};r?self.postMessage({type:"UPFATE",data:{config:n,imageBitmap:i.transferToImageBitmap()}}):o.emit("update",n)}};let m=e=>{self.onmessage({data:e})}},{"@parcel/transformer-js/src/esmodule-helpers.js":"47PTV"}],"47PTV":[function(e,t,l){l.interopDefault=function(e){return e&&e.__esModule?e:{default:e}},l.defineInteropFlag=function(e){Object.defineProperty(e,"__esModule",{value:!0})},l.exportAll=function(e,t){return Object.keys(e).forEach(function(l){"default"===l||"__esModule"===l||t.hasOwnProperty(l)||Object.defineProperty(t,l,{enumerable:!0,get:function(){return e[l]}})}),t},l.export=function(e,t,l){Object.defineProperty(e,t,{enumerable:!0,get:l})}},{}]},["04Ftm"],"04Ftm","parcelRequireb650");'},{}],iCc9f:[function(e,t,r){var i=e("@parcel/transformer-js/src/esmodule-helpers.js");i.defineInteropFlag(r),i.export(r,"postMessage",()=>m);let n=void 0===self.document,o=null,s=null,a=null,l=0,u=0,f=0,c=1,h=44100,d=new Float32Array,p="";self.onmessage=function(e){let{type:t,data:r}=e.data;if("INIT"===t&&(n?s=new OffscreenCanvas(r.width,r.height):(o=r.wf,s=r.canvas),a=s.getContext("2d")),"DECODE"===t&&(h=r.sampleRate,d=r.channelData),"UPDATE"===t){let e=JSON.stringify(r);if(p===e)return p=e;s.width!==r.width&&(s.width=r.width),s.height!==r.height&&(s.height=r.height);let{byteLength:t}=d;l=10*r.duration+2*r.padding,u=r.width/l,c=function(e){if(0===u)return 1;a.font=`${11*e.pixelRatio}px Arial`;let t=a.measureText("99:99:99").width;return function e(r){let i=u*r/(1.5*t);return i>1?Math.floor(r/10):e(r+10)}(10)}(r),f=r.scrollable?r.currentTime-r.duration/2:Math.floor(r.currentTime/r.duration)*r.duration,function(e){let{width:t,height:r,backgroundColor:i,paddingColor:n,padding:o}=e;a.clearRect(0,0,t,r),a.fillStyle=i,a.fillRect(0,0,t,r),a.fillStyle=n,a.fillRect(0,0,o*u,r),a.fillRect(t-o*u,0,o*u,r)}(r),r.grid&&function(e){let{width:t,height:r,currentTime:i,gridColor:n,pixelRatio:o,scrollable:s}=e;a.fillStyle=n;for(let e=0;e<l+10;e+=c){let t=s?u*e-(i-parseInt(i,10))*u*10:u*e;a.fillRect(t,0,o,r)}for(let e=0;e<r/u;e+=c)a.fillRect(0,u*e,t,o)}(r),r.ruler&&function(e){let{height:t,currentTime:r,rulerColor:i,pixelRatio:n,padding:o,rulerAtTop:s,scrollable:h}=e;a.font=`${11*n}px Arial`,a.fillStyle=i;let d=-1;for(let e=0;e<l+10;e+=1){let i=h?u*e-(r-parseInt(r,10))*u*10:u*e;if((e-o)%10==0){d+=1,a.fillRect(i,s?0:t-15*n,n,15*n);let e=Math.floor(f+d);e%c==0&&e>=0&&a.fillText(function(e){let t=Math.floor(e/3600),r=Math.floor((e-3600*t)/60);return[t,r,Math.floor(e-3600*t-60*r)].map(e=>e<10?`0${e}`:String(e)).join(":")}(e),i-11*n*2+n,s?30*n:t-30*n+11)}else(e-o)%5==0&&a.fillRect(i,s?0:t-7.5*n,n,7.5*n)}}(r),r.wave&&function(e){var t;let{width:r,height:i,currentTime:n,progress:o,waveColor:s,progressColor:l,duration:c,padding:p,waveScale:m,waveSize:g,scrollable:y,waveBorder:w,waveBorderWidth:b,waveBorderColor:v}=e,x=i/2,T=r-u*p*2,M=Math.floor(f*h),j=Math.floor(Math.max(Math.min((f+c)*h,Math.max(M,t=1/0)),Math.min(M,t))),C=Math.floor((j-M)/T),S=y?r/2:p*u+(n-f)*u*10,D=0,k=0,E=1,R=-1;for(let e=M;e<j;e+=g){D+=1;let t=d[e]||0;if(t<E?E=t:t>R&&(R=t),D>=C&&k<T){let e=u*p+k;w&&(a.strokeStyle=v,a.lineWidth=b,// Draw the border around the rectangle
a.strokeRect(e,(1+E*m)*x,g,Math.max(1,(R-E)*x*m))),// Fill the rectangle with the desired color
a.fillStyle=o&&S>=e?l:s,a.fillRect(e+(w?b/2:0),(1+E*m)*x+(w?b/2:0),g-(w?b:0),Math.max(1,(R-E)*x*m)-(w?b:0// Adjust the height for the border
)),k+=g,D=0,E=1,R=-1}}}(r),r.scrollbar&&function(e){let{width:t,height:r,currentTime:i,pixelRatio:n,rulerAtTop:o,totolDuration:s,scrollable:l,scrollbarColor:f}=e;if(!l||!s||s===1/0)return;let c=u/n*10*s,h=t/c*t,d=5*n,p=i/s*(t-h),m=o?r-d:0;a.fillStyle=f,a.fillRect(p,m,h,d)}(r),r.cursor&&function(e){let{height:t,width:r,currentTime:i,cursorColor:n,pixelRatio:o,padding:s,scrollable:l}=e;a.fillStyle=n;let c=l?r/2:s*u+(i-f)*u*10;a.fillRect(c,0,o,t)}(r);let i={gridNum:l,gridGap:u,beginTime:f,density:c,sampleRate:h,byteLength:t,...r};n?self.postMessage({type:"UPFATE",data:{config:i,imageBitmap:s.transferToImageBitmap()}}):o.emit("update",i)}};let m=e=>{self.onmessage({data:e})}},{"@parcel/transformer-js/src/esmodule-helpers.js":"47PTV"}],"2xfV6":[function(e,t,r){e("@parcel/transformer-js/src/esmodule-helpers.js").defineInteropFlag(r),r.default=class{constructor(e){this.wf=e,this.audioCtx=new(window.OfflineAudioContext||window.webkitOfflineAudioContext)(1,2,44100),this.audiobuffer=this.audioCtx.createBuffer(1,2,44100),this.channelData=new Float32Array}decodeAudioData(e){return new Promise((t,r)=>{this.wf.emit("decode:start",e),this.audioCtx.decodeAudioData(e.buffer,e=>{this.wf.emit("decode:success",e),this.decodeSuccess(e),t(e)},e=>{this.wf.emit("decode:error",e),r(e)})})}decodeSuccess(e){this.audiobuffer=e,this.channelData=e.getChannelData(this.wf.options.channel),this.wf.emit("decode",{channelData:this.channelData,sampleRate:this.audiobuffer.sampleRate,duration:this.audiobuffer.duration}),this.wf.update()}changeChannel(e){this.channelData=this.audiobuffer.getChannelData(e)||new Float32Array,this.wf.emit("decode",{channelData:this.channelData,sampleRate:this.audiobuffer.sampleRate,duration:this.audiobuffer.duration}),this.wf.update()}destroy(){this.audiobuffer=this.audioCtx.createBuffer(1,2,44100),this.channelData=new Float32Array,this.wf.emit("decode",{channelData:this.channelData,sampleRate:this.audiobuffer.sampleRate,duration:this.audiobuffer.duration}),this.wf.update()}}},{"@parcel/transformer-js/src/esmodule-helpers.js":"47PTV"}],kF7nB:[function(e,t,r){e("@parcel/transformer-js/src/esmodule-helpers.js").defineInteropFlag(r);var i=e("./utils");r.default=class{constructor(e){this.wf=e,this.fileSize=0,this.loadSize=0,this.data=new Uint8Array,this.reader=null}load(e){return this.destroy(),fetch(e).then(e=>e.body&&"function"==typeof e.body.getReader?(this.fileSize=Number(e.headers.get("content-length")),this.reader=e.body.getReader(),(function e(){return this.reader.read().then(({done:t,value:r})=>t?null:(this.loadSize+=r.byteLength,this.data=(0,i.mergeBuffer)(this.data,r),this.wf.decoder.decodeAudioData(this.data.slice()),this.wf.emit("load",{fileSize:this.fileSize,loadSize:this.loadSize,data:this.data}),e.call(this)))}).call(this)):e.arrayBuffer()).then(e=>(e&&e.byteLength&&(this.data=new Uint8Array(e),this.fileSize=this.data.byteLength,this.loadSize=this.data.byteLength,this.wf.decoder.decodeAudioData(this.data),this.wf.emit("load",{fileSize:this.fileSize,loadSize:this.loadSize,data:this.data})),e))}destroy(){this.fileSize=0,this.loadSize=0,this.data=new Uint8Array,this.reader&&(this.reader.cancel(),this.reader=null)}}},{"./utils":"50e2b","@parcel/transformer-js/src/esmodule-helpers.js":"47PTV"}],"3y0fD":[function(e,t,r){e("@parcel/transformer-js/src/esmodule-helpers.js").defineInteropFlag(r);var i=e("./utils");r.default=class{constructor(e){this.wf=e,this.playTimer=null,this.isInit=!1,this.init=()=>{this.isInit||(this.isInit=!0,this.clickInit(),this.resizeInit(),this.playInit(),this.scrollInit(),this.grabInit(),this.hoverInit())}}clickInit(){let{options:{container:e},events:{proxy:t}}=this.wf;t(e,["click","contextmenu"],e=>{if(this.wf.grabbing)return;let t=this.wf.getCurrentTimeFromEvent(e);this.wf.emit(e.type,t,e)})}resizeInit(){let{proxy:e}=this.wf.events,t=(0,i.throttle)(()=>{this.wf.update(),this.wf.emit("resize")},200,this);e(window,["resize","orientationchange"],()=>{t()})}playInit(){let{events:{proxy:e},options:{mediaElement:t}}=this.wf;t&&(e(t,["seeked","seeking","canplay"],()=>{this.wf.update()}),(function e(){this.playTimer=requestAnimationFrame(()=>{this.wf.playing&&this.wf.update(),this.wf.isDestroy||e.call(this)})}).call(this))}scrollInit(){let{events:{proxy:e},options:{container:t}}=this.wf;e(t,"wheel",e=>{this.wf.emit("scroll",Math.sign(e.deltaY),e)})}grabInit(){let{events:{proxy:e},options:{container:t}}=this.wf,r=!1,n=0,o=0;e(t,"mousedown",e=>{if(this.wf.emit("mousedown",e),0!==e.button)return;r=!0;let{scrollable:t}=this.wf.config;n=t?this.wf.currentTime:this.wf.getCurrentTimeFromEvent(e),o=e.pageX}),e(t,"mousemove",e=>{if(this.wf.emit("mousemove",e),!r)return;this.wf.grabbing=!0,(0,i.addClass)(t,"wf-grabbing");let{scrollable:s}=this.wf.config,a=e.pageX-o,l=this.wf.getDurationFromWidth(a),u=n+(s?-l:l);this.wf.emit("grabbing",u,e)}),e(document,"mouseup",e=>{this.wf.emit("mouseup",e),r&&(setTimeout(()=>this.wf.grabbing=!1),(0,i.removeClass)(t,"wf-grabbing"),r=!1,n=0,o=0)})}hoverInit(){let{events:{proxy:e},options:{container:t}}=this.wf,r=document.createElement("div");(0,i.addClass)(r,"wf-cursor"),t.appendChild(r),this.wf.template.cursor=r,this.wf.on("mousemove",e=>{r.style.left=e.pageX-t.getBoundingClientRect().left+"px"}),e(t,"mouseenter",e=>{this.wf.emit("mouseenter",e),r.style.display=null}),e(t,"mouseleave",e=>{this.wf.emit("mouseleave",e),r.style.display="none"})}destroy(){cancelAnimationFrame(this.playTimer)}}},{"./utils":"50e2b","@parcel/transformer-js/src/esmodule-helpers.js":"47PTV"}],"4okRS":[function(e,t,r){t.exports=".wf-player{position:relative;overflow:hidden}.wf-scrollable{cursor:grab}.wf-scrollable.wf-grabbing{cursor:grabbing}.wf-cursor{z-index:10;opacity:.25;-webkit-user-select:none;user-select:none;pointer-events:none;background-color:#fff;width:1px;height:100%;position:absolute;top:0;bottom:0;left:0}"},{}]},["bqk8e"],"bqk8e","parcelRequireb650");