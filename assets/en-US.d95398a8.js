import{_ as n,p as c,f as d,h as o,M as a,q as t,S as e,P as s,at as r}from"./vue-router.esm-bundler.786782d7.js";const h={components:{}},i={class:"varlet-site-doc"},p=a("h1",null,"List",-1),j=a("div",{class:"card"},[a("h3",null,"Intro"),a("p",null,"Unlimited scroll load list, touch bottom load, support manual check position load. Support custom loading state, error state, data loading completed state.")],-1),m={class:"card"},u=a("h3",null,"Basic Use",-1),g=a("p",null,[s("The "),a("code",null,"load"),s(" event is emitted when a scroll container is detected scrolling to the bottom\uFF0Cand will be set "),a("code",null,"loading"),s(" to "),a("code",null,"true"),s(", you need to manually set "),a("code",null,"loading"),s(" to "),a("code",null,"false"),s(" at the end of loading, that\u2019s the end of the load.")],-1),f=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"javascript"},[s(`
`),a("span",{class:"hljs-keyword"},"import"),s(" { ref } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`

`),a("span",{class:"hljs-keyword"},"const"),s(" loading = ref("),a("span",{class:"hljs-literal"},"false"),s(`)
`),a("span",{class:"hljs-keyword"},"const"),s(" finished = ref("),a("span",{class:"hljs-literal"},"false"),s(`)
`),a("span",{class:"hljs-keyword"},"const"),s(` list = ref([])
    
`),a("span",{class:"hljs-keyword"},"const"),s(" load = "),a("span",{class:"hljs-function"},"() =>"),s(` {
  `),a("span",{class:"hljs-built_in"},"setTimeout"),s("("),a("span",{class:"hljs-function"},"() =>"),s(` {
    `),a("span",{class:"hljs-keyword"},"for"),s(" ("),a("span",{class:"hljs-keyword"},"let"),s(" i = "),a("span",{class:"hljs-number"},"0"),s("; i < "),a("span",{class:"hljs-number"},"20"),s(`; i++) {
      list.value.push(list.value.length + `),a("span",{class:"hljs-number"},"1"),s(`)
    }

    loading.value = `),a("span",{class:"hljs-literal"},"false"),s(`

    `),a("span",{class:"hljs-keyword"},"if"),s(" (list.value.length >= "),a("span",{class:"hljs-number"},"60"),s(`) {
      finished.value = `),a("span",{class:"hljs-literal"},"true"),s(`
    }
  }, `),a("span",{class:"hljs-number"},"1000"),s(`)
}
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-list"),s(`
    `),a("span",{class:"hljs-attr"},":finished"),s("="),a("span",{class:"hljs-string"},'"finished"'),s(`
    `),a("span",{class:"hljs-attr"},"v-model:loading"),s("="),a("span",{class:"hljs-string"},'"loading"'),s(`
    @`),a("span",{class:"hljs-attr"},"load"),s("="),a("span",{class:"hljs-string"},'"load"'),s(`
  >`)]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-cell"),s(),a("span",{class:"hljs-attr"},":key"),s("="),a("span",{class:"hljs-string"},'"item"'),s(),a("span",{class:"hljs-attr"},"v-for"),s("="),a("span",{class:"hljs-string"},'"item in list"'),s(">")]),s(`
      List Item: {{ item }}
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-cell"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-list"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),v={class:"card"},b=a("h3",null,"Load Fail",-1),y=a("p",null,[s("You can manually set the error status using "),a("code",null,"v-model:error"),s(", an error message is displayed. Clicking on the error message will help you set the "),a("code",null,"error"),s(" to "),a("code",null,"false"),s(" and trigger the "),a("code",null,"load"),s(" event again.")],-1),_=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"javascript"},[s(`
`),a("span",{class:"hljs-keyword"},"import"),s(" { ref } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`

`),a("span",{class:"hljs-keyword"},"const"),s(" loading = ref("),a("span",{class:"hljs-literal"},"false"),s(`)
`),a("span",{class:"hljs-keyword"},"const"),s(" error = ref("),a("span",{class:"hljs-literal"},"false"),s(`)
`),a("span",{class:"hljs-keyword"},"const"),s(` list = ref([])
    
`),a("span",{class:"hljs-keyword"},"const"),s(" load = "),a("span",{class:"hljs-function"},"() =>"),s(` {
  `),a("span",{class:"hljs-built_in"},"setTimeout"),s("("),a("span",{class:"hljs-function"},"() =>"),s(` {
    `),a("span",{class:"hljs-keyword"},"if"),s(" (list.value.length === "),a("span",{class:"hljs-number"},"40"),s(`) {
      error.value = `),a("span",{class:"hljs-literal"},"true"),s(`
      loading.value = `),a("span",{class:"hljs-literal"},"false"),s(`
      `),a("span",{class:"hljs-keyword"},"return"),s(`
    }

    `),a("span",{class:"hljs-keyword"},"for"),s(" ("),a("span",{class:"hljs-keyword"},"let"),s(" i = "),a("span",{class:"hljs-number"},"0"),s("; i < "),a("span",{class:"hljs-number"},"20"),s(`; i++) {
      list.value.push(list.value.length + `),a("span",{class:"hljs-number"},"1"),s(`)
    }

    loading.value = `),a("span",{class:"hljs-literal"},"false"),s(`
  }, `),a("span",{class:"hljs-number"},"1000"),s(`)
}
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-list"),s(`
    `),a("span",{class:"hljs-attr"},"v-model:error"),s("="),a("span",{class:"hljs-string"},'"error"'),s(`
    `),a("span",{class:"hljs-attr"},"v-model:loading"),s("="),a("span",{class:"hljs-string"},'"loading"'),s(`
    @`),a("span",{class:"hljs-attr"},"load"),s("="),a("span",{class:"hljs-string"},'"load"'),s(`
  >`)]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-cell"),s(),a("span",{class:"hljs-attr"},":key"),s("="),a("span",{class:"hljs-string"},'"item"'),s(),a("span",{class:"hljs-attr"},"v-for"),s("="),a("span",{class:"hljs-string"},'"item in list"'),s(">")]),s(`
      List Item: {{ item }}
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-cell"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-list"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),w={class:"card"},k=a("h3",null,"Tip Text",-1),x=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"javascript"},[s(`
`),a("span",{class:"hljs-keyword"},"import"),s(" { ref } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`

`),a("span",{class:"hljs-keyword"},"const"),s(" loading = ref("),a("span",{class:"hljs-literal"},"false"),s(`)
`),a("span",{class:"hljs-keyword"},"const"),s(" finished = ref("),a("span",{class:"hljs-literal"},"false"),s(`)
`),a("span",{class:"hljs-keyword"},"const"),s(` list = ref([])

`),a("span",{class:"hljs-keyword"},"const"),s(" load = "),a("span",{class:"hljs-function"},"() =>"),s(` {
  `),a("span",{class:"hljs-built_in"},"setTimeout"),s("("),a("span",{class:"hljs-function"},"() =>"),s(` {
    `),a("span",{class:"hljs-keyword"},"for"),s(" ("),a("span",{class:"hljs-keyword"},"let"),s(" i = "),a("span",{class:"hljs-number"},"0"),s("; i < "),a("span",{class:"hljs-number"},"20"),s(`; i++) {
      list.value.push(list.value.length + `),a("span",{class:"hljs-number"},"1"),s(`)
    }

    loading.value = `),a("span",{class:"hljs-literal"},"false"),s(`

    `),a("span",{class:"hljs-keyword"},"if"),s(" (list.value.length >= "),a("span",{class:"hljs-number"},"60"),s(`) {
      finished.value = `),a("span",{class:"hljs-literal"},"true"),s(`
    }
  }, `),a("span",{class:"hljs-number"},"1000"),s(`)
}
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-list"),s(` 
    `),a("span",{class:"hljs-attr"},"loading-text"),s("="),a("span",{class:"hljs-string"},'"loading QAQ"'),s(` 
    `),a("span",{class:"hljs-attr"},"finished-text"),s("="),a("span",{class:"hljs-string"},'"finished ORZ"'),s(` 
    `),a("span",{class:"hljs-attr"},"error-text"),s("="),a("span",{class:"hljs-string"},'"error TNT"'),s(` 
    `),a("span",{class:"hljs-attr"},":finished"),s("="),a("span",{class:"hljs-string"},'"finished"'),s(` 
    `),a("span",{class:"hljs-attr"},"v-model:loading"),s("="),a("span",{class:"hljs-string"},'"loading"'),s(` 
    @`),a("span",{class:"hljs-attr"},"load"),s("="),a("span",{class:"hljs-string"},'"load"'),s(`
  >`)]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-cell"),s(),a("span",{class:"hljs-attr"},":key"),s("="),a("span",{class:"hljs-string"},'"item"'),s(),a("span",{class:"hljs-attr"},"v-for"),s("="),a("span",{class:"hljs-string"},'"item in list"'),s(">")]),s(`
      List Item: {{ item }}
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-cell"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-list"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),T={class:"card"},L=a("h3",null,"Combine",-1),S=a("p",null,[s("Combined with the "),a("code",null,"PullRefresh"),s(" component to implement the function of pull-up loading and pull-down refresh, ensuring the height of the "),a("code",null,"PullRefresh"),s(" is not "),a("code",null,"0"),s(" .")],-1),z=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"javascript"},[s(`
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
`)])],-1),C=r('<div class="card"><h3>Be Careful</h3><p>We detect bottoming by listening for the scroll event of the scroll container and perform the load. A scroll container is the nearest element that <code>overflow-y=&#39;auto&#39;</code> or <code>scroll</code> When you set an element\u2019s <code>overflow-x</code> to a value other than <code>visible</code>, The browser will fix your <code>overflow-y</code> to <code>auto</code> in order to maintain a <code>BFC</code> structure. This can be mistaken for a scroll container, so avoid it.</p></div><h2>API</h2><div class="card"><h3>Props</h3><table><thead><tr><th>Prop</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>v-model:loading</code></td><td>loading state</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>v-model:error</code></td><td>error state</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>immediate-check</code></td><td>Whether the location is detected immediately when the List is initialized</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>finished</code></td><td>Whether the load is complete</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>offset</code></td><td>Trigger distance from the bottom</td><td><em>string | number</em></td><td><code>0</code></td></tr><tr><td><code>loading-text</code></td><td>Loading text</td><td><em>string</em></td><td><code>Loading</code></td></tr><tr><td><code>finished-text</code></td><td>Finished text</td><td><em>string</em></td><td><code>No more</code></td></tr><tr><td><code>error-text</code></td><td>Error text</td><td><em>string</em></td><td><code>Load fail</code></td></tr></tbody></table></div><div class="card"><h3>Methods</h3><table><thead><tr><th>Method</th><th>Description</th><th>Arguments</th></tr></thead><tbody><tr><td><code>check</code></td><td>Trigger position check, touch bottom trigger load event</td><td><code>-</code></td></tr></tbody></table></div><div class="card"><h3>Events</h3><table><thead><tr><th>Event</th><th>Description</th><th>Arguments</th></tr></thead><tbody><tr><td><code>load</code></td><td>Triggered when it hit bottom</td><td><code>-</code></td></tr></tbody></table></div><div class="card"><h3>Slots</h3><table><thead><tr><th>Name</th><th>Description</th><th>SlotProps</th></tr></thead><tbody><tr><td><code>default</code></td><td>List content</td><td><code>-</code></td></tr><tr><td><code>loading</code></td><td>Loading content</td><td><code>-</code></td></tr><tr><td><code>error</code></td><td>Error content</td><td><code>-</code></td></tr><tr><td><code>finished</code></td><td>Finished content</td><td><code>-</code></td></tr></tbody></table></div><div class="card"><h3>Style Variables</h3><p>Here are the CSS variables used by the component, Styles can be customized using <a href="#/en-US/style-provider">StyleProvider</a></p><table><thead><tr><th>Variable</th><th>Default</th></tr></thead><tbody><tr><td><code>--list-loading-height</code></td><td><code>50px</code></td></tr><tr><td><code>--list-finished-height</code></td><td><code>50px</code></td></tr><tr><td><code>--list-error-height</code></td><td><code>50px</code></td></tr><tr><td><code>--list-loading-color</code></td><td><code>#888</code></td></tr><tr><td><code>--list-finished-color</code></td><td><code>#888</code></td></tr><tr><td><code>--list-error-color</code></td><td><code>#888</code></td></tr><tr><td><code>--list-loading-font-size</code></td><td><code>var(--font-size-md)</code></td></tr><tr><td><code>--list-finished-font-size</code></td><td><code>var(--font-size-md)</code></td></tr><tr><td><code>--list-error-font-size</code></td><td><code>var(--font-size-md)</code></td></tr></tbody></table></div>',7);function P(N,B,D,I,V,A){const l=c("var-site-code-example");return d(),o("div",i,[p,j,a("div",m,[u,g,t(l,null,{default:e(()=>[f]),_:1})]),a("div",v,[b,y,t(l,null,{default:e(()=>[_]),_:1})]),a("div",w,[k,t(l,null,{default:e(()=>[x]),_:1})]),a("div",T,[L,S,t(l,null,{default:e(()=>[z]),_:1})]),C])}const F=n(h,[["render",P]]);export{F as default};
