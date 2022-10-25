import{_ as n,p as c,f as d,h as o,M as a,q as l,S as e,P as s,at as r}from"./vue-router.esm-bundler.786782d7.js";const h={components:{}},i={class:"varlet-site-doc"},p=a("h1",null,"PullRefresh",-1),j=a("div",{class:"card"},[a("h3",null,"Intro"),a("p",null,"Provides a drop-down refresh interaction.")],-1),u={class:"card"},f=a("h3",null,"Basic Usage",-1),m=a("p",null,[s("The refresh event will be Emitted when pull refresh, you should set "),a("code",null,"v-model"),s(" to "),a("code",null,"true"),s(" at the beginning of the event indicates that loading is under way, and setting "),a("code",null,"v-model"),s(" to "),a("code",null,"false"),s(" after completion indicates that loading is over.")],-1),g=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"javascript"},[s(`
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
`)])],-1),v={class:"card"},_=a("h3",null,"Combine",-1),b=a("p",null,[s("Combined with the "),a("code",null,"List"),s(" component to implement the function of pull-up loading and pull-down refresh, ensuring the height of the "),a("code",null,"PullRefresh"),s(" is not "),a("code",null,"0"),s(" .")],-1),y=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"javascript"},[s(`
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
`)])],-1),w={class:"card"},k=a("h3",null,"Attention",-1),x=a("p",null,[s("When the height of the "),a("code",null,"PullRefresh"),s(" is "),a("code",null,"0"),s(", it will be unavailable, so you need to ensure that the height of its child elements is "),a("strong",null,"not"),s(),a("code",null,"0"),s(" or set height for the "),a("code",null,"PullRefresh"),s(":")],-1),S=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-pull-refresh"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"div"),s(),a("span",{class:"hljs-attr"},"style"),s("="),a("span",{class:"hljs-string"},'"height: 200px"'),s(">")]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"div"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-pull-refresh"),s(">")]),s(`

  `),a("span",{class:"hljs-comment"},"<!-- or -->"),s(`
  
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-pull-refresh"),s(),a("span",{class:"hljs-attr"},"style"),s("="),a("span",{class:"hljs-string"},'"height: 200px"'),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"div"),s(">")]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"div"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-pull-refresh"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),P=r('<h2>API</h2><div class="card"><h3>Props</h3><table><thead><tr><th>Prop</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>v-model</code></td><td>Loading status</td><td><em>boolean</em></td><td><code>-</code></td></tr><tr><td><code>disabled</code></td><td>Whether to disable pull refresh</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>animation-duration</code></td><td>The duration of the animation to return to the initial position after loading(ms)</td><td><em>string | number</em></td><td><code>300</code></td></tr><tr><td><code>success-duration</code></td><td>Success text display duration(ms)</td><td><em>string | number</em></td><td><code>2000</code></td></tr><tr><td><code>bg-color</code></td><td>BackgroundColor of control</td><td><em>string</em></td><td><code>#005CAF</code></td></tr><tr><td><code>color</code></td><td>color of control</td><td><em>string</em></td><td><code>#ffffff</code></td></tr><tr><td><code>success-bg-color</code></td><td>BackgroundColor of control when the status is success</td><td><em>string</em></td><td><code>#4CAF50</code></td></tr><tr><td><code>success-color</code></td><td>color of control when the status is success</td><td><em>string</em></td><td><code>ffffff</code></td></tr></tbody></table></div><div class="card"><h3>Events</h3><table><thead><tr><th>Event</th><th>Description</th><th>arguments</th></tr></thead><tbody><tr><td><code>refresh</code></td><td>Emitted after pulling refresh</td><td><code>-</code></td></tr></tbody></table></div><div class="card"><h3>Slots</h3><table><thead><tr><th>Name</th><th>Description</th><th>SlotProps</th></tr></thead><tbody><tr><td><code>default</code></td><td>Default slot</td><td><code>-</code></td></tr></tbody></table></div><div class="card"><h3>Style Variables</h3><p>Here are the CSS variables used by the component, Styles can be customized using <a href="#/en-US/style-provider">StyleProvider</a></p><table><thead><tr><th>Variable</th><th>Default</th></tr></thead><tbody><tr><td><code>--pull-refresh-size</code></td><td><code>40px</code></td></tr><tr><td><code>--pull-refresh-background</code></td><td><code>#fff</code></td></tr><tr><td><code>--pull-refresh-color</code></td><td><code>var(--color-primary)</code></td></tr><tr><td><code>--pull-refresh-success-color</code></td><td><code>var(--color-success)</code></td></tr><tr><td><code>--pull-refresh-icon-size</code></td><td><code>25px</code></td></tr></tbody></table></div>',5);function C(T,R,A,B,D,I){const t=c("var-site-code-example");return d(),o("div",i,[p,j,a("div",u,[f,m,l(t,null,{default:e(()=>[g]),_:1})]),a("div",v,[_,b,l(t,null,{default:e(()=>[y]),_:1})]),a("div",w,[k,x,l(t,{"playground-ignore":""},{default:e(()=>[S]),_:1})]),P])}const V=n(h,[["render",C]]);export{V as default};
