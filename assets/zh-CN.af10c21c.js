import{_ as n,p as c,f as d,h as r,M as a,q as l,S as e,at as o,P as s}from"./vue-router.esm-bundler.786782d7.js";const p={components:{}},h={class:"varlet-site-doc"},i=a("h1",null,"\u56FE\u7247\u9884\u89C8",-1),j=a("div",{class:"card"},[a("h3",null,"\u4ECB\u7ECD"),a("p",null,"\u56FE\u7247\u653E\u5927\u9884\u89C8\uFF0C\u652F\u6301\u53CC\u51FB\u500D\u6570\u653E\u5927\uFF0C\u652F\u6301\u51FD\u6570\u8C03\u7528\u548C\u7EC4\u4EF6\u8C03\u7528\u4E24\u79CD\u65B9\u5F0F\u3002")],-1),g=a("h2",null,"\u51FD\u6570\u8C03\u7528",-1),m={class:"card"},v=a("h3",null,"\u57FA\u672C\u4F7F\u7528",-1),u=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"javascript"},[s(`
`),a("span",{class:"hljs-keyword"},"import"),s(" { ImagePreview } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'@varlet/ui'"),s(`

`),a("span",{class:"hljs-keyword"},"const"),s(" preview = "),a("span",{class:"hljs-function"},"() =>"),s(` {
  ImagePreview(`),a("span",{class:"hljs-string"},"'https://varlet.gitee.io/varlet-ui/cat.jpg'"),s(`)
}
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-button"),s(),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"primary"'),s(),a("span",{class:"hljs-attr"},"block"),s(" @"),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},'"preview"'),s(">")]),s("\u57FA\u672C\u4F7F\u7528"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-button"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),w={class:"card"},_=a("h3",null,"\u5904\u7406\u56DE\u8C03\u51FD\u6570",-1),b=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"javascript"},[s(`
`),a("span",{class:"hljs-keyword"},"import"),s(" { ImagePreview } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'@varlet/ui'"),s(`

`),a("span",{class:"hljs-keyword"},"const"),s(" preview = "),a("span",{class:"hljs-function"},"() =>"),s(` {
  ImagePreview({
    `),a("span",{class:"hljs-attr"},"images"),s(`: [
      `),a("span",{class:"hljs-string"},"'https://varlet.gitee.io/varlet-ui/cat.jpg'"),s(`,
      `),a("span",{class:"hljs-string"},"'https://varlet.gitee.io/varlet-ui/cat2.jpg'"),s(`
    ],
    `),a("span",{class:"hljs-function"},[a("span",{class:"hljs-title"},"onChange"),s("("),a("span",{class:"hljs-params"},"index"),s(")")]),s(` {
      `),a("span",{class:"hljs-built_in"},"console"),s(`.log(index)
    }
  })
}
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-button"),s(),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"primary"'),s(),a("span",{class:"hljs-attr"},"block"),s(" @"),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},'"preview"'),s(">")]),s("\u5904\u7406\u56DE\u8C03\u51FD\u6570"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-button"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),f=a("h2",null,"\u7EC4\u4EF6\u4F7F\u7528",-1),k={class:"card"},y=a("h3",null,"\u57FA\u672C\u4F7F\u7528",-1),x=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"javascript"},[s(`
`),a("span",{class:"hljs-keyword"},"import"),s(" { ref } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`

`),a("span",{class:"hljs-keyword"},"const"),s(" show = ref("),a("span",{class:"hljs-literal"},"false"),s(`)
`),a("span",{class:"hljs-keyword"},"const"),s(` images = ref([
  `),a("span",{class:"hljs-string"},"'https://varlet.gitee.io/varlet-ui/cat.jpg'"),s(`,
  `),a("span",{class:"hljs-string"},"'https://varlet.gitee.io/varlet-ui/cat2.jpg'"),s(`,
])
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-button"),s(`
    `),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"warning"'),s(`
    `),a("span",{class:"hljs-attr"},"block"),s(`
    @`),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},'"show = true"'),s(`
  >`)]),s(`
    \u57FA\u672C\u4F7F\u7528
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-button"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-image-preview"),s(),a("span",{class:"hljs-attr"},":images"),s("="),a("span",{class:"hljs-string"},'"images"'),s(),a("span",{class:"hljs-attr"},"v-model:show"),s("="),a("span",{class:"hljs-string"},'"show"'),s(" />")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),C={class:"card"},P=a("h3",null,"\u6307\u5B9A\u521D\u59CB\u4F4D\u7F6E",-1),S=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"javascript"},[s(`
`),a("span",{class:"hljs-keyword"},"import"),s(" { ref } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`

`),a("span",{class:"hljs-keyword"},"const"),s(" show = ref("),a("span",{class:"hljs-literal"},"false"),s(`)
`),a("span",{class:"hljs-keyword"},"const"),s(` images = ref([
  `),a("span",{class:"hljs-string"},"'https://varlet.gitee.io/varlet-ui/cat.jpg'"),s(`,
  `),a("span",{class:"hljs-string"},"'https://varlet.gitee.io/varlet-ui/cat2.jpg'"),s(`,
])
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-button"),s(`
    `),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"warning"'),s(`
    `),a("span",{class:"hljs-attr"},"block"),s(`
    @`),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},'"show = true"'),s(`
  >`)]),s(`
    \u6307\u5B9A\u521D\u59CB\u4F4D\u7F6E
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-button"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-image-preview"),s(`
    `),a("span",{class:"hljs-attr"},"current"),s("="),a("span",{class:"hljs-string"},'"https://varlet.gitee.io/varlet-ui/cat2.jpg"'),s(`
    `),a("span",{class:"hljs-attr"},":images"),s("="),a("span",{class:"hljs-string"},'"images"'),s(`
    `),a("span",{class:"hljs-attr"},"v-model:show"),s("="),a("span",{class:"hljs-string"},'"show"'),s(`
  />`)]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),z={class:"card"},I=a("h3",null,"\u5C55\u793A\u5173\u95ED\u6309\u94AE",-1),N=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"javascript"},[s(`
`),a("span",{class:"hljs-keyword"},"import"),s(" { ref } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`

`),a("span",{class:"hljs-keyword"},"const"),s(" show = ref("),a("span",{class:"hljs-literal"},"false"),s(`)
`),a("span",{class:"hljs-keyword"},"const"),s(` images = ref([
  `),a("span",{class:"hljs-string"},"'https://varlet.gitee.io/varlet-ui/cat.jpg'"),s(`,
  `),a("span",{class:"hljs-string"},"'https://varlet.gitee.io/varlet-ui/cat2.jpg'"),s(`,
])
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-button"),s(`
    `),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"warning"'),s(`
    `),a("span",{class:"hljs-attr"},"block"),s(`
    @`),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},'"show = true"'),s(`
  >`)]),s(`
    \u5C55\u793A\u5173\u95ED\u6309\u94AE
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-button"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-image-preview"),s(`
    `),a("span",{class:"hljs-attr"},"closeable"),s(`
    `),a("span",{class:"hljs-attr"},":images"),s("="),a("span",{class:"hljs-string"},'"images"'),s(`
    `),a("span",{class:"hljs-attr"},"v-model:show"),s("="),a("span",{class:"hljs-string"},'"show"'),s(`
  />`)]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),L={class:"card"},R=a("h3",null,"\u76D1\u542C\u5173\u95ED\u4E8B\u4EF6",-1),U=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"javascript"},[s(`
`),a("span",{class:"hljs-keyword"},"import"),s(" { ref } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`
`),a("span",{class:"hljs-keyword"},"import"),s(" { Snackbar } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'@varlet/ui'"),s(`

`),a("span",{class:"hljs-keyword"},"const"),s(" show = ref("),a("span",{class:"hljs-literal"},"false"),s(`)
`),a("span",{class:"hljs-keyword"},"const"),s(` images = ref([
  `),a("span",{class:"hljs-string"},"'https://varlet.gitee.io/varlet-ui/cat.jpg'"),s(`,
  `),a("span",{class:"hljs-string"},"'https://varlet.gitee.io/varlet-ui/cat2.jpg'"),s(`,
])
`),a("span",{class:"hljs-keyword"},"const"),s(" handleCloseEvent = "),a("span",{class:"hljs-function"},"() =>"),s(" Snackbar("),a("span",{class:"hljs-string"},"'\u89E6\u53D1\u4E86\u5173\u95ED\u4E8B\u4EF6\u3002'"),s(`);
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-button"),s(`
    `),a("span",{class:"hljs-attr"},"block"),s(`
    `),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"warning"'),s(`
    @`),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},'"show = true"'),s(`
  >`)]),s(`
    \u76D1\u542C\u5173\u95ED\u4E8B\u4EF6
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-button"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-image-preview"),s(`
    `),a("span",{class:"hljs-attr"},":images"),s("="),a("span",{class:"hljs-string"},'"images"'),s(`
    `),a("span",{class:"hljs-attr"},"v-model:show"),s("="),a("span",{class:"hljs-string"},'"show"'),s(`
    @`),a("span",{class:"hljs-attr"},"close"),s("="),a("span",{class:"hljs-string"},'"handleCloseEvent"'),s(`
  />`)]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),V={class:"card"},$=a("h3",null,"\u5C55\u793A\u989D\u5916\u63D2\u69FD",-1),B=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"javascript"},[s(`
`),a("span",{class:"hljs-keyword"},"import"),s(" { ref } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`

`),a("span",{class:"hljs-keyword"},"const"),s(" show = ref("),a("span",{class:"hljs-literal"},"false"),s(`)
`),a("span",{class:"hljs-keyword"},"const"),s(" menuShow = ref("),a("span",{class:"hljs-literal"},"false"),s(`)
`),a("span",{class:"hljs-keyword"},"const"),s(` images = ref([
  `),a("span",{class:"hljs-string"},"'https://varlet.gitee.io/varlet-ui/cat.jpg'"),s(`,
  `),a("span",{class:"hljs-string"},"'https://varlet.gitee.io/varlet-ui/cat2.jpg'"),s(`,
])
`),a("span",{class:"hljs-keyword"},"const"),s(` actions = [
  {
    `),a("span",{class:"hljs-attr"},"name"),s(": "),a("span",{class:"hljs-string"},"'\u64CD\u4F5C'"),s(`,
    `),a("span",{class:"hljs-attr"},"icon"),s(": "),a("span",{class:"hljs-string"},"'wrench'"),s(`
  },
  {
    `),a("span",{class:"hljs-attr"},"name"),s(": "),a("span",{class:"hljs-string"},"'\u64CD\u4F5C'"),s(`,
    `),a("span",{class:"hljs-attr"},"icon"),s(": "),a("span",{class:"hljs-string"},"'wrench'"),s(`
  }
]
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-button"),s(`
    `),a("span",{class:"hljs-attr"},"block"),s(`
    `),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"warning"'),s(` 
    @`),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},'"show = true"'),s(`
  >`)]),s(`
    \u5C55\u793A\u989D\u5916\u63D2\u69FD
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-button"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-image-preview"),s(),a("span",{class:"hljs-attr"},":images"),s("="),a("span",{class:"hljs-string"},'"images"'),s(),a("span",{class:"hljs-attr"},"v-model:show"),s("="),a("span",{class:"hljs-string"},'"show"'),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(" #"),a("span",{class:"hljs-attr"},"extra"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-icon"),s(`
        `),a("span",{class:"hljs-attr"},"name"),s("="),a("span",{class:"hljs-string"},'"menu"'),s(`
        `),a("span",{class:"hljs-attr"},":size"),s("="),a("span",{class:"hljs-string"},'"22"'),s(`
        `),a("span",{class:"hljs-attr"},"color"),s("="),a("span",{class:"hljs-string"},'"#fff"'),s(`
        @`),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},'"menuShow = true"'),s(`
      />`)]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-action-sheet"),s(),a("span",{class:"hljs-attr"},":actions"),s("="),a("span",{class:"hljs-string"},'"actions"'),s(),a("span",{class:"hljs-attr"},"v-model:show"),s("="),a("span",{class:"hljs-string"},'"menuShow"'),s(" />")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-image-preview"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),E=o('<h2>API</h2><div class="card"><h3>\u5C5E\u6027</h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td><code>show</code></td><td>\u662F\u5426\u663E\u793A</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>images</code></td><td>\u9700\u8981\u9884\u89C8\u7684\u56FE\u7247 URL \u6570\u7EC4</td><td><em>string[]</em></td><td><code>[]</code></td></tr><tr><td><code>current</code></td><td>\u56FE\u7247\u9884\u89C8\u8D77\u59CB\u7684 URL</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>zoom</code></td><td>\u53CC\u51FB\u653E\u5927\u500D\u6570</td><td><em>string | number</em></td><td><code>2</code></td></tr><tr><td><code>closeable</code></td><td>\u662F\u5426\u663E\u793A\u5173\u95ED\u6309\u94AE</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>loop</code></td><td>\u662F\u5426\u5F00\u542F\u5FAA\u73AF\u64AD\u653E</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>indicator</code></td><td>\u662F\u5426\u663E\u793A\u5206\u9875</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>lock-scroll</code></td><td>\u9501\u5B9A\u6EDA\u52A8</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>teleport</code></td><td>\u5F39\u51FA\u5C42\u6302\u8F7D\u7684\u4F4D\u7F6E</td><td><em>TeleportProps[\u2018to\u2019]</em></td><td><code>-</code></td></tr></tbody></table></div><div class="card"><h3>\u4E8B\u4EF6</h3><table><thead><tr><th>\u4E8B\u4EF6\u540D</th><th>\u8BF4\u660E</th><th>\u56DE\u8C03\u53C2\u6570</th></tr></thead><tbody><tr><td><code>change</code></td><td>\u5207\u6362\u56FE\u7247\u65F6\u7684\u56DE\u8C03\u51FD\u6570\uFF0C\u56DE\u8C03\u53C2\u6570\u4E3A\u5F53\u524D\u7D22\u5F15</td><td><code>index: number</code> \u56FE\u7247\u7D22\u5F15</td></tr><tr><td><code>open</code></td><td>\u6253\u5F00 image-preview \u65F6\u89E6\u53D1</td><td><code>-</code></td></tr><tr><td><code>opened</code></td><td>\u6253\u5F00 image-preview \u52A8\u753B\u7ED3\u675F\u65F6\u89E6\u53D1</td><td><code>-</code></td></tr><tr><td><code>close</code></td><td>\u5173\u95ED image-preview \u65F6\u89E6\u53D1</td><td><code>-</code></td></tr><tr><td><code>closed</code></td><td>\u5173\u95ED image-preview \u52A8\u753B\u7ED3\u675F\u65F6\u89E6\u53D1</td><td><code>-</code></td></tr></tbody></table></div><div class="card"><h3>\u63D2\u69FD</h3><table><thead><tr><th>\u63D2\u69FD\u540D</th><th>\u8BF4\u660E</th><th>\u53C2\u6570</th></tr></thead><tbody><tr><td><code>indicator</code></td><td>\u5206\u9875\u6307\u793A\u5668</td><td><code>index: number</code> \u56FE\u7247\u7D22\u5F15 <br> <code>length: number</code> \u56FE\u7247\u603B\u6570</td></tr><tr><td><code>close-icon</code></td><td>\u5173\u95ED\u6309\u94AE</td><td><code>-</code></td></tr><tr><td><code>extra</code></td><td>\u989D\u5916\u63D2\u69FD</td><td><code>-</code></td></tr></tbody></table></div><div class="card"><h3>ImagePreview Options</h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td><code>images</code></td><td>\u9700\u8981\u9884\u89C8\u7684\u56FE\u7247 URL \u6570\u7EC4\u6216\u8005\u5355\u4E2A\u56FE\u7247\u7684 URL</td><td><em>string[] | string</em></td><td><code>[]</code></td></tr><tr><td><code>current</code></td><td>\u56FE\u7247\u9884\u89C8\u8D77\u59CB\u7684 URL</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>zoom</code></td><td>\u53CC\u51FB\u653E\u5927\u500D\u6570</td><td><em>string | number</em></td><td><code>2</code></td></tr><tr><td><code>closeable</code></td><td>\u662F\u5426\u663E\u793A\u5173\u95ED\u6309\u94AE</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>loop</code></td><td>\u662F\u5426\u5F00\u542F\u5FAA\u73AF\u64AD\u653E</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>indicator</code></td><td>\u662F\u5426\u663E\u793A\u5206\u9875</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>lockScroll</code></td><td>\u9501\u5B9A\u6EDA\u52A8</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>onChange</code></td><td>\u5207\u6362\u56FE\u7247\u65F6\u7684\u56DE\u8C03\u51FD\u6570\uFF0C\u56DE\u8C03\u53C2\u6570\u4E3A\u5F53\u524D\u7D22\u5F15</td><td><em>(index: number) =&gt; void</em></td><td><code>-</code></td></tr><tr><td><code>onOpen</code></td><td>image-preview \u5F00\u542F\u65F6\u5019\u7684\u56DE\u8C03</td><td><em>() =&gt; void</em></td><td><code>-</code></td></tr><tr><td><code>onOpened</code></td><td>image-preview \u52A8\u753B\u7ED3\u675F\u65F6\u5019\u7684\u56DE\u8C03</td><td><em>() =&gt; void</em></td><td><code>-</code></td></tr><tr><td><code>onClose</code></td><td>image-preview \u65F6\u5173\u95ED\u65F6\u5019\u7684\u56DE\u8C03</td><td><em>() =&gt; void</em></td><td><code>-</code></td></tr><tr><td><code>onClosed</code></td><td>image-preview \u5173\u95ED\u52A8\u753B\u7ED3\u675F\u65F6\u5019\u7684\u56DE\u8C03</td><td><em>() =&gt; void</em></td><td><code>-</code></td></tr></tbody></table></div><div class="card"><h3>\u6837\u5F0F\u53D8\u91CF</h3><p>\u4EE5\u4E0B\u4E3A\u7EC4\u4EF6\u4F7F\u7528\u7684 css \u53D8\u91CF\uFF0C\u53EF\u4EE5\u4F7F\u7528 <a href="#/zh-CN/style-provider">StyleProvider \u7EC4\u4EF6</a> \u8FDB\u884C\u6837\u5F0F\u5B9A\u5236</p><table><thead><tr><th>\u53D8\u91CF\u540D</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td><code>--image-preview-swipe-indicators-text-color</code></td><td><code>#ddd</code></td></tr><tr><td><code>--image-preview-swipe-indicators-padding</code></td><td><code>16px 0</code></td></tr><tr><td><code>--image-preview-zoom-container-background</code></td><td><code>#000</code></td></tr><tr><td><code>--image-preview-close-icon-top</code></td><td><code>14px</code></td></tr><tr><td><code>--image-preview-close-icon-right</code></td><td><code>14px</code></td></tr><tr><td><code>--image-preview-close-icon-size</code></td><td><code>22px</code></td></tr><tr><td><code>--image-preview-close-icon-color</code></td><td><code>#fff</code></td></tr><tr><td><code>--image-preview-extra-top</code></td><td><code>14px</code></td></tr><tr><td><code>--image-preview-extra-left</code></td><td><code>14px</code></td></tr></tbody></table></div>',6);function O(T,q,A,M,D,F){const t=c("var-site-code-example");return d(),r("div",h,[i,j,g,a("div",m,[v,l(t,null,{default:e(()=>[u]),_:1})]),a("div",w,[_,l(t,null,{default:e(()=>[b]),_:1})]),f,a("div",k,[y,l(t,null,{default:e(()=>[x]),_:1})]),a("div",C,[P,l(t,null,{default:e(()=>[S]),_:1})]),a("div",z,[I,l(t,null,{default:e(()=>[N]),_:1})]),a("div",L,[R,l(t,null,{default:e(()=>[U]),_:1})]),a("div",V,[$,l(t,null,{default:e(()=>[B]),_:1})]),E])}const H=n(p,[["render",O]]);export{H as default};
