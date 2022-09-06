import{_ as ke}from"./TabBar.8b284ccc.js";/* empty css              */import{g as Ie,a as Te,b as Pe}from"./index.b08c2021.js";/* empty css               */import{m as D,q as P,s as z,ab as F,a6 as ae,x as p,e as i,J as T,I as $,z as U,a3 as Be,ac as le,Y as re,ad as q,ae as Ee,af as Me,a9 as Ae,ag as $e,ah as Le,E as Ne,N as O,U as Re,d as ie,r as Q,a7 as Fe,j as N,G as Oe,ai as ze,K as De,X as pe,R,aj as Ue,ak as We,al as X,Q as oe,aa as je,am as qe,F as se,a4 as Ge,_ as Ke,o as He,c as Ye,f as Z,T as I,p as Je,b as Qe,a as G}from"./index.1a401d05.js";import{r as Xe,u as Ze}from"./use-route.928dc592.js";import"./http.359cfc1d.js";const[et,A]=D("cell"),ce={icon:String,size:String,title:P,value:P,label:P,center:Boolean,isLink:Boolean,border:z,required:Boolean,iconPrefix:String,valueClass:F,labelClass:F,titleClass:F,titleStyle:null,arrowDirection:String,clickable:{type:Boolean,default:null}},tt=ae({},ce,Xe);var nt=p({name:et,props:tt,setup(e,{slots:n}){const l=Ze(),o=()=>{if(n.label||T(e.label))return i("div",{class:[A("label"),e.labelClass]},[n.label?n.label():e.label])},r=()=>{if(n.title||T(e.title))return i("div",{class:[A("title"),e.titleClass],style:e.titleStyle},[n.title?n.title():i("span",null,[e.title]),o()])},s=()=>{const f=n.value||n.default;if(f||T(e.value)){const b=n.title||T(e.title);return i("div",{class:[A("value",{alone:!b}),e.valueClass]},[f?f():i("span",null,[e.value])])}},S=()=>{if(n.icon)return n.icon();if(e.icon)return i($,{name:e.icon,class:A("left-icon"),classPrefix:e.iconPrefix},null)},g=()=>{if(n["right-icon"])return n["right-icon"]();if(e.isLink){const f=e.arrowDirection?`arrow-${e.arrowDirection}`:"arrow";return i($,{name:f,class:A("right-icon")},null)}};return()=>{var f,m;const{size:b,center:B,border:E,isLink:C,required:w}=e,x=(f=e.clickable)!=null?f:C,a={center:B,required:w,clickable:x,borderless:!E};return b&&(a[b]=!!b),i("div",{class:A(a),role:x?"button":void 0,tabindex:x?0:void 0,onClick:l},[S(),r(),s(),g(),(m=n.extra)==null?void 0:m.call(n)])}}});const at=U(nt),[lt,rt]=D("form"),it={colon:Boolean,disabled:Boolean,readonly:Boolean,showError:Boolean,labelWidth:P,labelAlign:String,inputAlign:String,scrollToError:Boolean,validateFirst:Boolean,submitOnEnter:z,showErrorMessage:z,errorMessageAlign:String,validateTrigger:{type:[String,Array],default:"onBlur"}};var ot=p({name:lt,props:it,emits:["submit","failed"],setup(e,{emit:n,slots:l}){const{children:o,linkChildren:r}=Be(le),s=a=>a?o.filter(d=>a.includes(d.name)):o,S=a=>new Promise((d,h)=>{const V=[];s(a).reduce((W,M)=>W.then(()=>{if(!V.length)return M.validate().then(L=>{L&&V.push(L)})}),Promise.resolve()).then(()=>{V.length?h(V):d()})}),g=a=>new Promise((d,h)=>{const V=s(a);Promise.all(V.map(v=>v.validate())).then(v=>{v=v.filter(Boolean),v.length?h(v):d()})}),f=a=>{const d=o.find(h=>h.name===a);return d?new Promise((h,V)=>{d.validate().then(v=>{v?V(v):h()})}):Promise.reject()},m=a=>typeof a=="string"?f(a):e.validateFirst?S(a):g(a),b=a=>{typeof a=="string"&&(a=[a]),s(a).forEach(h=>{h.resetValidation()})},B=()=>o.reduce((a,d)=>(a[d.name]=d.getValidationStatus(),a),{}),E=(a,d)=>{o.some(h=>h.name===a?(h.$el.scrollIntoView(d),!0):!1)},C=()=>o.reduce((a,d)=>(a[d.name]=d.formValue.value,a),{}),w=()=>{const a=C();m().then(()=>n("submit",a)).catch(d=>{n("failed",{values:a,errors:d}),e.scrollToError&&d[0].name&&E(d[0].name)})},x=a=>{q(a),w()};return r({props:e}),re({submit:w,validate:m,getValues:C,scrollToField:E,resetValidation:b,getValidationStatus:B}),()=>{var a;return i("form",{class:rt(),onSubmit:x},[(a=l.default)==null?void 0:a.call(l)])}}});const st=U(ot);function ue(e){return Array.isArray(e)?!e.length:e===0?!1:!e}function ct(e,n){if(ue(e)){if(n.required)return!1;if(n.validateEmpty===!1)return!0}return!(n.pattern&&!n.pattern.test(String(e)))}function ut(e,n){return new Promise(l=>{const o=n.validator(e,n);if($e(o)){o.then(l);return}l(o)})}function ee(e,n){const{message:l}=n;return Le(l)?l(e,n):l||""}function dt({target:e}){e.composing=!0}function te({target:e}){e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}function ft(e,n){const l=Ee();e.style.height="auto";let o=e.scrollHeight;if(Ae(n)){const{maxHeight:r,minHeight:s}=n;r!==void 0&&(o=Math.min(o,r)),s!==void 0&&(o=Math.max(o,s))}o&&(e.style.height=`${o}px`,Me(l))}function mt(e){return e==="number"?{type:"text",inputmode:"decimal"}:e==="digit"?{type:"tel",inputmode:"numeric"}:{type:e}}function j(e){return[...e].length}function gt(e,n){return[...e].slice(0,n).join("")}let ht=0;function bt(){const e=Ne(),{name:n="unknown"}=(e==null?void 0:e.type)||{};return`${n}-${++ht}`}const[vt,y]=D("field"),_t={id:String,name:String,leftIcon:String,rightIcon:String,autofocus:Boolean,clearable:Boolean,maxlength:P,formatter:Function,clearIcon:O("clear"),modelValue:Re(""),inputAlign:String,placeholder:String,autocomplete:String,errorMessage:String,enterkeyhint:String,clearTrigger:O("focus"),formatTrigger:O("onChange"),error:{type:Boolean,default:null},disabled:{type:Boolean,default:null},readonly:{type:Boolean,default:null}},yt=ae({},ce,_t,{rows:P,type:O("text"),rules:Array,autosize:[Boolean,Object],labelWidth:P,labelClass:F,labelAlign:String,showWordLimit:Boolean,errorMessageAlign:String,colon:{type:Boolean,default:null}});var St=p({name:vt,props:yt,emits:["blur","focus","clear","keypress","click-input","end-validate","start-validate","click-left-icon","click-right-icon","update:modelValue"],setup(e,{emit:n,slots:l}){const o=bt(),r=ie({status:"unvalidated",focused:!1,validateMessage:""}),s=Q(),S=Q(),{parent:g}=Fe(le),f=()=>{var t;return String((t=e.modelValue)!=null?t:"")},m=t=>{if(T(e[t]))return e[t];if(g&&T(g.props[t]))return g.props[t]},b=N(()=>{const t=m("readonly");if(e.clearable&&!t){const c=f()!=="",u=e.clearTrigger==="always"||e.clearTrigger==="focus"&&r.focused;return c&&u}return!1}),B=N(()=>S.value&&l.input?S.value():e.modelValue),E=t=>t.reduce((c,u)=>c.then(()=>{if(r.status==="failed")return;let{value:_}=B;if(u.formatter&&(_=u.formatter(_,u)),!ct(_,u)){r.status="failed",r.validateMessage=ee(_,u);return}if(u.validator)return ue(_)&&u.validateEmpty===!1?void 0:ut(_,u).then(k=>{k&&typeof k=="string"?(r.status="failed",r.validateMessage=k):k===!1&&(r.status="failed",r.validateMessage=ee(_,u))})}),Promise.resolve()),C=()=>{r.status="unvalidated",r.validateMessage=""},w=()=>n("end-validate",{status:r.status}),x=(t=e.rules)=>new Promise(c=>{C(),t?(n("start-validate"),E(t).then(()=>{r.status==="failed"?(c({name:e.name,message:r.validateMessage}),w()):(r.status="passed",c(),w())})):c()}),a=t=>{if(g&&e.rules){const{validateTrigger:c}=g.props,u=X(c).includes(t),_=e.rules.filter(k=>k.trigger?X(k.trigger).includes(t):u);_.length&&x(_)}},d=t=>{const{maxlength:c}=e;if(T(c)&&j(t)>c){const u=f();return u&&j(u)===+c?u:gt(t,+c)}return t},h=(t,c="onChange")=>{if(t=d(t),e.type==="number"||e.type==="digit"){const u=e.type==="number";t=Ue(t,u,u)}e.formatter&&c===e.formatTrigger&&(t=e.formatter(t)),s.value&&s.value.value!==t&&(s.value.value=t),t!==e.modelValue&&n("update:modelValue",t)},V=t=>{t.target.composing||h(t.target.value)},v=()=>{var t;return(t=s.value)==null?void 0:t.blur()},W=()=>{var t;return(t=s.value)==null?void 0:t.focus()},M=()=>{const t=s.value;e.type==="textarea"&&e.autosize&&t&&ft(t,e.autosize)},L=t=>{r.focused=!0,n("focus",t),R(M),m("readonly")&&v()},de=t=>{m("readonly")||(r.focused=!1,h(f(),"onBlur"),n("blur",t),a("onBlur"),R(M),qe())},H=t=>n("click-input",t),fe=t=>n("click-left-icon",t),me=t=>n("click-right-icon",t),ge=t=>{q(t),n("update:modelValue",""),n("clear",t)},Y=N(()=>{if(typeof e.error=="boolean")return e.error;if(g&&g.props.showError&&r.status==="failed")return!0}),he=N(()=>{const t=m("labelWidth");if(t)return{width:Oe(t)}}),be=t=>{t.keyCode===13&&(!(g&&g.props.submitOnEnter)&&e.type!=="textarea"&&q(t),e.type==="search"&&v()),n("keypress",t)},J=()=>e.id||`${o}-input`,ve=()=>r.status,_e=()=>{const t=y("control",[m("inputAlign"),{error:Y.value,custom:!!l.input,"min-height":e.type==="textarea"&&!e.autosize}]);if(l.input)return i("div",{class:t,onClick:H},[l.input()]);const c={id:J(),ref:s,name:e.name,rows:e.rows!==void 0?+e.rows:void 0,class:t,disabled:m("disabled"),readonly:m("readonly"),autofocus:e.autofocus,placeholder:e.placeholder,autocomplete:e.autocomplete,enterkeyhint:e.enterkeyhint,"aria-labelledby":e.label?`${o}-label`:void 0,onBlur:de,onFocus:L,onInput:V,onClick:H,onChange:te,onKeypress:be,onCompositionend:te,onCompositionstart:dt};return e.type==="textarea"?i("textarea",c,null):i("input",oe(mt(e.type),c),null)},ye=()=>{const t=l["left-icon"];if(e.leftIcon||t)return i("div",{class:y("left-icon"),onClick:fe},[t?t():i($,{name:e.leftIcon,classPrefix:e.iconPrefix},null)])},Se=()=>{const t=l["right-icon"];if(e.rightIcon||t)return i("div",{class:y("right-icon"),onClick:me},[t?t():i($,{name:e.rightIcon,classPrefix:e.iconPrefix},null)])},Ve=()=>{if(e.showWordLimit&&e.maxlength){const t=j(f());return i("div",{class:y("word-limit")},[i("span",{class:y("word-num")},[t]),je("/"),e.maxlength])}},Ce=()=>{if(g&&g.props.showErrorMessage===!1)return;const t=e.errorMessage||r.validateMessage;if(t){const c=l["error-message"],u=m("errorMessageAlign");return i("div",{class:y("error-message",u)},[c?c({message:t}):t])}},xe=()=>{const t=m("colon")?":":"";if(l.label)return[l.label(),t];if(e.label)return i("label",{id:`${o}-label`,for:J()},[e.label+t])},we=()=>[i("div",{class:y("body")},[_e(),b.value&&i($,{name:e.clearIcon,class:y("clear"),onTouchstart:ge},null),Se(),l.button&&i("div",{class:y("button")},[l.button()])]),Ve(),Ce()];return re({blur:v,focus:W,validate:x,formValue:B,resetValidation:C,getValidationStatus:ve}),ze(We,{customValue:S,resetValidation:C,validateWithTrigger:a}),De(()=>e.modelValue,()=>{h(f()),C(),a("onChange"),R(M)}),pe(()=>{h(f(),e.formatTrigger),R(M)}),()=>{const t=m("disabled"),c=m("labelAlign"),u=xe(),_=ye();return i(at,{size:e.size,icon:e.leftIcon,class:y({error:Y.value,disabled:t,[`label-${c}`]:c}),center:e.center,border:e.border,isLink:e.isLink,clickable:e.clickable,titleStyle:he.value,valueClass:y("value"),titleClass:[y("label",[c,{required:e.required}]),e.labelClass],arrowDirection:e.arrowDirection},{icon:_?()=>_:null,title:u?()=>u:null,value:we,extra:l.extra})}}});const Vt=U(St),[Ct,ne]=D("cell-group"),xt={title:String,inset:Boolean,border:z};var wt=p({name:Ct,inheritAttrs:!1,props:xt,setup(e,{slots:n,attrs:l}){const o=()=>{var s;return i("div",oe({class:[ne({inset:e.inset}),{[Ge]:e.border&&!e.inset}]},l),[(s=n.default)==null?void 0:s.call(n)])},r=()=>i("div",{class:ne("title",{inset:e.inset})},[n.title?n.title():e.title]);return()=>e.title||n.title?i(se,null,[r(),o()]):o()}});const kt=U(wt);const K=e=>(Je("data-v-cb584150"),e=e(),Qe(),e),It=K(()=>G("div",{class:"address-form-item-label"},"\u6536\u4EF6\u4EBA\u59D3\u540D",-1)),Tt=K(()=>G("div",{class:"address-form-item-label"},"\u6536\u4EF6\u4EBA\u7535\u8BDD",-1)),Pt=K(()=>G("div",{class:"address-form-item-label"},"\u6536\u4EF6\u4EBA\u5730\u5740",-1)),Bt={__name:"AddressManage",setup(e){const n=async()=>{I.loading({message:"\u52A0\u8F7D\u4E2D",duration:0,className:"toast",forbidClick:!0});try{const r=await Ie();r.success?(setTimeout(()=>I.clear(),250),l.address=r.data.address,l.phoneNum=r.data.phoneNum,l.recipient=r.data.recipient):r.code===4001?(I("\u8BF7\u91CD\u65B0\u767B\u5F55"),setTimeout(function(){Te()},1e3)):I.fail("\u7F51\u7EDC\u5F02\u5E38")}catch(r){console.error(r),I.fail("\u7F51\u7EDC\u5F02\u5E38")}},l=ie({address:"",recipient:"",phoneNum:""}),o=async()=>{(await Pe(l)).success?I.success("\u4FDD\u5B58\u6210\u529F"):I.fail("\u4FDD\u5B58\u5931\u8D25")};return n(),(r,s)=>{const S=Vt,g=kt,f=st,m=ke;return He(),Ye(se,null,[i(f,{class:"address-form"},{default:Z(()=>[i(g,{inset:"",border:""},{default:Z(()=>[It,i(S,{class:"address-form-item-input",modelValue:l.address,"onUpdate:modelValue":s[0]||(s[0]=b=>l.address=b),name:"address",placeholder:"\u8BF7\u8F93\u5165\u6536\u8D27\u4EBA\u59D3\u540D"},null,8,["modelValue"]),Tt,i(S,{class:"address-form-item-input",modelValue:l.phoneNum,"onUpdate:modelValue":s[1]||(s[1]=b=>l.phoneNum=b),name:"recipient",placeholder:"\u8BF7\u8F93\u5165\u624B\u673A\u53F7"},null,8,["modelValue"]),Pt,i(S,{class:"address-form-item-input",modelValue:l.recipient,"onUpdate:modelValue":s[2]||(s[2]=b=>l.recipient=b),name:"phoneNum",placeholder:"\u8BF7\u8F93\u5165\u6536\u4EF6\u5730\u5740"},null,8,["modelValue"])]),_:1})]),_:1}),i(m,{type:1,onPost:s[3]||(s[3]=b=>o())})],64)}}},Ft=Ke(Bt,[["__scopeId","data-v-cb584150"]]);export{Ft as default};
