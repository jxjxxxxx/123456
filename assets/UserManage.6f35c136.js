/* empty css              */import{m as B,s as P,q as g,U as O,x as I,r as V,a3 as $,e as o,y as N,a4 as U,a5 as w,z as y,a6 as E,E as R,a7 as j,j as z,a8 as q,Q as D,a9 as F,I as K,_ as Q,C as Y,o as Z,c as G,a as H,f,aa as k}from"./index.111615ab.js";import{u as J}from"./use-placeholder.b669231c.js";import{r as L,u as W}from"./use-route.f6d55b8c.js";const[A,C]=B("tabbar"),X={route:Boolean,fixed:P,border:P,zIndex:g,placeholder:Boolean,activeColor:String,beforeChange:Function,inactiveColor:String,modelValue:O(0),safeAreaInsetBottom:{type:Boolean,default:null}},T=Symbol(A);var ee=I({name:A,props:X,emits:["change","update:modelValue"],setup(e,{emit:l,slots:r}){const i=V(),{linkChildren:d}=$(T),s=J(i,C),u=()=>{var t;return(t=e.safeAreaInsetBottom)!=null?t:e.fixed},a=()=>{var t;const{fixed:n,zIndex:c,border:_}=e;return o("div",{ref:i,role:"tablist",style:N(c),class:[C({fixed:n}),{[U]:_,"van-safe-area-bottom":u()}]},[(t=r.default)==null?void 0:t.call(r)])};return d({props:e,setActive:(t,n)=>{w(e.beforeChange,{args:[t],done(){l("update:modelValue",t),l("change",t),n()}})}}),()=>e.fixed&&e.placeholder?s(a):a()}});const ae=y(ee),[te,p]=B("tabbar-item"),ne=E({},L,{dot:Boolean,icon:String,name:g,badge:g,badgeProps:Object,iconPrefix:String});var oe=I({name:te,props:ne,emits:["click"],setup(e,{emit:l,slots:r}){const i=W(),d=R().proxy,{parent:s,index:u}=j(T);if(!s)return;const a=z(()=>{var n;const{route:c,modelValue:_}=s.props;if(c&&"$route"in d){const{$route:b}=d,{to:v}=e,m=F(v)?v:{path:v};return!!b.matched.find(h=>{const S="path"in m&&m.path===h.path,M="name"in m&&m.name===h.name;return S||M})}return((n=e.name)!=null?n:u.value)===_}),x=n=>{var c;a.value||s.setActive((c=e.name)!=null?c:u.value,i),l("click",n)},t=()=>{if(r.icon)return r.icon({active:a.value});if(e.icon)return o(K,{name:e.icon,classPrefix:e.iconPrefix},null)};return()=>{var n;const{dot:c,badge:_}=e,{activeColor:b,inactiveColor:v}=s.props,m=a.value?b:v;return o("div",{role:"tab",class:p({active:a.value}),style:{color:m},tabindex:0,"aria-selected":a.value,onClick:x},[o(q,D({dot:c,class:p("icon"),content:_},e.badgeProps),{default:t}),o("div",{class:p("text")},[(n=r.default)==null?void 0:n.call(r,{active:a.value})])])}}});const re=y(oe);const se={id:"user-manage-page"},ce={id:"user-manage-card"},le=k("\u83B7\u5956\u8BB0\u5F55"),ie=k("\u6536\u8D27\u5730\u5740"),de={__name:"UserManage",setup(e){const l=V(0);return(r,i)=>{const d=re,s=ae,u=Y("router-view");return Z(),G("div",se,[H("div",ce,[o(s,{modelValue:l.value,"onUpdate:modelValue":i[0]||(i[0]=a=>l.value=a),fixed:!1,route:"","active-color":"#676767","inactive-color":"#999999",class:"card-tab-bar"},{default:f(()=>[o(d,{class:"card-tab-bar-item",to:"/user/turn"},{default:f(()=>[le]),_:1}),o(d,{class:"card-tab-bar-item",to:"/user/address"},{default:f(()=>[ie]),_:1})]),_:1},8,["modelValue"]),o(u)])])}}},be=Q(de,[["__scopeId","data-v-81d372e9"]]);export{be as default};
