(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{GWfx:function(e,t,a){"use strict";a.r(t),a.d(t,"amplify_federated_sign_in",function(){return r});var i=a("hKmi"),n=a("Nt7R"),d=a("s1tr"),s=a("v4IS"),o=a("/vcS");const f=new n.a("amplify-federated-sign-in"),r=class{constructor(e){Object(i.k)(this,e),this.authState=d.a.SignIn,this.federated={}}componentWillLoad(){if(!s.a||"function"!=typeof s.a.configure)throw new Error(o.d);const{oauth:e={}}=s.a.configure();e.domain?this.federated.oauth_config=Object.assign(Object.assign({},this.federated.oauth_config),e):e.awsCognito&&(this.federated.oauth_config=Object.assign(Object.assign({},this.federated.oauth_config),e.awsCognito)),e.auth0&&(this.federated.auth0=Object.assign(Object.assign({},this.federated.auth0),e.auth0))}render(){return this.federated?Object.values(d.a).includes(this.authState)?(f.debug("federated Config is",this.federated),Object(i.i)("amplify-form-section",{"data-test":"federated-sign-in-section"},Object(i.i)("amplify-section",{"data-test":"federated-sign-in-body-section"},Object(i.i)("amplify-federated-buttons",{authState:this.authState,"data-test":"federated-sign-in-buttons",federated:this.federated})))):null:(f.debug("federated prop is empty. show nothing"),f.debug("federated={google_client_id: , facebook_app_id: , amazon_client_id}"),null)}}}}]);