import{_ as L}from"./TabBar.55aa571e.js";/* empty css              */import{i as C}from"./index.49ed8e39.js";import{I as S,L as A}from"./index.c330c69b.js";import{m as z,q as P,s as U,x as N,r as f,e as a,H as y,B as E,I as F,y as D,z as O,_ as I,o as g,c as x,a as u,t as B,f as $,T as _,F as H,k as V,A as q}from"./index.f0294639.js";/* empty css               */import{a as K}from"./user.239f6a97.js";import{u as M}from"./use-placeholder.7315e9b1.js";const[Z,o]=z("nav-bar"),j={title:String,fixed:Boolean,zIndex:P,border:U,leftText:String,rightText:String,leftArrow:Boolean,placeholder:Boolean,safeAreaInsetTop:Boolean};var G=N({name:Z,props:j,emits:["click-left","click-right"],setup(e,{emit:n,slots:t}){const c=f(),d=M(c,o),v=i=>n("click-left",i),w=i=>n("click-right",i),s=()=>t.left?t.left():[e.leftArrow&&a(F,{class:o("arrow"),name:"arrow-left"},null),e.leftText&&a("span",{class:o("text")},[e.leftText])],l=()=>t.right?t.right():a("span",{class:o("text")},[e.rightText]),m=()=>{const{title:i,fixed:p,border:h,zIndex:r}=e,k=D(r),R=e.leftArrow||e.leftText||t.left,b=e.rightText||t.right;return a("div",{ref:c,style:k,class:[o({fixed:p}),{[E]:h,"van-safe-area-top":e.safeAreaInsetTop}]},[a("div",{class:o("content")},[R&&a("div",{class:[o("left"),y],onClick:v},[s()]),a("div",{class:[o("title"),"van-ellipsis"]},[t.title?t.title():i]),b&&a("div",{class:[o("right"),y],onClick:w},[l()])])])};return()=>e.fixed&&e.placeholder?d(m):m()}});const J=O(G);const Q={class:"reward-item"},W={class:"reward-img"},X={class:"reward-info"},Y={class:"reward-title"},ee={class:"reward-content"},te={__name:"RewardItem",props:{title:{type:String,default:"\u6682\u65E0"},content:{type:String,default:"\u6682\u65E0"},img:{type:String,default:"./src/assets/reward-default.png"}},setup(e){const n=e;return(t,c)=>{const d=S;return g(),x("div",Q,[u("div",W,[a(d,{radius:"10",fit:"cover","lazy-load":"",src:n.img},null,8,["src"])]),u("div",X,[u("div",Y,B(n.title),1),u("div",ee,B(n.content),1)])])}}},ae=I(te,[["__scopeId","data-v-c40d5a39"]]);const T=async()=>(await C.get("/api/prize/")).data;const ne={id:"reward-list"},se={id:"list-card"},re={__name:"UserReward",setup(e){const n=f([]),t=f(!1),c=f(!1),d=f(!1),v=async()=>{t.value=!1;const s=await T();n.value=s.data.records,console.log(s.data)};return(async()=>{_.loading({message:"\u52A0\u8F7D\u4E2D",duration:0,className:"toast",forbidClick:!0});try{const s=await T();s.success?(setTimeout(()=>_.clear(),500),n.value=s.data,console.log(n.value)):s.code===4001?(_("\u8BF7\u91CD\u65B0\u767B\u5F55"),setTimeout(function(){K()},1e3)):_.fail("\u7F51\u7EDC\u5F02\u5E38")}catch(s){console.error(s),_.fail("\u7F51\u7EDC\u5F02\u5E38")}})(),(s,l)=>{const m=J,i=ae,p=A,h=L;return g(),x("div",ne,[u("div",se,[a(m,{class:"card-navbar",title:"\u5956\u52B1\u4E00\u89C8"}),a(p,{class:"card-container",loading:t.value,"onUpdate:loading":l[0]||(l[0]=r=>t.value=r),error:c.value,"onUpdate:error":l[1]||(l[1]=r=>c.value=r),finished:d.value,"finished-text":"\u6CA1\u6709\u66F4\u591A\u4E86","error-text":"\u8BF7\u6C42\u5931\u8D25\uFF0C\u70B9\u51FB\u91CD\u65B0\u52A0\u8F7D",onLoad:v},{default:$(()=>[(g(!0),x(H,null,V(n.value,r=>(g(),q(i,{key:r.id,title:r.name,content:r.description,img:r.imgUrl},null,8,["title","content","img"]))),128))]),_:1},8,["loading","error","finished"]),a(h,{type:0})])])}}},me=I(re,[["__scopeId","data-v-41ec0b27"]]);export{me as default};
