import{_ as t,p as o,f as c,h as r,M as s,q as l,S as n,P as a}from"./vue-router.esm-bundler.786782d7.js";const h={components:{}},p={class:"varlet-site-doc"},i=s("h1",null,"Dark Mode",-1),d=s("div",{class:"card"},[s("h3",null,"Intro"),s("p",null,"The first party of the component library provides the theme of dark mode. The advantage of dark mode is that it has higher readability in low light environments.")],-1),m={class:"card"},u=s("h3",null,"Toggle Theme",-1),j=s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-tag"},[a("<"),s("span",{class:"hljs-name"},"script"),a(),s("span",{class:"hljs-attr"},"setup"),a(">")]),s("span",{class:"javascript"},[a(`
`),s("span",{class:"hljs-keyword"},"import"),a(" { StyleProvider, Themes } "),s("span",{class:"hljs-keyword"},"from"),a(),s("span",{class:"hljs-string"},"'@varlet/ui'"),a(`

`),s("span",{class:"hljs-keyword"},"let"),a(" currentTheme = "),s("span",{class:"hljs-literal"},"null"),a(`

`),s("span",{class:"hljs-keyword"},"const"),a(" toggleTheme = "),s("span",{class:"hljs-function"},"() =>"),a(` {
  currentTheme = currentTheme ? `),s("span",{class:"hljs-literal"},"null"),a(` : Themes.dark
  StyleProvider(currentTheme)
}
`)]),s("span",{class:"hljs-tag"},[a("</"),s("span",{class:"hljs-name"},"script"),a(">")]),a(`

`),s("span",{class:"hljs-tag"},[a("<"),s("span",{class:"hljs-name"},"template"),a(">")]),a(`
  `),s("span",{class:"hljs-tag"},[a("<"),s("span",{class:"hljs-name"},"var-button"),a(),s("span",{class:"hljs-attr"},"block"),a(" @"),s("span",{class:"hljs-attr"},"click"),a("="),s("span",{class:"hljs-string"},'"toggleTheme"'),a(">")]),a("Toggle Theme"),s("span",{class:"hljs-tag"},[a("</"),s("span",{class:"hljs-name"},"var-button"),a(">")]),a(`
`),s("span",{class:"hljs-tag"},[a("</"),s("span",{class:"hljs-name"},"template"),a(">")]),a(`
`)])],-1),_=s("p",null,[a("Inject the "),s("code",null,"text color"),a(" and "),s("code",null,"background color"),a(" variables recommended by the component library to control the overall color")],-1),g=s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-selector-tag"},"body"),a(` {
  `),s("span",{class:"hljs-attribute"},"transition"),a(": background-color ."),s("span",{class:"hljs-number"},"25s"),a(", color ."),s("span",{class:"hljs-number"},"25s"),a(`;
  `),s("span",{class:"hljs-attribute"},"color"),a(": "),s("span",{class:"hljs-built_in"},"var"),a(`(--color-text);
  `),s("span",{class:"hljs-attribute"},"background-color"),a(": "),s("span",{class:"hljs-built_in"},"var"),a(`(--color-body);
}
`)])],-1);function b(v,f,k,y,T,x){const e=o("var-site-code-example");return c(),r("div",p,[i,d,s("div",m,[u,l(e,{"playground-ignore":""},{default:n(()=>[j]),_:1}),_,l(e,{"playground-ignore":""},{default:n(()=>[g]),_:1})])])}const S=t(h,[["render",b]]);export{S as default};
