!function(){function t(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function e(t,e){for(var n=0;n<e.length;n++){var a=e[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}function n(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{"4pA8":function(e,a,i){"use strict";i.r(a),i.d(a,"amplify_federated_buttons",function(){return d}),i.d(a,"amplify_strike",function(){return f});var o=i("bRKV"),r=i("HzrR"),u=i("s1tr"),l=i("v4IS"),c=(i("vbTL"),i("/vcS")),h=i("xtuj"),d=function(){function e(n){t(this,e),Object(o.k)(this,n),this.authState=u.a.SignIn,this.federated={},this.handleAuthStateChange=h.d}return n(e,[{key:"componentWillLoad",value:function(){if(!l.a||"function"!=typeof l.a.configure)throw new Error(c.d);var t=l.a.configure().oauth,e=void 0===t?{}:t;e.domain?this.federated.oauthConfig=Object.assign(Object.assign({},this.federated.oauthConfig),e):e.awsCognito&&(this.federated.oauthConfig=Object.assign(Object.assign({},this.federated.oauthConfig),e.awsCognito)),e.auth0&&(this.federated.auth0Config=Object.assign(Object.assign({},this.federated.auth0Config),e.auth0))}},{key:"render",value:function(){if(!Object.values(u.a).includes(this.authState))return null;if(Object(r.d)(this.federated))return null;var t=this.federated,e=t.amazonClientId,n=t.auth0Config,a=t.facebookAppId,i=t.googleClientId,l=t.oauthConfig;return Object(o.i)("div",null,i&&Object(o.i)("div",null,Object(o.i)("amplify-google-button",{clientId:i,handleAuthStateChange:this.handleAuthStateChange})),a&&Object(o.i)("div",null,Object(o.i)("amplify-facebook-button",{appId:a,handleAuthStateChange:this.handleAuthStateChange})),e&&Object(o.i)("div",null,Object(o.i)("amplify-amazon-button",{clientId:e,handleAuthStateChange:this.handleAuthStateChange})),l&&Object(o.i)("div",null,Object(o.i)("amplify-oauth-button",{config:l})),n&&Object(o.i)("div",null,Object(o.i)("amplify-auth0-button",{config:n,handleAuthStateChange:this.handleAuthStateChange})))}}]),e}(),f=function(){function e(n){t(this,e),Object(o.k)(this,n)}return n(e,[{key:"render",value:function(){return Object(o.i)("span",{class:"strike-content"},Object(o.i)("slot",null))}}]),e}();f.style=".sc-amplify-strike-h{--color:var(--amplify-grey);--border-color:var(--amplify-light-grey);--content-background:var(--amplify-white);display:block;width:100%;text-align:center;border-bottom:1px solid var(--border-color);line-height:0.1em;margin:32px 0;color:var(--color)}.strike-content.sc-amplify-strike{background:var(--content-background);padding:0 25px;font-size:var(--amplify-text-sm);font-weight:500}"}}])}();