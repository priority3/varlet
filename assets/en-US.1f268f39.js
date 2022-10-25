import{_ as e,p as c,f as p,h as r,M as a,q as l,S as n,P as s,at as h}from"./vue-router.esm-bundler.786782d7.js";const o={components:{}},d={class:"varlet-site-doc"},j=a("h1",null,"AppBar",-1),i={class:"card"},m=a("h3",null,"Basic AppBar",-1),g=a("p",null,[s("Set the navigation bar title through the "),a("code",null,"title"),s(" attribute.")],-1),u=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-app-bar"),s(),a("span",{class:"hljs-attr"},"title"),s("="),a("span",{class:"hljs-string"},'"title"'),s(" />")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),f={class:"card"},b=a("h3",null,"Custom Style",-1),v=a("p",null,[s("Set the position of the title and the color of the navigation bar through the "),a("code",null,"title-position"),s(" and "),a("code",null,"color"),s(" attributes.")],-1),_=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-app-bar"),s(`
    `),a("span",{class:"hljs-attr"},"title"),s("="),a("span",{class:"hljs-string"},'"title"'),s(`
    `),a("span",{class:"hljs-attr"},"title-position"),s("="),a("span",{class:"hljs-string"},'"center"'),s(`
    `),a("span",{class:"hljs-attr"},"color"),s("="),a("span",{class:"hljs-string"},'"#00c48f"'),s(`
  />`)]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),k={class:"card"},y=a("h3",null,"Add Slots At Title",-1),x=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-app-bar"),s(">")]),s("Add the title from the slot"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-app-bar"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),S={class:"card"},w=a("h3",null,"Add Left Slot",-1),B=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"javascript"},[s(`
`),a("span",{class:"hljs-keyword"},"import"),s(" { Snackbar } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'@varlet/ui'"),s(`

`),a("span",{class:"hljs-keyword"},"const"),s(" goBack = "),a("span",{class:"hljs-function"},"() =>"),s(` {
  Snackbar({
    `),a("span",{class:"hljs-attr"},"content"),s(": "),a("span",{class:"hljs-string"},"'Go Back'"),s(`,
    `),a("span",{class:"hljs-attr"},"position"),s(": "),a("span",{class:"hljs-string"},"'top'"),s(`
  })
}
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-app-bar"),s(),a("span",{class:"hljs-attr"},"title"),s("="),a("span",{class:"hljs-string"},'"title"'),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(" #"),a("span",{class:"hljs-attr"},"left"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-button"),s(`
        `),a("span",{class:"hljs-attr"},"round"),s(`
        `),a("span",{class:"hljs-attr"},"text"),s(`
        `),a("span",{class:"hljs-attr"},"color"),s("="),a("span",{class:"hljs-string"},'"transparent"'),s(`
        `),a("span",{class:"hljs-attr"},"text-color"),s("="),a("span",{class:"hljs-string"},'"#ffffff"'),s(`
        @`),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},'"goBack"'),s(`
      >`)]),s(`
        `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-icon"),s(),a("span",{class:"hljs-attr"},"name"),s("="),a("span",{class:"hljs-string"},'"chevron-left"'),s(),a("span",{class:"hljs-attr"},":size"),s("="),a("span",{class:"hljs-string"},'"24"'),s(" />")]),s(`
      `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-button"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-app-bar"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),A={class:"card"},T=a("h3",null,"Add Right Slot",-1),z=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"javascript"},[s(`
`),a("span",{class:"hljs-keyword"},"import"),s(" { Snackbar } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'@varlet/ui'"),s(`

`),a("span",{class:"hljs-keyword"},"const"),s(" searchData = "),a("span",{class:"hljs-function"},"() =>"),s(` {
  Snackbar({
    `),a("span",{class:"hljs-attr"},"content"),s(": "),a("span",{class:"hljs-string"},"'search'"),s(`,
    `),a("span",{class:"hljs-attr"},"position"),s(": "),a("span",{class:"hljs-string"},"'top'"),s(`
  })
}
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-app-bar"),s(),a("span",{class:"hljs-attr"},"title"),s("="),a("span",{class:"hljs-string"},'"title"'),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(" #"),a("span",{class:"hljs-attr"},"right"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-button"),s(`
        `),a("span",{class:"hljs-attr"},"round"),s(`
        `),a("span",{class:"hljs-attr"},"text"),s(`
        `),a("span",{class:"hljs-attr"},"color"),s("="),a("span",{class:"hljs-string"},'"transparent"'),s(`
        `),a("span",{class:"hljs-attr"},"text-color"),s("="),a("span",{class:"hljs-string"},'"#ffffff"'),s(`
        @`),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},'"searchData"'),s(`
      >`)]),s(`
        `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-icon"),s(),a("span",{class:"hljs-attr"},"name"),s("="),a("span",{class:"hljs-string"},'"magnify"'),s(),a("span",{class:"hljs-attr"},":size"),s("="),a("span",{class:"hljs-string"},'"24"'),s(" />")]),s(`
      `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-button"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-app-bar"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),C={class:"card"},D=a("h3",null,"Add Left And Right Slot",-1),P=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"javascript"},[s(`
`),a("span",{class:"hljs-keyword"},"import"),s(" { ref } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`
`),a("span",{class:"hljs-keyword"},"import"),s(" { Snackbar } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'@varlet/ui'"),s(`

`),a("span",{class:"hljs-keyword"},"const"),s(" offsetY = ref("),a("span",{class:"hljs-literal"},"false"),s(`)
`),a("span",{class:"hljs-keyword"},"const"),s(` menuList = ref([
  { `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'options1'"),s(", "),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-string"},"'menu1'"),s(` },
  { `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'options2'"),s(", "),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-string"},"'menu2'"),s(` }
])

`),a("span",{class:"hljs-keyword"},"const"),s(" goBack = "),a("span",{class:"hljs-function"},"() =>"),s(` {
  Snackbar({
    `),a("span",{class:"hljs-attr"},"content"),s(": "),a("span",{class:"hljs-string"},"'Go Back'"),s(`,
    `),a("span",{class:"hljs-attr"},"position"),s(": "),a("span",{class:"hljs-string"},"'top'"),s(`
  })
}
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-app-bar"),s(),a("span",{class:"hljs-attr"},"title"),s("="),a("span",{class:"hljs-string"},'"Title"'),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(" #"),a("span",{class:"hljs-attr"},"left"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-button"),s(`
        `),a("span",{class:"hljs-attr"},"round"),s(`
        `),a("span",{class:"hljs-attr"},"text"),s(`
        `),a("span",{class:"hljs-attr"},"color"),s("="),a("span",{class:"hljs-string"},'"transparent"'),s(`
        `),a("span",{class:"hljs-attr"},"text-color"),s("="),a("span",{class:"hljs-string"},'"#fff"'),s(`
        @`),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},'"goBack"'),s(`
      >`)]),s(`
        `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-icon"),s(),a("span",{class:"hljs-attr"},"name"),s("="),a("span",{class:"hljs-string"},'"chevron-left"'),s(),a("span",{class:"hljs-attr"},":size"),s("="),a("span",{class:"hljs-string"},'"24"'),s(" />")]),s(`
      `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-button"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`

    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(" #"),a("span",{class:"hljs-attr"},"right"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-menu"),s(` 
        `),a("span",{class:"hljs-attr"},"class"),s("="),a("span",{class:"hljs-string"},'"app-bar-example-menu"'),s(` 
        `),a("span",{class:"hljs-attr"},":offset-y"),s("="),a("span",{class:"hljs-string"},'"42"'),s(` 
        `),a("span",{class:"hljs-attr"},":offset-x"),s("="),a("span",{class:"hljs-string"},'"-20"'),s(` 
        `),a("span",{class:"hljs-attr"},"v-model:show"),s("="),a("span",{class:"hljs-string"},'"offsetY"'),s(`
      >`)]),s(`
        `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-button"),s(`
          `),a("span",{class:"hljs-attr"},"round"),s(`
          `),a("span",{class:"hljs-attr"},"text"),s(`
          `),a("span",{class:"hljs-attr"},"color"),s("="),a("span",{class:"hljs-string"},'"transparent"'),s(`
          `),a("span",{class:"hljs-attr"},"text-color"),s("="),a("span",{class:"hljs-string"},'"#ffffff"'),s(`
          @`),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},'"offsetY = true"'),s(`
        >`)]),s(`
          `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-icon"),s(),a("span",{class:"hljs-attr"},"name"),s("="),a("span",{class:"hljs-string"},'"menu"'),s(),a("span",{class:"hljs-attr"},":size"),s("="),a("span",{class:"hljs-string"},'"24"'),s(" />")]),s(`
        `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-button"),s(">")]),s(`

        `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(" #"),a("span",{class:"hljs-attr"},"menu"),s(">")]),s(`
          `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"div"),s(),a("span",{class:"hljs-attr"},"class"),s("="),a("span",{class:"hljs-string"},'"app-bar-example-menu-list"'),s(">")]),s(`
            `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-cell"),s(`
              `),a("span",{class:"hljs-attr"},"class"),s("="),a("span",{class:"hljs-string"},'"app-bar-example-menu-cell"'),s(`
              `),a("span",{class:"hljs-attr"},"v-for"),s("="),a("span",{class:"hljs-string"},'"value in menuList"'),s(`
              `),a("span",{class:"hljs-attr"},":key"),s("="),a("span",{class:"hljs-string"},'"value.value"'),s(`
              `),a("span",{class:"hljs-attr"},"v-ripple"),s(`
            >`)]),s(`
              {{ value.label }}
            `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-cell"),s(">")]),s(`
          `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"div"),s(">")]),s(`
        `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-menu"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-app-bar"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"style"),s(">")]),a("span",{class:"css"},[s(`
`),a("span",{class:"hljs-selector-class"},".app-bar-example-menu"),s(` {   
  `),a("span",{class:"hljs-attribute"},"background"),s(`: transparent; 
}

`),a("span",{class:"hljs-selector-class"},".app-bar-example-menu-list"),s(` {
  `),a("span",{class:"hljs-attribute"},"background"),s(": "),a("span",{class:"hljs-number"},"#fff"),s(`;
}

`),a("span",{class:"hljs-selector-class"},".app-bar-example-menu-cell"),s(` {
  `),a("span",{class:"hljs-attribute"},"display"),s(`: block;
  `),a("span",{class:"hljs-attribute"},"padding"),s(": "),a("span",{class:"hljs-number"},"10px"),s(`;
}
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"style"),s(">")]),s(`
`)])],-1),V=h('<h2>API</h2><div class="card"><h3>Props</h3><table><thead><tr><th>Prop</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>color</code></td><td>Background</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>text-color</code></td><td>Text color</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>title</code></td><td>Title</td><td><em>string</em></td><td>-</td></tr><tr><td><code>title-position</code></td><td>Title location,Can be set to <code>left</code>,<code>center</code>,<code>right</code></td><td><em>string</em></td><td><code>left</code></td></tr><tr><td><code>elevation</code></td><td>Set altitude for navigation bar</td><td><em>boolean</em></td><td><code>true</code></td></tr></tbody></table></div><div class="card"><h3>Slots</h3><table><thead><tr><th>Name</th><th>Description</th><th>SlotProps</th></tr></thead><tbody><tr><td><code>default</code></td><td>Customize the title content to override the <code>title</code> content</td><td><code>-</code></td></tr><tr><td><code>left</code></td><td>Insert the content to the left of the AppBar</td><td><code>-</code></td></tr><tr><td><code>right</code></td><td>Insert the content to the right of the AppBar</td><td><code>-</code></td></tr></tbody></table></div><div class="card"><h3>Style Variables</h3><p>Here are the CSS variables used by the component, Styles can be customized using <a href="#/en-US/style-provider">StyleProvider</a></p><table><thead><tr><th>Variable</th><th>Default</th></tr></thead><tbody><tr><td><code>--app-bar-color</code></td><td><code>var(--color-primary)</code></td></tr><tr><td><code>--app-bar-text-color</code></td><td><code>#fff</code></td></tr><tr><td><code>--app-bar-height</code></td><td><code>54px</code></td></tr><tr><td><code>--app-bar-title-padding</code></td><td><code>0 12px</code></td></tr><tr><td><code>--app-bar-left-gap</code></td><td><code>6px</code></td></tr><tr><td><code>--app-bar-right-gap</code></td><td><code>6px</code></td></tr></tbody></table></div>',4);function N(L,$,I,Y,G,R){const t=c("var-site-code-example");return p(),r("div",d,[j,a("div",i,[m,g,l(t,null,{default:n(()=>[u]),_:1})]),a("div",f,[b,v,l(t,null,{default:n(()=>[_]),_:1})]),a("div",k,[y,l(t,null,{default:n(()=>[x]),_:1})]),a("div",S,[w,l(t,null,{default:n(()=>[B]),_:1})]),a("div",A,[T,l(t,null,{default:n(()=>[z]),_:1})]),a("div",C,[D,l(t,null,{default:n(()=>[P]),_:1})]),V])}const q=e(o,[["render",N]]);export{q as default};
