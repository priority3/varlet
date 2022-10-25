import{_ as a,p as d,f as n,h as l,M as s,q as c,S as o,P as t,at as r}from"./vue-router.esm-bundler.786782d7.js";const h={components:{}},i={class:"varlet-site-doc"},p=s("h1",null,"IndexBar",-1),m=s("div",{class:"card"},[s("h3",null,"Intro"),s("p",null,"Hyperlinks to scroll on one page.")],-1),j={class:"card"},b=s("h3",null,"Basic Usage",-1),u=s("p",null,[t("When you click the index bar, it will automatically jump to the corresponding "),s("code",null,"IndexAnchor"),t(" anchor position.")],-1),g=s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-tag"},[t("<"),s("span",{class:"hljs-name"},"script"),t(),s("span",{class:"hljs-attr"},"setup"),t(">")]),s("span",{class:"javascript"},[t(`
`),s("span",{class:"hljs-keyword"},"import"),t(" { ref, onMounted } "),s("span",{class:"hljs-keyword"},"from"),t(),s("span",{class:"hljs-string"},"'vue'"),t(`

`),s("span",{class:"hljs-keyword"},"const"),t(` list = ref([])

`),s("span",{class:"hljs-keyword"},"const"),t(" change = "),s("span",{class:"hljs-function"},[t("("),s("span",{class:"hljs-params"},"value"),t(") =>")]),t(` {
  `),s("span",{class:"hljs-built_in"},"console"),t(`.log(value)
}

onMounted(`),s("span",{class:"hljs-function"},"() =>"),t(` {
  `),s("span",{class:"hljs-keyword"},"for"),t(" ("),s("span",{class:"hljs-keyword"},"let"),t(" i = "),s("span",{class:"hljs-number"},"0"),t("; i < "),s("span",{class:"hljs-number"},"26"),t(`; i++) {
    list.value.push(`),s("span",{class:"hljs-built_in"},"String"),t(".fromCharCode("),s("span",{class:"hljs-number"},"65"),t(` + i))
  }
})
`)]),s("span",{class:"hljs-tag"},[t("</"),s("span",{class:"hljs-name"},"script"),t(">")]),t(`

`),s("span",{class:"hljs-tag"},[t("<"),s("span",{class:"hljs-name"},"template"),t(">")]),t(`
  `),s("span",{class:"hljs-tag"},[t("<"),s("span",{class:"hljs-name"},"var-index-bar"),t(),s("span",{class:"hljs-attr"},"duration"),t("="),s("span",{class:"hljs-string"},'"300"'),t(" @"),s("span",{class:"hljs-attr"},"change"),t("="),s("span",{class:"hljs-string"},'"change"'),t(">")]),t(`
    `),s("span",{class:"hljs-tag"},[t("<"),s("span",{class:"hljs-name"},"div"),t(),s("span",{class:"hljs-attr"},"v-for"),t("="),s("span",{class:"hljs-string"},'"item in list"'),t(),s("span",{class:"hljs-attr"},":key"),t("="),s("span",{class:"hljs-string"},'"item"'),t(">")]),t(`
      `),s("span",{class:"hljs-tag"},[t("<"),s("span",{class:"hljs-name"},"var-index-anchor"),t(),s("span",{class:"hljs-attr"},":index"),t("="),s("span",{class:"hljs-string"},'"item"'),t(),s("span",{class:"hljs-attr"},"class"),t("="),s("span",{class:"hljs-string"},'"var-index-anchor__example"'),t(">")]),t(`
        Title {{ item }}
      `),s("span",{class:"hljs-tag"},[t("</"),s("span",{class:"hljs-name"},"var-index-anchor"),t(">")]),t(`
      `),s("span",{class:"hljs-tag"},[t("<"),s("span",{class:"hljs-name"},"var-cell"),t(">")]),t("{{ item }} Text"),s("span",{class:"hljs-tag"},[t("</"),s("span",{class:"hljs-name"},"var-cell"),t(">")]),t(`
      `),s("span",{class:"hljs-tag"},[t("<"),s("span",{class:"hljs-name"},"var-cell"),t(">")]),t("{{ item }} Text"),s("span",{class:"hljs-tag"},[t("</"),s("span",{class:"hljs-name"},"var-cell"),t(">")]),t(`
      `),s("span",{class:"hljs-tag"},[t("<"),s("span",{class:"hljs-name"},"var-cell"),t(">")]),t("{{ item }} Text"),s("span",{class:"hljs-tag"},[t("</"),s("span",{class:"hljs-name"},"var-cell"),t(">")]),t(`
    `),s("span",{class:"hljs-tag"},[t("</"),s("span",{class:"hljs-name"},"div"),t(">")]),t(`
  `),s("span",{class:"hljs-tag"},[t("</"),s("span",{class:"hljs-name"},"var-index-bar"),t(">")]),t(`
`),s("span",{class:"hljs-tag"},[t("</"),s("span",{class:"hljs-name"},"template"),t(">")]),t(`

`),s("span",{class:"hljs-tag"},[t("<"),s("span",{class:"hljs-name"},"style"),t(">")]),s("span",{class:"css"},[t(`
`),s("span",{class:"hljs-selector-class"},".var-index-anchor__example"),t(` {
  `),s("span",{class:"hljs-attribute"},"height"),t(": "),s("span",{class:"hljs-number"},"42px"),t(`;
  `),s("span",{class:"hljs-attribute"},"display"),t(`: flex;
  `),s("span",{class:"hljs-attribute"},"align-items"),t(`: center;
  `),s("span",{class:"hljs-attribute"},"padding"),t(": "),s("span",{class:"hljs-number"},"0"),t(),s("span",{class:"hljs-number"},"12px"),t(`;
  `),s("span",{class:"hljs-attribute"},"transition"),t(": all "),s("span",{class:"hljs-number"},"0.25s"),t(`;
  `),s("span",{class:"hljs-attribute"},"background"),t(": "),s("span",{class:"hljs-number"},"#e7edf7"),t(`;
  `),s("span",{class:"hljs-attribute"},"color"),t(": "),s("span",{class:"hljs-number"},"#2e67ba"),t(`;
}
`)]),s("span",{class:"hljs-tag"},[t("</"),s("span",{class:"hljs-name"},"style"),t(">")]),t(`
`)])],-1),x=r('<h2>API</h2><div class="card"><h3>Props</h3><h4>IndexBar Props</h4><table><thead><tr><th>Prop</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>sticky</code></td><td>Whether to enable anchor sticky top</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>sticky-offset-top</code></td><td>Anchor offset top when sticky</td><td><em>number | string</em></td><td><code>0</code></td></tr><tr><td><code>hide-list</code></td><td>Whether to hide anchor list</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>css-mode</code></td><td>Enable native <code>css sticky</code> mode</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>z-index</code></td><td>z-index</td><td><em>string | number</em></td><td><code>1</code></td></tr><tr><td><code>highlight-color</code></td><td>Index character highlight color</td><td><em>string</em></td><td><code>#ee0a24</code></td></tr><tr><td><code>duration</code></td><td>Animation duration</td><td><em>string | number</em></td><td><code>0</code></td></tr></tbody></table><h4>IndexAnchor Props</h4><table><thead><tr><th>Prop</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>index</code></td><td>Index</td><td><em>string | number</em></td><td><code>-</code></td></tr></tbody></table></div><div class="card"><h3>Events</h3><h4>IndexBar Events</h4><table><thead><tr><th>Event</th><th>Description</th><th>arguments</th></tr></thead><tbody><tr><td><code>click</code></td><td>Emitted when an index is clicked</td><td><code>index: number | string</code></td></tr><tr><td><code>change</code></td><td>Emitted when active index changed</td><td><code>index: number | string</code></td></tr></tbody></table></div><div class="card"><h3>Slots</h3><h4>IndexBar Slots</h4><table><thead><tr><th>Name</th><th>Description</th><th>SlotProps</th></tr></thead><tbody><tr><td><code>default</code></td><td>Content of index bar</td><td><code>-</code></td></tr></tbody></table><h4>IndexAnchor Slots</h4><table><thead><tr><th>Name</th><th>Description</th><th>SlotProps</th></tr></thead><tbody><tr><td><code>default</code></td><td>Custom index character</td><td><code>-</code></td></tr></tbody></table></div><div class="card"><h3>Methods</h3><p>Use ref to get IndexBar instance and call instance methods.</p><table><thead><tr><th>Method</th><th>Description</th><th>arguments</th></tr></thead><tbody><tr><td><code>scrollTo</code></td><td>scroll to target element</td><td><code>index: number | string</code></td></tr></tbody></table></div><div class="card"><h3>Style Variables</h3><p>Here are the CSS variables used by the component, Styles can be customized using <a href="#/en-US/style-provider">StyleProvider</a></p><table><thead><tr><th>Variable</th><th>Default</th></tr></thead><tbody><tr><td><code>--index-bar-list-item-font-size</code></td><td><code>var(--font-size-xs)</code></td></tr><tr><td><code>--index-bar-list-item-color</code></td><td><code>var(--color-primary)</code></td></tr><tr><td><code>--index-bar-list-item-active-color</code></td><td><code>var(--color-danger)</code></td></tr><tr><td><code>--index-bar-list-item-height</code></td><td><code>14px</code></td></tr><tr><td><code>--index-bar-list-item-padding</code></td><td><code>0 10px</code></td></tr></tbody></table></div>',6);function v(y,_,f,k,S,I){const e=d("var-site-code-example");return n(),l("div",i,[p,m,s("div",j,[b,u,c(e,null,{default:o(()=>[g]),_:1})]),x])}const P=a(h,[["render",v]]);export{P as default};
