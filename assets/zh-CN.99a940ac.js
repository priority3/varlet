import{_ as d,p as n,f as c,h as r,M as a,q as l,S as e,P as s,at as o}from"./vue-router.esm-bundler.786782d7.js";const p={components:{}},h={class:"varlet-site-doc"},i=a("h1",null,"\u6587\u4EF6\u4E0A\u4F20",-1),j=a("div",{class:"card"},[a("h3",null,"\u4ECB\u7ECD"),a("p",null,[s("\u63D0\u4F9B\u4E86\u6587\u4EF6\u8BFB\u53D6\u3001\u56FE\u7247/\u89C6\u9891\u9884\u89C8\u80FD\u529B\u3002 \u901A\u8FC7\u76D1\u542C "),a("code",null,"after-read"),s(" \u4E8B\u4EF6\u83B7\u53D6\u6587\u4EF6\u4E0A\u4F20\u670D\u52A1\u5668\u3002")])],-1),g={class:"card"},m=a("h3",null,"\u57FA\u672C\u4F7F\u7528",-1),u=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"javascript"},[s(`
`),a("span",{class:"hljs-keyword"},"import"),s(" { ref } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`

`),a("span",{class:"hljs-keyword"},"const"),s(` files = ref([])
`),a("span",{class:"hljs-keyword"},"const"),s(" handleAfterRead = "),a("span",{class:"hljs-function"},[a("span",{class:"hljs-params"},"file"),s(" =>")]),s(),a("span",{class:"hljs-built_in"},"console"),s(`.log(file)
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-uploader"),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"files"'),s(" @"),a("span",{class:"hljs-attr"},"after-read"),s("="),a("span",{class:"hljs-string"},'"handleAfterRead"'),s("/>")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),v={class:"card"},f=a("h3",null,"\u6587\u4EF6\u9884\u89C8",-1),_=a("p",null,"\u901A\u8FC7\u5206\u6790\u6587\u4EF6\u7684 url \u540E\u7F00\u540D\u5224\u65AD\u6587\u4EF6\u7C7B\u578B\uFF0C\u652F\u6301\u56FE\u7247\u548C\u89C6\u9891\u9884\u89C8\u3002",-1),b=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"javascript"},[s(`
`),a("span",{class:"hljs-keyword"},"import"),s(" { ref } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`

`),a("span",{class:"hljs-keyword"},"const"),s(` files = ref([
  {
    `),a("span",{class:"hljs-attr"},"url"),s(": "),a("span",{class:"hljs-string"},"'https://varlet.gitee.io/varlet-ui/cat.jpg'"),s(`,
    `),a("span",{class:"hljs-attr"},"cover"),s(": "),a("span",{class:"hljs-string"},"'https://varlet.gitee.io/varlet-ui/cat.jpg'"),s(`
  },
  {
    `),a("span",{class:"hljs-attr"},"url"),s(": "),a("span",{class:"hljs-string"},"'https://www.runoob.com/try/demo_source/mov_bbb.mp4'"),s(`,
    `),a("span",{class:"hljs-attr"},"cover"),s(": "),a("span",{class:"hljs-string"},"'https://varlet.gitee.io/varlet-ui/cover.jpg'"),s(`
  }
])
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-uploader"),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"files"'),s("/>")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),y={class:"card"},w=a("h3",null,"\u4E0A\u4F20\u72B6\u6001",-1),k=a("p",null,[s("\u63D0\u4F9B\u4E86 "),a("code",null,"loading"),s("\u3001 "),a("code",null,"success"),s("\u3001 "),a("code",null,"error"),s(" \u4E09\u79CD\u4E0A\u4F20\u72B6\u6001\uFF0C\u5E76\u63D0\u4F9B\u4E86\u5DE5\u5177\u51FD\u6570\u5FEB\u901F\u83B7\u53D6\u5BF9\u5E94\u72B6\u6001\u7684\u6587\u4EF6\u3002")],-1),x=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"javascript"},[s(`
`),a("span",{class:"hljs-keyword"},"import"),s(" { ref } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`

`),a("span",{class:"hljs-keyword"},"const"),s(` files = ref([
  {
    `),a("span",{class:"hljs-attr"},"url"),s(": "),a("span",{class:"hljs-string"},"'https://varlet.gitee.io/varlet-ui/cat.jpg'"),s(`,
    `),a("span",{class:"hljs-attr"},"cover"),s(": "),a("span",{class:"hljs-string"},"'https://varlet.gitee.io/varlet-ui/cat.jpg'"),s(`,
    `),a("span",{class:"hljs-attr"},"state"),s(": "),a("span",{class:"hljs-string"},"'loading'"),s(`
  },
  {
    `),a("span",{class:"hljs-attr"},"url"),s(": "),a("span",{class:"hljs-string"},"'https://varlet.gitee.io/varlet-ui/cat.jpg'"),s(`,
    `),a("span",{class:"hljs-attr"},"cover"),s(": "),a("span",{class:"hljs-string"},"'https://varlet.gitee.io/varlet-ui/cat.jpg'"),s(`,
    `),a("span",{class:"hljs-attr"},"state"),s(": "),a("span",{class:"hljs-string"},"'success'"),s(`
  },
  {
    `),a("span",{class:"hljs-attr"},"url"),s(": "),a("span",{class:"hljs-string"},"'https://varlet.gitee.io/varlet-ui/cat.jpg'"),s(`,
    `),a("span",{class:"hljs-attr"},"cover"),s(": "),a("span",{class:"hljs-string"},"'https://varlet.gitee.io/varlet-ui/cat.jpg'"),s(`,
    `),a("span",{class:"hljs-attr"},"state"),s(": "),a("span",{class:"hljs-string"},"'error'"),s(`
  }
])

`),a("span",{class:"hljs-keyword"},"const"),s(" handleAfterRead = "),a("span",{class:"hljs-function"},[s("("),a("span",{class:"hljs-params"},"file"),s(") =>")]),s(` {
  file.state = `),a("span",{class:"hljs-string"},"'loading'"),s(`

  `),a("span",{class:"hljs-built_in"},"setTimeout"),s("("),a("span",{class:"hljs-function"},"() =>"),s(` {
    file.state = `),a("span",{class:"hljs-string"},"'success'"),s(`
  }, `),a("span",{class:"hljs-number"},"1000"),s(`)
}
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-uploader"),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"files"'),s(" @"),a("span",{class:"hljs-attr"},"after-read"),s("="),a("span",{class:"hljs-string"},'"handleAfterRead"'),s("/>")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),V={class:"card"},z=a("h3",null,"\u6587\u4EF6\u6570\u91CF\u9650\u5236",-1),F=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"javascript"},[s(`
`),a("span",{class:"hljs-keyword"},"import"),s(" { ref } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`

`),a("span",{class:"hljs-keyword"},"const"),s(` files = ref([])
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-uploader"),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"files"'),s(),a("span",{class:"hljs-attr"},":maxlength"),s("="),a("span",{class:"hljs-string"},'"1"'),s("/>")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),R={class:"card"},S=a("h3",null,"\u6587\u4EF6\u5927\u5C0F\u9650\u5236",-1),B=a("p",null,[s("\u8D85\u8FC7\u9650\u5236\u4F1A\u88AB\u963B\u6B62\u8BFB\u53D6\uFF0C\u53EF\u4EE5\u901A\u8FC7\u76D1\u542C "),a("code",null,"oversize"),s(" \u4E8B\u4EF6\u83B7\u53D6\u6587\u4EF6\u3002")],-1),A=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"javascript"},[s(`
`),a("span",{class:"hljs-keyword"},"import"),s(" { ref } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`
`),a("span",{class:"hljs-keyword"},"import"),s(" { Snackbar } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'@varlet/ui'"),s(`

`),a("span",{class:"hljs-keyword"},"const"),s(` files = ref([])

`),a("span",{class:"hljs-keyword"},"const"),s(" handleOversize = "),a("span",{class:"hljs-function"},"() =>"),s(` {
  Snackbar.warning(`),a("span",{class:"hljs-string"},"'\u6587\u4EF6\u5927\u5C0F\u8D85\u51FA\u9650\u5236'"),s(`)
}
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-uploader"),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"files"'),s(),a("span",{class:"hljs-attr"},":maxsize"),s("="),a("span",{class:"hljs-string"},'"1024"'),s(" @"),a("span",{class:"hljs-attr"},"oversize"),s("="),a("span",{class:"hljs-string"},'"handleOversize"'),s(" />")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),C={class:"card"},N=a("h3",null,"\u4E0A\u4F20\u9884\u5904\u7406",-1),E=a("p",null,[s("\u901A\u8FC7\u6CE8\u518C "),a("code",null,"before-read"),s(" \u4E8B\u4EF6\u5BF9\u6587\u4EF6\u8FDB\u884C\u64CD\u4F5C\uFF0C\u8FD4\u56DE\u5047\u503C\u963B\u6B62\u6587\u4EF6\u8BFB\u53D6\u3002")],-1),P=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"javascript"},[s(`
`),a("span",{class:"hljs-keyword"},"import"),s(" { ref } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`
`),a("span",{class:"hljs-keyword"},"import"),s(" { Snackbar } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'@varlet/ui'"),s(`

`),a("span",{class:"hljs-keyword"},"const"),s(` files = ref([])

`),a("span",{class:"hljs-keyword"},"const"),s(" handleBeforeRead = "),a("span",{class:"hljs-function"},[s("("),a("span",{class:"hljs-params"},"file"),s(") =>")]),s(` {
  `),a("span",{class:"hljs-keyword"},"if"),s(" (file.file.size <= "),a("span",{class:"hljs-number"},"1"),s(" * "),a("span",{class:"hljs-number"},"1024"),s(" * "),a("span",{class:"hljs-number"},"1024"),s(`) {
    Snackbar.success(`),a("span",{class:"hljs-string"},"'\u6587\u4EF6\u5C0F\u4E8E1M\uFF0C\u4E0A\u4F20\u6210\u529F'"),s(`)
    `),a("span",{class:"hljs-keyword"},"return"),s(),a("span",{class:"hljs-literal"},"true"),s(`
  } `),a("span",{class:"hljs-keyword"},"else"),s(` {
    Snackbar.warning(`),a("span",{class:"hljs-string"},"'\u6587\u4EF6\u5927\u4E8E1M\uFF0C\u4E0D\u80FD\u4E0A\u4F20'"),s(`)
    `),a("span",{class:"hljs-keyword"},"return"),s(),a("span",{class:"hljs-literal"},"false"),s(`
  }
}
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-uploader"),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"files"'),s(" @"),a("span",{class:"hljs-attr"},"before-read"),s("="),a("span",{class:"hljs-string"},'"handleBeforeRead"'),s("/>")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),$={class:"card"},M=a("h3",null,"\u7981\u7528",-1),T=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"javascript"},[s(`
`),a("span",{class:"hljs-keyword"},"import"),s(" { ref } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`

`),a("span",{class:"hljs-keyword"},"const"),s(` files = ref([])
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-uploader"),s(),a("span",{class:"hljs-attr"},"disabled"),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"files"'),s("/>")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),D={class:"card"},L=a("h3",null,"\u53EA\u8BFB",-1),O=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"javascript"},[s(`
`),a("span",{class:"hljs-keyword"},"import"),s(" { ref } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`

`),a("span",{class:"hljs-keyword"},"const"),s(` files = ref([])
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-uploader"),s(),a("span",{class:"hljs-attr"},"readonly"),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"files"'),s("/>")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),U={class:"card"},q=a("h3",null,"\u5220\u9664\u524D\u5904\u7406",-1),I=a("p",null,[s("\u5220\u9664\u6587\u4EF6\u4E4B\u524D\u4F1A\u89E6\u53D1 "),a("code",null,"before-remove"),s(" \u4E8B\u4EF6\uFF0C\u8FD4\u56DE\u5047\u503C\u963B\u6B62\u5220\u9664\u64CD\u4F5C\u3002")],-1),G=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"javascript"},[s(`
`),a("span",{class:"hljs-keyword"},"import"),s(" { ref } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`
`),a("span",{class:"hljs-keyword"},"import"),s(" { Dialog } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'@varlet/ui'"),s(`

`),a("span",{class:"hljs-keyword"},"const"),s(` files = ref([
  {
    `),a("span",{class:"hljs-attr"},"url"),s(": "),a("span",{class:"hljs-string"},"'https://varlet.gitee.io/varlet-ui/cat.jpg'"),s(`,
    `),a("span",{class:"hljs-attr"},"cover"),s(": "),a("span",{class:"hljs-string"},"'https://varlet.gitee.io/varlet-ui/cat.jpg'"),s(`
  }
])

`),a("span",{class:"hljs-keyword"},"const"),s(" handleBeforeRemove = "),a("span",{class:"hljs-keyword"},"async"),s(` () => {
  `),a("span",{class:"hljs-keyword"},"const"),s(" action = "),a("span",{class:"hljs-keyword"},"await"),s(` Dialog({
    `),a("span",{class:"hljs-attr"},"title"),s(": "),a("span",{class:"hljs-string"},"'\u662F\u5426\u5220\u9664?'"),s(`,
    `),a("span",{class:"hljs-attr"},"message"),s(": "),a("span",{class:"hljs-string"},"'\u5220\u9664\u540E\u65E0\u6CD5\u64A4\u56DE'"),s(`
  })

  `),a("span",{class:"hljs-keyword"},"return"),s(" action === "),a("span",{class:"hljs-string"},"'confirm'"),s(`
}
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-uploader"),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"files"'),s(" @"),a("span",{class:"hljs-attr"},"before-remove"),s("="),a("span",{class:"hljs-string"},'"handleBeforeRemove"'),s(" />")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),H={class:"card"},J=a("h3",null,"\u81EA\u5B9A\u4E49\u4E0A\u4F20\u6837\u5F0F",-1),K=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"javascript"},[s(`
`),a("span",{class:"hljs-keyword"},"import"),s(" { ref } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`

`),a("span",{class:"hljs-keyword"},"const"),s(` files = ref()
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-uploader"),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"files"'),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-button"),s(),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"primary"'),s(">")]),s("\u4E0A\u4F20"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-button"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-uploader"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),Q={class:"card"},W=a("h3",null,"\u5B57\u6BB5\u6821\u9A8C",-1),X=a("p",null,[s("\u901A\u8FC7\u4F20\u5165\u4E00\u4E2A\u6821\u9A8C\u5668\u6570\u7EC4\u53EF\u4EE5\u5BF9\u503C\u8FDB\u884C\u6821\u9A8C\uFF0C\u6821\u9A8C\u5668\u8FD4\u56DE "),a("code",null,"true"),s(" \u5219\u4E3A\u6821\u9A8C\u901A\u8FC7\u3002 \u4EE5\u5916\u7684\u503C\u5C06\u8F6C\u6362\u4E3A\u6587\u672C\u4F5C\u4E3A\u7528\u6237\u63D0\u793A\u3002 \u7B2C\u4E8C\u4E2A\u53C2\u6570\u662F\u4E00\u4E2A\u5DE5\u5177\u51FD\u6570\u96C6\u5408\uFF0C\u53EF\u4EE5\u5FEB\u901F\u83B7\u53D6\u7B26\u5408\u72B6\u6001\u7684\u6587\u4EF6\u96C6\u5408\u3002")],-1),Y=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"javascript"},[s(`
`),a("span",{class:"hljs-keyword"},"import"),s(" { ref } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`

`),a("span",{class:"hljs-keyword"},"const"),s(` files = ref([
  {
    `),a("span",{class:"hljs-attr"},"url"),s(": "),a("span",{class:"hljs-string"},"'https://varlet.gitee.io/varlet-ui/cat.jpg'"),s(`,
    `),a("span",{class:"hljs-attr"},"cover"),s(": "),a("span",{class:"hljs-string"},"'https://varlet.gitee.io/varlet-ui/cat.jpg'"),s(`,
    `),a("span",{class:"hljs-attr"},"state"),s(": "),a("span",{class:"hljs-string"},"'error'"),s(`,
  },
])
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-uploader"),s(`
    `),a("span",{class:"hljs-attr"},":rules"),s("="),a("span",{class:"hljs-string"},`"[(v, u) => u.getError().length === 0 || '\u5B58\u5728\u4E0A\u4F20\u5931\u8D25\u7684\u6587\u4EF6']"`),s(`
    `),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"files"'),s(`
  />`)]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),Z={class:"card"},ss=a("h3",null,"\u81EA\u5B9A\u4E49\u6E32\u67D3",-1),as=a("p",null,[s("\u901A\u8FC7 "),a("code",null,"hide-list"),s(" \u9690\u85CF\u7EC4\u4EF6\u7684\u6587\u4EF6\u5217\u8868\uFF0C\u81EA\u5B9A\u4E49\u6587\u4EF6\u5217\u8868\u7684\u6E32\u67D3\u903B\u8F91")],-1),ts=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"javascript"},[s(`
`),a("span",{class:"hljs-keyword"},"import"),s(" { ref } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`

`),a("span",{class:"hljs-keyword"},"const"),s(` files = ref([
  {
    `),a("span",{class:"hljs-attr"},"url"),s(": "),a("span",{class:"hljs-string"},"'https://varlet.gitee.io/varlet-ui/cat.jpg'"),s(`,
    `),a("span",{class:"hljs-attr"},"cover"),s(": "),a("span",{class:"hljs-string"},"'https://varlet.gitee.io/varlet-ui/cat.jpg'"),s(`,
    `),a("span",{class:"hljs-attr"},"state"),s(": "),a("span",{class:"hljs-string"},"'loading'"),s(`,
  },
  {
    `),a("span",{class:"hljs-attr"},"url"),s(": "),a("span",{class:"hljs-string"},"'https://varlet.gitee.io/varlet-ui/cat.jpg'"),s(`,
    `),a("span",{class:"hljs-attr"},"cover"),s(": "),a("span",{class:"hljs-string"},"'https://varlet.gitee.io/varlet-ui/cat.jpg'"),s(`,
    `),a("span",{class:"hljs-attr"},"state"),s(": "),a("span",{class:"hljs-string"},"'success'"),s(`,
  },
  {
    `),a("span",{class:"hljs-attr"},"url"),s(": "),a("span",{class:"hljs-string"},"'https://varlet.gitee.io/varlet-ui/cat.jpg'"),s(`,
    `),a("span",{class:"hljs-attr"},"cover"),s(": "),a("span",{class:"hljs-string"},"'https://varlet.gitee.io/varlet-ui/cat.jpg'"),s(`,
    `),a("span",{class:"hljs-attr"},"state"),s(": "),a("span",{class:"hljs-string"},"'error'"),s(`,
  },
])
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-space"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"img"),s(`
      `),a("span",{class:"hljs-attr"},"class"),s("="),a("span",{class:"hljs-string"},'"uploader-example-file"'),s(`
      `),a("span",{class:"hljs-attr"},"v-for"),s("="),a("span",{class:"hljs-string"},'"f in files"'),s(`
      `),a("span",{class:"hljs-attr"},":key"),s("="),a("span",{class:"hljs-string"},'"f.id"'),s(`
      `),a("span",{class:"hljs-attr"},":src"),s("="),a("span",{class:"hljs-string"},'"f.cover"'),s(`
    />`)]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-uploader"),s(),a("span",{class:"hljs-attr"},"hide-list"),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"files"'),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-button"),s(),a("span",{class:"hljs-attr"},"round"),s(),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"primary"'),s(">")]),s(`
        `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-icon"),s(),a("span",{class:"hljs-attr"},":size"),s("="),a("span",{class:"hljs-string"},'"28"'),s(),a("span",{class:"hljs-attr"},"name"),s("="),a("span",{class:"hljs-string"},'"upload"'),s(" />")]),s(`
      `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-button"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-uploader"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-space"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"style"),s(">")]),a("span",{class:"css"},[s(`
`),a("span",{class:"hljs-selector-class"},".uploader-example-file"),s(` {
  `),a("span",{class:"hljs-attribute"},"width"),s(": "),a("span",{class:"hljs-number"},"40px"),s(`;
  `),a("span",{class:"hljs-attribute"},"height"),s(": "),a("span",{class:"hljs-number"},"40px"),s(`;
  `),a("span",{class:"hljs-attribute"},"border-radius"),s(": "),a("span",{class:"hljs-number"},"50%"),s(`;
  `),a("span",{class:"hljs-attribute"},"font-size"),s(": "),a("span",{class:"hljs-number"},"12px"),s(`;
  `),a("span",{class:"hljs-attribute"},"object-fit"),s(`: cover;
}
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"style"),s(">")]),s(`
`)])],-1),ls=o('<h2>API</h2><div class="card"><h3>\u5C5E\u6027</h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td><code>v-model</code></td><td>\u6587\u4EF6\u5217\u8868</td><td><em>VarFile[]</em></td><td><code>[]</code></td></tr><tr><td><code>accept</code></td><td>\u63A5\u53D7\u7684\u6587\u4EF6\u7C7B\u578B\uFF0C\u4E0E\u539F\u751F\u5C5E\u6027\u4E00\u81F4</td><td><em>string</em></td><td><code>image/*</code></td></tr><tr><td><code>capture</code></td><td>\u83B7\u53D6\u6587\u4EF6\u65B9\u5F0F\uFF0C\u4E0E\u539F\u751F\u5C5E\u6027\u4E00\u81F4</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>multiple</code></td><td>\u662F\u5426\u591A\u9009\u6587\u4EF6</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>readonly</code></td><td>\u662F\u5426\u53EA\u8BFB</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>disabled</code></td><td>\u662F\u5426\u7981\u7528</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>removable</code></td><td>\u662F\u5426\u53EF\u4EE5\u5220\u9664</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>maxlength</code></td><td>\u6700\u5927\u6587\u4EF6\u4E2A\u6570</td><td><em>string | number</em></td><td><code>-</code></td></tr><tr><td><code>maxsize</code></td><td>\u6700\u5927\u6587\u4EF6\u5927\u5C0F</td><td><em>string | number</em></td><td><code>-</code></td></tr><tr><td><code>previewed</code></td><td>\u662F\u5426\u5141\u8BB8\u9884\u89C8</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>ripple</code></td><td>\u662F\u5426\u5F00\u542F\u6C34\u6CE2\u7EB9</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>hide-list</code></td><td>\u662F\u5426\u9690\u85CF\u6587\u4EF6\u5217\u8868</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>validate-trigger</code></td><td>\u89E6\u53D1\u9A8C\u8BC1\u7684\u65F6\u673A\uFF0C \u53EF\u9009\u503C\u4E3A <code>onChange</code> <code>onRemove</code></td><td><em>ValidateTriggers[]</em></td><td><code>[&#39;onChange&#39;, &#39;onRemove&#39;]</code></td></tr><tr><td><code>rules</code></td><td>\u9A8C\u8BC1\u89C4\u5219\uFF0C\u8FD4\u56DE <code>true</code> \u8868\u793A\u9A8C\u8BC1\u901A\u8FC7\uFF0C\u5176\u4F59\u7684\u503C\u5219\u8F6C\u6362\u4E3A\u6587\u672C\u4F5C\u4E3A\u7528\u6237\u63D0\u793A</td><td><em>Array&lt;(v: VarFile, u: VarFileUtils) =&gt; any&gt;</em></td><td><code>-</code></td></tr></tbody></table></div><div class="card"><h3>VarFile</h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td><code>file</code></td><td>\u539F\u751F\u6587\u4EF6</td><td><em>File</em></td><td><code>-</code></td></tr><tr><td><code>name</code></td><td>\u6587\u4EF6\u540D</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>url</code></td><td>\u6587\u4EF6\u5730\u5740</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>cover</code></td><td>\u5C01\u9762\u56FE</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>fit</code></td><td>\u5C01\u9762\u56FE\u586B\u5145\u6A21\u5F0F\uFF0C\u53EF\u9009\u503C\u4E3A <code>fill</code> <code>contain</code> <code>cover</code> <code>none</code> <code>scale-down</code></td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>state</code></td><td>\u6587\u4EF6\u4E0A\u4F20\u72B6\u6001\uFF0C\u53EF\u9009\u503C\u4E3A <code>loading</code> <code>success</code> <code>error</code></td><td><em>string</em></td><td><code>-</code></td></tr></tbody></table></div><div class="card"><h3>VarFileUtils</h3><table><thead><tr><th>\u65B9\u6CD5\u540D</th><th>\u8BF4\u660E</th><th>\u53C2\u6570</th><th>\u8FD4\u56DE\u503C</th></tr></thead><tbody><tr><td><code>getLoading</code></td><td>\u83B7\u53D6 <code>state</code> \u7B49\u4E8E <code>loading</code> \u7684\u6587\u4EF6\u96C6\u5408</td><td><code>-</code></td><td><code>VarFile[]</code></td></tr><tr><td><code>getSuccess</code></td><td>\u83B7\u53D6 <code>state</code> \u7B49\u4E8E <code>success</code> \u7684\u6587\u4EF6\u96C6\u5408</td><td><code>-</code></td><td><code>VarFile[]</code></td></tr><tr><td><code>getError</code></td><td>\u83B7\u53D6 <code>state</code> \u7B49\u4E8E <code>error</code> \u7684\u6587\u4EF6\u96C6\u5408</td><td><code>-</code></td><td><code>VarFile[]</code></td></tr></tbody></table></div><div class="card"><h3>\u65B9\u6CD5</h3><table><thead><tr><th>\u65B9\u6CD5\u540D</th><th>\u8BF4\u660E</th><th>\u53C2\u6570</th><th>\u8FD4\u56DE\u503C</th></tr></thead><tbody><tr><td><code>getLoading</code></td><td>\u83B7\u53D6 <code>state</code> \u7B49\u4E8E <code>loading</code> \u7684\u6587\u4EF6\u96C6\u5408</td><td><code>-</code></td><td><code>VarFile[]</code></td></tr><tr><td><code>getSuccess</code></td><td>\u83B7\u53D6 <code>state</code> \u7B49\u4E8E <code>success</code> \u7684\u6587\u4EF6\u96C6\u5408</td><td><code>-</code></td><td><code>VarFile[]</code></td></tr><tr><td><code>getError</code></td><td>\u83B7\u53D6 <code>state</code> \u7B49\u4E8E <code>error</code> \u7684\u6587\u4EF6\u96C6\u5408</td><td><code>-</code></td><td><code>VarFile[]</code></td></tr><tr><td><code>validate</code></td><td>\u89E6\u53D1\u6821\u9A8C</td><td><code>-</code></td><td><code>valid: Promise&lt;boolean&gt;</code></td></tr><tr><td><code>resetValidation</code></td><td>\u6E05\u7A7A\u6821\u9A8C\u4FE1\u606F</td><td><code>-</code></td><td><code>-</code></td></tr><tr><td><code>reset</code></td><td>\u6E05\u7A7A\u7ED1\u5B9A\u7684\u503C(\u8BBE\u7F6E\u4E3A <code>[]</code>)\u548C\u6821\u9A8C\u4FE1\u606F</td><td><code>-</code></td><td><code>-</code></td></tr></tbody></table></div><div class="card"><h3>\u4E8B\u4EF6</h3><table><thead><tr><th>\u4E8B\u4EF6\u540D</th><th>\u8BF4\u660E</th><th>\u53C2\u6570</th></tr></thead><tbody><tr><td><code>before-read</code></td><td>\u6587\u4EF6\u8BFB\u53D6\u524D\u89E6\u53D1\uFF0C\u8FD4\u56DE\u5047\u503C\u963B\u6B62\u6587\u4EF6\u8BFB\u53D6(\u652F\u6301 promise)</td><td><code>file: VarFile</code></td></tr><tr><td><code>after-read</code></td><td>\u6587\u4EF6\u8BFB\u53D6\u540E\u89E6\u53D1</td><td><code>file: VarFile</code></td></tr><tr><td><code>oversize</code></td><td>\u6587\u4EF6\u8D85\u8FC7\u9650\u5236\u5927\u5C0F\u65F6\u89E6\u53D1</td><td><code>file: VarFile</code></td></tr><tr><td><code>before-remove</code></td><td>\u6587\u4EF6\u5220\u9664\u524D\u89E6\u53D1\uFF0C\u8FD4\u56DE\u5047\u503C\u963B\u6B62\u6587\u4EF6\u5220\u9664(\u652F\u6301 promise)</td><td><code>file: VarFile</code></td></tr><tr><td><code>remove</code></td><td>\u6587\u4EF6\u5220\u9664\u65F6\u89E6\u53D1</td><td><code>file: VarFile</code></td></tr></tbody></table></div><div class="card"><h3>\u63D2\u69FD</h3><table><thead><tr><th>\u63D2\u69FD\u540D</th><th>\u8BF4\u660E</th><th>\u53C2\u6570</th></tr></thead><tbody><tr><td><code>default</code></td><td>\u4E0A\u4F20\u6309\u94AE\u5185\u5BB9</td><td><code>-</code></td></tr></tbody></table></div><div class="card"><h3>\u6837\u5F0F\u53D8\u91CF</h3><p>\u4EE5\u4E0B\u4E3A\u7EC4\u4EF6\u4F7F\u7528\u7684 css \u53D8\u91CF\uFF0C\u53EF\u4EE5\u4F7F\u7528 <a href="#/zh-CN/style-provider">StyleProvider \u7EC4\u4EF6</a> \u8FDB\u884C\u6837\u5F0F\u5B9A\u5236</p><table><thead><tr><th>\u53D8\u91CF\u540D</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td><code>--uploader-action-background</code></td><td><code>#f7f8fa</code></td></tr><tr><td><code>--uploader-action-icon-color</code></td><td><code>#888</code></td></tr><tr><td><code>--uploader-action-icon-size</code></td><td><code>24px</code></td></tr><tr><td><code>--uploader-action-margin</code></td><td><code>0 10px 10px 0</code></td></tr><tr><td><code>--uploader-file-size</code></td><td><code>80px</code></td></tr><tr><td><code>--uploader-file-margin</code></td><td><code>0 10px 10px 0</code></td></tr><tr><td><code>--uploader-file-name-background</code></td><td><code>#f7f8fa</code></td></tr><tr><td><code>--uploader-file-name-color</code></td><td><code>#888</code></td></tr><tr><td><code>--uploader-file-name-font-size</code></td><td><code>12px</code></td></tr><tr><td><code>--uploader-file-name-padding</code></td><td><code>10px</code></td></tr><tr><td><code>--uploader-file-text-align</code></td><td><code>center</code></td></tr><tr><td><code>--uploader-file-close-background</code></td><td><code>rgba(0, 0, 0, 0.3)</code></td></tr><tr><td><code>--uploader-file-close-size</code></td><td><code>24px</code></td></tr><tr><td><code>--uploader-file-close-icon-font-size</code></td><td><code>14px</code></td></tr><tr><td><code>--uploader-file-close-icon-color</code></td><td><code>#fff</code></td></tr><tr><td><code>--uploader-file-cover-fit</code></td><td><code>cover</code></td></tr><tr><td><code>--uploader-file-cover-background</code></td><td><code>#f7f8fa</code></td></tr><tr><td><code>--uploader-preview-video-width</code></td><td><code>100vw</code></td></tr><tr><td><code>--uploader-preview-video-height</code></td><td><code>100vw</code></td></tr><tr><td><code>--uploader-file-indicator-height</code></td><td><code>4px</code></td></tr><tr><td><code>--uploader-file-indicator-normal-color</code></td><td><code>var(--color-disabled)</code></td></tr><tr><td><code>--uploader-file-indicator-success-color</code></td><td><code>var(--color-success)</code></td></tr><tr><td><code>--uploader-file-indicator-error-color</code></td><td><code>var(--color-danger)</code></td></tr><tr><td><code>--uploader-disabled-color</code></td><td><code>#ddd</code></td></tr><tr><td><code>--uploader-disabled-text-color</code></td><td><code>var(--color-text-disabled)</code></td></tr><tr><td><code>--uploader-loading-background</code></td><td><code>linear-gradient(90deg, hsla(0, 0%, 100%, 0), hsla(0, 0%, 100%, 0.3), hsla(0, 0%, 100%, 0))</code></td></tr></tbody></table></div>',8);function es(ds,ns,cs,rs,os,ps){const t=n("var-site-code-example");return c(),r("div",h,[i,j,a("div",g,[m,l(t,null,{default:e(()=>[u]),_:1})]),a("div",v,[f,_,l(t,null,{default:e(()=>[b]),_:1})]),a("div",y,[w,k,l(t,null,{default:e(()=>[x]),_:1})]),a("div",V,[z,l(t,null,{default:e(()=>[F]),_:1})]),a("div",R,[S,B,l(t,null,{default:e(()=>[A]),_:1})]),a("div",C,[N,E,l(t,null,{default:e(()=>[P]),_:1})]),a("div",$,[M,l(t,null,{default:e(()=>[T]),_:1})]),a("div",D,[L,l(t,null,{default:e(()=>[O]),_:1})]),a("div",U,[q,I,l(t,null,{default:e(()=>[G]),_:1})]),a("div",H,[J,l(t,null,{default:e(()=>[K]),_:1})]),a("div",Q,[W,X,l(t,null,{default:e(()=>[Y]),_:1})]),a("div",Z,[ss,as,l(t,null,{default:e(()=>[ts]),_:1})]),ls])}const is=d(p,[["render",es]]);export{is as default};
