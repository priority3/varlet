import{_ as e,p as c,f as r,h as o,M as s,q as t,S as n,P as a,at as p}from"./vue-router.esm-bundler.786782d7.js";const h={components:{}},i={class:"varlet-site-doc"},d=s("h1",null,"Style Provider",-1),j=s("div",{class:"card"},[s("h3",null,"Intro"),s("p",null,[a("Component libraries organize styles through "),s("a",{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties"},"CSS variables"),a(". Each component has a corresponding style variable, you can directly replace the style variable on the root node by overriding it with a CSS file. Or use StyleProvider components.")])],-1),u={class:"card"},m=s("h3",null,"Basic style variable",-1),b=s("p",null,"Here are some basic style variables for the component library",-1),g=s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-selector-pseudo"},":root"),a(` {
  --`),s("span",{class:"hljs-attribute"},"font-size"),a("-xs: "),s("span",{class:"hljs-number"},"10px"),a(`;
  --`),s("span",{class:"hljs-attribute"},"font-size"),a("-sm: "),s("span",{class:"hljs-number"},"12px"),a(`;
  --`),s("span",{class:"hljs-attribute"},"font-size"),a("-md: "),s("span",{class:"hljs-number"},"14px"),a(`;
  --`),s("span",{class:"hljs-attribute"},"font-size"),a("-lg: "),s("span",{class:"hljs-number"},"16px"),a(`;
  --`),s("span",{class:"hljs-attribute"},"icon"),a("-size-xs: "),s("span",{class:"hljs-number"},"16px"),a(`;
  --`),s("span",{class:"hljs-attribute"},"icon"),a("-size-sm: "),s("span",{class:"hljs-number"},"18px"),a(`;
  --`),s("span",{class:"hljs-attribute"},"icon"),a("-size-md: "),s("span",{class:"hljs-number"},"20px"),a(`;
  --`),s("span",{class:"hljs-attribute"},"icon"),a("-size-lg: "),s("span",{class:"hljs-number"},"22px"),a(`;
  --`),s("span",{class:"hljs-attribute"},"color"),a("-"),s("span",{class:"hljs-selector-tag"},"body"),a(": "),s("span",{class:"hljs-number"},"#fff"),a(`;
  --`),s("span",{class:"hljs-attribute"},"color"),a("-text: "),s("span",{class:"hljs-number"},"#333"),a(`;
  --`),s("span",{class:"hljs-attribute"},"color"),a("-primary: "),s("span",{class:"hljs-number"},"#3a7afe"),a(`;
  --`),s("span",{class:"hljs-attribute"},"color"),a("-info: "),s("span",{class:"hljs-number"},"#00afef"),a(`;
  --`),s("span",{class:"hljs-attribute"},"color"),a("-success: "),s("span",{class:"hljs-number"},"#00c48f"),a(`;
  --`),s("span",{class:"hljs-attribute"},"color"),a("-warning: "),s("span",{class:"hljs-number"},"#ff9f00"),a(`;
  --`),s("span",{class:"hljs-attribute"},"color"),a("-danger: "),s("span",{class:"hljs-number"},"#f44336"),a(`;
  --`),s("span",{class:"hljs-attribute"},"color"),a("-disabled: "),s("span",{class:"hljs-number"},"#e0e0e0"),a(`;
  --`),s("span",{class:"hljs-attribute"},"color"),a("-text-disabled: "),s("span",{class:"hljs-number"},"#aaa"),a(`;
  --cubic-bezier: `),s("span",{class:"hljs-built_in"},"cubic-bezier"),a("("),s("span",{class:"hljs-number"},"0.25"),a(", "),s("span",{class:"hljs-number"},"0.8"),a(", "),s("span",{class:"hljs-number"},"0.5"),a(", "),s("span",{class:"hljs-number"},"1"),a(`);
}
`)])],-1),v=s("div",{class:"card"},[s("h3",null,"Modify styles at runtime"),s("p",null,[a("Maybe you have a need to replace the style while the program is runtime\uFF0Clike a one-click skin change or something. The component library provides a StyleProvider component to assist in managing styles, Component provides\u2019 "),s("code",null,"component call"),a(" and "),s("code",null,"function call"),a(" and two invocation modes.")])],-1),y={class:"card"},_=s("h3",null,"Component Call",-1),f=s("p",null,[a("Component calls can have a scope of custom component styles, Scope contamination is avoided. Note that some elements sent outside the StyleProvider using the "),s("code",null,"teleport"),a(" will not work")],-1),S=s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-tag"},[a("<"),s("span",{class:"hljs-name"},"script"),a(),s("span",{class:"hljs-attr"},"setup"),a(">")]),s("span",{class:"javascript"},[a(`
`),s("span",{class:"hljs-keyword"},"import"),a(" { ref, reactive } "),s("span",{class:"hljs-keyword"},"from"),a(),s("span",{class:"hljs-string"},"'vue'"),a(`

`),s("span",{class:"hljs-keyword"},"const"),a(` state = reactive({
  `),s("span",{class:"hljs-attr"},"score"),a(": "),s("span",{class:"hljs-number"},"5"),a(`,
  `),s("span",{class:"hljs-attr"},"license"),a(": "),s("span",{class:"hljs-literal"},"true"),a(`,
})

`),s("span",{class:"hljs-keyword"},"const"),a(` successTheme = {
  `),s("span",{class:"hljs-string"},"'--rate-primary-color'"),a(": "),s("span",{class:"hljs-string"},"'var(--color-success)'"),a(`,
  `),s("span",{class:"hljs-string"},"'--button-primary-color'"),a(": "),s("span",{class:"hljs-string"},"'var(--color-success)'"),a(`,
  `),s("span",{class:"hljs-string"},"'--switch-handle-active-background'"),a(": "),s("span",{class:"hljs-string"},"'var(--color-success)'"),a(`,
  `),s("span",{class:"hljs-string"},"'--switch-track-active-background'"),a(": "),s("span",{class:"hljs-string"},"'var(--color-success)'"),a(`,
}

`),s("span",{class:"hljs-keyword"},"const"),a(" styleVars = ref("),s("span",{class:"hljs-literal"},"null"),a(`)

`),s("span",{class:"hljs-keyword"},"const"),a(" toggleTheme = "),s("span",{class:"hljs-function"},"() =>"),a(` {
  styleVars.value = styleVars.value ? `),s("span",{class:"hljs-literal"},"null"),a(` : successTheme
}
`)]),s("span",{class:"hljs-tag"},[a("</"),s("span",{class:"hljs-name"},"script"),a(">")]),a(`

`),s("span",{class:"hljs-tag"},[a("<"),s("span",{class:"hljs-name"},"template"),a(">")]),a(`
  `),s("span",{class:"hljs-tag"},[a("<"),s("span",{class:"hljs-name"},"var-style-provider"),a(),s("span",{class:"hljs-attr"},":style-vars"),a("="),s("span",{class:"hljs-string"},'"styleVars"'),a(">")]),a(`
    `),s("span",{class:"hljs-tag"},[a("<"),s("span",{class:"hljs-name"},"var-rate"),a(),s("span",{class:"hljs-attr"},"v-model"),a("="),s("span",{class:"hljs-string"},'"state.score"'),a(" />")]),a(`
    `),s("span",{class:"hljs-tag"},[a("<"),s("span",{class:"hljs-name"},"var-switch"),a(),s("span",{class:"hljs-attr"},"v-model"),a("="),s("span",{class:"hljs-string"},'"state.license"'),a(" />")]),a(`
    `),s("span",{class:"hljs-tag"},[a("<"),s("span",{class:"hljs-name"},"var-button"),a(` 
      `),s("span",{class:"hljs-attr"},"style"),a("="),s("span",{class:"hljs-string"},'"margin-top: 10px"'),a(` 
      `),s("span",{class:"hljs-attr"},"type"),a("="),s("span",{class:"hljs-string"},'"primary"'),a(`
      `),s("span",{class:"hljs-attr"},"block"),a(`
      @`),s("span",{class:"hljs-attr"},"click"),a("="),s("span",{class:"hljs-string"},'"toggleTheme"'),a(`
    >`)]),a(`
      Toggle Theme
    `),s("span",{class:"hljs-tag"},[a("</"),s("span",{class:"hljs-name"},"var-button"),a(">")]),a(`
  `),s("span",{class:"hljs-tag"},[a("</"),s("span",{class:"hljs-name"},"var-style-provider"),a(">")]),a(`
`),s("span",{class:"hljs-tag"},[a("</"),s("span",{class:"hljs-name"},"template"),a(">")]),a(`
`)])],-1),k={class:"card"},w=s("h3",null,"Function Call",-1),x=s("p",null,[a("A functional call is to update variables directly on "),s("code",null,":root"),a(", which is suitable for situations where a global update style is required")],-1),T=s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-tag"},[a("<"),s("span",{class:"hljs-name"},"script"),a(),s("span",{class:"hljs-attr"},"setup"),a(">")]),s("span",{class:"javascript"},[a(`
`),s("span",{class:"hljs-keyword"},"import"),a(" { StyleProvider } "),s("span",{class:"hljs-keyword"},"from"),a(),s("span",{class:"hljs-string"},"'@varlet/ui'"),a(`

`),s("span",{class:"hljs-keyword"},"let"),a(" rootStyleVars = "),s("span",{class:"hljs-literal"},"null"),a(`

`),s("span",{class:"hljs-keyword"},"const"),a(` darkTheme = {
  `),s("span",{class:"hljs-string"},"'--color-primary'"),a(": "),s("span",{class:"hljs-string"},"'#3f51b5'"),a(`
}

`),s("span",{class:"hljs-keyword"},"const"),a(" toggleRootTheme = "),s("span",{class:"hljs-function"},"() =>"),a(` {
  rootStyleVars = rootStyleVars ? `),s("span",{class:"hljs-literal"},"null"),a(` : darkTheme
  StyleProvider(rootStyleVars)
}
`)]),s("span",{class:"hljs-tag"},[a("</"),s("span",{class:"hljs-name"},"script"),a(">")]),a(`

`),s("span",{class:"hljs-tag"},[a("<"),s("span",{class:"hljs-name"},"template"),a(">")]),a(`
  `),s("span",{class:"hljs-tag"},[a("<"),s("span",{class:"hljs-name"},"var-button"),a(),s("span",{class:"hljs-attr"},"type"),a("="),s("span",{class:"hljs-string"},'"primary"'),a(),s("span",{class:"hljs-attr"},"block"),a(" @"),s("span",{class:"hljs-attr"},"click"),a("="),s("span",{class:"hljs-string"},'"toggleRootTheme"'),a(">")]),a("Toggle Root Theme"),s("span",{class:"hljs-tag"},[a("</"),s("span",{class:"hljs-name"},"var-button"),a(">")]),a(`
`),s("span",{class:"hljs-tag"},[a("</"),s("span",{class:"hljs-name"},"template"),a(">")]),a(`
`)])],-1),C=p('<h2>API</h2><div class="card"><h3>Props</h3><table><thead><tr><th>Prop</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>style-vars</code></td><td>CSS variables</td><td><em>Record&lt;string, string&gt;</em></td><td><code>{}</code></td></tr><tr><td><code>tag</code></td><td>Tag name</td><td><em>string</em></td><td><code>div</code></td></tr></tbody></table></div><div class="card"><h3>Slots</h3><table><thead><tr><th>Name</th><th>Description</th><th>SlotProps</th></tr></thead><tbody><tr><td><code>default</code></td><td>Component content</td><td><code>-</code></td></tr></tbody></table></div>',3);function z(V,P,N,B,R,$){const l=c("var-site-code-example");return r(),o("div",i,[d,j,s("div",u,[m,b,t(l,{"playground-ignore":""},{default:n(()=>[g]),_:1})]),v,s("div",y,[_,f,t(l,null,{default:n(()=>[S]),_:1})]),s("div",k,[w,x,t(l,null,{default:n(()=>[T]),_:1})]),C])}const M=e(h,[["render",z]]);export{M as default};
