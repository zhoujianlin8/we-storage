!function(t){function e(n){if(r[n])return r[n].exports;var module=r[n]={i:n,l:!1,exports:{}};return t[n].call(module.exports,module,module.exports,e),module.l=!0,module.exports}var r={};e.m=t,e.c=r,e.i=function(t){return t},e.d=function(exports,t,r){e.o(exports,t)||Object.defineProperty(exports,t,{configurable:!1,enumerable:!0,get:r})},e.n=function(module){var t=module&&module.__esModule?function(){return module.default}:function(){return module};return e.d(t,"a",t),t},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="/",e(e.s=1)}([function(module,exports,t){"use strict";(function(e){function r(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(exports,"__esModule",{value:!0}),exports.expireStoreage=exports.ExpireStoreage=exports.Storage=exports.wxStorage=exports.storage=exports.nodeStorage=exports.webStorage=exports.NodeStorage=exports.WxStorage=void 0;var n=t(5),o=r(n),i=t(3),u=r(i),f=t(4),a=r(f),s=t(2),h=r(s),c=new a.default,l=new u.default,p=new o.default,g=e&&e.isBuffer,y=!g&&wx&&wx.getStorageInfoSync,d=!g&&window&&window.localStorage,v=y?p:d?c:l,w=y?o.default:d?a.default:u.default,_=new h.default({storage:v});exports.default=v,exports.WxStorage=o.default,exports.NodeStorage=u.default,exports.webStorage=c,exports.nodeStorage=l,exports.storage=v,exports.wxStorage=p,exports.Storage=w,exports.ExpireStoreage=h.default,exports.expireStoreage=_}).call(exports,t(7).Buffer)},function(module,exports,t){"use strict";var e=t(0),r=e.expireStoreage;r.setItem("as",11,100),r.setItem("a23",21),console.log(r.getItem("as"),r.keys()),setTimeout(function(){console.log(r.getItem("as"),r.keys())},200)},function(module,exports,t){"use strict";function e(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function r(t,e){var r=new RegExp("^"+e+"([\\s\\S]*)__([0-9]+)$","g"),n=[];return t.replace(r,function(t,e,r){n=[e,r]}),n}function n(){for(var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],e=arguments[1],r=void 0,n=0,o=t.length;n<o;n++)if(0===t[n].indexOf(e)){r=t[n];break}return r}Object.defineProperty(exports,"__esModule",{value:!0});var o=function(){function t(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,r,n){return r&&t(e.prototype,r),n&&t(e,n),e}}(),i=function(){function t(r){e(this,t),"function"==typeof r&&(r={storage:r}),r&&r.storage&&(this._prefix=r.prefix||"__expire__",this._defaultExpire=r.defaultExpire||864e5,this._storage=r.storage)}return o(t,[{key:"getItem",value:function(t){if(t=n(this._storage.keys(),this._prefix+t)){r(t,this._prefix)[1]<(new Date).getTime()&&(this._storage.removeItem(t),t=null)}return t?this._storage.getItem(t):null}},{key:"setItem",value:function(t,e,n){var o=this,i=this._storage.keys(),u=(new Date).getTime();i.forEach(function(e){var n=r(e,o._prefix);n[0]&&(n[0]===t?o._storage.removeItem(o._prefix+n[0]+"__"+n[1]):n[1]<u&&o._storage.removeItem(o._prefix+n[0]+"__"+n[1]))});var f=this._prefix+t+"__"+(u+(n||this._defaultExpire));return this._storage.setItem(f,e),this}},{key:"removeItem",value:function(t){return t=n(this._storage.keys(),this._prefix+t),t&&localStorage.removeItem(t),this}},{key:"keys",value:function(){var t=this,e=this._storage.keys(),n=[];return e.forEach(function(e){if(e&&0===e.indexOf(t._prefix)){var o=r(e,t._prefix);o[0]&&n.push(o[0])}}),n}},{key:"clear",value:function(){return this._storage.clear(),this}}]),t}();exports.default=i},function(module,exports,t){"use strict";function e(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(exports,"__esModule",{value:!0});var r=function(){function t(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,r,n){return r&&t(e.prototype,r),n&&t(e,n),e}}(),n=function(){function t(){e(this,t),this.__data__={}}return r(t,[{key:"getItem",value:function(t){var e=this.__data__[t];return void 0===e?null:e}},{key:"setItem",value:function(t,e){return this.__data__[t]=e,this}},{key:"removeItem",value:function(t){return delete this.__data__[t],this}},{key:"keys",value:function(){return Object.keys(this.__data__)}},{key:"clear",value:function(){return this.__data__={},this}}]),t}();exports.default=n},function(module,exports,t){"use strict";function e(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};Object.defineProperty(exports,"__esModule",{value:!0});var n="function"==typeof Symbol&&"symbol"===r(Symbol.iterator)?function(t){return void 0===t?"undefined":r(t)}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":void 0===t?"undefined":r(t)},o=function(){function t(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,r,n){return r&&t(e.prototype,r),n&&t(e,n),e}}(),i=function(){function t(){e(this,t)}return o(t,[{key:"getItem",value:function(t){var e=localStorage.getItem(t);if(e)try{e=JSON.parse(e);var r=e.type,n=e.value;"undefined"===r?e=void 0:"boolean"===r?e="true"===n:"object"===r?e=n:"number"===r?e=Number(n):r&&(e=n)}catch(r){localStorage.removeItem(t),e=null}return e}},{key:"setItem",value:function(t,e){return localStorage.setItem(t,JSON.stringify({type:void 0===e?"undefined":n(e),value:e})),this}},{key:"removeItem",value:function(t){return localStorage.removeItem(t),this}},{key:"keys",value:function(){return Object.keys(localStorage)}},{key:"clear",value:function(){return localStorage.clear(),this}}]),t}();exports.default=i},function(module,exports,t){"use strict";function e(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(exports,"__esModule",{value:!0});var r=function(){function t(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,r,n){return r&&t(e.prototype,r),n&&t(e,n),e}}(),n=function(){function t(){e(this,t)}return r(t,[{key:"getItem",value:function(t){return wx.getStorageSync(t)}},{key:"setItem",value:function(t,e){return wx.setStorageSync(t,e),this}},{key:"removeItem",value:function(t){return wx.removeStorageSync(t),this}},{key:"keys",value:function(){var t={};try{t=wx.getStorageInfoSync()}catch(t){}return t.keys||[]}},{key:"clear",value:function(){return wx.clearStorageSync(),this}}]),t}();exports.default=n},function(module,exports,t){"use strict";function e(t){var e=t.length;if(e%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var r=t.indexOf("=");return-1===r&&(r=e),[r,r===e?0:4-r%4]}function r(t){var r=e(t),n=r[0],o=r[1];return 3*(n+o)/4-o}function n(t,e,r){return 3*(e+r)/4-r}function o(t){for(var r,o=e(t),i=o[0],u=o[1],f=new h(n(t,i,u)),a=0,c=u>0?i-4:i,l=0;l<c;l+=4)r=s[t.charCodeAt(l)]<<18|s[t.charCodeAt(l+1)]<<12|s[t.charCodeAt(l+2)]<<6|s[t.charCodeAt(l+3)],f[a++]=r>>16&255,f[a++]=r>>8&255,f[a++]=255&r;return 2===u&&(r=s[t.charCodeAt(l)]<<2|s[t.charCodeAt(l+1)]>>4,f[a++]=255&r),1===u&&(r=s[t.charCodeAt(l)]<<10|s[t.charCodeAt(l+1)]<<4|s[t.charCodeAt(l+2)]>>2,f[a++]=r>>8&255,f[a++]=255&r),f}function i(t){return a[t>>18&63]+a[t>>12&63]+a[t>>6&63]+a[63&t]}function u(t,e,r){for(var n,o=[],u=e;u<r;u+=3)n=(t[u]<<16&16711680)+(t[u+1]<<8&65280)+(255&t[u+2]),o.push(i(n));return o.join("")}function f(t){for(var e,r=t.length,n=r%3,o=[],i=0,f=r-n;i<f;i+=16383)o.push(u(t,i,i+16383>f?f:i+16383));return 1===n?(e=t[r-1],o.push(a[e>>2]+a[e<<4&63]+"==")):2===n&&(e=(t[r-2]<<8)+t[r-1],o.push(a[e>>10]+a[e>>4&63]+a[e<<2&63]+"=")),o.join("")}exports.byteLength=r,exports.toByteArray=o,exports.fromByteArray=f;for(var a=[],s=[],h="undefined"!=typeof Uint8Array?Uint8Array:Array,c="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",l=0,p=c.length;l<p;++l)a[l]=c[l],s[c.charCodeAt(l)]=l;s["-".charCodeAt(0)]=62,s["_".charCodeAt(0)]=63},function(module,exports,t){"use strict";(function(e){function r(){return o.TYPED_ARRAY_SUPPORT?2147483647:1073741823}function n(t,e){if(r()<e)throw new RangeError("Invalid typed array length");return o.TYPED_ARRAY_SUPPORT?(t=new Uint8Array(e),t.__proto__=o.prototype):(null===t&&(t=new o(e)),t.length=e),t}function o(t,e,r){if(!(o.TYPED_ARRAY_SUPPORT||this instanceof o))return new o(t,e,r);if("number"==typeof t){if("string"==typeof e)throw new Error("If encoding is specified then the first argument must be a string");return a(this,t)}return i(this,t,e,r)}function i(t,e,r,n){if("number"==typeof e)throw new TypeError('"value" argument must not be a number');return"undefined"!=typeof ArrayBuffer&&e instanceof ArrayBuffer?c(t,e,r,n):"string"==typeof e?s(t,e,r):l(t,e)}function u(t){if("number"!=typeof t)throw new TypeError('"size" argument must be a number');if(t<0)throw new RangeError('"size" argument must not be negative')}function f(t,e,r,o){return u(e),e<=0?n(t,e):void 0!==r?"string"==typeof o?n(t,e).fill(r,o):n(t,e).fill(r):n(t,e)}function a(t,e){if(u(e),t=n(t,e<0?0:0|p(e)),!o.TYPED_ARRAY_SUPPORT)for(var r=0;r<e;++r)t[r]=0;return t}function s(t,e,r){if("string"==typeof r&&""!==r||(r="utf8"),!o.isEncoding(r))throw new TypeError('"encoding" must be a valid string encoding');var i=0|y(e,r);t=n(t,i);var u=t.write(e,r);return u!==i&&(t=t.slice(0,u)),t}function h(t,e){var r=e.length<0?0:0|p(e.length);t=n(t,r);for(var o=0;o<r;o+=1)t[o]=255&e[o];return t}function c(t,e,r,n){if(e.byteLength,r<0||e.byteLength<r)throw new RangeError("'offset' is out of bounds");if(e.byteLength<r+(n||0))throw new RangeError("'length' is out of bounds");return e=void 0===r&&void 0===n?new Uint8Array(e):void 0===n?new Uint8Array(e,r):new Uint8Array(e,r,n),o.TYPED_ARRAY_SUPPORT?(t=e,t.__proto__=o.prototype):t=h(t,e),t}function l(t,e){if(o.isBuffer(e)){var r=0|p(e.length);return t=n(t,r),0===t.length?t:(e.copy(t,0,0,r),t)}if(e){if("undefined"!=typeof ArrayBuffer&&e.buffer instanceof ArrayBuffer||"length"in e)return"number"!=typeof e.length||Z(e.length)?n(t,0):h(t,e);if("Buffer"===e.type&&K(e.data))return h(t,e.data)}throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.")}function p(t){if(t>=r())throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+r().toString(16)+" bytes");return 0|t}function g(t){return+t!=t&&(t=0),o.alloc(+t)}function y(t,e){if(o.isBuffer(t))return t.length;if("undefined"!=typeof ArrayBuffer&&"function"==typeof ArrayBuffer.isView&&(ArrayBuffer.isView(t)||t instanceof ArrayBuffer))return t.byteLength;"string"!=typeof t&&(t=""+t);var r=t.length;if(0===r)return 0;for(var n=!1;;)switch(e){case"ascii":case"latin1":case"binary":return r;case"utf8":case"utf-8":case void 0:return J(t).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return 2*r;case"hex":return r>>>1;case"base64":return X(t).length;default:if(n)return J(t).length;e=(""+e).toLowerCase(),n=!0}}function d(t,e,r){var n=!1;if((void 0===e||e<0)&&(e=0),e>this.length)return"";if((void 0===r||r>this.length)&&(r=this.length),r<=0)return"";if(r>>>=0,e>>>=0,r<=e)return"";for(t||(t="utf8");;)switch(t){case"hex":return U(this,e,r);case"utf8":case"utf-8":return T(this,e,r);case"ascii":return B(this,e,r);case"latin1":case"binary":return x(this,e,r);case"base64":return P(this,e,r);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return k(this,e,r);default:if(n)throw new TypeError("Unknown encoding: "+t);t=(t+"").toLowerCase(),n=!0}}function v(t,e,r){var n=t[e];t[e]=t[r],t[r]=n}function w(t,e,r,n,i){if(0===t.length)return-1;if("string"==typeof r?(n=r,r=0):r>2147483647?r=2147483647:r<-2147483648&&(r=-2147483648),r=+r,isNaN(r)&&(r=i?0:t.length-1),r<0&&(r=t.length+r),r>=t.length){if(i)return-1;r=t.length-1}else if(r<0){if(!i)return-1;r=0}if("string"==typeof e&&(e=o.from(e,n)),o.isBuffer(e))return 0===e.length?-1:_(t,e,r,n,i);if("number"==typeof e)return e&=255,o.TYPED_ARRAY_SUPPORT&&"function"==typeof Uint8Array.prototype.indexOf?i?Uint8Array.prototype.indexOf.call(t,e,r):Uint8Array.prototype.lastIndexOf.call(t,e,r):_(t,[e],r,n,i);throw new TypeError("val must be string, number or Buffer")}function _(t,e,r,n,o){function i(t,e){return 1===u?t[e]:t.readUInt16BE(e*u)}var u=1,f=t.length,a=e.length;if(void 0!==n&&("ucs2"===(n=String(n).toLowerCase())||"ucs-2"===n||"utf16le"===n||"utf-16le"===n)){if(t.length<2||e.length<2)return-1;u=2,f/=2,a/=2,r/=2}var s;if(o){var h=-1;for(s=r;s<f;s++)if(i(t,s)===i(e,-1===h?0:s-h)){if(-1===h&&(h=s),s-h+1===a)return h*u}else-1!==h&&(s-=s-h),h=-1}else for(r+a>f&&(r=f-a),s=r;s>=0;s--){for(var c=!0,l=0;l<a;l++)if(i(t,s+l)!==i(e,l)){c=!1;break}if(c)return s}return-1}function m(t,e,r,n){r=Number(r)||0;var o=t.length-r;n?(n=Number(n))>o&&(n=o):n=o;var i=e.length;if(i%2!=0)throw new TypeError("Invalid hex string");n>i/2&&(n=i/2);for(var u=0;u<n;++u){var f=parseInt(e.substr(2*u,2),16);if(isNaN(f))return u;t[r+u]=f}return u}function b(t,e,r,n){return q(J(e,t.length-r),t,r,n)}function E(t,e,r,n){return q(V(e),t,r,n)}function A(t,e,r,n){return E(t,e,r,n)}function S(t,e,r,n){return q(X(e),t,r,n)}function R(t,e,r,n){return q(W(e,t.length-r),t,r,n)}function P(t,e,r){return 0===e&&r===t.length?G.fromByteArray(t):G.fromByteArray(t.slice(e,r))}function T(t,e,r){r=Math.min(t.length,r);for(var n=[],o=e;o<r;){var i=t[o],u=null,f=i>239?4:i>223?3:i>191?2:1;if(o+f<=r){var a,s,h,c;switch(f){case 1:i<128&&(u=i);break;case 2:a=t[o+1],128==(192&a)&&(c=(31&i)<<6|63&a)>127&&(u=c);break;case 3:a=t[o+1],s=t[o+2],128==(192&a)&&128==(192&s)&&(c=(15&i)<<12|(63&a)<<6|63&s)>2047&&(c<55296||c>57343)&&(u=c);break;case 4:a=t[o+1],s=t[o+2],h=t[o+3],128==(192&a)&&128==(192&s)&&128==(192&h)&&(c=(15&i)<<18|(63&a)<<12|(63&s)<<6|63&h)>65535&&c<1114112&&(u=c)}}null===u?(u=65533,f=1):u>65535&&(u-=65536,n.push(u>>>10&1023|55296),u=56320|1023&u),n.push(u),o+=f}return I(n)}function I(t){var e=t.length;if(e<=Q)return String.fromCharCode.apply(String,t);for(var r="",n=0;n<e;)r+=String.fromCharCode.apply(String,t.slice(n,n+=Q));return r}function B(t,e,r){var n="";r=Math.min(t.length,r);for(var o=e;o<r;++o)n+=String.fromCharCode(127&t[o]);return n}function x(t,e,r){var n="";r=Math.min(t.length,r);for(var o=e;o<r;++o)n+=String.fromCharCode(t[o]);return n}function U(t,e,r){var n=t.length;(!e||e<0)&&(e=0),(!r||r<0||r>n)&&(r=n);for(var o="",i=e;i<r;++i)o+=F(t[i]);return o}function k(t,e,r){for(var n=t.slice(e,r),o="",i=0;i<n.length;i+=2)o+=String.fromCharCode(n[i]+256*n[i+1]);return o}function O(t,e,r){if(t%1!=0||t<0)throw new RangeError("offset is not uint");if(t+e>r)throw new RangeError("Trying to access beyond buffer length")}function Y(t,e,r,n,i,u){if(!o.isBuffer(t))throw new TypeError('"buffer" argument must be a Buffer instance');if(e>i||e<u)throw new RangeError('"value" argument is out of bounds');if(r+n>t.length)throw new RangeError("Index out of range")}function M(t,e,r,n){e<0&&(e=65535+e+1);for(var o=0,i=Math.min(t.length-r,2);o<i;++o)t[r+o]=(e&255<<8*(n?o:1-o))>>>8*(n?o:1-o)}function C(t,e,r,n){e<0&&(e=4294967295+e+1);for(var o=0,i=Math.min(t.length-r,4);o<i;++o)t[r+o]=e>>>8*(n?o:3-o)&255}function L(t,e,r,n,o,i){if(r+n>t.length)throw new RangeError("Index out of range");if(r<0)throw new RangeError("Index out of range")}function D(t,e,r,n,o){return o||L(t,e,r,4,3.4028234663852886e38,-3.4028234663852886e38),H.write(t,e,r,n,23,4),r+4}function j(t,e,r,n,o){return o||L(t,e,r,8,1.7976931348623157e308,-1.7976931348623157e308),H.write(t,e,r,n,52,8),r+8}function N(t){if(t=z(t).replace(tt,""),t.length<2)return"";for(;t.length%4!=0;)t+="=";return t}function z(t){return t.trim?t.trim():t.replace(/^\s+|\s+$/g,"")}function F(t){return t<16?"0"+t.toString(16):t.toString(16)}function J(t,e){e=e||1/0;for(var r,n=t.length,o=null,i=[],u=0;u<n;++u){if((r=t.charCodeAt(u))>55295&&r<57344){if(!o){if(r>56319){(e-=3)>-1&&i.push(239,191,189);continue}if(u+1===n){(e-=3)>-1&&i.push(239,191,189);continue}o=r;continue}if(r<56320){(e-=3)>-1&&i.push(239,191,189),o=r;continue}r=65536+(o-55296<<10|r-56320)}else o&&(e-=3)>-1&&i.push(239,191,189);if(o=null,r<128){if((e-=1)<0)break;i.push(r)}else if(r<2048){if((e-=2)<0)break;i.push(r>>6|192,63&r|128)}else if(r<65536){if((e-=3)<0)break;i.push(r>>12|224,r>>6&63|128,63&r|128)}else{if(!(r<1114112))throw new Error("Invalid code point");if((e-=4)<0)break;i.push(r>>18|240,r>>12&63|128,r>>6&63|128,63&r|128)}}return i}function V(t){for(var e=[],r=0;r<t.length;++r)e.push(255&t.charCodeAt(r));return e}function W(t,e){for(var r,n,o,i=[],u=0;u<t.length&&!((e-=2)<0);++u)r=t.charCodeAt(u),n=r>>8,o=r%256,i.push(o),i.push(n);return i}function X(t){return G.toByteArray(N(t))}function q(t,e,r,n){for(var o=0;o<n&&!(o+r>=e.length||o>=t.length);++o)e[o+r]=t[o];return o}function Z(t){return t!==t}/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
 * @license  MIT
 */
var G=t(6),H=t(8),K=t(9);exports.Buffer=o,exports.SlowBuffer=g,exports.INSPECT_MAX_BYTES=50,o.TYPED_ARRAY_SUPPORT=void 0!==e.TYPED_ARRAY_SUPPORT?e.TYPED_ARRAY_SUPPORT:function(){try{var t=new Uint8Array(1);return t.__proto__={__proto__:Uint8Array.prototype,foo:function(){return 42}},42===t.foo()&&"function"==typeof t.subarray&&0===t.subarray(1,1).byteLength}catch(t){return!1}}(),exports.kMaxLength=r(),o.poolSize=8192,o._augment=function(t){return t.__proto__=o.prototype,t},o.from=function(t,e,r){return i(null,t,e,r)},o.TYPED_ARRAY_SUPPORT&&(o.prototype.__proto__=Uint8Array.prototype,o.__proto__=Uint8Array,"undefined"!=typeof Symbol&&Symbol.species&&o[Symbol.species]===o&&Object.defineProperty(o,Symbol.species,{value:null,configurable:!0})),o.alloc=function(t,e,r){return f(null,t,e,r)},o.allocUnsafe=function(t){return a(null,t)},o.allocUnsafeSlow=function(t){return a(null,t)},o.isBuffer=function(t){return!(null==t||!t._isBuffer)},o.compare=function(t,e){if(!o.isBuffer(t)||!o.isBuffer(e))throw new TypeError("Arguments must be Buffers");if(t===e)return 0;for(var r=t.length,n=e.length,i=0,u=Math.min(r,n);i<u;++i)if(t[i]!==e[i]){r=t[i],n=e[i];break}return r<n?-1:n<r?1:0},o.isEncoding=function(t){switch(String(t).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},o.concat=function(t,e){if(!K(t))throw new TypeError('"list" argument must be an Array of Buffers');if(0===t.length)return o.alloc(0);var r;if(void 0===e)for(e=0,r=0;r<t.length;++r)e+=t[r].length;var n=o.allocUnsafe(e),i=0;for(r=0;r<t.length;++r){var u=t[r];if(!o.isBuffer(u))throw new TypeError('"list" argument must be an Array of Buffers');u.copy(n,i),i+=u.length}return n},o.byteLength=y,o.prototype._isBuffer=!0,o.prototype.swap16=function(){var t=this.length;if(t%2!=0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(var e=0;e<t;e+=2)v(this,e,e+1);return this},o.prototype.swap32=function(){var t=this.length;if(t%4!=0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(var e=0;e<t;e+=4)v(this,e,e+3),v(this,e+1,e+2);return this},o.prototype.swap64=function(){var t=this.length;if(t%8!=0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(var e=0;e<t;e+=8)v(this,e,e+7),v(this,e+1,e+6),v(this,e+2,e+5),v(this,e+3,e+4);return this},o.prototype.toString=function(){var t=0|this.length;return 0===t?"":0===arguments.length?T(this,0,t):d.apply(this,arguments)},o.prototype.equals=function(t){if(!o.isBuffer(t))throw new TypeError("Argument must be a Buffer");return this===t||0===o.compare(this,t)},o.prototype.inspect=function(){var t="",e=exports.INSPECT_MAX_BYTES;return this.length>0&&(t=this.toString("hex",0,e).match(/.{2}/g).join(" "),this.length>e&&(t+=" ... ")),"<Buffer "+t+">"},o.prototype.compare=function(t,e,r,n,i){if(!o.isBuffer(t))throw new TypeError("Argument must be a Buffer");if(void 0===e&&(e=0),void 0===r&&(r=t?t.length:0),void 0===n&&(n=0),void 0===i&&(i=this.length),e<0||r>t.length||n<0||i>this.length)throw new RangeError("out of range index");if(n>=i&&e>=r)return 0;if(n>=i)return-1;if(e>=r)return 1;if(e>>>=0,r>>>=0,n>>>=0,i>>>=0,this===t)return 0;for(var u=i-n,f=r-e,a=Math.min(u,f),s=this.slice(n,i),h=t.slice(e,r),c=0;c<a;++c)if(s[c]!==h[c]){u=s[c],f=h[c];break}return u<f?-1:f<u?1:0},o.prototype.includes=function(t,e,r){return-1!==this.indexOf(t,e,r)},o.prototype.indexOf=function(t,e,r){return w(this,t,e,r,!0)},o.prototype.lastIndexOf=function(t,e,r){return w(this,t,e,r,!1)},o.prototype.write=function(t,e,r,n){if(void 0===e)n="utf8",r=this.length,e=0;else if(void 0===r&&"string"==typeof e)n=e,r=this.length,e=0;else{if(!isFinite(e))throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");e|=0,isFinite(r)?(r|=0,void 0===n&&(n="utf8")):(n=r,r=void 0)}var o=this.length-e;if((void 0===r||r>o)&&(r=o),t.length>0&&(r<0||e<0)||e>this.length)throw new RangeError("Attempt to write outside buffer bounds");n||(n="utf8");for(var i=!1;;)switch(n){case"hex":return m(this,t,e,r);case"utf8":case"utf-8":return b(this,t,e,r);case"ascii":return E(this,t,e,r);case"latin1":case"binary":return A(this,t,e,r);case"base64":return S(this,t,e,r);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return R(this,t,e,r);default:if(i)throw new TypeError("Unknown encoding: "+n);n=(""+n).toLowerCase(),i=!0}},o.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};var Q=4096;o.prototype.slice=function(t,e){var r=this.length;t=~~t,e=void 0===e?r:~~e,t<0?(t+=r)<0&&(t=0):t>r&&(t=r),e<0?(e+=r)<0&&(e=0):e>r&&(e=r),e<t&&(e=t);var n;if(o.TYPED_ARRAY_SUPPORT)n=this.subarray(t,e),n.__proto__=o.prototype;else{var i=e-t;n=new o(i,void 0);for(var u=0;u<i;++u)n[u]=this[u+t]}return n},o.prototype.readUIntLE=function(t,e,r){t|=0,e|=0,r||O(t,e,this.length);for(var n=this[t],o=1,i=0;++i<e&&(o*=256);)n+=this[t+i]*o;return n},o.prototype.readUIntBE=function(t,e,r){t|=0,e|=0,r||O(t,e,this.length);for(var n=this[t+--e],o=1;e>0&&(o*=256);)n+=this[t+--e]*o;return n},o.prototype.readUInt8=function(t,e){return e||O(t,1,this.length),this[t]},o.prototype.readUInt16LE=function(t,e){return e||O(t,2,this.length),this[t]|this[t+1]<<8},o.prototype.readUInt16BE=function(t,e){return e||O(t,2,this.length),this[t]<<8|this[t+1]},o.prototype.readUInt32LE=function(t,e){return e||O(t,4,this.length),(this[t]|this[t+1]<<8|this[t+2]<<16)+16777216*this[t+3]},o.prototype.readUInt32BE=function(t,e){return e||O(t,4,this.length),16777216*this[t]+(this[t+1]<<16|this[t+2]<<8|this[t+3])},o.prototype.readIntLE=function(t,e,r){t|=0,e|=0,r||O(t,e,this.length);for(var n=this[t],o=1,i=0;++i<e&&(o*=256);)n+=this[t+i]*o;return o*=128,n>=o&&(n-=Math.pow(2,8*e)),n},o.prototype.readIntBE=function(t,e,r){t|=0,e|=0,r||O(t,e,this.length);for(var n=e,o=1,i=this[t+--n];n>0&&(o*=256);)i+=this[t+--n]*o;return o*=128,i>=o&&(i-=Math.pow(2,8*e)),i},o.prototype.readInt8=function(t,e){return e||O(t,1,this.length),128&this[t]?-1*(255-this[t]+1):this[t]},o.prototype.readInt16LE=function(t,e){e||O(t,2,this.length);var r=this[t]|this[t+1]<<8;return 32768&r?4294901760|r:r},o.prototype.readInt16BE=function(t,e){e||O(t,2,this.length);var r=this[t+1]|this[t]<<8;return 32768&r?4294901760|r:r},o.prototype.readInt32LE=function(t,e){return e||O(t,4,this.length),this[t]|this[t+1]<<8|this[t+2]<<16|this[t+3]<<24},o.prototype.readInt32BE=function(t,e){return e||O(t,4,this.length),this[t]<<24|this[t+1]<<16|this[t+2]<<8|this[t+3]},o.prototype.readFloatLE=function(t,e){return e||O(t,4,this.length),H.read(this,t,!0,23,4)},o.prototype.readFloatBE=function(t,e){return e||O(t,4,this.length),H.read(this,t,!1,23,4)},o.prototype.readDoubleLE=function(t,e){return e||O(t,8,this.length),H.read(this,t,!0,52,8)},o.prototype.readDoubleBE=function(t,e){return e||O(t,8,this.length),H.read(this,t,!1,52,8)},o.prototype.writeUIntLE=function(t,e,r,n){if(t=+t,e|=0,r|=0,!n){Y(this,t,e,r,Math.pow(2,8*r)-1,0)}var o=1,i=0;for(this[e]=255&t;++i<r&&(o*=256);)this[e+i]=t/o&255;return e+r},o.prototype.writeUIntBE=function(t,e,r,n){if(t=+t,e|=0,r|=0,!n){Y(this,t,e,r,Math.pow(2,8*r)-1,0)}var o=r-1,i=1;for(this[e+o]=255&t;--o>=0&&(i*=256);)this[e+o]=t/i&255;return e+r},o.prototype.writeUInt8=function(t,e,r){return t=+t,e|=0,r||Y(this,t,e,1,255,0),o.TYPED_ARRAY_SUPPORT||(t=Math.floor(t)),this[e]=255&t,e+1},o.prototype.writeUInt16LE=function(t,e,r){return t=+t,e|=0,r||Y(this,t,e,2,65535,0),o.TYPED_ARRAY_SUPPORT?(this[e]=255&t,this[e+1]=t>>>8):M(this,t,e,!0),e+2},o.prototype.writeUInt16BE=function(t,e,r){return t=+t,e|=0,r||Y(this,t,e,2,65535,0),o.TYPED_ARRAY_SUPPORT?(this[e]=t>>>8,this[e+1]=255&t):M(this,t,e,!1),e+2},o.prototype.writeUInt32LE=function(t,e,r){return t=+t,e|=0,r||Y(this,t,e,4,4294967295,0),o.TYPED_ARRAY_SUPPORT?(this[e+3]=t>>>24,this[e+2]=t>>>16,this[e+1]=t>>>8,this[e]=255&t):C(this,t,e,!0),e+4},o.prototype.writeUInt32BE=function(t,e,r){return t=+t,e|=0,r||Y(this,t,e,4,4294967295,0),o.TYPED_ARRAY_SUPPORT?(this[e]=t>>>24,this[e+1]=t>>>16,this[e+2]=t>>>8,this[e+3]=255&t):C(this,t,e,!1),e+4},o.prototype.writeIntLE=function(t,e,r,n){if(t=+t,e|=0,!n){var o=Math.pow(2,8*r-1);Y(this,t,e,r,o-1,-o)}var i=0,u=1,f=0;for(this[e]=255&t;++i<r&&(u*=256);)t<0&&0===f&&0!==this[e+i-1]&&(f=1),this[e+i]=(t/u>>0)-f&255;return e+r},o.prototype.writeIntBE=function(t,e,r,n){if(t=+t,e|=0,!n){var o=Math.pow(2,8*r-1);Y(this,t,e,r,o-1,-o)}var i=r-1,u=1,f=0;for(this[e+i]=255&t;--i>=0&&(u*=256);)t<0&&0===f&&0!==this[e+i+1]&&(f=1),this[e+i]=(t/u>>0)-f&255;return e+r},o.prototype.writeInt8=function(t,e,r){return t=+t,e|=0,r||Y(this,t,e,1,127,-128),o.TYPED_ARRAY_SUPPORT||(t=Math.floor(t)),t<0&&(t=255+t+1),this[e]=255&t,e+1},o.prototype.writeInt16LE=function(t,e,r){return t=+t,e|=0,r||Y(this,t,e,2,32767,-32768),o.TYPED_ARRAY_SUPPORT?(this[e]=255&t,this[e+1]=t>>>8):M(this,t,e,!0),e+2},o.prototype.writeInt16BE=function(t,e,r){return t=+t,e|=0,r||Y(this,t,e,2,32767,-32768),o.TYPED_ARRAY_SUPPORT?(this[e]=t>>>8,this[e+1]=255&t):M(this,t,e,!1),e+2},o.prototype.writeInt32LE=function(t,e,r){return t=+t,e|=0,r||Y(this,t,e,4,2147483647,-2147483648),o.TYPED_ARRAY_SUPPORT?(this[e]=255&t,this[e+1]=t>>>8,this[e+2]=t>>>16,this[e+3]=t>>>24):C(this,t,e,!0),e+4},o.prototype.writeInt32BE=function(t,e,r){return t=+t,e|=0,r||Y(this,t,e,4,2147483647,-2147483648),t<0&&(t=4294967295+t+1),o.TYPED_ARRAY_SUPPORT?(this[e]=t>>>24,this[e+1]=t>>>16,this[e+2]=t>>>8,this[e+3]=255&t):C(this,t,e,!1),e+4},o.prototype.writeFloatLE=function(t,e,r){return D(this,t,e,!0,r)},o.prototype.writeFloatBE=function(t,e,r){return D(this,t,e,!1,r)},o.prototype.writeDoubleLE=function(t,e,r){return j(this,t,e,!0,r)},o.prototype.writeDoubleBE=function(t,e,r){return j(this,t,e,!1,r)},o.prototype.copy=function(t,e,r,n){if(r||(r=0),n||0===n||(n=this.length),e>=t.length&&(e=t.length),e||(e=0),n>0&&n<r&&(n=r),n===r)return 0;if(0===t.length||0===this.length)return 0;if(e<0)throw new RangeError("targetStart out of bounds");if(r<0||r>=this.length)throw new RangeError("sourceStart out of bounds");if(n<0)throw new RangeError("sourceEnd out of bounds");n>this.length&&(n=this.length),t.length-e<n-r&&(n=t.length-e+r);var i,u=n-r;if(this===t&&r<e&&e<n)for(i=u-1;i>=0;--i)t[i+e]=this[i+r];else if(u<1e3||!o.TYPED_ARRAY_SUPPORT)for(i=0;i<u;++i)t[i+e]=this[i+r];else Uint8Array.prototype.set.call(t,this.subarray(r,r+u),e);return u},o.prototype.fill=function(t,e,r,n){if("string"==typeof t){if("string"==typeof e?(n=e,e=0,r=this.length):"string"==typeof r&&(n=r,r=this.length),1===t.length){var i=t.charCodeAt(0);i<256&&(t=i)}if(void 0!==n&&"string"!=typeof n)throw new TypeError("encoding must be a string");if("string"==typeof n&&!o.isEncoding(n))throw new TypeError("Unknown encoding: "+n)}else"number"==typeof t&&(t&=255);if(e<0||this.length<e||this.length<r)throw new RangeError("Out of range index");if(r<=e)return this;e>>>=0,r=void 0===r?this.length:r>>>0,t||(t=0);var u;if("number"==typeof t)for(u=e;u<r;++u)this[u]=t;else{var f=o.isBuffer(t)?t:J(new o(t,n).toString()),a=f.length;for(u=0;u<r-e;++u)this[u+e]=f[u%a]}return this};var tt=/[^+\/0-9A-Za-z-_]/g}).call(exports,t(10))},function(module,exports){exports.read=function(t,e,r,n,o){var i,u,f=8*o-n-1,a=(1<<f)-1,s=a>>1,h=-7,c=r?o-1:0,l=r?-1:1,p=t[e+c];for(c+=l,i=p&(1<<-h)-1,p>>=-h,h+=f;h>0;i=256*i+t[e+c],c+=l,h-=8);for(u=i&(1<<-h)-1,i>>=-h,h+=n;h>0;u=256*u+t[e+c],c+=l,h-=8);if(0===i)i=1-s;else{if(i===a)return u?NaN:1/0*(p?-1:1);u+=Math.pow(2,n),i-=s}return(p?-1:1)*u*Math.pow(2,i-n)},exports.write=function(t,e,r,n,o,i){var u,f,a,s=8*i-o-1,h=(1<<s)-1,c=h>>1,l=23===o?Math.pow(2,-24)-Math.pow(2,-77):0,p=n?0:i-1,g=n?1:-1,y=e<0||0===e&&1/e<0?1:0;for(e=Math.abs(e),isNaN(e)||e===1/0?(f=isNaN(e)?1:0,u=h):(u=Math.floor(Math.log(e)/Math.LN2),e*(a=Math.pow(2,-u))<1&&(u--,a*=2),e+=u+c>=1?l/a:l*Math.pow(2,1-c),e*a>=2&&(u++,a/=2),u+c>=h?(f=0,u=h):u+c>=1?(f=(e*a-1)*Math.pow(2,o),u+=c):(f=e*Math.pow(2,c-1)*Math.pow(2,o),u=0));o>=8;t[r+p]=255&f,p+=g,f/=256,o-=8);for(u=u<<o|f,s+=o;s>0;t[r+p]=255&u,p+=g,u/=256,s-=8);t[r+p-g]|=128*y}},function(module,exports){var t={}.toString;module.exports=Array.isArray||function(e){return"[object Array]"==t.call(e)}},function(module,exports){var t;t=function(){return this}();try{t=t||Function("return this")()||(0,eval)("this")}catch(e){"object"==typeof window&&(t=window)}module.exports=t}]);