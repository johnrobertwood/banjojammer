(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{Kukj:function(t,e,r){"use strict";r.r(e),r.d(e,"amplify_s3_text",function(){return d});var a=r("bRKV"),o=r("Nt7R"),i=r("JIIv"),c=r("H8iN"),n=r("vbTL"),l=(r("/vcS"),r("l1VB"),r("Y0ez"));const s=new o.a("S3Text"),d=class{constructor(t){Object(a.k)(this,t),this.contentType="text/*",this.level=c.a.Public,this.fallbackText=n.a.TEXT_FALLBACK_CONTENT}async watchHandler(){await this.load()}async componentWillLoad(){await this.load()}async load(){const{path:t,textKey:e,body:r,contentType:a,level:o,track:i,identityId:c}=this;if(!e&&!t)return void s.debug("empty textKey and path");const n=e||t;s.debug("loading "+n+"..."),r&&await Object(l.e)(e,r,o,i,a,s);try{this.src=await Object(l.a)(n,o,i,c,s)}catch(d){throw s.debug(d),new Error(d)}}render(){return Object(a.i)("div",null,Object(a.i)("div",{class:"text-container"},this.src?Object(a.i)("pre",null,this.src):Object(a.i)("pre",null,i.a.get(this.fallbackText))))}static get watchers(){return{textKey:["watchHandler"],body:["watchHandler"]}}};d.style=":host{--container-color:var(--amplify-smoke-white);--border-color:var(--amplify-light-grey);--font-size:var(--amplify-text-md);--text-color:var(--amplify-secondary-color)}.text-container{background-color:var(--container-color);border:1px solid var(--border-color);border-radius:5px;margin-bottom:10px}pre{display:block;margin:0.5rem 0;padding:0.5rem;line-height:1rem;max-height:50rem;font-size:var(--font-size);color:var(--text-color);word-break:break-all;overflow-y:scroll;overflow-x:auto}"}}]);