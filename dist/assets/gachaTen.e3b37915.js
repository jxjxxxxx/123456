/* empty css              *//* empty css              */import{a as B}from"./index.784fcfd4.js";import{_ as I}from"./SharePop.f7c6d78b.js";import{_ as P,u as $,j as z,r as f,d as A,P as D,o as _,c as g,a as o,w as a,v as i,i as u,F as R,k as E,e as w,f as F,T as y,n as U,t as L,p as N,b as V}from"./index.de624a9a.js";import{c as Y}from"./mainPage.aa256533.js";import{d as H}from"./draw.105c847e.js";import"./http.e5677783.js";import"./share.4ab179c4.js";const O=r=>(N("data-v-91882672"),r=r(),V(),r),q=O(()=>o("div",{class:"background"},null,-1)),G={class:"fixed"},J={class:"imgbox"},K=["onClick"],M=["src"],Q={__name:"gachaTen",setup(r){const v=$(),b=()=>{v.push({path:"/"})},k=()=>{v.push({path:"/rewards"})},n=z(()=>{let s=!0;for(let e=0;e<10;e++)s=s&&l[e].isRolled;return s}),p=f(!1),c=f(!1),l=A([{imgUrl:"",name:"",id:"",description:"",isRolled:!1},{imgUrl:"",name:"",id:"",description:"",isRolled:!1},{imgUrl:"",name:"",id:"",description:"",isRolled:!1},{imgUrl:"",name:"",id:"",description:"",isRolled:!1},{imgUrl:"",name:"",id:"",description:"",isRolled:!1},{imgUrl:"",name:"",id:"",description:"",isRolled:!1},{imgUrl:"",name:"",id:"",description:"",isRolled:!1},{imgUrl:"",name:"",id:"",description:"",isRolled:!1},{imgUrl:"",name:"",id:"",description:"",isRolled:!1},{imgUrl:"",name:"",id:"",description:"",isRolled:!1}]),h=async s=>{try{const e=await H();e.success?(l[s].isRolled=!l[s].isRolled,e.msg!=="\u8C22\u8C22\u53C2\u4E0E"&&(l[s].imgUrl=e.data.imgUrl,l[s].name=e.data.name,l[s].id=e.data.id,p.value=!0)):e.code===4001&&(y("\u8BF7\u91CD\u65B0\u767B\u5F55"),setTimeout(function(){B()},1e3))}catch{console.log("errrrror")}},d=f(!0),C=async()=>{try{d.value=!1;for(let s=0;s<10;s++)l[s].isRolled||await h(s)}catch{}},S=async()=>{if((await Y()).data>=10){p.value=!1,d.value=!0;for(let e=0;e<10;e++)l[e].isRolled=!1}else y("\u62BD\u5361\u6B21\u6570\u4E0D\u8DB3")},T=async()=>{c.value=!c.value};return(s,e)=>{const j=I,x=D;return _(),g(R,null,[q,o("div",G,[a(o("button",{class:"all",onClick:e[0]||(e[0]=t=>d.value?C():"")},"\u5168\u90E8\u7FFB\u5F00",512),[[i,!u(n)]]),a(o("button",{class:"all",style:{border:"none",color:"#502017","font-weight":"bold"},onClick:e[1]||(e[1]=t=>d.value?"":S())},"\u518D\u7FFB10\u6B21",512),[[i,u(n)]]),a(o("button",{class:"share",onClick:T},"\u5206\u4EAB\u5F97\u7FFB\u724C\u6B21\u6570",512),[[i,u(n)&&p.value]]),a(o("button",{class:"return",onClick:b},"\u8FD4\u56DE\u4E3B\u9875",512),[[i,u(n)]])]),o("div",J,[(_(!0),g(R,null,E(l,(t,m)=>(_(),g("div",{class:"rollBox",key:m},[o("div",{class:"rollbox_front",style:U({transform:l[m].isRolled?"rotateY(-180deg)":""}),onClick:W=>h(m)},null,12,K),o("div",{class:"rollbox_behind",style:U({transform:l[m].isRolled?"rotateY(-360deg)":""})},[a(o("text",null,L(t.name),513),[[i,t.id]]),a(o("img",{src:t.imgUrl},null,8,M),[[i,t.imgUrl]]),a(o("button",{style:{color:"#E02222"},onClick:k},"\u67E5\u770B\u5956\u52B1",512),[[i,t.id]]),a(o("div",null,"\u8C22\u8C22\u53C2\u4E0E",512),[[i,!t.id]])],4)]))),128))]),w(x,{show:c.value,"onUpdate:show":e[2]||(e[2]=t=>c.value=t),position:"bottom",style:{height:"24.3vw",opacity:"0.8"}},{default:F(()=>[w(j,{reward:l,num:10},null,8,["reward"])]),_:1},8,["show"])],64)}}},re=P(Q,[["__scopeId","data-v-91882672"]]);export{re as default};
