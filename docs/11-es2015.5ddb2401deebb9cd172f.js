(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{jkDv:function(e,n,t){"use strict";t.r(n),t.d(n,"AdminModule",function(){return R});var c=t("ofXK"),i=t("qFsG"),o=t("kmnG"),r=t("3Pt+"),a=t("tyNb"),s=t("fXoL");let u=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=s.Gb({type:e,selectors:[["app-admin"]],decls:1,vars:0,template:function(e,n){1&e&&s.Nb(0,"router-outlet")},directives:[a.g],styles:[""]}),e})();var d=t("lJxs"),l=t("/s+T");function b(e,n){if(1&e&&(s.Rb(0,"li"),s.uc(1),s.Qb()),2&e){const e=n.$implicit;s.Cb(1),s.vc(e)}}let p=(()=>{class e{constructor(e,n){this.route=e,this.modules=n.preloadedModules}ngOnInit(){this.sessionId=this.route.queryParamMap.pipe(Object(d.a)(e=>e.get("session_id")||"None")),this.token=this.route.fragment.pipe(Object(d.a)(e=>e||"None"))}}return e.\u0275fac=function(n){return new(n||e)(s.Mb(a.a),s.Mb(l.a))},e.\u0275cmp=s.Gb({type:e,selectors:[["app-admin-dashboard"]],decls:12,vars:7,consts:[["id","anchor"],[4,"ngFor","ngForOf"]],template:function(e,n){1&e&&(s.Rb(0,"p"),s.uc(1,"Dashboard"),s.Qb(),s.Rb(2,"p"),s.uc(3),s.bc(4,"async"),s.Qb(),s.Nb(5,"a",0),s.Rb(6,"p"),s.uc(7),s.bc(8,"async"),s.Qb(),s.uc(9," Preloaded Modules\n"),s.Rb(10,"ul"),s.tc(11,b,2,1,"li",1),s.Qb()),2&e&&(s.Cb(3),s.wc("Session ID: ",s.cc(4,3,n.sessionId),""),s.Cb(4),s.wc("Token: ",s.cc(8,5,n.token),""),s.Cb(4),s.fc("ngForOf",n.modules))},directives:[c.k],pipes:[c.b],styles:[""]}),e})();var g=t("P+IX"),h=t("eIep"),f=t("1G5W"),m=t("XNiG"),v=t("/aPh");const M=function(e){return["/technique",e]};function C(e,n){if(1&e&&(s.Rb(0,"div",3),s.Rb(1,"a",4),s.Rb(2,"div",5),s.Rb(3,"span"),s.uc(4),s.Qb(),s.Qb(),s.Qb(),s.Qb()),2&e){const e=s.ac().$implicit,n=s.ac();s.Cb(1),s.fc("routerLink",s.hc(4,M,e.value.id)),s.Cb(1),s.Eb("selected",e.value.id===n.selectedId),s.Cb(2),s.vc(e.value.displayName)}}function O(e,n){if(1&e&&(s.Rb(0,"div"),s.tc(1,C,5,6,"div",2),s.Qb()),2&e){const e=n.$implicit;s.Cb(1),s.fc("ngIf",e.value.favorite)}}let q=(()=>{class e{constructor(e,n){this.techniqueService=e,this.route=n,this.ngUnsubscribe=new m.a,this.isDisabled=!1}ngOnInit(){this.getTechniques()}getTechniques(){this.route.paramMap.pipe(Object(h.a)(e=>this.techniqueService.getTechniques()),Object(f.a)(this.ngUnsubscribe)).subscribe(e=>{let n=JSON.parse(e.body).techniques,t=[];for(let c in n)t.push(n[c]);t.sort((e,n)=>e.id-n.id),this.techniques=t})}add(e){console.log("add called")}delete(e){console.log("delete button pressed")}ngOnDestroy(){this.ngUnsubscribe.next(),this.ngUnsubscribe.complete()}}return e.\u0275fac=function(n){return new(n||e)(s.Mb(v.a),s.Mb(a.a))},e.\u0275cmp=s.Gb({type:e,selectors:[["app-manage-technique-list"]],decls:5,vars:3,consts:[[1,"container"],[4,"ngFor","ngForOf"],["class","techniques",4,"ngIf"],[1,"techniques"],[3,"routerLink"],[1,"badge"]],template:function(e,n){1&e&&(s.Rb(0,"h2"),s.uc(1,"Favorite Techniques"),s.Qb(),s.Rb(2,"div",0),s.tc(3,O,2,1,"div",1),s.bc(4,"keyvalue"),s.Qb()),2&e&&(s.Cb(3),s.fc("ngForOf",s.cc(4,1,n.techniques)))},directives:[c.k,c.l,a.e],pipes:[c.f],styles:[".container[_ngcontent-%COMP%]{flex-wrap:wrap}.container[_ngcontent-%COMP%], .techniques[_ngcontent-%COMP%]{display:flex;justify-content:center}.techniques[_ngcontent-%COMP%]{list-style-type:none;padding:0;width:180px;height:180px;align-items:center}.techniques[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{position:relative;cursor:pointer;background-color:#b0bec5;padding:.3em 0;border-radius:4px}.techniques[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:hover{color:#607d8b;background-color:#ddd;left:.1em}a[_ngcontent-%COMP%]{color:#393737;text-decoration:none}.techniques[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{color:#607d8b}.techniques[_ngcontent-%COMP%]   .badge[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:center;align-items:center;font-size:large;color:#fff;height:160px;width:160px;margin-right:.8em;border-radius:4px}button[_ngcontent-%COMP%]{background-color:#eee;border:none;padding:5px 10px;border-radius:4px;cursor:pointer;font-family:Arial}button[_ngcontent-%COMP%]:hover{background-color:#cfd8dc}button.delete[_ngcontent-%COMP%]{position:relative;left:194px;top:-32px;background-color:grey!important;color:#fff}.techniques[_ngcontent-%COMP%]   div.selected[_ngcontent-%COMP%]{background-color:#cfd8dc;color:#fff}.techniques[_ngcontent-%COMP%]   div.selected[_ngcontent-%COMP%]:hover{background-color:#bbd8dc}"]}),e})();var y=t("bTqV"),P=t("Z2+D");function k(e,n){if(1&e){const e=s.Sb();s.Rb(0,"div"),s.Rb(1,"h2"),s.uc(2),s.bc(3,"uppercase"),s.Qb(),s.Rb(4,"div"),s.Nb(5,"iframe",1),s.bc(6,"safe"),s.Qb(),s.Rb(7,"div"),s.Rb(8,"mat-label"),s.uc(9,"name: "),s.Qb(),s.Rb(10,"input",2,3),s.Yb("ngModelChange",function(e){return n.ngIf.name=e}),s.Qb(),s.Qb(),s.Rb(12,"button",4),s.Yb("click",function(){s.kc(e);const t=n.ngIf;return s.ac().goBack(t.id)}),s.uc(13," go back "),s.Qb(),s.Qb()}if(2&e){const e=n.ngIf,t=s.ac();s.Cb(2),s.wc("",s.cc(3,5,e.name)," Details"),s.Cb(3),s.fc("width",t.isSmallScreen||"560")("height",t.isSmallScreen||"315")("src",s.cc(6,7,e.video.url),s.lc),s.Cb(5),s.fc("ngModel",e.name)}}const w=[{path:"",component:u,canActivate:[g.a],children:[{path:"",canActivateChild:[g.a],children:[{path:"manage-technique-list",component:q},{path:"manage-technique-detail/:id",component:(()=>{class e{constructor(e,n,t){this.route=e,this.router=n,this.techniqueService=t,this.display=!1}ngOnInit(){this.getTechnique()}getTechnique(){this.technique$=this.route.paramMap.pipe(Object(h.a)(e=>this.techniqueService.getUserTechnique(+e.get("id"))))}goBack(e){this.router.navigate(["/admin/manage-technique-list",{id:e}])}}return e.\u0275fac=function(n){return new(n||e)(s.Mb(a.a),s.Mb(a.b),s.Mb(v.a))},e.\u0275cmp=s.Gb({type:e,selectors:[["app-manage-technique-detail"]],decls:2,vars:3,consts:[[4,"ngIf"],["frameborder","0","allow","accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture","allowfullscreen","",3,"width","height","src"],["matInput","","placeholder","name",3,"ngModel","ngModelChange"],["editTechnique",""],["mat-raised-button","","color","warn",3,"click"]],template:function(e,n){1&e&&(s.tc(0,k,14,9,"div",0),s.bc(1,"async")),2&e&&s.fc("ngIf",s.cc(1,1,n.technique$))},directives:[c.l,o.d,i.a,r.a,r.f,r.i,y.a],pipes:[c.b,c.q,P.a],styles:["label[_ngcontent-%COMP%]{display:inline-block;width:3em;margin:.5em 0;color:#607d8b;font-weight:700}input[_ngcontent-%COMP%]{height:2em;font-size:1em;padding-left:.4em}button[_ngcontent-%COMP%]{margin-top:20px;font-family:Arial;background-color:#eee;border:none;padding:5px 10px;border-radius:4px;cursor:pointer}button[_ngcontent-%COMP%]:hover{background-color:#cfd8dc}button[_ngcontent-%COMP%]:disabled{background-color:#eee;color:#ccc;cursor:auto}"]}),e})()},{path:"",component:p}]}]}];let _=(()=>{class e{}return e.\u0275mod=s.Kb({type:e}),e.\u0275inj=s.Jb({factory:function(n){return new(n||e)},imports:[[a.f.forChild(w)],a.f]}),e})();var x=t("B+Mi"),Q=t("rb4P");let R=(()=>{class e{}return e.\u0275mod=s.Kb({type:e}),e.\u0275inj=s.Jb({factory:function(n){return new(n||e)},imports:[[c.c,r.c,i.b,o.c,x.a,_,Q.a]]}),e})()}}]);