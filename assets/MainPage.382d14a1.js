import{_ as C,u as S,r as l,o as T,c as F,a as s,t as d,n as h,F as N,T as a,p as M,b as P}from"./index.97e23d87.js";import{c as z,a as L,b as O,t as R,l as $}from"./mainPage.ab425f0f.js";import{a as f}from"./index.f70483b3.js";/* empty css              *//* empty css              */import"./http.2ca3d904.js";const t=r=>(M("data-v-3e41f2b9"),r=r(),P(),r),D=t(()=>s("div",null,null,-1)),E={class:"gachaBox"},U=t(()=>s("div",{class:"cards"},[s("div",{class:"card"},[s("div")]),s("div",{class:"card"},[s("div")]),s("div",{class:"card"},[s("div")])],-1)),V={class:"numLeft"},j=t(()=>s("div",{class:"line"},[s("div")],-1)),q={class:"tasks"},A=t(()=>s("div",{class:"title"},"\u4EFB\u52A1\u4E2D\u5FC3",-1)),G={class:"taskBack"},H={class:"taskBox"},J=t(()=>s("text",{class:"taskName",decode:"true"},"\u2460\u2002\u767B\u5F55\u62BD\u5361\u9875",-1)),K=t(()=>s("text",{class:"add"},"\u6B21\u6570+3",-1)),Q={class:"taskBox"},W=t(()=>s("text",{class:"taskName",decode:"true"},"\u2461\u2002\u5206\u4EAB\u62BD\u5361\u7ED3\u679C\u5230\u9891\u9053",-1)),X=t(()=>s("text",{class:"add"},"\u6B21\u6570+2",-1)),Y={class:"taskBox"},Z=t(()=>s("text",{class:"taskName",decode:"true"},"\u2462\u2002\u53D1\u5E16\u4E00\u6B21",-1)),ss=t(()=>s("text",{class:"add"},"\u6B21\u6570+1",-1)),es={class:"taskBox"},ts=t(()=>s("text",{class:"taskName",decode:"true"},"\u2463\u2002\u53D1\u8A00\u4E09\u6B21",-1)),as=t(()=>s("text",{class:"add"},"\u6B21\u6570+1",-1)),os={class:"taskBox"},cs=t(()=>s("text",{class:"taskName",decode:"true"},"\u2464\u2002\u79EF\u5206\u5151\u6362\u6B21\u6570",-1)),ns={class:"add",decode:"true"},is={__name:"MainPage",setup(r){const u=S(),g=()=>{window.localStorage.getItem("uuid")?_.value>=1?u.push({path:"/gachaOne"}):a("\u62BD\u5361\u6B21\u6570\u4E0D\u8DB3"):a("\u60A8\u5C1A\u672A\u767B\u5F55")},m=()=>{window.localStorage.getItem("uuid")?_.value>=10?u.push({path:"/gachaTen"}):a("\u62BD\u5361\u6B21\u6570\u4E0D\u8DB3"):a("\u60A8\u5C1A\u672A\u767B\u5F55")},y=()=>{window.localStorage.getItem("uuid")?u.push({path:"/rewards"}):a("\u60A8\u5C1A\u672A\u767B\u5F55")},w=()=>{window.localStorage.getItem("uuid")?u.push({path:"/user"}):a("\u60A8\u5C1A\u672A\u767B\u5F55")};(async()=>{try{await window.localStorage.getItem("uuid")||f()}catch{}})();const _=l(0),k=l(0),p=async()=>{try{const e=await z();e.success&&(_.value=e.data)}catch{}};p();const b=async()=>{try{const e=await L();e.success&&(k.value=e.data)}catch{}};b();const x=async()=>{try{const e=await O();e.success?(b(),p(),a("\u5151\u6362\u6210\u529F")):e.code===4001?(a("\u8BF7\u91CD\u65B0\u767B\u5F55"),setTimeout(function(){f()},1e3)):e.code===5e3&&a("\u9047\u5230\u4E86\u672A\u77E5\u7684\u9519\u8BEF")}catch{}};(async()=>{try{const e=await R();e.success&&(o.value=e.data[0].finished,n.value=e.data[1].finished,i.value=e.data[2].finished,c.value=e.data[3].finished)}catch{}})();const o=l(!1),n=l(!1),i=l(!1),c=l(!1),B=async()=>{try{const e=await $();e.success?o.value=!0:e.code===4001?(a("\u8BF7\u91CD\u65B0\u767B\u5F55"),setTimeout(function(){f()},1e3)):e.code===5e3&&a("\u9047\u5230\u4E86\u672A\u77E5\u7684\u9519\u8BEF")}catch{}};return(e,v)=>(T(),F(N,null,[s("div",{class:"nav"},[s("button",{onClick:y},"\u5956\u52B1\u4E00\u89C8"),D,s("button",{onClick:w},"\u4E2A\u4EBA\u4E2D\u5FC3")]),s("div",E,[U,s("div",V,"\u5269\u4F59"+d(_.value)+"\u6B21",1),s("div",{class:"btnBox"},[s("button",{class:"draw",onClick:g}," \u62BD\u5361\u4E00\u6B21 "),s("button",{class:"draw",onClick:m}," \u62BD\u5361\u5341\u6B21 ")])]),j,s("div",q,[A,s("div",G,[s("div",H,[J,K,s("button",{class:"goFinish",onClick:v[0]||(v[0]=I=>o.value?"":B()),style:h({background:o.value?"none":"",color:o.value?"#999999":"","border-style":o.value?"none":"","box-shadow":o.value?"none":""})},d(o.value?"\u5DF2\u5B8C\u6210":"\u53BB\u5B8C\u6210"),5)]),s("div",Q,[W,X,s("button",{class:"goFinish",onClick:v[1]||(v[1]=I=>c.value?"":g()),style:h({background:c.value?"none":"",color:c.value?"#999999":"","border-style":c.value?"none":"","box-shadow":c.value?"none":""})},d(c.value?"\u5DF2\u5B8C\u6210":"\u53BB\u5B8C\u6210"),5)]),s("div",Y,[Z,ss,s("button",{class:"goFinish",style:h({background:i.value?"none":"",color:i.value?"#999999":"","border-style":i.value?"none":"","box-shadow":i.value?"none":""})},d(i.value?"\u5DF2\u5B8C\u6210":"\u53BB\u5B8C\u6210"),5)]),s("div",es,[ts,as,s("button",{class:"goFinish",style:h({background:n.value?"none":"",color:n.value?"#999999":"","border-style":n.value?"none":"","box-shadow":n.value?"none":""})},d(n.value?"\u5DF2\u5B8C\u6210":"\u53BB\u5B8C\u6210"),5)]),s("div",os,[cs,s("text",ns,"5\u79EF\u5206/\u6B21\u2002\u2002\u2002\u2002\u5269\u4F59\u79EF\u5206:"+d(k.value),1),s("button",{class:"goFinish",onClick:x},"\u5151\u6362")])])])],64))}},gs=C(is,[["__scopeId","data-v-3e41f2b9"]]);export{gs as default};
