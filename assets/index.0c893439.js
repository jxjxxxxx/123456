import{i as a}from"./http.85422dc5.js";const n=async()=>{window.fb.init({success:()=>{window.fb.oAuth({oAuthUrl:"https://draw-game.be.wizzstudio.com/api/user/redirect"}).then(function(){location.reload()})}})},r=async s=>(await a.get("/api/user/login",{params:{code:s}})).data,o=async()=>(await a.get("/api/user/address-info")).data,i=async s=>(await a.put("/api/user/address-info",s,{headers:{"Content-Type":"application/json"}})).data;export{n as a,i as b,o as g,r as u};
