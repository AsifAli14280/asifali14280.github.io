"use strict";(self["webpackChunk_1timeused_quasar"]=self["webpackChunk_1timeused_quasar"]||[]).push([[698],{6529:(s,t,i)=>{i.r(t),i.d(t,{default:()=>m});var e=i(9835),l=i(499),r=i(5692),d=i(2502),o=i(7671),c=i(1841);const u=(0,d.Q_)("wishlistStore",{state:()=>({wishlistProduct:[]}),getters:{},actions:{async loadWishlistProducts(){if(this.wishlistProduct.length)return;const s=(0,o.U)("wishlist_products",2);if(s)return void(this.wishlistProduct=s);const t=await c.Z.get("wishlist");200==t.status?(this.wishlistProduct=t.data,(0,o.I)("wishlist_products",t.data)):console.log("wishlist_products",t)}}}),a={class:"container q-py-lg"},h=(0,e._)("div",null,[(0,e._)("h1",{class:"text-h5 text-center"},[(0,e._)("span",{style:{"border-bottom":"2px solid #ddd"}},"Wishlist")])],-1),n={key:0,class:"q-pa-md row items-start q-gutter-md justify-center"},w={key:1,class:"text-center m-5"},_=(0,e._)("h3",{class:"m-5"},"No Wishlist Product",-1),g=[_],p={setup(s){const t=u();return(0,e.bv)((()=>t.loadWishlistProducts())),(s,i)=>((0,e.wg)(),(0,e.iD)("div",a,[h,s.wishlistProduct?((0,e.wg)(),(0,e.iD)("div",n,[((0,e.wg)(!0),(0,e.iD)(e.HY,null,(0,e.Ko)((0,l.SU)(t).wishlistProduct,(s=>((0,e.wg)(),(0,e.j4)(r.Z,{key:s})))),128))])):((0,e.wg)(),(0,e.iD)("div",w,g))]))}},P=p,m=P}}]);