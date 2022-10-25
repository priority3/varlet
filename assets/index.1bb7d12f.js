import{d as S,a as N,b as g,Z as f,w as y,V as C,_ as $,f as O,h as w,O as v,N as P,R as h}from"./vue-router.esm-bundler.786782d7.js";import{b as z,d as R,e as j,c as k}from"./components.5becca44.js";import{a as U,b as B}from"./index.23e67665.js";import{a as E}from"./elements.c4571a13.js";function L(e){return["row","column"].includes(e)}const V={span:{type:[String,Number],default:24},offset:{type:[String,Number],default:0},direction:{type:String,default:"row",validator:L},onClick:{type:Function},xs:{type:[Object,Number,String]},sm:{type:[Object,Number,String]},md:{type:[Object,Number,String]},lg:{type:[Object,Number,String]},xl:{type:[Object,Number,String]}};function D(){const{parentProvider:e,bindParent:n}=z(U),{index:t}=R(B);return(!e||!n||!t)&&console.warn("col must in row"),{index:t,row:e,bindRow:n}}const{n:i,classes:I}=k("col"),K=S({name:"VarCol",props:V,setup(e){const n=N({left:0,right:0}),t=g(()=>f(e.span)),d=g(()=>f(e.offset)),{row:r,bindRow:u}=D(),l={setPadding(s){n.value=s}},b=(s,o)=>{const a=[];if(o==null)return a;if(C(o)){const{offset:m,span:c}=o;Number(c)>=0&&a.push(i(`--span-${s}-${c}`)),m&&a.push(i(`--offset-${s}-${m}`))}else Number(o)>=0&&a.push(i(`--span-${s}-${o}`));return a};return y([()=>e.span,()=>e.offset],()=>{r==null||r.computePadding()}),j(u,l),{n:i,classes:I,padding:n,toNumber:f,toSizeUnit:E,getSize:b,span:t,offset:d}}});function W(e,n,t,d,r,u){return O(),w("div",{class:P(e.classes(e.n(),"var--box",[e.span>=0,e.n(`--span-${e.span}`)],[e.offset,e.n(`--offset-${e.offset}`)],...e.getSize("xs",e.xs),...e.getSize("sm",e.sm),...e.getSize("md",e.md),...e.getSize("lg",e.lg),...e.getSize("xl",e.xl))),style:h({flexDirection:e.direction,paddingLeft:e.toSizeUnit(e.padding.left),paddingRight:e.toSizeUnit(e.padding.right)}),onClick:n[0]||(n[0]=(...l)=>e.onClick&&e.onClick(...l))},[v(e.$slots,"default")],6)}const p=$(K,[["render",W]]);p.install=function(e){e.component(p.name,p)};export{p as C};