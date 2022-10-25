import{_ as e,p,f as o,h as c,M as s,q as l,S as t,P as n}from"./vue-router.esm-bundler.786782d7.js";const r={components:{}},h={class:"varlet-site-doc"},i=s("h1",null,"\u6309\u9700\u5F15\u5165",-1),u=s("div",{class:"card"},[s("h3",null,"\u4ECB\u7ECD"),s("p",null,"\u6309\u9700\u5F15\u5165\u907F\u514D\u4E86\u7EC4\u4EF6\u7684\u5168\u91CF\u5BFC\u5165\uFF0C\u53EF\u4EE5\u6709\u6548\u7684\u51CF\u5C11\u53D1\u5E03\u5305\u7684\u5927\u5C0F\u3002")],-1),j={class:"card"},d=s("h3",null,"\u624B\u52A8\u5F15\u5165",-1),m=s("p",null,[n("\u6BCF\u4E00\u4E2A\u7EC4\u4EF6\u90FD\u662F\u4E00\u4E2A "),s("code",null,"Vue\u63D2\u4EF6"),n("\uFF0C\u5E76\u7531 "),s("code",null,"\u7EC4\u4EF6\u903B\u8F91"),n(" \u548C "),s("code",null,"\u6837\u5F0F\u6587\u4EF6"),n(" \u7EC4\u6210\uFF0C\u624B\u52A8\u5F15\u5165\u7684\u4F7F\u7528\u65B9\u5F0F\u5982\u4E0B\u3002")],-1),g=s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-keyword"},"import"),n(" { createApp } "),s("span",{class:"hljs-keyword"},"from"),n(),s("span",{class:"hljs-string"},"'vue'"),n(`
`),s("span",{class:"hljs-keyword"},"import"),n(" { Button } "),s("span",{class:"hljs-keyword"},"from"),n(),s("span",{class:"hljs-string"},"'@varlet/ui'"),n(`
`),s("span",{class:"hljs-keyword"},"import"),n(),s("span",{class:"hljs-string"},"'@varlet/ui/es/button/style/index.js'"),n(`

createApp().use(Button)
`)])],-1),_=s("p",null,"\u6216",-1),v=s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-tag"},[n("<"),s("span",{class:"hljs-name"},"script"),n(),s("span",{class:"hljs-attr"},"setup"),n(">")]),s("span",{class:"javascript"},[n(`
`),s("span",{class:"hljs-keyword"},"import"),n(" { Button "),s("span",{class:"hljs-keyword"},"as"),n(" VarButton } "),s("span",{class:"hljs-keyword"},"from"),n(),s("span",{class:"hljs-string"},"'@varlet/ui'"),n(`
`),s("span",{class:"hljs-keyword"},"import"),n(),s("span",{class:"hljs-string"},"'@varlet/ui/es/button/style/index.js'"),n(`
`)]),s("span",{class:"hljs-tag"},[n("</"),s("span",{class:"hljs-name"},"script"),n(">")]),n(`

`),s("span",{class:"hljs-tag"},[n("<"),s("span",{class:"hljs-name"},"template"),n(">")]),n(`
  `),s("span",{class:"hljs-tag"},[n("<"),s("span",{class:"hljs-name"},"var-button"),n(">")]),n("\u8BF4\u4F60\u597D"),s("span",{class:"hljs-tag"},[n("</"),s("span",{class:"hljs-name"},"var-button"),n(">")]),n(`
`),s("span",{class:"hljs-tag"},[n("</"),s("span",{class:"hljs-name"},"template"),n(">")]),n(`
`)])],-1),y={class:"card"},k=s("h3",null,"\u81EA\u52A8\u5F15\u5165",-1),f=s("p",null,[n("\u901A\u8FC7\u63D2\u4EF6 "),s("a",{href:"https://github.com/antfu/unplugin-vue-components"},"unplugin-vue-components"),n(" \u548C "),s("a",{href:"https://github.com/antfu/unplugin-auto-import"},"unplugin-auto-import"),n(" \u5B9E\u73B0\u7EC4\u4EF6\u81EA\u52A8\u6309\u9700\u5BFC\u5165")],-1),w=s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-meta"},"#"),s("span",{class:"bash"}," \u5B89\u88C5\u63D2\u4EF6"),n(`
`),s("span",{class:"hljs-meta"},`
#`),s("span",{class:"bash"}," npm"),n(`
npm i unplugin-vue-components unplugin-auto-import -D
`),s("span",{class:"hljs-meta"},`
#`),s("span",{class:"bash"}," yarn"),n(`
yarn add unplugin-vue-components unplugin-auto-import -D
`),s("span",{class:"hljs-meta"},`
#`),s("span",{class:"bash"}," pnpm"),n(`
pnpm add unplugin-vue-components unplugin-auto-import -D
`)])],-1),b=s("h4",null,"Vue CLI",-1),I=s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-comment"},"// vue.config.js"),n(`
`),s("span",{class:"hljs-keyword"},"const"),n(" Components = "),s("span",{class:"hljs-built_in"},"require"),n("("),s("span",{class:"hljs-string"},"'unplugin-vue-components/webpack'"),n(`)
`),s("span",{class:"hljs-keyword"},"const"),n(" AutoImport = "),s("span",{class:"hljs-built_in"},"require"),n("("),s("span",{class:"hljs-string"},"'unplugin-auto-import/webpack'"),n(`)
`),s("span",{class:"hljs-keyword"},"const"),n(" { VarletUIResolver } = "),s("span",{class:"hljs-built_in"},"require"),n("("),s("span",{class:"hljs-string"},"'unplugin-vue-components/resolvers'"),n(`)

`),s("span",{class:"hljs-built_in"},"module"),n(`.exports = {
  `),s("span",{class:"hljs-attr"},"configureWebpack"),n(`: {
    `),s("span",{class:"hljs-attr"},"plugins"),n(`: [
      Components({
        `),s("span",{class:"hljs-attr"},"resolvers"),n(`: [VarletUIResolver()]
      }),
      AutoImport({
        `),s("span",{class:"hljs-attr"},"resolvers"),n(": [VarletUIResolver({ "),s("span",{class:"hljs-attr"},"autoImport"),n(": "),s("span",{class:"hljs-literal"},"true"),n(` })]
      })
    ]
  }
}
`)])],-1),V=s("h4",null,"Vite",-1),x=s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-comment"},"// vite.config.js"),n(`
`),s("span",{class:"hljs-keyword"},"import"),n(" vue "),s("span",{class:"hljs-keyword"},"from"),n(),s("span",{class:"hljs-string"},"'@vitejs/plugin-vue'"),n(`
`),s("span",{class:"hljs-keyword"},"import"),n(" components "),s("span",{class:"hljs-keyword"},"from"),n(),s("span",{class:"hljs-string"},"'unplugin-vue-components/vite'"),n(`
`),s("span",{class:"hljs-keyword"},"import"),n(" autoImport "),s("span",{class:"hljs-keyword"},"from"),n(),s("span",{class:"hljs-string"},"'unplugin-auto-import/vite'"),n(`
`),s("span",{class:"hljs-keyword"},"import"),n(" { VarletUIResolver } "),s("span",{class:"hljs-keyword"},"from"),n(),s("span",{class:"hljs-string"},"'unplugin-vue-components/resolvers'"),n(`
`),s("span",{class:"hljs-keyword"},"import"),n(" { defineConfig } "),s("span",{class:"hljs-keyword"},"from"),n(),s("span",{class:"hljs-string"},"'vite'"),n(`

`),s("span",{class:"hljs-keyword"},"export"),n(),s("span",{class:"hljs-keyword"},"default"),n(` defineConfig({
  `),s("span",{class:"hljs-attr"},"plugins"),n(`: [
    vue(),
    components({
      `),s("span",{class:"hljs-attr"},"resolvers"),n(`: [VarletUIResolver()]
    }),
    autoImport({
      `),s("span",{class:"hljs-attr"},"resolvers"),n(": [VarletUIResolver({ "),s("span",{class:"hljs-attr"},"autoImport"),n(": "),s("span",{class:"hljs-literal"},"true"),n(` })]
    })
  ]
})
`)])],-1),C=s("h4",null,"Typescript \u914D\u7F6E\u6CE8\u610F",-1),B=s("p",null,[n("\u4E3A\u4E86\u5F97\u5230\u826F\u597D\u7684 IDE \u8BED\u6CD5\u9AD8\u4EAE\uFF0C\u8BF7\u786E\u4FDD\u4E0A\u8FF0\u4E24\u4E2A\u63D2\u4EF6\u751F\u6210\u7684\u7C7B\u578B\u58F0\u660E\u6587\u4EF6\u88AB "),s("code",null,"typescript"),n(" \u8BC6\u522B\uFF0C\u53EF\u5728 "),s("code",null,"tsconfig.json"),n(" \u4E2D\u8FDB\u884C\u5982\u4E0B\u914D\u7F6E")],-1),R=s("pre",{class:"hljs"},[s("code",null,[n(`{
  `),s("span",{class:"hljs-attr"},'"include"'),n(": ["),s("span",{class:"hljs-string"},'"auto-imports.d.ts"'),n(", "),s("span",{class:"hljs-string"},'"components.d.ts"'),n(`]
}
`)])],-1),U={class:"card"},D=s("h3",null,"\u624B\u52A8\u5F15\u5165\u548C\u81EA\u52A8\u5F15\u5165\u5BF9\u6BD4",-1),q=s("p",null,"\u624B\u52A8\u5F15\u5165",-1),A=s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-tag"},[n("<"),s("span",{class:"hljs-name"},"script"),n(),s("span",{class:"hljs-attr"},"setup"),n(">")]),s("span",{class:"javascript"},[n(`
`),s("span",{class:"hljs-keyword"},"import"),n(" { Button "),s("span",{class:"hljs-keyword"},"as"),n(" VarButton, Snackbar } "),s("span",{class:"hljs-keyword"},"from"),n(),s("span",{class:"hljs-string"},"'@varlet/ui'"),n(`
`),s("span",{class:"hljs-keyword"},"import"),n(),s("span",{class:"hljs-string"},"'@varlet/ui/es/button/style/index.js'"),n(`
`),s("span",{class:"hljs-keyword"},"import"),n(),s("span",{class:"hljs-string"},"'@varlet/ui/es/snackbar/style/index.js'"),n(`

`),s("span",{class:"hljs-function"},[s("span",{class:"hljs-keyword"},"function"),n(),s("span",{class:"hljs-title"},"handleClick"),n("("),s("span",{class:"hljs-params"}),n(") ")]),n(`{
  Snackbar(`),s("span",{class:"hljs-string"},"'\u4F60\u597D!'"),n(`)
}
`)]),s("span",{class:"hljs-tag"},[n("</"),s("span",{class:"hljs-name"},"script"),n(">")]),n(`

`),s("span",{class:"hljs-tag"},[n("<"),s("span",{class:"hljs-name"},"template"),n(">")]),n(`
  `),s("span",{class:"hljs-tag"},[n("<"),s("span",{class:"hljs-name"},"var-button"),n(" @"),s("span",{class:"hljs-attr"},"click"),n("="),s("span",{class:"hljs-string"},'"handleClick"'),n(">")]),n("\u8BF4\u4F60\u597D"),s("span",{class:"hljs-tag"},[n("</"),s("span",{class:"hljs-name"},"var-button"),n(">")]),n(`
`),s("span",{class:"hljs-tag"},[n("</"),s("span",{class:"hljs-name"},"template"),n(">")]),n(`
`)])],-1),N=s("p",null,"\u81EA\u52A8\u5F15\u5165",-1),S=s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-tag"},[n("<"),s("span",{class:"hljs-name"},"script"),n(),s("span",{class:"hljs-attr"},"setup"),n(">")]),s("span",{class:"javascript"},[n(`
`),s("span",{class:"hljs-function"},[s("span",{class:"hljs-keyword"},"function"),n(),s("span",{class:"hljs-title"},"handleClick"),n("("),s("span",{class:"hljs-params"}),n(") ")]),n(`{
  Snackbar(`),s("span",{class:"hljs-string"},"'\u4F60\u597D!'"),n(`)
}
`)]),s("span",{class:"hljs-tag"},[n("</"),s("span",{class:"hljs-name"},"script"),n(">")]),n(`

`),s("span",{class:"hljs-tag"},[n("<"),s("span",{class:"hljs-name"},"template"),n(">")]),n(`
  `),s("span",{class:"hljs-tag"},[n("<"),s("span",{class:"hljs-name"},"var-button"),n(" @"),s("span",{class:"hljs-attr"},"click"),n("="),s("span",{class:"hljs-string"},'"handleClick"'),n(">")]),n("\u8BF4\u4F60\u597D"),s("span",{class:"hljs-tag"},[n("</"),s("span",{class:"hljs-name"},"var-button"),n(">")]),n(`
`),s("span",{class:"hljs-tag"},[n("</"),s("span",{class:"hljs-name"},"template"),n(">")]),n(`
`)])],-1);function $(E,T,z,L,M,O){const a=p("var-site-code-example");return o(),c("div",h,[i,u,s("div",j,[d,m,l(a,{"playground-ignore":""},{default:t(()=>[g]),_:1}),_,l(a,{"playground-ignore":""},{default:t(()=>[v]),_:1})]),s("div",y,[k,f,l(a,{"playground-ignore":""},{default:t(()=>[w]),_:1}),b,l(a,{"playground-ignore":""},{default:t(()=>[I]),_:1}),V,l(a,{"playground-ignore":""},{default:t(()=>[x]),_:1}),C,B,l(a,{"playground-ignore":""},{default:t(()=>[R]),_:1})]),s("div",U,[D,q,l(a,{"playground-ignore":""},{default:t(()=>[A]),_:1}),N,l(a,{"playground-ignore":""},{default:t(()=>[S]),_:1})])])}const W=e(r,[["render",$]]);export{W as default};
