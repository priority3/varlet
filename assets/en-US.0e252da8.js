import{_ as e,p as c,f as h,h as d,M as a,q as l,S as n,P as s,at as p}from"./vue-router.esm-bundler.786782d7.js";const o={components:{}},r={class:"varlet-site-doc"},j=a("h1",null,"Table",-1),i=a("div",{class:"card"},[a("h3",null,"Intro"),a("p",null,"A minimal table, when you need to display some data in the form of a table, you may use it.")],-1),m={class:"card"},g=a("h3",null,"Basic Usage",-1),b=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-table"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"thead"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"tr"),s(">")]),s(`
        `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"th"),s(">")]),s("Name"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"th"),s(">")]),s(`
        `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"th"),s(">")]),s("Math"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"th"),s(">")]),s(`
        `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"th"),s(">")]),s("English"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"th"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"tr"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"thead"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"tbody"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"tr"),s(">")]),s(`
        `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"td"),s(">")]),s("Jerry"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"td"),s(">")]),s(`
        `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"td"),s(">")]),s("124"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"td"),s(">")]),s(`
        `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"td"),s(">")]),s("38"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"td"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"tr"),s(">")]),s(` 
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"tr"),s(">")]),s(`
        `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"td"),s(">")]),s("Tom"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"td"),s(">")]),s(`
        `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"td"),s(">")]),s("100"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"td"),s(">")]),s(`
        `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"td"),s(">")]),s("135"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"td"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"tr"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"tbody"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-table"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),u={class:"card"},f=a("h3",null,"Footer Slots",-1),_=a("p",null,[s("You can insert something in the tail slot, the most common is to insert a "),a("code",null,"Pagination"),s(".")],-1),y=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(">")]),a("span",{class:"javascript"},[s(`
`),a("span",{class:"hljs-keyword"},"import"),s(" { ref } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`

`),a("span",{class:"hljs-keyword"},"const"),s(" gen = "),a("span",{class:"hljs-function"},[s("("),a("span",{class:"hljs-params"},"current, size"),s(") =>")]),s(` {
  `),a("span",{class:"hljs-keyword"},"return"),s(),a("span",{class:"hljs-built_in"},"Array"),s(".from({ "),a("span",{class:"hljs-attr"},"length"),s(": size }).map("),a("span",{class:"hljs-function"},[s("("),a("span",{class:"hljs-params"},"_, index"),s(") =>")]),s(` {
    `),a("span",{class:"hljs-keyword"},"const"),s(" id = (current - "),a("span",{class:"hljs-number"},"1"),s(") * size + index + "),a("span",{class:"hljs-number"},"1"),s(`

    `),a("span",{class:"hljs-keyword"},"return"),s(` {
      `),a("span",{class:"hljs-attr"},"name"),s(": "),a("span",{class:"hljs-string"},[s("`Name "),a("span",{class:"hljs-subst"},"${id}"),s("`")]),s(`,
      `),a("span",{class:"hljs-attr"},"math"),s(`: id,
      `),a("span",{class:"hljs-attr"},"english"),s(`: id,
    }
  })
}
`),a("span",{class:"hljs-keyword"},"const"),s(" list = ref(gen("),a("span",{class:"hljs-number"},"1"),s(", "),a("span",{class:"hljs-number"},"10"),s(`))

`),a("span",{class:"hljs-keyword"},"const"),s(" get = "),a("span",{class:"hljs-function"},[s("("),a("span",{class:"hljs-params"},"current, size"),s(") =>")]),s(` {
  list.value = gen(current, size)
}
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-table"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"thead"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"tr"),s(">")]),s(`
        `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"th"),s(">")]),s("Name"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"th"),s(">")]),s(`
        `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"th"),s(">")]),s("Math"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"th"),s(">")]),s(`
        `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"th"),s(">")]),s("English"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"th"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"tr"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"thead"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"tbody"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"tr"),s(),a("span",{class:"hljs-attr"},"v-for"),s("="),a("span",{class:"hljs-string"},'"l in list"'),s(),a("span",{class:"hljs-attr"},":key"),s("="),a("span",{class:"hljs-string"},'"l.name"'),s(">")]),s(`
        `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"td"),s(">")]),s("{{ l.name }}"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"td"),s(">")]),s(`
        `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"td"),s(">")]),s("{{ l.math }}"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"td"),s(">")]),s(`
        `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"td"),s(">")]),s("{{ l.english }}"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"td"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"tr"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"tbody"),s(">")]),s(`

    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(" #"),a("span",{class:"hljs-attr"},"footer"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"div"),s(),a("span",{class:"hljs-attr"},"class"),s("="),a("span",{class:"hljs-string"},'"table-example-footer"'),s(">")]),s(`
        `),a("span",{class:"hljs-comment"},"<!-- Paging in the mobile preview mode uses the simple true mode, which is more friendly to small screen devices -->"),s(`
        `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-pagination"),s(`
          `),a("span",{class:"hljs-attr"},":simple"),s("="),a("span",{class:"hljs-string"},'"false"'),s(`
          `),a("span",{class:"hljs-attr"},":current"),s("="),a("span",{class:"hljs-string"},'"1"'),s(`
          `),a("span",{class:"hljs-attr"},":total"),s("="),a("span",{class:"hljs-string"},'"100"'),s(`
          `),a("span",{class:"hljs-attr"},":size-option"),s("="),a("span",{class:"hljs-string"},'"[5, 10]"'),s(`
          @`),a("span",{class:"hljs-attr"},"change"),s("="),a("span",{class:"hljs-string"},'"get"'),s(`
        />`)]),s(`
      `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"div"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-table"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"style"),s(">")]),a("span",{class:"css"},[s(`
`),a("span",{class:"hljs-selector-class"},".table-example-footer"),s(`  {
  `),a("span",{class:"hljs-attribute"},"display"),s(`: flex;
  `),a("span",{class:"hljs-attribute"},"justify-content"),s(`: flex-end;
  `),a("span",{class:"hljs-attribute"},"align-items"),s(`: center;
  `),a("span",{class:"hljs-attribute"},"height"),s(": "),a("span",{class:"hljs-number"},"60px"),s(`;
  `),a("span",{class:"hljs-attribute"},"padding"),s(": "),a("span",{class:"hljs-number"},"0"),s(),a("span",{class:"hljs-number"},"16px"),s(`;
}
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"style"),s(">")]),s(`
`)])],-1),v=p('<h2>API</h2><div class="card"><h3>Props</h3><table><thead><tr><th>Prop</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>full-width</code></td><td>The width of the <code>table</code> (including the scrollable part)</td><td><em>string | number</em></td><td><code>100%</code></td></tr></tbody></table></div><div class="card"><h3>Slots</h3><table><thead><tr><th>Name</th><th>Description</th><th>SlotProps</th></tr></thead><tbody><tr><td><code>default</code></td><td>Content of <code>table</code></td><td><code>-</code></td></tr><tr><td><code>footer</code></td><td>Footer of <code>table</code></td><td><code>-</code></td></tr></tbody></table></div><div class="card"><h3>Style Variables</h3><p>Here are the CSS variables used by the component, Styles can be customized using <a href="#/en-US/style-provider">StyleProvider</a></p><table><thead><tr><th>Variable</th><th>Default</th></tr></thead><tbody><tr><td><code>--table-background</code></td><td><code>#fff</code></td></tr><tr><td><code>--table-border-radius</code></td><td><code>2px</code></td></tr><tr><td><code>--table-thead-border-bottom</code></td><td><code>thin solid rgba(0, 0, 0, 0.12)</code></td></tr><tr><td><code>--table-thead-th-text-color</code></td><td><code>rgba(0, 0, 0, 0.6)</code></td></tr><tr><td><code>--table-thead-th-font-size</code></td><td><code>14px</code></td></tr><tr><td><code>--table-thead-tr-border-bottom</code></td><td><code>thin solid rgba(0, 0, 0, 0.12)</code></td></tr><tr><td><code>--table-tbody-tr-hover-background</code></td><td><code>#eee</code></td></tr><tr><td><code>--table-tbody-tr-border-bottom</code></td><td><code>thin solid rgba(0, 0, 0, 0.12)</code></td></tr><tr><td><code>--table-tbody-td-font-size</code></td><td><code>16px</code></td></tr><tr><td><code>--table-row-height</code></td><td><code>46px</code></td></tr><tr><td><code>--table-row-padding</code></td><td><code>0 16px</code></td></tr><tr><td><code>--table-footer-border-top</code></td><td><code>thin solid rgba(0, 0, 0, 0.12)</code></td></tr></tbody></table></div>',4);function x(w,k,S,z,N,P){const t=c("var-site-code-example");return h(),d("div",r,[j,i,a("div",m,[g,l(t,null,{default:n(()=>[b]),_:1})]),a("div",u,[f,_,l(t,null,{default:n(()=>[y]),_:1})]),v])}const T=e(o,[["render",x]]);export{T as default};
