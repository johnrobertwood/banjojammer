!function(){function e(e,n){for(var t=0;t<n.length;t++){var a=n[t];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{"2uVw":function(n,t,a){"use strict";a.r(t),a.d(t,"amplify_greetings",function(){return o});var l=a("bRKV"),i=(a("s1tr"),a("vbTL"),a("/vcS"),a("xtuj")),o=function(){function n(e){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n),Object(l.k)(this,e),this.username=null,this.logo=null,this.handleAuthStateChange=i.d}var t,a,o;return t=n,(a=[{key:"render",value:function(){return Object(l.i)("header",{class:"greetings"},Object(l.i)("span",{class:"logo"},Object(l.i)("slot",{name:"logo"},this.logo&&Object(l.i)("span",null,this.logo))),Object(l.i)("span",{class:"nav"},Object(l.i)("slot",{name:"nav"},Object(l.i)("amplify-nav",null,this.username&&Object(l.i)("slot",{name:"greetings-message"},Object(l.i)("span",null,"Hello, ",this.username)),Object(l.i)("amplify-sign-out",{handleAuthStateChange:this.handleAuthStateChange})))))}}])&&e(t.prototype,a),o&&e(t,o),n}();o.style=":host{--background-color:var(--amplify-white);--border-color:var(--amplify-light-grey);--font-family:var(--amplify-font-family)}.greetings{display:-ms-flexbox;display:flex;border:1px solid transparent;background-color:var(--background-color);border-color:var(--border-color);padding:0.625rem;font-family:var(--font-family);-ms-flex-pack:justify;justify-content:space-between}.nav{display:-ms-flexbox;display:flex;-ms-flex-item-align:center;align-self:center}.logo{display:-ms-flexbox;display:flex;-ms-flex-item-align:center;align-self:center;justify-self:flex-start}amplify-sign-out{margin-left:1rem}"}}])}();