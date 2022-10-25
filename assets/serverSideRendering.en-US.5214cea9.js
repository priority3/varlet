import{_ as l,p as o,f as r,h as c,M as s,q as t,S as a,at as d,P as e}from"./vue-router.esm-bundler.786782d7.js";const i={components:{}},p={class:"varlet-site-doc"},u=d('<h1>Server side rendering</h1><div class="card"><h3>Intro</h3><p>Here is the basic way to introduce <code>Varlet</code> in <code>Nuxt</code>. You can introduce the entire <code>Varlet</code> or just a few components as needed. Let\u2019s start with how to introduce the full <code>Varlet</code>.</p></div><div class="card"><h3>Create Nuxt project</h3><p><code>Nuxt.js</code> is a server rendering application framework based on <code>Vue.js</code>\uFF0CFor more details, please go <a href="https://v3.nuxtjs.org/">Nuxt</a>.</p></div>',3),h={class:"card"},_=s("h3",null,"Transpile Library",-1),m=s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-keyword"},"import"),e(" { defineNuxtConfig } "),s("span",{class:"hljs-keyword"},"from"),e(),s("span",{class:"hljs-string"},"'nuxt'"),e(`

`),s("span",{class:"hljs-keyword"},"export"),e(),s("span",{class:"hljs-keyword"},"default"),e(` defineNuxtConfig({
  `),s("span",{class:"hljs-attr"},"build"),e(`: {
    `),s("span",{class:"hljs-attr"},"transpile"),e(": ["),s("span",{class:"hljs-string"},"'@varlet/ui'"),e(`]
  }
})
`)])],-1),f={class:"card"},j=s("h3",null,"Fully import",-1),y=s("p",null,[s("code",null,"Nuxt"),e(" will automatically read the files in your "),s("code",null,"plugins"),e(" directory and load them. So you can create a new "),s("code",null,"varlet.ts"),e(" in the "),s("code",null,"plugins"),e(" directory and write the following:")],-1),x=s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-keyword"},"import"),e(" { defineNuxtPlugin } "),s("span",{class:"hljs-keyword"},"from"),e(),s("span",{class:"hljs-string"},"'#app'"),e(`
`),s("span",{class:"hljs-keyword"},"import"),e(" Varlet "),s("span",{class:"hljs-keyword"},"from"),e(),s("span",{class:"hljs-string"},"'@varlet/ui'"),e(`
`),s("span",{class:"hljs-keyword"},"import"),e(),s("span",{class:"hljs-string"},"'@varlet/ui/es/style.js'"),e(`

`),s("span",{class:"hljs-keyword"},"export"),e(),s("span",{class:"hljs-keyword"},"default"),e(" defineNuxtPlugin("),s("span",{class:"hljs-function"},[e("("),s("span",{class:"hljs-params"},"nuxtApp"),e(") =>")]),e(` {
  nuxtApp.vueApp.use(Varlet)
})
`)])],-1),g=s("p",null,[e("The above imports "),s("code",null,"Varlet"),e(" entirely. Note that CSS file needs to be imported separately.")],-1),v={class:"card"},w=s("h3",null,"On demand",-1),k=s("p",null,[e("The on-demand import avoids the full import of components and can effectively reduce the size of the distribution package. Each component is a "),s("code",null,"Vue plugin"),e(" and is composed of "),s("code",null,"component logic"),e(" and "),s("code",null,"style files"),e(". It is manually install and used as follows.")],-1),N=s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-keyword"},"import"),e(" { defineNuxtPlugin } "),s("span",{class:"hljs-keyword"},"from"),e(),s("span",{class:"hljs-string"},"'#app'"),e(`
`),s("span",{class:"hljs-keyword"},"import"),e(" { Button } "),s("span",{class:"hljs-keyword"},"from"),e(),s("span",{class:"hljs-string"},"'@varlet/ui'"),e(`
`),s("span",{class:"hljs-keyword"},"import"),e(),s("span",{class:"hljs-string"},"'@varlet/ui/es/button/style/index.js'"),e(`

`),s("span",{class:"hljs-keyword"},"export"),e(),s("span",{class:"hljs-keyword"},"default"),e(" defineNuxtPlugin("),s("span",{class:"hljs-function"},[e("("),s("span",{class:"hljs-params"},"nuxtApp"),e(") =>")]),e(` {
  nuxtApp.vueApp.use(Button)
})
`)])],-1),V=s("p",null,[e("For more examples, see "),s("a",{href:"https://github.com/varletjs/varlet-nuxt3-example"},"varlet-nuxt3-example"),e(".")],-1);function b(S,A,C,B,P,T){const n=o("var-site-code-example");return r(),c("div",p,[u,s("div",h,[_,t(n,null,{default:a(()=>[m]),_:1})]),s("div",f,[j,y,t(n,{"playground-ignore":""},{default:a(()=>[x]),_:1}),g]),s("div",v,[w,k,t(n,{"playground-ignore":""},{default:a(()=>[N]),_:1}),V])])}const F=l(i,[["render",b]]);export{F as default};
