(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{"/MiJ":function(t,e,i){"use strict";i.r(e),i.d(e,"amplify_s3_text_picker",function(){return p});var c=i("hKmi"),a=i("Nt7R"),n=i("JIIv"),s=i("H8iN"),l=i("sPRy"),r=(i("/vcS"),i("l1VB"),i("Y0ez"));const h=new a.a("S3TextPicker"),p=class{constructor(t){Object(c.k)(this,t),this.contentType="text/*",this.level=s.a.Public,this.fallbackText=l.a.PICKER_TEXT}async handleInput(t){const e=t.target.files[0],{path:i="",level:c,fileToKey:a,track:n}=this,s=i+Object(r.b)(e,a);if(!e)throw new Error("No file was selected");try{await Object(r.e)(s,e,c,n,e.type,h),this.src=s}catch(l){throw h.debug(l),new Error(l)}}render(){return Object(c.i)(c.b,null,Object(c.i)("amplify-s3-text",{textKey:this.src,path:this.path,level:this.level,track:this.track,identityId:this.identityId,contentType:this.contentType,fallbackText:n.a.get(this.fallbackText)}),Object(c.i)("amplify-picker",{inputHandler:t=>this.handleInput(t),acceptValue:"text/*"}))}}}}]);