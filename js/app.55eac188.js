(function(e){function t(t){for(var a,o,i=t[0],l=t[1],s=t[2],u=0,d=[];u<i.length;u++)o=i[u],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&d.push(r[o][0]),r[o]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(e[a]=l[a]);b&&b(t);while(d.length)d.shift()();return c.push.apply(c,s||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],a=!0,o=1;o<n.length;o++){var i=n[o];0!==r[i]&&(a=!1)}a&&(c.splice(t--,1),e=l(l.s=n[0]))}return e}var a={},o={app:0},r={app:0},c=[];function i(e){return l.p+"js/"+({Career:"Career",Carousel:"Carousel",Intro:"Intro",Skills:"Skills"}[e]||e)+"."+{Career:"54422474",Carousel:"1205d2e8",Intro:"e07493d2",Skills:"3a5a0719"}[e]+".js"}function l(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,l),n.l=!0,n.exports}l.e=function(e){var t=[],n={Career:1,Carousel:1,Intro:1,Skills:1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=new Promise((function(t,n){for(var a="css/"+({Career:"Career",Carousel:"Carousel",Intro:"Intro",Skills:"Skills"}[e]||e)+"."+{Career:"d8d2ab9d",Carousel:"e2b5645f",Intro:"df8f9e84",Skills:"91450201"}[e]+".css",r=l.p+a,c=document.getElementsByTagName("link"),i=0;i<c.length;i++){var s=c[i],u=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(u===a||u===r))return t()}var d=document.getElementsByTagName("style");for(i=0;i<d.length;i++){s=d[i],u=s.getAttribute("data-href");if(u===a||u===r)return t()}var b=document.createElement("link");b.rel="stylesheet",b.type="text/css",b.onload=t,b.onerror=function(t){var a=t&&t.target&&t.target.src||r,c=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");c.code="CSS_CHUNK_LOAD_FAILED",c.request=a,delete o[e],b.parentNode.removeChild(b),n(c)},b.href=r;var f=document.getElementsByTagName("head")[0];f.appendChild(b)})).then((function(){o[e]=0})));var a=r[e];if(0!==a)if(a)t.push(a[2]);else{var c=new Promise((function(t,n){a=r[e]=[t,n]}));t.push(a[2]=c);var s,u=document.createElement("script");u.charset="utf-8",u.timeout=120,l.nc&&u.setAttribute("nonce",l.nc),u.src=i(e);var d=new Error;s=function(t){u.onerror=u.onload=null,clearTimeout(b);var n=r[e];if(0!==n){if(n){var a=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+a+": "+o+")",d.name="ChunkLoadError",d.type=a,d.request=o,n[1](d)}r[e]=void 0}};var b=setTimeout((function(){s({type:"timeout",target:u})}),12e4);u.onerror=u.onload=s,document.head.appendChild(u)}return Promise.all(t)},l.m=e,l.c=a,l.d=function(e,t,n){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)l.d(n,a,function(t){return e[t]}.bind(null,a));return n},l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="/portfolioV2/",l.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],u=s.push.bind(s);s.push=t,s=s.slice();for(var d=0;d<s.length;d++)t(s[d]);var b=u;c.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("cd49")},"19c5":function(e,t,n){},"36c1":function(e,t,n){"use strict";n("46aa")},3719:function(e,t,n){"use strict";n("b662")},"448b":function(e,t,n){e.exports=n.p+"img/profilePic.89252247.jpg"},"46aa":function(e,t,n){},5052:function(e,t,n){"use strict";n("ad1a")},"73ec":function(e,t,n){},ad1a:function(e,t,n){},ae38:function(e,t,n){"use strict";n("19c5")},b662:function(e,t,n){},cd49:function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("7a23"),o=(n("73ec"),n("ecee")),r=n("c074"),c=n("b702"),i=n("f2d1");n("99af");function l(e,t,n,o,r,c){return Object(a["m"])(),Object(a["f"])("svg",{xmlns:"http://www.w3.org/2000/svg",class:e.$props.class,viewBox:"0 0 ".concat(e.width," ").concat(e.height)},[Object(a["h"])("path",{fill:"currentColor",d:e.svgPath},null,8,["d"])],10,["viewBox"])}var s=Object(a["j"])({name:"FontAwesomeIcon",props:{icon:{type:String,required:!0},type:{type:String,default:"fas",required:!1},class:String},setup:function(e){var t=Object(a["d"])((function(){return Object(o["a"])({prefix:e.type,iconName:e.icon})})),n=Object(a["d"])((function(){return t.value.icon[0]})),r=Object(a["d"])((function(){return t.value.icon[1]})),c=Object(a["d"])((function(){return t.value.icon[4]}));return{width:n,height:r,svgPath:c}}});s.render=l;var u=s;o["b"].add(c["a"],c["b"],r["f"],i["b"],i["a"],i["c"],r["f"],r["c"],r["e"],r["d"],r["a"],r["b"]);var d={class:"container",style:{height:"100vh"}},b={class:"container-fluid wave",id:"intro-block"},f={class:"container"},v={class:"row"},p={class:"container overflow-hidden"},h={class:"row pb-5 flex-column"},j={class:"container-fluid wave-btm"},O={class:"container",id:"project-block"},m={class:"row pb-5 flex-column  overflow-hidden"},w={class:"container-fluid wave"},g={class:"container overflow-hidden",id:"about-block"},y={class:"row mb-5 flex-column"};function k(e,t,n,o,r,c){var i=Object(a["r"])("Navbar"),l=Object(a["r"])("Me"),s=Object(a["r"])("Catehead"),u=Object(a["r"])("Intro"),k=Object(a["r"])("Skills"),x=Object(a["r"])("Carousel"),S=Object(a["r"])("Career");return Object(a["m"])(),Object(a["f"])(a["a"],null,[Object(a["h"])(i,{screenSize:e.screenSize,onToProject:e.toProject,onToSkills:e.toSkills,onToIntro:e.toIntro,onToAbout:e.toAbout,onToTop:e.toTop},null,8,["screenSize","onToProject","onToSkills","onToIntro","onToAbout","onToTop"]),Object(a["h"])("div",d,[Object(a["h"])(l)]),Object(a["h"])("div",b,[Object(a["h"])("div",f,[Object(a["h"])("div",v,[Object(a["h"])(s,{"data-aos":"fade-left","data-aos-offset":"300","data-aos-delay":"100","data-aos-easing":"ease-in-out",title:"What i can do"}),Object(a["h"])(u)])])]),Object(a["h"])("div",p,[Object(a["h"])("div",h,[Object(a["h"])(s,{"data-aos":"fade-right","data-aos-duration":"4000","data-aos-offset":"300","data-aos-easing":"ease-in-out",title:"my skills"}),Object(a["h"])(k)])]),Object(a["h"])("div",j,[Object(a["h"])("div",O,[Object(a["h"])("div",m,[Object(a["h"])(s,{"data-aos":"fade-left","data-aos-offset":"300","data-aos-delay":"100","data-aos-easing":"ease-in-out",title:"my projects"}),Object(a["h"])(x,{"data-aos":"fade-right","data-aos-offset":"300","data-aos-delay":"100","data-aos-easing":"ease-in-out",style:{"z-index":"2"}})])])]),Object(a["h"])("div",w,[Object(a["h"])("div",g,[Object(a["h"])("div",y,[Object(a["h"])(s,{"data-aos":"fade-right","data-aos-offset":"300","data-aos-delay":"100","data-aos-easing":"ease-in-out",title:"about me"}),Object(a["h"])(S,{style:{"z-index":"2"}})])])])],64)}n("d3b7"),n("3ca3"),n("ddb0"),n("9911");var x=n("448b"),S=n.n(x),C=Object(a["w"])("data-v-6bc5c817");Object(a["o"])("data-v-6bc5c817");var T={class:"row mb-5 justify-content-center"},E={class:"col-12"},I={class:"profile-card d-flex flex-column justify-content-center align-items-center p-3 bd-filter shadow rounded"},P=Object(a["h"])("img",{class:"img-fluid user-img",src:S.a,alt:"","data-aos":"zoom-in-up"},null,-1),A={class:"align-middle ms-3"},_=Object(a["h"])("div",null,[Object(a["h"])("a",{class:" align-middle mx-auto position-relative overflow-hidden w-100 text-center d-flex my-3 p-3 shadow resume-btn",href:"https://www.cakeresume.com/eric840906",target:"blank","data-aos":"fade-up"},"Resume Download")],-1),N={class:"w-100 d-flex justify-content-evenly mb-2"},z=Object(a["h"])("h1",{class:"display-1 text-center",id:"my-intro"},null,-1);Object(a["n"])();var B=C((function(e,t,n,o,r,c){var i=Object(a["r"])("fa");return Object(a["m"])(),Object(a["f"])("div",T,[Object(a["h"])("div",E,[Object(a["h"])("div",I,[P,Object(a["h"])("div",null,[Object(a["h"])(a["c"],{appear:"",onBeforeEnter:e.beforeEnter,onEnter:e.enter},{default:C((function(){return[(Object(a["m"])(!0),Object(a["f"])(a["a"],null,Object(a["q"])(e.infoArr,(function(e,t){return Object(a["m"])(),Object(a["f"])("div",{class:"text-center d-flex my-2 info-row",key:e,"data-index":t},[Object(a["h"])(i,{icon:e.icon,type:e.type,class:"profile-icon"},null,8,["icon","type"]),Object(a["h"])("span",A,[Object(a["h"])("a",{href:e.link},Object(a["s"])(e.text),9,["href"])])],8,["data-index"])})),128))]})),_:1},8,["onBeforeEnter","onEnter"])]),_,Object(a["h"])("div",N,[Object(a["h"])(a["c"],{appear:"",onBeforeEnter:e.beforeEnter,onEnter:e.enter},{default:C((function(){return[(Object(a["m"])(!0),Object(a["f"])(a["a"],null,Object(a["q"])(e.linkBtnArr,(function(e,t){return Object(a["m"])(),Object(a["f"])("a",{key:e.link,href:e.link,target:"blank",class:"p-3 shadow rounded-circle glass-btn link-btn","data-index":t},[Object(a["h"])(i,{icon:e.icon,type:"fab",class:"profile-icon"},null,8,["icon"])],8,["href","data-index"])})),128))]})),_:1},8,["onBeforeEnter","onEnter"])]),z])])])})),L=n("cffa"),M=n("33a0"),q=Object(a["j"])({setup:function(){var e=Object(a["p"])([{link:"",text:"Eric Chiu",icon:"address-card",type:"far"},{link:"mailto:eric840906@hotmail.com.tw",text:"eric840906@hotmail.com.tw",icon:"envelope",type:"far"},{link:"https://hackmd.io/@c04lOMyVQZSN-SPA2h-MeA",text:"Hackmd notes",icon:"pencil-alt",type:"fas"}]),t=Object(a["p"])([{link:"https://github.com/eric840906",icon:"github-alt"},{link:"https://codepen.io/dyhebcro",icon:"codepen"},{link:"https://www.linkedin.com/in/eric-chiu-911a5a174/",icon:"linkedin-in"}]),n=function(e){e.style.opacity="0",e.style.transform="translateY(10px)"},o=function(e){e.dataset.index&&(console.log(e),L["a"].to(e,{opacity:1,y:0,duration:.8,delay:.2*+e.dataset.index}))};L["a"].registerPlugin(M["a"]);var r=L["a"].timeline();return Object(a["k"])((function(){r.to("#my-intro",{duration:5,text:"HI! My name is Eric,<br> a front-end developer."},"1")})),{infoArr:e,linkBtnArr:t,beforeEnter:n,enter:o}}});n("3719");q.render=B,q.__scopeId="data-v-6bc5c817";var Y=q,$=Object(a["w"])("data-v-e499b492");Object(a["o"])("data-v-e499b492");var D={class:"container-fluid"},W=Object(a["h"])("span",{class:"navbar-toggler-icon"},null,-1),H={class:["navbar-collapse","text-start"],id:"navbarSupportedContent"},F={class:"navbar-nav mb-2 mb-lg-0 fs-4 justify-content-evenly w-100"},J={class:"nav-item"},V={class:"nav-item"},K={class:"nav-item"},Q={class:"nav-item"},R={class:"nav-item"};Object(a["n"])();var U=$((function(e,t,n,o,r,c){return Object(a["m"])(),Object(a["f"])("div",null,[Object(a["h"])("nav",{class:["navbar","navbar-expand-lg","navbar-light","nav-bg","fixed-top","".concat(e.navShow?"nav-show":"nav-hide")]},[Object(a["h"])("div",D,[e.screenSize<993?(Object(a["m"])(),Object(a["f"])("button",{key:0,class:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",onClick:t[1]||(t[1]=function(){return e.toggleNav&&e.toggleNav.apply(e,arguments)})},[W])):Object(a["g"])("",!0),Object(a["h"])(a["b"],{name:"nav-show"},{default:$((function(){return[Object(a["u"])(Object(a["h"])("div",H,[Object(a["h"])("ul",F,[Object(a["h"])("li",J,[Object(a["h"])("a",{class:"text-decoration-none text-nav-link",href:"#",onClick:t[2]||(t[2]=Object(a["v"])((function(t){return e.$emit("toProject")}),["prevent"]))},"Project")]),Object(a["h"])("li",V,[Object(a["h"])("a",{class:"text-decoration-none text-nav-link",href:"#",onClick:t[3]||(t[3]=Object(a["v"])((function(t){return e.$emit("toIntro")}),["prevent"]))},"Intro")]),Object(a["h"])("li",K,[Object(a["h"])("a",{class:"text-decoration-none text-nav-link",href:"#",onClick:t[4]||(t[4]=Object(a["v"])((function(t){return e.$emit("toSkills")}),["prevent"]))},"Skills")]),Object(a["h"])("li",Q,[Object(a["h"])("a",{class:"text-decoration-none text-nav-link",href:"#",onClick:t[5]||(t[5]=Object(a["v"])((function(t){return e.$emit("toAbout")}),["prevent"]))},"About")]),Object(a["h"])("li",R,[Object(a["h"])("a",{class:"text-decoration-none text-nav-link",href:"#",onClick:t[6]||(t[6]=Object(a["v"])((function(t){return e.$emit("toTop")}),["prevent"]))},"Top")])])],512),[[a["t"],e.navbarStatus]])]})),_:1})])],2)])})),Z=(n("a9e3"),Object(a["j"])({emits:["toProject","toIntro","toSkills","toAbout","toTop"],props:{screenSize:{type:Number}},setup:function(){var e=Object(a["p"])(0),t=Object(a["p"])(!0);e.value=window.scrollY;var n=Object(a["p"])(!1),o=function(){n.value=!n.value};return Object(a["k"])((function(){window.addEventListener("scroll",(function(){t.value=!1,window.window.scrollY<e.value&&(t.value=!0),e.value=window.scrollY}))})),Object(a["l"])((function(){window.removeEventListener("scroll",(function(){t.value=!1,window.window.scrollY<e.value&&(t.value=!0),e.value=window.scrollY}))})),{navbarStatus:n,toggleNav:o,navShow:t}}}));n("36c1");Z.render=U,Z.__scopeId="data-v-e499b492";var G=Z,X=Object(a["w"])("data-v-d61f57ba");Object(a["o"])("data-v-d61f57ba");var ee={class:"title-main"};Object(a["n"])();var te=X((function(e,t,n,o,r,c){return Object(a["m"])(),Object(a["f"])("h1",{class:"display-6 text-uppercase my-5 title position-relative","data-title":e.title},[Object(a["h"])("span",ee,Object(a["s"])(e.title),1)],8,["data-title"])})),ne=Object(a["j"])({props:{title:{type:String}}});n("5052");ne.render=te,ne.__scopeId="data-v-d61f57ba";var ae=ne,oe=n("9420"),re=(n("e829"),n("f5af")),ce=n.n(re);ce.a.init({throttleDelay:99,once:!0});var ie=Object(a["i"])((function(){return n.e("Carousel").then(n.bind(null,"d221"))})),le=Object(a["i"])((function(){return n.e("Career").then(n.bind(null,"f519"))})),se=Object(a["i"])((function(){return n.e("Intro").then(n.bind(null,"70d2"))})),ue=Object(a["i"])((function(){return n.e("Skills").then(n.bind(null,"75d7"))})),de=Object(a["j"])({components:{Navbar:G,Me:Y,Catehead:ae,Intro:se,Carousel:ie,Skills:ue,Career:le},setup:function(){var e=Object(a["p"])(0);L["a"].registerPlugin(oe["a"]),e.value=window.innerWidth;var t=function(){L["a"].to(window,{duration:0,scrollTo:"#project-block"})},n=function(){L["a"].to(window,{duration:0,scrollTo:"#skill-block"})},o=function(){L["a"].to(window,{duration:0,scrollTo:"#about-block"})},r=function(){L["a"].to(window,{duration:0,scrollTo:"#intro-block"})},c=function(){L["a"].to(window,{duration:0,scrollTo:0})};return Object(a["k"])((function(){window.addEventListener("resize",(function(t){var n=t.target;e.value=n.innerWidth}))})),Object(a["l"])((function(){window.removeEventListener("resize",(function(t){var n=t.target;e.value=n.innerWidth}))})),{screenSize:e,toProject:t,toSkills:n,toAbout:o,toIntro:r,toTop:c}}});n("ae38");de.render=k;var be=de,fe=Object(a["e"])(be);fe.component("fa",u).mount("#app")}});
//# sourceMappingURL=app.55eac188.js.map