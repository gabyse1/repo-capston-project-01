parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"KIzB":[function(require,module,exports) {
var t=document.querySelector("#button__menu"),e=document.querySelector("#nav__menu"),o=document.querySelector("#logo"),n=!1,a=function t(){e.classList.toggle("nav__menu-modal"),e.removeEventListener("animationend",t),e.style="",n=!1},l=function(){n?(e.style.animation="modalFadeOut 500ms forwards",t.classList.toggle("button__menu-modal"),o.classList.toggle("button__logo-modal"),e.addEventListener("animationend",a)):(e.style.animation="modalFadeIn 500ms forwards",e.classList.toggle("nav__menu-modal"),t.classList.toggle("button__menu-modal"),o.classList.toggle("button__logo-modal"),n=!0)};t.addEventListener("click",l);
},{}]},{},["KIzB"], null)
//# sourceMappingURL=/main.1031918f.js.map