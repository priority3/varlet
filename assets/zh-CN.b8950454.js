import{_ as t,p as c,f as o,h as r,M as s,q as n,S as e,P as a}from"./vue-router.esm-bundler.786782d7.js";const p={components:{}},h={class:"varlet-site-doc"},i=s("h1",null,"\u6697\u9ED1\u6A21\u5F0F",-1),d=s("div",{class:"card"},[s("h3",null,"\u4ECB\u7ECD"),s("p",null,"\u7EC4\u4EF6\u5E93\u7B2C\u4E00\u65B9\u63D0\u4F9B\u4E86\u6697\u9ED1\u6A21\u5F0F\u7684\u4E3B\u9898\uFF0C\u6697\u9ED1\u6A21\u5F0F\u7684\u4F18\u52BF\u5728\u4E8E\u5728\u5F31\u5149\u73AF\u5883\u4E0B\u5177\u6709\u66F4\u9AD8\u7684\u53EF\u8BFB\u6027\u3002")],-1),u={class:"card"},j=s("h3",null,"\u5207\u6362\u4E3B\u9898",-1),_=s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-tag"},[a("<"),s("span",{class:"hljs-name"},"script"),a(),s("span",{class:"hljs-attr"},"setup"),a(">")]),s("span",{class:"javascript"},[a(`
`),s("span",{class:"hljs-keyword"},"import"),a(" { StyleProvider, Themes } "),s("span",{class:"hljs-keyword"},"from"),a(),s("span",{class:"hljs-string"},"'@varlet/ui'"),a(`

`),s("span",{class:"hljs-keyword"},"let"),a(" currentTheme = "),s("span",{class:"hljs-literal"},"null"),a(`

`),s("span",{class:"hljs-keyword"},"const"),a(" toggleTheme = "),s("span",{class:"hljs-function"},"() =>"),a(` {
  currentTheme = currentTheme ? `),s("span",{class:"hljs-literal"},"null"),a(` : Themes.dark
  StyleProvider(currentTheme)
}
`)]),s("span",{class:"hljs-tag"},[a("</"),s("span",{class:"hljs-name"},"script"),a(">")]),a(`

`),s("span",{class:"hljs-tag"},[a("<"),s("span",{class:"hljs-name"},"template"),a(">")]),a(`
  `),s("span",{class:"hljs-tag"},[a("<"),s("span",{class:"hljs-name"},"var-button"),a(),s("span",{class:"hljs-attr"},"block"),a(" @"),s("span",{class:"hljs-attr"},"click"),a("="),s("span",{class:"hljs-string"},'"toggleTheme"'),a(">")]),a("\u5207\u6362\u4E3B\u9898"),s("span",{class:"hljs-tag"},[a("</"),s("span",{class:"hljs-name"},"var-button"),a(">")]),a(`
`),s("span",{class:"hljs-tag"},[a("</"),s("span",{class:"hljs-name"},"template"),a(">")]),a(`
`)])],-1),m=s("p",null,[a("\u6CE8\u5165\u7EC4\u4EF6\u5E93\u63A8\u8350\u7684 "),s("code",null,"\u6587\u5B57\u989C\u8272"),a(" \u548C "),s("code",null,"\u80CC\u666F\u989C\u8272"),a(" \u53D8\u91CF\u6765\u63A7\u5236\u6574\u4F53\u989C\u8272")],-1),g=s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-selector-tag"},"body"),a(` {
  `),s("span",{class:"hljs-attribute"},"transition"),a(": background-color ."),s("span",{class:"hljs-number"},"25s"),a(", color ."),s("span",{class:"hljs-number"},"25s"),a(`;
  `),s("span",{class:"hljs-attribute"},"color"),a(": "),s("span",{class:"hljs-built_in"},"var"),a(`(--color-text);
  `),s("span",{class:"hljs-attribute"},"background-color"),a(": "),s("span",{class:"hljs-built_in"},"var"),a(`(--color-body);
}
`)])],-1);function v(b,f,k,y,T,x){const l=c("var-site-code-example");return o(),r("div",h,[i,d,s("div",u,[j,n(l,{"playground-ignore":""},{default:e(()=>[_]),_:1}),m,n(l,{"playground-ignore":""},{default:e(()=>[g]),_:1})])])}const N=t(p,[["render",v]]);export{N as default};
