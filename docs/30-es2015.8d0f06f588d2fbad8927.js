(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{GV60:function(t,e,i){"use strict";i.r(e),i.d(e,"amplify_s3_album",function(){return w});var r,s=i("bRKV"),a=i("Nt7R"),o=i("HzrR"),n=i("JIIv"),l=i("H8iN"),c=i("vbTL"),m=i("/vcS"),h=i("l1VB"),p=i("Y0ez"),d=new Uint8Array(16);function y(){if(!r&&!(r="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!=typeof msCrypto&&"function"==typeof msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto)))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return r(d)}const u=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;function b(t){return"string"==typeof t&&u.test(t)}for(var f=[],g=0;g<256;++g)f.push((g+256).toString(16).substr(1));function k(t,e,i){var r=(t=t||{}).random||(t.rng||y)();if(r[6]=15&r[6]|64,r[8]=63&r[8]|128,e){i=i||0;for(var s=0;s<16;++s)e[i+s]=r[s];return e}return function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,i=(f[t[e+0]]+f[t[e+1]]+f[t[e+2]]+f[t[e+3]]+"-"+f[t[e+4]]+f[t[e+5]]+"-"+f[t[e+6]]+f[t[e+7]]+"-"+f[t[e+8]]+f[t[e+9]]+"-"+f[t[e+10]]+f[t[e+11]]+f[t[e+12]]+f[t[e+13]]+f[t[e+14]]+f[t[e+15]]).toLowerCase();if(!b(i))throw TypeError("Stringified UUID is invalid");return i}(r)}const v=new a.a("S3Album"),w=class{constructor(t){Object(s.k)(this,t),this.contentType="binary/octet-stream",this.level=l.a.Public,this.picker=!0,this.pickerText=c.a.PICKER_TEXT,this.albumItems=[],this.imgArr={},this.list=async()=>{const{path:t="",level:e,track:i,identityId:r}=this;if(v.debug("Album path: "+t),!h.a||"function"!=typeof h.a.list)throw new Error(m.n);try{const s=await h.a.list(t,{level:e,track:i,identityId:r});this.marshal(s)}catch(s){v.warn(s)}},this.marshal=t=>{t.forEach(t=>{const e=t.key.toLowerCase().split(".")[1];p.d.has(e)&&(!t.contentType||t.contentType&&"binary/octet-stream"===t.contentType)&&(t.contentType=this.getContentType(t))});const e=t.filter(t=>t.contentType&&t.contentType.startsWith("image/"));let i=this.filter?this.filter(e):e;i=this.sort?this.sort(i):i,this.albumItems=i,v.debug("album items",this.albumItems),this.constructImgArray(this.albumItems)},this.constructImgArray=t=>{t.map(t=>{this.imgArr[""+t.key]=t.key})},this.handlePick=async t=>{const e=t.target.files[0],{path:i="",level:r,track:s,fileToKey:a}=this,o=i+Object(p.b)(e,a);try{await Object(p.e)(o,e,r,s,e.type,v)}catch(n){throw v.error(n),new Error(n)}if(Object.keys(this.imgArr).includes(o))this.albumItems=[...this.albumItems],this.imgArr[o]=`${o}-${k()}`;else{const t=[...this.albumItems,...this.filter?this.filter([{key:o}]):[{key:o}]];this.albumItems=this.sort?this.sort(t):t}}}getContentType(t){return Object(o.c)(t.key,"image/*")}componentWillLoad(){this.list()}render(){return Object(s.i)("div",null,Object(s.i)("div",{class:"album-container"},Object(s.i)("div",{class:"grid-row"},this.albumItems.map(t=>Object(s.i)("div",{class:"grid-item",key:"key-"+t.key},Object(s.i)("amplify-s3-image",{key:this.imgArr[t.key],imgKey:t.key,level:this.level,path:this.path,identityId:this.identityId,track:this.track,handleOnError:this.handleOnError,handleOnLoad:this.handleOnLoad}),Object(s.i)("span",{class:"img-overlay"}))))),this.picker&&Object(s.i)("amplify-picker",{pickerText:n.a.get(this.pickerText),inputHandler:t=>this.handlePick(t),acceptValue:"image/*"}))}};w.style=":host{--overlay-bg-color:rgba(0, 0, 0, 0.15)}.album-container{-webkit-box-sizing:border-box;box-sizing:border-box;max-width:100%;margin:0 auto;padding:0 2rem}.grid-row{display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;margin:-1rem -1rem;padding-bottom:3rem}.grid-item{position:relative;-ms-flex:1 0 22rem;flex:1 0 22rem;-ms-flex-positive:1;flex-grow:1;margin:1rem;display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center}amplify-s3-image{--width:22rem;--height:20rem;border-radius:5px;-o-object-fit:cover;object-fit:cover}.img-overlay{display:none;width:100%;height:21rem;position:absolute;top:0;left:0;background-color:var(--overlay-bg-color)}.grid-item:hover .img-overlay{display:block}"}}]);