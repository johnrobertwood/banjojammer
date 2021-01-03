(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{jkDv:function(e,t,n){"use strict";n.r(t),n.d(t,"AdminModule",function(){return _});var c=n("ofXK"),i=n("qFsG"),o=n("bTqV"),r=n("tyNb"),s=n("fXoL");const a=function(){return{exact:!0}};let b=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=s.Fb({type:e,selectors:[["app-admin"]],decls:8,vars:2,consts:[["routerLink","./","routerLinkActive","active",3,"routerLinkActiveOptions"],["routerLink","./manage-technique-list","routerLinkActive","active"]],template:function(e,t){1&e&&(s.Qb(0,"h3"),s.tc(1,"ADMIN"),s.Pb(),s.Qb(2,"nav"),s.Qb(3,"a",0),s.tc(4,"Dashboard"),s.Pb(),s.Qb(5,"a",1),s.tc(6,"Manage Techniques"),s.Pb(),s.Pb(),s.Mb(7,"router-outlet")),2&e&&(s.Bb(3),s.ec("routerLinkActiveOptions",s.fc(1,a)))},directives:[r.d,r.c,r.f],styles:[""]}),e})();var u=n("lJxs"),d=n("/s+T");function l(e,t){if(1&e&&(s.Qb(0,"li"),s.tc(1),s.Pb()),2&e){const e=t.$implicit;s.Bb(1),s.uc(e)}}let h=(()=>{class e{constructor(e,t){this.route=e,this.modules=t.preloadedModules}ngOnInit(){this.sessionId=this.route.queryParamMap.pipe(Object(u.a)(e=>e.get("session_id")||"None")),this.token=this.route.fragment.pipe(Object(u.a)(e=>e||"None"))}}return e.\u0275fac=function(t){return new(t||e)(s.Lb(r.a),s.Lb(d.a))},e.\u0275cmp=s.Fb({type:e,selectors:[["app-admin-dashboard"]],decls:12,vars:7,consts:[["id","anchor"],[4,"ngFor","ngForOf"]],template:function(e,t){1&e&&(s.Qb(0,"p"),s.tc(1,"Dashboard"),s.Pb(),s.Qb(2,"p"),s.tc(3),s.ac(4,"async"),s.Pb(),s.Mb(5,"a",0),s.Qb(6,"p"),s.tc(7),s.ac(8,"async"),s.Pb(),s.tc(9," Preloaded Modules\n"),s.Qb(10,"ul"),s.sc(11,l,2,1,"li",1),s.Pb()),2&e&&(s.Bb(3),s.vc("Session ID: ",s.bc(4,3,t.sessionId),""),s.Bb(4),s.vc("Token: ",s.bc(8,5,t.token),""),s.Bb(4),s.ec("ngForOf",t.modules))},directives:[c.j],pipes:[c.b],styles:[""]}),e})();var p=n("P+IX"),g=n("eIep"),m=n("/aPh"),f=n("OdHV");const v=function(e){return["/admin/manage-technique-detail",e]};function P(e,t){if(1&e){const e=s.Rb();s.Qb(0,"li"),s.Qb(1,"a",2),s.Qb(2,"span",3),s.tc(3),s.Pb(),s.Qb(4,"span"),s.tc(5),s.Pb(),s.Pb(),s.Qb(6,"button",4),s.Xb("click",function(){s.jc(e);const n=t.$implicit;return s.Zb().delete(n)}),s.tc(7," x "),s.Pb(),s.Pb()}if(2&e){const e=t.$implicit,n=s.Zb();s.Db("selected",e.id===n.selectedId),s.Bb(1),s.ec("routerLink",s.gc(5,v,e.id)),s.Bb(2),s.uc(e.id),s.Bb(2),s.uc(e.name)}}let q=(()=>{class e{constructor(e,t,n){this.techniqueService=e,this.route=t,this.messageService=n,this.isDisabled=!1}ngOnInit(){this.getTechniques()}getTechniques(){this.route.paramMap.pipe(Object(g.a)(e=>(this.selectedId=+e.get("id"),this.techniqueService.getTechniques()))).subscribe(e=>{this.techniques=e})}add(e){this.isDisabled=!0,(e=e.trim())&&this.techniqueService.addTechnique({name:e}).subscribe(e=>{this.techniques.push(e),this.isDisabled=!1})}delete(e){this.techniques=this.techniques.filter(t=>t!==e),this.techniqueService.deleteTechnique(e).subscribe()}}return e.\u0275fac=function(t){return new(t||e)(s.Lb(m.a),s.Lb(r.a),s.Lb(f.a))},e.\u0275cmp=s.Fb({type:e,selectors:[["app-manage-technique-list"]],decls:4,vars:1,consts:[[1,"techniques"],[3,"selected",4,"ngFor","ngForOf"],[3,"routerLink"],[1,"badge"],["title","delete technique",1,"delete",3,"click"]],template:function(e,t){1&e&&(s.Qb(0,"h2"),s.tc(1,"Techniques"),s.Pb(),s.Qb(2,"ul",0),s.sc(3,P,8,7,"li",1),s.Pb()),2&e&&(s.Bb(3),s.ec("ngForOf",t.techniques))},directives:[c.j,r.d],styles:[".techniques[_ngcontent-%COMP%]{margin:0 0 2em;list-style-type:none;padding:0;width:15em}.techniques[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{position:relative;cursor:pointer;background-color:#eee;margin:.5em;padding:.3em 0;height:1.6em;border-radius:4px}.techniques[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover{color:#607d8b;background-color:#ddd;left:.1em}.techniques[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#888;text-decoration:none;position:relative;display:block}.techniques[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{color:#607d8b}.techniques[_ngcontent-%COMP%]   .badge[_ngcontent-%COMP%]{display:inline-block;font-size:small;color:#fff;padding:.8em .7em 0;background-color:#607d8b;line-height:1em;position:relative;left:-1px;top:-4px;height:1.8em;min-width:16px;text-align:right;margin-right:.8em;border-radius:4px 0 0 4px}button[_ngcontent-%COMP%]{background-color:#eee;border:none;padding:5px 10px;border-radius:4px;cursor:pointer;font-family:Arial}button[_ngcontent-%COMP%]:hover{background-color:#cfd8dc}button.delete[_ngcontent-%COMP%]{position:relative;left:194px;top:-32px;background-color:grey!important;color:#fff}.techniques[_ngcontent-%COMP%]   li.selected[_ngcontent-%COMP%]{background-color:#cfd8dc;color:#fff}.techniques[_ngcontent-%COMP%]   li.selected[_ngcontent-%COMP%]:hover{background-color:#bbd8dc}"]}),e})();var O=n("5+tZ"),k=n("flHw"),M=n("kmnG"),y=n("3Pt+");function w(e,t){if(1&e){const e=s.Rb();s.Qb(0,"div"),s.Qb(1,"h2"),s.tc(2),s.ac(3,"uppercase"),s.Pb(),s.Qb(4,"div"),s.Mb(5,"iframe",1),s.Pb(),s.Qb(6,"div"),s.Qb(7,"mat-label"),s.tc(8,"name: "),s.Pb(),s.Qb(9,"input",2,3),s.Xb("ngModelChange",function(e){return t.ngIf.name=e}),s.Pb(),s.Qb(11,"button",4),s.Xb("click",function(){s.jc(e);const t=s.ic(10);return s.Zb().save(t.value)}),s.tc(12," save "),s.Pb(),s.Pb(),s.Qb(13,"button",5),s.Xb("click",function(){s.jc(e);const n=t.ngIf;return s.Zb().goBack(n.id)}),s.tc(14," go back "),s.Pb(),s.Pb()}if(2&e){const e=t.ngIf;s.Bb(2),s.vc("",s.bc(3,2,e.name)," Details"),s.Bb(7),s.ec("ngModel",e.name)}}const C=[{path:"",component:b,canActivate:[p.a],children:[{path:"",canActivateChild:[p.a],children:[{path:"manage-technique-list",component:q},{path:"manage-technique-detail/:id",component:(()=>{class e{constructor(e,t,n,c){this.route=e,this.router=t,this.techniqueService=n,this.quizService=c,this.display=!1}ngOnInit(){this.getTechnique()}getTechnique(){this.technique$=this.route.paramMap.pipe(Object(g.a)(e=>this.techniqueService.getTechnique(+e.get("id"))))}goBack(e){this.router.navigate(["/admin/manage-technique-list",{id:e}])}save(e){this.technique$.pipe(Object(u.a)(t=>Object.assign(Object.assign({},t),{name:e})),Object(O.a)(e=>this.techniqueService.updateTechnique(e))).subscribe(()=>this.goBack(11))}}return e.\u0275fac=function(t){return new(t||e)(s.Lb(r.a),s.Lb(r.b),s.Lb(m.a),s.Lb(k.a))},e.\u0275cmp=s.Fb({type:e,selectors:[["app-manage-technique-detail"]],decls:2,vars:3,consts:[[4,"ngIf"],["width","560","height","315","src",s.wc("https://www.youtube.com/embed/5-sfG8BV8wU"),"frameborder","0","allow","accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture","allowfullscreen",""],["matInput","","placeholder","name",3,"ngModel","ngModelChange"],["editTechnique",""],["mat-raised-button","","color","primary",3,"click"],["mat-raised-button","","color","warn",3,"click"]],template:function(e,t){1&e&&(s.sc(0,w,15,4,"div",0),s.ac(1,"async")),2&e&&s.ec("ngIf",s.bc(1,1,t.technique$))},directives:[c.k,M.d,i.a,y.a,y.f,y.i,o.a],pipes:[c.b,c.p],styles:["label[_ngcontent-%COMP%]{display:inline-block;width:3em;margin:.5em 0;color:#607d8b;font-weight:700}input[_ngcontent-%COMP%]{height:2em;font-size:1em;padding-left:.4em}button[_ngcontent-%COMP%]{margin-top:20px;font-family:Arial;background-color:#eee;border:none;padding:5px 10px;border-radius:4px;cursor:pointer}button[_ngcontent-%COMP%]:hover{background-color:#cfd8dc}button[_ngcontent-%COMP%]:disabled{background-color:#eee;color:#ccc;cursor:auto}"]}),e})()},{path:"",component:h}]}]}];let Q=(()=>{class e{}return e.\u0275mod=s.Jb({type:e}),e.\u0275inj=s.Ib({factory:function(t){return new(t||e)},imports:[[r.e.forChild(C)],r.e]}),e})(),_=(()=>{class e{}return e.\u0275mod=s.Jb({type:e}),e.\u0275inj=s.Ib({factory:function(t){return new(t||e)},imports:[[c.c,Q,i.b,o.b,y.c]]}),e})()}}]);