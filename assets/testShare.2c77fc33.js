import{_ as c,o as i,c as o,a as e}from"./index.d995ce99.js";const r={__name:"testShare",setup(d){const t="https://draw-game.oss-cn-chengdu.aliyuncs.com/share-background/98e6890a3ff542ac8a182e67e71881f3.jpg",a="1::00::0::"+btoa(t),n="\u76AE\u80A4",s=async()=>{window.fb.init({success:()=>{window.fb.sendMessage({type:"messageCard",fit:"scaleDown",data:JSON.stringify({tag:"column",crossAxisAlignment:"start",children:[{tag:"row",padding:"5",children:[{tag:"markdown",data:`\u6211\u62BD\u4E2D${n}`,style:{color:"#000000",fontSize:15}}]},{tag:"row",children:[{tag:"container",padding:"5",child:{tag:"image",src:a,height:110,width:250,radius:10,fit:"fitHeight",alignment:"0.5"}}]},{tag:"container",width:250,margin:"5",child:{tag:"button",type:"outlined",size:"big",child:{tag:"text",data:"\u6211\u4E5F\u8981\u62BD"}}}]})})}})};return(g,l)=>(i(),o("div",null,[e("button",{onClick:s}),e("img",{src:t})]))}},h=c(r,[["__scopeId","data-v-eb812870"]]);export{h as default};
