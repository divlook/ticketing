!function(e){var t={};function n(r){if(t[r])return t[r].exports;var i=t[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(r,i,function(t){return e[t]}.bind(null,i));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";function r(e){return String(null!=e?e:"")}function i(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:" ";return r(e).padStart(t,r(n))}function o(){var e=function(e,t){t||(t=e.slice(0));return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}(["",":",":",""]);return o=function(){return e},e}function a(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function u(e,t){var n=t.get(e);if(!n)throw new TypeError("attempted to get private field on non-instance");return n.get?n.get.call(e):n.value}function l(e,t,n){var r=t.get(e);if(!r)throw new TypeError("attempted to set private field on non-instance");if(r.set)r.set.call(e,n);else{if(!r.writable)throw new TypeError("attempted to set read only private field");r.value=n}return n}n.r(t);var c=function(){var e="",t=!1;function n(){var n;t&&console.clear(),e&&console.log(e),(n=console).log.apply(n,arguments)}return Object.defineProperty(n,"notice",{set:function(t){t&&(e=t)}}),n.notice="",Object.defineProperty(n,"clear",{get:function(){return t},set:function(e){t=!!e}}),n.clear=!1,n}();c.clear=!0;var f=new WeakMap,s=new WeakMap,v=new WeakMap,p=new WeakMap,d=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),f.set(this,{writable:!0,value:0}),s.set(this,{writable:!0,value:void 0}),v.set(this,{writable:!0,value:void 0}),p.set(this,{writable:!0,value:new Map}),this.init(),"function"!=typeof t?u(this,p).has(t)?l(this,v,u(this,p).get(t)):c.notice="callback이 없습니다.":l(this,v,t)}var t,n,r;return t=e,(n=[{key:"start",value:function(e){var t=this;this.stop(),e?(l(this,f,new Date(e).getTime()),l(this,s,setInterval((function(){t.timeupdate()}),100))):c("날짜 및 시간을 입력해주세요.")}},{key:"stop",value:function(){clearInterval(u(this,s))}},{key:"init",value:function(){var e=this;Object.keys(this).forEach((function(t){"function"==typeof e[t]&&(e[t]=e[t].bind(e))})),u(this,p).set("ktx",(function(){var e,t;"function"==typeof(null===(e=window)||void 0===e||null===(t=e.NetFunnel)||void 0===t?void 0:t.NetFunnel_goAliveNotice)?window.NetFunnel.NetFunnel_goAliveNotice(1):c("NetFunnel.NetFunnel_goAliveNotice 메서드가 존재하지 않습니다.")})),u(this,p).set("srt",(function(){var e;"function"==typeof(null===(e=window)||void 0===e?void 0:e.goPage)?window.goPage(1):c("goPage 메서드가 존재하지 않습니다.")}))}},{key:"timeupdate",value:function(){var e=Date.now(),t=u(this,f)-e;if(t<=0)this.complete();else{var n=t%1e3,r=Math.floor(t/1e3),a=0;r>60&&(a=Math.floor(r/60),r%=60),c(function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return e.map((function(e,t){return e+i(n[t],2,"0")})).join("")}(o(),a,r,n))}}},{key:"complete",value:function(){clearInterval(u(this,s)),u(this,v)?u(this,v).call(this):c("종료되었습니다.")}}])&&a(t.prototype,n),r&&a(t,r),e}();window&&(window.Ticketing=d);t.default=d}]);