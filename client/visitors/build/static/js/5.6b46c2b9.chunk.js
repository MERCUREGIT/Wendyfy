/*! For license information please see 5.6b46c2b9.chunk.js.LICENSE.txt */
(this["webpackJsonpwendyf-ecommerce-front-end"]=this["webpackJsonpwendyf-ecommerce-front-end"]||[]).push([[5],{589:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=function(t,e){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return function(t,e){var r=[],n=!0,o=!1,i=void 0;try{for(var a,u=t[Symbol.iterator]();!(n=(a=u.next()).done)&&(r.push(a.value),!e||r.length!==e);n=!0);}catch(c){o=!0,i=c}finally{try{!n&&u.return&&u.return()}finally{if(o)throw i}}return r}(t,e);throw new TypeError("Invalid attempt to destructure non-iterable instance")},o=r(0),i=s(o),a=s(r(17)),u=s(r(654)),c=s(r(655));function s(t){return t&&t.__esModule?t:{default:t}}var l={overflow:"hidden",position:"relative"};function f(t,e){return"\n    .react-stars-"+e+":before {\n      position: absolute;\n      overflow: hidden;\n      display: block;\n      z-index: 1;\n      top: 0; left: 0;\n      width: 50%;\n      content: attr(data-forhalf);\n      color: "+t+";\n  }"}function p(t){var e=(0,o.useState)(""),r=n(e,2),a=r[0],s=r[1],p=(0,o.useState)(0),h=n(p,2),v=h[0],d=h[1],y=(0,o.useState)([]),b=n(y,2),g=b[0],m=b[1],w=(0,o.useState)(!1),S=n(w,2),O=S[0],C=S[1],x=(0,u.default)(t),T=n(x,2),j=T[0],k=T[1],_=(0,o.useState)(0),I=n(_,2),P=I[0],A=I[1],E=(0,o.useState)(!1),N=n(E,2),z=N[0],R=N[1],M=(0,o.useState)(""),H=n(M,2),B=H[0],D=H[1];function U(t){"undefined"===typeof t&&(t=j.isHalf?Math.floor(v):Math.round(v));for(var e=[],r=0;r<j.count;r++)e.push({active:r<=t-1});return e}function F(t){if(j.edit){var e=Number(t.currentTarget.getAttribute("data-index"));if(j.isHalf){var r=L(t);R(r),r&&(e+=1),A(e)}else e+=1;!function(t){var e=g.filter((function(t){return t.active}));t!==e.length&&m(U(t))}(e)}}function L(t){var e=t.target.getBoundingClientRect(),r=t.clientX-e.left;return(r=Math.round(Math.abs(r)))>e.width/2}function J(){j.edit&&(W(v),m(U()))}function W(t){j.isHalf&&(R(function(t){return t%1===0}(t)),A(Math.floor(t)))}function $(t){if(j.edit){var e=Number(t.currentTarget.getAttribute("data-index")),r=void 0;if(j.isHalf){var n=L(t);R(n),n&&(e+=1),r=n?e:e+.5,A(e)}else r=e+=1;q(r)}}function q(e){e!==v&&(m(U(e)),d(e),t.onChange(e))}return(0,o.useEffect)((function(){var e,r;D(t.classNames+" react-stars"),e=t.value,r=t.count,d(e<0||e>r?0:e),m(U(t.value)),k(t),s((Math.random()+"").replace(".","")),C(function(t){return!t.isHalf&&t.emptyIcon&&t.filledIcon||t.isHalf&&t.emptyIcon&&t.halfIcon&&t.filledIcon}(t)),A(Math.floor(t.value)),R(t.isHalf&&t.value%1<.5)}),[]),i.default.createElement("div",{className:"react-stars-wrapper-"+a,style:{display:"flex"}},i.default.createElement("div",{tabIndex:j.a11y&&j.edit?0:null,"aria-label":"add rating by typing an integer from 0 to 5 or pressing arrow keys",onKeyDown:function(t){if(j.a11y||j.edit){var e=t.key,r=v,n=Number(e);n?Number.isInteger(n)&&n>0&&n<=j.count&&(r=n):("ArrowUp"===e||"ArrowRight"===e)&&r<j.count?(t.preventDefault(),r+=j.isHalf?.5:1):("ArrowDown"===e||"ArrowLeft"===e)&&r>.5&&(t.preventDefault(),r-=j.isHalf?.5:1),W(r),q(r)}},className:B,style:l},j.isHalf&&function(){return i.default.createElement("style",{dangerouslySetInnerHTML:{__html:O?(t=j.activeColor,"\n          span.react-stars-half > * {\n          color: "+t+";\n      }"):f(j.activeColor,a)}});var t}(),g.map((function(t,e){return i.default.createElement(c.default,{key:e,index:e,active:t.active,config:j,onMouseOver:F,onMouseLeave:J,onClick:$,halfStarHidden:z,halfStarAt:P,isUsingIcons:O,uniqueness:a})})),i.default.createElement("p",{style:{position:"absolute",left:"-200rem"},role:"status"},v)))}p.propTypes={classNames:a.default.string,edit:a.default.bool,half:a.default.bool,value:a.default.number,count:a.default.number,char:a.default.string,size:a.default.number,color:a.default.string,activeColor:a.default.string,emptyIcon:a.default.element,halfIcon:a.default.element,filledIcon:a.default.element,a11y:a.default.bool},p.defaultProps={edit:!0,half:!1,value:0,count:5,char:"\u2605",size:15,color:"gray",activeColor:"#ffd700",a11y:!0,onChange:function(){}},e.default=p},590:function(t,e,r){"use strict";r(250),r(251),r(253),r(258),r(159),r(254);var n=r(0),o=r.n(n),i=r(17),a=r.n(i);r(249),r(252);function u(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function c(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}var s=function(){try{return"localStorage"in window&&window.localStorage}catch(t){return!1}}(),l=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};u(this,t);var r=e.cachePrefix,n=void 0===r?"react-avatar/":r,o=e.sourceTTL,i=void 0===o?6048e5:o,a=e.sourceSize,c=void 0===a?20:a;this.cachePrefix=n,this.sourceTTL=i,this.sourceSize=c}var e,r,n;return e=t,(r=[{key:"set",value:function(t,e){if(s){e=JSON.stringify(e);try{localStorage.setItem(this.cachePrefix+t,e)}catch(r){console.error(r)}}}},{key:"get",value:function(t){if(!s)return null;var e=localStorage.getItem(this.cachePrefix+t);return e?JSON.parse(e):null}},{key:"sourceFailed",value:function(t){var e=this.get("failing")||[];return(e=e.filter((function(e){var r=e.expires>0&&e.expires<Date.now(),n=e===t||e.url==t;return!r&&!n}))).unshift({url:t,expires:Date.now()+this.sourceTTL}),e=e.slice(0,this.sourceSize-1),this.set("failing",e)}},{key:"hasSourceFailedBefore",value:function(t){return(this.get("failing")||[]).some((function(e){var r=e.expires>0&&e.expires<Date.now();return(e===t||e.url==t)&&!r}))}}])&&c(e.prototype,r),n&&c(e,n),t}(),f=new l,p=(r(259),r(255),r(256),r(257),r(260),r(656));function h(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"===typeof Symbol||!(Symbol.iterator in Object(t)))return;var r=[],n=!0,o=!1,i=void 0;try{for(var a,u=t[Symbol.iterator]();!(n=(a=u.next()).done)&&(r.push(a.value),!e||r.length!==e);n=!0);}catch(c){o=!0,i=c}finally{try{n||null==u.return||u.return()}finally{if(o)throw i}}return r}(t,e)||d(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function v(t){return function(t){if(Array.isArray(t))return y(t)}(t)||function(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||d(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function d(t,e){if(t){if("string"===typeof t)return y(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?y(t,e):void 0}}function y(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}var b=r.n(p)()();var g=["#d73d32","#7e3794","#4285f4","#67ae3f","#d61a7f","#ff4080"],m=/^([-+]?(?:\d+(?:\.\d+)?|\.\d+))([a-z]{2,4}|%)?$/;function w(t,e){for(var r=v(t).map((function(t){return t.charCodeAt(0)})),n=r.length,o=n%(e-1)+1,i=r.reduce((function(t,e){return t+e}))%e,a=r[0]%e,u=0;u<n;u++)a=(o*a+i)%e;return a}function S(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:g;if(!t)return"transparent";var r=w(t,e.length);return e[r]}function O(t){t=""+t;var e=h(m.exec(t)||[],3),r=e[1],n=void 0===r?0:r,o=e[2],i=void 0===o?"px":o;return{value:parseFloat(n),str:n+i,unit:i}}function C(t){return t=O(t),t=isNaN(t.value)?512:"px"===t.unit?t.value:0===t.value?0:512,b&&(t*=2),t}function x(t,e){var r=e.maxInitials;return t.split(/\s/).map((function(t){return t.substring(0,1).toUpperCase()})).filter((function(t){return!!t})).slice(0,r).join("").toUpperCase()}var T={};function j(t,e){if(T[e])T[e].push(t);else{var r=T[e]=[t];setTimeout((function(){delete T[e],r.forEach((function(t){return t()}))}),e)}}function k(t){return(k="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function _(){return(_=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t}).apply(this,arguments)}function I(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function P(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function A(t,e){return(A=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function E(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=z(t);if(e){var o=z(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return N(this,r)}}function N(t,e){return!e||"object"!==k(e)&&"function"!==typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function z(t){return(z=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function R(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var M={cache:f,colors:g,initials:x,avatarRedirectUrl:null},H=Object.keys(M),B=o.a.createContext&&o.a.createContext(),D=!B,U=D?null:B.Consumer,F=o.a.forwardRef||function(t){return t},L=function(t){!function(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&A(t,e)}(a,t);var e,r,n,i=E(a);function a(){return I(this,a),i.apply(this,arguments)}return e=a,(r=[{key:"_getContext",value:function(){var t=this,e={};return H.forEach((function(r){"undefined"!==typeof t.props[r]&&(e[r]=t.props[r])})),e}},{key:"render",value:function(){var t=this.props.children;return D?o.a.Children.only(t):o.a.createElement(B.Provider,{value:this._getContext()},o.a.Children.only(t))}}])&&P(e.prototype,r),n&&P(e,n),a}(o.a.Component);R(L,"displayName","ConfigProvider"),R(L,"propTypes",{cache:a.a.object,colors:a.a.arrayOf(a.a.string),initials:a.a.func,avatarRedirectUrl:a.a.string,children:a.a.node});function J(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}D&&(L.childContextTypes={reactAvatar:a.a.object},L.prototype.getChildContext=function(){return{reactAvatar:this._getContext()}});var W=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.sourcePointer=0,this.active=!0,this.fetch=null}var e,r,n;return e=t,(r=[{key:"isActive",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return t.internal===this&&!!this.fetch&&!0===this.active}}])&&J(e.prototype,r),n&&J(e,n),t}();function $(t){return($="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function q(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function V(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?q(Object(r),!0).forEach((function(e){tt(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):q(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function K(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function X(t,e){return(X=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function Z(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=Y(t);if(e){var o=Y(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return G(this,r)}}function G(t,e){return!e||"object"!==$(e)&&"function"!==typeof e?Q(t):e}function Q(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function Y(t){return(Y=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function tt(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var et=r(657),rt=r.n(et);function nt(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var ot=function t(e){var r=this;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),nt(this,"props",null),nt(this,"isCompatible",(function(){return!!r.props.email||!!r.props.md5Email})),nt(this,"get",(function(t){var e=r.props,n=e.md5Email||rt()(e.email),o=C(e.size),i="https://secure.gravatar.com/avatar/".concat(n,"?d=404");o&&(i+="&s=".concat(o)),t({sourceName:"gravatar",src:i})})),this.props=e};nt(ot,"propTypes",{email:a.a.string,md5Email:a.a.string});r(160);function it(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var at=function t(e){var r=this;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),it(this,"props",null),it(this,"isCompatible",(function(){return!!r.props.facebookId})),it(this,"get",(function(t){var e=r.props.facebookId,n=C(r.props.size),o="https://graph.facebook.com/".concat(e,"/picture");n&&(o+="?width=".concat(n,"&height=").concat(n)),t({sourceName:"facebook",src:o})})),this.props=e};function ut(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}it(at,"propTypes",{facebookId:a.a.string});var ct=function t(e){var r=this;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),ut(this,"props",null),ut(this,"isCompatible",(function(){return!!r.props.githubHandle})),ut(this,"get",(function(t){var e=r.props.githubHandle,n=C(r.props.size),o="https://avatars.githubusercontent.com/".concat(e,"?v=4");n&&(o+="&s=".concat(n)),t({sourceName:"github",src:o})})),this.props=e};function st(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}ut(ct,"propTypes",{githubHandle:a.a.string});var lt=function t(e){var r=this;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),st(this,"props",null),st(this,"isCompatible",(function(){return!!r.props.skypeId})),st(this,"get",(function(t){var e=r.props.skypeId;t({sourceName:"skype",src:"https://api.skype.com/users/".concat(e,"/profile/avatar")})})),this.props=e};function ft(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function pt(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}st(lt,"propTypes",{skypeId:a.a.string});var ht=function(){function t(e){var r=this;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),pt(this,"props",null),pt(this,"isCompatible",(function(){return!!(r.props.name||r.props.value||r.props.email)})),pt(this,"get",(function(t){var e=r.getValue();if(!e)return t(null);t({sourceName:"text",value:e,color:r.getColor()})})),this.props=e}var e,r,n;return e=t,(r=[{key:"getInitials",value:function(){var t=this.props,e=t.name,r=t.initials;return"string"===typeof r?r:"function"===typeof r?r(e,this.props):x(e,this.props)}},{key:"getValue",value:function(){return this.props.name?this.getInitials():this.props.value?this.props.value:null}},{key:"getColor",value:function(){var t=this.props,e=t.color,r=t.colors,n=t.name,o=t.email,i=t.value;return e||S(n||o||i,r)}}])&&ft(e.prototype,r),n&&ft(e,n),t}();function vt(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}pt(ht,"propTypes",{color:a.a.string,name:a.a.string,value:a.a.string,email:a.a.string,maxInitials:a.a.number,initials:a.a.oneOfType([a.a.string,a.a.func])});var dt=function t(e){var r=this;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),vt(this,"props",null),vt(this,"isCompatible",(function(){return!!r.props.src})),vt(this,"get",(function(t){t({sourceName:"src",src:r.props.src})})),this.props=e};function yt(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}vt(dt,"propTypes",{src:a.a.string});var bt=function t(e){var r=this;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),yt(this,"props",null),yt(this,"icon","\u2737"),yt(this,"isCompatible",(function(){return!0})),yt(this,"get",(function(t){var e=r.props,n=e.color,o=e.colors;t({sourceName:"icon",value:r.icon,color:n||S(r.icon,o)})})),this.props=e};function gt(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function mt(t,e){var r,n;return n=r=function r(n){var o=this;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,r),gt(this,"props",null),gt(this,"isCompatible",(function(){return!!o.props.avatarRedirectUrl&&!!o.props[e]})),gt(this,"get",(function(r){var n=o.props.avatarRedirectUrl,i=C(o.props.size),a=n.replace(/\/*$/,"/"),u=o.props[e],c=i?"size=".concat(i):"";r({source:"network",src:"".concat(a).concat(t,"/").concat(u,"?").concat(c)})})),this.props=n},gt(r,"propTypes",gt({},e,a.a.oneOfType([a.a.string,a.a.number]))),n}yt(bt,"propTypes",{color:a.a.string});var wt=mt("twitter","twitterHandle"),St=mt("vkontakte","vkontakteId"),Ot=mt("instagram","instagramId"),Ct=[at,mt("google","googleId"),ct,wt,Ot,St,lt,ot,dt,ht,bt];e.a=function(t){var e=t.sources,r=void 0===e?[]:e,i=r.reduce((function(t,e){return Object.assign(t,e.propTypes)}),{}),u=function(t){!function(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&X(t,e)}(c,t);var e,n,a,u=Z(c);function c(t){var e;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,c),tt(Q(e=u.call(this,t)),"_createFetcher",(function(t){return function(n){var o=e.props.cache;if(t.isActive(e.state)){n&&"error"===n.type&&o.sourceFailed(n.target.src);var i=t.sourcePointer;if(r.length!==i){var a=r[i];t.sourcePointer++,function(t,e,r){var n=e.cache,o=new t(e);if(!o.isCompatible(e))return r();o.get((function(t){!(t&&t.src&&n.hasSourceFailedBefore(t.src))&&t?r(t):r()}))}(a,e.props,(function(r){if(!r)return setTimeout(t.fetch,0);t.isActive(e.state)&&(r=V({src:null,value:null,color:null},r),e.setState((function(e){return t.isActive(e)?r:{}})))}))}}}})),tt(Q(e),"fetch",(function(){var t=new W;t.fetch=e._createFetcher(t),e.setState({internal:t},t.fetch)})),tt(Q(e),"_scaleTextNode",(function(t){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:16,n=e.props,o=n.unstyled,i=n.textSizeRatio,a=n.textMarginRatio;if(t&&!o&&!e.state.src&&e.mounted){var u=t.parentNode,c=u.parentNode,s=u.getBoundingClientRect(),l=s.width,f=s.height;if(0!=l||0!=f){if(!c.style.fontSize){var p=f/i;c.style.fontSize="".concat(p,"px")}u.style.fontSize=null;var h=t.getBoundingClientRect(),v=h.width;if(!(v<0)){var d=l*(1-2*a);v>d&&(u.style.fontSize="calc(1em * ".concat(d/v,")"))}}else{var y=Math.min(1.5*r,500);j((function(){return e._scaleTextNode(t,y)}),y)}}})),e.state={internal:null,src:null,value:null,color:t.color},e}return e=c,(n=[{key:"componentDidMount",value:function(){this.mounted=!0,this.fetch()}},{key:"componentDidUpdate",value:function(t){var e=!1;for(var r in i)e=e||t[r]!==this.props[r];e&&setTimeout(this.fetch,0)}},{key:"componentWillUnmount",value:function(){this.mounted=!1,this.state.internal&&(this.state.internal.active=!1)}},{key:"_renderAsImage",value:function(){var t=this.props,e=t.className,r=t.round,n=t.unstyled,i=t.alt,a=t.title,u=t.name,c=t.value,s=this.state.internal,l=O(this.props.size),f=n?null:{maxWidth:"100%",width:l.str,height:l.str,borderRadius:!0===r?"100%":r};return o.a.createElement("img",{className:e+" sb-avatar__image",width:l.str,height:l.str,style:f,src:this.state.src,alt:i||u||c,title:a||u||c,onError:s&&s.fetch})}},{key:"_renderAsText",value:function(){var t=this.props,e=t.className,r=t.round,n=t.unstyled,i=t.title,a=t.name,u=t.value,c=O(this.props.size),s=n?null:{width:c.str,height:c.str,lineHeight:"initial",textAlign:"center",color:this.props.fgColor,background:this.state.color,borderRadius:!0===r?"100%":r},l=n?null:{display:"table",tableLayout:"fixed",width:"100%",height:"100%"},f=n?null:{display:"table-cell",verticalAlign:"middle",fontSize:"100%",whiteSpace:"nowrap"},p=[this.state.value,this.props.size].join("");return o.a.createElement("div",{className:e+" sb-avatar__text",style:s,title:i||a||u},o.a.createElement("div",{style:l},o.a.createElement("span",{style:f},o.a.createElement("span",{ref:this._scaleTextNode,key:p},this.state.value))))}},{key:"render",value:function(){var t=this.props,e=t.className,r=t.unstyled,n=t.round,i=t.style,a=t.onClick,u=this.state,c=u.src,s=u.sourceName,l=O(this.props.size),f=r?null:V({display:"inline-block",verticalAlign:"middle",width:l.str,height:l.str,borderRadius:!0===n?"100%":n,fontFamily:"Helvetica, Arial, sans-serif"},i),p=[e,"sb-avatar"];if(s){var h=s.toLowerCase().replace(/[^a-z0-9-]+/g,"-").replace(/^-+|-+$/g,"");p.push("sb-avatar--"+h)}return o.a.createElement("div",{className:p.join(" "),onClick:a,style:f},c?this._renderAsImage():this._renderAsText())}}])&&K(e.prototype,n),a&&K(e,a),c}(n.PureComponent);return tt(u,"displayName","Avatar"),tt(u,"propTypes",V(V({},i),{},{alt:a.a.string,title:a.a.string,className:a.a.string,fgColor:a.a.string,color:a.a.string,colors:a.a.arrayOf(a.a.string),round:a.a.oneOfType([a.a.bool,a.a.string]),style:a.a.object,size:a.a.oneOfType([a.a.number,a.a.string]),textSizeRatio:a.a.number,textMarginRatio:a.a.number,unstyled:a.a.bool,cache:a.a.object,onClick:a.a.func})),tt(u,"defaultProps",{className:"",fgColor:"#FFF",round:!1,size:100,textSizeRatio:3,textMarginRatio:.15,unstyled:!1}),tt(u,"getRandomColor",S),tt(u,"Cache",l),tt(u,"ConfigProvider",L),Object.assign(function(t){function e(e,r){if(D){var n=r&&r.reactAvatar;return o.a.createElement(t,_({},M,n,e))}return o.a.createElement(U,null,(function(n){return o.a.createElement(t,_({ref:r},M,n,e))}))}return e.contextTypes=L.childContextTypes,F(e)}(u),{getRandomColor:S,ConfigProvider:L,Cache:l})}({sources:Ct})},622:function(t,e){var r={utf8:{stringToBytes:function(t){return r.bin.stringToBytes(unescape(encodeURIComponent(t)))},bytesToString:function(t){return decodeURIComponent(escape(r.bin.bytesToString(t)))}},bin:{stringToBytes:function(t){for(var e=[],r=0;r<t.length;r++)e.push(255&t.charCodeAt(r));return e},bytesToString:function(t){for(var e=[],r=0;r<t.length;r++)e.push(String.fromCharCode(t[r]));return e.join("")}}};t.exports=r},654:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=function(t,e){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return function(t,e){var r=[],n=!0,o=!1,i=void 0;try{for(var a,u=t[Symbol.iterator]();!(n=(a=u.next()).done)&&(r.push(a.value),!e||r.length!==e);n=!0);}catch(c){o=!0,i=c}finally{try{!n&&u.return&&u.return()}finally{if(o)throw i}}return r}(t,e);throw new TypeError("Invalid attempt to destructure non-iterable instance")};e.default=function(t){var e=(0,o.useState)(t.count),r=n(e,2),i=r[0],a=r[1],u=(0,o.useState)(t.size),c=n(u,2),s=c[0],l=c[1],f=(0,o.useState)(t.char),p=n(f,2),h=p[0],v=p[1],d=(0,o.useState)(t.color),y=n(d,2),b=y[0],g=y[1],m=(0,o.useState)(t.activeColor),w=n(m,2),S=w[0],O=w[1],C=(0,o.useState)(t.isHalf),x=n(C,2),T=x[0],j=x[1],k=(0,o.useState)(t.edit),_=n(k,2),I=_[0],P=_[1],A=(0,o.useState)(t.emptyIcon),E=n(A,2),N=E[0],z=E[1],R=(0,o.useState)(t.halfIcon),M=n(R,2),H=M[0],B=M[1],D=(0,o.useState)(t.filledIcon),U=n(D,2),F=U[0],L=U[1],J=(0,o.useState)(t.a11y),W=n(J,2),$=W[0],q=W[1];return[{count:i,size:s,char:h,color:b,activeColor:S,isHalf:T,edit:I,emptyIcon:N,halfIcon:H,filledIcon:F,a11y:$},function(t){a(t.count),l(t.size),v(t.char),g(t.color),O(t.activeColor),j(t.isHalf),P(t.edit),z(t.emptyIcon),B(t.halfIcon),L(t.filledIcon),q(t.a11y)}]};var o=r(0)},655:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t};e.default=function(t){var e=t.index,r=t.active,o=t.config,i=t.onMouseOver,c=t.onMouseLeave,s=t.onClick,l=t.halfStarHidden,f=t.halfStarAt,p=t.isUsingIcons,h=t.uniqueness,v=o.color,d=o.activeColor,y=o.size,b=o.char,g=o.isHalf,m=o.edit,w=o.halfIcon,S=o.emptyIcon,O=o.filledIcon,C="",x=!1;g&&!l&&f===e&&(C=p?"react-stars-half":"react-stars-"+h,x=!0);var T=n({},u,{color:r?d:v,cursor:m?"pointer":"default",fontSize:y+"px"});return a.default.createElement("span",{className:C,style:T,key:e,"data-index":e,"data-forhalf":O?e:b,onMouseOver:i,onMouseMove:i,onMouseLeave:c,onClick:s},p?r?O:!r&&x?w:S:b)};var o,i=r(0),a=(o=i)&&o.__esModule?o:{default:o};var u={position:"relative",overflow:"hidden",cursor:"pointer",display:"block",float:"left"}},656:function(t,e){t.exports=function(){if("undefined"!==typeof window&&null!==window){if("(-webkit-min-device-pixel-ratio: 1.25), (min--moz-device-pixel-ratio: 1.25), (-o-min-device-pixel-ratio: 5/4), (min-resolution: 1.25dppx)",window.devicePixelRatio>1.25)return!0;if(window.matchMedia&&window.matchMedia("(-webkit-min-device-pixel-ratio: 1.25), (min--moz-device-pixel-ratio: 1.25), (-o-min-device-pixel-ratio: 5/4), (min-resolution: 1.25dppx)").matches)return!0}return!1}},657:function(t,e,r){!function(){var e=r(658),n=r(622).utf8,o=r(659),i=r(622).bin,a=function t(r,a){r.constructor==String?r=a&&"binary"===a.encoding?i.stringToBytes(r):n.stringToBytes(r):o(r)?r=Array.prototype.slice.call(r,0):Array.isArray(r)||r.constructor===Uint8Array||(r=r.toString());for(var u=e.bytesToWords(r),c=8*r.length,s=1732584193,l=-271733879,f=-1732584194,p=271733878,h=0;h<u.length;h++)u[h]=16711935&(u[h]<<8|u[h]>>>24)|4278255360&(u[h]<<24|u[h]>>>8);u[c>>>5]|=128<<c%32,u[14+(c+64>>>9<<4)]=c;var v=t._ff,d=t._gg,y=t._hh,b=t._ii;for(h=0;h<u.length;h+=16){var g=s,m=l,w=f,S=p;s=v(s,l,f,p,u[h+0],7,-680876936),p=v(p,s,l,f,u[h+1],12,-389564586),f=v(f,p,s,l,u[h+2],17,606105819),l=v(l,f,p,s,u[h+3],22,-1044525330),s=v(s,l,f,p,u[h+4],7,-176418897),p=v(p,s,l,f,u[h+5],12,1200080426),f=v(f,p,s,l,u[h+6],17,-1473231341),l=v(l,f,p,s,u[h+7],22,-45705983),s=v(s,l,f,p,u[h+8],7,1770035416),p=v(p,s,l,f,u[h+9],12,-1958414417),f=v(f,p,s,l,u[h+10],17,-42063),l=v(l,f,p,s,u[h+11],22,-1990404162),s=v(s,l,f,p,u[h+12],7,1804603682),p=v(p,s,l,f,u[h+13],12,-40341101),f=v(f,p,s,l,u[h+14],17,-1502002290),s=d(s,l=v(l,f,p,s,u[h+15],22,1236535329),f,p,u[h+1],5,-165796510),p=d(p,s,l,f,u[h+6],9,-1069501632),f=d(f,p,s,l,u[h+11],14,643717713),l=d(l,f,p,s,u[h+0],20,-373897302),s=d(s,l,f,p,u[h+5],5,-701558691),p=d(p,s,l,f,u[h+10],9,38016083),f=d(f,p,s,l,u[h+15],14,-660478335),l=d(l,f,p,s,u[h+4],20,-405537848),s=d(s,l,f,p,u[h+9],5,568446438),p=d(p,s,l,f,u[h+14],9,-1019803690),f=d(f,p,s,l,u[h+3],14,-187363961),l=d(l,f,p,s,u[h+8],20,1163531501),s=d(s,l,f,p,u[h+13],5,-1444681467),p=d(p,s,l,f,u[h+2],9,-51403784),f=d(f,p,s,l,u[h+7],14,1735328473),s=y(s,l=d(l,f,p,s,u[h+12],20,-1926607734),f,p,u[h+5],4,-378558),p=y(p,s,l,f,u[h+8],11,-2022574463),f=y(f,p,s,l,u[h+11],16,1839030562),l=y(l,f,p,s,u[h+14],23,-35309556),s=y(s,l,f,p,u[h+1],4,-1530992060),p=y(p,s,l,f,u[h+4],11,1272893353),f=y(f,p,s,l,u[h+7],16,-155497632),l=y(l,f,p,s,u[h+10],23,-1094730640),s=y(s,l,f,p,u[h+13],4,681279174),p=y(p,s,l,f,u[h+0],11,-358537222),f=y(f,p,s,l,u[h+3],16,-722521979),l=y(l,f,p,s,u[h+6],23,76029189),s=y(s,l,f,p,u[h+9],4,-640364487),p=y(p,s,l,f,u[h+12],11,-421815835),f=y(f,p,s,l,u[h+15],16,530742520),s=b(s,l=y(l,f,p,s,u[h+2],23,-995338651),f,p,u[h+0],6,-198630844),p=b(p,s,l,f,u[h+7],10,1126891415),f=b(f,p,s,l,u[h+14],15,-1416354905),l=b(l,f,p,s,u[h+5],21,-57434055),s=b(s,l,f,p,u[h+12],6,1700485571),p=b(p,s,l,f,u[h+3],10,-1894986606),f=b(f,p,s,l,u[h+10],15,-1051523),l=b(l,f,p,s,u[h+1],21,-2054922799),s=b(s,l,f,p,u[h+8],6,1873313359),p=b(p,s,l,f,u[h+15],10,-30611744),f=b(f,p,s,l,u[h+6],15,-1560198380),l=b(l,f,p,s,u[h+13],21,1309151649),s=b(s,l,f,p,u[h+4],6,-145523070),p=b(p,s,l,f,u[h+11],10,-1120210379),f=b(f,p,s,l,u[h+2],15,718787259),l=b(l,f,p,s,u[h+9],21,-343485551),s=s+g>>>0,l=l+m>>>0,f=f+w>>>0,p=p+S>>>0}return e.endian([s,l,f,p])};a._ff=function(t,e,r,n,o,i,a){var u=t+(e&r|~e&n)+(o>>>0)+a;return(u<<i|u>>>32-i)+e},a._gg=function(t,e,r,n,o,i,a){var u=t+(e&n|r&~n)+(o>>>0)+a;return(u<<i|u>>>32-i)+e},a._hh=function(t,e,r,n,o,i,a){var u=t+(e^r^n)+(o>>>0)+a;return(u<<i|u>>>32-i)+e},a._ii=function(t,e,r,n,o,i,a){var u=t+(r^(e|~n))+(o>>>0)+a;return(u<<i|u>>>32-i)+e},a._blocksize=16,a._digestsize=16,t.exports=function(t,r){if(void 0===t||null===t)throw new Error("Illegal argument "+t);var n=e.wordsToBytes(a(t,r));return r&&r.asBytes?n:r&&r.asString?i.bytesToString(n):e.bytesToHex(n)}}()},658:function(t,e){!function(){var e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",r={rotl:function(t,e){return t<<e|t>>>32-e},rotr:function(t,e){return t<<32-e|t>>>e},endian:function(t){if(t.constructor==Number)return 16711935&r.rotl(t,8)|4278255360&r.rotl(t,24);for(var e=0;e<t.length;e++)t[e]=r.endian(t[e]);return t},randomBytes:function(t){for(var e=[];t>0;t--)e.push(Math.floor(256*Math.random()));return e},bytesToWords:function(t){for(var e=[],r=0,n=0;r<t.length;r++,n+=8)e[n>>>5]|=t[r]<<24-n%32;return e},wordsToBytes:function(t){for(var e=[],r=0;r<32*t.length;r+=8)e.push(t[r>>>5]>>>24-r%32&255);return e},bytesToHex:function(t){for(var e=[],r=0;r<t.length;r++)e.push((t[r]>>>4).toString(16)),e.push((15&t[r]).toString(16));return e.join("")},hexToBytes:function(t){for(var e=[],r=0;r<t.length;r+=2)e.push(parseInt(t.substr(r,2),16));return e},bytesToBase64:function(t){for(var r=[],n=0;n<t.length;n+=3)for(var o=t[n]<<16|t[n+1]<<8|t[n+2],i=0;i<4;i++)8*n+6*i<=8*t.length?r.push(e.charAt(o>>>6*(3-i)&63)):r.push("=");return r.join("")},base64ToBytes:function(t){t=t.replace(/[^A-Z0-9+\/]/gi,"");for(var r=[],n=0,o=0;n<t.length;o=++n%4)0!=o&&r.push((e.indexOf(t.charAt(n-1))&Math.pow(2,-2*o+8)-1)<<2*o|e.indexOf(t.charAt(n))>>>6-2*o);return r}};t.exports=r}()},659:function(t,e){function r(t){return!!t.constructor&&"function"===typeof t.constructor.isBuffer&&t.constructor.isBuffer(t)}t.exports=function(t){return null!=t&&(r(t)||function(t){return"function"===typeof t.readFloatLE&&"function"===typeof t.slice&&r(t.slice(0,0))}(t)||!!t._isBuffer)}}}]);
//# sourceMappingURL=5.6b46c2b9.chunk.js.map