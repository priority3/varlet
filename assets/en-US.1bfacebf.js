import{_ as e,p as c,f as r,h as o,M as a,q as t,S as n,P as s,at as p}from"./vue-router.esm-bundler.786782d7.js";const d={components:{}},h={class:"varlet-site-doc"},i=a("h1",null,"Progress",-1),j=a("div",{class:"card"},[a("h3",null,"Intro"),a("p",null,"Display the current progress of an operation flow.")],-1),u={class:"card"},g=a("h3",null,"Basic Usage",-1),m=a("p",null,[s("Set the current progress through the "),a("code",null,"value"),s(" attribute.")],-1),v=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"javascript"},[s(`
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
`)])],-1),f={class:"card"},b=a("h3",null,"Show Label",-1),_=a("p",null,[s("The label is displayed through the "),a("code",null,"label"),s(" attribute. The label is the percentage of progress by default. You can use the slot to insert custom content.")],-1),w=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"javascript"},[s(`
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
`)])],-1),y={class:"card"},k=a("h3",null,"Custom Style",-1),S=a("p",null,[s("Set the line width, progress bar color, track color and ripple loading effect through the attributes of "),a("code",null,"line-width"),s(", "),a("code",null,"color"),s(", "),a("code",null,"track-color"),s(" and "),a("code",null,"ripple"),s(".")],-1),z=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
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
`)])],-1),C={class:"card"},U=a("h3",null,"Progress circle",-1),I=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"javascript"},[s(`
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
`)])],-1),M={class:"card"},P=a("h3",null,"Hide Track",-1),x=a("p",null,[s("Use "),a("code",null,"track"),s(" prop to hide track.")],-1),V=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-progress"),s(),a("span",{class:"hljs-attr"},"mode"),s("="),a("span",{class:"hljs-string"},'"circle"'),s(),a("span",{class:"hljs-attr"},":value"),s("="),a("span",{class:"hljs-string"},'"50"'),s(),a("span",{class:"hljs-attr"},":size"),s("="),a("span",{class:"hljs-string"},'"56"'),s(),a("span",{class:"hljs-attr"},":track"),s("="),a("span",{class:"hljs-string"},'"false"'),s(" />")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),D=p('<h2>API</h2><div class="card"><h3>Props</h3><table><thead><tr><th>prop</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>mode</code></td><td>Mode of Progress. Optional value is <code>linear, circle</code></td><td><em>string</em></td><td><code>linear</code></td></tr><tr><td><code>value</code></td><td>Completion value</td><td><em>string | number</em></td><td><code>0</code></td></tr><tr><td><code>line-width</code></td><td>Width of the progress bar</td><td><em>string | number</em></td><td><code>4</code></td></tr><tr><td><code>color</code></td><td>Color of the progress bar</td><td><em>string</em></td><td><code>#005CAF</code></td></tr><tr><td><code>track-color</code></td><td>Color of the progress track</td><td><em>string</em></td><td><code>#d8d8d8</code></td></tr><tr><td><code>label</code></td><td>Whether the label is visible or not</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>label-class</code></td><td>Custom label class name</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>track</code></td><td>Whether the progress track is visible or not</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>ripple</code></td><td>Loading style for progress (only supports linear progress)</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>size</code></td><td>Size of progress (only supports circle progress)</td><td><em>string | number</em></td><td><code>40</code></td></tr><tr><td><code>rotate</code></td><td>Origin of progress (only supports circle progress)</td><td><em>number</em></td><td><code>0</code></td></tr></tbody></table></div><div class="card"><h3>Slots</h3><table><thead><tr><th>Name</th><th>Description</th><th>SlotProps</th></tr></thead><tbody><tr><td><code>default</code></td><td>Custom label</td><td><code>-</code></td></tr></tbody></table></div><div class="card"><h3>Style Variables</h3><p>Here are the CSS variables used by the component, Styles can be customized using <a href="#/en-US/style-provider">StyleProvider</a></p><table><thead><tr><th>Variable</th><th>Default</th></tr></thead><tbody><tr><td><code>--progress-font-size</code></td><td><code>var(--font-size-sm)</code></td></tr><tr><td><code>--progress-ripple-color</code></td><td><code>#fff</code></td></tr><tr><td><code>--progress-track-color</code></td><td><code>#d8d8d8</code></td></tr><tr><td><code>--progress-background</code></td><td><code>var(--color-primary)</code></td></tr></tbody></table></div>',4);function N(T,B,$,W,A,H){const l=c("var-site-code-example");return r(),o("div",h,[i,j,a("div",u,[g,m,t(l,null,{default:n(()=>[v]),_:1})]),a("div",f,[b,_,t(l,null,{default:n(()=>[w]),_:1})]),a("div",y,[k,S,t(l,null,{default:n(()=>[z]),_:1})]),a("div",C,[U,t(l,null,{default:n(()=>[I]),_:1})]),a("div",M,[P,x,t(l,null,{default:n(()=>[V]),_:1})]),D])}const O=e(d,[["render",N]]);export{O as default};
