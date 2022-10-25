import{S as i}from"./index.7e9cabf1.js";import{O as u}from"./index.16e54630.js";import{I as A}from"./index.dff8d656.js";import{A as r}from"./AppType.f79597c7.js";import{d as x}from"./index.8b4f1b33.js";import{a as I,b as D}from"./utils.8699bdee.js";import{u as P,a as B,_ as T,b as N,c as R}from"./index.8c844836.js";import{_ as k,r as w,aH as Y,f as z,h as L,q as a,S as d,an as l,aI as s,M as g,Q as n,F as O,P as m,ao as $,ap as q}from"./vue-router.esm-bundler.786782d7.js";import"./index.2e631ecd.js";import"./components.5becca44.js";import"./elements.c4571a13.js";import"./shared.ca7a1081.js";import"./zIndex.968e189b.js";import"./index.5d0c9db1.js";import"./index.c359c461.js";import"./provide.f1996540.js";import"./index.47937c29.js";import"./index.f5bcaaa1.js";/* empty css               */const H={basicUsage:"\u57FA\u672C\u4F7F\u7528",plainMode:"\u6734\u7D20\u6A21\u5F0F",disabled:"\u7981\u7528",readonly:"\u53EA\u8BFB",clearable:"\u53EF\u6E05\u9664",displayIcon:"\u663E\u793A\u56FE\u6807",validate:"\u5355\u9009\u503C\u6821\u9A8C",multipleValidate:"\u591A\u9009\u503C\u6821\u9A8C",placeholder:"\u8BF7\u9009\u62E9\u4E00\u4E2A\u9009\u9879",multiplePlaceholder:"\u8BF7\u9009\u62E9\u591A\u4E2A\u9009\u9879",clearableText:"\u53EF\u6E05\u9664\u6587\u672C",relation:"\u6587\u672C\u5173\u8054\u503C",multiple:"\u591A\u9009",chipMultiple:"\u7EB8\u7247\u98CE\u683C\u7684\u591A\u9009",eat:"\u5403\u996D",sleep:"\u7761\u89C9",play:"\u6253\u6E38\u620F",coding:"\u5199\u4EE3\u7801",rest:"\u6478\u9C7C",currentSelect:"\u5F53\u524D\u9009\u62E9\u7684\u662F:",mustSelectRest:"\u60A8\u4E00\u5B9A\u5F97\u9009\u62E9\u6478\u9C7C",mustSelectMoreThan:"\u60A8\u81F3\u5C11\u9009\u62E9\u4E24\u4E2A\u9009\u9879",offsetY:"\u5782\u76F4\u504F\u79FB",emberSprit:"\u706B\u732B",earthSprit:"\u571F\u732B",stormSpirit:"\u84DD\u732B",voidSpirit:"\u7D2B\u732B"},Q={basicUsage:"Basic Usage",plainMode:"Plain Mode",disabled:"Disabled",readonly:"Readonly",clearable:"Clearable",displayIcon:"Display Icon",validate:"Validate",multipleValidate:"Multiple Validate",placeholder:"Please select one the options",multiplePlaceholder:"Please select multiple options",clearableText:"Clearable Text",relation:"Label relation value",multiple:"Multiple Selection",chipMultiple:"Multiple choice of paper style",eat:"Eat",sleep:"Sleep",play:"Play game",coding:"Coding",rest:"Rest",currentSelect:"The current selection is:",mustSelectRest:"You must choose to rest",mustSelectMoreThan:"You select at least two options",offsetY:"offsetY",emberSprit:"Ember Sprit",earthSprit:"Earth Sprit",stormSpirit:"Storm Spirit",voidSpirit:"Void Spirit"},{add:M,use:j,pack:e,packs:Vl,merge:Sl}=P(),G=c=>{R(c),j(c)};B("zh-CN",T);B("en-US",N);M("zh-CN",H);M("en-US",Q);const J=c=>($("data-v-7896d5af"),c=c(),q(),c),K={class:"relation"},W=J(()=>g("div",{class:"space"},null,-1)),X={setup(c){const p=w({value:void 0,value2:void 0,value3:void 0,value4:void 0,value5:[],value6:void 0,value7:[],value8:void 0,value9:void 0,value10:[],value11:void 0}),{value:f,value2:v,value3:h,value4:V,value5:S,value6:b,value7:_,value8:E,value9:C,value10:F,value11:y}=Y(p);return I(U=>{G(U),p.value=void 0,p.value2=void 0,p.value3=void 0,p.value4=void 0,p.value6=void 0,p.value5=[],p.value7=[],p.value8=void 0,p.value9=void 0,p.value10=[],p.value11=void 0}),D(x),(U,o)=>(z(),L(O,null,[a(l(r),null,{default:d(()=>[m(n(l(e).basicUsage),1)]),_:1}),a(l(i),{placeholder:l(e).placeholder,modelValue:l(f),"onUpdate:modelValue":o[0]||(o[0]=t=>s(f)?f.value=t:null)},{default:d(()=>[a(l(u),{label:l(e).eat},null,8,["label"]),a(l(u),{label:l(e).sleep},null,8,["label"])]),_:1},8,["placeholder","modelValue"]),a(l(r),null,{default:d(()=>[m(n(l(e).plainMode),1)]),_:1}),a(l(i),{hint:!1,line:!1,placeholder:l(e).placeholder,modelValue:l(v),"onUpdate:modelValue":o[1]||(o[1]=t=>s(v)?v.value=t:null)},{default:d(()=>[a(l(u),{label:l(e).eat},null,8,["label"]),a(l(u),{label:l(e).sleep},null,8,["label"])]),_:1},8,["placeholder","modelValue"]),a(l(r),null,{default:d(()=>[m(n(l(e).relation),1)]),_:1}),a(l(i),{placeholder:l(e).placeholder,modelValue:l(b),"onUpdate:modelValue":o[2]||(o[2]=t=>s(b)?b.value=t:null)},{default:d(()=>[a(l(u),{label:l(e).eat,value:1},null,8,["label"]),a(l(u),{label:l(e).sleep,value:2},null,8,["label"])]),_:1},8,["placeholder","modelValue"]),g("div",K,n(l(e).currentSelect)+" "+n(l(b)),1),a(l(r),null,{default:d(()=>[m(n(l(e).disabled),1)]),_:1}),a(l(i),{placeholder:l(e).placeholder,disabled:"",modelValue:l(V),"onUpdate:modelValue":o[3]||(o[3]=t=>s(V)?V.value=t:null)},{default:d(()=>[a(l(u),{label:l(e).eat},null,8,["label"]),a(l(u),{label:l(e).sleep},null,8,["label"])]),_:1},8,["placeholder","modelValue"]),a(l(r),null,{default:d(()=>[m(n(l(e).readonly),1)]),_:1}),a(l(i),{placeholder:l(e).placeholder,readonly:"",modelValue:l(h),"onUpdate:modelValue":o[4]||(o[4]=t=>s(h)?h.value=t:null)},{default:d(()=>[a(l(u),{label:l(e).eat},null,8,["label"]),a(l(u),{label:l(e).sleep},null,8,["label"])]),_:1},8,["placeholder","modelValue"]),a(l(r),null,{default:d(()=>[m(n(l(e).clearable),1)]),_:1}),a(l(i),{placeholder:l(e).placeholder,clearable:"",modelValue:l(E),"onUpdate:modelValue":o[5]||(o[5]=t=>s(E)?E.value=t:null)},{default:d(()=>[a(l(u),{label:l(e).eat},null,8,["label"]),a(l(u),{label:l(e).sleep},null,8,["label"])]),_:1},8,["placeholder","modelValue"]),a(l(r),null,{default:d(()=>[m(n(l(e).displayIcon),1)]),_:1}),a(l(i),{placeholder:l(e).placeholder,modelValue:l(y),"onUpdate:modelValue":o[6]||(o[6]=t=>s(y)?y.value=t:null)},{"prepend-icon":d(()=>[a(l(A),{class:"prepend-icon",name:"plus"})]),"append-icon":d(()=>[a(l(A),{class:"append-icon",name:"minus"})]),default:d(()=>[a(l(u),{label:l(e).eat},null,8,["label"]),a(l(u),{label:l(e).sleep},null,8,["label"])]),_:1},8,["placeholder","modelValue"]),a(l(r),null,{default:d(()=>[m(n(l(e).multiple),1)]),_:1}),a(l(i),{placeholder:l(e).multiplePlaceholder,multiple:"",modelValue:l(S),"onUpdate:modelValue":o[7]||(o[7]=t=>s(S)?S.value=t:null)},{default:d(()=>[a(l(u),{label:l(e).eat},null,8,["label"]),a(l(u),{label:l(e).sleep},null,8,["label"]),a(l(u),{label:l(e).play},null,8,["label"]),a(l(u),{label:l(e).coding},null,8,["label"])]),_:1},8,["placeholder","modelValue"]),a(l(r),null,{default:d(()=>[m(n(l(e).chipMultiple),1)]),_:1}),a(l(i),{placeholder:l(e).multiplePlaceholder,chip:"",multiple:"",modelValue:l(_),"onUpdate:modelValue":o[8]||(o[8]=t=>s(_)?_.value=t:null)},{default:d(()=>[a(l(u),{label:l(e).eat},null,8,["label"]),a(l(u),{label:l(e).sleep},null,8,["label"]),a(l(u),{label:l(e).play},null,8,["label"]),a(l(u),{label:l(e).coding},null,8,["label"])]),_:1},8,["placeholder","modelValue"]),a(l(r),null,{default:d(()=>[m(n(l(e).validate),1)]),_:1}),a(l(i),{placeholder:l(e).placeholder,rules:[t=>t===l(e).rest||l(e).mustSelectRest],modelValue:l(C),"onUpdate:modelValue":o[9]||(o[9]=t=>s(C)?C.value=t:null)},{default:d(()=>[a(l(u),{label:l(e).eat},null,8,["label"]),a(l(u),{label:l(e).sleep},null,8,["label"]),a(l(u),{label:l(e).rest},null,8,["label"])]),_:1},8,["placeholder","rules","modelValue"]),a(l(r),null,{default:d(()=>[m(n(l(e).multipleValidate),1)]),_:1}),a(l(i),{placeholder:l(e).multiplePlaceholder,multiple:"",rules:[t=>t.length>=2||l(e).mustSelectMoreThan],modelValue:l(F),"onUpdate:modelValue":o[10]||(o[10]=t=>s(F)?F.value=t:null)},{default:d(()=>[a(l(u),{label:l(e).eat},null,8,["label"]),a(l(u),{label:l(e).sleep},null,8,["label"]),a(l(u),{label:l(e).play},null,8,["label"]),a(l(u),{label:l(e).coding},null,8,["label"])]),_:1},8,["placeholder","rules","modelValue"]),W],64))}},_l=k(X,[["__scopeId","data-v-7896d5af"]]);export{_l as default};
