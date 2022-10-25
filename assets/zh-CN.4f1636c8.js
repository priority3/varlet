import{_ as e,p as o,f as d,h as r,M as a,q as n,S as l,at as c,P as s}from"./vue-router.esm-bundler.786782d7.js";const h={components:{}},p={class:"varlet-site-doc"},i=c('<h1>\u52A8\u4F5C\u9762\u677F</h1><div class="card"><h3>\u4ECB\u7ECD</h3><p>\u5F39\u51FA\u4E00\u4E2A\u52A8\u4F5C\u9762\u677F\u63D0\u4F9B\u7528\u6237\u9009\u62E9\u9009\u9879\u7684\u80FD\u529B\u3002 <code>ActionSheet</code> \u63D0\u4F9B\u4E86\u51FD\u6570\u5F0F\u548C\u7EC4\u4EF6\u5F0F\u4E24\u79CD\u4F7F\u7528\u65B9\u5F0F\uFF0C\u4E24\u79CD\u4F7F\u7528\u6548\u679C\u548C\u53C2\u6570\u5E76\u6CA1\u6709\u672C\u8D28\u533A\u522B\u3002 \u51FD\u6570\u8FD4\u56DE\u4E00\u4E2A <code>Promise</code>\uFF0C\u9009\u62E9\u65F6\u8FD4\u56DE <code>\u5F53\u524D\u9009\u62E9\u7684 action</code>\uFF0C\u70B9\u51FB\u906E\u7F69\u5C42\u5173\u95ED\u8FD4\u56DE <code>close</code>\u3002</p></div><h2>\u51FD\u6570\u8C03\u7528</h2>',3),j={class:"card"},m=a("h3",null,"\u57FA\u672C\u4F7F\u7528",-1),g=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"javascript"},[s(`
`),a("span",{class:"hljs-keyword"},"import"),s(" { Snackbar, ActionSheet } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'@varlet/ui'"),s(`

`),a("span",{class:"hljs-keyword"},"const"),s(" createBasic = "),a("span",{class:"hljs-keyword"},"async"),s(` () => {
  `),a("span",{class:"hljs-keyword"},"const"),s(" action = "),a("span",{class:"hljs-keyword"},"await"),s(` ActionSheet({ 
    `),a("span",{class:"hljs-attr"},"actions"),s(`: [
      {
        `),a("span",{class:"hljs-attr"},"name"),s(": "),a("span",{class:"hljs-string"},"'Item 01'"),s(`,
        `),a("span",{class:"hljs-attr"},"icon"),s(": "),a("span",{class:"hljs-string"},"'account-circle'"),s(`,
      },
      {
        `),a("span",{class:"hljs-attr"},"name"),s(": "),a("span",{class:"hljs-string"},"'Item 02'"),s(`,
        `),a("span",{class:"hljs-attr"},"icon"),s(": "),a("span",{class:"hljs-string"},"'notebook'"),s(`,
      },
      {
        `),a("span",{class:"hljs-attr"},"name"),s(": "),a("span",{class:"hljs-string"},"'Item 03'"),s(`,
        `),a("span",{class:"hljs-attr"},"icon"),s(": "),a("span",{class:"hljs-string"},"'wifi'"),s(`,
      },
    ] 
  })
  
  action !== `),a("span",{class:"hljs-string"},"'close'"),s(" && Snackbar("),a("span",{class:"hljs-string"},[s("`"),a("span",{class:"hljs-subst"},"${action.name}"),s("`")]),s(`)
}
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-button"),s(),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"primary"'),s(),a("span",{class:"hljs-attr"},"block"),s(" @"),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},'"createBasic"'),s(">")]),s("\u57FA\u672C\u4F7F\u7528"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-button"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),u={class:"card"},k=a("h3",null,"\u4FEE\u6539\u6807\u9898",-1),b=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"javascript"},[s(`
`),a("span",{class:"hljs-keyword"},"import"),s(" { Snackbar, ActionSheet } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'@varlet/ui'"),s(`

`),a("span",{class:"hljs-keyword"},"const"),s(" handleSelect = "),a("span",{class:"hljs-keyword"},"async"),s(` () => {
  `),a("span",{class:"hljs-keyword"},"const"),s(" action = "),a("span",{class:"hljs-keyword"},"await"),s(` ActionSheet({ 
    `),a("span",{class:"hljs-attr"},"actions"),s(`: [
      {
        `),a("span",{class:"hljs-attr"},"name"),s(": "),a("span",{class:"hljs-string"},"'Item 01'"),s(`,
        `),a("span",{class:"hljs-attr"},"icon"),s(": "),a("span",{class:"hljs-string"},"'account-circle'"),s(`,
      },
      {
        `),a("span",{class:"hljs-attr"},"name"),s(": "),a("span",{class:"hljs-string"},"'Item 02'"),s(`,
        `),a("span",{class:"hljs-attr"},"icon"),s(": "),a("span",{class:"hljs-string"},"'notebook'"),s(`,
      },
      {
        `),a("span",{class:"hljs-attr"},"name"),s(": "),a("span",{class:"hljs-string"},"'Item 03'"),s(`,
        `),a("span",{class:"hljs-attr"},"icon"),s(": "),a("span",{class:"hljs-string"},"'wifi'"),s(`,
      },
    ],
    `),a("span",{class:"hljs-attr"},"title"),s(": "),a("span",{class:"hljs-string"},"'\u9009\u62E9\u4E00\u4E2A\u4F60\u559C\u6B22\u7684\u5427'"),s(` 
  })
  
  action !== `),a("span",{class:"hljs-string"},"'close'"),s(" && Snackbar("),a("span",{class:"hljs-string"},[s("`"),a("span",{class:"hljs-subst"},"${action.name}"),s("`")]),s(`)
}
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-button"),s(),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"primary"'),s(),a("span",{class:"hljs-attr"},"block"),s(" @"),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},'"handleSelect"'),s(">")]),s("\u4FEE\u6539\u6807\u9898"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-button"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),y={class:"card"},w=a("h3",null,"\u7981\u7528\u9009\u9879",-1),v=a("p",null,[s("\u9009\u9879\u4F20\u5165 "),a("code",null,"disabled"),s(" \u53EF\u4EE5\u4F7F\u9009\u9879\u5904\u4E8E\u7981\u7528\u72B6\u6001\u3002")],-1),_=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"javascript"},[s(`
`),a("span",{class:"hljs-keyword"},"import"),s(" { Snackbar, ActionSheet } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'@varlet/ui'"),s(`

`),a("span",{class:"hljs-keyword"},"const"),s(" handleSelect = "),a("span",{class:"hljs-keyword"},"async"),s(` () => {
  `),a("span",{class:"hljs-keyword"},"const"),s(" action = "),a("span",{class:"hljs-keyword"},"await"),s(` ActionSheet({ 
    `),a("span",{class:"hljs-attr"},"actions"),s(`: [
      {
        `),a("span",{class:"hljs-attr"},"name"),s(": "),a("span",{class:"hljs-string"},"'Item 01'"),s(`,
        `),a("span",{class:"hljs-attr"},"icon"),s(": "),a("span",{class:"hljs-string"},"'account-circle'"),s(`,
      },
      {
        `),a("span",{class:"hljs-attr"},"name"),s(": "),a("span",{class:"hljs-string"},"'Item 02'"),s(`,
        `),a("span",{class:"hljs-attr"},"icon"),s(": "),a("span",{class:"hljs-string"},"'notebook'"),s(`,
      },
      {
        `),a("span",{class:"hljs-attr"},"name"),s(": "),a("span",{class:"hljs-string"},"'Item 03'"),s(`,
        `),a("span",{class:"hljs-attr"},"icon"),s(": "),a("span",{class:"hljs-string"},"'wifi'"),s(`,
        `),a("span",{class:"hljs-attr"},"disabled"),s(": "),a("span",{class:"hljs-literal"},"true"),s(`,
      },
    ] 
  })
  
  action !== `),a("span",{class:"hljs-string"},"'close'"),s(" && Snackbar("),a("span",{class:"hljs-string"},[s("`"),a("span",{class:"hljs-subst"},"${action.name}"),s("`")]),s(`)
}
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-button"),s(),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"primary"'),s(),a("span",{class:"hljs-attr"},"block"),s(" @"),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},'"handleSelect"'),s(">")]),s("\u7981\u7528\u9009\u9879"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-button"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),f={class:"card"},S=a("h3",null,"\u7981\u7528\u70B9\u51FB\u9009\u9879\u65F6\u5173\u95ED\u52A8\u4F5C\u9762\u677F",-1),I=a("p",null,[s("\u65B9\u6CD5\u4F20\u5165 "),a("code",null,"closeOnClickAction"),s(" \u53EF\u4EE5\u7981\u7528\u5728\u9009\u62E9\u9009\u9879\u65F6 "),a("code",null,"ActionSheet"),s(" \u81EA\u52A8\u5173\u95ED\u7684\u884C\u4E3A\uFF0C\u7528\u6237\u53EF\u4EE5\u591A\u6B21\u9009\u62E9\uFF0C \u7531\u4E8E "),a("code",null,"Promise"),s(" \u53EA\u4F1A\u88AB "),a("code",null,"resolve"),s(" \u4E00\u6B21\uFF0C\u6240\u4EE5\u63A8\u8350\u4F7F\u7528 "),a("code",null,"onSelect"),s(" \u76D1\u542C\u7528\u6237\u9009\u62E9\u884C\u4E3A\u3002")],-1),A=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"javascript"},[s(`
`),a("span",{class:"hljs-keyword"},"import"),s(" { Snackbar, ActionSheet } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'@varlet/ui'"),s(`

`),a("span",{class:"hljs-keyword"},"const"),s(" handleSelect = "),a("span",{class:"hljs-keyword"},"async"),s(` () => {
  `),a("span",{class:"hljs-keyword"},"await"),s(` ActionSheet({ 
    `),a("span",{class:"hljs-attr"},"actions"),s(`: [
      {
        `),a("span",{class:"hljs-attr"},"name"),s(": "),a("span",{class:"hljs-string"},"'Item 01'"),s(`,
        `),a("span",{class:"hljs-attr"},"icon"),s(": "),a("span",{class:"hljs-string"},"'account-circle'"),s(`,
      },
      {
        `),a("span",{class:"hljs-attr"},"name"),s(": "),a("span",{class:"hljs-string"},"'Item 02'"),s(`,
        `),a("span",{class:"hljs-attr"},"icon"),s(": "),a("span",{class:"hljs-string"},"'notebook'"),s(`,
      },
      {
        `),a("span",{class:"hljs-attr"},"name"),s(": "),a("span",{class:"hljs-string"},"'Item 03'"),s(`,
        `),a("span",{class:"hljs-attr"},"icon"),s(": "),a("span",{class:"hljs-string"},"'wifi'"),s(`,
      },
    ], 
    `),a("span",{class:"hljs-attr"},"closeOnClickAction"),s(": "),a("span",{class:"hljs-literal"},"false"),s(`,
    `),a("span",{class:"hljs-attr"},"onSelect"),s(": "),a("span",{class:"hljs-function"},[a("span",{class:"hljs-params"},"action"),s(" =>")]),s(" Snackbar("),a("span",{class:"hljs-string"},[s("`Your selected is:"),a("span",{class:"hljs-subst"},"${action.name}"),s("`")]),s(`), 
  })
}
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-button"),s(),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"primary"'),s(),a("span",{class:"hljs-attr"},"block"),s(" @"),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},'"handleSelect"'),s(">")]),s("\u7981\u7528\u5173\u95ED\u52A8\u4F5C\u9762\u677F"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-button"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),x={class:"card"},$=a("h3",null,"\u81EA\u5B9A\u4E49\u9009\u9879\u6837\u5F0F",-1),C=a("p",null,[s("\u9009\u9879\u63D0\u4F9B\u4E86\u53EF\u4EE5\u914D\u7F6E\u6837\u5F0F\u7684\u53C2\u6570\uFF0C\u5177\u4F53\u9009\u9879\u7684\u53C2\u6570\u53EF\u9009\u9879\u89C1 "),a("code",null,"Action \u7684\u6570\u636E\u7ED3\u6784"),s("\u3002")],-1),O=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"javascript"},[s(`
`),a("span",{class:"hljs-keyword"},"import"),s(" { Snackbar, ActionSheet } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'@varlet/ui'"),s(`

`),a("span",{class:"hljs-keyword"},"const"),s(" handleSelect = "),a("span",{class:"hljs-keyword"},"async"),s(` () => {
  `),a("span",{class:"hljs-keyword"},"const"),s(" action = "),a("span",{class:"hljs-keyword"},"await"),s(` ActionSheet({ 
    `),a("span",{class:"hljs-attr"},"actions"),s(`: [
      {
        `),a("span",{class:"hljs-attr"},"name"),s(": "),a("span",{class:"hljs-string"},"'Item 01'"),s(`,
        `),a("span",{class:"hljs-attr"},"icon"),s(": "),a("span",{class:"hljs-string"},"'account-circle'"),s(`,
        `),a("span",{class:"hljs-attr"},"color"),s(": "),a("span",{class:"hljs-string"},"'#00c48f'"),s(`,
      },
      {
        `),a("span",{class:"hljs-attr"},"name"),s(": "),a("span",{class:"hljs-string"},"'Item 02'"),s(`,
        `),a("span",{class:"hljs-attr"},"icon"),s(": "),a("span",{class:"hljs-string"},"'notebook'"),s(`,
        `),a("span",{class:"hljs-attr"},"color"),s(": "),a("span",{class:"hljs-string"},"'#ff9800'"),s(`,
      },
      {
        `),a("span",{class:"hljs-attr"},"name"),s(": "),a("span",{class:"hljs-string"},"'Item 03'"),s(`,
        `),a("span",{class:"hljs-attr"},"icon"),s(": "),a("span",{class:"hljs-string"},"'wifi'"),s(`,
        `),a("span",{class:"hljs-attr"},"color"),s(": "),a("span",{class:"hljs-string"},"'#00afef'"),s(`,
      },
    ] 
  })
  
  action !== `),a("span",{class:"hljs-string"},"'close'"),s(" && Snackbar("),a("span",{class:"hljs-string"},[s("`"),a("span",{class:"hljs-subst"},"${action.name}"),s("`")]),s(`)
}
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-button"),s(),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"primary"'),s(),a("span",{class:"hljs-attr"},"block"),s(" @"),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},'"handleSelect"'),s(">")]),s("\u81EA\u5B9A\u4E49\u9009\u9879\u6837\u5F0F"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-button"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),N=a("h2",null,"\u7EC4\u4EF6\u8C03\u7528",-1),P={class:"card"},z=a("h3",null,"\u57FA\u672C\u4F7F\u7528",-1),B=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"javascript"},[s(`
`),a("span",{class:"hljs-keyword"},"import"),s(" { ref } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`
`),a("span",{class:"hljs-keyword"},"import"),s(" { Snackbar } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'@varlet/ui'"),s(`

`),a("span",{class:"hljs-keyword"},"const"),s(" show = ref("),a("span",{class:"hljs-literal"},"false"),s(`)
`),a("span",{class:"hljs-keyword"},"const"),s(` actions = ref([
  {
    `),a("span",{class:"hljs-attr"},"name"),s(": "),a("span",{class:"hljs-string"},"'Item 01'"),s(`,
    `),a("span",{class:"hljs-attr"},"icon"),s(": "),a("span",{class:"hljs-string"},"'account-circle'"),s(`,
  },
  {
    `),a("span",{class:"hljs-attr"},"name"),s(": "),a("span",{class:"hljs-string"},"'Item 02'"),s(`,
    `),a("span",{class:"hljs-attr"},"icon"),s(": "),a("span",{class:"hljs-string"},"'notebook'"),s(`,
  },
  {
    `),a("span",{class:"hljs-attr"},"name"),s(": "),a("span",{class:"hljs-string"},"'Item 03'"),s(`,
    `),a("span",{class:"hljs-attr"},"icon"),s(": "),a("span",{class:"hljs-string"},"'wifi'"),s(`,
  },
])

`),a("span",{class:"hljs-keyword"},"const"),s(" handleSelect = "),a("span",{class:"hljs-function"},[s("("),a("span",{class:"hljs-params"},"action"),s(") =>")]),s(` {
  Snackbar(`),a("span",{class:"hljs-string"},[s("`"),a("span",{class:"hljs-subst"},"${action.name}"),s("`")]),s(`)
}
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-button"),s(),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"warning"'),s(),a("span",{class:"hljs-attr"},"block"),s(" @"),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},'"show = true"'),s(">")]),s("\u57FA\u672C\u4F7F\u7528"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-button"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-action-sheet"),s(` 
    `),a("span",{class:"hljs-attr"},":actions"),s("="),a("span",{class:"hljs-string"},'"actions"'),s(`
    `),a("span",{class:"hljs-attr"},"v-model:show"),s("="),a("span",{class:"hljs-string"},'"show"'),s(`
    @`),a("span",{class:"hljs-attr"},"select"),s("="),a("span",{class:"hljs-string"},'"handleSelect"'),s(`
  />`)]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),V={class:"card"},T=a("h3",null,"\u4FEE\u6539\u6807\u9898",-1),q=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"javascript"},[s(`
`),a("span",{class:"hljs-keyword"},"import"),s(" { ref } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`
`),a("span",{class:"hljs-keyword"},"import"),s(" { Snackbar } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'@varlet/ui'"),s(`

`),a("span",{class:"hljs-keyword"},"const"),s(" show = ref("),a("span",{class:"hljs-literal"},"false"),s(`)
`),a("span",{class:"hljs-keyword"},"const"),s(` actions = ref([
  {
    `),a("span",{class:"hljs-attr"},"name"),s(": "),a("span",{class:"hljs-string"},"'Item 01'"),s(`,
    `),a("span",{class:"hljs-attr"},"icon"),s(": "),a("span",{class:"hljs-string"},"'account-circle'"),s(`,
  },
  {
    `),a("span",{class:"hljs-attr"},"name"),s(": "),a("span",{class:"hljs-string"},"'Item 02'"),s(`,
    `),a("span",{class:"hljs-attr"},"icon"),s(": "),a("span",{class:"hljs-string"},"'notebook'"),s(`,
  },
  {
    `),a("span",{class:"hljs-attr"},"name"),s(": "),a("span",{class:"hljs-string"},"'Item 03'"),s(`,
    `),a("span",{class:"hljs-attr"},"icon"),s(": "),a("span",{class:"hljs-string"},"'wifi'"),s(`,
  },
])

`),a("span",{class:"hljs-keyword"},"const"),s(" handleSelect = "),a("span",{class:"hljs-function"},[s("("),a("span",{class:"hljs-params"},"action"),s(") =>")]),s(` {
  Snackbar(`),a("span",{class:"hljs-string"},[s("`"),a("span",{class:"hljs-subst"},"${action.name}"),s("`")]),s(`)
}
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-button"),s(),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"warning"'),s(),a("span",{class:"hljs-attr"},"block"),s(" @"),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},'"show = true"'),s(">")]),s("\u4FEE\u6539\u6807\u9898"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-button"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-action-sheet"),s(` 
    `),a("span",{class:"hljs-attr"},"title"),s("="),a("span",{class:"hljs-string"},'"\u9009\u62E9\u4E00\u4E2A\u4F60\u559C\u6B22\u7684\u5427"'),s(`
    `),a("span",{class:"hljs-attr"},":actions"),s("="),a("span",{class:"hljs-string"},'"actions"'),s(`
    `),a("span",{class:"hljs-attr"},"v-model:show"),s("="),a("span",{class:"hljs-string"},'"show"'),s(`
    @`),a("span",{class:"hljs-attr"},"select"),s("="),a("span",{class:"hljs-string"},'"handleSelect"'),s(`
  />`)]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),E={class:"card"},M=a("h3",null,"\u7981\u7528\u9009\u9879",-1),Y=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"javascript"},[s(`
`),a("span",{class:"hljs-keyword"},"import"),s(" { ref } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`
`),a("span",{class:"hljs-keyword"},"import"),s(" { Snackbar } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'@varlet/ui'"),s(`

`),a("span",{class:"hljs-keyword"},"const"),s(" show = ref("),a("span",{class:"hljs-literal"},"false"),s(`)
`),a("span",{class:"hljs-keyword"},"const"),s(` actions = ref([
  {
    `),a("span",{class:"hljs-attr"},"name"),s(": "),a("span",{class:"hljs-string"},"'Item 01'"),s(`,
    `),a("span",{class:"hljs-attr"},"icon"),s(": "),a("span",{class:"hljs-string"},"'account-circle'"),s(`,
  },
  {
    `),a("span",{class:"hljs-attr"},"name"),s(": "),a("span",{class:"hljs-string"},"'Item 02'"),s(`,
    `),a("span",{class:"hljs-attr"},"icon"),s(": "),a("span",{class:"hljs-string"},"'notebook'"),s(`,
  },
  {
    `),a("span",{class:"hljs-attr"},"name"),s(": "),a("span",{class:"hljs-string"},"'Item 03'"),s(`,
    `),a("span",{class:"hljs-attr"},"icon"),s(": "),a("span",{class:"hljs-string"},"'wifi'"),s(`,
    `),a("span",{class:"hljs-attr"},"disabled"),s(": "),a("span",{class:"hljs-literal"},"true"),s(`,
  },
])

`),a("span",{class:"hljs-keyword"},"const"),s(" handleSelect = "),a("span",{class:"hljs-function"},[s("("),a("span",{class:"hljs-params"},"action"),s(") =>")]),s(` {
  Snackbar(`),a("span",{class:"hljs-string"},[s("`"),a("span",{class:"hljs-subst"},"${action.name}"),s("`")]),s(`)
}
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-button"),s(),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"warning"'),s(),a("span",{class:"hljs-attr"},"block"),s(" @"),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},'"show = true"'),s(">")]),s("\u7981\u7528\u9009\u9879"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-button"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-action-sheet"),s(` 
    `),a("span",{class:"hljs-attr"},":actions"),s("="),a("span",{class:"hljs-string"},'"actions"'),s(`
    `),a("span",{class:"hljs-attr"},"v-model:show"),s("="),a("span",{class:"hljs-string"},'"show"'),s(`
    @`),a("span",{class:"hljs-attr"},"select"),s("="),a("span",{class:"hljs-string"},'"handleSelect"'),s(`
  />`)]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),D={class:"card"},F=a("h3",null,"\u7981\u7528\u70B9\u51FB\u9009\u9879\u65F6\u5173\u95ED\u52A8\u4F5C\u9762\u677F",-1),G=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"javascript"},[s(`
`),a("span",{class:"hljs-keyword"},"import"),s(" { ref } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`
`),a("span",{class:"hljs-keyword"},"import"),s(" { Snackbar } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'@varlet/ui'"),s(`

`),a("span",{class:"hljs-keyword"},"const"),s(" show = ref("),a("span",{class:"hljs-literal"},"false"),s(`)
`),a("span",{class:"hljs-keyword"},"const"),s(` actions = ref([
  {
    `),a("span",{class:"hljs-attr"},"name"),s(": "),a("span",{class:"hljs-string"},"'Item 01'"),s(`,
    `),a("span",{class:"hljs-attr"},"icon"),s(": "),a("span",{class:"hljs-string"},"'account-circle'"),s(`,
  },
  {
    `),a("span",{class:"hljs-attr"},"name"),s(": "),a("span",{class:"hljs-string"},"'Item 02'"),s(`,
    `),a("span",{class:"hljs-attr"},"icon"),s(": "),a("span",{class:"hljs-string"},"'notebook'"),s(`,
  },
  {
    `),a("span",{class:"hljs-attr"},"name"),s(": "),a("span",{class:"hljs-string"},"'Item 03'"),s(`,
    `),a("span",{class:"hljs-attr"},"icon"),s(": "),a("span",{class:"hljs-string"},"'wifi'"),s(`,
  },
])

`),a("span",{class:"hljs-keyword"},"const"),s(" handleSelect = "),a("span",{class:"hljs-function"},[s("("),a("span",{class:"hljs-params"},"action"),s(") =>")]),s(` {
  Snackbar(`),a("span",{class:"hljs-string"},[s("`"),a("span",{class:"hljs-subst"},"${action.name}"),s("`")]),s(`)
}
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-button"),s(),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"warning"'),s(),a("span",{class:"hljs-attr"},"block"),s(" @"),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},'"show = true"'),s(">")]),s("\u7981\u7528\u70B9\u51FB\u9009\u9879\u65F6\u5173\u95ED\u52A8\u4F5C\u9762\u677F"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-button"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-action-sheet"),s(` 
    `),a("span",{class:"hljs-attr"},":close-on-click-action"),s("="),a("span",{class:"hljs-string"},'"false"'),s(`
    `),a("span",{class:"hljs-attr"},":actions"),s("="),a("span",{class:"hljs-string"},'"actions"'),s(` 
    `),a("span",{class:"hljs-attr"},"v-model:show"),s("="),a("span",{class:"hljs-string"},'"show"'),s(` 
    @`),a("span",{class:"hljs-attr"},"select"),s("="),a("span",{class:"hljs-string"},'"handleSelect"'),s(`
  />`)]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),H={class:"card"},J=a("h3",null,"\u81EA\u5B9A\u4E49\u9009\u9879\u6837\u5F0F",-1),K=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"javascript"},[s(`
`),a("span",{class:"hljs-keyword"},"import"),s(" { ref } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`
`),a("span",{class:"hljs-keyword"},"import"),s(" { Snackbar } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'@varlet/ui'"),s(`

`),a("span",{class:"hljs-keyword"},"const"),s(" show = ref("),a("span",{class:"hljs-literal"},"false"),s(`)
`),a("span",{class:"hljs-keyword"},"const"),s(` actions = ref([
  {
    `),a("span",{class:"hljs-attr"},"name"),s(": "),a("span",{class:"hljs-string"},"'Item 01'"),s(`,
    `),a("span",{class:"hljs-attr"},"icon"),s(": "),a("span",{class:"hljs-string"},"'account-circle'"),s(`,
    `),a("span",{class:"hljs-attr"},"color"),s(": "),a("span",{class:"hljs-string"},"'#00c48f'"),s(`,
  },
  {
    `),a("span",{class:"hljs-attr"},"name"),s(": "),a("span",{class:"hljs-string"},"'Item 02'"),s(`,
    `),a("span",{class:"hljs-attr"},"icon"),s(": "),a("span",{class:"hljs-string"},"'notebook'"),s(`,
    `),a("span",{class:"hljs-attr"},"color"),s(": "),a("span",{class:"hljs-string"},"'#ff9800'"),s(`,
  },
  {
    `),a("span",{class:"hljs-attr"},"name"),s(": "),a("span",{class:"hljs-string"},"'Item 03'"),s(`,
    `),a("span",{class:"hljs-attr"},"icon"),s(": "),a("span",{class:"hljs-string"},"'wifi'"),s(`,
    `),a("span",{class:"hljs-attr"},"color"),s(": "),a("span",{class:"hljs-string"},"'#00afef'"),s(`,
  },
])

`),a("span",{class:"hljs-keyword"},"const"),s(" handleSelect = "),a("span",{class:"hljs-function"},[s("("),a("span",{class:"hljs-params"},"action"),s(") =>")]),s(` {
  Snackbar(`),a("span",{class:"hljs-string"},[s("`"),a("span",{class:"hljs-subst"},"${action.name}"),s("`")]),s(`)
}
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-button"),s(),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"warning"'),s(),a("span",{class:"hljs-attr"},"block"),s(" @"),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},'"show = true"'),s(">")]),s("\u81EA\u5B9A\u4E49\u9009\u9879\u6837\u5F0F"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-button"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-action-sheet"),s(` 
    `),a("span",{class:"hljs-attr"},":actions"),s("="),a("span",{class:"hljs-string"},'"actions"'),s(` 
    `),a("span",{class:"hljs-attr"},"v-model:show"),s("="),a("span",{class:"hljs-string"},'"show"'),s(` 
    @`),a("span",{class:"hljs-attr"},"select"),s("="),a("span",{class:"hljs-string"},'"handleSelect"'),s(`
  />`)]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),L=c('<h2>API</h2><div class="card"><h3>\u5C5E\u6027</h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td><code>v-model:show</code></td><td>\u662F\u5426\u663E\u793A\u52A8\u4F5C\u9762\u677F</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>actions</code></td><td>\u9009\u9879\u5217\u8868</td><td><em>Actions</em></td><td><code>[]</code></td></tr><tr><td><code>title</code></td><td>\u52A8\u4F5C\u9762\u677F\u6807\u9898</td><td><em>string</em></td><td><code>\u8BF7\u9009\u62E9</code></td></tr><tr><td><code>overlay</code></td><td>\u662F\u5426\u663E\u793A\u906E\u7F69\u5C42</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>overlay-class</code></td><td>\u81EA\u5B9A\u4E49\u906E\u7F69\u5C42\u7684 class</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>overlay-style</code></td><td>\u81EA\u5B9A\u4E49\u906E\u7F69\u5C42\u7684 style</td><td><em>object</em></td><td><code>-</code></td></tr><tr><td><code>lock-scroll</code></td><td>\u662F\u5426\u7981\u6B62\u6EDA\u52A8\u7A7F\u900F\uFF0C\u7981\u6B62\u65F6\u6EDA\u52A8\u5F39\u51FA\u5C42\u4E0D\u4F1A\u5F15\u53D1 body \u7684\u6EDA\u52A8</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>close-on-click-action</code></td><td>\u662F\u5426\u70B9\u51FB\u9009\u9879\u65F6\u5173\u95ED\u52A8\u4F5C\u9762\u677F</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>close-on-click-overlay</code></td><td>\u662F\u5426\u70B9\u51FB\u906E\u7F69\u5C42\u5173\u95ED\u52A8\u4F5C\u9762\u677F</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>teleport</code></td><td>\u52A8\u4F5C\u9762\u677F\u6302\u8F7D\u7684\u4F4D\u7F6E</td><td><em>TeleportProps[\u2018to\u2019]</em></td><td><code>-</code></td></tr></tbody></table></div><div class="card"><h3>\u4E8B\u4EF6</h3><table><thead><tr><th>\u4E8B\u4EF6\u540D</th><th>\u8BF4\u660E</th><th>\u53C2\u6570</th></tr></thead><tbody><tr><td><code>select</code></td><td>\u9009\u62E9\u9009\u9879\u65F6\u51FA\u53D1</td><td><code>action: Action</code></td></tr><tr><td><code>open</code></td><td>\u6253\u5F00\u52A8\u4F5C\u9762\u677F\u65F6\u89E6\u53D1</td><td><code>-</code></td></tr><tr><td><code>opened</code></td><td>\u6253\u5F00\u52A8\u4F5C\u9762\u677F\u52A8\u753B\u7ED3\u675F\u65F6\u89E6\u53D1</td><td><code>-</code></td></tr><tr><td><code>close</code></td><td>\u5173\u95ED\u52A8\u4F5C\u9762\u677F\u65F6\u89E6\u53D1</td><td><code>-</code></td></tr><tr><td><code>closed</code></td><td>\u5173\u95ED\u52A8\u4F5C\u9762\u677F\u52A8\u753B\u7ED3\u675F\u65F6\u89E6\u53D1</td><td><code>-</code></td></tr><tr><td><code>click-overlay</code></td><td>\u70B9\u51FB\u906E\u7F69\u5C42\u65F6\u89E6\u53D1</td><td><code>-</code></td></tr></tbody></table></div><div class="card"><h3>ActionSheet Options</h3><h4>\u51FD\u6570\u5F0F\u8C03\u7528\u65F6\u4F20\u5165\u7684\u9009\u9879</h4><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td><code>title</code></td><td>\u52A8\u4F5C\u9762\u677F\u6807\u9898</td><td><em>string</em></td><td><code>\u8BF7\u9009\u62E9</code></td></tr><tr><td><code>overlay</code></td><td>\u662F\u5426\u663E\u793A\u906E\u7F69\u5C42</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>overlayClass</code></td><td>\u81EA\u5B9A\u4E49\u906E\u7F69\u5C42\u7684 class</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>overlayStyle</code></td><td>\u81EA\u5B9A\u4E49\u906E\u7F69\u5C42\u7684 style</td><td><em>object</em></td><td><code>-</code></td></tr><tr><td><code>lockScroll</code></td><td>\u662F\u5426\u7981\u6B62\u6EDA\u52A8\u7A7F\u900F\uFF0C\u7981\u6B62\u65F6\u6EDA\u52A8\u5F39\u51FA\u5C42\u4E0D\u4F1A\u5F15\u53D1 body \u7684\u6EDA\u52A8</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>closeOnClickOverlay</code></td><td>\u662F\u5426\u70B9\u51FB\u906E\u7F69\u5C42\u5173\u95ED\u5F39\u51FA\u5C42</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>onOpen</code></td><td>\u52A8\u4F5C\u9762\u677F\u5F00\u542F\u56DE\u8C03</td><td><em>() =&gt; void</em></td><td><code>-</code></td></tr><tr><td><code>onOpened</code></td><td>\u52A8\u4F5C\u9762\u677F\u5F00\u542F\u52A8\u753B\u7ED3\u675F\u56DE\u8C03</td><td><em>() =&gt; void</em></td><td><code>-</code></td></tr><tr><td><code>onClose</code></td><td>\u52A8\u4F5C\u9762\u677F\u5173\u95ED\u56DE\u8C03</td><td><em>() =&gt; void</em></td><td><code>-</code></td></tr><tr><td><code>onClosed</code></td><td>\u52A8\u4F5C\u9762\u677F\u5173\u95ED\u52A8\u753B\u7ED3\u675F\u56DE\u8C03</td><td><em>() =&gt; void</em></td><td><code>-</code></td></tr><tr><td><code>onSelect</code></td><td>\u9009\u9879\u9009\u62E9\u65F6\u56DE\u8C03</td><td><em>(action: Action) =&gt; void</em></td><td><code>-</code></td></tr><tr><td><code>onClickOverlay</code></td><td>\u906E\u7F69\u5C42\u70B9\u51FB\u56DE\u8C03</td><td><em>() =&gt; void</em></td><td><code>-</code></td></tr></tbody></table></div><div class="card"><h3>ActionSheet Action</h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td><code>name</code></td><td>\u9009\u9879\u540D\u79F0</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>color</code></td><td>\u9009\u9879\u6587\u5B57\u989C\u8272</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>icon</code></td><td>icon \u56FE\u6807\uFF0C\u652F\u6301\u7F51\u7EDC\u56FE\u7247\u5730\u5740</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>iconSize</code></td><td>\u56FE\u6807\u5C3A\u5BF8</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>className</code></td><td>\u9009\u9879\u9644\u52A0\u7C7B\u540D</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>disabled</code></td><td>\u662F\u5426\u7981\u7528\u9009\u9879</td><td><em>boolean</em></td><td><code>false</code></td></tr></tbody></table></div><div class="card"><h3>\u63D2\u69FD</h3><table><thead><tr><th>\u63D2\u69FD\u540D</th><th>\u8BF4\u660E</th><th>\u53C2\u6570</th></tr></thead><tbody><tr><td><code>actions</code></td><td>\u9009\u9879\u5217\u8868</td><td><code>-</code></td></tr><tr><td><code>title</code></td><td>\u52A8\u4F5C\u9762\u677F\u6807\u9898</td><td><code>-</code></td></tr></tbody></table></div><div class="card"><h3>\u6837\u5F0F\u53D8\u91CF</h3><p>\u4EE5\u4E0B\u4E3A\u7EC4\u4EF6\u4F7F\u7528\u7684 css \u53D8\u91CF\uFF0C\u53EF\u4EE5\u4F7F\u7528 <a href="#/zh-CN/style-provider">StyleProvider \u7EC4\u4EF6</a> \u8FDB\u884C\u6837\u5F0F\u5B9A\u5236</p><table><thead><tr><th>\u53D8\u91CF\u540D</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td><code>--action-sheet-border-radius</code></td><td><code>2px</code></td></tr><tr><td><code>--action-sheet-background</code></td><td><code>#fff</code></td></tr><tr><td><code>--action-sheet-title-color</code></td><td><code>#888</code></td></tr><tr><td><code>--action-sheet-title-padding</code></td><td><code>10px 16px</code></td></tr><tr><td><code>--action-sheet-title-font-size</code></td><td><code>14px</code></td></tr><tr><td><code>--action-sheet-action-item-height</code></td><td><code>48px</code></td></tr><tr><td><code>--action-sheet-action-item-padding</code></td><td><code>0px 18px</code></td></tr><tr><td><code>--action-sheet-action-item-color</code></td><td><code>#333</code></td></tr><tr><td><code>--action-sheet-action-item-disabled-color</code></td><td><code>var(--color-text-disabled)</code></td></tr><tr><td><code>--action-sheet-icon-margin</code></td><td><code>0 0 20px 0</code></td></tr><tr><td><code>--action-sheet-icon-size</code></td><td><code>24px</code></td></tr></tbody></table></div>',7);function Q(R,U,W,X,Z,ss){const t=o("var-site-code-example");return d(),r("div",p,[i,a("div",j,[m,n(t,null,{default:l(()=>[g]),_:1})]),a("div",u,[k,n(t,null,{default:l(()=>[b]),_:1})]),a("div",y,[w,v,n(t,null,{default:l(()=>[_]),_:1})]),a("div",f,[S,I,n(t,null,{default:l(()=>[A]),_:1})]),a("div",x,[$,C,n(t,null,{default:l(()=>[O]),_:1})]),N,a("div",P,[z,n(t,null,{default:l(()=>[B]),_:1})]),a("div",V,[T,n(t,null,{default:l(()=>[q]),_:1})]),a("div",E,[M,n(t,null,{default:l(()=>[Y]),_:1})]),a("div",D,[F,n(t,null,{default:l(()=>[G]),_:1})]),a("div",H,[J,n(t,null,{default:l(()=>[K]),_:1})]),L])}const ts=e(h,[["render",Q]]);export{ts as default};
