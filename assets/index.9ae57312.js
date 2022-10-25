import{A as m}from"./index.3953f8b5.js";import{A as U}from"./AppType.f79597c7.js";import{B as u}from"./index.544f6269.js";import{S as g}from"./index.16b5e32a.js";import{S as r}from"./index.69f6298f.js";import{d as V}from"./index.8b4f1b33.js";import{u as _,a as E,_ as L,b as M,c as q}from"./index.8c844836.js";import{a as P,b as Q}from"./utils.8699bdee.js";import{r as $,a as f,f as Y,h as j,q as n,S as i,an as o,F as G,P as s,Q as c}from"./vue-router.esm-bundler.786782d7.js";import"./index.f5bcaaa1.js";import"./index.5d0c9db1.js";/* empty css               */import"./elements.c4571a13.js";import"./shared.ca7a1081.js";import"./components.5becca44.js";import"./index.f8abda06.js";import"./lock.60d17316.js";import"./zIndex.968e189b.js";import"./index.dff8d656.js";import"./index.cc77df0d.js";const H={functionCall:"\u51FD\u6570\u8C03\u7528",basicUsage:"\u57FA\u672C\u4F7F\u7528",modifyTitle:"\u4FEE\u6539\u6807\u9898",componentCall:"\u7EC4\u4EF6\u8C03\u7528",yourSelected:"\u60A8\u9009\u62E9\u7684\u662F:",customTitle:"\u9009\u62E9\u4E00\u4E2A\u4F60\u559C\u6B22\u7684\u5427",disableCloseOnClickAction:"\u7981\u7528\u70B9\u51FB\u9009\u9879\u65F6\u5173\u95ED\u52A8\u4F5C\u9762\u677F",disabled:"\u7981\u7528\u9009\u9879",customActionStyles:"\u81EA\u5B9A\u4E49\u9009\u9879\u6837\u5F0F"},J={functionCall:"Function Call",basicUsage:"Basic Usage",modifyTitle:"Modify Title",componentCall:"Component Call",yourSelected:"Your selected is:",customTitle:"Choose whichever you like",disableCloseOnClickAction:"Disable close on click action",disabled:"Action Disabled",customActionStyles:"Custom Action Styles"},{add:I,use:K,pack:t,packs:ko,merge:bo}=_(),R=C=>{q(C),K(C)};E("zh-CN",L);E("en-US",M);I("zh-CN",H);I("en-US",J);const So={setup(C){const d=m.Component,w=[{name:"Item 01",icon:"account-circle"},{name:"Item 02",icon:"notebook"},{name:"Item 03",icon:"wifi"}],F=[{name:"Item 01",icon:"account-circle"},{name:"Item 02",icon:"notebook"},{name:"Item 03",icon:"wifi",disabled:!0}],h=[{name:"Item 01",icon:"account-circle",color:"#00c48f"},{name:"Item 02",icon:"notebook",color:"#ff9800"},{name:"Item 03",icon:"wifi",color:"#00afef"}],y=$(w),T=$(F),B=$(h),k=f(!1),b=f(!1),S=f(!1),v=f(!1),A=f(!1),D=async()=>{const a=await m({actions:w});a!=="close"&&r(`${t.value.yourSelected}${a.name}`)},N=async()=>{const a=await m({actions:w,title:t.value.customTitle});a!=="close"&&r(`${t.value.yourSelected}${a.name}`)},z=async()=>{const a=await m({actions:F});a!=="close"&&r(`${t.value.yourSelected}${a.name}`)},O=async()=>{const a=await m({actions:h});a!=="close"&&r(`${t.value.yourSelected}${a.name}`)},x=()=>{m({actions:[{name:"Item 01",icon:"account-circle"},{name:"Item 02",icon:"notebook"},{name:"Item 03",icon:"wifi"}],closeOnClickAction:!1,onSelect:a=>r(`${t.value.yourSelected}${a.name}`)})},p=a=>{r(`${t.value.yourSelected}${a.name}`)};return P(R),Q(V),(a,e)=>(Y(),j(G,null,[n(o(U),null,{default:i(()=>[s(c(o(t).functionCall),1)]),_:1}),n(o(g),{direction:"column",size:["3vw","4vw"]},{default:i(()=>[n(o(u),{type:"primary",block:"",onClick:D},{default:i(()=>[s(c(o(t).basicUsage),1)]),_:1}),n(o(u),{type:"primary",block:"",onClick:N},{default:i(()=>[s(c(o(t).modifyTitle),1)]),_:1}),n(o(u),{type:"primary",block:"",onClick:z},{default:i(()=>[s(c(o(t).disabled),1)]),_:1}),n(o(u),{type:"primary",block:"",onClick:x},{default:i(()=>[s(c(o(t).disableCloseOnClickAction),1)]),_:1}),n(o(u),{type:"primary",block:"",onClick:O},{default:i(()=>[s(c(o(t).customActionStyles),1)]),_:1})]),_:1}),n(o(U),null,{default:i(()=>[s(c(o(t).componentCall),1)]),_:1}),n(o(g),{direction:"column",size:["3vw","4vw"]},{default:i(()=>[n(o(u),{type:"warning",block:"",onClick:e[0]||(e[0]=l=>k.value=!0)},{default:i(()=>[s(c(o(t).basicUsage),1)]),_:1}),n(o(u),{type:"warning",block:"",onClick:e[1]||(e[1]=l=>b.value=!0)},{default:i(()=>[s(c(o(t).modifyTitle),1)]),_:1}),n(o(u),{type:"warning",block:"",onClick:e[2]||(e[2]=l=>S.value=!0)},{default:i(()=>[s(c(o(t).disabled),1)]),_:1}),n(o(u),{type:"warning",block:"",onClick:e[3]||(e[3]=l=>v.value=!0)},{default:i(()=>[s(c(o(t).disableCloseOnClickAction),1)]),_:1}),n(o(u),{type:"warning",block:"",onClick:e[4]||(e[4]=l=>A.value=!0)},{default:i(()=>[s(c(o(t).customActionStyles),1)]),_:1})]),_:1}),n(o(d),{actions:o(y),show:k.value,"onUpdate:show":e[5]||(e[5]=l=>k.value=l),onSelect:p},null,8,["actions","show"]),n(o(d),{title:o(t).customTitle,actions:o(y),show:b.value,"onUpdate:show":e[6]||(e[6]=l=>b.value=l),onSelect:p},null,8,["title","actions","show"]),n(o(d),{actions:o(T),show:S.value,"onUpdate:show":e[7]||(e[7]=l=>S.value=l),onSelect:p},null,8,["actions","show"]),n(o(d),{"close-on-click-action":!1,actions:o(y),show:v.value,"onUpdate:show":e[8]||(e[8]=l=>v.value=l),onSelect:p},null,8,["actions","show"]),n(o(d),{actions:o(B),show:A.value,"onUpdate:show":e[9]||(e[9]=l=>A.value=l),onSelect:p},null,8,["actions","show"])],64))}};export{So as default};
