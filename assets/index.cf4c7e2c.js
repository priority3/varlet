import{A as F}from"./AppType.f79597c7.js";import{f as j,r as q}from"./elements.c4571a13.js";import{c as K,e as b}from"./components.5becca44.js";import{p as A}from"./shared.ca7a1081.js";import{d as Q,a as _,w as Y,Z as B,_ as H,f as U,h as z,O as Z,aK as G,aL as J,N as W,P as i,Q as a,q as o,S as u,an as e,F as X,M as x,ao as ee,ap as te}from"./vue-router.esm-bundler.786782d7.js";import{S as se}from"./index.69f6298f.js";import{B as $}from"./index.544f6269.js";import{R as oe}from"./index.23e67665.js";import{d as ae}from"./index.8b4f1b33.js";import{u as ne,a as I,_ as ue,b as le,c as ce}from"./index.8c844836.js";import{a as re,b as ie}from"./utils.8699bdee.js";import"./index.cc77df0d.js";import"./index.dff8d656.js";import"./zIndex.968e189b.js";import"./index.5d0c9db1.js";import"./lock.60d17316.js";import"./index.f5bcaaa1.js";/* empty css               */const me={time:{type:[String,Number],default:0},format:{type:String,default:"HH : mm : ss"},autoStart:{type:Boolean,default:!0},onEnd:{type:Function},onChange:{type:Function}},{n:de}=K("countdown"),T=1e3,k=60*T,E=60*k,M=24*E,pe=Q({name:"VarCountdown",props:me,setup(s){const m=_(0),d=_(!1),C=_(""),y=_(0),h=_(0),n=_({days:0,hours:0,minutes:0,seconds:0,milliseconds:0}),p=(t,g)=>{const l=Object.values(g),v=["DD","HH","mm","ss"],c=[24,60,60,1e3];if(v.forEach((f,w)=>{t.includes(f)?t=t.replace(f,A(`${l[w]}`,2,"0")):l[w+1]+=l[w]*c[w]}),t.includes("S")){const f=A(`${l[l.length-1]}`,3,"0");t.includes("SSS")?t=t.replace("SSS",f):t.includes("SS")?t=t.replace("SS",f.slice(0,2)):t=t.replace("S",f.slice(0,1))}return t},O=t=>{const g=Math.floor(t/M),l=Math.floor(t%M/E),v=Math.floor(t%E/k),c=Math.floor(t%k/T),f=Math.floor(t%T),w={days:g,hours:l,minutes:v,seconds:c,milliseconds:f};n.value=w,b(s.onChange,n.value),C.value=p(s.format,w)},D=()=>{const{time:t,onEnd:g,autoStart:l}=s,v=Date.now();m.value||(m.value=v+B(t));let c=m.value-v;if(c<0&&(c=0),h.value=c,O(c),c===0){b(g);return}(l||d.value)&&(y.value=q(D))},P=()=>{d.value||(d.value=!0,m.value=Date.now()+(h.value||B(s.time)),D())},L=()=>{d.value=!1},N=()=>{m.value=0,d.value=!1,j(y.value),D()};return Y(()=>s.time,()=>N(),{immediate:!0}),{showTime:C,timeData:n,n:de,start:P,pause:L,reset:N}}});function fe(s,m,d,C,y,h){return U(),z("div",{class:W(s.n())},[Z(s.$slots,"default",G(J(s.timeData)),()=>[i(a(s.showTime),1)])],2)}const S=H(pe,[["render",fe]]);S.install=function(s){s.component(S.name,S)};const _e={basicUsage:"\u57FA\u672C\u4F7F\u7528",customFormat:"\u81EA\u5B9A\u4E49\u683C\u5F0F",showMillisecond:"\u663E\u793A\u6BEB\u79D2",customStyle:"\u81EA\u5B9A\u4E49\u6837\u5F0F",manualControl:"\u624B\u52A8\u63A7\u5236",format:"DD \u5929 HH \u65F6 mm \u5206 ss \u79D2",startText:"\u5F00\u59CB",pauseText:"\u6682\u505C",resetText:"\u91CD\u7F6E"},Se={basicUsage:"Basic Usage",customFormat:"Custom Format",showMillisecond:"Show Millisecond",customStyle:"Custom Style",manualControl:"Manual Control",format:"DD Day, HH:mm:ss",startText:"Start",pauseText:"Pause",resetText:"Reset"},{add:R,use:he,pack:r,packs:Le,merge:je}=ne(),we=s=>{ce(s),he(s)};I("zh-CN",ue);I("en-US",le);R("zh-CN",_e);R("en-US",Se);const V=s=>(ee("data-v-ec170261"),s=s(),te(),s),ve={class:"countdown-example-block"},Ce=V(()=>x("span",{class:"countdown-example-colon"},":",-1)),ye={class:"countdown-example-block"},ge=V(()=>x("span",{class:"countdown-example-colon"},":",-1)),Fe={class:"countdown-example-block"},xe={setup(s){const m=_(null),d=_(3e3),C=()=>{se.info("end!")},y=()=>{console.log("change")};return re(we),ie(ae),(h,n)=>(U(),z(X,null,[o(e(F),null,{default:u(()=>[i(a(e(r).basicUsage),1)]),_:1}),o(e(S),{time:"108000000"}),o(e(F),null,{default:u(()=>[i(a(e(r).customFormat),1)]),_:1}),o(e(S),{time:"108000000",format:e(r).format},null,8,["format"]),o(e(F),null,{default:u(()=>[i(a(e(r).showMillisecond),1)]),_:1}),o(e(S),{time:"108000000",format:"HH : mm : ss : SS"}),o(e(F),null,{default:u(()=>[i(a(e(r).customStyle),1)]),_:1}),o(e(S),{time:"108000000"},{default:u(p=>[x("span",ve,a(p.hours),1),Ce,x("span",ye,a(p.minutes),1),ge,x("span",Fe,a(p.seconds),1)]),_:1}),o(e(F),null,{default:u(()=>[i(a(e(r).manualControl),1)]),_:1}),o(e(S),{time:d.value,ref_key:"countdown",ref:m,"auto-start":!1,format:"ss : SSS",onEnd:C,onChange:y},null,8,["time"]),o(e(oe),{justify:"space-between",align:"center",style:{"margin-top":"10px"}},{default:u(()=>[o(e($),{type:"primary",onClick:n[0]||(n[0]=p=>h.$refs.countdown.start())},{default:u(()=>[i(a(e(r).startText),1)]),_:1}),o(e($),{onClick:n[1]||(n[1]=p=>h.$refs.countdown.pause())},{default:u(()=>[i(a(e(r).pauseText),1)]),_:1}),o(e($),{onClick:n[2]||(n[2]=p=>h.$refs.countdown.reset())},{default:u(()=>[i(a(e(r).resetText),1)]),_:1})]),_:1})],64))}},qe=H(xe,[["__scopeId","data-v-ec170261"]]);export{qe as default};