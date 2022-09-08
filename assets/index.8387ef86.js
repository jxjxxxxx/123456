import{m as k,x as B,r as v,E as _,j as U,G as b,J as j,K as y,L as N,M as D,e as t,q as P,s as E,N as I,w as A,O as F,Q as z,R,I as K,z as C,S as M,U as V,V as Y,W as q,X as G,Y as H,Z as J,$,a0 as O,a1 as Q}from"./index.111615ab.js";const[W,g]=k("image"),X={src:String,alt:String,fit:String,position:String,round:Boolean,width:P,height:P,radius:P,lazyLoad:Boolean,iconSize:P,showError:E,errorIcon:I("photo-fail"),iconPrefix:String,showLoading:E,loadingIcon:I("photo")};var Z=B({name:W,props:X,emits:["load","error"],setup(e,{emit:f,slots:a}){const o=v(!1),s=v(!0),c=v(),{$Lazyload:i}=_().proxy,x=U(()=>{const n={width:b(e.width),height:b(e.height)};return j(e.radius)&&(n.overflow="hidden",n.borderRadius=b(e.radius)),n});y(()=>e.src,()=>{o.value=!1,s.value=!0});const l=n=>{s.value=!1,f("load",n)},S=n=>{o.value=!0,s.value=!1,f("error",n)},L=(n,d,m)=>m?m():t(K,{name:n,size:e.iconSize,class:d,classPrefix:e.iconPrefix},null),w=()=>{if(s.value&&e.showLoading)return t("div",{class:g("loading")},[L(e.loadingIcon,g("loading-icon"),a.loading)]);if(o.value&&e.showError)return t("div",{class:g("error")},[L(e.errorIcon,g("error-icon"),a.error)])},T=()=>{if(o.value||!e.src)return;const n={alt:e.alt,class:g("img"),style:{objectFit:e.fit,objectPosition:e.position}};return e.lazyLoad?A(t("img",z({ref:c},n),null),[[F("lazy"),e.src]]):t("img",z({src:e.src,onLoad:l,onError:S},n),null)},r=({el:n})=>{const d=()=>{n===c.value&&s.value&&l()};c.value?d():R(d)},u=({el:n})=>{n===c.value&&!o.value&&S()};return i&&N&&(i.$on("loaded",r),i.$on("error",u),D(()=>{i.$off("loaded",r),i.$off("error",u)})),()=>{var n;return t("div",{class:g({round:e.round}),style:x.value},[T(),w(),(n=a.default)==null?void 0:n.call(a)])}}});const ie=C(Z),p=Symbol(),ee=()=>M(p,null),[ne,h,re]=k("list"),ae={error:Boolean,offset:V(300),loading:Boolean,finished:Boolean,errorText:String,direction:I("down"),loadingText:String,finishedText:String,immediateCheck:E};var te=B({name:ne,props:ae,emits:["load","update:error","update:loading"],setup(e,{emit:f,slots:a}){const o=v(!1),s=v(),c=v(),i=ee(),x=Y(s),l=()=>{R(()=>{if(o.value||e.finished||e.error||(i==null?void 0:i.value)===!1)return;const{offset:r,direction:u}=e,n=$(x);if(!n.height||O(s))return;let d=!1;const m=$(c);u==="up"?d=n.top-m.top<=r:d=m.bottom-n.bottom<=r,d&&(o.value=!0,f("update:loading",!0),f("load"))})},S=()=>{if(e.finished){const r=a.finished?a.finished():e.finishedText;if(r)return t("div",{class:h("finished-text")},[r])}},L=()=>{f("update:error",!1),l()},w=()=>{if(e.error){const r=a.error?a.error():e.errorText;if(r)return t("div",{role:"button",class:h("error-text"),tabindex:0,onClick:L},[r])}},T=()=>{if(o.value&&!e.finished)return t("div",{class:h("loading")},[a.loading?a.loading():t(Q,{class:h("loading-icon")},{default:()=>[e.loadingText||re("loading")]})])};return y(()=>[e.loading,e.finished,e.error],l),i&&y(i,r=>{r&&l()}),q(()=>{o.value=e.loading}),G(()=>{e.immediateCheck&&l()}),H({check:l}),J("scroll",l,{target:x,passive:!0}),()=>{var r;const u=(r=a.default)==null?void 0:r.call(a),n=t("div",{ref:c,class:h("placeholder")},null);return t("div",{ref:s,role:"feed",class:h(),"aria-busy":o.value},[e.direction==="down"?u:n,T(),S(),w(),e.direction==="up"?u:n])}}});const se=C(te);export{ie as I,se as L};
