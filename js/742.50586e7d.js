(self["webpackChunk_1timeused_quasar"]=self["webpackChunk_1timeused_quasar"]||[]).push([[742],{7539:(e,s,a)=>{"use strict";function t(){const e=/^(?=[a-zA-Z0-9@.%+-]{6,254}$)[a-zA-Z0-9.%+-]{1,64}@(?:[a-zA-Z0-9-]{1,63}\.){1,8}[a-zA-Z]{2,63}$/,s=/^[a-zA-Z0-9_.]+$/,a={email:s=>e.test(s)||"Please enter a valid email address",required:e=>!!e||"Field is required",validUsername:e=>s.test(e)||"Username cannot contain space or sepecial chars",password:e=>e.length>5||"Password must be atleast 6 characters long",min3:e=>e.length>=3||"Must be atleast 3 characters long"};return{rules:a}}a.d(s,{Z:()=>t})},1841:(e,s,a)=>{"use strict";a.d(s,{Z:()=>c});a(702),a(4641),a(3269);var t=a(9981),l=a.n(t),r=a(4006);function n(e){r.Z}const o="https://1timeused.com/api/";class i{async request(e,s=null,a="GET",t="application/json"){n();let r={method:a,headers:{Accept:"application/json","Device-Id":"sdfsdsd","Device-Type":"web"}};"application/json"==t&&(r.headers["Content-Type"]=t),"GET"!==r.method?"multipart/form-data"==t.toLowerCase()?r.data=u(s):s&&"object"===typeof s&&(r.data=JSON.stringify(s)):s&&(e=this.appendParams(e,s)),r.url=this.url(e);try{const e=await l()(r);return{status:e.status,...await e.data}}catch(o){return console.log(o.response),o.response.data}}async get(e,s=null){return await this.request(e,s,"GET")}async post(e,s=null){return await this.request(e,s,"POST")}async put(e,s=null){return await this.request(e,s,"PUT")}async delete(e,s=null){return await this.request(e,s,"DELETE")}async patch(e,s=null){return await this.request(e,s,"PATCH")}async upload(e,s=null){return await this.request(e,s,"POST","multipart/form-data")}async formData(e,s=null){return await this.request(e,s,"POST","multipart/form-data")}appendParams(e,s){let a=new URL(this.url(e)),t=new URLSearchParams(a.search.slice(1));if(s&&"object"===typeof s)for(let l in s)t.append(l,s[l]);return e=e.split("?")[0]+"?"+t.toString(),e}url(e){return`${o}${o&&"/"==o.slice(o.length-1)?"":"/"}${e}`}}function u(e){const s=new FormData;for(const a in e)if(Array.isArray(e[a]))for(let t=0;t<e[a].length;t++)s.append(a+"[]",e[a][t]);else s.append(a,e[a]);return s}const c=new i},4511:(e,s,a)=>{"use strict";a.d(s,{t:()=>c});var t=a(2502),l=a(4006),r=a(6827),n=a(1841),o=a(8910);const i=e=>{(0,o.tv)();location.href=e},u=i;const c=(0,t.Q_)("authStore",{state:()=>({authUser:null,registerUser:null}),getters:{getAuthUser(e){return e.authUser}},actions:{async login(e){const s=await n.Z.post("login",e);return 200==s.status?(this.authUser=s.data.user,l.Z.set("AUTH_USER",s.data.user),l.Z.set("1TIMEUSED_TOKEN",s.data.token),r.Z.create({message:s.message,icon:"done",position:"bottom",color:"success"}),u("")):r.Z.create({message:s.message,icon:"warning",position:"bottom",color:"negative"}),s},async register(e){const s=await n.Z.post("register",e);return 200==s.status?(this.registerUser=s.data,l.Z.set("REGISTER_NEW_USER",s.data),r.Z.create({message:s.message,icon:"done",position:"bottom",color:"positive"}),u("login")):r.Z.create({message:s.message,icon:"warning",position:"bottom",color:"negative"}),s}}})},8742:(e,s,a)=>{"use strict";a.r(s),a.d(s,{default:()=>I});a(8964);var t=a(9835),l=a(499),r=a(7526),n=a.n(r),o=a(4511),i=a(7539);const u=e=>((0,t.dD)("data-v-80df28d0"),e=e(),(0,t.Cn)(),e),c={class:"login-bg-img flex justify-center items-center"},d={class:"container q-py-lg"},m={class:"column items-center w-100"},p=u((()=>(0,t._)("div",null,[(0,t._)("img",{src:n(),width:"200"})],-1))),h={class:"row q-pa-md account-tab"},g={class:"col-12"},v={class:"col-12"},w={class:"col-4"},_=u((()=>(0,t._)("img",{class:"q-mr-1",src:"https://flagicons.lipis.dev/flags/4x3/pk.svg",width:"20"},null,-1))),b=u((()=>(0,t._)("div",{class:"col-1"},null,-1))),f={class:"col-7"},y={class:"col-12"},q={class:"col-12"},U={class:"w-100 q-my-lg"},Z={class:"text-center q-mb-lg"},S={class:"register text-center"},V=u((()=>(0,t._)("p",{class:"text-primary"},"Already have an account?",-1))),E=u((()=>(0,t._)("div",{class:"copyrights text-center"},[(0,t._)("p",{class:"text-grey"},[(0,t.Uk)(" All rights reserved by "),(0,t._)("a",{href:"#",class:"underline-none"},"1timeused"),(0,t._)("br"),(0,t.Uk)(" powered by "),(0,t._)("a",{href:"#",class:"underline-none"},"HORIZAM")])],-1))),P={setup(e){const{rules:s}=(0,i.Z)(),a=((0,l.iH)(!1),(0,l.iH)("+92")),r=(0,l.iH)("+92"),n=(0,o.t)(),u=(0,l.iH)({name:"",email:"",phone:"",password:"",password_confirmation:""}),P=()=>{u.value.phone.length<=1&&3!=u.value.phone.substring(0,1)?u.value.phone="3":u.value.phone=u.value.phone.replace(/[^0-9]/g,"")},T=()=>{n.register(u.value)};return(e,n)=>{const o=(0,t.up)("q-icon"),i=(0,t.up)("q-input"),A=(0,t.up)("q-select"),W=(0,t.up)("q-btn"),x=(0,t.up)("q-form");return(0,t.wg)(),(0,t.iD)("div",c,[(0,t._)("div",d,[(0,t._)("div",m,[p,(0,t.Wm)(x,{onSubmit:T,class:"flex justify-center items-center w-100"},{default:(0,t.w5)((()=>[(0,t._)("div",h,[(0,t._)("div",g,[(0,t.Wm)(i,{modelValue:u.value.name,"onUpdate:modelValue":n[0]||(n[0]=e=>u.value.name=e),dense:e.dense,label:"Name",class:"q-mb-md",rules:[e=>e.length>=3||"Password must be atleast 3 characters"],clearable:""},{prepend:(0,t.w5)((()=>[(0,t.Wm)(o,{name:"person"})])),_:1},8,["modelValue","dense","rules"])]),(0,t._)("div",v,[(0,t.Wm)(i,{modelValue:u.value.email,"onUpdate:modelValue":n[1]||(n[1]=e=>u.value.email=e),dense:e.dense,label:"Enter Your Email",class:"q-mb-md",rules:[(0,l.SU)(s).required,(0,l.SU)(s).email],clearable:""},{prepend:(0,t.w5)((()=>[(0,t.Wm)(o,{name:"person"})])),_:1},8,["modelValue","dense","rules"])]),(0,t._)("div",w,[(0,t.Wm)(A,{modelValue:a.value,"onUpdate:modelValue":n[2]||(n[2]=e=>a.value=e),options:e.options,"options-html":r.value},{prepend:(0,t.w5)((()=>[_])),_:1},8,["modelValue","options","options-html"])]),b,(0,t._)("div",f,[(0,t.Wm)(i,{modelValue:u.value.phone,"onUpdate:modelValue":n[3]||(n[3]=e=>u.value.phone=e),dense:e.dense,label:u.value.phone?"":"301-12345678",class:"q-mb-md",maxlength:"10",onKeyup:P,type:"text",rules:[(0,l.SU)(s).required,e=>3==e.substring(0,1)||"Number must start from 3",e=>10==e.length||"Number must be 10 characters"],clearable:""},null,8,["modelValue","dense","label","rules"])]),(0,t._)("div",y,[(0,t.Wm)(i,{modelValue:u.value.password,"onUpdate:modelValue":n[4]||(n[4]=e=>u.value.password=e),dense:e.dense,label:"Enter Your Password",type:"password",rules:[(0,l.SU)(s).required,(0,l.SU)(s).password],clearable:""},{prepend:(0,t.w5)((()=>[(0,t.Wm)(o,{name:"lock"})])),_:1},8,["modelValue","dense","rules"])]),(0,t._)("div",q,[(0,t.Wm)(i,{modelValue:u.value.password_confirmation,"onUpdate:modelValue":n[5]||(n[5]=e=>u.value.password_confirmation=e),dense:e.dense,label:"Confirm Your Password",type:"password",rules:[e=>e.length>=6||"Password must be atleast 6 characters",e=>e==u.value.password||"Password do not match"],clearable:""},{prepend:(0,t.w5)((()=>[(0,t.Wm)(o,{name:"lock"})])),_:1},8,["modelValue","dense","rules"])]),(0,t._)("div",U,[(0,t._)("div",Z,[(0,t.Wm)(W,{color:"primary",type:"submit",label:"Signup",class:"w-100"})]),(0,t._)("div",S,[V,(0,t.Wm)(W,{flat:"",color:"primary",label:"Sign in Now",class:"text-underline",onClick:n[6]||(n[6]=s=>e.$router.push("/login"))})]),E])])])),_:1})])])])}}};var T=a(1639),A=a(8326),W=a(6611),x=a(2857),k=a(4700),C=a(9379),D=a(9984),j=a.n(D);const H=(0,T.Z)(P,[["__scopeId","data-v-80df28d0"]]),I=H;j()(P,"components",{QForm:A.Z,QInput:W.Z,QIcon:x.Z,QSelect:k.Z,QBtn:C.Z})},7526:(e,s,a)=>{e.exports=a.p+"img/img_splash_logo.2351dabe.png"}}]);