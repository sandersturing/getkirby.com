!function(t){var e=window.webpackJsonp;window.webpackJsonp=function(r,o,i){for(var a,c,u=0,s=[];u<r.length;u++)c=r[u],n[c]&&s.push(n[c][0]),n[c]=0;for(a in o)Object.prototype.hasOwnProperty.call(o,a)&&(t[a]=o[a]);for(e&&e(r,o,i);s.length;)s.shift()()};var r={},n={6:0};function o(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.e=function(t){var e=n[t];if(0===e)return new Promise(function(t){t()});if(e)return e[2];var r=new Promise(function(r,o){e=n[t]=[r,o]});e[2]=r;var i=document.getElementsByTagName("head")[0],a=document.createElement("script");a.type="text/javascript",a.charset="utf-8",a.async=!0,a.timeout=12e4,o.nc&&a.setAttribute("nonce",o.nc),a.src=o.p+"js/bundle-"+({0:"code"}[t]||t)+".js?id="+{0:"16242adca6cc1cf57a00"}[t];var c=setTimeout(u,12e4);function u(){a.onerror=a.onload=null,clearTimeout(c);var e=n[t];0!==e&&(e&&e[1](new Error("Loading chunk "+t+" failed.")),n[t]=void 0)}return a.onerror=a.onload=u,i.appendChild(a),r},o.m=t,o.c=r,o.d=function(t,e,r){o.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:r})},o.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/assets/",o.oe=function(t){throw console.error(t),t},o(o.s=3)}({3:function(t,e,r){t.exports=r("5Pv6")},"5Pv6":function(t,e,r){"use strict";var n=r("f6+h");r("y8sO");var o=r("och6"),i=(0,n.$)(".cheatsheet"),a=function(){(0,n.$$)(".cheatsheet-panel-header button").forEach(function(t){t.addEventListener("click",function(){var e=t.getAttribute("data-show");i.setAttribute("data-show",e)})})},c=function(t){i.classList.add("is-loading"),fetch(t.href+"?plain=true").then(function(t){return t.text()}).then(function(e){(0,o.clearAllBodyScrollLocks)(),(0,n.$)(".cheatsheet-article").innerHTML=e,(0,n.$)(".cheatsheet-entries a[aria-current]").removeAttribute("aria-current"),t.setAttribute("aria-current","page"),i.classList.remove("is-loading"),i.removeAttribute("data-show");var r=t.getAttribute("data-title");document.title=r+" | Kirby",a(),u()})};function u(){(0,o.disableBodyScroll)((0,n.$)(".cheatsheet-main-scrollarea")),(0,o.disableBodyScroll)((0,n.$)(".cheatsheet-sections .cheatsheet-panel-scrollarea"));var t=(0,n.$)(".cheatsheet-entries-scrollarea");null!==t&&(0,o.disableBodyScroll)(t)}window.addEventListener("popstate",function(t){if(t.state&&t.state.slug){var e=(0,n.$)("a[data-slug='"+t.state.slug+"']");e&&c(e)}}),(0,n.$$)(".cheatsheet-entries a").forEach(function(t){t.addEventListener("click",function(e){e.preventDefault(),c(t),history.pushState({link:t.href,slug:t.getAttribute("data-slug")},"",t.href)},!0)}),a();var s=(0,n.$)(".cheatsheet-sections a[aria-current]"),l=(0,n.$)(".cheatsheet-entries a[aria-current]");s&&s.scrollIntoView&&s.scrollIntoView(),l&&l.scrollIntoView&&l.scrollIntoView(),document.body.scrollTo(0,0),u()},SldL:function(t,e){!function(e){"use strict";var r,n=Object.prototype,o=n.hasOwnProperty,i="function"==typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",c=i.asyncIterator||"@@asyncIterator",u=i.toStringTag||"@@toStringTag",s="object"==typeof t,l=e.regeneratorRuntime;if(l)s&&(t.exports=l);else{(l=e.regeneratorRuntime=s?t.exports:{}).wrap=b;var f="suspendedStart",h="suspendedYield",d="executing",p="completed",v={},g={};g[a]=function(){return this};var y=Object.getPrototypeOf,m=y&&y(y(A([])));m&&m!==n&&o.call(m,a)&&(g=m);var w=P.prototype=E.prototype=Object.create(g);L.prototype=w.constructor=P,P.constructor=L,P[u]=L.displayName="GeneratorFunction",l.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===L||"GeneratorFunction"===(e.displayName||e.name))},l.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,P):(t.__proto__=P,u in t||(t[u]="GeneratorFunction")),t.prototype=Object.create(w),t},l.awrap=function(t){return{__await:t}},k(_.prototype),_.prototype[c]=function(){return this},l.AsyncIterator=_,l.async=function(t,e,r,n){var o=new _(b(t,e,r,n));return l.isGeneratorFunction(e)?o:o.next().then(function(t){return t.done?t.value:o.next()})},k(w),w[u]="Generator",w[a]=function(){return this},w.toString=function(){return"[object Generator]"},l.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},l.values=A,T.prototype={constructor:T,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=r,this.done=!1,this.delegate=null,this.method="next",this.arg=r,this.tryEntries.forEach(j),!t)for(var e in this)"t"===e.charAt(0)&&o.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=r)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(n,o){return c.type="throw",c.arg=t,e.next=n,o&&(e.method="next",e.arg=r),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return n("end");if(a.tryLoc<=this.prev){var u=o.call(a,"catchLoc"),s=o.call(a,"finallyLoc");if(u&&s){if(this.prev<a.catchLoc)return n(a.catchLoc,!0);if(this.prev<a.finallyLoc)return n(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return n(a.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return n(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&o.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var i=n;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,v):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),v},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),j(r),v}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;j(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:A(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=r),v}}}function b(t,e,r,n){var o=e&&e.prototype instanceof E?e:E,i=Object.create(o.prototype),a=new T(n||[]);return i._invoke=function(t,e,r){var n=f;return function(o,i){if(n===d)throw new Error("Generator is already running");if(n===p){if("throw"===o)throw i;return $()}for(r.method=o,r.arg=i;;){var a=r.delegate;if(a){var c=O(a,r);if(c){if(c===v)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===f)throw n=p,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=d;var u=x(t,e,r);if("normal"===u.type){if(n=r.done?p:h,u.arg===v)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n=p,r.method="throw",r.arg=u.arg)}}}(t,r,a),i}function x(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}function E(){}function L(){}function P(){}function k(t){["next","throw","return"].forEach(function(e){t[e]=function(t){return this._invoke(e,t)}})}function _(t){var e;this._invoke=function(r,n){function i(){return new Promise(function(e,i){!function e(r,n,i,a){var c=x(t[r],t,n);if("throw"!==c.type){var u=c.arg,s=u.value;return s&&"object"==typeof s&&o.call(s,"__await")?Promise.resolve(s.__await).then(function(t){e("next",t,i,a)},function(t){e("throw",t,i,a)}):Promise.resolve(s).then(function(t){u.value=t,i(u)},a)}a(c.arg)}(r,n,e,i)})}return e=e?e.then(i,i):i()}}function O(t,e){var n=t.iterator[e.method];if(n===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=r,O(t,e),"throw"===e.method))return v;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return v}var o=x(n,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,v;var i=o.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=r),e.delegate=null,v):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,v)}function S(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function j(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function T(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(S,this),this.reset(!0)}function A(t){if(t){var e=t[a];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,i=function e(){for(;++n<t.length;)if(o.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=r,e.done=!0,e};return i.next=i}}return{next:$}}function $(){return{value:r,done:!0}}}(function(){return this}()||Function("return this")())},Xxa5:function(t,e,r){t.exports=r("jyFz")},"f6+h":function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.$=function(t){return document.querySelector(t)},e.$$=function(t){return[].slice.call(document.querySelectorAll(t))}},gc1H:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t,e){var r=!1;return function(){r||(t(),r=!0,setTimeout(function(){r=!1},e))}}},jyFz:function(t,e,r){var n=function(){return this}()||Function("return this")(),o=n.regeneratorRuntime&&Object.getOwnPropertyNames(n).indexOf("regeneratorRuntime")>=0,i=o&&n.regeneratorRuntime;if(n.regeneratorRuntime=void 0,t.exports=r("SldL"),o)n.regeneratorRuntime=i;else try{delete n.regeneratorRuntime}catch(t){n.regeneratorRuntime=void 0}},och6:function(t,e,r){var n,o,i,a;a=function(t){"use strict";function e(t){if(Array.isArray(t)){for(var e=0,r=Array(t.length);e<t.length;e++)r[e]=t[e];return r}return Array.from(t)}Object.defineProperty(t,"__esModule",{value:!0});var r=!1;if("undefined"!=typeof window){var n={get passive(){r=!0}};window.addEventListener("testPassive",null,n),window.removeEventListener("testPassive",null,n)}var o="undefined"!=typeof window&&window.navigator&&window.navigator.platform&&/iP(ad|hone|od)/.test(window.navigator.platform),i=[],a=!1,c=-1,u=void 0,s=void 0,l=function(t){return i.some(function(e){return!(!e.options.allowTouchMove||!e.options.allowTouchMove(t))})},f=function(t){var e=t||window.event;return!!l(e.target)||1<e.touches.length||(e.preventDefault&&e.preventDefault(),!1)},h=function(){setTimeout(function(){void 0!==s&&(document.body.style.paddingRight=s,s=void 0),void 0!==u&&(document.body.style.overflow=u,u=void 0)})};t.disableBodyScroll=function(t,n){if(o){if(!t)return void console.error("disableBodyScroll unsuccessful - targetElement must be provided when calling disableBodyScroll on IOS devices.");if(t&&!i.some(function(e){return e.targetElement===t})){var h={targetElement:t,options:n||{}};i=[].concat(e(i),[h]),t.ontouchstart=function(t){1===t.targetTouches.length&&(c=t.targetTouches[0].clientY)},t.ontouchmove=function(e){var r,n,o,i;1===e.targetTouches.length&&(n=t,i=(r=e).targetTouches[0].clientY-c,!l(r.target)&&(n&&0===n.scrollTop&&0<i?f(r):(o=n)&&o.scrollHeight-o.scrollTop<=o.clientHeight&&i<0?f(r):r.stopPropagation()))},a||(document.addEventListener("touchmove",f,r?{passive:!1}:void 0),a=!0)}}else{p=n,setTimeout(function(){if(void 0===s){var t=!!p&&!0===p.reserveScrollBarGap,e=window.innerWidth-document.documentElement.clientWidth;t&&0<e&&(s=document.body.style.paddingRight,document.body.style.paddingRight=e+"px")}void 0===u&&(u=document.body.style.overflow,document.body.style.overflow="hidden")});var d={targetElement:t,options:n||{}};i=[].concat(e(i),[d])}var p},t.clearAllBodyScrollLocks=function(){o?(i.forEach(function(t){t.targetElement.ontouchstart=null,t.targetElement.ontouchmove=null}),a&&(document.removeEventListener("touchmove",f,r?{passive:!1}:void 0),a=!1),i=[],c=-1):(h(),i=[])},t.enableBodyScroll=function(t){if(o){if(!t)return void console.error("enableBodyScroll unsuccessful - targetElement must be provided when calling enableBodyScroll on IOS devices.");t.ontouchstart=null,t.ontouchmove=null,i=i.filter(function(e){return e.targetElement!==t}),a&&0===i.length&&(document.removeEventListener("touchmove",f,r?{passive:!1}:void 0),a=!1)}else 1===i.length&&i[0].targetElement===t?(h(),i=[]):i=i.filter(function(e){return e.targetElement!==t})}},o=[e],void 0===(i="function"==typeof(n=a)?n.apply(e,o):n)||(t.exports=i)},y8sO:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n,o,i=s(r("Xxa5")),a=function(){return function(t,e){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return function(t,e){var r=[],n=!0,o=!1,i=void 0;try{for(var a,c=t[Symbol.iterator]();!(n=(a=c.next()).done)&&(r.push(a.value),!e||r.length!==e);n=!0);}catch(t){o=!0,i=t}finally{try{!n&&c.return&&c.return()}finally{if(o)throw i}}return r}(t,e);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),c=(n=i.default.mark(function t(){var e,r,n,o;return i.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:e=0,r=l.length;case 1:if(!(e<r)){t.next=12;break}if(n=l[e],"PRE"===(o=n.parentElement).tagName){t.next=6;break}return t.abrupt("continue",9);case 6:if(!o.className.match(/(^|\b)language-([^\b]|$)/)){t.next=8;break}return t.abrupt("continue",9);case 8:Prism.highlightElement(n);case 9:e++,t.next=1;break;case 12:case"end":return t.stop()}},t,this)}),o=function(){var t=n.apply(this,arguments);return new Promise(function(e,r){return function n(o,i){try{var a=t[o](i),c=a.value}catch(t){return void r(t)}if(!a.done)return Promise.resolve(c).then(function(t){n("next",t)},function(t){n("throw",t)});e(c)}("next")})},function(){return o.apply(this,arguments)}),u=s(r("gc1H"));function s(t){return t&&t.__esModule?t:{default:t}}var l=document.getElementsByTagName("code");function f(){var t=(0,u.default)(c,250);new MutationObserver(t).observe(document.documentElement,{childList:!0,subtree:!0,attributes:!1,characterData:!1}),t()}var h=function(t){var e=a(t,2)[1];Prism.languages.kirbytext=Prism.languages.extend("markdown",{}),Prism.languages.insertBefore("kirbytext","prolog",{kirbytag:{pattern:/\([a-z0-9_-]+:.*?\)/i,inside:{"kirbytag-bracket":/^\(|\)$/,"kirbytag-name":{pattern:/^[a-z0-9_-]+:/i},"kirbytag-attr":{pattern:/([^:]\s+)[a-z0-9_-]+:/i,lookbehind:!0}}}}),Prism.languages.kirbycontent={delimiter:/\n----\s*\n*/,property:{pattern:/(^\n*|\n----\s*\n*)[a-zA-Z0-9_\-\u0020]+:/,lookbehind:!0}},Prism.plugins.customClass.prefix("code-"),Prism.plugins.toolbar.registerButton("copy-to-clipboard",function(t){var r=document.createElement("a");r.classList.add("link-reset"),r.insertAdjacentHTML("beforeend",'<svg viewBox="0 0 16 16" width="16" height="16" class="icon"><path d="M10,4H2C1.4,4,1,4.4,1,5v10c0,0.6,0.4,1,1,1h8c0.6,0,1-0.4,1-1V5C11,4.4,10.6,4,10,4z"></path> <path data-color="color-2" d="M14,0H4v2h9v11h2V1C15,0.4,14.6,0,14,0z"></path></svg>');var n,o=document.createElement("span");function i(){setTimeout(function(){o.textContent="Copy"},5e3)}return o.textContent="Copy",r.appendChild(o),(n=new e(r,{text:function(){return t.code}})).on("success",function(){o.textContent="Copied!",i()}),n.on("error",function(){o.textContent="Press Ctrl+C/⌘+C to copy",i()}),r})};e.default=function(){for(var t,e=document.querySelectorAll('pre code[class^="language-"], pre code[class*=" language-"], pre.code > code'),n=/(?:^| )language(-[a-z])( |$)*/i,o=0,i=e.length;o<i&&(t=e[o]);o++)n.test(t.className)||t.classList.add("language-plaintext");Promise.all([r.e(0).then(r.bind(null,"h+jg")),r.e(0).then(r.bind(null,"TQvf"))]).then(h).then(f)}}});
//# sourceMappingURL=cheatsheet.js.map