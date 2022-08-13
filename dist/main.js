(()=>{"use strict";var e={426:(e,n,t)=>{t.d(n,{Z:()=>c});var r=t(81),o=t.n(r),i=t(645),a=t.n(i)()(o());a.push([e.id,"body {\n  margin-bottom: -25px;\n  background-color: burlywood;\n}\n\n.nav {\n  padding-top: 20px;\n  display: flex;\n  justify-content: center;\n  gap: 30px;\n}\n\nimg {\n  width: 150px;\n}\n\ndiv#content {\n  display: grid;\n  grid-template-columns: 1fr;\n  justify-items: center;\n  padding: 70px 110px 150px 110px;\n}\n\nh1 {\n  font-size: 60px;\n  font-weight: bolder;\n}\n\np {\n  font-size: 30px;\n  font-weight: bold;\n}\n\nbutton {\n  width: 100px;\n  height: 30px;\n  border: 2px solid black;\n  border-radius: 5px;\n  background-color: sienna;\n  font-size: 20px;\n  font-weight: bolder;\n  box-shadow: 2px 2px 3px darkslategray;\n}\n\nbutton:active {\n  border: 1px solid black;\n  filter: brightness(90%);\n}\n\ndiv.homecontainer {\n  grid-template-rows: 1fr 1fr 4fr;\n}\n\n.container {\n  display: grid;\n  grid-template-columns: 1fr;\n  grid-template-rows: 1fr 4fr;\n  justify-items: center;\n  background-color: thistle;\n  width: 100%;\n  height: calc(100vh - 285px);\n  border: 1px solid black;\n  border-radius: 30px;\n  box-shadow: 5px 5px 10px darkslategrey;\n  padding: 0px 20px 0px 20px;\n  box-sizing: content-box;\n\n}",""]);const c=a},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",r=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),r&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),r&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,r,o,i){"string"==typeof e&&(e=[[null,e,void 0]]);var a={};if(r)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(a[s]=!0)}for(var d=0;d<e.length;d++){var l=[].concat(e[d]);r&&a[l[0]]||(void 0!==i&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=i),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),n.push(l))}},n}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var n=[];function t(e){for(var t=-1,r=0;r<n.length;r++)if(n[r].identifier===e){t=r;break}return t}function r(e,r){for(var i={},a=[],c=0;c<e.length;c++){var s=e[c],d=r.base?s[0]+r.base:s[0],l=i[d]||0,u="".concat(d," ").concat(l);i[d]=l+1;var p=t(u),f={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==p)n[p].references++,n[p].updater(f);else{var m=o(f,r);r.byIndex=c,n.splice(c,0,{identifier:u,updater:m,references:1})}a.push(u)}return a}function o(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,o){var i=r(e=e||[],o=o||{});return function(e){e=e||[];for(var a=0;a<i.length;a++){var c=t(i[a]);n[c].references--}for(var s=r(e,o),d=0;d<i.length;d++){var l=t(i[d]);0===n[l].references&&(n[l].updater(),n.splice(l,1))}i=s}}},569:e=>{var n={};e.exports=function(e,t){var r=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var i=t.sourceMap;i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),n.styleTagTransform(r,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}}},n={};function t(r){var o=n[r];if(void 0!==o)return o.exports;var i=n[r]={id:r,exports:{}};return e[r](i,i.exports,t),i.exports}t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e;t.g.importScripts&&(e=t.g.location+"");var n=t.g.document;if(!e&&n&&(n.currentScript&&(e=n.currentScript.src),!e)){var r=n.getElementsByTagName("script");r.length&&(e=r[r.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e})(),t.nc=void 0,(()=>{const e=t.p+"99f2cabdf4f900f95e51.png";function n(){const n=document.querySelector("div#content");n.innerHTML="";const t=document.createElement("div");t.setAttribute("class","homecontainer container"),n.appendChild(t);const r=document.createElement("h1");r.innerHTML="Dr. Amigo's Burger Palace",t.appendChild(r);const o=new Image;o.src=e,t.appendChild(o);const i=document.createElement("p");i.innerHTML="Delicious, finger licking good burgers await you at the famous Dr. Amigo's Burger Palace!",t.appendChild(i)}var r=t(379),o=t.n(r),i=t(795),a=t.n(i),c=t(569),s=t.n(c),d=t(565),l=t.n(d),u=t(216),p=t.n(u),f=t(589),m=t.n(f),h=t(426),b={};b.styleTagTransform=m(),b.setAttributes=l(),b.insert=s().bind(null,"head"),b.domAPI=a(),b.insertStyleElement=p(),o()(h.Z,b),h.Z&&h.Z.locals&&h.Z.locals,function(){const e=document.querySelector("div#content"),t=document.createElement("div");t.setAttribute("class","nav"),e.before(t);const r=document.createElement("button");r.setAttribute("class","nav__button"),r.innerHTML="Home",r.addEventListener("click",(()=>{n()})),t.appendChild(r);const o=document.createElement("button");o.setAttribute("class","nav__button"),o.innerHTML="Contact",o.addEventListener("click",(()=>{!function(){const e=document.querySelector("div#content");e.innerHTML="";const n=document.createElement("div");n.setAttribute("class","contactcontainer container"),e.appendChild(n);const t=document.createElement("h1");t.innerHTML="Contact us!",n.appendChild(t);const r=document.createElement("p");r.innerHTML="Address: Somethingorother street 11<br>Phone number: 123-456-78<br>Email: dramigo@dramigo.com",n.appendChild(r)}()})),t.appendChild(o);const i=document.createElement("button");i.setAttribute("class","nav__button"),i.innerHTML="Menu",i.addEventListener("click",(()=>{!function(){const e=document.querySelector("div#content");e.innerHTML="";const n=document.createElement("div");n.setAttribute("class","menucontainer container"),e.appendChild(n);const t=document.createElement("h1");t.innerHTML="Menu",n.appendChild(t);const r=document.createElement("p");r.innerHTML="American style borgler: 2$<br>Dr. Amigo's Special: 5$<br>Cheeseborgler: 2$<br>Double borgler: 5$",n.appendChild(r)}()})),t.appendChild(i)}(),n()})()})();