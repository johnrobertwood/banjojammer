!function(){function t(t,e,a,n,i,r,s){try{var o=t[r](s),u=o.value}catch(c){return void a(c)}o.done?e(u):Promise.resolve(u).then(n,i)}function e(e){return function(){var a=this,n=arguments;return new Promise(function(i,r){var s=e.apply(a,n);function o(e){t(s,i,r,o,u,"next",e)}function u(e){t(s,i,r,o,u,"throw",e)}o(void 0)})}}function a(t,e){for(var a=0;a<e.length;a++){var n=e[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{HaBs:function(t,n,i){"use strict";i.r(n),i.d(n,"amplify_authenticator",function(){return p});var r=i("bRKV"),s=i("Nt7R"),o=i("Qycn"),u=i("s1tr"),c=i("TESy"),h=i("v4IS"),l=(i("vbTL"),i("/vcS")),f=i("xtuj"),d=i("TAxe"),g=new s.a("Authenticator"),p=function(){function t(e){var a=this;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),Object(r.k)(this,e),this.initialAuthState=u.a.SignIn,this.handleAuthStateChange=function(){},this.authState=u.a.Loading,this.toastMessage="",this.handleExternalAuthEvent=function(t){var e=t.payload;switch(e.event){case"cognitoHostedUI":case"signIn":Object(d.a)(e.data,f.d);break;case"cognitoHostedUI_failure":case"parsingUrl_failure":case"signOut":case"customGreetingSignOut":return Object(f.d)(a.initialAuthState)}},this.handleToastEvent=function(t){var e=t.payload;switch(e.event){case l.h:e.message&&(a.toastMessage=e.message)}}}var n,i,s,p,m,b;return n=t,(i=[{key:"componentWillLoad",value:(b=e(regeneratorRuntime.mark(function t(){var e,a=this;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(Object(f.h)(function(t,e){a.onAuthStateChange(t,e),a.toastMessage=""}),o.a.listen(l.i,this.handleToastEvent),o.a.listen(l.a,this.handleExternalAuthEvent),Object(c.j)("amplify-authenticator"),e=localStorage.getItem(l.f),localStorage.removeItem(l.f),t.t0="true"!==e,!t.t0){t.next=7;break}return t.next=7,this.checkUser();case 7:case"end":return t.stop()}},t,this)})),function(){return b.apply(this,arguments)})},{key:"checkUser",value:(m=e(regeneratorRuntime.mark(function t(){var a=this;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(h.a&&"function"==typeof h.a.currentAuthenticatedUser){t.next=2;break}throw new Error(l.d);case 2:return t.abrupt("return",h.a.currentAuthenticatedUser().then(function(t){Object(f.d)(u.a.SignedIn,t)}).catch(e(regeneratorRuntime.mark(function t(){var e;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:e=null;try{e=localStorage.getItem(l.l)}catch(n){g.debug("Failed to get the auth state from local storage",n)}if(t.prev=2,t.t0=e===u.a.SignedIn,!t.t0){t.next=7;break}return t.next=7,h.a.signOut();case 7:Object(f.d)(a.initialAuthState),t.next=13;break;case 10:t.prev=10,t.t1=t.catch(2),g.debug("Failed to sign out",t.t1);case 13:case"end":return t.stop()}},t,null,[[2,10]])}))));case 3:case"end":return t.stop()}},t)})),function(){return m.apply(this,arguments)})},{key:"onAuthStateChange",value:(p=e(regeneratorRuntime.mark(function t(e,a){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(void 0!==e){t.next=2;break}return t.abrupt("return",g.error("nextAuthState cannot be undefined"));case 2:g.info("Inside onAuthStateChange Method current authState:",this.authState),this.authState=e===u.a.SignedOut?this.initialAuthState:e,this.authData=a,this.authData&&g.log("Auth Data was set:",this.authData),this.authState===e&&(this.handleAuthStateChange(this.authState,this.authData),g.info("authState has been updated to "+this.authState));case 3:case"end":return t.stop()}},t,this)})),function(t,e){return p.apply(this,arguments)})},{key:"renderAuthComponent",value:function(t){switch(t){case u.a.SignIn:return Object(r.i)("slot",{name:"sign-in"},Object(r.i)("amplify-sign-in",{federated:this.federated,usernameAlias:this.usernameAlias}));case u.a.ConfirmSignIn:return Object(r.i)("slot",{name:"confirm-sign-in"},Object(r.i)("amplify-confirm-sign-in",{user:this.authData}));case u.a.SignUp:return Object(r.i)("slot",{name:"sign-up"},Object(r.i)("amplify-sign-up",{usernameAlias:this.usernameAlias}));case u.a.ConfirmSignUp:return Object(r.i)("slot",{name:"confirm-sign-up"},Object(r.i)("amplify-confirm-sign-up",{user:this.authData,usernameAlias:this.usernameAlias}));case u.a.ForgotPassword:return Object(r.i)("slot",{name:"forgot-password"},Object(r.i)("amplify-forgot-password",{usernameAlias:this.usernameAlias}));case u.a.ResetPassword:return Object(r.i)("slot",{name:"require-new-password"},Object(r.i)("amplify-require-new-password",{user:this.authData}));case u.a.VerifyContact:return Object(r.i)("slot",{name:"verify-contact"},Object(r.i)("amplify-verify-contact",{user:this.authData}));case u.a.TOTPSetup:return Object(r.i)("slot",{name:"totp-setup"},Object(r.i)("amplify-totp-setup",{user:this.authData}));case u.a.Loading:return Object(r.i)("slot",{name:"loading"},Object(r.i)("div",null,"Loading..."));case u.a.SignedIn:return[Object(r.i)("slot",{name:"greetings"}),Object(r.i)("slot",null)];default:throw new Error("Unhandled auth state: "+t)}}},{key:"componentWillUnload",value:function(){return o.a.remove(l.a,this.handleExternalAuthEvent),o.a.remove(l.i,this.handleToastEvent),f.h}},{key:"render",value:function(){var t=this;return Object(r.i)(r.b,null,this.toastMessage?Object(r.i)("amplify-toast",{message:this.toastMessage,handleClose:function(){t.toastMessage=""},"data-test":"authenticator-error"}):null,this.authState===u.a.SignedIn?this.renderAuthComponent(this.authState):Object(r.i)("div",{class:"auth-container"},this.renderAuthComponent(this.authState)))}}])&&a(n.prototype,i),s&&a(n,s),t}();p.style=":host{--background-color:var(--amplify-background-color);--width:28.75rem;--min-width:20rem;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;--box-shadow:1px 1px 4px 0 rgba(0, 0, 0, 0.15);--border-radius:6px;--padding:35px 40px;--margin-bottom:20px;--container-height:100vh;--container-display:flex;--container-justify:center;--container-align:center}.auth-container{display:var(--container-display);-ms-flex-pack:var(--container-justify);justify-content:var(--container-justify);-ms-flex-align:var(--container-align);align-items:var(--container-align);min-height:var(--container-height)}"}}])}();