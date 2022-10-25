import{_ as n,p as c,f as r,h as p,M as s,q as t,S as e,at as h,P as a}from"./vue-router.esm-bundler.786782d7.js";const o={components:{}},i={class:"varlet-site-doc"},d=s("h1",null,"Ripple Directive",-1),j=s("div",{class:"card"},[s("h3",null,"Intro"),s("p",null,"Causes the element to generate a ripple spread effect when clicked.")],-1),u={class:"card"},b=s("h3",null,"Basic Use",-1),m=s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-tag"},[a("<"),s("span",{class:"hljs-name"},"template"),a(">")]),a(`
  `),s("span",{class:"hljs-tag"},[a("<"),s("span",{class:"hljs-name"},"div"),a(),s("span",{class:"hljs-attr"},"class"),a("="),s("span",{class:"hljs-string"},'"ripple-example-block var-elevation--2"'),a(),s("span",{class:"hljs-attr"},"v-ripple"),a(">")]),a("click"),s("span",{class:"hljs-tag"},[a("</"),s("span",{class:"hljs-name"},"div"),a(">")]),a(`
`),s("span",{class:"hljs-tag"},[a("</"),s("span",{class:"hljs-name"},"template"),a(">")]),a(`

`),s("span",{class:"hljs-tag"},[a("<"),s("span",{class:"hljs-name"},"style"),a(">")]),s("span",{class:"css"},[a(`
`),s("span",{class:"hljs-selector-class"},".ripple-example-block"),a(` {
  `),s("span",{class:"hljs-attribute"},"display"),a(`: flex;
  `),s("span",{class:"hljs-attribute"},"justify-content"),a(`: center;
  `),s("span",{class:"hljs-attribute"},"align-items"),a(`: center;
  `),s("span",{class:"hljs-attribute"},"height"),a(": "),s("span",{class:"hljs-number"},"100px"),a(`;
  user-select: none;
  `),s("span",{class:"hljs-attribute"},"cursor"),a(`: pointer;
  `),s("span",{class:"hljs-attribute"},"color"),a(": "),s("span",{class:"hljs-number"},"#888"),a(`;
  -webkit-tap-highlight-`),s("span",{class:"hljs-attribute"},"color"),a(": "),s("span",{class:"hljs-built_in"},"rgba"),a("("),s("span",{class:"hljs-number"},"0"),a(", "),s("span",{class:"hljs-number"},"0"),a(", "),s("span",{class:"hljs-number"},"0"),a(", "),s("span",{class:"hljs-number"},"0"),a(`);
  `),s("span",{class:"hljs-attribute"},"transition"),a(": background-color "),s("span",{class:"hljs-number"},"0.25s"),a(`;
}
`)]),s("span",{class:"hljs-tag"},[a("</"),s("span",{class:"hljs-name"},"style"),a(">")]),a(`
`)])],-1),_={class:"card"},g=s("h3",null,"Custom Color",-1),v=s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-tag"},[a("<"),s("span",{class:"hljs-name"},"template"),a(">")]),a(`
  `),s("span",{class:"hljs-tag"},[a("<"),s("span",{class:"hljs-name"},"div"),a(),s("span",{class:"hljs-attr"},"class"),a("="),s("span",{class:"hljs-string"},'"ripple-example-block var-elevation--2"'),a(),s("span",{class:"hljs-attr"},"v-ripple"),a("="),s("span",{class:"hljs-string"},`"{ color: '#2979ff' }"`),a(">")]),a(`
    click
  `),s("span",{class:"hljs-tag"},[a("</"),s("span",{class:"hljs-name"},"div"),a(">")]),a(`
`),s("span",{class:"hljs-tag"},[a("</"),s("span",{class:"hljs-name"},"template"),a(">")]),a(`

`),s("span",{class:"hljs-tag"},[a("<"),s("span",{class:"hljs-name"},"style"),a(">")]),s("span",{class:"css"},[a(`
`),s("span",{class:"hljs-selector-class"},".ripple-example-block"),a(` {
  `),s("span",{class:"hljs-attribute"},"display"),a(`: flex;
  `),s("span",{class:"hljs-attribute"},"justify-content"),a(`: center;
  `),s("span",{class:"hljs-attribute"},"align-items"),a(`: center;
  `),s("span",{class:"hljs-attribute"},"height"),a(": "),s("span",{class:"hljs-number"},"100px"),a(`;
  user-select: none;
  `),s("span",{class:"hljs-attribute"},"cursor"),a(`: pointer;
  `),s("span",{class:"hljs-attribute"},"color"),a(": "),s("span",{class:"hljs-number"},"#888"),a(`;
  -webkit-tap-highlight-`),s("span",{class:"hljs-attribute"},"color"),a(": "),s("span",{class:"hljs-built_in"},"rgba"),a("("),s("span",{class:"hljs-number"},"0"),a(", "),s("span",{class:"hljs-number"},"0"),a(", "),s("span",{class:"hljs-number"},"0"),a(", "),s("span",{class:"hljs-number"},"0"),a(`);
  `),s("span",{class:"hljs-attribute"},"transition"),a(": background-color "),s("span",{class:"hljs-number"},"0.25s"),a(`;
}
`)]),s("span",{class:"hljs-tag"},[a("</"),s("span",{class:"hljs-name"},"style"),a(">")]),a(`
`)])],-1),f={class:"card"},y=s("h3",null,"Disabled Status",-1),x=s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-tag"},[a("<"),s("span",{class:"hljs-name"},"template"),a(">")]),a(`
  `),s("span",{class:"hljs-tag"},[a("<"),s("span",{class:"hljs-name"},"div"),a(),s("span",{class:"hljs-attr"},"class"),a("="),s("span",{class:"hljs-string"},'"ripple-example-block var-elevation--2"'),a(),s("span",{class:"hljs-attr"},"v-ripple"),a("="),s("span",{class:"hljs-string"},'"{ disabled: true }"'),a(">")]),a(`
    click
  `),s("span",{class:"hljs-tag"},[a("</"),s("span",{class:"hljs-name"},"div"),a(">")]),a(`
`),s("span",{class:"hljs-tag"},[a("</"),s("span",{class:"hljs-name"},"template"),a(">")]),a(`

`),s("span",{class:"hljs-tag"},[a("<"),s("span",{class:"hljs-name"},"style"),a(">")]),s("span",{class:"css"},[a(`
`),s("span",{class:"hljs-selector-class"},".ripple-example-block"),a(` {
  `),s("span",{class:"hljs-attribute"},"display"),a(`: flex;
  `),s("span",{class:"hljs-attribute"},"justify-content"),a(`: center;
  `),s("span",{class:"hljs-attribute"},"align-items"),a(`: center;
  `),s("span",{class:"hljs-attribute"},"height"),a(": "),s("span",{class:"hljs-number"},"100px"),a(`;
  `),s("span",{class:"hljs-attribute"},"color"),a(": "),s("span",{class:"hljs-number"},"#888"),a(`;
  user-select: none;
  `),s("span",{class:"hljs-attribute"},"cursor"),a(`: pointer;
  -webkit-tap-highlight-`),s("span",{class:"hljs-attribute"},"color"),a(": "),s("span",{class:"hljs-built_in"},"rgba"),a("("),s("span",{class:"hljs-number"},"0"),a(", "),s("span",{class:"hljs-number"},"0"),a(", "),s("span",{class:"hljs-number"},"0"),a(", "),s("span",{class:"hljs-number"},"0"),a(`);
  `),s("span",{class:"hljs-attribute"},"transition"),a(": background-color "),s("span",{class:"hljs-number"},"0.25s"),a(`;
}
`)]),s("span",{class:"hljs-tag"},[a("</"),s("span",{class:"hljs-name"},"style"),a(">")]),a(`
`)])],-1),k=h('<h2>API</h2><div class="card"><h3>Options</h3><table><thead><tr><th>Option</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>color</code></td><td>Ripple color</td><td><em>string</em></td><td><code>currentColor</code></td></tr><tr><td><code>disabled</code></td><td>Whether to disable ripple</td><td><em>boolean</em></td><td><code>false</code></td></tr></tbody></table></div><div class="card"><h3>Style Variables</h3><p>Here are the CSS variables used by the component, Styles can be customized using <a href="#/en-US/style-provider">StyleProvider</a></p><table><thead><tr><th>Variable</th><th>Default</th></tr></thead><tbody><tr><td><code>--ripple-cubic-bezier</code></td><td><code>cubic-bezier(0.68, 0.01, 0.62, 0.6)</code></td></tr><tr><td><code>--ripple-color</code></td><td><code>currentColor</code></td></tr></tbody></table></div>',3);function S(C,V,w,D,B,N){const l=c("var-site-code-example");return r(),p("div",i,[d,j,s("div",u,[b,t(l,null,{default:e(()=>[m]),_:1})]),s("div",_,[g,t(l,null,{default:e(()=>[v]),_:1})]),s("div",f,[y,t(l,null,{default:e(()=>[x]),_:1})]),k])}const z=n(o,[["render",S]]);export{z as default};
