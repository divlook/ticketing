!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";function r(e){return String(null!=e?e:"")}function o(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:" ";return r(e).padStart(t,r(n))}function i(){var e=function(e,t){t||(t=e.slice(0));return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}(["",":",":",""]);return i=function(){return e},e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){u(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function f(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function s(e,t){var n=t.get(e);if(!n)throw new TypeError("attempted to get private field on non-instance");return n.get?n.get.call(e):n.value}function p(e,t,n){var r=t.get(e);if(!r)throw new TypeError("attempted to set private field on non-instance");if(r.set)r.set.call(e,n);else{if(!r.writable)throw new TypeError("attempted to set read only private field");r.value=n}return n}n.r(t);var v=function(){var e="",t=!1;function n(){var n;t&&console.clear(),e&&console.log(e),(n=console).log.apply(n,arguments)}return Object.defineProperty(n,"notice",{set:function(t){t&&(e=t)}}),n.notice="",Object.defineProperty(n,"clear",{get:function(){return t},set:function(e){t=!!e}}),n.clear=!1,n}();v.clear=!0;var g={onLogging:function(){}},h=new WeakMap,b=new WeakMap,d=new WeakMap,y=new WeakMap,w=new WeakMap,O=new WeakMap,j=function(){function e(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};c(this,e),h.set(this,{writable:!0,value:0}),b.set(this,{writable:!0,value:void 0}),d.set(this,{writable:!0,value:void 0}),y.set(this,{writable:!0,value:new Map}),w.set(this,{writable:!0,value:l({},g)}),O.set(this,{writable:!0,value:v}),this.init(),this.setOptions(n),"function"!=typeof t?s(this,y).has(t)?p(this,d,s(this,y).get(t)):this.log.notice="callback이 없습니다.":p(this,d,t)}var t,n,r;return t=e,(n=[{key:"start",value:function(e){var t=this;this.stop(),e?(p(this,h,new Date(e).getTime()),p(this,b,setInterval((function(){t.timeupdate()}),100))):this.log("날짜 및 시간을 입력해주세요.")}},{key:"stop",value:function(){clearInterval(s(this,b))}},{key:"init",value:function(){var e=this;Object.keys(this).forEach((function(t){"function"==typeof e[t]&&(e[t]=e[t].bind(e))})),s(this,y).set("ktx",(function(){var t,n=null===(t=window)||void 0===t?void 0:t.NetFunnel,r=null==n?void 0:n.NetFunnel_goAliveNotice;"function"==typeof r?r(1):e.log("NetFunnel.NetFunnel_goAliveNotice 메서드가 존재하지 않습니다.")})),s(this,y).set("srt",(function(){var t,n=null===(t=window)||void 0===t?void 0:t.goPage;"function"==typeof n?n(1):e.log("goPage 메서드가 존재하지 않습니다.")}))}},{key:"setOptions",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};Object.keys(e).length&&Object.assign(s(this,w),e)}},{key:"timeupdate",value:function(){var e=Date.now(),t=s(this,h)-e;if(t<=0)this.complete();else{var n=t%1e3,r=Math.floor(t/1e3),a=0;r>60&&(a=Math.floor(r/60),r%=60),this.log(function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return e.map((function(e,t){return e+o(n[t],2,"0")})).join("")}(i(),a,r,n))}}},{key:"complete",value:function(){clearInterval(s(this,b)),s(this,d)?s(this,d).call(this):this.log("종료되었습니다.")}},{key:"log",value:function(){for(var e,t,n,r=arguments.length,o=new Array(r),i=0;i<r;i++)o[i]=arguments[i];(e=s(this,O)).call.apply(e,[this].concat(o)),(null===(t=s(this,w))||void 0===t?void 0:t.onLogging)&&(n=s(this,w)).onLogging.apply(n,o)}}])&&f(t.prototype,n),r&&f(t,r),e}();window&&(window.Ticketing=j);t.default=j}]);