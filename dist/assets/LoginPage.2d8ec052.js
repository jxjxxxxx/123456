import{_ as s,l as c,o as a,c as r,T as e}from"./index.af1c2fb6.js";/* empty css              */import{u as n}from"./index.e8230b43.js";/* empty css              */import"./http.3778e2a8.js";const i={__name:"LoginPage",setup(_){const t=c().query.code;return(async()=>{try{const o=await n(t);o.success?(window.localStorage.setItem("uuid",o.data),e.success("\u6388\u6743\u6210\u529F"),setTimeout(function(){window.close()},1e3)):e.fail("\u6388\u6743\u5931\u8D25")}catch(o){console.error(o),e.fail("\u6388\u6743\u5931\u8D25")}})(),(o,f)=>(a(),r("div"))}},y=s(i,[["__scopeId","data-v-f8f6c4f9"]]);export{y as default};
