import{p as ee,S as oe}from"./index.c511444c.js";import{S as ne}from"./index.8ecec6ff.js";import{I as te}from"./index.dff8d656.js";import{p as ae,P as se}from"./index.f8abda06.js";import{p as F,c as ie,e as P,m as re}from"./components.5becca44.js";import{d as le,a as v,b as ce,w as ue,Z as B,_ as pe,p as I,f as k,i as O,S as Y,q as me,h as E,ak as de,N as g,M as R,R as he,F as ve,O as X,m as ge,Q as M,j as L,aA as fe,r as we,n as Te,W as Ce,aw as Se}from"./vue-router.esm-bundler.786782d7.js";const ye={show:{type:Boolean,default:!1},images:{type:Array,default:()=>[]},current:{type:String},zoom:{type:[String,Number],default:2},closeable:{type:Boolean,default:!1},"onUpdate:show":{type:Function},...F(ee,["loop","indicator","onChange"]),...F(ae,["lockScroll","teleport","onOpen","onClose","onOpened","onClosed","onRouteChange"])},{n:ke,classes:Ie}=ie("image-preview"),U=12,W=200,Ye=350,q=200,Ne=le({name:"VarImagePreview",components:{VarSwipe:oe,VarSwipeItem:ne,VarPopup:se,VarIcon:te},inheritAttrs:!1,props:ye,setup(e){const c=v(!1),s=ce(()=>{const{images:o,current:t}=e,n=o.findIndex(r=>r===t);return n>=0?n:0}),u=v(1),i=v(0),w=v(0),T=v(void 0),C=v(void 0),S=v(!0);let m=null,a=null,l=null;const $=(o,t)=>{const{clientX:n,clientY:r}=o,{clientX:p,clientY:d}=t;return Math.abs(Math.sqrt((p-n)**2+(d-r)**2))},D=(o,t)=>({clientX:o.clientX,clientY:o.clientY,timestamp:Date.now(),target:t}),H=()=>{u.value=B(e.zoom),S.value=!1,a=null,window.setTimeout(()=>{T.value="linear",C.value="0s"},q)},z=()=>{u.value=1,i.value=0,w.value=0,S.value=!0,a=null,T.value=void 0,C.value=void 0},Z=o=>a?$(a,o)<=U&&o.timestamp-a.timestamp<=W&&a.target===o.target:!1,j=o=>!o||!m||!a?!1:$(m,a)<=U&&Date.now()-a.timestamp<Ye&&(o===m.target||o.parentNode===m.target),Q=o=>{l=window.setTimeout(()=>{j(o.target)&&b(),m=null},W)},G=o=>{l&&window.clearTimeout(l);const{touches:t}=o,n=D(t[0],o.currentTarget);if(m=n,Z(n)){u.value>1?z():H();return}a=n},A=o=>{const{offsetWidth:t,offsetHeight:n}=o,{naturalWidth:r,naturalHeight:p}=o.querySelector(".var-image-preview__image");return{width:t,height:n,imageRadio:p/r,rootRadio:n/t,zoom:B(e.zoom)}},J=o=>{const{zoom:t,imageRadio:n,rootRadio:r,width:p,height:d}=A(o);if(!n)return 0;const y=n>r?d/n:p;return Math.max(0,(t*y-p)/2)/t},K=o=>{const{zoom:t,imageRadio:n,rootRadio:r,width:p,height:d}=A(o);if(!n)return 0;const y=n>r?d:p*n;return Math.max(0,(t*y-d)/2)/t},V=(o,t,n)=>o+t>=n?n:o+t<=-n?-n:o+t,_=o=>{if(!a)return;const t=o.currentTarget,{touches:n}=o,r=D(n[0],t);if(u.value>1){const p=r.clientX-a.clientX,d=r.clientY-a.clientY,y=J(t),x=K(t);i.value=V(i.value,p,y),w.value=V(w.value,d,x)}a=r},b=()=>{if(u.value>1){z(),setTimeout(()=>P(e["onUpdate:show"],!1),q);return}P(e["onUpdate:show"],!1)};return ue(()=>e.show,o=>{c.value=o},{immediate:!0}),{n:ke,classes:Ie,initialIndex:s,popupShow:c,scale:u,translateX:i,translateY:w,canSwipe:S,transitionTimingFunction:T,transitionDuration:C,handleTouchstart:G,handleTouchmove:_,handleTouchend:Q,close:b}}});const Oe=["src","alt"];function Re(e,c,s,u,i,w){const T=I("var-swipe-item"),C=I("var-swipe"),S=I("var-icon"),m=I("var-popup");return k(),O(m,{class:g(e.n("popup")),"var-image-preview-cover":"",transition:"var-fade",show:e.popupShow,overlay:!1,"close-on-click-overlay":!1,"lock-scroll":e.lockScroll,teleport:e.teleport,onOpen:e.onOpen,onClose:e.onClose,onClosed:e.onClosed,onOpened:e.onOpened,onRouteChange:e.onRouteChange},{default:Y(()=>[me(C,ge({class:e.n("swipe"),"var-image-preview-cover":"",touchable:e.canSwipe,indicator:e.indicator&&e.images.length>1,"initial-index":e.initialIndex,loop:e.loop,onChange:e.onChange},e.$attrs),{default:Y(()=>[(k(!0),E(ve,null,de(e.images,a=>(k(),O(T,{class:g(e.n("swipe-item")),"var-image-preview-cover":"",key:a},{default:Y(()=>[R("div",{class:g(e.n("zoom-container")),style:he({transform:`scale(${e.scale}) translate(${e.translateX}px, ${e.translateY}px)`,transitionTimingFunction:e.transitionTimingFunction,transitionDuration:e.transitionDuration}),onTouchstart:c[0]||(c[0]=(...l)=>e.handleTouchstart&&e.handleTouchstart(...l)),onTouchmove:c[1]||(c[1]=(...l)=>e.handleTouchmove&&e.handleTouchmove(...l)),onTouchend:c[2]||(c[2]=(...l)=>e.handleTouchend&&e.handleTouchend(...l))},[R("img",{class:g(e.n("image")),src:a,alt:a},null,10,Oe)],38)]),_:2},1032,["class"]))),128))]),indicator:Y(({index:a,length:l})=>[X(e.$slots,"indicator",{index:a,length:l},()=>[e.indicator&&e.images.length>1?(k(),E("div",{key:0,class:g(e.n("indicators"))},M(a+1)+" / "+M(l),3)):L("v-if",!0)])]),_:3},16,["class","touchable","indicator","initial-index","loop","onChange"]),X(e.$slots,"close-icon",{},()=>[e.closeable?(k(),O(S,{key:0,class:g(e.n("close-icon")),name:"close-circle","var-image-preview-cover":"",onClick:e.close},null,8,["class","onClick"])):L("v-if",!0)]),R("div",{class:g(e.n("extra"))},[X(e.$slots,"extra")],2)]),_:3},8,["class","show","lock-scroll","teleport","onOpen","onClose","onClosed","onOpened","onRouteChange"])}const f=pe(Ne,[["render",Re]]);let h;function N(e){if(!fe())return;N.close();const c=Ce(e)?{images:[e]}:Se(e)?{images:e}:e,s=we(c);s.teleport="body",h=s;const{unmountInstance:u}=re(f,s,{onClose:()=>{var i;return(i=s.onClose)==null?void 0:i.call(s)},onClosed:()=>{var i;(i=s.onClosed)==null||i.call(s),u(),h===s&&(h=null)},onRouteChange:()=>{u(),h===s&&(h=null)},"onUpdate:show":i=>{s.show=i}});s.show=!0}N.close=()=>{if(h!=null){const e=h;h=null,Te().then(()=>{e.show=!1})}};f.install=function(e){e.component(f.name,f)};N.install=function(e){e.component(f.name,f)};N.Component=f;export{N as I};
