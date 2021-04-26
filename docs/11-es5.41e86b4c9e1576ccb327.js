!function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function t(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{jkDv:function(e,i,c){"use strict";c.r(i),c.d(i,"AdminModule",function(){return X});var o,r=c("ofXK"),a=c("qFsG"),u=c("kmnG"),s=c("3Pt+"),b=c("tyNb"),l=c("fXoL"),d=function(){return{exact:!0}},h=((o=function e(){n(this,e)}).\u0275fac=function(e){return new(e||o)},o.\u0275cmp=l.Hb({type:o,selectors:[["app-admin"]],decls:8,vars:2,consts:[["routerLink","./","routerLinkActive","active",3,"routerLinkActiveOptions"],["routerLink","./manage-technique-list","routerLinkActive","active"]],template:function(e,t){1&e&&(l.Sb(0,"h3"),l.vc(1,"ADMIN"),l.Rb(),l.Sb(2,"nav"),l.Sb(3,"a",0),l.vc(4,"Dashboard"),l.Rb(),l.Sb(5,"a",1),l.vc(6,"Manage Techniques"),l.Rb(),l.Rb(),l.Ob(7,"router-outlet")),2&e&&(l.Db(3),l.gc("routerLinkActiveOptions",l.hc(1,d)))},directives:[b.e,b.d,b.g],styles:["nav[_ngcontent-%COMP%]{margin-bottom:20px}"]}),o),p=c("lJxs"),f=c("/s+T");function g(e,t){if(1&e&&(l.Sb(0,"li"),l.vc(1),l.Rb()),2&e){var n=t.$implicit;l.Db(1),l.wc(n)}}var m,v=((m=function(){function e(t,i){n(this,e),this.route=t,this.modules=i.preloadedModules}return t(e,[{key:"ngOnInit",value:function(){this.sessionId=JSON.parse(localStorage.getItem("currentUser")).userId,this.token=this.route.fragment.pipe(Object(p.a)(function(e){return e||"None"}))}}]),e}()).\u0275fac=function(e){return new(e||m)(l.Nb(b.a),l.Nb(f.a))},m.\u0275cmp=l.Hb({type:m,selectors:[["app-admin-dashboard"]],decls:11,vars:5,consts:[["id","anchor"],[4,"ngFor","ngForOf"]],template:function(e,t){1&e&&(l.Sb(0,"p"),l.vc(1,"Dashboard"),l.Rb(),l.Sb(2,"p"),l.vc(3),l.Rb(),l.Ob(4,"a",0),l.Sb(5,"p"),l.vc(6),l.cc(7,"async"),l.Rb(),l.vc(8," Preloaded Modules\n"),l.Sb(9,"ul"),l.uc(10,g,2,1,"li",1),l.Rb()),2&e&&(l.Db(3),l.xc("Session ID: ",t.sessionId,""),l.Db(3),l.xc("Token: ",l.dc(7,3,t.token),""),l.Db(4),l.gc("ngForOf",t.modules))},directives:[r.j],pipes:[r.b],styles:[""]}),m),k=c("P+IX"),q=c("eIep"),O=c("/aPh"),y=function(e){return["/admin/manage-technique-detail",e]};function M(e,t){if(1&e){var n=l.Tb();l.Sb(0,"li"),l.Sb(1,"a",2),l.Sb(2,"span"),l.vc(3),l.Rb(),l.Rb(),l.Sb(4,"button",3),l.Zb("click",function(){l.lc(n);var e=t.$implicit;return l.bc().delete(e)}),l.vc(5," x "),l.Rb(),l.Rb()}if(2&e){var i=t.$implicit,c=l.bc();l.Fb("selected",i.id===c.selectedId),l.Db(1),l.gc("routerLink",l.ic(4,y,i.id)),l.Db(2),l.xc("",i.displayName," ")}}var S,w=((S=function(){function e(t,i){n(this,e),this.techniqueService=t,this.route=i,this.isDisabled=!1}return t(e,[{key:"ngOnInit",value:function(){this.getTechniques()}},{key:"getTechniques",value:function(){var e=this;this.techniques$=this.route.paramMap.pipe(Object(q.a)(function(t){return e.selectedId=+t.get("id"),e.techniqueService.getTechniques()}))}},{key:"add",value:function(e){}},{key:"delete",value:function(e){}}]),e}()).\u0275fac=function(e){return new(e||S)(l.Nb(O.a),l.Nb(b.a))},S.\u0275cmp=l.Hb({type:S,selectors:[["app-manage-technique-list"]],decls:6,vars:3,consts:[[1,"techniques"],[3,"selected",4,"ngFor","ngForOf"],["routerLinkActive","activebutton",3,"routerLink"],["title","delete technique",1,"delete",3,"click"]],template:function(e,t){1&e&&(l.Sb(0,"h2"),l.vc(1,"Manage Techniques List"),l.Rb(),l.Ob(2,"router-outlet"),l.Sb(3,"ul",0),l.uc(4,M,6,6,"li",1),l.cc(5,"async"),l.Rb()),2&e&&(l.Db(4),l.gc("ngForOf",l.dc(5,1,t.techniques$)))},directives:[b.g,r.j,b.e,b.d],pipes:[r.b],styles:[".techniques[_ngcontent-%COMP%]{margin:0 0 2em;list-style-type:none;padding:0;width:15em}.techniques[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{position:relative;cursor:pointer;background-color:#eee;margin:.5em;padding:.3em 0;height:1.6em;border-radius:4px}.techniques[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover{color:#607d8b;background-color:#ddd;left:.1em}.techniques[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#888;text-decoration:none;position:relative;display:block}.techniques[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{color:#607d8b}.techniques[_ngcontent-%COMP%]   .badge[_ngcontent-%COMP%]{display:inline-block;font-size:small;color:#fff;padding:.8em .7em 0;background-color:#607d8b;line-height:1em;position:relative;left:-1px;top:-4px;height:1.8em;min-width:16px;text-align:right;margin-right:.8em;border-radius:4px 0 0 4px}button[_ngcontent-%COMP%]{background-color:#eee;border:none;padding:5px 10px;border-radius:4px;cursor:pointer;font-family:Arial}button[_ngcontent-%COMP%]:hover{background-color:#cfd8dc}button.delete[_ngcontent-%COMP%]{position:relative;left:194px;top:-32px;background-color:grey!important;color:#fff}.techniques[_ngcontent-%COMP%]   li.selected[_ngcontent-%COMP%]{background-color:#cfd8dc;color:#fff}.techniques[_ngcontent-%COMP%]   li.selected[_ngcontent-%COMP%]:hover{background-color:#bbd8dc}"]}),S),x=c("wO+i"),C=c("5+tZ"),P=c("XNiG"),N=c("0MNC"),R=c("Cw5F"),_=c("bTqV");function I(e,t){if(1&e){var n=l.Tb();l.Sb(0,"div"),l.Sb(1,"form",1),l.Sb(2,"mat-form-field",2),l.Sb(3,"mat-label"),l.vc(4,"Edit Technique Name"),l.Rb(),l.Sb(5,"input",3,4),l.Zb("ngModelChange",function(e){return l.lc(n),l.bc().editName=e}),l.Rb(),l.Rb(),l.Sb(7,"mat-form-field",2),l.Sb(8,"mat-label"),l.vc(9,"Edit Flashcard Answer"),l.Rb(),l.Sb(10,"textarea",5,6),l.Zb("ngModelChange",function(e){return l.lc(n),l.bc().editAnswer=e}),l.Rb(),l.Rb(),l.Rb(),l.Sb(12,"p"),l.Sb(13,"button",7),l.Zb("click",function(){l.lc(n);var e=l.kc(6),t=l.kc(11);return l.bc().save(e.value,t.value)}),l.vc(14," Save "),l.Rb(),l.Sb(15,"button",8),l.Zb("click",function(){l.lc(n);var e=t.ngIf;return l.bc().goBack(e.id)}),l.vc(16," Back "),l.Rb(),l.Rb(),l.Rb()}if(2&e){var i=l.bc();l.Db(5),l.gc("ngModel",i.editName),l.Db(5),l.gc("ngModel",i.editAnswer)}}var D,j,T,A,L=((D=function(){function e(t,i,c,o,r){n(this,e),this.breakpointObserver=t,this.route=i,this.router=c,this.techniqueService=o,this.dialogService=r,this.ngUnsubscribe=new P.a,this.display=!1}return t(e,[{key:"ngOnInit",value:function(){var e=this;this.getTechnique(),this.route.data.subscribe(function(t){e.editName=t.technique.displayName,e.editAnswer=t.technique.flashcard.answer,e.technique=t.technique}),this.breakpointObserver.observe(["(max-width: 800px)"]).pipe(Object(x.a)("matches")).subscribe(function(t){return e.isSmallScreen=t})}},{key:"getTechnique",value:function(){var e=this;this.technique$=this.route.paramMap.pipe(Object(q.a)(function(t){return e.techniqueService.getUserTechnique(+t.get("id"))}))}},{key:"goBack",value:function(e){this.router.navigate(["/admin/manage-technique-list",{id:e}])}},{key:"save",value:function(e,t){var n=this;this.technique$.pipe(Object(p.a)(function(i){return Object.assign(Object.assign({},i),{displayName:e,flashcard:{complete:n.technique.flashcard.complete,question:n.technique.flashcard.question,answer:t}})}),Object(C.a)(function(e){return n.techniqueService.editTechnique(e)})).subscribe(function(e){n.technique.displayName=n.editName,n.technique.flashcard.answer=n.editAnswer,n.goBack(e.id)})}},{key:"canDeactivate",value:function(){return!this.technique||this.technique.displayName===this.editName&&this.technique.flashcard.answer===this.editAnswer||this.dialogService.confirm("Discard changes?")}},{key:"ngOnDestroy",value:function(){this.ngUnsubscribe.next(),this.ngUnsubscribe.complete()}}]),e}()).\u0275fac=function(e){return new(e||D)(l.Nb(N.a),l.Nb(b.a),l.Nb(b.b),l.Nb(O.a),l.Nb(R.a))},D.\u0275cmp=l.Hb({type:D,selectors:[["app-manage-technique-detail"]],decls:2,vars:3,consts:[[4,"ngIf"],[1,"example-form","d-flex","flex-column"],[1,"example-full-width"],["matInput","","name","editTechniqueName",3,"ngModel","ngModelChange"],["nameInput",""],["matInput","","name","editTechniqueFlashcard",1,"py-3",3,"ngModel","ngModelChange"],["answerInput",""],["mat-raised-button","","color","primary",1,"mr-2",3,"click"],["mat-raised-button","","color","accent",3,"click"]],template:function(e,t){1&e&&(l.uc(0,I,17,2,"div",0),l.cc(1,"async")),2&e&&l.gc("ngIf",l.dc(1,1,t.technique$))},directives:[r.k,s.j,s.g,s.h,u.b,u.e,a.a,s.a,s.f,s.i,_.b],pipes:[r.b],styles:["input[_ngcontent-%COMP%]{height:2em;font-size:1em;padding-left:.4em}button[_ngcontent-%COMP%]{margin-top:20px;font-family:Arial;background-color:#eee;border:none;padding:5px 10px;border-radius:4px;cursor:pointer}button[_ngcontent-%COMP%]:hover{background-color:#cfd8dc}button[_ngcontent-%COMP%]:disabled{background-color:#eee;color:#ccc;cursor:auto}.video-container[_ngcontent-%COMP%]{display:flex;justify-content:center;margin-bottom:20px}"]}),D),F=c("vvvQ"),$=c("LRne"),U=c("EY2u"),Z=c("IzEk"),B=[{path:"",component:h,canActivate:[k.a],children:[{path:"",canActivateChild:[k.a],children:[{path:"manage-technique-list",component:w},{path:"manage-technique-detail/:id",component:L,canDeactivate:[F.a],resolve:{technique:(j=function(){function e(t,i){n(this,e),this.ts=t,this.router=i}return t(e,[{key:"resolve",value:function(e){var t=this,n=e.paramMap.get("id");return this.ts.getUserTechnique(+n).pipe(Object(Z.a)(1),Object(C.a)(function(e){return e?Object($.a)(e):(t.router.navigate(["/manage-technique-list"]),U.a)}))}}]),e}(),j.\u0275fac=function(e){return new(e||j)(l.Wb(O.a),l.Wb(b.b))},j.\u0275prov=l.Jb({token:j,factory:j.\u0275fac,providedIn:"root"}),j)}},{path:"",component:v}]}]}],E=((T=function e(){n(this,e)}).\u0275mod=l.Lb({type:T}),T.\u0275inj=l.Kb({factory:function(e){return new(e||T)},imports:[[b.f.forChild(B)],b.f]}),T),J=c("B+Mi"),H=c("rb4P"),X=((A=function e(){n(this,e)}).\u0275mod=l.Lb({type:A}),A.\u0275inj=l.Kb({factory:function(e){return new(e||A)},imports:[[r.c,s.c,a.b,u.d,J.a,E,H.a]]}),A)}}])}();