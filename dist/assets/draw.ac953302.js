import{i as s}from"./http.588d53d2.js";const n=async a=>(await s.post("/api/draw/draw-one",{})).data,o=async(a,r)=>(await s.get("/api/draw/records",{params:{current:a,size:r}})).data;export{n as d,o as g};
