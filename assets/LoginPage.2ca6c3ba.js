import{_ as s,l as c,o as a,c as r,T as e}from"./index.ca6d9548.js";/* empty css              */import{u as n}from"./index.dab78905.js";/* empty css              *//* empty css               */import"./http.27f1c7a2.js";const _={__name:"LoginPage",setup(i){const t=c().query.code;return(async()=>{try{const o=await n(t);o.success?(window.localStorage.setItem("uuid",o.data),e.success("\u6388\u6743\u6210\u529F")):e.fail("\u6388\u6743\u5931\u8D25")}catch(o){console.error(o),e.fail("\u6388\u6743\u5931\u8D25")}})(),(o,p)=>(a(),r("div"))}},x=s(_,[["__scopeId","data-v-8ca0c1f5"]]);export{x as default};
