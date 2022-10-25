import{_ as e,p as c,f as p,h as o,M as s,q as t,S as l,P as a}from"./vue-router.esm-bundler.786782d7.js";const r={components:{}},h={class:"varlet-site-doc"},i=s("h1",null,"Quickstart",-1),d=s("div",{class:"card"},[s("h3",null,"Intro"),s("p",null,"Here are the most basic ways to access component libraries in common development patterns.")],-1),u={class:"card"},m=s("h3",null,"Install",-1),j=s("h4",null,"CDN",-1),_=s("p",null,[s("code",null,"varlet.js"),a(" contain all the styles and logic of the component library, and you can import them.")],-1),g=s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-tag"},[a("<"),s("span",{class:"hljs-name"},"div"),a(),s("span",{class:"hljs-attr"},"id"),a("="),s("span",{class:"hljs-string"},'"app"'),a(">")]),s("span",{class:"hljs-tag"},[a("</"),s("span",{class:"hljs-name"},"div"),a(">")]),a(`
`),s("span",{class:"hljs-tag"},[a("<"),s("span",{class:"hljs-name"},"script"),a(),s("span",{class:"hljs-attr"},"src"),a("="),s("span",{class:"hljs-string"},'"https://cdn.jsdelivr.net/npm/vue@next"'),a(">")]),s("span",{class:"hljs-tag"},[a("</"),s("span",{class:"hljs-name"},"script"),a(">")]),a(`
`),s("span",{class:"hljs-tag"},[a("<"),s("span",{class:"hljs-name"},"script"),a(),s("span",{class:"hljs-attr"},"src"),a("="),s("span",{class:"hljs-string"},'"https://cdn.jsdelivr.net/npm/@varlet/ui/umd/varlet.js"'),a(">")]),s("span",{class:"hljs-tag"},[a("</"),s("span",{class:"hljs-name"},"script"),a(">")]),a(`
`),s("span",{class:"hljs-tag"},[a("<"),s("span",{class:"hljs-name"},"script"),a(">")]),s("span",{class:"javascript"},[a(`
  `),s("span",{class:"hljs-keyword"},"const"),a(` app = Vue.createApp({
    `),s("span",{class:"hljs-attr"},"template"),a(": "),s("span",{class:"hljs-string"},"'<var-button>Button</var-button>'"),a(`
  })
  app.use(Varlet).mount(`),s("span",{class:"hljs-string"},"'#app'"),a(`)
`)]),s("span",{class:"hljs-tag"},[a("</"),s("span",{class:"hljs-name"},"script"),a(">")]),a(`
`)])],-1),v=s("h4",null,"Webpack/Vite",-1),y=s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-meta"},"#"),s("span",{class:"bash"}," Install with npm, yarn or pnpm"),a(`
`),s("span",{class:"hljs-meta"},`
#`),s("span",{class:"bash"}," npm"),a(`
npm i @varlet/ui -S
`),s("span",{class:"hljs-meta"},`
#`),s("span",{class:"bash"}," yarn"),a(`
yarn add @varlet/ui
`),s("span",{class:"hljs-meta"},`
#`),s("span",{class:"bash"}," pnpm"),a(`
pnpm add @varlet/ui
`)])],-1),f=s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-keyword"},"import"),a(" App "),s("span",{class:"hljs-keyword"},"from"),a(),s("span",{class:"hljs-string"},"'./App.vue'"),a(`
`),s("span",{class:"hljs-keyword"},"import"),a(" Varlet "),s("span",{class:"hljs-keyword"},"from"),a(),s("span",{class:"hljs-string"},"'@varlet/ui'"),a(`
`),s("span",{class:"hljs-keyword"},"import"),a(" { createApp } "),s("span",{class:"hljs-keyword"},"from"),a(),s("span",{class:"hljs-string"},"'vue'"),a(`
`),s("span",{class:"hljs-keyword"},"import"),a(),s("span",{class:"hljs-string"},"'@varlet/ui/es/style.js'"),a(`

createApp(App).use(Varlet).mount(`),s("span",{class:"hljs-string"},"'#app'"),a(`)
`)])],-1),k=s("div",{class:"card"},[s("h3",null,"Components Playground"),s("p",null,[a("We provide a web version of the component editor, which is convenient for you to quickly get started with each component of the component library, edit it online, share it with others, or download the code package to run locally. You can click the "),s("code",null,"{...}"),a(" icon in the upper right corner of the page or "),s("a",{href:"https://varlet.gitee.io/varlet-ui-playground"},"go here")])],-1);function w(b,x,V,A,B,C){const n=c("var-site-code-example");return p(),o("div",h,[i,d,s("div",u,[m,j,_,t(n,{"playground-ignore":""},{default:l(()=>[g]),_:1}),v,t(n,{"playground-ignore":""},{default:l(()=>[y]),_:1}),t(n,{"playground-ignore":""},{default:l(()=>[f]),_:1})]),k])}const $=e(r,[["render",w]]);export{$ as default};
