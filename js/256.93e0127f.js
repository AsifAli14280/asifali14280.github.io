"use strict";(self["webpackChunk_1timeused_quasar"]=self["webpackChunk_1timeused_quasar"]||[]).push([[256],{8256:(e,t,a)=>{a.r(t),a.d(t,{default:()=>Ue});var s=a(9835),o=a(6970),l=a(499),c=a(4511);const r={class:"bg-white"},n={class:"row border-bottom items-center"},i={class:"col col-md-4 text-center"},u=(0,s.Uk)(" No results "),d={class:"col-2 col-md-4 text-center"},m=["src"],p={class:"col-10 col-md-4 text-center text-right"},f=(0,s.Uk)("2"),g=(0,s.Uk)("100+"),w=["src"],v=(0,s.Uk)(" Account"),b=(0,s.Uk)(" Account Settings"),h=(0,s.Uk)(" Account Settings"),_={setup(e){(0,l.iH)("");const t="https://1timeused.com/",a=(0,c.t)(),_=a.authUser;console.log(_);const k=["Google","Facebook","Twitter","Apple","Oracle"],y=(0,l.iH)(k),x=(0,l.iH)(),q=(e,t,a)=>{store.loadSearchProduct(x.value),setTimeout((()=>{t((()=>{if(""===e)y.value=k;else{const t=e.toLowerCase();y.value=k.filter((e=>e.toLowerCase().indexOf(t)>-1))}}))}),500)},W=()=>{console.log("delayed filter aborted")};function U(){a.logout()}return(e,c)=>{const k=(0,s.up)("q-item-section"),Z=(0,s.up)("q-item"),Q=(0,s.up)("q-btn"),C=(0,s.up)("q-select"),S=(0,s.up)("router-link"),$=(0,s.up)("q-badge"),j=(0,s.up)("q-separator"),z=(0,s.up)("q-list"),H=(0,s.up)("q-menu"),D=(0,s.up)("q-avatar");return(0,s.wg)(),(0,s.iD)("div",r,[(0,s._)("div",{class:(0,o.C_)(["container",{"bg-primary":e.$q.screen.lt.md,"bg-white":e.$q.screen.gt.sm}])},[(0,s._)("div",n,[(0,s._)("div",i,[e.$q.screen.gt.sm?((0,s.wg)(),(0,s.j4)(C,{key:0,filled:"",modelValue:x.value,"onUpdate:modelValue":c[0]||(c[0]=e=>x.value=e),"use-input":"","hide-selected":"","fill-input":"","input-debounce":"500",dense:"",label:"Search Here",options:y.value,onFilter:q,onFilterAbort:W,style:{"max-width":"100%"},"dropdown-icon":"false"},{"no-option":(0,s.w5)((()=>[(0,s.Wm)(Z,null,{default:(0,s.w5)((()=>[(0,s.Wm)(k,{class:"text-grey"},{default:(0,s.w5)((()=>[u])),_:1})])),_:1})])),after:(0,s.w5)((()=>[(0,s.Wm)(Q,{icon:"search",size:"16px",outline:""})])),_:1},8,["modelValue","options"])):(0,s.kq)("",!0)]),(0,s._)("div",d,[(0,s.Wm)(S,{to:"/"},{default:(0,s.w5)((()=>[(0,s._)("img",{src:`https://1timeused.com/assets/img/logo/${e.$q.screen.lt.md?"logo-white":"logo"}.png`,alt:"",class:"brand-logo q-py-sm"},null,8,m)])),_:1})]),(0,s._)("div",p,[(0,s._)("div",null,[(0,s.Wm)(Q,{size:e.$q.screen.lt.md?"sm":"md",class:"q-mr-md",round:"",color:"primary",glossy:"",icon:"mail",onClick:c[1]||(c[1]=t=>e.$router.push("/chat"))},{default:(0,s.w5)((()=>[(0,s.Wm)($,{color:"red",floating:""},{default:(0,s.w5)((()=>[f])),_:1})])),_:1},8,["size"]),(0,s.Wm)(Q,{size:e.$q.screen.lt.md?"sm":"md",class:"q-mr-md",round:"",color:"primary",glossy:"",icon:"notifications",onClick:c[2]||(c[2]=t=>e.$router.push("/notifications"))},{default:(0,s.w5)((()=>[(0,s.Wm)($,{color:"red",floating:""},{default:(0,s.w5)((()=>[g])),_:1})])),_:1},8,["size"]),(0,s.Wm)(Q,{size:e.$q.screen.lt.md?"sm":"md",class:"q-mr-md",round:"",color:"primary",glossy:"",icon:"search",onClick:c[3]||(c[3]=t=>e.$router.push("/search"))},null,8,["size"]),(0,s.Wm)(D,{class:"cursor-pointer desktop-only"},{default:(0,s.w5)((()=>[(0,s._)("img",{src:(0,l.SU)(_)?(0,l.SU)(t)+(0,l.SU)(_).photo:"https://www.w3schools.com/w3images/avatar2.png",alt:"img",style:{"object-fit":"cover"}},null,8,w),(0,s.Wm)(H,{"transition-show":"scale","transition-hide":"scale",class:"gt-sm"},{default:(0,s.w5)((()=>[(0,s.Wm)(z,{style:{"min-width":"200px"}},{default:(0,s.w5)((()=>[(0,s.Wm)(Z,{clickable:""},{default:(0,s.w5)((()=>[(0,s.Wm)(k,{class:"flex",onClick:c[4]||(c[4]=t=>e.$router.push("/account"))},{default:(0,s.w5)((()=>[v])),_:1})])),_:1}),(0,s.Wm)(Z,{clickable:""},{default:(0,s.w5)((()=>[(0,l.SU)(_)?((0,s.wg)(),(0,s.j4)(k,{key:0,onClick:c[5]||(c[5]=t=>e.$router.push("/account_setting"))},{default:(0,s.w5)((()=>[b])),_:1})):((0,s.wg)(),(0,s.j4)(k,{key:1,onClick:c[6]||(c[6]=t=>e.$router.push("/login"))},{default:(0,s.w5)((()=>[h])),_:1}))])),_:1}),(0,s.Wm)(j),(0,s.Wm)(Z,{clickable:""},{default:(0,s.w5)((()=>[(0,s.Wm)(k,{onClick:c[7]||(c[7]=e=>U())},{default:(0,s.w5)((()=>[(0,s.Uk)("Sign "+(0,o.zw)((0,l.SU)(a).authUser?"Out":"In"),1)])),_:1})])),_:1})])),_:1})])),_:1})])),_:1})])])])],2)])}}};var k=a(1639),y=a(6611),x=a(9379),q=a(2913),W=a(490),U=a(1233),Z=a(990),Q=a(1357),C=a(5290),S=a(3246),$=a(926),j=a(9984),z=a.n(j);const H=(0,k.Z)(_,[["__scopeId","data-v-7f9fb02d"]]),D=H;z()(_,"components",{QInput:y.Z,QBtn:x.Z,QSelect:q.Z,QItem:W.Z,QItemSection:U.Z,QBadge:Z.Z,QAvatar:Q.Z,QMenu:C.Z,QList:S.Z,QSeparator:$.Z});const I={setup(e){const t=[{title:"Home",icon:"home",to:"/"},{title:"Category",icon:"category",to:"/category"},{title:"Sell",icon:"group",to:"/sell"},{title:"Donate",icon:"emoji_events",to:"/"},{title:"Profile",icon:"person",to:"/account"}],a=(0,l.iH)("Home");return(e,o)=>{const l=(0,s.up)("q-tab"),c=(0,s.up)("q-tabs"),r=(0,s.up)("q-footer");return(0,s.wg)(),(0,s.j4)(r,{bordered:"",elevated:"",class:"bottom-nav"},{default:(0,s.w5)((()=>[(0,s.Wm)(c,{modelValue:a.value,"onUpdate:modelValue":o[0]||(o[0]=e=>a.value=e),"indicator-color":"white",dense:"","active-color":"white","no-caps":"",class:"bg-primary text-grey font-creepster",dark:""},{default:(0,s.w5)((()=>[((0,s.wg)(),(0,s.iD)(s.HY,null,(0,s.Ko)(t,(t=>(0,s.Wm)(l,{key:t.title,name:t.title,onClick:a=>e.$router.push(t.to),icon:t.icon,label:t.title},null,8,["name","onClick","icon","label"]))),64))])),_:1},8,["modelValue"])])),_:1})}}};var A=a(1378),F=a(7817),L=a(900);const V=I,Y=V;z()(I,"components",{QFooter:A.Z,QTabs:F.Z,QTab:L.Z});const O=e=>((0,s.dD)("data-v-711f408b"),e=e(),(0,s.Cn)(),e),P={class:"text-muted"},B={class:"container flex justify-center"},K={class:"row"},T=(0,s.uE)('<div class="col-3 mx-auto" data-v-711f408b><h6 class="text-uppercase fw-bold" data-v-711f408b><div class="q-mr-xl" data-v-711f408b><img src="https://1timeused.com/assets/img/logo/logo.png" style="width:180px;padding:5px;" data-v-711f408b></div></h6><p data-v-711f408b> Here you can use rows and columns to organize your footer content. Lorem ipsum dolor sit amet, consectetur adipisicing elit. </p></div><div class="col-3 mx-auto" data-v-711f408b><h6 class="text-uppercase fw-bold" data-v-711f408b>Products</h6><p data-v-711f408b><a href="#" class="text-reset" data-v-711f408b>Angular</a></p><p data-v-711f408b><a href="#" class="text-reset" data-v-711f408b>React</a></p><p data-v-711f408b><a href="#" class="text-reset" data-v-711f408b>Vue</a></p><p data-v-711f408b><a href="#" class="text-reset" data-v-711f408b>Laravel</a></p></div><div class="col-3 mx-auto" data-v-711f408b><h6 class="text-uppercase fw-bold" data-v-711f408b>Useful links</h6><p data-v-711f408b><a href="#" class="text-reset" data-v-711f408b>Pricing</a></p><p data-v-711f408b><a href="#" class="text-reset" data-v-711f408b>Settings</a></p><p data-v-711f408b><a href="#" class="text-reset" data-v-711f408b>Orders</a></p><p data-v-711f408b><a href="#" class="text-reset" data-v-711f408b>Help</a></p></div>',3),M={class:"col-3 mx-auto mb-md-0"},N=O((()=>(0,s._)("h6",{class:"text-uppercase fw-bold"},"Contact",-1))),R=(0,s.Uk)(" New York, NY 10012, US"),E=(0,s.Uk)(" info@example.com "),G=(0,s.Uk)("+ 01 234 567 88"),J=(0,s.Uk)(" + 01 234 567 89"),X=O((()=>(0,s._)("div",{class:"text-center copy-right",style:{"background-color":"rgba(0, 0, 0, 0.05)"}},[(0,s.Uk)(" © 2021 Copyright: "),(0,s._)("a",{class:"text-reset fw-bold",href:"#"},"1timeused.com")],-1)));function ee(e,t,a,o,l,c){const r=(0,s.up)("q-icon");return(0,s.wg)(),(0,s.iD)("footer",P,[(0,s._)("div",B,[(0,s._)("div",K,[T,(0,s._)("div",M,[N,(0,s._)("p",null,[(0,s.Wm)(r,{name:"home"}),R]),(0,s._)("p",null,[(0,s.Wm)(r,{name:"email"}),E]),(0,s._)("p",null,[(0,s.Wm)(r,{name:"call"}),G]),(0,s._)("p",null,[(0,s.Wm)(r,{name:"print"}),J])])])]),X])}const te={};var ae=a(2857);const se=(0,k.Z)(te,[["render",ee],["__scopeId","data-v-711f408b"]]),oe=se;z()(te,"components",{QIcon:ae.Z});var le=a(5538);const ce={class:"flex justify-center items-center categories"},re={class:"flex justify-center q-my-xs",style:{width:"100%"}},ne=["id"],ie={setup(e){const t=(0,le.v)();(0,s.bv)((()=>{t.loadCategories()}));const a=(0,s.Fl)((()=>t.categories));return(e,t)=>{const c=(0,s.up)("q-icon"),r=(0,s.up)("q-item-section"),n=(0,s.up)("q-item"),i=(0,s.up)("q-separator"),u=(0,s.up)("q-list"),d=(0,s.up)("q-menu");return(0,s.wg)(),(0,s.iD)("section",ce,[(0,s._)("ul",re,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)((0,l.SU)(a),(e=>((0,s.wg)(),(0,s.iD)("li",{key:e},[(0,s._)("a",{href:"#",id:`catMenu_${e.id}`},[(0,s.Uk)((0,o.zw)(e.title)+" ",1),(0,s.Wm)(c,{name:"expand_more"}),(0,s.Wm)(d,{"transition-show":"scale","transition-hide":"scale"},{default:(0,s.w5)((()=>[(0,s.Wm)(u,{style:{"min-width":"100px"}},{default:(0,s.w5)((()=>[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(e.subcategories,(e=>((0,s.wg)(),(0,s.j4)(n,{clickable:"",key:e.id},{default:(0,s.w5)((()=>[(0,s.Wm)(r,null,{default:(0,s.w5)((()=>[(0,s.Uk)((0,o.zw)(e.title),1)])),_:2},1024)])),_:2},1024)))),128)),(0,s.Wm)(i)])),_:2},1024)])),_:2},1024)],8,ne)])))),128))])])}}},ue=(0,k.Z)(ie,[["__scopeId","data-v-a73e15b0"]]),de=ue;z()(ie,"components",{QIcon:ae.Z,QMenu:C.Z,QList:S.Z,QItem:W.Z,QItemSection:U.Z,QSeparator:$.Z});var me=a(8910);const pe={class:"row no-wrap q-my-lg q-px-md flex justify-center"},fe=["src"],ge={class:"text-caption ellipsis q-mt-sm"},we={setup(e){const t=(0,le.v)(),a=(0,me.tv)(),c="https://1timeused.com/";(0,s.bv)((()=>{t.loadCategories()}));const r=e=>{a.push({path:`/subcategory/${e}`}),t.loadSubCategory(e)},n=(0,s.Fl)((()=>t.categories));return(e,t)=>{const a=(0,s.up)("q-avatar"),i=(0,s.up)("q-btn"),u=(0,s.up)("q-scroll-area");return(0,s.wg)(),(0,s.j4)(u,{visible:!1,style:{height:"110px","max-width":"100%"}},{default:(0,s.w5)((()=>[(0,s._)("div",pe,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)((0,l.SU)(n),((e,t)=>((0,s.wg)(),(0,s.iD)("div",{key:t},[(0,s._)("div",{class:(0,o.C_)(["text-center",{"q-mr-lg":t!=(0,l.SU)(n).length-1}])},[(0,s.Wm)(i,{size:"15px",outline:"",round:"",color:"primary",onClick:t=>r(e.title)},{default:(0,s.w5)((()=>[(0,s.Wm)(a,{size:"30px"},{default:(0,s.w5)((()=>[(0,s._)("img",{src:`${(0,l.SU)(c)}${e.thumbnail}`},null,8,fe)])),_:2},1024)])),_:2},1032,["onClick"]),(0,s._)("span",ge,(0,o.zw)(e.title.substring(0,10)),1)],2)])))),128))])])),_:1})}}};var ve=a(8144);const be=(0,k.Z)(we,[["__scopeId","data-v-29228558"]]),he=be;z()(we,"components",{QScrollArea:ve.Z,QBtn:x.Z,QAvatar:Q.Z});const _e={key:0},ke={async preFetch({store:e,currentRoute:t}){const a=(0,c.t)();a.loadAuthUser()}},ye=Object.assign(ke,{setup(e){return(e,t)=>{const a=(0,s.up)("router-view"),o=(0,s.up)("q-page-container"),l=(0,s.up)("q-layout");return(0,s.wg)(),(0,s.j4)(l,{view:"hHh lpR fFf"},{default:(0,s.w5)((()=>[(0,s.Wm)(D),(0,s.Wm)(o,null,{default:(0,s.w5)((()=>["/"==e.$route.path?((0,s.wg)(),(0,s.iD)("div",_e,[e.$q.screen.gt.sm?((0,s.wg)(),(0,s.j4)(de,{key:0})):((0,s.wg)(),(0,s.j4)(he,{key:1}))])):(0,s.kq)("",!0),(0,s.Wm)(a)])),_:1}),e.$q.screen.gt.sm?((0,s.wg)(),(0,s.j4)(oe,{key:0})):((0,s.wg)(),(0,s.j4)(Y,{key:1}))])),_:1})}}});var xe=a(249),qe=a(2133);const We=ye,Ue=We;z()(ye,"components",{QLayout:xe.Z,QPageContainer:qe.Z,QBtn:x.Z})}}]);