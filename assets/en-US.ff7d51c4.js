import{_ as e,p as o,f as d,h as r,M as a,q as n,S as l,at as c,P as s}from"./vue-router.esm-bundler.786782d7.js";const h={components:{}},p={class:"varlet-site-doc"},i=c('<h1>ActionSheet</h1><div class="card"><h3>Intro</h3><p>An action sheet pops up to give the user the ability to select options. <code>ActionSheet</code> Functional and component use methods are provided, and there is no essential difference between the two effects and parameters. The function returns a <code>Promise</code>\uFF0Con selection return <code>action</code>\uFF0CClick modal close to return <code>close</code>.</p></div><h2>Functional</h2>',3),j={class:"card"},m=a("h3",null,"Basic Use",-1),g=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"javascript"},[s(`
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
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-button"),s(),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"primary"'),s(),a("span",{class:"hljs-attr"},"block"),s(" @"),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},'"createBasic"'),s(">")]),s("Basic Use"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-button"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),u={class:"card"},k=a("h3",null,"Modify Title",-1),y=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"javascript"},[s(`
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
    `),a("span",{class:"hljs-attr"},"title"),s(": "),a("span",{class:"hljs-string"},"'Choose whichever you like'"),s(`
  })
  
  action !== `),a("span",{class:"hljs-string"},"'close'"),s(" && Snackbar("),a("span",{class:"hljs-string"},[s("`"),a("span",{class:"hljs-subst"},"${action.name}"),s("`")]),s(`)
}
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-button"),s(),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"primary"'),s(),a("span",{class:"hljs-attr"},"block"),s(" @"),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},'"handleSelect"'),s(">")]),s("Modify Title"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-button"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),b={class:"card"},v=a("h3",null,"Action Disabled",-1),w=a("p",null,[s("The option is passed "),a("code",null,"disabled"),s(" to leave the action in the disabled state")],-1),f=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"javascript"},[s(`
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
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-button"),s(),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"primary"'),s(),a("span",{class:"hljs-attr"},"block"),s(" @"),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},'"handleSelect"'),s(">")]),s("Action Disabled"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-button"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),_={class:"card"},S=a("h3",null,"Disable Close On Click Action",-1),A=a("p",null,[s("Passing in "),a("code",null,"CloseOnClickAction"),s(" disallows the action of "),a("code",null,"ActionSheet"),s(" closing automatically when the option is selected. The user can select the action multiple times. Because "),a("code",null,"Promise"),s(" is only resolved once, it is recommended to use "),a("code",null,"onSelect"),s(" to listen for the action of the user")],-1),I=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"javascript"},[s(`
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
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-button"),s(),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"primary"'),s(),a("span",{class:"hljs-attr"},"block"),s(" @"),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},'"handleSelect"'),s(">")]),s("Disable Close On Click Action"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-button"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),C={class:"card"},D=a("h3",null,"Custom Action Styles",-1),T=a("p",null,[s("Options provide parameters to configure the style. See the "),a("code",null,"Action"),s(" data structure for options")],-1),x=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"javascript"},[s(`
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
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-button"),s(),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"primary"'),s(),a("span",{class:"hljs-attr"},"block"),s(" @"),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},'"handleSelect"'),s(">")]),s("Custom Action Styles"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-button"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),O=a("h2",null,"Component Call",-1),$={class:"card"},P=a("h3",null,"Basic Usage",-1),B=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"javascript"},[s(`
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
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-button"),s(),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"warning"'),s(),a("span",{class:"hljs-attr"},"block"),s(" @"),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},'"show = true"'),s(">")]),s("Basic Usage"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-button"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-action-sheet"),s(` 
    `),a("span",{class:"hljs-attr"},":actions"),s("="),a("span",{class:"hljs-string"},'"actions"'),s(`
    `),a("span",{class:"hljs-attr"},"v-model:show"),s("="),a("span",{class:"hljs-string"},'"show"'),s(`
    @`),a("span",{class:"hljs-attr"},"select"),s("="),a("span",{class:"hljs-string"},'"handleSelect"'),s(`
  />`)]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),W={class:"card"},N=a("h3",null,"Modify Title",-1),U=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"javascript"},[s(`
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
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-button"),s(),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"warning"'),s(),a("span",{class:"hljs-attr"},"block"),s(" @"),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},'"show = true"'),s(">")]),s("Modify Title"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-button"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-action-sheet"),s(` 
    `),a("span",{class:"hljs-attr"},"title"),s("="),a("span",{class:"hljs-string"},'"Choose whichever you like"'),s(` 
    `),a("span",{class:"hljs-attr"},":actions"),s("="),a("span",{class:"hljs-string"},'"actions"'),s(`
    `),a("span",{class:"hljs-attr"},"v-model:show"),s("="),a("span",{class:"hljs-string"},'"show"'),s(`
    @`),a("span",{class:"hljs-attr"},"select"),s("="),a("span",{class:"hljs-string"},'"handleSelect"'),s(`
  />`)]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),V={class:"card"},z=a("h3",null,"Action Disabled",-1),M=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"javascript"},[s(`
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
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-button"),s(),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"warning"'),s(),a("span",{class:"hljs-attr"},"block"),s(" @"),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},'"show = true"'),s(">")]),s("Action Disabled"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-button"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-action-sheet"),s(` 
    `),a("span",{class:"hljs-attr"},":actions"),s("="),a("span",{class:"hljs-string"},'"actions"'),s(`
    `),a("span",{class:"hljs-attr"},"v-model:show"),s("="),a("span",{class:"hljs-string"},'"show"'),s(`
    @`),a("span",{class:"hljs-attr"},"select"),s("="),a("span",{class:"hljs-string"},'"handleSelect"'),s(`
  />`)]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),E={class:"card"},F=a("h3",null,"Disable close on click action",-1),q=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"javascript"},[s(`
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
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-button"),s(),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"warning"'),s(),a("span",{class:"hljs-attr"},"block"),s(" @"),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},'"show = true"'),s(">")]),s("Disable close on click action"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-button"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-action-sheet"),s(` 
    `),a("span",{class:"hljs-attr"},":close-on-click-action"),s("="),a("span",{class:"hljs-string"},'"false"'),s(`
    `),a("span",{class:"hljs-attr"},":actions"),s("="),a("span",{class:"hljs-string"},'"actions"'),s(` 
    `),a("span",{class:"hljs-attr"},"v-model:show"),s("="),a("span",{class:"hljs-string"},'"show"'),s(` 
    @`),a("span",{class:"hljs-attr"},"select"),s("="),a("span",{class:"hljs-string"},'"handleSelect"'),s(`
  />`)]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),H={class:"card"},Y=a("h3",null,"Custom Action Styles",-1),G=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"javascript"},[s(`
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
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-button"),s(),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"warning"'),s(),a("span",{class:"hljs-attr"},"block"),s(" @"),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},'"show = true"'),s(">")]),s("Custom Action Styles"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-button"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-action-sheet"),s(` 
    `),a("span",{class:"hljs-attr"},":actions"),s("="),a("span",{class:"hljs-string"},'"actions"'),s(` 
    `),a("span",{class:"hljs-attr"},"v-model:show"),s("="),a("span",{class:"hljs-string"},'"show"'),s(` 
    @`),a("span",{class:"hljs-attr"},"select"),s("="),a("span",{class:"hljs-string"},'"handleSelect"'),s(`
  />`)]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),J=c('<h2>API</h2><div class="card"><h3>Props</h3><table><thead><tr><th>Prop</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>v-model:show</code></td><td>Whether to display the action sheet</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>actions</code></td><td>Action list</td><td><em>Actions</em></td><td><code>[]</code></td></tr><tr><td><code>title</code></td><td>Action sheet title</td><td><em>string</em></td><td><code>Select One</code></td></tr><tr><td><code>overlay</code></td><td>Whether to display the overlay</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>overlay-class</code></td><td>Custom overlay class</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>overlay-style</code></td><td>Custom overlay style</td><td><em>object</em></td><td><code>-</code></td></tr><tr><td><code>lock-scroll</code></td><td>Whether to disable scrolling penetration, scrolling the Dialog when disabled will not cause the body to scroll</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>close-on-click-action</code></td><td>Whether to close the actions sheet when clicking action</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>close-on-click-overlay</code></td><td>Whether to click the overlay to close the action sheet</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>teleport</code></td><td>The location of the action sheet to mount</td><td><em>TeleportProps[\u2018to\u2019]</em></td><td><code>-</code></td></tr></tbody></table></div><div class="card"><h3>Events</h3><table><thead><tr><th>Event</th><th>Description</th><th>Arguments</th></tr></thead><tbody><tr><td><code>select</code></td><td>Triggered when the action is click</td><td><code>action: Action</code></td></tr><tr><td><code>open</code></td><td>Triggered when the action sheet is open</td><td><code>-</code></td></tr><tr><td><code>opened</code></td><td>Triggered when the action sheet open-animation ends</td><td><code>-</code></td></tr><tr><td><code>close</code></td><td>Triggered when the action sheet is close</td><td><code>-</code></td></tr><tr><td><code>closed</code></td><td>Triggered when the action sheet close-animation ends</td><td><code>-</code></td></tr><tr><td><code>click-overlay</code></td><td>Triggered when you click on overlay</td><td><code>-</code></td></tr></tbody></table></div><div class="card"><h3>ActionSheet Options</h3><h4>Options passed in for a functional call</h4><table><thead><tr><th>Option</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>title</code></td><td>Action sheet title</td><td><em>string</em></td><td><code>Select One</code></td></tr><tr><td><code>overlay</code></td><td>Whether to display the overlay</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>overlayClass</code></td><td>Custom overlay class</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>overlayStyle</code></td><td>Custom overlay style</td><td><em>object</em></td><td><code>-</code></td></tr><tr><td><code>lockScroll</code></td><td>Whether to disable scrolling penetration, scrolling the action sheet when disabled will not cause the body to scroll</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>closeOnClickOverlay</code></td><td>Whether to click the overlay to close the action sheet</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>onOpen</code></td><td>Action sheet open callback</td><td><em>() =&gt; void</em></td><td><code>-</code></td></tr><tr><td><code>onOpened</code></td><td>Action sheet open-animation ends callback</td><td><em>() =&gt; void</em></td><td><code>-</code></td></tr><tr><td><code>onClose</code></td><td>Action sheet close callback</td><td><em>() =&gt; void</em></td><td><code>-</code></td></tr><tr><td><code>onClosed</code></td><td>Action sheet close-animation ends callback</td><td><em>() =&gt; void</em></td><td><code>-</code></td></tr><tr><td><code>onSelect</code></td><td>Action sheet click action callback</td><td><em>(action: Action) =&gt; void</em></td><td><code>-</code></td></tr><tr><td><code>onClickOverlay</code></td><td>Click overlay callback</td><td><em>() =&gt; void</em></td><td><code>-</code></td></tr></tbody></table></div><div class="card"><h3>ActionSheet Action</h3><table><thead><tr><th>Prop</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>name</code></td><td>Action name</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>color</code></td><td>Action text color</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>icon</code></td><td>Icon\uFF0Csupport network image address</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>iconSize</code></td><td>Icon size</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>className</code></td><td>Class name</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>disabled</code></td><td>Disable or not option</td><td><em>boolean</em></td><td><code>false</code></td></tr></tbody></table></div><div class="card"><h3>Slots</h3><table><thead><tr><th>Name</th><th>Description</th><th>SlotProps</th></tr></thead><tbody><tr><td><code>actions</code></td><td>Action list</td><td><code>-</code></td></tr><tr><td><code>title</code></td><td>Action sheet title</td><td><code>-</code></td></tr></tbody></table></div><div class="card"><h3>Style Variables</h3><p>Here are the CSS variables used by the component, Styles can be customized using <a href="#/en-US/style-provider">StyleProvider</a></p><table><thead><tr><th>Variable</th><th>Default</th></tr></thead><tbody><tr><td><code>--action-sheet-border-radius</code></td><td><code>2px</code></td></tr><tr><td><code>--action-sheet-background</code></td><td><code>#fff</code></td></tr><tr><td><code>--action-sheet-title-color</code></td><td><code>#888</code></td></tr><tr><td><code>--action-sheet-title-padding</code></td><td><code>10px 16px</code></td></tr><tr><td><code>--action-sheet-title-font-size</code></td><td><code>14px</code></td></tr><tr><td><code>--action-sheet-action-item-height</code></td><td><code>48px</code></td></tr><tr><td><code>--action-sheet-action-item-padding</code></td><td><code>0px 18px</code></td></tr><tr><td><code>--action-sheet-action-item-color</code></td><td><code>#333</code></td></tr><tr><td><code>--action-sheet-action-item-disabled-color</code></td><td><code>var(--color-text-disabled)</code></td></tr><tr><td><code>--action-sheet-icon-margin</code></td><td><code>0 0 20px 0</code></td></tr><tr><td><code>--action-sheet-icon-size</code></td><td><code>24px</code></td></tr></tbody></table></div>',7);function K(L,Q,R,X,Z,ss){const t=o("var-site-code-example");return d(),r("div",p,[i,a("div",j,[m,n(t,null,{default:l(()=>[g]),_:1})]),a("div",u,[k,n(t,null,{default:l(()=>[y]),_:1})]),a("div",b,[v,w,n(t,null,{default:l(()=>[f]),_:1})]),a("div",_,[S,A,n(t,null,{default:l(()=>[I]),_:1})]),a("div",C,[D,T,n(t,null,{default:l(()=>[x]),_:1})]),O,a("div",$,[P,n(t,null,{default:l(()=>[B]),_:1})]),a("div",W,[N,n(t,null,{default:l(()=>[U]),_:1})]),a("div",V,[z,n(t,null,{default:l(()=>[M]),_:1})]),a("div",E,[F,n(t,null,{default:l(()=>[q]),_:1})]),a("div",H,[Y,n(t,null,{default:l(()=>[G]),_:1})]),J])}const ts=e(h,[["render",K]]);export{ts as default};
