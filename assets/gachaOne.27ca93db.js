/* empty css              *//* empty css              */import{a as b}from"./index.eaf8b8db.js";import{_ as k,d as S,u as C,r as u,P as U,o as I,c as O,a as e,w as s,v as n,n as p,t as _,e as m,f as B,F as R,T as v,p as T,b as z}from"./index.e1442f34.js";import{d as D}from"./draw.1e140e97.js";import{_ as F}from"./SharePop.c7c94783.js";import{c as N}from"./mainPage.18ef9395.js";import"./http.739684a6.js";import"./share.09eb7ca5.js";const P=r=>(T("data-v-5a44ed07"),r=r(),z(),r),V=P(()=>e("div",{class:"background"},null,-1)),Y={class:"fixed"},E={class:"imgbox"},H={class:"rollbox"},$=["src"],j={__name:"gachaOne",setup(r){const o=S({imgUrl:"",name:"",id:"",description:""}),c=C(),h=()=>{c.push({path:"/"})},f=()=>{c.push({path:"/rewards"})},t=u(!1),g=async()=>{try{const a=await D();console.log(a),a.success?(t.value=!t.value,a.msg!=="\u8C22\u8C22\u53C2\u4E0E"&&(o.imgUrl=a.data.imgUrl,o.id=a.data.id,o.name=a.data.name,o.description=a.data.description)):a.code===4001&&(v("\u8BF7\u91CD\u65B0\u767B\u5F55"),setTimeout(function(){b()},1e3))}catch{console.log("errrrror")}},w=async()=>{(await N()).data>=1?t.value=!t.value:v("\u62BD\u5361\u6B21\u6570\u4E0D\u8DB3")},l=u(!1),x=async()=>{l.value=!l.value};return(a,i)=>{const y=U;return I(),O(R,null,[V,e("div",Y,[s(e("text",null,"\u70B9\u51FB\u56FE\u7247\u7FFB\u724C",512),[[n,!t.value]]),s(e("text",{style:{border:"none",color:"#502017"},onClick:w},"\u518D\u7FFB\u4E00\u6B21",512),[[n,t.value]]),s(e("text",{onClick:h},"\u8FD4\u56DE\u4E3B\u9875",512),[[n,t.value]]),s(e("button",{class:"share",onClick:x},"\u5206\u4EAB\u5F97\u7FFB\u724C\u6B21\u6570",512),[[n,t.value&&o.id]])]),e("div",E,[e("div",H,[e("div",{class:"rollbox_front",style:p({transform:t.value?"rotateY(-180deg)":""}),onClick:g},null,4),e("div",{class:"rollbox_behind",style:p({transform:t.value?"rotateY(-360deg)":""})},[e("text",null,_(o.id?o.name:"\u611F\u8C22\u53C2\u4E0E"),1),s(e("img",{src:o.imgUrl},null,8,$),[[n,o.imgUrl]]),e("button",{onClick:i[0]||(i[0]=d=>o.id?f:"")},_(o.id?"\u67E5\u770B\u5956\u52B1":"\u4E0B\u6B21\u597D\u8FD0"),1)],4)])]),m(y,{show:l.value,"onUpdate:show":i[1]||(i[1]=d=>l.value=d),position:"bottom",style:{height:"24.3vw",opacity:"0.8"}},{default:B(()=>[m(F,{reward:o,num:1},null,8,["reward"])]),_:1},8,["show"])],64)}}},X=k(j,[["__scopeId","data-v-5a44ed07"]]);export{X as default};
