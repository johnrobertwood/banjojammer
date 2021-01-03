!function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function t(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{jkDv:function(e,i,c){"use strict";c.r(i),c.d(i,"AdminModule",function(){return A});var o,r=c("ofXK"),a=c("qFsG"),u=c("bTqV"),s=c("tyNb"),b=c("fXoL"),l=function(){return{exact:!0}},d=((o=function e(){n(this,e)}).\u0275fac=function(e){return new(e||o)},o.\u0275cmp=b.Fb({type:o,selectors:[["app-admin"]],decls:8,vars:2,consts:[["routerLink","./","routerLinkActive","active",3,"routerLinkActiveOptions"],["routerLink","./manage-technique-list","routerLinkActive","active"]],template:function(e,t){1&e&&(b.Qb(0,"h3"),b.tc(1,"ADMIN"),b.Pb(),b.Qb(2,"nav"),b.Qb(3,"a",0),b.tc(4,"Dashboard"),b.Pb(),b.Qb(5,"a",1),b.tc(6,"Manage Techniques"),b.Pb(),b.Pb(),b.Mb(7,"router-outlet")),2&e&&(b.Bb(3),b.ec("routerLinkActiveOptions",b.fc(1,l)))},directives:[s.d,s.c,s.f],styles:[""]}),o),h=c("lJxs"),p=c("/s+T");function f(e,t){if(1&e&&(b.Qb(0,"li"),b.tc(1),b.Pb()),2&e){var n=t.$implicit;b.Bb(1),b.uc(n)}}var g,m=((g=function(){function e(t,i){n(this,e),this.route=t,this.modules=i.preloadedModules}return t(e,[{key:"ngOnInit",value:function(){this.sessionId=this.route.queryParamMap.pipe(Object(h.a)(function(e){return e.get("session_id")||"None"})),this.token=this.route.fragment.pipe(Object(h.a)(function(e){return e||"None"}))}}]),e}()).\u0275fac=function(e){return new(e||g)(b.Lb(s.a),b.Lb(p.a))},g.\u0275cmp=b.Fb({type:g,selectors:[["app-admin-dashboard"]],decls:12,vars:7,consts:[["id","anchor"],[4,"ngFor","ngForOf"]],template:function(e,t){1&e&&(b.Qb(0,"p"),b.tc(1,"Dashboard"),b.Pb(),b.Qb(2,"p"),b.tc(3),b.ac(4,"async"),b.Pb(),b.Mb(5,"a",0),b.Qb(6,"p"),b.tc(7),b.ac(8,"async"),b.Pb(),b.tc(9," Preloaded Modules\n"),b.Qb(10,"ul"),b.sc(11,f,2,1,"li",1),b.Pb()),2&e&&(b.Bb(3),b.vc("Session ID: ",b.bc(4,3,t.sessionId),""),b.Bb(4),b.vc("Token: ",b.bc(8,5,t.token),""),b.Bb(4),b.ec("ngForOf",t.modules))},directives:[r.j],pipes:[r.b],styles:[""]}),g),v=c("P+IX"),P=c("eIep"),k=c("/aPh"),q=c("OdHV"),y=function(e){return["/admin/manage-technique-detail",e]};function O(e,t){if(1&e){var n=b.Rb();b.Qb(0,"li"),b.Qb(1,"a",2),b.Qb(2,"span",3),b.tc(3),b.Pb(),b.Qb(4,"span"),b.tc(5),b.Pb(),b.Pb(),b.Qb(6,"button",4),b.Xb("click",function(){b.jc(n);var e=t.$implicit;return b.Zb().delete(e)}),b.tc(7," x "),b.Pb(),b.Pb()}if(2&e){var i=t.$implicit,c=b.Zb();b.Db("selected",i.id===c.selectedId),b.Bb(1),b.ec("routerLink",b.gc(5,y,i.id)),b.Bb(2),b.uc(i.id),b.Bb(2),b.uc(i.name)}}var M,w=((M=function(){function e(t,i,c){n(this,e),this.techniqueService=t,this.route=i,this.messageService=c,this.isDisabled=!1}return t(e,[{key:"ngOnInit",value:function(){this.getTechniques()}},{key:"getTechniques",value:function(){var e=this;this.route.paramMap.pipe(Object(P.a)(function(t){return e.selectedId=+t.get("id"),e.techniqueService.getTechniques()})).subscribe(function(t){e.techniques=t})}},{key:"add",value:function(e){var t=this;this.isDisabled=!0,(e=e.trim())&&this.techniqueService.addTechnique({name:e}).subscribe(function(e){t.techniques.push(e),t.isDisabled=!1})}},{key:"delete",value:function(e){this.techniques=this.techniques.filter(function(t){return t!==e}),this.techniqueService.deleteTechnique(e).subscribe()}}]),e}()).\u0275fac=function(e){return new(e||M)(b.Lb(k.a),b.Lb(s.a),b.Lb(q.a))},M.\u0275cmp=b.Fb({type:M,selectors:[["app-manage-technique-list"]],decls:4,vars:1,consts:[[1,"techniques"],[3,"selected",4,"ngFor","ngForOf"],[3,"routerLink"],[1,"badge"],["title","delete technique",1,"delete",3,"click"]],template:function(e,t){1&e&&(b.Qb(0,"h2"),b.tc(1,"Techniques"),b.Pb(),b.Qb(2,"ul",0),b.sc(3,O,8,7,"li",1),b.Pb()),2&e&&(b.Bb(3),b.ec("ngForOf",t.techniques))},directives:[r.j,s.d],styles:[".techniques[_ngcontent-%COMP%]{margin:0 0 2em;list-style-type:none;padding:0;width:15em}.techniques[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{position:relative;cursor:pointer;background-color:#eee;margin:.5em;padding:.3em 0;height:1.6em;border-radius:4px}.techniques[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover{color:#607d8b;background-color:#ddd;left:.1em}.techniques[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#888;text-decoration:none;position:relative;display:block}.techniques[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{color:#607d8b}.techniques[_ngcontent-%COMP%]   .badge[_ngcontent-%COMP%]{display:inline-block;font-size:small;color:#fff;padding:.8em .7em 0;background-color:#607d8b;line-height:1em;position:relative;left:-1px;top:-4px;height:1.8em;min-width:16px;text-align:right;margin-right:.8em;border-radius:4px 0 0 4px}button[_ngcontent-%COMP%]{background-color:#eee;border:none;padding:5px 10px;border-radius:4px;cursor:pointer;font-family:Arial}button[_ngcontent-%COMP%]:hover{background-color:#cfd8dc}button.delete[_ngcontent-%COMP%]{position:relative;left:194px;top:-32px;background-color:grey!important;color:#fff}.techniques[_ngcontent-%COMP%]   li.selected[_ngcontent-%COMP%]{background-color:#cfd8dc;color:#fff}.techniques[_ngcontent-%COMP%]   li.selected[_ngcontent-%COMP%]:hover{background-color:#bbd8dc}"]}),M),C=c("5+tZ"),Q=c("flHw"),_=c("kmnG"),x=c("3Pt+");function I(e,t){if(1&e){var n=b.Rb();b.Qb(0,"div"),b.Qb(1,"h2"),b.tc(2),b.ac(3,"uppercase"),b.Pb(),b.Qb(4,"div"),b.Mb(5,"iframe",1),b.Pb(),b.Qb(6,"div"),b.Qb(7,"mat-label"),b.tc(8,"name: "),b.Pb(),b.Qb(9,"input",2,3),b.Xb("ngModelChange",function(e){return t.ngIf.name=e}),b.Pb(),b.Qb(11,"button",4),b.Xb("click",function(){b.jc(n);var e=b.ic(10);return b.Zb().save(e.value)}),b.tc(12," save "),b.Pb(),b.Pb(),b.Qb(13,"button",5),b.Xb("click",function(){b.jc(n);var e=t.ngIf;return b.Zb().goBack(e.id)}),b.tc(14," go back "),b.Pb(),b.Pb()}if(2&e){var i=t.ngIf;b.Bb(2),b.vc("",b.bc(3,2,i.name)," Details"),b.Bb(7),b.ec("ngModel",i.name)}}var L,j,T,B=[{path:"",component:d,canActivate:[v.a],children:[{path:"",canActivateChild:[v.a],children:[{path:"manage-technique-list",component:w},{path:"manage-technique-detail/:id",component:(L=function(){function e(t,i,c,o){n(this,e),this.route=t,this.router=i,this.techniqueService=c,this.quizService=o,this.display=!1}return t(e,[{key:"ngOnInit",value:function(){this.getTechnique()}},{key:"getTechnique",value:function(){var e=this;this.technique$=this.route.paramMap.pipe(Object(P.a)(function(t){return e.techniqueService.getTechnique(+t.get("id"))}))}},{key:"goBack",value:function(e){this.router.navigate(["/admin/manage-technique-list",{id:e}])}},{key:"save",value:function(e){var t=this;this.technique$.pipe(Object(h.a)(function(t){return Object.assign(Object.assign({},t),{name:e})}),Object(C.a)(function(e){return t.techniqueService.updateTechnique(e)})).subscribe(function(){return t.goBack(11)})}}]),e}(),L.\u0275fac=function(e){return new(e||L)(b.Lb(s.a),b.Lb(s.b),b.Lb(k.a),b.Lb(Q.a))},L.\u0275cmp=b.Fb({type:L,selectors:[["app-manage-technique-detail"]],decls:2,vars:3,consts:[[4,"ngIf"],["width","560","height","315","src",b.wc("https://www.youtube.com/embed/5-sfG8BV8wU"),"frameborder","0","allow","accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture","allowfullscreen",""],["matInput","","placeholder","name",3,"ngModel","ngModelChange"],["editTechnique",""],["mat-raised-button","","color","primary",3,"click"],["mat-raised-button","","color","warn",3,"click"]],template:function(e,t){1&e&&(b.sc(0,I,15,4,"div",0),b.ac(1,"async")),2&e&&b.ec("ngIf",b.bc(1,1,t.technique$))},directives:[r.k,_.d,a.a,x.a,x.f,x.i,u.a],pipes:[r.b,r.p],styles:["label[_ngcontent-%COMP%]{display:inline-block;width:3em;margin:.5em 0;color:#607d8b;font-weight:700}input[_ngcontent-%COMP%]{height:2em;font-size:1em;padding-left:.4em}button[_ngcontent-%COMP%]{margin-top:20px;font-family:Arial;background-color:#eee;border:none;padding:5px 10px;border-radius:4px;cursor:pointer}button[_ngcontent-%COMP%]:hover{background-color:#cfd8dc}button[_ngcontent-%COMP%]:disabled{background-color:#eee;color:#ccc;cursor:auto}"]}),L)},{path:"",component:m}]}]}],F=((T=function e(){n(this,e)}).\u0275mod=b.Jb({type:T}),T.\u0275inj=b.Ib({factory:function(e){return new(e||T)},imports:[[s.e.forChild(B)],s.e]}),T),A=((j=function e(){n(this,e)}).\u0275mod=b.Jb({type:j}),j.\u0275inj=b.Ib({factory:function(e){return new(e||j)},imports:[[r.c,F,a.b,u.b,x.c]]}),j)}}])}();