(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{"8aeQ":function(t,n,e){"use strict";e.d(n,"a",(function(){return a}));var o=e("fXoL");let a=(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=o.Eb({type:t,selectors:[["px-footer"]],decls:16,vars:0,consts:[[1,"footer","p-4"],[1,"row","text-center","mt-5","px-2","footer-items"],[1,"col-md-6","px-4"],[1,"d-flex-center"],[1,"copyright"],["href","javascript:void(0)"],[1,"col-md-4","offset-md-2","text-right","copyright"]],template:function(t,n){1&t&&(o.Pb(0,"section",0),o.Pb(1,"div",1),o.Pb(2,"div",2),o.Pb(3,"div",3),o.Pb(4,"span",4),o.nc(5,"\xa9 2022 copyright core.ai "),o.Ob(),o.Pb(6,"a",5),o.nc(7,"Support"),o.Ob(),o.Pb(8,"a",5),o.nc(9,"Terms of use"),o.Ob(),o.Pb(10,"a",5),o.nc(11,"License"),o.Ob(),o.Ob(),o.Ob(),o.Pb(12,"div",6),o.Pb(13,"span"),o.nc(14,"Made in India"),o.Ob(),o.Ob(),o.Ob(),o.Lb(15,"br"),o.Ob())},styles:[".footer[_ngcontent-%COMP%]{color:var(--text-color-light);background:url(borderline.9e1f2c6f68b559f9fe01.png),linear-gradient(#282727,#282727);background-position:bottom;background-repeat:no-repeat}.footer[_ngcontent-%COMP%]   .footer-items[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], .footer[_ngcontent-%COMP%]   .footer-items[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{margin:20px;white-space:nowrap}.footer[_ngcontent-%COMP%]   .footer-items[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:var(--text-color-light)}.footer[_ngcontent-%COMP%]   .footer-items[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{color:var(--accent-color)}.footer[_ngcontent-%COMP%]   .footer-items[_ngcontent-%COMP%]   .copyright[_ngcontent-%COMP%]{color:var(--text-color-gray)}"]}),t})()},QtF9:function(t,n,e){"use strict";e.r(n),e.d(n,"MainModule",(function(){return v}));var o=e("ofXK"),a=e("tyNb"),r=e("fXoL"),i=e("d6/a");let c=(()=>{class t{constructor(t){this.el=t,this.element=null,this.mouseOverParent=!1,this.parent=null,this.xMovement=10,this.yMovement=10,this.scroll=!1,this.updateElPosition=t=>{const n=t.clientX/document.body.clientWidth,e=t.clientY/document.body.clientHeight;this.element.style.transform=`translate(${(2*n-1)*this.xMovement}px, ${(2*e-1)*this.yMovement}px)`},this.updateElPositionOnScroll=t=>{if(console.log("scroll"),this.scroll){const t=window.scrollY/document.body.clientHeight;this.element.style.transform=`translateY(${3*this.yMovement*(2*t-1)}px)`}},this.element=t.nativeElement}ngAfterViewInit(){this.parent&&(this.parent.addEventListener("mouseenter",()=>{document.addEventListener("mousemove",this.updateElPosition)}),this.parent.addEventListener("mouseleave",()=>{document.removeEventListener("mousemove",this.updateElPosition)}))}}return t.\u0275fac=function(n){return new(n||t)(r.Kb(r.l))},t.\u0275dir=r.Fb({type:t,selectors:[["","pxMouseMove",""]],inputs:{parent:"parent",xMovement:"xMovement",yMovement:"yMovement",scroll:"scroll"}}),t})(),s=(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=r.Eb({type:t,selectors:[["px-banner"]],decls:28,vars:7,consts:[[1,"main"],["parent",""],["src","assets/images/vector-top-left.png","alt","topl",1,"vtl","z1"],["src","assets/images/vector-bottom-right.png","alt","bottoml",1,"vbr","z1"],["pxMouseMove","","src","assets/images/stars-left.svg","alt","bottoml",1,"stars-left","z2",3,"parent"],["pxMouseMove","","src","assets/images/stars-right.svg","alt","bottoml",1,"stars-right","z2",3,"parent"],[1,"container","content-container","d-flex","flex-column","justify-center","align-center","z8"],["pxMouseMove","","xMovement","3","yMovement","3","src","assets/images/phoenix-logo.svg","alt","logo",1,"brand-logo",3,"parent"],[1,"brand-text","text-center","z2"],[1,"primary-button"],["pxMouseMove","","xMovement","0","yMovement","10","src","assets/images/cloud1.svg","alt","cloud1",1,"cloud","cloud-1","z3",3,"parent"],["pxMouseMove","","xMovement","0","yMovement","15","src","assets/images/cloud2.svg","alt","cloud2",1,"cloud","cloud-2","z6",3,"parent"],["pxMouseMove","","xMovement","0","yMovement","25","src","assets/images/cloud3.svg","alt","cloud3",1,"cloud","cloud-3","z5",3,"parent"],["pxMouseMove","","xMovement","0","yMovement","5","src","assets/images/cloud4.svg","alt","cloud4",1,"cloud","cloud-4","z6",3,"parent"],[1,"sky"],["id","star-1",1,"star"],["id","star-2",1,"star"],["id","star-3",1,"star"],["id","star-4",1,"star"]],template:function(t,n){if(1&t&&(r.Pb(0,"section",0,1),r.Lb(2,"img",2),r.Lb(3,"img",3),r.Lb(4,"img",4),r.Lb(5,"img",5),r.Pb(6,"div",6),r.Lb(7,"img",7),r.Pb(8,"div",8),r.Pb(9,"h1"),r.nc(10,"phoenix"),r.Ob(),r.Pb(11,"span"),r.nc(12,"Modern. Open-source cloud based IDE "),r.Lb(13,"br"),r.nc(14," Runs anywhere"),r.Ob(),r.Lb(15,"br"),r.Lb(16,"br"),r.Pb(17,"button",9),r.nc(18,"Start Coding"),r.Ob(),r.Ob(),r.Ob(),r.Lb(19,"img",10),r.Lb(20,"img",11),r.Lb(21,"img",12),r.Lb(22,"img",13),r.Pb(23,"div",14),r.Lb(24,"div",15),r.Lb(25,"div",16),r.Lb(26,"div",17),r.Lb(27,"div",18),r.Ob(),r.Ob()),2&t){const t=r.gc(1);r.zb(4),r.ec("parent",t),r.zb(1),r.ec("parent",t),r.zb(2),r.ec("parent",t),r.zb(12),r.ec("parent",t),r.zb(1),r.ec("parent",t),r.zb(1),r.ec("parent",t),r.zb(1),r.ec("parent",t)}},directives:[c],styles:['.main[_ngcontent-%COMP%]{height:100vh;width:100vw;position:relative;overflow:hidden;background:linear-gradient(#000a2e 80%,#fff);-webkit-user-select:none;-moz-user-select:none;user-select:none}.main[_ngcontent-%COMP%]   .vtl[_ngcontent-%COMP%]{position:absolute;top:-10%;left:-20px}.main[_ngcontent-%COMP%]   .vbr[_ngcontent-%COMP%]{position:absolute;bottom:10%;right:-20px}.main[_ngcontent-%COMP%]   .stars-left[_ngcontent-%COMP%]{position:absolute;left:0;top:10%;opacity:.7}.main[_ngcontent-%COMP%]   .stars-right[_ngcontent-%COMP%]{position:absolute;right:0;top:5%;opacity:.7}.main[_ngcontent-%COMP%]   .content-container[_ngcontent-%COMP%]{color:var(--text-color-light);top:35%;left:50%;transform:translate(-50%,-50%);position:absolute;font-family:var(--font-montserrat-bold)}.main[_ngcontent-%COMP%]   .content-container[_ngcontent-%COMP%]   .brand-logo[_ngcontent-%COMP%]{height:35vh}.main[_ngcontent-%COMP%]   .content-container[_ngcontent-%COMP%]   .brand-text[_ngcontent-%COMP%]{margin-top:-30px}.main[_ngcontent-%COMP%]   .content-container[_ngcontent-%COMP%]   .brand-text[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:var(--font-size-xxl);margin-bottom:var(--space-lg)}.main[_ngcontent-%COMP%]   .content-container[_ngcontent-%COMP%]   .brand-text[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-family:var(--font-montserrat)}.main[_ngcontent-%COMP%]   .content-container[_ngcontent-%COMP%]   .brand-text[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{width:200px;height:45px}.main[_ngcontent-%COMP%]   .cloud[_ngcontent-%COMP%]{bottom:0;-webkit-user-drag:none;-khtml-user-drag:none;-moz-user-drag:none;-o-user-drag:none;user-drag:none}.main[_ngcontent-%COMP%]   .cloud[_ngcontent-%COMP%], .sky[_ngcontent-%COMP%]{position:absolute;width:100%}.sky[_ngcontent-%COMP%]{height:100%;transform:rotate(136deg);top:-182px;left:472px;z-index:2;opacity:.5}.star[_ngcontent-%COMP%]{position:absolute;left:50%;top:50%;height:2px;border-radius:885px;background:linear-gradient(-45deg,#eef0f5,rgba(0,0,255,0));filter:drop-shadow(0 0 6px #d7dff0);animation:tail 5s ease-in-out infinite,shooting 5s ease-in-out infinite}.star[_ngcontent-%COMP%]:after, .star[_ngcontent-%COMP%]:before{content:"";position:absolute;top:calc(50% - 1px);right:0;height:2px;background:linear-gradient(-45deg,rgba(0,0,255,0),#eaeef8,rgba(0,0,255,0));transform:translateX(50%) rotate(45deg);border-radius:100%;animation:shining 3s ease-in-out infinite}.star[_ngcontent-%COMP%]:after{transform:translateX(50%) rotate(-45deg)}.star[_ngcontent-%COMP%]:first-child{top:calc(50% + 119px);left:calc(50% - 43px)}.star[_ngcontent-%COMP%]:first-child:after, .star[_ngcontent-%COMP%]:first-child:before{animation-delay:12s}.star[_ngcontent-%COMP%]:nth-child(2){top:calc(50% + 100px);left:calc(50% - 137px);animation-delay:5s}.star[_ngcontent-%COMP%]:nth-child(2):after, .star[_ngcontent-%COMP%]:nth-child(2):before{animation-delay:10s}.star[_ngcontent-%COMP%]:nth-child(3){top:calc(50% + 90px);left:calc(50% - 222px);animation-delay:7s}.star[_ngcontent-%COMP%]:nth-child(3):after, .star[_ngcontent-%COMP%]:nth-child(3):before{animation-delay:7s}.star[_ngcontent-%COMP%]:nth-child(4){top:calc(50% + 129px);left:calc(50% - 213px);animation-delay:7s}.star[_ngcontent-%COMP%]:nth-child(4):after, .star[_ngcontent-%COMP%]:nth-child(4):before{animation-delay:7s}.star[_ngcontent-%COMP%]:nth-child(5){top:calc(50% - 146px);left:calc(50% - 112px);animation-delay:3s}.star[_ngcontent-%COMP%]:nth-child(5):after, .star[_ngcontent-%COMP%]:nth-child(5):before{animation-delay:3s}.star[_ngcontent-%COMP%]:nth-child(6){top:calc(50% + 108px);left:calc(50% - 160px);animation-delay:3s}.star[_ngcontent-%COMP%]:nth-child(6):after, .star[_ngcontent-%COMP%]:nth-child(6):before{animation-delay:3s}.star[_ngcontent-%COMP%]:nth-child(7){top:calc(50% - 52px);left:calc(50% - 72px);animation-delay:7s}.star[_ngcontent-%COMP%]:nth-child(7):after, .star[_ngcontent-%COMP%]:nth-child(7):before{animation-delay:7s}@keyframes tail{0%{width:0}30%{width:100px}to{width:0}}@keyframes shining{0%{width:0}50%{width:30px}to{width:0}}@keyframes shooting{0%{transform:translateX(0)}to{transform:translateX(500px)}}']}),t})(),b=(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=r.Eb({type:t,selectors:[["px-meet-phoenix"]],decls:42,vars:0,consts:[[1,"container-fluid","w-100"],[1,"heading-container","container","text-center","pt-5"],[1,"row"],[1,"heading","col-md-12"],[1,"description","offset-md-4","col-md-4","mt-2"],[1,"row","content-1"],[1,"col-md-6","px-5"],["src","../../../../../../assets/images/meetPhoenixGraphics.png","alt","",1,"meet-img"],[1,"col-md-6"],[1,"col-md-12"],[1,"row","text-left","mt-5"],[1,"col-md-6","mt-4"],[1,"heading","col-md-12","mb-4"],[1,"description","col-md-12"],[1,"col-md-4"],["src","../../../../../../assets/images/meetPhoenixG1.png","alt",""],[1,"col-md-12","mt-5"],[1,"row","text-left","mt-4"],["src","../../../../../../assets/images/meetPhoenixG2.png","alt",""]],template:function(t,n){1&t&&(r.Pb(0,"section",0),r.Pb(1,"div",1),r.Pb(2,"div",2),r.Pb(3,"span",3),r.nc(4," Meet Phoenix "),r.Ob(),r.Pb(5,"span",4),r.nc(6," Brand new modern and open source code editor for web development in cloud, packed with powerful features and extensions "),r.Ob(),r.Ob(),r.Ob(),r.Pb(7,"div",5),r.Pb(8,"div",6),r.Lb(9,"img",7),r.Ob(),r.Pb(10,"div",8),r.Pb(11,"div",2),r.Pb(12,"div",9),r.Pb(13,"div",10),r.Pb(14,"div",11),r.Pb(15,"div",2),r.Pb(16,"span",12),r.nc(17," Edit Code Locally "),r.Ob(),r.Pb(18,"div",13),r.Pb(19,"p"),r.nc(20,"Without installing any IDE "),r.Ob(),r.Pb(21,"p"),r.nc(22,"No signup required"),r.Ob(),r.Pb(23,"p"),r.nc(24,"Code without conidtions"),r.Ob(),r.Ob(),r.Ob(),r.Ob(),r.Pb(25,"div",14),r.Lb(26,"img",15),r.Ob(),r.Ob(),r.Ob(),r.Pb(27,"div",16),r.Pb(28,"div",17),r.Pb(29,"div",11),r.Pb(30,"div",2),r.Pb(31,"span",12),r.nc(32," Multidevice Support "),r.Ob(),r.Pb(33,"div",13),r.Pb(34,"p"),r.nc(35,"Code from anywhere "),r.Ob(),r.Pb(36,"p"),r.nc(37,"anywhere"),r.Ob(),r.Pb(38,"p"),r.nc(39,"any browser"),r.Ob(),r.Ob(),r.Ob(),r.Ob(),r.Pb(40,"div",14),r.Lb(41,"img",18),r.Ob(),r.Ob(),r.Ob(),r.Ob(),r.Ob(),r.Ob(),r.Ob())},styles:["section[_ngcontent-%COMP%]   .heading-container[_ngcontent-%COMP%]   .heading[_ngcontent-%COMP%]{font-family:var(--font-montserrat-bold);color:var(--primary-color);font-size:var(--font-size-xxl);font-style:italic}section[_ngcontent-%COMP%]   .heading-container[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%]{font-family:var(--font-montserrat);width:50%}section[_ngcontent-%COMP%]   .content-1[_ngcontent-%COMP%]   .meet-img[_ngcontent-%COMP%]{margin-top:-100px}section[_ngcontent-%COMP%]   .content-1[_ngcontent-%COMP%]   .heading[_ngcontent-%COMP%]{font-family:var(--font-montserrat-bold);color:var(--primary-color);font-size:var(--font-size-xl)}section[_ngcontent-%COMP%]   .content-1[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{line-height:.8}"]}),t})(),l=(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=r.Eb({type:t,selectors:[["px-features"]],decls:83,vars:0,consts:[[1,"features","container-fluid"],[1,"heading-container","container","text-center","py-5"],[1,"row","py-5"],[1,"heading","col-md-12"],[1,"row","preview"],[1,"col-md-6"],[1,"row","text-left"],[1,"offset-md-1","col-md-3","pl-4"],["src","assets/images/flash.gif","alt","flash",1,"flash-img"],[1,"col-md-6","mt-4"],[1,"row"],[1,"heading","col-md-12","mb-4"],[1,"description","col-md-12"],["src","assets/images/load.gif","alt","flash",1,"sq-img"],[1,"row","my-5","py-5"],[1,"col-md-3","d-flex-center"],[1,"col-md-6","d-flex-space-around"],["src","assets/images/js.png","alt","icons"],["src","assets/images/ts.png","alt","icons"],["src","assets/images/html.png","alt","icons"],["src","assets/images/css.png","alt","icons"],[1,"container-fluid"],[1,"row","md-12","my-5","py-5"],[1,"offset-md-1","col-md-5","row","text-center"],[1,"col-md-12"],["src","assets/images/diff.png","alt","img"],[1,"col-md-1","d-flex-center"],["src","assets/images/&.png","alt",""],[1,"col-md-5","d-flex-center","row","text-center"],["src","assets/images/code.png","alt","img"],[1,"container-fluid","pb-5","preview"],[1,"row","pb-5"],[1,"offset-md-1","col-md-3"],["src","assets/images/extension.png","alt",""],[1,"col-md","d-flex-center"],[1,"heading"],[1,"col-md-10"],[1,"illustration"],[1,"container","pt-5","d-flex-center"],["src","assets/images/Illustration.png","alt","people"]],template:function(t,n){1&t&&(r.Pb(0,"section",0),r.Pb(1,"div",1),r.Pb(2,"div",2),r.Pb(3,"span",3),r.nc(4," Packed with features... "),r.Ob(),r.Ob(),r.Ob(),r.Pb(5,"div",4),r.Pb(6,"div",5),r.Pb(7,"div",6),r.Pb(8,"div",7),r.Lb(9,"img",8),r.Ob(),r.Pb(10,"div",9),r.Pb(11,"div",10),r.Pb(12,"span",11),r.nc(13," LIVE APP PREVIEW "),r.Ob(),r.Pb(14,"div",12),r.Pb(15,"p"),r.nc(16,"Experience a new supercharged "),r.Lb(17,"br"),r.nc(18," live preview feature. Code and view "),r.Lb(19,"br"),r.nc(20," changes on the fly. "),r.Ob(),r.Ob(),r.Ob(),r.Ob(),r.Ob(),r.Ob(),r.Pb(21,"div",5),r.Pb(22,"div",6),r.Pb(23,"div",7),r.Lb(24,"img",13),r.Ob(),r.Pb(25,"div",9),r.Pb(26,"div",10),r.Pb(27,"span",11),r.nc(28," LIVE MARKUP PREVIEW "),r.Ob(),r.Pb(29,"div",12),r.Pb(30,"p"),r.nc(31,"View your markup and documentation "),r.Lb(32,"br"),r.nc(33," changes on the fly using phoenix\u2019s "),r.Lb(34,"br"),r.nc(35," markup preview pane "),r.Ob(),r.Ob(),r.Ob(),r.Ob(),r.Ob(),r.Ob(),r.Ob(),r.Pb(36,"div",14),r.Pb(37,"span",15),r.nc(38," phoenix is tailor made for "),r.Ob(),r.Pb(39,"div",16),r.Lb(40,"img",17),r.Lb(41,"img",18),r.Lb(42,"img",19),r.Lb(43,"img",20),r.Ob(),r.Pb(44,"span",15),r.nc(45," and many more... "),r.Ob(),r.Ob(),r.Pb(46,"div",21),r.Pb(47,"div",22),r.Pb(48,"div",23),r.Pb(49,"div",24),r.nc(50,"with a fully feature git client inbuilt"),r.Ob(),r.Pb(51,"div",24),r.Lb(52,"img",25),r.Ob(),r.Ob(),r.Pb(53,"div",26),r.Lb(54,"img",27),r.Ob(),r.Pb(55,"div",28),r.Pb(56,"div",24),r.nc(57," With intelligent code navigation, completion and refactor support "),r.Ob(),r.Pb(58,"div",24),r.Lb(59,"img",29),r.Ob(),r.Ob(),r.Ob(),r.Ob(),r.Pb(60,"div",30),r.Pb(61,"div",31),r.Pb(62,"div",32),r.Lb(63,"img",33),r.Ob(),r.Pb(64,"div",34),r.Pb(65,"div",6),r.Pb(66,"div",24),r.Pb(67,"span",35),r.nc(68,"EXTENSION REGISTRY"),r.Ob(),r.Lb(69,"br"),r.Lb(70,"br"),r.Ob(),r.Pb(71,"div",36),r.nc(72," Completely customizable with thousands of extensions available in the extension registry. "),r.Lb(73,"br"),r.Lb(74,"br"),r.nc(75," Phoenix\u2019s features out of the box are just a start. Extensions let you give wings to phoenix by adding new tools, languages, features, themes, and many more... Give it a try. "),r.Lb(76,"br"),r.Lb(77,"br"),r.nc(78," Millions of developers using phoenix contribute to phoenix\u2019s features and developer support. "),r.Ob(),r.Ob(),r.Ob(),r.Ob(),r.Ob(),r.Ob(),r.Pb(79,"section",37),r.Pb(80,"div",38),r.Pb(81,"div",2),r.Lb(82,"img",39),r.Ob(),r.Ob(),r.Ob())},styles:[".features[_ngcontent-%COMP%]{background:url(featureBG.cec09191c4879d6552e8.png);background-repeat:repeat;background-size:100% 100%}.features[_ngcontent-%COMP%], .features[_ngcontent-%COMP%]   .heading[_ngcontent-%COMP%]{color:var(--text-color-light)}.features[_ngcontent-%COMP%]   .heading[_ngcontent-%COMP%]{font-size:var(--font-size-lg);font-family:var(--font-montserrat-bold)}.features[_ngcontent-%COMP%]   .preview[_ngcontent-%COMP%]   .heading[_ngcontent-%COMP%]{color:var(--accent-color);font-size:var(--font-size-xl);font-family:var(--font-montserrat-bold);font-style:italic}.features[_ngcontent-%COMP%]   .preview[_ngcontent-%COMP%]   .flash-img[_ngcontent-%COMP%], .features[_ngcontent-%COMP%]   .preview[_ngcontent-%COMP%]   .sq-img[_ngcontent-%COMP%]{max-width:120px}"]}),t})(),d=(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=r.Eb({type:t,selectors:[["px-workspaces"]],decls:57,vars:0,consts:[[1,"workspaces","container-fluid"],[1,"introducing","row"],[1,"d-flex-center","w-100"],[1,"p-4","white","text-intro"],[1,"col-md-12","text-center"],[1,"white","p-4","main-heading"],[1,"col-md-12","text-center","mb-4","table-img"],["src","assets/images/developers-table.png","alt","",1,"white","p-4"],[1,"py-4","col-md-8","offset-md-2","white"],[1,"col-md-12","text-center","my-4","host-img","row"],[1,"py-4","px-0","col-md-4","offset-md-1"],[1,"white","p-4","mt-4"],["src","assets/images/host.png","alt","host",1,"white","p-4"],[1,"col-md-4","px-0"],[1,"white","p-4"],[1,"col-md-12","text-center","my-4"],[1,"row"],[1,"col-md-6"],["src","assets/images/collab-coding.png","alt","",1,"white","collab-coding"],[1,"col-md-6","white"],[1,"main-heading","collab"],[1,"text-left","points"],[1,"col-md-5","offset-md-1","white","d-flex-center","flex-column"],[1,"text-left"],[1,"col-md-6","text-left"],["src","assets/images/login.png","alt","",1,"white","collab-coding"]],template:function(t,n){1&t&&(r.Pb(0,"section",0),r.Pb(1,"div",1),r.Pb(2,"div",2),r.Pb(3,"h1",3),r.nc(4,"Introducing"),r.Ob(),r.Ob(),r.Pb(5,"div",4),r.Pb(6,"div",2),r.Pb(7,"h1",5),r.nc(8,"DEVELOPMENT WORKSPACES"),r.Ob(),r.Ob(),r.Ob(),r.Pb(9,"div",6),r.Lb(10,"img",7),r.Pb(11,"div",8),r.Pb(12,"p"),r.nc(13,"Phoenix\u2019s development workspaces are not just your project\u2019s root folder like you have experienced in other IDE\u2019s. Phoenix workspaces are real local & cloud spaces."),r.Ob(),r.Ob(),r.Ob(),r.Pb(14,"div",9),r.Pb(15,"div",10),r.Pb(16,"p",11),r.nc(17,"Setup Development workspaces locally & in the cloud. "),r.Lb(18,"br"),r.nc(19," With just the click of a button"),r.Ob(),r.Ob(),r.Lb(20,"img",12),r.Pb(21,"div",13),r.Pb(22,"p",14),r.nc(23,"Host & share apps easily"),r.Ob(),r.Ob(),r.Ob(),r.Pb(24,"div",15),r.Pb(25,"div",16),r.Pb(26,"div",17),r.Lb(27,"img",18),r.Ob(),r.Pb(28,"div",19),r.Pb(29,"p",20),r.nc(30,"COLLABORATIVE DEVELOPMENT"),r.Ob(),r.Pb(31,"p"),r.nc(32,"do it the right way with phoenix"),r.Ob(),r.Lb(33,"br"),r.Pb(34,"ol",21),r.Pb(35,"li"),r.nc(36," Create custom development workspace and share it with the team. "),r.Ob(),r.Pb(37,"li"),r.nc(38," Seamless workspace roaming between all your connected devices. "),r.Ob(),r.Pb(39,"li"),r.nc(40," Continous cloud backup and recovery of workspaces. "),r.Ob(),r.Pb(41,"li"),r.nc(42," Experience peer programming at its best. "),r.Ob(),r.Ob(),r.Ob(),r.Ob(),r.Pb(43,"div",16),r.Pb(44,"div",22),r.Pb(45,"p",20),r.nc(46,"AUTH"),r.Ob(),r.Pb(47,"p",23),r.nc(48,"Multiple Authentication mechanisms Supports google, facebook, git and bitbucket logins"),r.Ob(),r.Lb(49,"br"),r.Lb(50,"br"),r.Pb(51,"p",20),r.nc(52,"ENTERPRISE"),r.Ob(),r.Pb(53,"p",23),r.nc(54,"SAML Enterprise logins Optional self hosting Advanced Auditing Enforce source code copy policies in developer machines"),r.Ob(),r.Ob(),r.Pb(55,"div",24),r.Lb(56,"img",25),r.Ob(),r.Ob(),r.Ob(),r.Ob(),r.Ob())},styles:[".workspaces[_ngcontent-%COMP%]{color:var(--text-color);background:url(dot-bg.6d062be8b71a29060be2.png);background-size:cover}.workspaces[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-family:var(--font-montserrat);font-size:var(--font-size-lg)}.workspaces[_ngcontent-%COMP%]   .white[_ngcontent-%COMP%]{background-color:#fff}.workspaces[_ngcontent-%COMP%]   .text-intro[_ngcontent-%COMP%]{font-family:var(--font-caveat)}.workspaces[_ngcontent-%COMP%]   .main-heading[_ngcontent-%COMP%]{font-family:var(--font-montserrat-extra-bold);font-style:italic}.workspaces[_ngcontent-%COMP%]   .table-img[_ngcontent-%COMP%]{margin-top:-5px}.workspaces[_ngcontent-%COMP%]   .collab[_ngcontent-%COMP%]{font-size:var(--font-size-xl)}.workspaces[_ngcontent-%COMP%]   .points[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{margin:20px 0}"]}),t})(),g=(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=r.Eb({type:t,selectors:[["px-server"]],decls:32,vars:1,consts:[[1,"server"],[1,"my-4","w-100","text-center"],[1,"p-4","transparent","main-heading"],[1,"d-flex-center","mb-5"],[1,"terminal"],[1,"row","text-center","px-5"],[1,"col-md-4","link"],[1,"col-md-4","link",3,"routerLink"]],template:function(t,n){1&t&&(r.Pb(0,"section",0),r.Lb(1,"br"),r.Lb(2,"br"),r.Pb(3,"div",1),r.Pb(4,"span",2),r.nc(5," SERVER "),r.Ob(),r.Ob(),r.Lb(6,"br"),r.Pb(7,"div",3),r.Pb(8,"div",4),r.Lb(9,"br"),r.Pb(10,"p"),r.nc(11,"Terminal access: guarenteed on cloud and onprem with sudo access"),r.Ob(),r.Lb(12,"br"),r.Lb(13,"br"),r.Pb(14,"p"),r.nc(15," > On demand virtual machines with sudo access in the cloud for performance "),r.Lb(16,"br"),r.Lb(17,"br"),r.nc(18," > Fully Featured Terminal Support "),r.Lb(19,"br"),r.Lb(20,"br"),r.nc(21," > Choose servers based on geo-location "),r.Ob(),r.Ob(),r.Ob(),r.Lb(22,"br"),r.Pb(23,"div",5),r.Pb(24,"div",6),r.nc(25,"VISION"),r.Ob(),r.Pb(26,"div",6),r.nc(27,"MISSION"),r.Ob(),r.Pb(28,"div",7),r.nc(29,"ABOUT"),r.Ob(),r.Ob(),r.Lb(30,"br"),r.Lb(31,"br"),r.Ob()),2&t&&(r.zb(28),r.ec("routerLink","/about"))},directives:[a.b],styles:[".server[_ngcontent-%COMP%]{color:var(--text-color-light);background:url(white-dot-bg.8d8714e1c71a487e620d.png),linear-gradient(#282727,#282727);background-size:contain;background-repeat:no-repeat}.server[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-family:var(--font-montserrat);font-size:var(--font-size-lg)}.server[_ngcontent-%COMP%]   .transparent[_ngcontent-%COMP%]{background-color:var(--background-color-dark)}.server[_ngcontent-%COMP%]   .main-heading[_ngcontent-%COMP%]{font-family:var(--font-montserrat-extra-bold);font-style:italic;font-size:var(--font-size-xxl)}.server[_ngcontent-%COMP%]   .terminal[_ngcontent-%COMP%]{background:url(terminal.7fe5321f9c595f5a815f.png),linear-gradient(#282727,#282727);background-size:cover;min-height:500px;min-width:50vw;background-repeat:none;padding:50px;overflow:hidden;color:var(--text-color-gray)}.server[_ngcontent-%COMP%]   .link[_ngcontent-%COMP%]{font-family:var(--font-montserrat-bold);font-size:var(--font-size-xxl);cursor:pointer}.server[_ngcontent-%COMP%]   .link[_ngcontent-%COMP%]:hover{color:var(--accent-color)}"]}),t})();var p=e("8aeQ");let m=(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=r.Eb({type:t,selectors:[["px-landing"]],decls:7,vars:0,consts:[[1,"w-100","p-0"]],template:function(t,n){1&t&&(r.Pb(0,"div",0),r.Lb(1,"px-banner"),r.Lb(2,"px-meet-phoenix"),r.Lb(3,"px-features"),r.Lb(4,"px-workspaces"),r.Lb(5,"px-server"),r.Lb(6,"px-footer"),r.Ob())},directives:[s,b,l,d,g,p.a],styles:[""]}),t})();const O=[{path:"",component:(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=r.Eb({type:t,selectors:[["px-main"]],decls:2,vars:0,template:function(t,n){1&t&&(r.Lb(0,"px-nav"),r.Lb(1,"px-landing"))},directives:[i.a,m],styles:[""]}),t})()}];let P=(()=>{class t{}return t.\u0275mod=r.Ib({type:t}),t.\u0275inj=r.Hb({factory:function(n){return new(n||t)},imports:[[a.d.forChild(O)],a.d]}),t})(),v=(()=>{class t{}return t.\u0275mod=r.Ib({type:t}),t.\u0275inj=r.Hb({factory:function(n){return new(n||t)},imports:[[o.b,P]]}),t})()},"d6/a":function(t,n,e){"use strict";e.d(n,"a",(function(){return r}));var o=e("fXoL"),a=e("tyNb");let r=(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=o.Eb({type:t,selectors:[["px-nav"]],decls:37,vars:2,consts:[[1,"navbar","navbar-expand-lg"],[1,"navbar-brand",3,"routerLink"],["src","assets/images/nav-logo.svg","alt","logo"],[1,"sub-heading"],["type","button","data-toggle","collapse","data-target","#navbarSupportedContent","aria-controls","navbarSupportedContent","aria-expanded","false","aria-label","Toggle navigation",1,"navbar-toggler"],[1,"navbar-toggler-icon"],["id","navbarSupportedContent",1,"collapse","navbar-collapse"],[1,"navbar-nav","mr-auto"],[1,"div-inline","my-2","my-lg-0"],[1,"nav-item","active"],["href","#",1,"nav-link",3,"routerLink"],["href","#",1,"nav-link"],["href","","target","_blank","aria-label","GitHub",1,"nav-link","icon"],["xmlns","http://www.w3.org/2000/svg","viewBox","0 0 512 499.36","focusable","false",1,"navbar-nav-svg"],["d","M256 0C114.64 0 0 114.61 0 256c0 113.09 73.34 209 175.08 242.9 12.8 2.35 17.47-5.56 17.47-12.34 0-6.08-.22-22.18-.35-43.54-71.2 15.49-86.2-34.34-86.2-34.34-11.64-29.57-28.42-37.45-28.42-37.45-23.27-15.84 1.73-15.55 1.73-15.55 25.69 1.81 39.21 26.38 39.21 26.38 22.84 39.12 59.92 27.82 74.5 21.27 2.33-16.54 8.94-27.82 16.25-34.22-56.84-6.43-116.6-28.43-116.6-126.49 0-27.95 10-50.8 26.35-68.69-2.63-6.48-11.42-32.5 2.51-67.75 0 0 21.49-6.88 70.4 26.24a242.65 242.65 0 0 1 128.18 0c48.87-33.13 70.33-26.24 70.33-26.24 14 35.25 5.18 61.27 2.55 67.75 16.41 17.9 26.31 40.75 26.31 68.69 0 98.35-59.85 120-116.88 126.32 9.19 7.9 17.38 23.53 17.38 47.41 0 34.22-.31 61.83-.31 70.23 0 6.85 4.61 14.81 17.6 12.31C438.72 464.97 512 369.08 512 256.02 512 114.62 397.37 0 256 0z","fill-rule","evenodd"],["href","","target","_blank","aria-label","Twitter",1,"nav-link","icon"],["xmlns","http://www.w3.org/2000/svg","viewBox","0 0 512 416.32","focusable","false",1,"navbar-nav-svg"],["d","M160.83 416.32c193.2 0 298.92-160.22 298.92-298.92 0-4.51 0-9-.2-13.52A214 214 0 0 0 512 49.38a212.93 212.93 0 0 1-60.44 16.6 105.7 105.7 0 0 0 46.3-58.19 209 209 0 0 1-66.79 25.37 105.09 105.09 0 0 0-181.73 71.91 116.12 116.12 0 0 0 2.66 24c-87.28-4.3-164.73-46.3-216.56-109.82A105.48 105.48 0 0 0 68 159.6a106.27 106.27 0 0 1-47.53-13.11v1.43a105.28 105.28 0 0 0 84.21 103.06 105.67 105.67 0 0 1-47.33 1.84 105.06 105.06 0 0 0 98.14 72.94A210.72 210.72 0 0 1 25 370.84a202.17 202.17 0 0 1-25-1.43 298.85 298.85 0 0 0 160.83 46.92"]],template:function(t,n){1&t&&(o.Pb(0,"nav",0),o.Pb(1,"a",1),o.Lb(2,"img",2),o.Pb(3,"span",3),o.nc(4,"phoenix"),o.Ob(),o.Ob(),o.Pb(5,"button",4),o.Lb(6,"span",5),o.Ob(),o.Pb(7,"div",6),o.Lb(8,"ul",7),o.Pb(9,"div",8),o.Pb(10,"ul",7),o.Pb(11,"li",9),o.Pb(12,"a",10),o.nc(13,"About"),o.Ob(),o.Ob(),o.Pb(14,"li",9),o.Pb(15,"a",11),o.nc(16,"Contribute"),o.Ob(),o.Ob(),o.Pb(17,"li",9),o.Pb(18,"a",11),o.nc(19,"Support"),o.Ob(),o.Ob(),o.Pb(20,"li",9),o.Pb(21,"a",11),o.nc(22,"API"),o.Ob(),o.Ob(),o.Pb(23,"li"),o.Pb(24,"a",12),o.ac(),o.Pb(25,"svg",13),o.Pb(26,"title"),o.nc(27,"GitHub"),o.Ob(),o.Lb(28,"path",14),o.Ob(),o.nc(29," \xa0 "),o.Ob(),o.Ob(),o.Zb(),o.Pb(30,"li"),o.Pb(31,"a",15),o.ac(),o.Pb(32,"svg",16),o.Pb(33,"title"),o.nc(34,"Twitter"),o.Ob(),o.Lb(35,"path",17),o.Ob(),o.nc(36," \xa0 "),o.Ob(),o.Ob(),o.Ob(),o.Ob(),o.Ob(),o.Ob()),2&t&&(o.zb(1),o.ec("routerLink","/home"),o.zb(11),o.ec("routerLink","/about"))},directives:[a.c],styles:["[_nghost-%COMP%]{position:absolute;top:0;width:100%}nav[_ngcontent-%COMP%]{height:var(--nav-height);background-color:transparent;z-index:100}nav[_ngcontent-%COMP%]   .navbar-brand[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:80px}nav[_ngcontent-%COMP%]   .navbar-brand[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{margin-left:-5px;font-family:var(--font-montserrat-bold);font-size:var(--font-size-xl)}nav[_ngcontent-%COMP%]   .navbar-brand[_ngcontent-%COMP%]:hover{color:var(--text-color-light)}nav[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]{margin:0 20px}nav[_ngcontent-%COMP%]   .nav-link.icon[_ngcontent-%COMP%]{margin:0}nav[_ngcontent-%COMP%]   .navbar-nav-svg[_ngcontent-%COMP%]{fill:var(--text-color-light);height:20px}nav[_ngcontent-%COMP%]   .navbar-nav-svg[_ngcontent-%COMP%]:hover{fill:var(--accent-color)}"]}),t})()}}]);