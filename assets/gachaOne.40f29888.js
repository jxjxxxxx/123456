/* empty css              *//* empty css              *//* empty css               */import{_ as b,d as k,u as S,r as u,P as C,o as U,c as I,a as o,w as s,v as r,n as p,t as m,e as _,f as O,F as B,T as v,p as R,b as T}from"./index.44f3a6d4.js";import{d as z}from"./draw.7d9787c0.js";import{_ as D}from"./SharePop.616ebd2f.js";import{c as F}from"./mainPage.0609e660.js";import{a as N}from"./user.291f30a7.js";import"./index.b9d39bb0.js";import"./share.1d900325.js";const P=n=>(R("data-v-70097fd2"),n=n(),T(),n),V=P(()=>o("div",{class:"background"},null,-1)),Y={class:"fixed"},E={class:"imgbox"},H={class:"rollbox"},$=["src"],j={__name:"gachaOne",setup(n){const t=k({imgUrl:"",name:"",id:"",description:""}),c=S(),h=()=>{c.push({path:"/"})},f=()=>{c.push({path:"/rewards"})},e=u(!1),g=async()=>{try{const a=await z();a.success?(e.value=!e.value,a.msg!=="\u8C22\u8C22\u53C2\u4E0E"&&(t.imgUrl=a.data.imgUrl,t.id=a.data.id,t.name=a.data.name,t.description=a.data.description)):a.code===4001&&(v("\u8BF7\u91CD\u65B0\u767B\u5F55"),setTimeout(function(){N()},1e3))}catch{console.log("errrrror")}},w=async()=>{(await F()).data>=1?e.value=!e.value:v("\u62BD\u5361\u6B21\u6570\u4E0D\u8DB3")},i=u(!1),x=async()=>{i.value=!i.value};return(a,l)=>{const y=C;return U(),I(B,null,[V,o("div",Y,[s(o("text",null,"\u70B9\u51FB\u56FE\u7247\u7FFB\u724C",512),[[r,!e.value]]),s(o("text",{style:{border:"none",color:"#502017"},onClick:w},"\u518D\u7FFB\u4E00\u6B21",512),[[r,e.value]]),s(o("text",{onClick:h},"\u8FD4\u56DE\u4E3B\u9875",512),[[r,e.value]]),s(o("button",{class:"share",onClick:x},"\u5206\u4EAB\u5F97\u7FFB\u724C\u6B21\u6570",512),[[r,e.value&&t.id]])]),o("div",E,[o("div",H,[o("div",{class:"rollbox_front",style:p({transform:e.value?"rotateY(-180deg)":""}),onClick:g},null,4),o("div",{class:"rollbox_behind",style:p({transform:e.value?"rotateY(-360deg)":""})},[o("text",null,m(t.id?t.name:"\u611F\u8C22\u53C2\u4E0E"),1),s(o("img",{src:t.imgUrl},null,8,$),[[r,t.imgUrl]]),o("button",{onClick:l[0]||(l[0]=d=>t.id?f:"")},m(t.id?"\u67E5\u770B\u5956\u52B1":"\u4E0B\u6B21\u597D\u8FD0"),1)],4)])]),_(y,{show:i.value,"onUpdate:show":l[1]||(l[1]=d=>i.value=d),position:"bottom",style:{height:"24.3vw",opacity:"0.8"}},{default:O(()=>[_(D,{reward:t,num:1},null,8,["reward"])]),_:1},8,["show"])],64)}}},Z=b(j,[["__scopeId","data-v-70097fd2"]]);export{Z as default};
