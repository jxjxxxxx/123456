import{i as a}from"./index.b9d39bb0.js";const r=async()=>{window.fb.init({success:()=>{window.fb.oAuth({oAuthUrl:"https://draw-game.be.wizzstudio.com/api/user/redirect"}).then(function(){location.reload()})}})},n=async s=>(await a.get("/api/user/login",{params:{code:s}})).data,o=async()=>(await a.get("/api/user/address-info")).data,i=async s=>(await a.put("/api/user/address-info",s,{headers:{"Content-Type":"application/json"}})).data;export{r as a,i as b,o as g,n as u};
