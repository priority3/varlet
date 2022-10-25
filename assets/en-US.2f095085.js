import{_ as e,p as c,f as r,h as o,M as s,q as l,S as n,P as a,at as p}from"./vue-router.esm-bundler.786782d7.js";const i={components:{}},h={class:"varlet-site-doc"},d=s("h1",null,"Lazy",-1),j=s("div",{class:"card"},[s("h3",null,"Intro"),s("p",null,"Load when the image is visible")],-1),m={class:"card"},g=s("h3",null,"Basic Use",-1),u=s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-tag"},[a("<"),s("span",{class:"hljs-name"},"template"),a(">")]),a(`
  `),s("span",{class:"hljs-tag"},[a("<"),s("span",{class:"hljs-name"},"img"),a(),s("span",{class:"hljs-attr"},"class"),a("="),s("span",{class:"hljs-string"},'"lazy-example-cat"'),a(),s("span",{class:"hljs-attr"},"v-lazy"),a("="),s("span",{class:"hljs-string"},`"'https://varlet.gitee.io/varlet-ui/cat.jpg'"`),a(">")]),a(`
`),s("span",{class:"hljs-tag"},[a("</"),s("span",{class:"hljs-name"},"template"),a(">")]),a(`

`),s("span",{class:"hljs-tag"},[a("<"),s("span",{class:"hljs-name"},"style"),a(">")]),s("span",{class:"css"},[a(`
`),s("span",{class:"hljs-selector-class"},".lazy-example-cat"),a(` {
  `),s("span",{class:"hljs-attribute"},"width"),a(": "),s("span",{class:"hljs-number"},"100%"),a(`;
  `),s("span",{class:"hljs-attribute"},"height"),a(": "),s("span",{class:"hljs-number"},"200px"),a(`;
  `),s("span",{class:"hljs-attribute"},"object-fit"),a(`: cover;
  `),s("span",{class:"hljs-attribute"},"background-size"),a(`: cover;
  `),s("span",{class:"hljs-attribute"},"pointer-events"),a(`: none;
}
`)]),s("span",{class:"hljs-tag"},[a("</"),s("span",{class:"hljs-name"},"style"),a(">")]),a(`
`)])],-1),_={class:"card"},b=s("h3",null,"Background Image Lazy Load",-1),v=s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-tag"},[a("<"),s("span",{class:"hljs-name"},"template"),a(">")]),a(`
  `),s("span",{class:"hljs-tag"},[a("<"),s("span",{class:"hljs-name"},"div"),a(` 
    `),s("span",{class:"hljs-attr"},"class"),a("="),s("span",{class:"hljs-string"},'"lazy-example-cat"'),a(`
    `),s("span",{class:"hljs-attr"},"v-lazy:background-image"),a("="),s("span",{class:"hljs-string"},`"'https://varlet.gitee.io/varlet-ui/cat.jpg'"`),a(`
  >`)]),s("span",{class:"hljs-tag"},[a("</"),s("span",{class:"hljs-name"},"div"),a(">")]),a(`
`),s("span",{class:"hljs-tag"},[a("</"),s("span",{class:"hljs-name"},"template"),a(">")]),a(`

`),s("span",{class:"hljs-tag"},[a("<"),s("span",{class:"hljs-name"},"style"),a(">")]),s("span",{class:"css"},[a(`
`),s("span",{class:"hljs-selector-class"},".lazy-example-cat"),a(` {
  `),s("span",{class:"hljs-attribute"},"width"),a(": "),s("span",{class:"hljs-number"},"100%"),a(`;
  `),s("span",{class:"hljs-attribute"},"height"),a(": "),s("span",{class:"hljs-number"},"200px"),a(`;
  `),s("span",{class:"hljs-attribute"},"object-fit"),a(`: cover;
  `),s("span",{class:"hljs-attribute"},"background-size"),a(`: cover;
  `),s("span",{class:"hljs-attribute"},"pointer-events"),a(`: none;
}
`)]),s("span",{class:"hljs-tag"},[a("</"),s("span",{class:"hljs-name"},"style"),a(">")]),a(`
`)])],-1),y={class:"card"},f=s("h3",null,"Inline Attributes",-1),x=s("p",null,[a("You can modify the "),s("code",null,"loading"),a(", "),s("code",null,"error"),a(" image, and "),s("code",null,"reload attempts"),a(" by using inline properties.")],-1),z=s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-tag"},[a("<"),s("span",{class:"hljs-name"},"template"),a(">")]),a(`
  `),s("span",{class:"hljs-tag"},[a("<"),s("span",{class:"hljs-name"},"img"),a(),s("span",{class:"hljs-attr"},"class"),a("="),s("span",{class:"hljs-string"},'"lazy-example-cat"'),a(` 
    `),s("span",{class:"hljs-attr"},"v-lazy"),a("="),s("span",{class:"hljs-string"},`"'https://varlet.gitee.io/varlet-ui/cat.jpg'"`),a(`
    `),s("span",{class:"hljs-attr"},"lazy-loading"),a("="),s("span",{class:"hljs-string"},'"https://xxx.cn/loading.png"'),a(`
    `),s("span",{class:"hljs-attr"},"lazy-error"),a("="),s("span",{class:"hljs-string"},'"https://xxx.cn/error.png"'),a(`
    `),s("span",{class:"hljs-attr"},"lazy-attempt"),a("="),s("span",{class:"hljs-string"},'"3"'),a(`
  >`)]),a(`
`),s("span",{class:"hljs-tag"},[a("</"),s("span",{class:"hljs-name"},"template"),a(">")]),a(`

`),s("span",{class:"hljs-tag"},[a("<"),s("span",{class:"hljs-name"},"style"),a(">")]),s("span",{class:"css"},[a(`
`),s("span",{class:"hljs-selector-class"},".lazy-example-cat"),a(` {
  `),s("span",{class:"hljs-attribute"},"width"),a(": "),s("span",{class:"hljs-number"},"100%"),a(`;
  `),s("span",{class:"hljs-attribute"},"height"),a(": "),s("span",{class:"hljs-number"},"200px"),a(`;
  `),s("span",{class:"hljs-attribute"},"object-fit"),a(`: cover;
  `),s("span",{class:"hljs-attribute"},"background-size"),a(`: cover;
  `),s("span",{class:"hljs-attribute"},"pointer-events"),a(`: none;
}
`)]),s("span",{class:"hljs-tag"},[a("</"),s("span",{class:"hljs-name"},"style"),a(">")]),a(`
`)])],-1),w={class:"card"},k=s("h3",null,"Plugin",-1),L=s("p",null,[a("The option to set the default "),s("code",null,"Lazy"),a(" load option is provided, which is passed in at plugin registration.")],-1),A=s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-keyword"},"import"),a(" { createApp } "),s("span",{class:"hljs-keyword"},"from"),a(),s("span",{class:"hljs-string"},"'vue'"),a(`
`),s("span",{class:"hljs-keyword"},"import"),a(" { Lazy } "),s("span",{class:"hljs-keyword"},"from"),a(),s("span",{class:"hljs-string"},"'@varlet/ui'"),a(`

createApp().use(Lazy, {
  `),s("span",{class:"hljs-attr"},"loading"),a(": "),s("span",{class:"hljs-string"},"'https://xxx.cn/loading.png'"),a(`,
  `),s("span",{class:"hljs-attr"},"error"),a(": "),s("span",{class:"hljs-string"},"'https://xxx.cn/error.png'"),a(`,
  `),s("span",{class:"hljs-attr"},"attempt"),a(": "),s("span",{class:"hljs-number"},"3"),a(`,
  `),s("span",{class:"hljs-attr"},"throttleWait"),a(": "),s("span",{class:"hljs-number"},"300"),a(`,
  `),s("span",{class:"hljs-attr"},"events"),a(`: [
    `),s("span",{class:"hljs-string"},"'scroll'"),a(`, 
    `),s("span",{class:"hljs-string"},"'wheel'"),a(`, 
    `),s("span",{class:"hljs-string"},"'mousewheel'"),a(`, 
    `),s("span",{class:"hljs-string"},"'resize'"),a(`,
    `),s("span",{class:"hljs-string"},"'animationend'"),a(`,
    `),s("span",{class:"hljs-string"},"'transitionend'"),a(`, 
    `),s("span",{class:"hljs-string"},"'touchmove'"),a(`
  ],
  `),s("span",{class:"hljs-function"},[s("span",{class:"hljs-title"},"filter"),a("("),s("span",{class:"hljs-params"},"lazy"),a(")")]),a(` {
    `),s("span",{class:"hljs-comment"},"// All properties of the context can be accessed, and some property interceptions can be performed."),a(`
    `),s("span",{class:"hljs-comment"},"// Such as simply modifying all image addresses http-> https"),a(`
    lazy.src.replace(`),s("span",{class:"hljs-string"},"'http://'"),a(", "),s("span",{class:"hljs-string"},"'https://'"),a(`)
  }
})
`)])],-1),P=p('<h2>API</h2><div class="card"><h3>Plugin Options</h3><table><thead><tr><th>Option</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>loading</code></td><td>Loading images, if possible, select images that load quickly</td><td><em>string</em></td><td><code>Pixel transparent picture</code></td></tr><tr><td><code>error</code></td><td>Load failed to display the picture</td><td><em>string</em></td><td><code>Pixel transparent picture</code></td></tr><tr><td><code>attempt</code></td><td>The number of times a load failed to reload</td><td><em>number</em></td><td><code>3</code></td></tr><tr><td><code>throttleWait</code></td><td>throttle wait time, The higher the value, the lower the trigger frequency</td><td><em>number</em></td><td><code>300</code></td></tr><tr><td><code>events</code></td><td>A list of events that trigger visibility detection registration</td><td><em>string[]</em></td><td><code>[&#39;scroll&#39;...]</code></td></tr><tr><td><code>filter</code></td><td>Attribute interceptor function</td><td><em>(lazy: Lazy) =&gt; void</em></td><td><code>() =&gt; void</code></td></tr></tbody></table></div>',2);function B(T,I,N,S,V,$){const t=c("var-site-code-example");return r(),o("div",h,[d,j,s("div",m,[g,l(t,null,{default:n(()=>[u]),_:1})]),s("div",_,[b,l(t,null,{default:n(()=>[v]),_:1})]),s("div",y,[f,x,l(t,null,{default:n(()=>[z]),_:1})]),s("div",w,[k,L,l(t,{"playground-ignore":""},{default:n(()=>[A]),_:1})]),P])}const C=e(i,[["render",B]]);export{C as default};
