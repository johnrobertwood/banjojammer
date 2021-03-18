!function(){function e(e){return function(e){if(Array.isArray(e))return t(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,n){if(!e)return;if("string"==typeof e)return t(e,n);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return t(e,n)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function t(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function n(e,t,n,r,a,i,s){try{var u=e[i](s),o=u.value}catch(l){return void n(l)}u.done?t(o):Promise.resolve(o).then(r,a)}function r(e){return function(){var t=this,r=arguments;return new Promise(function(a,i){var s=e.apply(t,r);function u(e){n(s,a,i,u,o,"next",e)}function o(e){n(s,a,i,u,o,"throw",e)}u(void 0)})}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function s(e,t,n){return t&&i(e.prototype,t),n&&i(e,n),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{VFVT:function(t,n,i){"use strict";i.r(n),i.d(n,"amplify_confirm_sign_in",function(){return g}),i.d(n,"amplify_confirm_sign_up",function(){return v}),i.d(n,"amplify_forgot_password",function(){return F}),i.d(n,"amplify_require_new_password",function(){return w}),i.d(n,"amplify_sign_in",function(){return I}),i.d(n,"amplify_sign_up",function(){return O}),i.d(n,"amplify_verify_contact",function(){return A});var u=i("hKmi"),o=i("JIIv"),l=i("Nt7R"),h=i("HzrR"),c=i("s1tr"),d=i("v4IS"),p=i("sPRy"),f=i("/vcS"),m=i("Y85I"),b=i("R3Op"),g=function(){function e(t){var n=this;a(this,e),Object(u.k)(this,t),this.handleSubmit=function(e){return n.confirm(e)},this.headerText=p.a.CONFIRM_SMS_CODE,this.submitButtonText=p.a.CONFIRM,this.handleAuthStateChange=m.d,this.formFields=[{type:"code",required:!0,handleInputChange:function(e){return n.handleCodeChange(e)}}],this.mfaOption=c.c.SMS,this.loading=!1}var t;return s(e,[{key:"componentWillLoad",value:function(){this.setup()}},{key:"userHandler",value:function(){this.setup()}},{key:"setup",value:function(){this.user&&this.user.challengeName===c.b.SoftwareTokenMFA&&(this.mfaOption=c.c.TOTP,this.headerText===p.a.CONFIRM_SMS_CODE&&(this.headerText=p.a.CONFIRM_TOTP_CODE))}},{key:"handleCodeChange",value:function(e){this.code=e.target.value}},{key:"confirm",value:(t=r(regeneratorRuntime.mark(function e(t){var n;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t&&t.preventDefault(),n=this.user.challengeName===c.b.SoftwareTokenMFA?c.b.SoftwareTokenMFA:null,d.a&&"function"==typeof d.a.confirmSignIn){e.next=4;break}throw new Error(f.d);case 4:return this.loading=!0,e.prev=5,e.next=8,d.a.confirmSignIn(this.user,this.code,n);case 8:return e.next=10,Object(b.a)(this.user,this.handleAuthStateChange);case 10:e.next=15;break;case 12:e.prev=12,e.t0=e.catch(5),Object(m.a)(e.t0);case 15:return e.prev=15,this.loading=!1,e.finish(15);case 18:case"end":return e.stop()}},e,this,[[5,12,15,18]])})),function(e){return t.apply(this,arguments)})},{key:"render",value:function(){var e=this;return Object(u.i)(u.b,null,Object(u.i)("amplify-form-section",{headerText:o.a.get(this.headerText),handleSubmit:this.handleSubmit,submitButtonText:o.a.get(this.submitButtonText),loading:this.loading,secondaryFooterContent:Object(u.i)("span",null,Object(u.i)("amplify-button",{variant:"anchor",onClick:function(){return e.handleAuthStateChange(c.a.SignIn)}},o.a.get(p.a.BACK_TO_SIGN_IN)))},Object(u.i)("amplify-auth-fields",{formFields:this.formFields})))}}],[{key:"watchers",get:function(){return{user:["userHandler"]}}}]),e}(),v=function(){function e(t){var n=this;a(this,e),Object(u.k)(this,t),this.handleSubmit=function(e){return n.confirmSignUp(e)},this.headerText=p.a.CONFIRM_SIGN_UP_HEADER_TEXT,this.submitButtonText=p.a.CONFIRM_SIGN_UP_SUBMIT_BUTTON_TEXT,this.formFields=[],this.handleAuthStateChange=m.d,this.usernameAlias="username",this.loading=!1,this.newFormFields=[],this.phoneNumber={countryDialCodeValue:f.q,phoneNumberValue:null}}var t,n;return s(e,[{key:"componentWillLoad",value:function(){this.setup()}},{key:"formFieldsHandler",value:function(){this.buildFormFields()}},{key:"userHandler",value:function(){this.setup()}},{key:"setup",value:function(){this.userInput=this.user&&this.user.username,this._signUpAttrs=this.user&&this.user.signUpAttrs,Object(m.c)(this.usernameAlias),this.buildFormFields()}},{key:"buildDefaultFormFields",value:function(){var e=this;this.newFormFields=[{type:""+this.usernameAlias,required:!0,handleInputChange:this.handleFormFieldInputChange(""+this.usernameAlias),value:this.userInput,disabled:!!this.userInput},{type:"code",label:o.a.get(p.a.CONFIRM_SIGN_UP_CODE_LABEL),placeholder:o.a.get(p.a.CONFIRM_SIGN_UP_CODE_PLACEHOLDER),required:!0,hint:Object(u.i)("div",null,o.a.get(p.a.CONFIRM_SIGN_UP_LOST_CODE)," ",Object(u.i)("amplify-button",{variant:"anchor",onClick:function(){return e.resendConfirmCode()}},o.a.get(p.a.CONFIRM_SIGN_UP_RESEND_CODE))),handleInputChange:this.handleFormFieldInputChange("code")}]}},{key:"buildFormFields",value:function(){var e=this;if(0===this.formFields.length)this.buildDefaultFormFields();else{var t=[];this.formFields.forEach(function(n){var r=Object.assign({},n);"code"===r.type&&(r.hint=Object(m.g)(r)?Object(u.i)("div",null,o.a.get(p.a.CONFIRM_SIGN_UP_LOST_CODE)," ",Object(u.i)("amplify-button",{variant:"anchor",onClick:function(){return e.resendConfirmCode()}},o.a.get(p.a.CONFIRM_SIGN_UP_RESEND_CODE))):r.hint),r.handleInputChange=function(t){return e.handleFormFieldInputWithCallback(t,n)},t.push(r)}),this.newFormFields=t}}},{key:"handleFormFieldInputChange",value:function(e){var t=this;switch(e){case"username":case"email":return function(e){return t.userInput=e.target.value};case"phone_number":return function(e){return Object(m.f)(e,t.phoneNumber)};case"code":return function(e){return t.code=e.target.value};default:return}}},{key:"setFieldValue",value:function(e){switch(e.type){case"username":case"email":this.userInput=void 0===e.value?"":e.value;break;case"phone_number":e.dialCode&&(this.phoneNumber.countryDialCodeValue=e.dialCode),this.phoneNumber.phoneNumberValue=e.value}}},{key:"handleFormFieldInputWithCallback",value:function(e,t){(t.handleInputChange?t.handleInputChange:function(e,t){t(e)})(e,this.handleFormFieldInputChange(t.type).bind(this))}},{key:"resendConfirmCode",value:(n=r(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(event&&event.preventDefault(),d.a&&"function"==typeof d.a.resendSignUp){e.next=2;break}throw new Error(f.d);case 2:if(e.prev=2,this.userInput){e.next=5;break}throw new Error(p.a.EMPTY_USERNAME);case 5:return this.userInput=this.userInput.trim(),e.next=8,d.a.resendSignUp(this.userInput);case 8:this.handleAuthStateChange(c.a.ConfirmSignUp),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(2),Object(m.a)(e.t0);case 14:case"end":return e.stop()}},e,this,[[2,11]])})),function(){return n.apply(this,arguments)})},{key:"confirmSignUp",value:(t=r(regeneratorRuntime.mark(function e(t){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t&&t.preventDefault(),d.a&&"function"==typeof d.a.confirmSignUp){e.next=2;break}throw new Error(f.d);case 2:switch(this.loading=!0,this.usernameAlias){case"phone_number":try{this.userInput=Object(m.b)(this.phoneNumber)}catch(n){Object(m.a)(n)}}if(e.prev=3,this.userInput){e.next=6;break}throw new Error(p.a.EMPTY_USERNAME);case 6:return this.userInput=this.userInput.trim(),e.next=9,d.a.confirmSignUp(this.userInput,this.code);case 9:if(e.sent){e.next=11;break}throw new Error(o.a.get(p.a.CONFIRM_SIGN_UP_FAILED));case 11:if(!this._signUpAttrs||!this._signUpAttrs.password||""===this._signUpAttrs.password){e.next=16;break}return e.next=14,Object(b.b)(this.userInput,this._signUpAttrs.password,this.handleAuthStateChange);case 14:e.next=17;break;case 16:this.handleAuthStateChange(c.a.SignIn);case 17:e.next=22;break;case 19:e.prev=19,e.t0=e.catch(3),Object(m.a)(e.t0);case 22:return e.prev=22,this.loading=!1,e.finish(22);case 25:case"end":return e.stop()}},e,this,[[3,19,22,25]])})),function(e){return t.apply(this,arguments)})},{key:"render",value:function(){var e=this;return Object(u.i)(u.b,null,Object(u.i)("amplify-form-section",{headerText:o.a.get(this.headerText),submitButtonText:o.a.get(this.submitButtonText),handleSubmit:this.handleSubmit,loading:this.loading,secondaryFooterContent:Object(u.i)("div",null,Object(u.i)("span",null,Object(u.i)("amplify-button",{variant:"anchor",onClick:function(){return e.handleAuthStateChange(c.a.SignIn)}},o.a.get(p.a.BACK_TO_SIGN_IN))))},Object(u.i)("amplify-auth-fields",{formFields:this.newFormFields})))}}],[{key:"watchers",get:function(){return{formFields:["formFieldsHandler"],user:["userHandler"]}}}]),e}(),y=new l.a("ForgotPassword"),F=function(){function e(t){var n=this;a(this,e),Object(u.k)(this,t),this.headerText=p.a.RESET_YOUR_PASSWORD,this.sendButtonText=p.a.SEND_CODE,this.submitButtonText=p.a.SUBMIT,this.formFields=[],this.handleSend=function(e){return n.send(e)},this.handleSubmit=function(e){return n.submit(e)},this.handleAuthStateChange=m.d,this.usernameAlias="username",this.delivery=null,this.loading=!1,this.phoneNumber={countryDialCodeValue:f.q,phoneNumberValue:null},this.newFormFields=[],this.forgotPasswordAttrs={userInput:"",password:"",code:""}}var t,n;return s(e,[{key:"componentWillLoad",value:function(){Object(m.c)(this.usernameAlias),this.buildFormFields()}},{key:"formFieldsHandler",value:function(){this.buildFormFields()}},{key:"buildFormFields",value:function(){var e=this;0===this.formFields.length?this.buildDefaultFormFields():this.formFields.forEach(function(t){var n=Object.assign({},t);n.handleInputChange=function(n){return e.handleFormFieldInputWithCallback(n,t)},e.newFormFields.push(n)})}},{key:"buildDefaultFormFields",value:function(){switch(this.usernameAlias){case"email":this.newFormFields=[{type:"email",required:!0,handleInputChange:this.handleFormFieldInputChange("email"),inputProps:{"data-test":"forgot-password-email-input"}}];break;case"phone_number":this.newFormFields=[{type:"phone_number",required:!0,handleInputChange:this.handleFormFieldInputChange("phone_number"),inputProps:{"data-test":"forgot-password-phone-number-input"}}];break;case"username":default:this.newFormFields=[{type:"username",required:!0,handleInputChange:this.handleFormFieldInputChange("username"),inputProps:{"data-test":"forgot-password-username-input"}}]}}},{key:"handleFormFieldInputChange",value:function(e){var t=this;switch(e){case"username":case"email":return function(e){return t.forgotPasswordAttrs.userInput=e.target.value};case"phone_number":return function(e){return Object(m.f)(e,t.phoneNumber)};case"password":case"code":return function(n){return t.forgotPasswordAttrs[e]=n.target.value};default:return}}},{key:"setFieldValue",value:function(e,t){switch(e.type){case"username":case"email":t.userInput=void 0===e.value?"":e.value;break;case"phone_number":e.dialCode&&(this.phoneNumber.countryDialCodeValue=e.dialCode),this.phoneNumber.phoneNumberValue=e.value;break;case"password":case"code":t[e.type]=void 0===e.value?"":e.value}}},{key:"handleFormFieldInputWithCallback",value:function(e,t){(t.handleInputChange?t.handleInputChange:function(e,t){t(e)})(e,this.handleFormFieldInputChange(t.type).bind(this))}},{key:"send",value:(n=r(regeneratorRuntime.mark(function e(t){var n;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t&&t.preventDefault(),d.a&&"function"==typeof d.a.forgotPassword){e.next=2;break}throw new Error(f.d);case 2:switch(this.loading=!0,this.usernameAlias){case"phone_number":try{this.forgotPasswordAttrs.userInput=Object(m.b)(this.phoneNumber)}catch(r){Object(m.a)(r)}}return e.prev=3,e.next=6,d.a.forgotPassword(this.forgotPasswordAttrs.userInput.trim());case 6:n=e.sent,y.debug(n),this.newFormFields=[{type:"code",required:!0,handleInputChange:this.handleFormFieldInputChange("code"),inputProps:{"data-test":"forgot-password-code-input"}},{type:"password",required:!0,handleInputChange:this.handleFormFieldInputChange("password"),label:o.a.get(p.a.NEW_PASSWORD_LABEL),placeholder:o.a.get(p.a.NEW_PASSWORD_PLACEHOLDER)}],this.delivery=n.CodeDeliveryDetails,e.next=13;break;case 10:e.prev=10,e.t0=e.catch(3),Object(m.a)(e.t0);case 13:return e.prev=13,this.loading=!1,e.finish(13);case 16:case"end":return e.stop()}},e,this,[[3,10,13,16]])})),function(e){return n.apply(this,arguments)})},{key:"submit",value:(t=r(regeneratorRuntime.mark(function e(t){var n,r,a,i,s;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t&&t.preventDefault(),d.a&&"function"==typeof d.a.forgotPasswordSubmit){e.next=2;break}throw new Error(f.d);case 2:return this.loading=!0,e.prev=3,n=this.forgotPasswordAttrs,r=n.userInput,a=n.code,i=n.password,e.next=10,d.a.forgotPasswordSubmit(r,a,i);case 10:s=e.sent,y.debug(s),this.handleAuthStateChange(c.a.SignIn),this.delivery=null,e.next=17;break;case 14:e.prev=14,e.t0=e.catch(3),Object(m.a)(e.t0);case 17:return e.prev=17,this.loading=!1,e.finish(17);case 20:case"end":return e.stop()}},e,this,[[3,14,17,20]])})),function(e){return t.apply(this,arguments)})},{key:"render",value:function(){var e=this,t=this.delivery?function(t){return e.handleSubmit(t)}:function(t){return e.handleSend(t)},n=this.delivery?this.submitButtonText:this.sendButtonText;return Object(u.i)(u.b,null,Object(u.i)("amplify-form-section",{headerText:o.a.get(this.headerText),handleSubmit:t,loading:this.loading,secondaryFooterContent:Object(u.i)("amplify-button",{variant:"anchor",onClick:function(){return e.handleAuthStateChange(c.a.SignIn)},"data-test":"forgot-password-back-to-sign-in-link"},o.a.get(p.a.BACK_TO_SIGN_IN)),testDataPrefix:"forgot-password",submitButtonText:o.a.get(n)},Object(u.i)("amplify-auth-fields",{formFields:this.newFormFields})))}}],[{key:"watchers",get:function(){return{formFields:["formFieldsHandler"]}}}]),e}(),C=new l.a("amplify-require-new-password"),w=function(){function t(e){var n=this;a(this,t),Object(u.k)(this,e),this.headerText=p.a.CHANGE_PASSWORD,this.submitButtonText=p.a.CHANGE_PASSWORD_ACTION,this.handleSubmit=function(e){return n.completeNewPassword(e)},this.handleAuthStateChange=m.d,this.formFields=[{type:c.e.Password,required:!0,handleInputChange:function(e){return n.handlePasswordChange(e)},label:o.a.get(p.a.NEW_PASSWORD_LABEL),placeholder:o.a.get(p.a.NEW_PASSWORD_PLACEHOLDER),inputProps:{"data-test":"require-new-password-password-input"}}],this.loading=!1,this.requiredAttributes={},this.newFormFields=this.formFields}var n,i;return s(t,[{key:"userHandler",value:function(){this.setCurrentUser()}},{key:"handleRequiredAttributeInputChange",value:function(e,t){this.requiredAttributes[e]=t.target.value}},{key:"setCurrentUser",value:(i=r(regeneratorRuntime.mark(function t(){var n,r=this;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(!this.user){t.next=4;break}this.currentUser=this.user,t.next=14;break;case 4:return t.prev=4,t.next=7,d.a.currentAuthenticatedUser();case 7:(n=t.sent)&&(this.currentUser=n),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(4),Object(m.a)(t.t0);case 14:this.currentUser&&this.currentUser.challengeParam&&this.currentUser.challengeParam.requiredAttributes&&this.currentUser.challengeParam.requiredAttributes.forEach(function(t){r.newFormFields=[].concat(e(r.newFormFields),[{type:t,required:!0,label:m.i[t].label,placeholder:m.i[t].placeholder,handleInputChange:function(e){return r.handleRequiredAttributeInputChange(t,e)},inputProps:{"data-test":"require-new-password-".concat(t,"-input")}}])});case 15:case"end":return t.stop()}},t,this,[[4,11]])})),function(){return i.apply(this,arguments)})},{key:"componentWillLoad",value:function(){return this.setCurrentUser()}},{key:"handlePasswordChange",value:function(e){this.password=e.target.value}},{key:"completeNewPassword",value:(n=r(regeneratorRuntime.mark(function e(t){var n;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t&&t.preventDefault(),d.a&&"function"==typeof d.a.completeNewPassword){e.next=2;break}throw new Error(f.d);case 2:return this.loading=!0,e.prev=3,e.next=6,d.a.completeNewPassword(this.currentUser,this.password,this.requiredAttributes);case 6:n=e.sent,e.t0=(C.debug("complete new password",n),n.challengeName),e.next=e.t0===c.b.SMSMFA?10:e.t0===c.b.MFASetup?12:14;break;case 10:return this.handleAuthStateChange(c.a.ConfirmSignIn,n),e.abrupt("break",16);case 12:return C.debug("TOTP setup",n.challengeParam),this.handleAuthStateChange(c.a.TOTPSetup,n),e.abrupt("break",16);case 14:return e.next=16,Object(b.a)(n,this.handleAuthStateChange);case 16:e.next=21;break;case 18:e.prev=18,e.t1=e.catch(3),Object(m.a)(e.t1);case 21:return e.prev=21,this.loading=!1,e.finish(21);case 24:case"end":return e.stop()}},e,this,[[3,18,21,24]])})),function(e){return n.apply(this,arguments)})},{key:"render",value:function(){var e=this;return Object(u.i)(u.b,null,Object(u.i)("amplify-form-section",{headerText:o.a.get(this.headerText),handleSubmit:this.handleSubmit,loading:this.loading,secondaryFooterContent:Object(u.i)("amplify-button",{variant:"anchor",onClick:function(){return e.handleAuthStateChange(c.a.SignIn)}},o.a.get(p.a.BACK_TO_SIGN_IN)),submitButtonText:o.a.get(this.submitButtonText)},Object(u.i)("amplify-auth-fields",{formFields:this.newFormFields})))}}],[{key:"watchers",get:function(){return{user:["userHandler"]}}}]),t}(),I=function(){function e(t){var n=this;a(this,e),Object(u.k)(this,t),this.handleSubmit=function(e){return n.signIn(e)},this.headerText=p.a.SIGN_IN_HEADER_TEXT,this.submitButtonText=p.a.SIGN_IN_ACTION,this.handleAuthStateChange=m.d,this.usernameAlias="username",this.formFields=[],this.hideSignUp=!1,this.newFormFields=[],this.loading=!1,this.phoneNumber={countryDialCodeValue:f.q,phoneNumberValue:null},this.signInAttributes={userInput:"",password:""}}var t;return s(e,[{key:"componentWillLoad",value:function(){Object(m.c)(this.usernameAlias),this.buildFormFields()}},{key:"formFieldsHandler",value:function(){this.buildFormFields()}},{key:"handleFormFieldInputChange",value:function(e){var t=this;switch(e){case"username":case"email":return function(e){return t.signInAttributes.userInput=e.target.value};case"phone_number":return function(e){return Object(m.f)(e,t.phoneNumber)};case"password":return function(e){return t.signInAttributes.password=e.target.value}}}},{key:"handleFormFieldInputWithCallback",value:function(e,t){(t.handleInputChange?t.handleInputChange:function(e,t){t(e)})(e,this.handleFormFieldInputChange(t.type).bind(this))}},{key:"signIn",value:(t=r(regeneratorRuntime.mark(function e(t){var n;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:switch(t&&t.preventDefault(),this.loading=!0,this.usernameAlias){case"phone_number":try{this.signInAttributes.userInput=Object(m.b)(this.phoneNumber)}catch(r){Object(m.a)(r)}}return n=this.signInAttributes.userInput.trim(),e.next=4,Object(b.b)(n,this.signInAttributes.password,this.handleAuthStateChange);case 4:this.loading=!1;case 5:case"end":return e.stop()}},e,this)})),function(e){return t.apply(this,arguments)})},{key:"buildDefaultFormFields",value:function(){var e=this,t=[];switch(this.usernameAlias){case"email":t.push({type:"email",required:!0,handleInputChange:this.handleFormFieldInputChange("email"),inputProps:{"data-test":"sign-in-email-input"}});break;case"phone_number":t.push({type:"phone_number",required:!0,handleInputChange:this.handleFormFieldInputChange("phone_number"),inputProps:{"data-test":"sign-in-phone-number-input"}});break;case"username":default:t.push({type:"username",required:!0,handleInputChange:this.handleFormFieldInputChange("username"),inputProps:{"data-test":"sign-in-username-input"}})}t.push({type:"password",hint:Object(u.i)("div",null,o.a.get(p.a.FORGOT_PASSWORD_TEXT)," ",Object(u.i)("amplify-button",{variant:"anchor",onClick:function(){return e.handleAuthStateChange(c.a.ForgotPassword)},"data-test":"sign-in-forgot-password-link"},o.a.get(p.a.RESET_PASSWORD_TEXT))),required:!0,handleInputChange:this.handleFormFieldInputChange("password"),inputProps:{"data-test":"sign-in-password-input"}}),this.newFormFields=[].concat(t)}},{key:"buildFormFields",value:function(){var e=this;if(0===this.formFields.length)this.buildDefaultFormFields();else{var t=[];this.formFields.forEach(function(n){var r=Object.assign({},n);"password"===r.type&&(r.hint=Object(m.g)(r)?Object(u.i)("div",null,o.a.get(p.a.FORGOT_PASSWORD_TEXT)," ",Object(u.i)("amplify-button",{variant:"anchor",onClick:function(){return e.handleAuthStateChange(c.a.ForgotPassword)},"data-test":"sign-in-forgot-password-link"},o.a.get(p.a.RESET_PASSWORD_TEXT))):r.hint),r.handleInputChange=function(t){return e.handleFormFieldInputWithCallback(t,n)},e.setFieldValue(r,e.signInAttributes),t.push(r)}),this.newFormFields=t}}},{key:"setFieldValue",value:function(e,t){switch(e.type){case"username":case"email":t.userInput=void 0===e.value?"":e.value;break;case"phone_number":e.dialCode&&(this.phoneNumber.countryDialCodeValue=e.dialCode),this.phoneNumber.phoneNumberValue=e.value;break;case"password":t.password=void 0===e.value?"":e.value}}},{key:"render",value:function(){var e=this;return Object(u.i)(u.b,null,Object(u.i)("amplify-form-section",{headerText:o.a.get(this.headerText),handleSubmit:this.handleSubmit,testDataPrefix:"sign-in"},Object(u.i)("div",{slot:"subtitle"},Object(u.i)("slot",{name:"header-subtitle"})),Object(u.i)("slot",{name:"federated-buttons"},Object(u.i)("amplify-federated-buttons",{handleAuthStateChange:this.handleAuthStateChange,federated:this.federated})),!Object(h.d)(this.federated)&&Object(u.i)("amplify-strike",null,"or"),Object(u.i)("amplify-auth-fields",{formFields:this.newFormFields}),Object(u.i)("div",{slot:"amplify-form-section-footer",class:"sign-in-form-footer"},Object(u.i)("slot",{name:"footer"},Object(u.i)("slot",{name:"secondary-footer-content"},this.hideSignUp?Object(u.i)("span",null):Object(u.i)("span",null,o.a.get(p.a.NO_ACCOUNT_TEXT)," ",Object(u.i)("amplify-button",{variant:"anchor",onClick:function(){return e.handleAuthStateChange(c.a.SignUp)},"data-test":"sign-in-create-account-link"},o.a.get(p.a.CREATE_ACCOUNT_TEXT)))),Object(u.i)("slot",{name:"primary-footer-content"},Object(u.i)("amplify-button",{type:"submit",disabled:this.loading,"data-test":"sign-in-sign-in-button"},this.loading?Object(u.i)("amplify-loading-spinner",null):Object(u.i)("span",null,o.a.get(this.submitButtonText))))))))}}],[{key:"watchers",get:function(){return{formFields:["formFieldsHandler"]}}}]),e}();I.style=":host{--footer-size:var(--amplify-text-sm);--footer-color:var(--amplify-grey);--footer-font-family:var(--amplify-font-family);--font-weight:var(--amplify-font-weight)}.sign-in-form-footer{font-family:var(--footer-font-family);font-size:var(--footer-size);color:var(--footer-color);font-weight:--font-weight;display:-ms-flexbox;display:flex;-ms-flex-direction:column-reverse;flex-direction:column-reverse;-ms-flex-align:center;align-items:center;-ms-flex-pack:distribute;justify-content:space-around}.sign-in-form-footer amplify-button{margin-bottom:0.625rem}@media (min-width: 672px){.sign-in-form-footer{display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;-ms-flex-pack:justify;justify-content:space-between;-ms-flex-align:baseline;align-items:baseline}.sign-in-form-footer amplify-button{margin-bottom:0}}.sign-in-form-footer *+*{margin-bottom:15px}";var O=function(){function e(t){var n=this;a(this,e),Object(u.k)(this,t),this.handleSubmit=function(e){return n.signUp(e)},this.headerText=p.a.SIGN_UP_HEADER_TEXT,this.submitButtonText=p.a.SIGN_UP_SUBMIT_BUTTON_TEXT,this.haveAccountText=p.a.SIGN_UP_HAVE_ACCOUNT_TEXT,this.signInText=p.a.SIGN_IN_TEXT,this.formFields=[],this.handleAuthStateChange=m.d,this.usernameAlias="username",this.newFormFields=[],this.phoneNumber={countryDialCodeValue:f.q,phoneNumberValue:null},this.loading=!1,this.signUpAttributes={username:"",password:"",attributes:{}}}var t;return s(e,[{key:"handleFormFieldInputChange",value:function(e){var t=this;switch(e){case"username":return function(e){return t.signUpAttributes.username=e.target.value};case"password":return function(e){return t.signUpAttributes.password=e.target.value};case"email":return function(e){return t.signUpAttributes.attributes.email=e.target.value};case"phone_number":return function(e){return Object(m.f)(e,t.phoneNumber)};default:return function(n){return t.signUpAttributes.attributes[e]=n.target.value}}}},{key:"handleFormFieldInputWithCallback",value:function(e,t){(t.handleInputChange?t.handleInputChange:function(e,t){t(e)})(e,this.handleFormFieldInputChange(t.type).bind(this))}},{key:"signUp",value:(t=r(regeneratorRuntime.mark(function e(t){var n,r;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t&&t.preventDefault(),d.a&&"function"==typeof d.a.signUp){e.next=2;break}throw new Error(f.d);case 2:if(this.loading=!0,this.phoneNumber.phoneNumberValue)try{this.signUpAttributes.attributes.phone_number=Object(m.b)(this.phoneNumber)}catch(a){Object(m.a)(a)}switch(this.usernameAlias){case"email":case"phone_number":this.signUpAttributes.username=this.signUpAttributes.attributes[this.usernameAlias]}if(e.prev=4,this.signUpAttributes.username){e.next=7;break}throw new Error(p.a.EMPTY_USERNAME);case 7:if(!(this.signUpAttributes.username.indexOf(" ")>=0)){e.next=9;break}throw new Error(p.a.USERNAME_REMOVE_WHITESPACE);case 9:if(this.signUpAttributes.password===this.signUpAttributes.password.trim()){e.next=11;break}throw new Error(p.a.PASSWORD_REMOVE_WHITESPACE);case 11:return e.next=13,d.a.signUp(this.signUpAttributes);case 13:if(n=e.sent){e.next=16;break}throw new Error(p.a.SIGN_UP_FAILED);case 16:if(!n.userConfirmed){e.next=21;break}return e.next=19,Object(b.b)(this.signUpAttributes.username,this.signUpAttributes.password,this.handleAuthStateChange);case 19:e.next=23;break;case 21:r=Object.assign({},this.signUpAttributes),this.handleAuthStateChange(c.a.ConfirmSignUp,Object.assign(Object.assign({},n.user),{signUpAttrs:r}));case 23:e.next=28;break;case 25:e.prev=25,e.t0=e.catch(4),Object(m.a)(e.t0);case 28:return e.prev=28,this.loading=!1,e.finish(28);case 31:case"end":return e.stop()}},e,this,[[4,25,28,31]])})),function(e){return t.apply(this,arguments)})},{key:"buildDefaultFormFields",value:function(){switch(this.usernameAlias){case"email":this.newFormFields=[{type:"email",placeholder:o.a.get(p.a.SIGN_UP_EMAIL_PLACEHOLDER),required:!0,handleInputChange:this.handleFormFieldInputChange("email"),inputProps:{"data-test":"sign-up-email-input"}},{type:"password",placeholder:o.a.get(p.a.SIGN_UP_PASSWORD_PLACEHOLDER),required:!0,handleInputChange:this.handleFormFieldInputChange("password"),inputProps:{"data-test":"sign-up-password-input"}},{type:"phone_number",required:!0,handleInputChange:this.handleFormFieldInputChange("phone_number"),inputProps:{"data-test":"sign-up-phone-number-input"}}];break;case"phone_number":this.newFormFields=[{type:"phone_number",required:!0,handleInputChange:this.handleFormFieldInputChange("phone_number"),inputProps:{"data-test":"sign-up-phone-number-input"}},{type:"password",placeholder:o.a.get(p.a.SIGN_UP_PASSWORD_PLACEHOLDER),required:!0,handleInputChange:this.handleFormFieldInputChange("password"),inputProps:{"data-test":"sign-up-password-input"}},{type:"email",placeholder:o.a.get(p.a.SIGN_UP_EMAIL_PLACEHOLDER),required:!0,handleInputChange:this.handleFormFieldInputChange("email"),inputProps:{"data-test":"sign-up-email-input"}}];break;case"username":default:this.newFormFields=[{type:"username",placeholder:o.a.get(p.a.SIGN_UP_USERNAME_PLACEHOLDER),required:!0,handleInputChange:this.handleFormFieldInputChange("username"),inputProps:{"data-test":"sign-up-username-input"}},{type:"password",placeholder:o.a.get(p.a.SIGN_UP_PASSWORD_PLACEHOLDER),required:!0,handleInputChange:this.handleFormFieldInputChange("password"),inputProps:{"data-test":"sign-up-password-input"}},{type:"email",placeholder:o.a.get(p.a.SIGN_UP_EMAIL_PLACEHOLDER),required:!0,handleInputChange:this.handleFormFieldInputChange("email"),inputProps:{"data-test":"sign-up-email-input"}},{type:"phone_number",required:!0,handleInputChange:this.handleFormFieldInputChange("phone_number"),inputProps:{"data-test":"sign-up-phone-number-input"}}]}}},{key:"buildFormFields",value:function(){var e=this;if(0===this.formFields.length)this.buildDefaultFormFields();else{var t=[];this.formFields.forEach(function(n){var r=Object.assign({},n);r.handleInputChange=function(t){return e.handleFormFieldInputWithCallback(t,n)},e.setFieldValue(n,e.signUpAttributes),t.push(r)}),this.newFormFields=t}}},{key:"setFieldValue",value:function(e,t){switch(e.type){case"username":t.username=void 0===e.value?"":e.value;break;case"password":t.password=void 0===e.value?"":e.value;break;case"email":t.attributes.email=e.value;break;case"phone_number":e.dialCode&&(this.phoneNumber.countryDialCodeValue=e.dialCode),this.phoneNumber.phoneNumberValue=e.value;break;default:t.attributes[e.type]=e.value}}},{key:"componentWillLoad",value:function(){Object(m.c)(this.usernameAlias),this.buildFormFields()}},{key:"formFieldsHandler",value:function(){this.buildFormFields()}},{key:"render",value:function(){var e=this;return Object(u.i)(u.b,null,Object(u.i)("amplify-form-section",{headerText:o.a.get(this.headerText),handleSubmit:this.handleSubmit,testDataPrefix:"sign-up"},Object(u.i)("div",{slot:"subtitle"},Object(u.i)("slot",{name:"header-subtitle"})),Object(u.i)("amplify-auth-fields",{formFields:this.newFormFields}),Object(u.i)("div",{class:"sign-up-form-footer",slot:"amplify-form-section-footer"},Object(u.i)("slot",{name:"footer"},Object(u.i)("slot",{name:"secondary-footer-content"},Object(u.i)("span",null,o.a.get(this.haveAccountText)," ",Object(u.i)("amplify-button",{variant:"anchor",onClick:function(){return e.handleAuthStateChange(c.a.SignIn)},"data-test":"sign-up-sign-in-link"},o.a.get(this.signInText)))),Object(u.i)("slot",{name:"primary-footer-content"},Object(u.i)("amplify-button",{type:"submit","data-test":"sign-up-create-account-button"},this.loading?Object(u.i)("amplify-loading-spinner",null):Object(u.i)("span",null,o.a.get(this.submitButtonText))))))))}}],[{key:"watchers",get:function(){return{formFields:["formFieldsHandler"]}}}]),e}();O.style=":host{--footer-font-family:var(--amplify-font-family);--footer-font-size:var(--amplify-text-sm);--footer-color:var(--amplify-grey);--font-weight:var(--amplify-font-weight)}.sign-up-form-footer{font-family:var(--footer-font-family);font-size:var(--footer-font-size);color:var(--footer-color);font-weight:--font-weight;display:-ms-flexbox;display:flex;-ms-flex-direction:column-reverse;flex-direction:column-reverse;-ms-flex-align:center;align-items:center;-ms-flex-pack:distribute;justify-content:space-around}.sign-up-form-footer amplify-button{margin-bottom:0.625rem}@media (min-width: 672px){.sign-up-form-footer{display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;-ms-flex-pack:justify;justify-content:space-between;-ms-flex-align:baseline;align-items:baseline}.sign-up-form-footer amplify-button{margin-bottom:0}}.sign-up-form-footer *+*{margin-bottom:15px}";var _=new l.a("AmplifyVerifyContact"),A=function(){function e(t){a(this,e),Object(u.k)(this,t),this.handleAuthStateChange=m.d,this.loading=!1}var t,n;return s(e,[{key:"handleSubmit",value:function(e){e.preventDefault(),this.verifyAttr?this.submit(this.code):this.verify(this.contact)}},{key:"submit",value:(n=r(regeneratorRuntime.mark(function e(t){var n,r;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(n=this.verifyAttr,d.a&&"function"==typeof d.a.verifyCurrentUserAttributeSubmit){e.next=3;break}throw new Error(f.d);case 3:return this.loading=!0,e.prev=4,e.next=7,d.a.verifyCurrentUserAttributeSubmit(n,t);case 7:r=e.sent,_.debug(r),this.handleAuthStateChange(c.a.SignedIn,this.user),this.verifyAttr=null,e.next=14;break;case 11:e.prev=11,e.t0=e.catch(4),Object(m.a)(e.t0),_.error(e.t0);case 14:return e.prev=14,this.loading=!1,e.finish(14);case 17:case"end":return e.stop()}},e,this,[[4,11,14,17]])})),function(e){return n.apply(this,arguments)})},{key:"verify",value:(t=r(regeneratorRuntime.mark(function e(t){var n;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!t){e.next=19;break}if(d.a&&"function"==typeof d.a.verifyCurrentUserAttribute){e.next=3;break}throw new Error(f.d);case 3:return this.loading=!0,e.prev=4,e.next=7,d.a.verifyCurrentUserAttribute(t);case 7:n=e.sent,_.debug(n),this.verifyAttr=t,e.next=14;break;case 11:e.prev=11,e.t0=e.catch(4),Object(m.a)(e.t0),_.error(e.t0);case 14:return e.prev=14,this.loading=!1,e.finish(14);case 17:e.next=20;break;case 19:_.error("Neither Email nor Phone Number selected");case 20:case"end":return e.stop()}},e,this,[[4,11,14,17]])})),function(e){return t.apply(this,arguments)})},{key:"handleInputChange",value:function(e){var t=e.target.name;"code"===t?this.code=e.target.value:"contact"===t&&(this.contact=e.target.value)}},{key:"renderSubmit",value:function(){var e=this;return Object(u.i)("div",null,Object(u.i)("amplify-input",{inputProps:{autocomplete:"off","data-test":"verify-contact-code-input"},name:"code",placeholder:o.a.get(p.a.CODE_PLACEHOLDER),handleInputChange:function(t){return e.handleInputChange(t)}}))}},{key:"renderVerify",value:function(){var e=this,t=this.user;if(!t)return _.debug("No user to verify"),null;var n=t.unverified;if(!n)return _.debug("Unverified variable does not exist on user"),null;var r=n.email,a=n.phone_number;return Object(u.i)("div",null,r&&Object(u.i)("amplify-radio-button",{label:o.a.get(p.a.VERIFY_CONTACT_EMAIL_LABEL),key:"email",name:"contact",value:"email",handleInputChange:function(t){return e.handleInputChange(t)},inputProps:{"data-test":"verify-contact-email-radio"}}),a&&Object(u.i)("amplify-radio-button",{label:o.a.get(p.a.VERIFY_CONTACT_PHONE_LABEL),key:"phone_number",name:"contact",value:"phone_number",handleInputChange:function(t){return e.handleInputChange(t)},inputProps:{"data-test":"verify-contact-email-radio"}}))}},{key:"render",value:function(){var e=this;return Object(u.i)(u.b,null,Object(u.i)("amplify-form-section",{handleSubmit:function(t){return e.handleSubmit(t)},headerText:o.a.get(p.a.VERIFY_CONTACT_HEADER_TEXT),loading:this.loading,secondaryFooterContent:Object(u.i)("span",null,Object(u.i)("amplify-button",{variant:"anchor",onClick:function(){return e.handleAuthStateChange(c.a.SignedIn,e.user)}},"Skip")),submitButtonText:o.a.get(this.verifyAttr?p.a.VERIFY_CONTACT_SUBMIT_LABEL:p.a.VERIFY_CONTACT_VERIFY_LABEL)},this.verifyAttr?this.renderSubmit():this.renderVerify()))}}]),e}()}}])}();