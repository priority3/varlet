import{_ as c,p as e,f as d,h,M as a,q as t,S as n,P as s,at as p}from"./vue-router.esm-bundler.786782d7.js";const r={components:{}},o={class:"varlet-site-doc"},j=a("h1",null,"\u83DC\u5355",-1),m=a("div",{class:"card"},[a("h3",null,"\u4ECB\u7ECD"),a("p",null,"\u5F53\u5143\u7D20\u70B9\u51FB\u65F6\u663E\u793A\u4E00\u4E2A\u83DC\u5355\uFF0C\u901A\u8FC7\u63A7\u5236\u5BF9\u9F50\u65B9\u5F0F\u548C\u504F\u79FB\u91CF\u6539\u53D8\u83DC\u5355\u7684\u663E\u793A\u4F4D\u7F6E\u3002")],-1),i={class:"card"},g=a("h3",null,"\u57FA\u672C\u4F7F\u7528",-1),v=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-menu"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-button"),s(),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"primary"'),s(">")]),s("\u57FA\u672C\u4F7F\u7528"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-button"),s(">")]),s(`
    
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(" #"),a("span",{class:"hljs-attr"},"menu"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-cell"),s(">")]),s("\u83DC\u5355\u9879"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-cell"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-cell"),s(">")]),s("\u83DC\u5355\u9879"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-cell"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-cell"),s(">")]),s("\u83DC\u5355\u9879"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-cell"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-menu"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),u={class:"card"},_=a("h3",null,"\u5F39\u51FA\u4F4D\u7F6E",-1),b=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"javascript"},[s(`
`),a("span",{class:"hljs-keyword"},"import"),s(" { ref } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`

`),a("span",{class:"hljs-keyword"},"const"),s(" placement = ref("),a("span",{class:"hljs-string"},"'cover-top-start'"),s(`)
`),a("span",{class:"hljs-keyword"},"const"),s(` placementOptions = [
  `),a("span",{class:"hljs-string"},"'top'"),s(`,
  `),a("span",{class:"hljs-string"},"'top-start'"),s(`,
  `),a("span",{class:"hljs-string"},"'top-end'"),s(`,
  `),a("span",{class:"hljs-string"},"'bottom'"),s(`,
  `),a("span",{class:"hljs-string"},"'bottom-start'"),s(`,
  `),a("span",{class:"hljs-string"},"'bottom-end'"),s(`,
  `),a("span",{class:"hljs-string"},"'right'"),s(`,
  `),a("span",{class:"hljs-string"},"'right-start'"),s(`,
  `),a("span",{class:"hljs-string"},"'right-end'"),s(`,
  `),a("span",{class:"hljs-string"},"'left'"),s(`,
  `),a("span",{class:"hljs-string"},"'left-start'"),s(`,
  `),a("span",{class:"hljs-string"},"'left-end'"),s(`,
  `),a("span",{class:"hljs-string"},"'cover-top'"),s(`,
  `),a("span",{class:"hljs-string"},"'cover-top-start'"),s(`,
  `),a("span",{class:"hljs-string"},"'cover-top-end'"),s(`,
  `),a("span",{class:"hljs-string"},"'cover-bottom'"),s(`,
  `),a("span",{class:"hljs-string"},"'cover-bottom-start'"),s(`,
  `),a("span",{class:"hljs-string"},"'cover-bottom-end'"),s(`,
  `),a("span",{class:"hljs-string"},"'cover-left'"),s(`,
  `),a("span",{class:"hljs-string"},"'cover-right'"),s(`,
]
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-select"),s(),a("span",{class:"hljs-attr"},":hint"),s("="),a("span",{class:"hljs-string"},'"false"'),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"placement"'),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-option"),s(` 
      `),a("span",{class:"hljs-attr"},"v-for"),s("="),a("span",{class:"hljs-string"},'"(item, index) in placementOptions"'),s(` 
      `),a("span",{class:"hljs-attr"},":key"),s("="),a("span",{class:"hljs-string"},'"index"'),s(`
      `),a("span",{class:"hljs-attr"},":label"),s("="),a("span",{class:"hljs-string"},'"item"'),s(` 
    />`)]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-select"),s(">")]),s(`
  
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"div"),s(),a("span",{class:"hljs-attr"},"class"),s("="),a("span",{class:"hljs-string"},'"placement-container"'),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-menu"),s(),a("span",{class:"hljs-attr"},":placement"),s("="),a("span",{class:"hljs-string"},'"placement"'),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-button"),s(),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"primary"'),s(">")]),s(`
        `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-icon"),s(),a("span",{class:"hljs-attr"},"name"),s("="),a("span",{class:"hljs-string"},'"star"'),s(" />")]),s(`
      `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-button"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(" #"),a("span",{class:"hljs-attr"},"menu"),s(">")]),s(`
        `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-cell"),s(">")]),s("\u83DC\u5355\u9879"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-cell"),s(">")]),s(`
        `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-cell"),s(">")]),s("\u83DC\u5355\u9879"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-cell"),s(">")]),s(`
        `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-cell"),s(">")]),s("\u83DC\u5355\u9879"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-cell"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-menu"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"div"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"style"),s(">")]),a("span",{class:"css"},[s(`
`),a("span",{class:"hljs-selector-class"},".placement-container"),s(` {
  `),a("span",{class:"hljs-attribute"},"height"),s(": "),a("span",{class:"hljs-number"},"250px"),s(`;
  `),a("span",{class:"hljs-attribute"},"display"),s(`: flex;
  `),a("span",{class:"hljs-attribute"},"justify-content"),s(`: center;
  `),a("span",{class:"hljs-attribute"},"align-items"),s(`: center;
}
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"style"),s(">")]),s(`
`)])],-1),f={class:"card"},y=a("h3",null,"\u504F\u79FB\u91CF",-1),k=a("p",null,[s("\u53EF\u4EE5\u7528 "),a("code",null,"offset-x"),s(" \u548C "),a("code",null,"offset-y"),s(" \u8BBE\u7F6E Menu \u5F39\u51FA\u7684\u504F\u79FB\u91CF")],-1),w=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-menu"),s(),a("span",{class:"hljs-attr"},"offset-x"),s("="),a("span",{class:"hljs-string"},'"36px"'),s(),a("span",{class:"hljs-attr"},"offset-y"),s("="),a("span",{class:"hljs-string"},'"18px"'),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-button"),s(),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"primary"'),s(">")]),s("\u504F\u79FB\u91CF"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-button"),s(">")]),s(`
    
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(" #"),a("span",{class:"hljs-attr"},"menu"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-cell"),s(">")]),s("\u83DC\u5355\u9879"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-cell"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-cell"),s(">")]),s("\u83DC\u5355\u9879"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-cell"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-cell"),s(">")]),s("\u83DC\u5355\u9879"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-cell"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-menu"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),x={class:"card"},M=a("h3",null,"\u89E6\u53D1\u65B9\u5F0F",-1),S=a("p",null,[s("\u901A\u8FC7 "),a("code",null,"trigger"),s(" \u6539\u53D8\u83DC\u5355\u663E\u793A\u7684\u89E6\u53D1\u65B9\u5F0F\uFF0C\u53EF\u9009\u503C\u4E3A "),a("code",null,"click"),s(" \u548C "),a("code",null,"hover")],-1),N=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-menu"),s(),a("span",{class:"hljs-attr"},"trigger"),s("="),a("span",{class:"hljs-string"},'"hover"'),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-button"),s(),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"primary"'),s(">")]),s("\u89E6\u53D1\u65B9\u5F0F"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-button"),s(">")]),s(`
    
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(" #"),a("span",{class:"hljs-attr"},"menu"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-cell"),s(">")]),s("\u83DC\u5355\u9879"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-cell"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-cell"),s(">")]),s("\u83DC\u5355\u9879"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-cell"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-cell"),s(">")]),s("\u83DC\u5355\u9879"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-cell"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-menu"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),P={class:"card"},C=a("h3",null,"\u6CE8\u518C\u4E8B\u4EF6",-1),V=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"javascript"},[s(`
`),a("span",{class:"hljs-keyword"},"import"),s(" { Snackbar } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'@varlet/ui'"),s(`

`),a("span",{class:"hljs-keyword"},"const"),s(" open = "),a("span",{class:"hljs-function"},"() =>"),s(" Snackbar.info("),a("span",{class:"hljs-string"},"'open'"),s(`)
`),a("span",{class:"hljs-keyword"},"const"),s(" opened = "),a("span",{class:"hljs-function"},"() =>"),s(" Snackbar.info("),a("span",{class:"hljs-string"},"'opened'"),s(`)
`),a("span",{class:"hljs-keyword"},"const"),s(" close = "),a("span",{class:"hljs-function"},"() =>"),s(" Snackbar.info("),a("span",{class:"hljs-string"},"'close'"),s(`)
`),a("span",{class:"hljs-keyword"},"const"),s(" closed = "),a("span",{class:"hljs-function"},"() =>"),s(" Snackbar.info("),a("span",{class:"hljs-string"},"'closed'"),s(`)
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-menu"),s(`
    @`),a("span",{class:"hljs-attr"},"open"),s("="),a("span",{class:"hljs-string"},'"open"'),s(`
    @`),a("span",{class:"hljs-attr"},"opened"),s("="),a("span",{class:"hljs-string"},'"opened"'),s(`
    @`),a("span",{class:"hljs-attr"},"close"),s("="),a("span",{class:"hljs-string"},'"close"'),s(`
    @`),a("span",{class:"hljs-attr"},"closed"),s("="),a("span",{class:"hljs-string"},'"closed"'),s(`
  >`)]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-button"),s(),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"primary"'),s(">")]),s("\u6CE8\u518C\u4E8B\u4EF6"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-button"),s(">")]),s(`
    
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(" #"),a("span",{class:"hljs-attr"},"menu"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-cell"),s(">")]),s("\u83DC\u5355\u9879"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-cell"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-cell"),s(">")]),s("\u83DC\u5355\u9879"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-cell"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-cell"),s(">")]),s("\u83DC\u5355\u9879"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-cell"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-menu"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),$={class:"card"},z=a("h3",null,"\u7981\u7528",-1),B=a("p",null,[s("\u5728 "),a("code",null,"disabled"),s(" \u72B6\u6001\u4E0B\uFF0C\u83DC\u5355\u5C06\u4E0D\u518D\u88AB\u6253\u5F00\u3002")],-1),O=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-menu"),s(),a("span",{class:"hljs-attr"},"disabled"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-button"),s(),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"primary"'),s(">")]),s("\u7981\u7528"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-button"),s(">")]),s(`
    
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(" #"),a("span",{class:"hljs-attr"},"menu"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-cell"),s(">")]),s("\u83DC\u5355\u9879"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-cell"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-cell"),s(">")]),s("\u83DC\u5355\u9879"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-cell"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-cell"),s(">")]),s("\u83DC\u5355\u9879"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-cell"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-menu"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),T={class:"card"},q=a("h3",null,"\u53CC\u5411\u7ED1\u5B9A",-1),A=a("p",null,[s("\u901A\u8FC7 "),a("code",null,"v-model:show"),s(" \u8FDB\u884C\u53CC\u5411\u7ED1\u5B9A\u63A7\u5236\u83DC\u5355\u7684\u663E\u793A\u548C\u9690\u85CF")],-1),E=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"javascript"},[s(`
`),a("span",{class:"hljs-keyword"},"import"),s(" { ref } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`

`),a("span",{class:"hljs-keyword"},"const"),s(" show = ref("),a("span",{class:"hljs-literal"},"false"),s(`)
`),a("span",{class:"hljs-keyword"},"const"),s(" closeMenu = "),a("span",{class:"hljs-function"},"() =>"),s(" { show.value = "),a("span",{class:"hljs-literal"},"false"),s(` }
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-menu"),s(),a("span",{class:"hljs-attr"},"v-model:show"),s("="),a("span",{class:"hljs-string"},'"show"'),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-button"),s(),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"primary"'),s(">")]),s("\u53CC\u5411\u7ED1\u5B9A"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-button"),s(">")]),s(`
    
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(" #"),a("span",{class:"hljs-attr"},"menu"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-cell"),s(" @"),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},'"closeMenu"'),s(">")]),s("\u83DC\u5355\u9879"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-cell"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-cell"),s(" @"),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},'"closeMenu"'),s(">")]),s("\u83DC\u5355\u9879"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-cell"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-cell"),s(" @"),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},'"closeMenu"'),s(">")]),s("\u83DC\u5355\u9879"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-cell"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-menu"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),I=p('<div class="card"><h3>\u6CE8\u610F</h3><p>Menu \u662F\u4E00\u4E2A <code>inline-block</code> \u5143\u7D20\uFF0C\u901A\u8FC7\u9ED8\u8BA4\u63D2\u69FD\u70B9\u51FB\u65F6\u663E\u793A\u83DC\u5355\uFF0C\u5982\u679C\u5E0C\u671B Menu \u72EC\u5360\u4E00\u884C\u63A8\u8350\u5305\u88F9\u4E00\u4E2A <code>block</code> \u5143\u7D20\u3002</p></div><h2>API</h2><div class="card"><h3>\u5C5E\u6027</h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td><code>v-model:show</code></td><td>\u662F\u5426\u663E\u793A\u83DC\u5355</td><td><em>string</em></td><td><code>default</code></td></tr><tr><td><code>placement</code></td><td>\u83DC\u5355\u5F39\u51FA\u4F4D\u7F6E</td><td><em>Placement</em></td><td><code>cover-top-start</code></td></tr><tr><td><code>offset-x</code></td><td>x \u8F74\u504F\u79FB\u91CF\uFF0C \u76F8\u5BF9\u4E8E\u83DC\u5355\u5BF9\u9F50\u540E\u7684\u4F4D\u7F6E</td><td><em>number | string</em></td><td><code>0</code></td></tr><tr><td><code>offset-y</code></td><td>y \u8F74\u504F\u79FB\u91CF\uFF0C \u76F8\u5BF9\u4E8E\u83DC\u5355\u5BF9\u9F50\u540E\u7684\u4F4D\u7F6E</td><td><em>number | string</em></td><td><code>0</code></td></tr><tr><td><code>teleport</code></td><td>\u83DC\u5355\u6302\u8F7D\u7684\u4F4D\u7F6E</td><td><em>TeleportProps[\u2018to\u2019]</em></td><td><code>body</code></td></tr><tr><td><code>disabled</code></td><td>\u662F\u5426\u7981\u7528\u83DC\u5355</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>trigger</code></td><td>\u83DC\u5355\u89E6\u53D1\u65B9\u5F0F\uFF0C\u53EF\u9009\u503C\u4E3A <code>click</code> <code>hover</code>, <code>click</code> \u4E3A\u70B9\u51FB\u65F6\u89E6\u53D1, <code>hover</code> \u4E3A\u60AC\u505C\u65F6\u89E6\u53D1</td><td><em>string</em></td><td><code>click</code></td></tr><tr><td><code>default-style</code></td><td>\u662F\u5426\u542F\u7528\u9ED8\u8BA4\u6837\u5F0F</td><td><em>boolean</em></td><td><code>true</code></td></tr></tbody></table></div><div class="card"><h3>Placement</h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td><code>top</code></td><td>\u9876\u90E8\u4E2D\u5FC3\u4F4D\u7F6E</td></tr><tr><td><code>top-start</code></td><td>\u9876\u90E8\u5DE6\u4FA7\u4F4D\u7F6E</td></tr><tr><td><code>top-end</code></td><td>\u9876\u90E8\u53F3\u4FA7\u4F4D\u7F6E</td></tr><tr><td><code>bottom</code></td><td>\u5E95\u90E8\u4E2D\u5FC3\u4F4D\u7F6E</td></tr><tr><td><code>bottom-start</code></td><td>\u5E95\u90E8\u5DE6\u4FA7\u4F4D\u7F6E</td></tr><tr><td><code>bottom-end</code></td><td>\u5E95\u90E8\u53F3\u4FA7\u4F4D\u7F6E</td></tr><tr><td><code>right</code></td><td>\u53F3\u4FA7\u4E2D\u5FC3\u4F4D\u7F6E</td></tr><tr><td><code>right-start</code></td><td>\u53F3\u4FA7\u4E0A\u65B9\u4F4D\u7F6E</td></tr><tr><td><code>right-end</code></td><td>\u53F3\u4FA7\u4E0B\u65B9\u4F4D\u7F6E</td></tr><tr><td><code>left</code></td><td>\u5DE6\u4FA7\u4E2D\u5FC3\u4F4D\u7F6E</td></tr><tr><td><code>left-start</code></td><td>\u5DE6\u4FA7\u4E0A\u65B9\u4F4D\u7F6E</td></tr><tr><td><code>left-end</code></td><td>\u5DE6\u4FA7\u4E0B\u65B9\u4F4D\u7F6E</td></tr><tr><td><code>cover-top</code></td><td>\u9876\u90E8\u4E2D\u5FC3\u4F4D\u7F6E, \u8986\u76D6\u89E6\u53D1\u5668</td></tr><tr><td><code>cover-top-start</code></td><td>\u9876\u90E8\u5DE6\u4FA7\u4F4D\u7F6E, \u8986\u76D6\u89E6\u53D1\u5668</td></tr><tr><td><code>cover-top-end</code></td><td>\u9876\u90E8\u53F3\u4FA7\u4F4D\u7F6E, \u8986\u76D6\u89E6\u53D1\u5668</td></tr><tr><td><code>cover-bottom</code></td><td>\u5E95\u90E8\u4E2D\u5FC3\u4F4D\u7F6E, \u8986\u76D6\u89E6\u53D1\u5668</td></tr><tr><td><code>cover-bottom-start</code></td><td>\u5E95\u90E8\u5DE6\u4FA7\u4F4D\u7F6E, \u8986\u76D6\u89E6\u53D1\u5668</td></tr><tr><td><code>cover-bottom-end</code></td><td>\u5E95\u90E8\u53F3\u4FA7\u4F4D\u7F6E, \u8986\u76D6\u89E6\u53D1\u5668</td></tr><tr><td><code>cover-left</code></td><td>\u5DE6\u4FA7\u4F4D\u7F6E, \u8986\u76D6\u89E6\u53D1\u5668</td></tr><tr><td><code>cover-right</code></td><td>\u53F3\u4FA7\u4F4D\u7F6E, \u8986\u76D6\u89E6\u53D1\u5668</td></tr></tbody></table></div><div class="card"><h3>\u65B9\u6CD5</h3><table><thead><tr><th>\u65B9\u6CD5\u540D</th><th>\u8BF4\u660E</th><th>\u53C2\u6570</th><th>\u8FD4\u56DE\u503C</th></tr></thead><tbody><tr><td><code>open</code></td><td>\u6253\u5F00 Menu</td><td><code>-</code></td><td><code>-</code></td></tr><tr><td><code>close</code></td><td>\u5173\u95ED Menu</td><td><code>-</code></td><td><code>-</code></td></tr><tr><td><code>resize</code></td><td>Menu \u9ED8\u8BA4\u63D2\u69FD\u5143\u7D20\u4EA7\u751F\u4F4D\u7F6E\u5927\u5C0F\u53D8\u5316\u65F6\u53EF\u4EE5\u8C03\u7528\u6B64\u65B9\u6CD5\u8FDB\u884C\u91CD\u7ED8</td><td><code>-</code></td><td><code>-</code></td></tr></tbody></table></div><div class="card"><h3>\u4E8B\u4EF6</h3><table><thead><tr><th>\u4E8B\u4EF6\u540D</th><th>\u8BF4\u660E</th><th>\u53C2\u6570</th></tr></thead><tbody><tr><td><code>open</code></td><td>\u6253\u5F00\u83DC\u5355\u65F6\u89E6\u53D1</td><td><code>-</code></td></tr><tr><td><code>opened</code></td><td>\u6253\u5F00\u83DC\u5355\u52A8\u753B\u7ED3\u675F\u65F6\u89E6\u53D1</td><td><code>-</code></td></tr><tr><td><code>close</code></td><td>\u5173\u95ED\u83DC\u5355\u65F6\u89E6\u53D1</td><td><code>-</code></td></tr><tr><td><code>closed</code></td><td>\u5173\u95ED\u83DC\u5355\u52A8\u753B\u7ED3\u675F\u65F6\u89E6\u53D1</td><td><code>-</code></td></tr></tbody></table></div><div class="card"><h3>\u63D2\u69FD</h3><table><thead><tr><th>\u63D2\u69FD\u540D</th><th>\u8BF4\u660E</th><th>\u53C2\u6570</th></tr></thead><tbody><tr><td><code>default</code></td><td>\u83DC\u5355\u5173\u8054\u7684\u89E6\u53D1\u5143\u7D20</td><td><code>-</code></td></tr><tr><td><code>menu</code></td><td>\u83DC\u5355\u5185\u5BB9</td><td><code>-</code></td></tr></tbody></table></div><div class="card"><h3>\u6837\u5F0F\u53D8\u91CF</h3><p>\u4EE5\u4E0B\u4E3A\u7EC4\u4EF6\u4F7F\u7528\u7684 css \u53D8\u91CF\uFF0C\u53EF\u4EE5\u4F7F\u7528 <a href="#/zh-CN/style-provider">StyleProvider \u7EC4\u4EF6</a> \u8FDB\u884C\u6837\u5F0F\u5B9A\u5236</p><table><thead><tr><th>\u53D8\u91CF\u540D</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td><code>--menu-background-color</code></td><td><code>#fff</code></td></tr></tbody></table></div>',8);function D(F,G,H,J,K,L){const l=e("var-site-code-example");return d(),h("div",o,[j,m,a("div",i,[g,t(l,null,{default:n(()=>[v]),_:1})]),a("div",u,[_,t(l,null,{default:n(()=>[b]),_:1})]),a("div",f,[y,k,t(l,null,{default:n(()=>[w]),_:1})]),a("div",x,[M,S,t(l,null,{default:n(()=>[N]),_:1})]),a("div",P,[C,t(l,null,{default:n(()=>[V]),_:1})]),a("div",$,[z,B,t(l,null,{default:n(()=>[O]),_:1})]),a("div",T,[q,A,t(l,null,{default:n(()=>[E]),_:1})]),I])}const R=c(r,[["render",D]]);export{R as default};
