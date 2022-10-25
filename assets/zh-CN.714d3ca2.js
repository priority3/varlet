import{_ as n,p as c,f as d,h as r,M as a,q as t,S as e,P as s,at as h}from"./vue-router.esm-bundler.786782d7.js";const o={components:{}},p={class:"varlet-site-doc"},i=a("h1",null,"\u4E0B\u62C9\u5237\u65B0",-1),j=a("div",{class:"card"},[a("h3",null,"\u4ECB\u7ECD"),a("p",null,"\u7528\u4E8E\u63D0\u4F9B\u4E0B\u62C9\u5237\u65B0\u7684\u4EA4\u4E92\u64CD\u4F5C\u3002")],-1),u={class:"card"},m=a("h3",null,"\u57FA\u672C\u4F7F\u7528",-1),f=a("p",null,[s("\u4E0B\u62C9\u5230\u5237\u65B0\u4F4D\u7F6E\u65F6\u677E\u5F00\u4F1A\u89E6\u53D1 "),a("code",null,"refresh"),s(" \u4E8B\u4EF6\uFF0C \u5728\u4E8B\u4EF6\u5F00\u59CB\u65F6\u5C06 "),a("code",null,"v-model"),s(" \u8BBE\u7F6E\u4E3A "),a("code",null,"true"),s(" \u8868\u793A\u6B63\u5728\u52A0\u8F7D\uFF0C\u5B8C\u6210\u540E\u5C06 "),a("code",null,"v-model"),s(" \u8BBE\u7F6E\u4E3A "),a("code",null,"false"),s(" \u8868\u793A\u52A0\u8F7D\u7ED3\u675F\u3002")],-1),g=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"javascript"},[s(`
`),a("span",{class:"hljs-keyword"},"import"),s(" { ref } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`

`),a("span",{class:"hljs-keyword"},"const"),s(" data1 = "),a("span",{class:"hljs-built_in"},"Array"),s("("),a("span",{class:"hljs-number"},"10"),s(").fill("),a("span",{class:"hljs-string"},"'List Item'"),s(`)
`),a("span",{class:"hljs-keyword"},"const"),s(" data2 = "),a("span",{class:"hljs-built_in"},"Array"),s("("),a("span",{class:"hljs-number"},"10"),s(").fill("),a("span",{class:"hljs-string"},"'This is new List Item'"),s(`)

`),a("span",{class:"hljs-keyword"},"const"),s(" isRefresh = ref("),a("span",{class:"hljs-literal"},"false"),s(`)
`),a("span",{class:"hljs-keyword"},"const"),s(` data = ref(data1)

`),a("span",{class:"hljs-keyword"},"const"),s(" refresh = "),a("span",{class:"hljs-function"},"() =>"),s(` {
  `),a("span",{class:"hljs-built_in"},"setTimeout"),s("("),a("span",{class:"hljs-function"},"() =>"),s(` {
    data.value = data.value[`),a("span",{class:"hljs-number"},"0"),s("] === "),a("span",{class:"hljs-string"},"'List Item'"),s(` ? data2 : data1
    isRefresh.value = `),a("span",{class:"hljs-literal"},"false"),s(`
  }, `),a("span",{class:"hljs-number"},"2000"),s(`)
}
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-pull-refresh"),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"isRefresh"'),s(" @"),a("span",{class:"hljs-attr"},"refresh"),s("="),a("span",{class:"hljs-string"},'"refresh"'),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-cell"),s(`
      `),a("span",{class:"hljs-attr"},"v-for"),s("="),a("span",{class:"hljs-string"},'"(item, index) in data"'),s(`
      `),a("span",{class:"hljs-attr"},":key"),s("="),a("span",{class:"hljs-string"},'"index"'),s(`
      `),a("span",{class:"hljs-attr"},"border"),s(`
    >`)]),s(`
      {{ item + ' ' + (index + 1) }}
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-cell"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-pull-refresh"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),v={class:"card"},_=a("h3",null,"\u7EC4\u5408",-1),b=a("p",null,[s("\u4E0E "),a("code",null,"List"),s(" \u7EC4\u4EF6\u7ED3\u5408\u4F7F\u7528\u5373\u53EF\u5B9E\u73B0\u4E0A\u62C9\u52A0\u8F7D\u548C\u4E0B\u62C9\u5237\u65B0\u7684\u529F\u80FD\uFF0C\u9700\u4FDD\u8BC1 "),a("code",null,"PullRefresh"),s(" \u5BB9\u5668\u9AD8\u5EA6\u4E0D\u4E3A "),a("code",null,"0"),s(" \u3002")],-1),y=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"javascript"},[s(`
`),a("span",{class:"hljs-keyword"},"import"),s(" { ref } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`

`),a("span",{class:"hljs-keyword"},"const"),s(" refreshing = ref("),a("span",{class:"hljs-literal"},"false"),s(`)
`),a("span",{class:"hljs-keyword"},"const"),s(" loading = ref("),a("span",{class:"hljs-literal"},"false"),s(`)
`),a("span",{class:"hljs-keyword"},"const"),s(` list = ref([])

`),a("span",{class:"hljs-keyword"},"const"),s(" refresh = "),a("span",{class:"hljs-function"},"() =>"),s(` {
  `),a("span",{class:"hljs-built_in"},"setTimeout"),s("("),a("span",{class:"hljs-function"},"() =>"),s(` {
    `),a("span",{class:"hljs-built_in"},"console"),s(".log("),a("span",{class:"hljs-string"},"'refresh'"),s(`)
    refreshing.value = `),a("span",{class:"hljs-literal"},"false"),s(`
  }, `),a("span",{class:"hljs-number"},"2000"),s(`)
}

`),a("span",{class:"hljs-keyword"},"const"),s(" load = "),a("span",{class:"hljs-function"},"() =>"),s(` {
  `),a("span",{class:"hljs-built_in"},"setTimeout"),s("("),a("span",{class:"hljs-function"},"() =>"),s(` {
    `),a("span",{class:"hljs-keyword"},"for"),s(" ("),a("span",{class:"hljs-keyword"},"let"),s(" i = "),a("span",{class:"hljs-number"},"0"),s("; i < "),a("span",{class:"hljs-number"},"20"),s(`; i++) {
      list.value.push(list.value.length + `),a("span",{class:"hljs-number"},"1"),s(`)
    }
    
    loading.value = `),a("span",{class:"hljs-literal"},"false"),s(`
  }, `),a("span",{class:"hljs-number"},"1000"),s(`)
}
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-pull-refresh"),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"refreshing"'),s(" @"),a("span",{class:"hljs-attr"},"refresh"),s("="),a("span",{class:"hljs-string"},'"refresh"'),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-list"),s(),a("span",{class:"hljs-attr"},"v-model:loading"),s("="),a("span",{class:"hljs-string"},'"loading"'),s(" @"),a("span",{class:"hljs-attr"},"load"),s("="),a("span",{class:"hljs-string"},'"load"'),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-cell"),s(),a("span",{class:"hljs-attr"},":key"),s("="),a("span",{class:"hljs-string"},'"d"'),s(),a("span",{class:"hljs-attr"},"v-for"),s("="),a("span",{class:"hljs-string"},'"d in list"'),s(">")]),s("ListItem {{ d }}"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-cell"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-list"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-pull-refresh"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),k={class:"card"},w=a("h3",null,"\u6CE8\u610F",-1),x=a("p",null,[s("\u5F53 "),a("code",null,"PullRefresh"),s(" \u5BB9\u5668\u9AD8\u5EA6\u4E3A "),a("code",null,"0"),s(" \u65F6\u4F1A\u5BFC\u81F4\u4E0B\u62C9\u529F\u80FD\u5931\u6548\uFF0C\u6240\u4EE5\u9700\u4FDD\u8BC1\u5176\u5B50\u5143\u7D20\u9AD8\u5EA6"),a("strong",null,"\u4E0D\u4E3A"),s(),a("code",null,"0"),s(" \u6216\u4E3A "),a("code",null,"PullRefresh"),s(" \u5BB9\u5668\u8BBE\u7F6E\u9AD8\u5EA6:")],-1),C=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-pull-refresh"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"div"),s(),a("span",{class:"hljs-attr"},"style"),s("="),a("span",{class:"hljs-string"},'"height: 200px"'),s(">")]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"div"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-pull-refresh"),s(">")]),s(`

  `),a("span",{class:"hljs-comment"},"<!-- \u6216 -->"),s(`
  
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-pull-refresh"),s(),a("span",{class:"hljs-attr"},"style"),s("="),a("span",{class:"hljs-string"},'"height: 200px"'),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"div"),s(">")]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"div"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-pull-refresh"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),N=h('<h2>API</h2><div class="card"><h3>\u5C5E\u6027</h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td><code>v-model</code></td><td>\u662F\u5426\u5904\u4E8E\u52A0\u8F7D\u4E2D\u72B6\u6001</td><td><em>boolean</em></td><td><code>-</code></td></tr><tr><td><code>disabled</code></td><td>\u662F\u5426\u7981\u7528\u4E0B\u62C9\u5237\u65B0</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>animation-duration</code></td><td>\u52A0\u8F7D\u7ED3\u675F\u540E\u56DE\u5230\u521D\u59CB\u4F4D\u7F6E\u7684\u52A8\u753B\u65F6\u957F\uFF08ms\uFF09</td><td><em>string | number</em></td><td><code>300</code></td></tr><tr><td><code>success-duration</code></td><td>\u6210\u529F\u63D0\u793A\u5C55\u793A\u65F6\u957F\uFF08ms\uFF09</td><td><em>string | number</em></td><td><code>2000</code></td></tr><tr><td><code>bg-color</code></td><td>control \u7684\u80CC\u666F\u989C\u8272</td><td><em>string</em></td><td><code>#005CAF</code></td></tr><tr><td><code>color</code></td><td>control \u7684\u989C\u8272</td><td><em>string</em></td><td><code>#ffffff</code></td></tr><tr><td><code>success-bg-color</code></td><td>\u6210\u529F\u72B6\u6001\u4E0B control \u7684\u80CC\u666F\u989C\u8272</td><td><em>string</em></td><td><code>#4CAF50</code></td></tr><tr><td><code>success-color</code></td><td>\u6210\u529F\u72B6\u6001\u4E0B control \u7684\u989C\u8272</td><td><em>string</em></td><td><code>ffffff</code></td></tr></tbody></table></div><div class="card"><h3>\u4E8B\u4EF6</h3><table><thead><tr><th>\u4E8B\u4EF6\u540D</th><th>\u8BF4\u660E</th><th>\u56DE\u8C03\u53C2\u6570</th></tr></thead><tbody><tr><td><code>refresh</code></td><td>\u4E0B\u62C9\u5237\u65B0\u65F6\u89E6\u53D1</td><td><code>-</code></td></tr></tbody></table></div><div class="card"><h3>\u63D2\u69FD</h3><table><thead><tr><th>\u540D\u79F0</th><th>\u8BF4\u660E</th><th>\u53C2\u6570</th></tr></thead><tbody><tr><td><code>default</code></td><td>\u9ED8\u8BA4\u63D2\u69FD</td><td><code>-</code></td></tr></tbody></table></div><div class="card"><h3>\u6837\u5F0F\u53D8\u91CF</h3><p>\u4EE5\u4E0B\u4E3A\u7EC4\u4EF6\u4F7F\u7528\u7684 css \u53D8\u91CF\uFF0C\u53EF\u4EE5\u4F7F\u7528 <a href="#/zh-CN/style-provider">StyleProvider \u7EC4\u4EF6</a> \u8FDB\u884C\u6837\u5F0F\u5B9A\u5236</p><table><thead><tr><th>\u53D8\u91CF\u540D</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td><code>--pull-refresh-size</code></td><td><code>40px</code></td></tr><tr><td><code>--pull-refresh-background</code></td><td><code>#fff</code></td></tr><tr><td><code>--pull-refresh-color</code></td><td><code>var(--color-primary)</code></td></tr><tr><td><code>--pull-refresh-success-color</code></td><td><code>var(--color-success)</code></td></tr><tr><td><code>--pull-refresh-icon-size</code></td><td><code>25px</code></td></tr></tbody></table></div>',5);function P(R,A,I,L,T,z){const l=c("var-site-code-example");return d(),r("div",p,[i,j,a("div",u,[m,f,t(l,null,{default:e(()=>[g]),_:1})]),a("div",v,[_,b,t(l,null,{default:e(()=>[y]),_:1})]),a("div",k,[w,x,t(l,{"playground-ignore":""},{default:e(()=>[C]),_:1})]),N])}const $=n(o,[["render",P]]);export{$ as default};
