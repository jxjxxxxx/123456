import{_ as C,u as T,r as l,o as F,c as N,a as s,t as d,n as h,F as M,T as t,p as P,b as z}from"./index.0f54d3ae.js";import{c as L,a as O,b as R,t as $,l as D}from"./mainPage.6d5d1262.js";import{a as g}from"./user.835bae16.js";/* empty css              */import"./index.2d17add5.js";/* empty css              *//* empty css               */const a=r=>(P("data-v-5aa7e2b0"),r=r(),z(),r),E=a(()=>s("div",null,null,-1)),U={class:"gachaBox"},V=a(()=>s("div",{class:"cards"},[s("div",{class:"card"},[s("div")]),s("div",{class:"card"},[s("div")]),s("div",{class:"card"},[s("div")])],-1)),j={class:"numLeft"},q=a(()=>s("div",{class:"line"},[s("div")],-1)),A={class:"tasks"},G=a(()=>s("div",{class:"title"},"\u4EFB\u52A1\u4E2D\u5FC3",-1)),H={class:"taskBack"},J={class:"taskBox"},K=a(()=>s("text",{class:"taskName",decode:"true"},"\u2460\u2002\u767B\u5F55\u62BD\u5361\u9875",-1)),Q=a(()=>s("text",{class:"add"},"\u6B21\u6570+3",-1)),W={class:"taskBox"},X=a(()=>s("text",{class:"taskName",decode:"true"},"\u2461\u2002\u5206\u4EAB\u62BD\u5361\u7ED3\u679C\u5230\u9891\u9053",-1)),Y=a(()=>s("text",{class:"add"},"\u6B21\u6570+2",-1)),Z={class:"taskBox"},ss=a(()=>s("text",{class:"taskName",decode:"true"},"\u2462\u2002\u53D1\u5E16\u4E00\u6B21",-1)),es=a(()=>s("text",{class:"add"},"\u6B21\u6570+1",-1)),ts={class:"taskBox"},as=a(()=>s("text",{class:"taskName",decode:"true"},"\u2463\u2002\u53D1\u8A00\u4E09\u6B21",-1)),os=a(()=>s("text",{class:"add"},"\u6B21\u6570+1",-1)),cs={class:"taskBox"},ns=a(()=>s("text",{class:"taskName",decode:"true"},"\u2464\u2002\u79EF\u5206\u5151\u6362\u6B21\u6570",-1)),is={class:"add",decode:"true"},ls={__name:"MainPage",setup(r){const u=T(),k=()=>{window.localStorage.getItem("uuid")?_.value>=1?u.push({path:"/gachaOne"}):t("\u62BD\u5361\u6B21\u6570\u4E0D\u8DB3"):t("\u60A8\u5C1A\u672A\u767B\u5F55")},w=()=>{window.localStorage.getItem("uuid")?_.value>=10?u.push({path:"/gachaTen"}):t("\u62BD\u5361\u6B21\u6570\u4E0D\u8DB3"):t("\u60A8\u5C1A\u672A\u767B\u5F55")},y=()=>{window.localStorage.getItem("uuid")?u.push({path:"/rewards"}):t("\u60A8\u5C1A\u672A\u767B\u5F55")},x=()=>{window.localStorage.getItem("uuid")?u.push({path:"/user"}):t("\u60A8\u5C1A\u672A\u767B\u5F55")};(async()=>{try{window.localStorage.getItem("uuid")||g()}catch{}})();const _=l(0),p=l(0),f=async()=>{try{const e=await L();e.success&&(_.value=e.data)}catch{}};f();const m=async()=>{try{const e=await O();e.success&&(p.value=e.data)}catch{}};m();const I=async()=>{try{const e=await R();e.success?(m(),f(),t("\u5151\u6362\u6210\u529F")):e.code===4001?(t("\u8BF7\u91CD\u65B0\u767B\u5F55"),setTimeout(function(){g()},1e3)):e.code===5e3&&e.msg==="\u5269\u4F59\u79EF\u5206\u4E0D\u8DB3"&&t("\u79EF\u5206\u4E0D\u8DB3")}catch{}},B=async()=>{try{const e=await $();e.success?(o.value=e.data[0].finished,n.value=e.data[1].finished,i.value=e.data[2].finished,c.value=e.data[3].finished):e.code===4001?(t("\u8BF7\u91CD\u65B0\u767B\u5F55"),setTimeout(function(){g()},1e3)):t.fail("\u7F51\u7EDC\u5F02\u5E38")}catch{}};window.localStorage.getItem("uuid")&&B();const o=l(!1),n=l(!1),i=l(!1),c=l(!1),b=async()=>{try{const e=await D();e.success?(o.value=!0,f()):e.code===4001?(t("\u8BF7\u91CD\u65B0\u767B\u5F55"),setTimeout(function(){g()},1e3)):e.code===5e3&&t("\u9047\u5230\u4E86\u672A\u77E5\u7684\u9519\u8BEF")}catch{}};return b(),(e,v)=>(F(),N(M,null,[s("div",{class:"nav"},[s("button",{onClick:y},"\u5956\u52B1\u4E00\u89C8"),E,s("button",{onClick:x},"\u4E2A\u4EBA\u4E2D\u5FC3")]),s("div",U,[V,s("div",j,"\u5269\u4F59"+d(_.value)+"\u6B21",1),s("div",{class:"btnBox"},[s("button",{class:"draw",onClick:k}," \u62BD\u5361\u4E00\u6B21 "),s("button",{class:"draw",onClick:w}," \u62BD\u5361\u5341\u6B21 ")])]),q,s("div",A,[G,s("div",H,[s("div",J,[K,Q,s("button",{class:"goFinish",onClick:v[0]||(v[0]=S=>o.value?"":b()),style:h({background:o.value?"none":"",color:o.value?"#999999":"","border-style":o.value?"none":"","box-shadow":o.value?"none":""})},d(o.value?"\u5DF2\u5B8C\u6210":"\u53BB\u5B8C\u6210"),5)]),s("div",W,[X,Y,s("button",{class:"goFinish",onClick:v[1]||(v[1]=S=>c.value?"":k()),style:h({background:c.value?"none":"",color:c.value?"#999999":"","border-style":c.value?"none":"","box-shadow":c.value?"none":""})},d(c.value?"\u5DF2\u5B8C\u6210":"\u53BB\u5B8C\u6210"),5)]),s("div",Z,[ss,es,s("button",{class:"goFinish",style:h({background:i.value?"none":"",color:i.value?"#999999":"","border-style":i.value?"none":"","box-shadow":i.value?"none":""})},d(i.value?"\u5DF2\u5B8C\u6210":"\u53BB\u5B8C\u6210"),5)]),s("div",ts,[as,os,s("button",{class:"goFinish",style:h({background:n.value?"none":"",color:n.value?"#999999":"","border-style":n.value?"none":"","box-shadow":n.value?"none":""})},d(n.value?"\u5DF2\u5B8C\u6210":"\u53BB\u5B8C\u6210"),5)]),s("div",cs,[ns,s("text",is,"5\u79EF\u5206/\u6B21\u2002\u2002\u2002\u2002\u5269\u4F59\u79EF\u5206:"+d(p.value),1),s("button",{class:"goFinish",onClick:I},"\u5151\u6362")])])])],64))}},ks=C(ls,[["__scopeId","data-v-5aa7e2b0"]]);export{ks as default};
