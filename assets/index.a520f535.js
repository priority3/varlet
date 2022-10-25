import{L as H}from"./index.cc77df0d.js";import{R as O}from"./index.f5bcaaa1.js";import{g as j,t as q}from"./elements.c4571a13.js";import{d as X,a as R,o as Z,u as G,X as J,n as K,_ as W,p as Y,ai as ee,f as m,h as y,O as U,j as E,M as B,N as T,Q as l,q as s,D as te,P as c,r as ae,aH as ie,S as o,an as t,aI as k,F as x,ak as $,i as S}from"./vue-router.esm-bundler.786782d7.js";import{d as oe}from"./shared.ca7a1081.js";import{c as ne,e as w}from"./components.5becca44.js";import{p as se,u as le,a as z,_ as re,b as de,c as ue}from"./index.8c844836.js";import{C as A}from"./index.da0c4de5.js";import{T as D,a as fe}from"./index.53842f64.js";import{T as me}from"./index.6da8aaa4.js";import{T as I}from"./index.e3a56d46.js";import{d as pe}from"./index.8b4f1b33.js";import{a as ge,b as ce}from"./utils.8699bdee.js";import"./index.5d0c9db1.js";/* empty css               */import"./index.dff8d656.js";import"./index.81aa668a.js";import"./index.c511444c.js";import"./provide.4e2904c0.js";import"./provide.c1f874f3.js";import"./index.8ecec6ff.js";const he={loading:{type:Boolean,default:!1},immediateCheck:{type:Boolean,default:!0},finished:{type:Boolean,default:!1},error:{type:Boolean,default:!1},offset:{type:[String,Number],default:0},loadingText:{type:String},finishedText:{type:String},errorText:{type:String},onLoad:{type:Function},"onUpdate:loading":{type:Function},"onUpdate:error":{type:Function}},{n:ve,classes:Te}=ne("list"),ke=X({name:"VarList",directives:{Ripple:O},components:{VarLoading:H},props:he,setup(e){const a=R(null),C=R(null);let p;const L=()=>{w(e["onUpdate:error"],!1),w(e["onUpdate:loading"],!0),w(e.onLoad)},h=()=>{const d=p===window?window.innerHeight:p.getBoundingClientRect().bottom,{bottom:g}=C.value.getBoundingClientRect();return Math.floor(g)-q(e.offset)<=d},r=async()=>{await K();const{loading:d,finished:g,error:b}=e;!d&&!g&&!b&&h()&&L()};return Z(()=>{p=j(a.value),e.immediateCheck&&r(),p.addEventListener("scroll",r)}),G(()=>{p.removeEventListener("scroll",r)}),{pack:se,listEl:a,detectorEl:C,dt:oe,isNumber:J,load:L,check:r,n:ve,classes:Te}}});function ye(e,a,C,p,L,h){const r=Y("var-loading"),d=ee("ripple");return m(),y("div",{class:T(e.classes(e.n(),"var--box")),ref:"listEl"},[U(e.$slots,"default"),e.loading?U(e.$slots,"loading",{key:0},()=>[B("div",{class:T(e.n("loading"))},[B("div",{class:T(e.n("loading-text"))},l(e.dt(e.loadingText,e.pack.listLoadingText)),3),s(r,{size:"mini",radius:10})],2)]):E("v-if",!0),e.finished?U(e.$slots,"finished",{key:1},()=>[B("div",{class:T(e.n("finished"))},l(e.dt(e.finishedText,e.pack.listFinishedText)),3)]):E("v-if",!0),e.error?U(e.$slots,"error",{key:2},()=>[te((m(),y("div",{class:T(e.n("error")),onClick:a[0]||(a[0]=(...g)=>e.load&&e.load(...g))},[c(l(e.dt(e.errorText,e.pack.listErrorText)),1)],2)),[[d]])]):E("v-if",!0),B("div",{class:T(e.n("detector")),ref:"detectorEl"},null,2)],2)}const F=W(ke,[["render",ye]]);F.install=function(e){e.component(F.name,F)};const Fe={basicUsage:"\u57FA\u672C\u4F7F\u7528",loadFail:"\u52A0\u8F7D\u5931\u8D25",tipText:"\u63D0\u793A\u6587\u5B57",loadingText:"\u6B63\u5728\u52AA\u529B\u8F93\u51FA",errorText:"\u51FA\u9519\u4E86\u51FA\u9519\u4E86",finishedText:"\u4E00\u6EF4\u90FD\u6CA1\u6709\u4E86",listItem:"\u5217\u8868\u9879"},Ce={basicUsage:"Basic Usage",loadFail:"Load Fail",tipText:"Tip Text",loadingText:"loading QAQ",errorText:"error TNT",finishedText:"finished ORZ",listItem:"List Item"},{add:V,use:Le,pack:f,packs:qe,merge:Xe}=le(),Ue=e=>{ue(e),Le(e)};z("zh-CN",re);z("en-US",de);V("zh-CN",Fe);V("en-US",Ce);const Ze={setup(e){const a=ae({loading:!1,loading2:!1,loading3:!1,finished:!1,finished2:!1,finished3:!1,error:!1,list:[],list2:[],list3:[],current:0}),{list:C,list2:p,list3:L,loading:h,loading2:r,loading3:d,finished:g,finished2:b,finished3:_,error:N,current:v}=ie(a),M=()=>{if(a.current!==0){a.loading=!1;return}setTimeout(()=>{for(let u=0;u<20;u++)a.list.push(a.list.length+1);a.loading=!1,a.list.length>=60&&(a.finished=!0)},1e3)},P=()=>{if(a.current!==1){a.loading2=!1;return}setTimeout(()=>{if(a.list2.length===40){a.error=!0,a.loading2=!1;return}for(let u=0;u<20;u++)a.list2.push(a.list2.length+1);a.loading2=!1},1e3)},Q=()=>{if(a.current!==2){a.loading3=!1;return}setTimeout(()=>{for(let u=0;u<20;u++)a.list3.push(a.list3.length+1);a.loading3=!1,a.list3.length>=60&&(a.finished3=!0)},1e3)};return ge(Ue),ce(pe),(u,n)=>(m(),y(x,null,[s(t(fe),{active:t(v),"onUpdate:active":n[0]||(n[0]=i=>k(v)?v.value=i:null),sticky:"","offset-top":"14.4vw",style:{"margin-bottom":"10px"}},{default:o(()=>[s(t(D),null,{default:o(()=>[c(l(t(f).basicUsage),1)]),_:1}),s(t(D),null,{default:o(()=>[c(l(t(f).loadFail),1)]),_:1}),s(t(D),null,{default:o(()=>[c(l(t(f).tipText),1)]),_:1})]),_:1},8,["active"]),s(t(me),{active:t(v),"onUpdate:active":n[5]||(n[5]=i=>k(v)?v.value=i:null)},{default:o(()=>[s(t(I),null,{default:o(()=>[s(t(F),{finished:t(g),loading:t(h),"onUpdate:loading":n[1]||(n[1]=i=>k(h)?h.value=i:null),onLoad:M},{default:o(()=>[(m(!0),y(x,null,$(t(C),i=>(m(),S(t(A),{key:i},{default:o(()=>[c(l(t(f).listItem)+": "+l(i),1)]),_:2},1024))),128))]),_:1},8,["finished","loading"])]),_:1}),s(t(I),null,{default:o(()=>[s(t(F),{finished:t(b),error:t(N),"onUpdate:error":n[2]||(n[2]=i=>k(N)?N.value=i:null),loading:t(r),"onUpdate:loading":n[3]||(n[3]=i=>k(r)?r.value=i:null),onLoad:P},{default:o(()=>[(m(!0),y(x,null,$(t(p),i=>(m(),S(t(A),{key:i},{default:o(()=>[c(l(t(f).listItem)+": "+l(i),1)]),_:2},1024))),128))]),_:1},8,["finished","error","loading"])]),_:1}),s(t(I),null,{default:o(()=>[s(t(F),{"loading-text":t(f).loadingText,"finished-text":t(f).finishedText,"error-text":t(f).errorText,finished:t(_),loading:t(d),"onUpdate:loading":n[4]||(n[4]=i=>k(d)?d.value=i:null),onLoad:Q},{default:o(()=>[(m(!0),y(x,null,$(t(L),i=>(m(),S(t(A),{key:i},{default:o(()=>[c(l(t(f).listItem)+": "+l(i),1)]),_:2},1024))),128))]),_:1},8,["loading-text","finished-text","error-text","finished","loading"])]),_:1})]),_:1},8,["active"])],64))}};export{Ze as default};
