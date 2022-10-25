import{_ as e,p as c,f as r,h as d,M as a,q as n,S as t,P as s,at as p}from"./vue-router.esm-bundler.786782d7.js";const o={components:{}},h={class:"varlet-site-doc"},j=a("h1",null,"\u8FDB\u5EA6\u6761",-1),i=a("div",{class:"card"},[a("h3",null,"\u4ECB\u7ECD"),a("p",null,"\u5C55\u793A\u64CD\u4F5C\u7684\u5F53\u524D\u8FDB\u5EA6\u3002")],-1),u={class:"card"},m=a("h3",null,"\u57FA\u672C\u4F7F\u7528",-1),g=a("p",null,[s("\u901A\u8FC7 "),a("code",null,"value"),s(" \u5C5E\u6027\u8BBE\u7F6E\u5F53\u524D\u8FDB\u5EA6\u3002")],-1),v=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"javascript"},[s(`
`),a("span",{class:"hljs-keyword"},"import"),s(" { ref, onMounted, onUnmounted } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`

`),a("span",{class:"hljs-keyword"},"const"),s(" value = ref("),a("span",{class:"hljs-number"},"0"),s(`)
`),a("span",{class:"hljs-keyword"},"const"),s(" interval = ref("),a("span",{class:"hljs-number"},"0"),s(`)

onMounted(`),a("span",{class:"hljs-function"},"() =>"),s(` {
  interval.value = `),a("span",{class:"hljs-built_in"},"window"),s(".setInterval("),a("span",{class:"hljs-function"},"() =>"),s(` {
    `),a("span",{class:"hljs-keyword"},"if"),s(" (value.value >= "),a("span",{class:"hljs-number"},"100"),s(") value.value = "),a("span",{class:"hljs-number"},"0"),s(`
    `),a("span",{class:"hljs-keyword"},"else"),s(" value.value += "),a("span",{class:"hljs-number"},"20"),s(`
  }, `),a("span",{class:"hljs-number"},"1000"),s(`)
})

onUnmounted(`),a("span",{class:"hljs-function"},"() =>"),s(` {
  `),a("span",{class:"hljs-built_in"},"window"),s(`.clearInterval(interval.value)
})  
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-space"),s(),a("span",{class:"hljs-attr"},"direction"),s("="),a("span",{class:"hljs-string"},'"column"'),s(),a("span",{class:"hljs-attr"},":size"),s("="),a("span",{class:"hljs-string"},'"[12, 12]"'),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-progress"),s(),a("span",{class:"hljs-attr"},":value"),s("="),a("span",{class:"hljs-string"},'"20"'),s(),a("span",{class:"hljs-attr"},":track"),s("="),a("span",{class:"hljs-string"},'"false"'),s(" />")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-progress"),s(),a("span",{class:"hljs-attr"},":value"),s("="),a("span",{class:"hljs-string"},'"value"'),s(),a("span",{class:"hljs-attr"},":track"),s("="),a("span",{class:"hljs-string"},'"false"'),s(" />")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-progress"),s(),a("span",{class:"hljs-attr"},":value"),s("="),a("span",{class:"hljs-string"},'"100"'),s(),a("span",{class:"hljs-attr"},":track"),s("="),a("span",{class:"hljs-string"},'"false"'),s(" />")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-space"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),_={class:"card"},f=a("h3",null,"\u663E\u793A\u6807\u7B7E",-1),b=a("p",null,[s("\u901A\u8FC7 "),a("code",null,"label"),s(" \u5C5E\u6027\u5C06 label \u663E\u793A\uFF0Clabel \u9ED8\u8BA4\u4E3A\u8FDB\u5EA6\u7684\u767E\u5206\u6BD4\uFF0C\u53EF\u4EE5\u4F7F\u7528\u63D2\u69FD\u63D2\u5165\u81EA\u5B9A\u4E49\u5185\u5BB9\u3002")],-1),w=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"javascript"},[s(`
`),a("span",{class:"hljs-keyword"},"import"),s(" { ref, onMounted, onUnmounted } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`

`),a("span",{class:"hljs-keyword"},"const"),s(" value = ref("),a("span",{class:"hljs-number"},"0"),s(`)
`),a("span",{class:"hljs-keyword"},"const"),s(" interval = ref("),a("span",{class:"hljs-number"},"0"),s(`)

onMounted(`),a("span",{class:"hljs-function"},"() =>"),s(` {
  interval.value = `),a("span",{class:"hljs-built_in"},"window"),s(".setInterval("),a("span",{class:"hljs-function"},"() =>"),s(` {
    `),a("span",{class:"hljs-keyword"},"if"),s(" (value.value >= "),a("span",{class:"hljs-number"},"100"),s(") value.value = "),a("span",{class:"hljs-number"},"0"),s(`
    `),a("span",{class:"hljs-keyword"},"else"),s(" value.value += "),a("span",{class:"hljs-number"},"20"),s(`
  }, `),a("span",{class:"hljs-number"},"1000"),s(`)
})

onUnmounted(`),a("span",{class:"hljs-function"},"() =>"),s(` {
  `),a("span",{class:"hljs-built_in"},"window"),s(`.clearInterval(interval.value)
})  
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-space"),s(),a("span",{class:"hljs-attr"},"direction"),s("="),a("span",{class:"hljs-string"},'"column"'),s(),a("span",{class:"hljs-attr"},":size"),s("="),a("span",{class:"hljs-string"},'"[12, 12]"'),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-progress"),s(),a("span",{class:"hljs-attr"},"label"),s(),a("span",{class:"hljs-attr"},":value"),s("="),a("span",{class:"hljs-string"},'"30"'),s(" />")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-progress"),s(),a("span",{class:"hljs-attr"},"label"),s(),a("span",{class:"hljs-attr"},":value"),s("="),a("span",{class:"hljs-string"},'"value"'),s(" />")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-progress"),s(),a("span",{class:"hljs-attr"},"label"),s(),a("span",{class:"hljs-attr"},":value"),s("="),a("span",{class:"hljs-string"},'"100"'),s(">")]),s("success"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-progress"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-space"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),k={class:"card"},y=a("h3",null,"\u81EA\u5B9A\u4E49\u6837\u5F0F",-1),z=a("p",null,[s("\u901A\u8FC7 "),a("code",null,"line-width"),s("\u3001"),a("code",null,"color"),s("\u3001"),a("code",null,"track-color"),s("\u3001"),a("code",null,"ripple"),s(" \u5C5E\u6027\u8BBE\u7F6E\u7EBF\u5BBD\u3001\u8FDB\u5EA6\u6761\u989C\u8272\u3001\u8F68\u9053\u989C\u8272\u3001\u6C34\u6CE2\u7EB9\u52A0\u8F7D\u6548\u679C\u3002")],-1),x=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-space"),s(),a("span",{class:"hljs-attr"},"direction"),s("="),a("span",{class:"hljs-string"},'"column"'),s(),a("span",{class:"hljs-attr"},":size"),s("="),a("span",{class:"hljs-string"},'"[12, 12]"'),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-progress"),s(),a("span",{class:"hljs-attr"},":value"),s("="),a("span",{class:"hljs-string"},'"30"'),s(),a("span",{class:"hljs-attr"},"line-width"),s("="),a("span",{class:"hljs-string"},'"8"'),s(),a("span",{class:"hljs-attr"},"color"),s("="),a("span",{class:"hljs-string"},'"#ff9f00"'),s(" />")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-progress"),s(),a("span",{class:"hljs-attr"},":value"),s("="),a("span",{class:"hljs-string"},'"60"'),s(),a("span",{class:"hljs-attr"},"line-width"),s("="),a("span",{class:"hljs-string"},'"8"'),s(),a("span",{class:"hljs-attr"},"color"),s("="),a("span",{class:"hljs-string"},'"#ff9f00"'),s(),a("span",{class:"hljs-attr"},"track-color"),s("="),a("span",{class:"hljs-string"},'"#f5cb90"'),s(" />")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-progress"),s(`
      `),a("span",{class:"hljs-attr"},":value"),s("="),a("span",{class:"hljs-string"},'"80"'),s(`
      `),a("span",{class:"hljs-attr"},"ripple"),s(`
      `),a("span",{class:"hljs-attr"},"line-width"),s("="),a("span",{class:"hljs-string"},'"8"'),s(`
      `),a("span",{class:"hljs-attr"},"color"),s("="),a("span",{class:"hljs-string"},'"#ff9f00"'),s(`
      `),a("span",{class:"hljs-attr"},"track-color"),s("="),a("span",{class:"hljs-string"},'"#f5cb90"'),s(`
    />`)]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-space"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),I={class:"card"},M=a("h3",null,"\u73AF\u5F62\u8FDB\u5EA6\u6761",-1),N=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"javascript"},[s(`
`),a("span",{class:"hljs-keyword"},"import"),s(" { ref, onMounted, onUnmounted } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`

`),a("span",{class:"hljs-keyword"},"const"),s(" value = ref("),a("span",{class:"hljs-number"},"0"),s(`)
`),a("span",{class:"hljs-keyword"},"const"),s(" interval = ref("),a("span",{class:"hljs-number"},"0"),s(`)

onMounted(`),a("span",{class:"hljs-function"},"() =>"),s(` {
  interval.value = `),a("span",{class:"hljs-built_in"},"window"),s(".setInterval("),a("span",{class:"hljs-function"},"() =>"),s(` {
    `),a("span",{class:"hljs-keyword"},"if"),s(" (value.value >= "),a("span",{class:"hljs-number"},"100"),s(") value.value = "),a("span",{class:"hljs-number"},"0"),s(`
    `),a("span",{class:"hljs-keyword"},"else"),s(" value.value += "),a("span",{class:"hljs-number"},"20"),s(`
  }, `),a("span",{class:"hljs-number"},"1000"),s(`)
})

onUnmounted(`),a("span",{class:"hljs-function"},"() =>"),s(` {
  `),a("span",{class:"hljs-built_in"},"window"),s(`.clearInterval(interval.value)
})  
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-space"),s(),a("span",{class:"hljs-attr"},":size"),s("="),a("span",{class:"hljs-string"},'"[20, 20]"'),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-progress"),s(),a("span",{class:"hljs-attr"},"mode"),s("="),a("span",{class:"hljs-string"},'"circle"'),s(),a("span",{class:"hljs-attr"},":value"),s("="),a("span",{class:"hljs-string"},'"30"'),s(),a("span",{class:"hljs-attr"},"line-width"),s("="),a("span",{class:"hljs-string"},'"5"'),s(),a("span",{class:"hljs-attr"},":size"),s("="),a("span",{class:"hljs-string"},'"56"'),s(" />")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-progress"),s(),a("span",{class:"hljs-attr"},"mode"),s("="),a("span",{class:"hljs-string"},'"circle"'),s(),a("span",{class:"hljs-attr"},"label"),s(),a("span",{class:"hljs-attr"},":value"),s("="),a("span",{class:"hljs-string"},'"value"'),s(),a("span",{class:"hljs-attr"},"line-width"),s("="),a("span",{class:"hljs-string"},'"5"'),s(),a("span",{class:"hljs-attr"},":size"),s("="),a("span",{class:"hljs-string"},'"56"'),s(" />")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-progress"),s(),a("span",{class:"hljs-attr"},"mode"),s("="),a("span",{class:"hljs-string"},'"circle"'),s(),a("span",{class:"hljs-attr"},"label"),s(),a("span",{class:"hljs-attr"},":value"),s("="),a("span",{class:"hljs-string"},'"100"'),s(),a("span",{class:"hljs-attr"},"line-width"),s("="),a("span",{class:"hljs-string"},'"5"'),s(),a("span",{class:"hljs-attr"},":size"),s("="),a("span",{class:"hljs-string"},'"56"'),s(" />")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-space"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),U={class:"card"},C=a("h3",null,"\u9690\u85CF\u8F68\u9053",-1),V=a("p",null,[s("\u901A\u8FC7 "),a("code",null,"track"),s(" \u5C5E\u6027\u9690\u85CF track\u3002")],-1),$=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-progress"),s(),a("span",{class:"hljs-attr"},"mode"),s("="),a("span",{class:"hljs-string"},'"circle"'),s(),a("span",{class:"hljs-attr"},":value"),s("="),a("span",{class:"hljs-string"},'"50"'),s(),a("span",{class:"hljs-attr"},":size"),s("="),a("span",{class:"hljs-string"},'"56"'),s(),a("span",{class:"hljs-attr"},":track"),s("="),a("span",{class:"hljs-string"},'"false"'),s(" />")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),B=p('<h2>API</h2><div class="card"><h3>\u5C5E\u6027</h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td><code>mode</code></td><td><code>progress</code> \u7684\u6A21\u5F0F\uFF0C\u53EF\u9009\u503C\u4E3A <code>linear, circle</code></td><td><em>string</em></td><td><code>linear</code></td></tr><tr><td><code>value</code></td><td><code>progress</code> \u7684\u8FDB\u5EA6</td><td><em>string | number</em></td><td><code>0</code></td></tr><tr><td><code>line-width</code></td><td><code>progress</code> \u7684\u7EBF\u5BBD</td><td><em>string | number</em></td><td><code>4</code></td></tr><tr><td><code>color</code></td><td><code>progress</code> \u7684\u989C\u8272</td><td><em>string</em></td><td><code>#005CAF</code></td></tr><tr><td><code>track-color</code></td><td><code>progress</code> \u8F68\u9053\u7684\u989C\u8272</td><td><em>string</em></td><td><code>#d8d8d8</code></td></tr><tr><td><code>label</code></td><td>\u662F\u5426\u663E\u793A <code>label</code></td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>label-class</code></td><td>\u81EA\u5B9A\u4E49 <code>label</code> \u7684\u7C7B\u540D</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>track</code></td><td>\u662F\u5426\u663E\u793A <code>progress</code> \u7684\u8F68\u9053</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>ripple</code></td><td>\u6C34\u6CE2\u7EB9\u52A0\u8F7D\u6548\u679C\uFF08\u4EC5\u652F\u6301\u7EBF\u6027\u8FDB\u5EA6\u6761\uFF09</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>size</code></td><td><code>progress</code> \u7684\u5C3A\u5BF8\uFF08\u4EC5\u652F\u6301\u73AF\u5F62\u8FDB\u5EA6\u6761\uFF09</td><td><em>string | number</em></td><td><code>40</code></td></tr><tr><td><code>rotate</code></td><td><code>progress</code> \u7684\u539F\u70B9\uFF08\u4EC5\u652F\u6301\u73AF\u5F62\u8FDB\u5EA6\u6761\uFF09</td><td><em>number</em></td><td><code>0</code></td></tr></tbody></table></div><div class="card"><h3>\u63D2\u69FD</h3><table><thead><tr><th>\u540D\u79F0</th><th>\u8BF4\u660E</th><th>\u53C2\u6570</th></tr></thead><tbody><tr><td><code>default</code></td><td>\u81EA\u5B9A\u4E49 label</td><td><code>-</code></td></tr></tbody></table></div><div class="card"><h3>\u6837\u5F0F\u53D8\u91CF</h3><p>\u4EE5\u4E0B\u4E3A\u7EC4\u4EF6\u4F7F\u7528\u7684 css \u53D8\u91CF\uFF0C\u53EF\u4EE5\u4F7F\u7528 <a href="#/zh-CN/style-provider">StyleProvider \u7EC4\u4EF6</a> \u8FDB\u884C\u6837\u5F0F\u5B9A\u5236</p><table><thead><tr><th>\u53D8\u91CF\u540D</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td><code>--progress-font-size</code></td><td><code>var(--font-size-sm)</code></td></tr><tr><td><code>--progress-ripple-color</code></td><td><code>#fff</code></td></tr><tr><td><code>--progress-track-color</code></td><td><code>#d8d8d8</code></td></tr><tr><td><code>--progress-background</code></td><td><code>var(--color-primary)</code></td></tr></tbody></table></div>',4);function P(S,A,q,E,F,T){const l=c("var-site-code-example");return r(),d("div",h,[j,i,a("div",u,[m,g,n(l,null,{default:t(()=>[v]),_:1})]),a("div",_,[f,b,n(l,null,{default:t(()=>[w]),_:1})]),a("div",k,[y,z,n(l,null,{default:t(()=>[x]),_:1})]),a("div",I,[M,n(l,null,{default:t(()=>[N]),_:1})]),a("div",U,[C,V,n(l,null,{default:t(()=>[$]),_:1})]),B])}const G=e(o,[["render",P]]);export{G as default};
