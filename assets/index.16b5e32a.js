import{aw as d,X as F,W as I,d as A,q as y,aB as E,F as W}from"./vue-router.esm-bundler.786782d7.js";import{t as f}from"./elements.c4571a13.js";/* empty css               */import{e as q,c as v}from"./components.5becca44.js";const w=e=>["mini","small","normal","large"].includes(e),D=e=>w(e)||d(e)||F(e)||I(e),N=e=>["start","end","center","space-around","space-between"].includes(e),P={align:{type:String},size:{type:[String,Number,Array],default:"normal",validator:D},wrap:{type:Boolean,default:!0},direction:{type:String,default:"row"},justify:{type:String,default:"start",validator:N},inline:{type:Boolean,default:!1}};const{n:S,classes:X}=v("space"),k={mini:[4,4],small:[6,6],normal:[8,12],large:[12,20]},m=A({name:"VarSpace",props:P,setup(e,{slots:h}){const b=(t,r)=>r?k[t]:d(t)?t.map(f):[f(t),f(t)],x=t=>t==="start"||t==="end"?`flex-${t}`:t;return()=>{var g;const{inline:t,justify:r,align:V,wrap:j,direction:l,size:$}=e;let p=(g=q(h.default))!=null?g:[];const B=w($),[n,o]=b($,B);p=(u=>{const s=[];return u.forEach(i=>{if(i.type!==E){if(i.type===W&&d(i.children)){i.children.forEach(a=>{s.push(a)});return}s.push(i)}}),s})(p);const c=p.length-1,C=p.map((u,s)=>{const i=l==="row"?void 0:"100%";let a="0";return l==="row"&&(r==="start"||r==="center"||r==="end"?s!==c?a=`${n/2}px ${o}px ${n/2}px 0`:a=`${n/2}px 0`:r==="space-around"?a=`${n/2}px ${o/2}px`:r==="space-between"&&(s===0?a=`${n/2}px ${o/2}px ${n/2}px 0`:s===c?a=`${n/2}px 0 ${n/2}px ${o/2}px`:a=`${n/2}px ${o/2}px`)),l==="column"&&s!==c&&(a=`0 0 ${n}px 0`),y("div",{style:{margin:a,width:i}},[u])});return y("div",{class:X(S(),"var--box",[t,S("--inline")]),style:{flexDirection:l,justifyContent:x(r),alignItems:x(V),flexWrap:j?"wrap":"nowrap",margin:l==="row"?`-${n/2}px 0`:void 0}},[C])}}});m.install=function(e){e.component(m.name,m)};export{m as S};