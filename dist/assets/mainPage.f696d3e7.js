import{i as s}from"./http.3778e2a8.js";const n=async a=>(await s.get("/api/user/credit",{headers:{token:a}})).data,r=async a=>(await s.get("/api/draw/chance",{})).data,c=async a=>(await s.post("/api/draw/buy-chance",{})).data,i=async a=>(await s.get("/api/task/",{})).data,o=async a=>(await s.post("/api/task/login",{})).data;export{n as a,c as b,r as c,o as l,i as t};
