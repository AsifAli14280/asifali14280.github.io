"use strict";(self["webpackChunk_1timeused_quasar"]=self["webpackChunk_1timeused_quasar"]||[]).push([[590,690],{9301:(e,t,a)=>{a.r(t),a.d(t,{default:()=>R});var n=a(9835),s=a(499),l=a(7671),r=a(1841);const u={class:"slider-main"},o={setup(e){const t=(0,s.iH)(),a=(0,s.iH)([]);(0,n.bv)((async()=>{const e="banners",n=(0,l.U)(e,5);if(n)return a.value=n,void(t.value=a.value.length?a.value[0].id:0);const s=await r.Z.get("banners");200==s.status&&(a.value=s.data),t.value=a.value.length?a.value[0].id:0,(0,l.I)(e,s.data)}));const o="https://1timeused.com/";return(e,l)=>{const r=(0,n.up)("q-carousel-slide"),c=(0,n.up)("q-carousel");return(0,n.wg)(),(0,n.iD)("div",u,[(0,n.Wm)(c,{animated:"",modelValue:t.value,"onUpdate:modelValue":l[0]||(l[0]=e=>t.value=e),navigation:"",infinite:"",arrows:"","transition-prev":"slide-right","transition-next":"slide-left",onMouseenter:l[1]||(l[1]=t=>e.autoplay=!1),onMouseleave:l[2]||(l[2]=t=>e.autoplay=!0),class:"fit"},{default:(0,n.w5)((()=>[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(a.value,(e=>((0,n.wg)(),(0,n.j4)(r,{name:e.id,key:e.id,"img-src":(0,s.SU)(o)+e.image},null,8,["name","img-src"])))),128))])),_:1},8,["modelValue"])])}}};var c=a(1639),d=a(7052),i=a(1694),v=a(9984),p=a.n(v);const m=(0,c.Z)(o,[["__scopeId","data-v-5e8896e2"]]),g=m;p()(o,"components",{QCarousel:d.Z,QCarouselSlide:i.Z});var w=a(5692),f=a(5413);const y=e=>((0,n.dD)("data-v-49608996"),e=e(),(0,n.Cn)(),e),_={class:"conatiner flex justify-center items-center"},q={class:"column q-pb-xl"},k=y((()=>(0,n._)("h5",{class:"text-center q-pb-xl"},"Feature Products",-1))),h={class:"flex q-gutter-y-md q-gutter-x-sm q-mx-auto q-mb-lg justify-center items-center"},b={setup(e){const t=(0,f.a)();return(e,a)=>{const l=(0,n.up)("q-page-container");return(0,n.wg)(),(0,n.j4)(l,null,{default:(0,n.w5)((()=>[(0,n._)("div",_,[(0,n._)("div",q,[k,(0,n._)("div",h,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)((0,s.SU)(t).featuredProducts,(e=>((0,n.wg)(),(0,n.j4)(w.Z,{product:e,key:e},null,8,["product"])))),128))])])])])),_:1})}}};var x=a(2133);const j=(0,c.Z)(b,[["__scopeId","data-v-49608996"]]),Z=j;p()(b,"components",{QPageContainer:x.Z});var P=a(6970),C=a(1957),D=a(9302);a(7277);const H=e=>((0,n.dD)("data-v-25b4184f"),e=e(),(0,n.Cn)(),e),S={class:"q-pa-lg"},U=H((()=>(0,n._)("h5",{class:"text-center q-pb-xl q-mt-sm"},"Recent Products",-1))),I={class:"slide",id:"slide"},Q={setup(e){const t=(0,D.Z)(),a=(0,f.a)(),l=(0,s.iH)(0),r=t.screen.lt.sm?240:300,u=10,o=10,c=(0,s.iH)(0),d=(e="forward")=>{if(c.value||(c.value=i()),"backward"==e&&l.value<1||"backward"!=e&&l.value>=c.value)return;"backward"==e?l.value-=1:l.value+=1;const t=document.querySelector("#slide");t.style.left=l.value*-(r+u)+"px"},i=()=>{const e=document.getElementById("slider"),t=e.offsetWidth/(r+u);return o-Math.ceil(t)};return(e,t)=>{const i=(0,n.up)("q-btn");return(0,n.wg)(),(0,n.iD)("div",S,[U,(0,n._)("div",{class:"slider",id:"slider",style:(0,P.j5)({height:`${(0,s.SU)(r)}px`})},[(0,n._)("div",I,[((0,n.wg)(),(0,n.iD)(n.HY,null,(0,n.Ko)(o,((e,t)=>(0,n._)("div",{key:t,style:(0,P.j5)({"margin-right":`${u}px`}),class:"item row fit justify-center items-center q-gutter-md q-col-gutter no-wrap"},[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)((0,s.SU)(a).recentProducts,(e=>((0,n.wg)(),(0,n.j4)(w.Z,{key:e,product:e,mainDIv:"recent-products"},null,8,["product"])))),128))],4))),64))]),(0,n.wy)((0,n.Wm)(i,{class:"pro-prev desktop-only",round:"",color:"secondary",icon:"chevron_left",onClick:t[0]||(t[0]=e=>d("backward"))},null,512),[[C.F8,l.value>0]]),(0,n.wy)((0,n.Wm)(i,{class:"pro-next desktop-only",round:"",color:"secondary",icon:"chevron_right",onClick:d},null,512),[[C.F8,0==l.value||l.value<c.value]])],4)])}}};var W=a(9379);const F=(0,c.Z)(Q,[["__scopeId","data-v-25b4184f"]]),K=F;p()(Q,"components",{QBtn:W.Z});const Y={class:"container"},M={setup(e){const t=(0,f.a)();return(0,n.bv)((()=>{t.loadRecentProducts(),t.loadFeaturedProducts()})),(e,a)=>{const l=(0,n.up)("q-page");return(0,n.wg)(),(0,n.j4)(l,null,{default:(0,n.w5)((()=>[(0,n.Wm)(g),(0,n._)("div",Y,[(0,s.SU)(t).recentProducts.length?((0,n.wg)(),(0,n.j4)(K,{key:0})):(0,n.kq)("",!0),(0,s.SU)(t).featuredProducts.length?((0,n.wg)(),(0,n.j4)(Z,{key:1})):(0,n.kq)("",!0)])])),_:1})}}};var V=a(9885);const B=M,R=B;p()(M,"components",{QPage:V.Z})}}]);