import{_ as c,p as e,f as d,h as o,M as a,q as n,S as l,P as s,at as r}from"./vue-router.esm-bundler.786782d7.js";const p={components:{}},h={class:"varlet-site-doc"},i=a("h1",null,"Snackbar",-1),j=a("div",{class:"card"},[a("h3",null,"Intro"),a("p",null,"Used to display a quick message to a user.")],-1),m=a("h2",null,"Component Call",-1),g={class:"card"},b=a("h3",null,"Basic Usage",-1),u=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"javascript"},[s(`
`),a("span",{class:"hljs-keyword"},"import"),s(" { ref } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`

`),a("span",{class:"hljs-keyword"},"const"),s(" show = ref("),a("span",{class:"hljs-literal"},"false"),s(`)
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-button"),s(),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"primary"'),s(),a("span",{class:"hljs-attr"},"block"),s(" @"),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},'"show = !show"'),s(">")]),s("Basic Usage"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-button"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-snackbar"),s(),a("span",{class:"hljs-attr"},"v-model:show"),s("="),a("span",{class:"hljs-string"},'"show"'),s(">")]),s(" Hello, I'm a snackbar "),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-snackbar"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),k={class:"card"},v=a("h3",null,"Multi-Line",-1),_=a("p",null,[s("Use "),a("code",null,"vertical"),s(" prop to change arrangement of "),a("code",null,"snackbar"),s(". Use "),a("code",null,"Custom slot"),s(" create action of right.")],-1),y=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"javascript"},[s(`
`),a("span",{class:"hljs-keyword"},"import"),s(" { ref } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`

`),a("span",{class:"hljs-keyword"},"const"),s(" show = ref("),a("span",{class:"hljs-literal"},"false"),s(`)
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-snackbar"),s(),a("span",{class:"hljs-attr"},"v-model:show"),s("="),a("span",{class:"hljs-string"},'"show"'),s(),a("span",{class:"hljs-attr"},":vertical"),s("="),a("span",{class:"hljs-string"},'"true"'),s(">")]),s(`
    Hello, I'm a snackbar
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(" #"),a("span",{class:"hljs-attr"},"action"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-button"),s(),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"primary"'),s(" @"),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},'"show = !show"'),s(">")]),s("Close"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-button"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-snackbar"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-button"),s(),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"primary"'),s(),a("span",{class:"hljs-attr"},"block"),s(" @"),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},'"show = true"'),s(">")]),s("Multi-Line"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-button"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),f={class:"card"},w=a("h3",null,"Bottom Display",-1),S=a("p",null,[s("Use "),a("code",null,"position"),s(" prop to change position of "),a("code",null,"snackbar"),s(".")],-1),D=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"javascript"},[s(`
`),a("span",{class:"hljs-keyword"},"import"),s(" { ref } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`

`),a("span",{class:"hljs-keyword"},"const"),s(" show = ref("),a("span",{class:"hljs-literal"},"false"),s(`)
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-snackbar"),s(),a("span",{class:"hljs-attr"},"v-model:show"),s("="),a("span",{class:"hljs-string"},'"show"'),s(),a("span",{class:"hljs-attr"},"position"),s("="),a("span",{class:"hljs-string"},'"bottom"'),s(">")]),s(`
    Hello, I'm a snackbar
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(" #"),a("span",{class:"hljs-attr"},"action"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-button"),s(),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"primary"'),s(" @"),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},'"show = false"'),s(">")]),s("Close"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-button"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-snackbar"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-button"),s(),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"primary"'),s(),a("span",{class:"hljs-attr"},"block"),s(" @"),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},'"show = true"'),s(">")]),s("Bottom Display"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-button"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),C={class:"card"},T=a("h3",null,"Display Duration",-1),L=a("p",null,[s("Use "),a("code",null,"duration"),s(" prop to change display duration of "),a("code",null,"snackbar"),s(".")],-1),x=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"javascript"},[s(`
`),a("span",{class:"hljs-keyword"},"import"),s(" { ref } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`

`),a("span",{class:"hljs-keyword"},"const"),s(" show = ref("),a("span",{class:"hljs-literal"},"false"),s(`)
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-snackbar"),s(),a("span",{class:"hljs-attr"},"v-model:show"),s("="),a("span",{class:"hljs-string"},'"show"'),s(),a("span",{class:"hljs-attr"},":duration"),s("="),a("span",{class:"hljs-string"},'"10000"'),s(">")]),s(`
    Hello, I'm a snackbar
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-snackbar"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-button"),s(),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"primary"'),s(),a("span",{class:"hljs-attr"},"block"),s(" @"),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},'"show = true"'),s(">")]),s(`
    Display Duration
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-button"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),U={class:"card"},B=a("h3",null,"Forbid Click",-1),I=a("p",null,[s("Use "),a("code",null,"forbid-click"),s(" prop to control whether penetrating clicks are forbidden.")],-1),M=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"javascript"},[s(`
`),a("span",{class:"hljs-keyword"},"import"),s(" { ref } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`

`),a("span",{class:"hljs-keyword"},"const"),s(" show = ref("),a("span",{class:"hljs-literal"},"false"),s(`)
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-snackbar"),s(),a("span",{class:"hljs-attr"},"v-model:show"),s("="),a("span",{class:"hljs-string"},'"show"'),s(),a("span",{class:"hljs-attr"},":forbid-click"),s("="),a("span",{class:"hljs-string"},'"true"'),s(">")]),s(`
    Hello, I'm a snackbar
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-snackbar"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-button"),s(),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"primary"'),s(),a("span",{class:"hljs-attr"},"block"),s(" @"),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},'"show = true"'),s(">")]),s(`
    Display Duration
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-button"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),H=a("h2",null,"Function Call",-1),O={class:"card"},z=a("h3",null,"Basic Usage",-1),W=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"javascript"},[s(`
`),a("span",{class:"hljs-keyword"},"import"),s(" { Snackbar } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'@varlet/ui'"),s(`

`),a("span",{class:"hljs-keyword"},"const"),s(" createSnackbar = "),a("span",{class:"hljs-function"},"() =>"),s(` {
  Snackbar(`),a("span",{class:"hljs-string"},`"Hello, I'm a snackbar"`),s(`)
}
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-button"),s(),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"warning"'),s(),a("span",{class:"hljs-attr"},"block"),s(" @"),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},'"createSnackbar()"'),s(">")]),s("Basic Usage"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-button"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),P={class:"card"},V=a("h3",null,"Display Duration",-1),N=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"javascript"},[s(`
`),a("span",{class:"hljs-keyword"},"import"),s(" { Snackbar } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'@varlet/ui'"),s(`

`),a("span",{class:"hljs-keyword"},"const"),s(" createSnackbar = "),a("span",{class:"hljs-function"},"() =>"),s(` {
  Snackbar({
    `),a("span",{class:"hljs-attr"},"content"),s(": "),a("span",{class:"hljs-string"},`"Hello, I'm a snackbar"`),s(`,
    `),a("span",{class:"hljs-attr"},"duration"),s(": "),a("span",{class:"hljs-number"},"1000"),s(`
  })
}
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-button"),s(),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"warning"'),s(),a("span",{class:"hljs-attr"},"block"),s(" @"),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},'"createSnackbar()"'),s(">")]),s("Display Duration"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-button"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),$={class:"card"},E=a("h3",null,"Bottom Display",-1),q=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"javascript"},[s(`
`),a("span",{class:"hljs-keyword"},"import"),s(" { Snackbar } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'@varlet/ui'"),s(`

`),a("span",{class:"hljs-keyword"},"const"),s(" createSnackbar = "),a("span",{class:"hljs-function"},"() =>"),s(` {
  Snackbar({
    `),a("span",{class:"hljs-attr"},"content"),s(": "),a("span",{class:"hljs-string"},`"Hello, I'm a snackbar"`),s(`,
    `),a("span",{class:"hljs-attr"},"position"),s(": "),a("span",{class:"hljs-string"},"'bottom'"),s(`
  })
}
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-button"),s(),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"warning"'),s(),a("span",{class:"hljs-attr"},"block"),s(" @"),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},'"createSnackbar()"'),s(">")]),s("Bottom Display"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-button"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),A={class:"card"},F=a("h3",null,"Snackbar Type",-1),R=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"javascript"},[s(`
`),a("span",{class:"hljs-keyword"},"import"),s(" { Snackbar } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'@varlet/ui'"),s(`

`),a("span",{class:"hljs-keyword"},"const"),s(" createSnackbar = "),a("span",{class:"hljs-function"},[s("("),a("span",{class:"hljs-params"},"type"),s(") =>")]),s(` {
  Snackbar[type](`),a("span",{class:"hljs-string"},`"Hello, I'm a snackbar"`),s(`)
  `),a("span",{class:"hljs-keyword"},"if"),s(" (type === "),a("span",{class:"hljs-string"},"'loading'"),s(`) {
    `),a("span",{class:"hljs-built_in"},"setTimeout"),s("("),a("span",{class:"hljs-function"},"() =>"),s(` {
      Snackbar.success(`),a("span",{class:"hljs-string"},'"loading success"'),s(`)
    }, `),a("span",{class:"hljs-number"},"2000"),s(`)
  }
}
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-space"),s(),a("span",{class:"hljs-attr"},"direction"),s("="),a("span",{class:"hljs-string"},'"column"'),s(),a("span",{class:"hljs-attr"},"size"),s("="),a("span",{class:"hljs-string"},'"large"'),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-button"),s(` 
      `),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"success"'),s(` 
      `),a("span",{class:"hljs-attr"},"block"),s(` 
      @`),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},`"createSnackbar('success')"`),s(`
    >`)]),s(`
      success
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-button"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-button"),s(` 
      `),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"warning"'),s(` 
      `),a("span",{class:"hljs-attr"},"block"),s(` 
      @`),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},`"createSnackbar('warning')"`),s(`
    >`)]),s(`
      warning
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-button"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-button"),s(` 
      `),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"info"'),s(` 
      `),a("span",{class:"hljs-attr"},"block"),s(` 
      @`),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},`"createSnackbar('info')"`),s(`
    >`)]),s(`
      info
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-button"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-button"),s(` 
      `),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"danger"'),s(` 
      `),a("span",{class:"hljs-attr"},"block"),s(` 
      @`),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},`"createSnackbar('error')"`),s(`
    >`)]),s(`
      error
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-button"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-button"),s(` 
      `),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"primary"'),s(` 
      `),a("span",{class:"hljs-attr"},"block"),s(` 
      @`),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},`"createSnackbar('loading')"`),s(`
    >`)]),s(`
      loading
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-button"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-space"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),G={class:"card"},J=a("h3",null,"Multiple",-1),K=a("p",null,"When using functional calls, Snackbar use singleton mode by default, if you need to pop multiple Snackbar at the same time, you can refer to the following example:",-1),Q=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"javascript"},[s(`
`),a("span",{class:"hljs-keyword"},"import"),s(" { Snackbar } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'@varlet/ui'"),s(`

`),a("span",{class:"hljs-keyword"},"const"),s(" openMultiple = "),a("span",{class:"hljs-function"},"() =>"),s(` {
  Snackbar.allowMultiple(`),a("span",{class:"hljs-literal"},"true"),s(`)

  `),a("span",{class:"hljs-keyword"},"const"),s(" snackbar1 = Snackbar("),a("span",{class:"hljs-string"},"'Snackbar 1'"),s(`);
  Snackbar.success(`),a("span",{class:"hljs-string"},"'Snackbar 2'"),s(`);

  `),a("span",{class:"hljs-built_in"},"setTimeout"),s("("),a("span",{class:"hljs-function"},"() =>"),s(` {
    snackbar1.clear()
  }, `),a("span",{class:"hljs-number"},"1000"),s(`)
}
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-button"),s(),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"primary"'),s(),a("span",{class:"hljs-attr"},"block"),s(" @"),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},'"openMultiple"'),s(">")]),s("Multiple"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-button"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),X=r('<h2>API</h2><div class="card"><h3>Props</h3><table><thead><tr><th>Prop</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>v-model:show</code></td><td>Whether to show <code>Snackbar</code></td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>type</code></td><td><code>Snackbar</code> type, Optional value is one of <code>success, warning, info, error, loading</code></td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>position</code></td><td><code>Snackbar</code> position, Optional value is one of <code>top, center, bottom</code></td><td><em>string</em></td><td><code>top</code></td></tr><tr><td><code>duration</code></td><td>Display duration</td><td><em>number</em></td><td><code>3000</code></td></tr><tr><td><code>content</code></td><td>Custom content</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>content-class</code></td><td>Class of custom content</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>vertical</code></td><td>Whether to use multi-line</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>loading-type</code></td><td>Loading type (see <code>Loading</code> component)</td><td><em>string</em></td><td><code>circle</code></td></tr><tr><td><code>loading-size</code></td><td>Loading size (see <code>Loading</code> component)</td><td><em>string</em></td><td><code>normal</code></td></tr><tr><td><code>loading-color</code></td><td>loading color (see <code>Loading</code> component)</td><td><em>string</em></td><td><code>current_color</code></td></tr><tr><td><code>loading-radius</code></td><td>Loading radius (see <code>Loading</code> component)</td><td><em>string | number</em></td><td><code>-</code></td></tr><tr><td><code>lock-scroll</code></td><td>Whether to disable rolling penetration</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>forbid-click</code></td><td>whether to penetrating clicks are forbidden</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>teleport</code></td><td>The location of the Snackbar to mount</td><td><em>TeleportProps[\u2018to\u2019]</em></td><td><code>body</code></td></tr></tbody></table></div><div class="card"><h3>Events</h3><table><thead><tr><th>Event</th><th>Description</th><th>arguments</th></tr></thead><tbody><tr><td><code>open</code></td><td>Triggered when the <code>Snackbar</code> is open</td><td><code>-</code></td></tr><tr><td><code>opened</code></td><td>Triggered when the <code>Snackbar</code> open-animation ends</td><td><code>-</code></td></tr><tr><td><code>close</code></td><td>Triggered when the <code>Snackbar</code> is close</td><td><code>-</code></td></tr><tr><td><code>closed</code></td><td>Triggered when the <code>Snackbar</code> close-animation ends</td><td><code>-</code></td></tr></tbody></table></div><div class="card"><h3>Slots</h3><table><thead><tr><th>Name</th><th>Description</th><th>SlotProps</th></tr></thead><tbody><tr><td><code>default</code></td><td><code>Snackbar</code> content message</td><td><code>-</code></td></tr><tr><td><code>action</code></td><td><code>Snackbar</code> action of right</td><td><code>-</code></td></tr></tbody></table></div><div class="card"><h3>Methods</h3><p>The <code>clear</code> method on the instance can close the current instance, and the <code>clear</code> method on the Snackbar can close all message bars.</p><table><thead><tr><th>Method</th><th>Description</th><th>Arguments</th><th>Return value</th></tr></thead><tbody><tr><td><code>Snackbar</code></td><td>Show snackbar</td><td><em>options | string</em></td><td><code>snackbar instance</code></td></tr><tr><td><code>Snackbar.success</code></td><td>Show success snackbar</td><td><em>options | string</em></td><td><code>snackbar instance</code></td></tr><tr><td><code>Snackbar.info</code></td><td>Show info snackbar</td><td><em>options | string</em></td><td><code>snackbar instance</code></td></tr><tr><td><code>Snackbar.warning</code></td><td>Show warning snackbar</td><td><em>options | string</em></td><td><code>snackbar instance</code></td></tr><tr><td><code>Snackbar.error</code></td><td>Show error snackbar</td><td><em>options | string</em></td><td><code>snackbar instance</code></td></tr><tr><td><code>Snackbar.loading</code></td><td>Show loading snackbar</td><td><em>options | string</em></td><td><code>snackbar instance</code></td></tr><tr><td><code>Snackbar.clear</code></td><td>Close snackbar</td><td><em>-</em></td><td><code>-</code></td></tr><tr><td><code>Snackbar.allowMultiple</code></td><td>Whether to allow multi instance patterns</td><td><em>boolean</em></td><td><code>-</code></td></tr></tbody></table></div><div class="card"><h3>Snackbar Options</h3><h4>Options passed in for a functional call</h4><table><thead><tr><th>Option</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>show</code></td><td>Whether to show <code>Snackbar</code></td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>type</code></td><td><code>Snackbar</code> type, Optional value is one of <code>success, warning, info, error, loading</code></td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>position</code></td><td><code>Snackbar</code> position, Optional value is one of <code>top, center, bottom</code></td><td><em>string</em></td><td><code>top</code></td></tr><tr><td><code>duration</code></td><td>Display duration (Need to be closed manually when the <code>type</code> prop is <code>loading</code>)</td><td><em>number</em></td><td><code>3000</code></td></tr><tr><td><code>content</code></td><td>Custom content</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>contentClass</code></td><td>Class of custom content</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>vertical</code></td><td>Whether to use multi-line</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>loadingType</code></td><td>Loading type (see <code>Loading</code> component)</td><td><em>string</em></td><td><code>circle</code></td></tr><tr><td><code>loadingSize</code></td><td>Loading size (see <code>Loading</code> component)</td><td><em>string</em></td><td><code>normal</code></td></tr><tr><td><code>loadingColor</code></td><td>Loading color (see <code>Loading</code> component)</td><td><em>string</em></td><td><code>currentColor</code></td></tr><tr><td><code>loadingRadius</code></td><td>Loading radius (see <code>Loading</code> component)</td><td><em>string | number</em></td><td><code>-</code></td></tr><tr><td><code>lockScroll</code></td><td>Whether to disable rolling penetration</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>forbidClick</code></td><td>whether to penetrating clicks are forbidden (Value is <code>true</code> when the <code>type</code> prop is <code>loading</code>)</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>onOpen</code></td><td>Triggered when the <code>Snackbar</code> is open</td><td><em>() =&gt; void</em></td><td><code>-</code></td></tr><tr><td><code>onOpened</code></td><td>Triggered when the <code>Snackbar</code> open-animation ends</td><td><em>() =&gt; void</em></td><td><code>-</code></td></tr><tr><td><code>onClose</code></td><td>Triggered when the <code>Snackbar</code> is close</td><td><em>() =&gt; void</em></td><td><code>-</code></td></tr><tr><td><code>onClosed</code></td><td>Triggered when the <code>Snackbar</code> close-animation ends</td><td><em>() =&gt; void</em></td><td><code>-</code></td></tr></tbody></table></div><div class="card"><h3>Style Variables</h3><p>Here are the CSS variables used by the component, Styles can be customized using <a href="#/en-US/style-provider">StyleProvider</a></p><table><thead><tr><th>Variable</th><th>Default</th></tr></thead><tbody><tr><td><code>--snackbar-width</code></td><td><code>256px</code></td></tr><tr><td><code>--snackbar-color</code></td><td><code>rgba(255, 255, 255, .87)</code></td></tr><tr><td><code>--snackbar-border-radius</code></td><td><code>4px</code></td></tr><tr><td><code>--snackbar-background</code></td><td><code>#333</code></td></tr><tr><td><code>--snackbar-font-size</code></td><td><code>var(--font-size-md)</code></td></tr><tr><td><code>--snackbar-margin</code></td><td><code>6px 24px</code></td></tr><tr><td><code>--snackbar-border-color</code></td><td><code>currentColor</code></td></tr><tr><td><code>--snackbar-success-background</code></td><td><code>var(--color-success)</code></td></tr><tr><td><code>--snackbar-info-background</code></td><td><code>var(--color-info)</code></td></tr><tr><td><code>--snackbar-error-background</code></td><td><code>var(--color-danger)</code></td></tr><tr><td><code>--snackbar-warning-background</code></td><td><code>var(--color-warning)</code></td></tr><tr><td><code>--snackbar-content-padding</code></td><td><code>14px 16px</code></td></tr><tr><td><code>--snackbar-action-margin</code></td><td><code>0 16px 0 0</code></td></tr></tbody></table></div>',7);function Y(Z,ss,as,ts,ns,ls){const t=e("var-site-code-example");return d(),o("div",h,[i,j,m,a("div",g,[b,n(t,null,{default:l(()=>[u]),_:1})]),a("div",k,[v,_,n(t,null,{default:l(()=>[y]),_:1})]),a("div",f,[w,S,n(t,null,{default:l(()=>[D]),_:1})]),a("div",C,[T,L,n(t,null,{default:l(()=>[x]),_:1})]),a("div",U,[B,I,n(t,null,{default:l(()=>[M]),_:1})]),H,a("div",O,[z,n(t,null,{default:l(()=>[W]),_:1})]),a("div",P,[V,n(t,null,{default:l(()=>[N]),_:1})]),a("div",$,[E,n(t,null,{default:l(()=>[q]),_:1})]),a("div",A,[F,n(t,null,{default:l(()=>[R]),_:1})]),a("div",G,[J,K,n(t,null,{default:l(()=>[Q]),_:1})]),X])}const es=c(p,[["render",Y]]);export{es as default};
