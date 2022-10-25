import{i as L,j as v}from"./elements.c4571a13.js";import{ay as k,aE as z}from"./vue-router.esm-bundler.786782d7.js";import{c as w}from"./shared.ca7a1081.js";import{e as I}from"./components.5becca44.js";const b="background-image",O="lazy-loading",R="lazy-error",y="lazy-attempt",C=["scroll","wheel","mousewheel","resize","animationend","transitionend","touchmove"],f="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==",c=[],i=[],p=w(100),e={loading:f,error:f,attempt:3,throttleWait:300,events:C};let m=z(s,e.throttleWait);function u(t,a){t._lazy.arg===b?t.style.backgroundImage=`url(${a})`:t.setAttribute("src",a)}function G(t){t._lazy.loading&&u(t,t._lazy.loading),s()}function N(t){t._lazy.error&&u(t,t._lazy.error),t._lazy.state="error",d(t),s()}function g(t,a){u(t,a),t._lazy.state="success",d(t),s()}function W(t){var a;i.includes(t)||(i.push(t),(a=e.events)==null||a.forEach(r=>{t.addEventListener(r,m,{passive:!0})}))}function B(){i.forEach(t=>{var a;(a=e.events)==null||a.forEach(r=>{t.removeEventListener(r,m)})}),i.length=0}function P(t,a){var n,o;const r={loading:(n=t.getAttribute(O))!=null?n:e.loading,error:(o=t.getAttribute(R))!=null?o:e.error,attempt:t.getAttribute(y)?Number(t.getAttribute(y)):e.attempt};t._lazy={src:a.value,arg:a.arg,currentAttempt:0,state:"pending",attemptLock:!1,...r},u(t,f),I(e.filter,t._lazy)}function T(t,a){const r=new Image;r.src=a,t._lazy.preloadImage=r,r.addEventListener("load",()=>{t._lazy.attemptLock=!1,p.add(a),g(t,a)}),r.addEventListener("error",()=>{t._lazy.attemptLock=!1,t._lazy.currentAttempt>=t._lazy.attempt?N(t):h(t)})}function h(t){if(t._lazy.attemptLock)return;t._lazy.attemptLock=!0,t._lazy.currentAttempt++;const{src:a}=t._lazy;if(p.has(a)){g(t,a),t._lazy.attemptLock=!1;return}G(t),T(t,a)}async function l(t){await L(t)&&h(t)}function s(){c.forEach(t=>l(t))}async function D(t){!c.includes(t)&&c.push(t),v(t).forEach(W),await l(t)}function d(t){k(c,t),c.length===0&&B()}function M(t,a){const{src:r,arg:n}=t._lazy;return r!==a.value||n!==a.arg}async function _(t,a){P(t,a),await D(t)}async function S(t,a){if(!M(t,a)){c.includes(t)&&await l(t);return}await _(t,a)}function Y(t={}){const{events:a,loading:r,error:n,attempt:o,throttleWait:A,filter:E}=t;e.events=a!=null?a:e.events,e.loading=r!=null?r:e.loading,e.error=n!=null?n:e.error,e.attempt=o!=null?o:e.attempt,e.throttleWait=A!=null?A:e.throttleWait,e.filter=E}const H={mounted:_,unmounted:d,updated:S,install(t,a){Y(a),m=z(s,e.throttleWait),t.directive("lazy",this)}};export{H as L};