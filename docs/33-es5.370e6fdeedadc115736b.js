!function(){function e(e,t,n,r,i,a,c){try{var o=e[a](c),s=o.value}catch(u){return void n(u)}o.done?t(s):Promise.resolve(s).then(r,i)}function t(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{"/MiJ":function(n,r,i){"use strict";i.r(r),i.d(r,"amplify_s3_text_picker",function(){return f});var a=i("bRKV"),c=i("Nt7R"),o=i("JIIv"),s=i("H8iN"),u=i("vbTL"),l=(i("/vcS"),i("l1VB"),i("Y0ez")),h=new c.a("S3TextPicker"),f=function(){function n(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,n),Object(a.k)(this,e),this.contentType="text/*",this.level=s.a.Public,this.fallbackText=u.a.PICKER_TEXT}var r,i,c,f,p;return r=n,(i=[{key:"handleInput",value:(f=regeneratorRuntime.mark(function e(t){var n,r,i,a,c,o,s;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(n=t.target.files[0],r=this.path,i=void 0===r?"":r,a=this.level,c=this.fileToKey,o=this.track,s=i+Object(l.b)(n,c),n){e.next=3;break}throw new Error("No file was selected");case 3:return e.prev=3,e.next=6,Object(l.e)(s,n,a,o,n.type,h);case 6:this.src=s,e.next=12;break;case 9:throw e.prev=9,e.t0=e.catch(3),h.debug(e.t0),new Error(e.t0);case 12:case"end":return e.stop()}},e,this,[[3,9]])}),p=function(){var t=this,n=arguments;return new Promise(function(r,i){var a=f.apply(t,n);function c(t){e(a,r,i,c,o,"next",t)}function o(t){e(a,r,i,c,o,"throw",t)}c(void 0)})},function(e){return p.apply(this,arguments)})},{key:"render",value:function(){var e=this;return Object(a.i)(a.b,null,Object(a.i)("amplify-s3-text",{textKey:this.src,path:this.path,level:this.level,track:this.track,identityId:this.identityId,contentType:this.contentType,fallbackText:o.a.get(this.fallbackText)}),Object(a.i)("amplify-picker",{inputHandler:function(t){return e.handleInput(t)},acceptValue:"text/*"}))}}])&&t(r.prototype,i),c&&t(r,c),n}()}}])}();