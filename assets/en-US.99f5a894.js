import{_ as e,p as c,f as d,h as o,M as a,q as n,S as l,P as s,at as h}from"./vue-router.esm-bundler.786782d7.js";const r={components:{}},p={class:"varlet-site-doc"},i=a("h1",null,"Countdown",-1),j=a("div",{class:"card"},[a("h3",null,"Intro"),a("p",null,"For real-time display of countdown values, support millisecond precision.")],-1),m={class:"card"},u=a("h3",null,"Basic Usage",-1),g=a("p",null,[s("Use "),a("code",null,"time"),s(" to set countdown time(ms).")],-1),b=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"javascript"},[s(`
`),a("span",{class:"hljs-keyword"},"import"),s(" { ref } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`

`),a("span",{class:"hljs-keyword"},"const"),s(" time = ref("),a("span",{class:"hljs-number"},"30"),s(" * "),a("span",{class:"hljs-number"},"60"),s(" * "),a("span",{class:"hljs-number"},"60"),s(" * "),a("span",{class:"hljs-number"},"1000"),s(`)
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-countdown"),s(),a("span",{class:"hljs-attr"},":time"),s("="),a("span",{class:"hljs-string"},'"time"'),s(" />")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),_={class:"card"},f=a("h3",null,"Custom Format",-1),w=a("p",null,[s("Use "),a("code",null,"format"),s(" to set time text.")],-1),v=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"javascript"},[s(`
`),a("span",{class:"hljs-keyword"},"import"),s(" { ref } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`

`),a("span",{class:"hljs-keyword"},"const"),s(" time = ref("),a("span",{class:"hljs-number"},"30"),s(" * "),a("span",{class:"hljs-number"},"60"),s(" * "),a("span",{class:"hljs-number"},"60"),s(" * "),a("span",{class:"hljs-number"},"1000"),s(`)
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-countdown"),s(),a("span",{class:"hljs-attr"},":time"),s("="),a("span",{class:"hljs-string"},'"time"'),s(),a("span",{class:"hljs-attr"},"format"),s("="),a("span",{class:"hljs-string"},'"DD Day, HH:mm:ss"'),s(" />")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),y={class:"card"},k=a("h3",null,"Show Millisecond",-1),S=a("p",null,[s("Use "),a("code",null,"S"),s(" text to show millisecond.")],-1),D=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"javascript"},[s(`
`),a("span",{class:"hljs-keyword"},"import"),s(" { ref } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`

`),a("span",{class:"hljs-keyword"},"const"),s(" time = ref("),a("span",{class:"hljs-number"},"30"),s(" * "),a("span",{class:"hljs-number"},"60"),s(" * "),a("span",{class:"hljs-number"},"60"),s(" * "),a("span",{class:"hljs-number"},"1000"),s(`)
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-countdown"),s(),a("span",{class:"hljs-attr"},":time"),s("="),a("span",{class:"hljs-string"},'"time"'),s(),a("span",{class:"hljs-attr"},"format"),s("="),a("span",{class:"hljs-string"},'"HH:mm:ss:SS"'),s(" />")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),x={class:"card"},H=a("h3",null,"Custom Style",-1),M=a("p",null,[s("Use "),a("code",null,"slot"),s(" to set custom countdown style.")],-1),C=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-countdown"),s(),a("span",{class:"hljs-attr"},":time"),s("="),a("span",{class:"hljs-string"},'"108000000"'),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(" #"),a("span",{class:"hljs-attr"},"default"),s("="),a("span",{class:"hljs-string"},'"timeData"'),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"span"),s(),a("span",{class:"hljs-attr"},"class"),s("="),a("span",{class:"hljs-string"},'"countdown-example-block"'),s(">")]),s("{{ timeData.hours }}"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"span"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"span"),s(),a("span",{class:"hljs-attr"},"class"),s("="),a("span",{class:"hljs-string"},'"countdown-example-colon"'),s(">")]),s(":"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"span"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"span"),s(),a("span",{class:"hljs-attr"},"class"),s("="),a("span",{class:"hljs-string"},'"countdown-example-block"'),s(">")]),s("{{ timeData.minutes }}"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"span"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"span"),s(),a("span",{class:"hljs-attr"},"class"),s("="),a("span",{class:"hljs-string"},'"countdown-example-colon"'),s(">")]),s(":"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"span"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"span"),s(),a("span",{class:"hljs-attr"},"class"),s("="),a("span",{class:"hljs-string"},'"countdown-example-block"'),s(">")]),s("{{ timeData.seconds }}"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"span"),s(">")]),s(`
     `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-countdown"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"style"),s(">")]),a("span",{class:"css"},[s(`
`),a("span",{class:"hljs-selector-class"},".countdown-example-block"),s(` {
  `),a("span",{class:"hljs-attribute"},"background"),s(": "),a("span",{class:"hljs-number"},"#ff9f00"),s(`;
  `),a("span",{class:"hljs-attribute"},"color"),s(`: white;
  `),a("span",{class:"hljs-attribute"},"width"),s(": "),a("span",{class:"hljs-number"},"30px"),s(`;
  `),a("span",{class:"hljs-attribute"},"height"),s(": "),a("span",{class:"hljs-number"},"30px"),s(`;
  `),a("span",{class:"hljs-attribute"},"border-radius"),s(": "),a("span",{class:"hljs-number"},"50%"),s(`;
  `),a("span",{class:"hljs-attribute"},"display"),s(`: inline-flex;
  `),a("span",{class:"hljs-attribute"},"align-items"),s(`: center;
  `),a("span",{class:"hljs-attribute"},"justify-content"),s(`: center;
}

`),a("span",{class:"hljs-selector-class"},".countdown-example-colon"),s(` {
  `),a("span",{class:"hljs-attribute"},"margin"),s(": "),a("span",{class:"hljs-number"},"0"),s(),a("span",{class:"hljs-number"},"5px"),s(`;
  `),a("span",{class:"hljs-attribute"},"font-size"),s(": "),a("span",{class:"hljs-number"},"18px"),s(`;
  `),a("span",{class:"hljs-attribute"},"font-weight"),s(": "),a("span",{class:"hljs-number"},"500"),s(`;
}
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"style"),s(">")]),s(`
`)])],-1),T={class:"card"},U=a("h3",null,"Manual Control",-1),$=a("p",null,[s("Use "),a("code",null,"ref"),s(" to get countdown instance, you can call the "),a("code",null,"start"),s(", "),a("code",null,"pause"),s(", and "),a("code",null,"reset"),s(" methods.")],-1),N=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"javascript"},[s(`
`),a("span",{class:"hljs-keyword"},"import"),s(" { ref } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`
`),a("span",{class:"hljs-keyword"},"import"),s(" { Snackbar } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'@varlet/ui'"),s(`

`),a("span",{class:"hljs-keyword"},"const"),s(" countdown = ref("),a("span",{class:"hljs-literal"},"null"),s(`)

`),a("span",{class:"hljs-keyword"},"const"),s(" end = "),a("span",{class:"hljs-function"},"() =>"),s(` {
  Snackbar.info(`),a("span",{class:"hljs-string"},"'end!'"),s(`)
}

`),a("span",{class:"hljs-keyword"},"const"),s(" change = "),a("span",{class:"hljs-function"},"() =>"),s(` {
  `),a("span",{class:"hljs-built_in"},"console"),s(".log("),a("span",{class:"hljs-string"},"'change'"),s(`)
}
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-countdown"),s(`
    `),a("span",{class:"hljs-attr"},"time"),s("="),a("span",{class:"hljs-string"},'"3000"'),s(`
    `),a("span",{class:"hljs-attr"},"ref"),s("="),a("span",{class:"hljs-string"},'"countdown"'),s(`
    `),a("span",{class:"hljs-attr"},":auto-start"),s("="),a("span",{class:"hljs-string"},'"false"'),s(`
    `),a("span",{class:"hljs-attr"},"format"),s("="),a("span",{class:"hljs-string"},'"ss : SSS"'),s(`
    @`),a("span",{class:"hljs-attr"},"end"),s("="),a("span",{class:"hljs-string"},'"end"'),s(`
    @`),a("span",{class:"hljs-attr"},"change"),s("="),a("span",{class:"hljs-string"},'"change"'),s(`
  />`)]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-row"),s(),a("span",{class:"hljs-attr"},"justify"),s("="),a("span",{class:"hljs-string"},'"space-between"'),s(),a("span",{class:"hljs-attr"},"align"),s("="),a("span",{class:"hljs-string"},'"center"'),s(),a("span",{class:"hljs-attr"},"style"),s("="),a("span",{class:"hljs-string"},'"margin-top: 10px"'),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-button"),s(),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"primary"'),s(" @"),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},'"$refs.countdown.start()"'),s(">")]),s("start"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-button"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-button"),s(" @"),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},'"$refs.countdown.pause()"'),s(">")]),s("pause"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-button"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-button"),s(" @"),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},'"$refs.countdown.reset()"'),s(">")]),s("reset"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-button"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-row"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),P=h('<h2>API</h2><div class="card"><h3>Props</h3><table><thead><tr><th>Prop</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>time</code></td><td>Total time(ms)</td><td><em>string | number</em></td><td><code>0</code></td></tr><tr><td><code>format</code></td><td>Time format</td><td><em>string</em></td><td><code>HH : mm : ss</code></td></tr><tr><td><code>auto-start</code></td><td>Whether to auto start count down</td><td><em>boolean</em></td><td><code>true</code></td></tr></tbody></table></div><div class="card"><h3>Available formats</h3><table><thead><tr><th>Format</th><th>Description</th></tr></thead><tbody><tr><td><code>DD</code></td><td>Day</td></tr><tr><td><code>HH</code></td><td>Hour</td></tr><tr><td><code>mm</code></td><td>Minute</td></tr><tr><td><code>ss</code></td><td>Second</td></tr><tr><td><code>S</code></td><td>Millisecond, 1-digit</td></tr><tr><td><code>SS</code></td><td>Millisecond, 2-digit</td></tr><tr><td><code>SSS</code></td><td>Millisecond, 3-digit</td></tr></tbody></table></div><div class="card"><h3>Events</h3><table><thead><tr><th>Event</th><th>Description</th><th>arguments</th></tr></thead><tbody><tr><td><code>end</code></td><td>Emitted after countdown ended</td><td><code>-</code></td></tr><tr><td><code>change</code></td><td>Emitted after countdown changed</td><td><code>timeData: TimeData</code></td></tr></tbody></table></div><div class="card"><h3>Slots</h3><table><thead><tr><th>Name</th><th>Description</th><th>SlotProps</th></tr></thead><tbody><tr><td><code>default</code></td><td>Custom content</td><td><code>timeData: TimeData</code></td></tr></tbody></table></div><div class="card"><h3>TimeData Structure</h3><table><thead><tr><th>Name</th><th>Description</th><th>Type</th></tr></thead><tbody><tr><td><code>days</code></td><td>Remain days</td><td><code>number</code></td></tr><tr><td><code>hours</code></td><td>Remain hours</td><td><code>number</code></td></tr><tr><td><code>minutes</code></td><td>Remain minutes</td><td><code>number</code></td></tr><tr><td><code>seconds</code></td><td>Remain seconds</td><td><code>number</code></td></tr><tr><td><code>milliseconds</code></td><td>Remain milliseconds</td><td><code>number</code></td></tr></tbody></table></div><div class="card"><h3>Methods</h3><p>Use ref to get CountDown instance and call instance methods.</p><table><thead><tr><th>Method</th><th>Description</th><th>arguments</th></tr></thead><tbody><tr><td><code>start</code></td><td>Start countdown</td><td><code>-</code></td></tr><tr><td><code>pause</code></td><td>Pause countdown</td><td><code>-</code></td></tr><tr><td><code>reset</code></td><td>Reset countdown</td><td><code>-</code></td></tr></tbody></table></div>',7);function R(E,B,V,F,A,I){const t=c("var-site-code-example");return d(),o("div",p,[i,j,a("div",m,[u,g,n(t,null,{default:l(()=>[b]),_:1})]),a("div",_,[f,w,n(t,null,{default:l(()=>[v]),_:1})]),a("div",y,[k,S,n(t,null,{default:l(()=>[D]),_:1})]),a("div",x,[H,M,n(t,null,{default:l(()=>[C]),_:1})]),a("div",T,[U,$,n(t,null,{default:l(()=>[N]),_:1})]),P])}const z=e(r,[["render",R]]);export{z as default};
