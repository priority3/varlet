import{_ as n,p as c,f as h,h as o,M as a,q as l,S as e,P as s,at as d}from"./vue-router.esm-bundler.786782d7.js";const p={components:{}},r={class:"varlet-site-doc"},i=a("h1",null,"Sticky",-1),j=a("div",{class:"card"},[a("h3",null,"Intro"),a("p",null,[s("The sticky layout uses the "),a("code",null,"scroll"),s(" layout mode that listens to container scroll events by default. If necessary, you can switch to the "),a("code",null,"css sticky"),s(" layout mode to improve performance.")])],-1),m={class:"card"},u=a("h3",null,"Basic Use",-1),b=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"div"),s(),a("span",{class:"hljs-attr"},"class"),s("="),a("span",{class:"hljs-string"},'"sticky-example"'),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-sticky"),s(),a("span",{class:"hljs-attr"},":offset-top"),s("="),a("span",{class:"hljs-string"},'"54"'),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-button"),s(),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"primary"'),s(">")]),s("Basic Use"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-button"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-sticky"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"div"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"style"),s(">")]),a("span",{class:"css"},[s(`
`),a("span",{class:"hljs-selector-class"},".sticky-example"),s(` {
  `),a("span",{class:"hljs-attribute"},"min-height"),s(": "),a("span",{class:"hljs-number"},"200vh"),s(`;
}
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"style"),s(">")]),s(`
`)])],-1),y={class:"card"},g=a("h3",null,"Local Sticky",-1),v=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"div"),s(),a("span",{class:"hljs-attr"},"class"),s("="),a("span",{class:"hljs-string"},'"sticky-example"'),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"div"),s(),a("span",{class:"hljs-attr"},"class"),s("="),a("span",{class:"hljs-string"},'"sticky-example-scroller"'),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-sticky"),s(">")]),s(`
        `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-button"),s(),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"success"'),s(">")]),s("Local Sticky"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-button"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-sticky"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"div"),s(),a("span",{class:"hljs-attr"},"class"),s("="),a("span",{class:"hljs-string"},'"sticky-example-block"'),s(">")]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"div"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"div"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"div"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"style"),s(">")]),a("span",{class:"css"},[s(`
`),a("span",{class:"hljs-selector-class"},".sticky-example"),s(` {
  `),a("span",{class:"hljs-attribute"},"min-height"),s(": "),a("span",{class:"hljs-number"},"200vh"),s(`;
}

`),a("span",{class:"hljs-selector-class"},".sticky-example-scroller"),s(` {
  `),a("span",{class:"hljs-attribute"},"height"),s(": "),a("span",{class:"hljs-number"},"200px"),s(`;
  `),a("span",{class:"hljs-attribute"},"overflow"),s(`: auto;
  `),a("span",{class:"hljs-attribute"},"background"),s(": "),a("span",{class:"hljs-number"},"#2979ff"),s(`;
}

`),a("span",{class:"hljs-selector-class"},".sticky-example-block"),s(` {
  `),a("span",{class:"hljs-attribute"},"width"),s(": "),a("span",{class:"hljs-number"},"100%"),s(`;
  `),a("span",{class:"hljs-attribute"},"height"),s(": "),a("span",{class:"hljs-number"},"600px"),s(`;
  `),a("span",{class:"hljs-attribute"},"background"),s(": "),a("span",{class:"hljs-number"},"#2979ff"),s(`;
  `),a("span",{class:"hljs-attribute"},"opacity"),s(": ."),a("span",{class:"hljs-number"},"5"),s(`;
}
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"style"),s(">")]),s(`
`)])],-1),_=d('<h2>API</h2><div class="card"><h3>Props</h3><table><thead><tr><th>Prop</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>offset-top</code></td><td>Sticky offset top</td><td><em>string | number</em></td><td><code>0</code></td></tr><tr><td><code>z-index</code></td><td>Sticky z-index</td><td><em>string | number</em></td><td><code>0</code></td></tr><tr><td><code>css-mode</code></td><td>Enable native <code>css sticky</code> mode</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>disabled</code></td><td>Disable sticky, when set to <code>true</code>, the element will return to the document flow</td><td><em>boolean</em></td><td><code>false</code></td></tr></tbody></table></div><div class="card"><h3>Events</h3><table><thead><tr><th>Event</th><th>Description</th><th>Arguments</th></tr></thead><tbody><tr><td><code>scroll</code></td><td>Triggered when the scroll container rolls</td><td><code>offsetTop: number</code> <br> <code>isFixed: boolean</code></td></tr></tbody></table></div><div class="card"><h3>Slots</h3><table><thead><tr><th>Name</th><th>Description</th><th>SlotProps</th></tr></thead><tbody><tr><td><code>default</code></td><td>Sticky content</td><td><code>-</code></td></tr></tbody></table></div>',4);function f(k,x,S,w,B,D){const t=c("var-site-code-example");return h(),o("div",r,[i,j,a("div",m,[u,l(t,null,{default:e(()=>[b]),_:1})]),a("div",y,[g,l(t,null,{default:e(()=>[v]),_:1})]),_])}const P=n(p,[["render",f]]);export{P as default};
