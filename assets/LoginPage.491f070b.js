import{_ as s,l as c,o as a,c as r,T as e}from"./index.38dae8b5.js";/* empty css              */import"./index.960d30b6.js";/* empty css              *//* empty css               */import{u as n}from"./user.bd1165d9.js";const i={__name:"LoginPage",setup(_){const t=c().query.code;return console.log(t),(async()=>{try{const o=await n(t);o.success?(window.localStorage.setItem("uuid",o.data),e.success("\u6388\u6743\u6210\u529F"),setTimeout(function(){window.close()},1e3)):e.fail("\u6388\u6743\u5931\u8D25")}catch(o){console.error(o),e.fail("\u6388\u6743\u5931\u8D25")}})(),(o,p)=>(a(),r("div"))}},v=s(i,[["__scopeId","data-v-d94c0bf5"]]);export{v as default};
