import{_ as c,p as l,f as o,h as n,M as s,q as d,S as a,P as t,at as r}from"./vue-router.esm-bundler.786782d7.js";const p={components:{}},i={class:"varlet-site-doc"},h=s("h1",null,"TimePicker",-1),m=s("div",{class:"card"},[s("h3",null,"Intro"),s("p",null,"Used to select a time.")],-1),j={class:"card"},u=s("h3",null,"Basic Usage",-1),k=s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-tag"},[t("<"),s("span",{class:"hljs-name"},"script"),t(),s("span",{class:"hljs-attr"},"setup"),t(">")]),s("span",{class:"javascript"},[t(`
`),s("span",{class:"hljs-keyword"},"import"),t(" { ref } "),s("span",{class:"hljs-keyword"},"from"),t(),s("span",{class:"hljs-string"},"'vue'"),t(`

`),s("span",{class:"hljs-keyword"},"const"),t(" date = ref("),s("span",{class:"hljs-string"},"'11:20'"),t(`)
`)]),s("span",{class:"hljs-tag"},[t("</"),s("span",{class:"hljs-name"},"script"),t(">")]),t(`

`),s("span",{class:"hljs-tag"},[t("<"),s("span",{class:"hljs-name"},"template"),t(">")]),t(`
  `),s("span",{class:"hljs-tag"},[t("<"),s("span",{class:"hljs-name"},"var-time-picker"),t(),s("span",{class:"hljs-attr"},"v-model"),t("="),s("span",{class:"hljs-string"},'"date"'),t(" />")]),t(`
`),s("span",{class:"hljs-tag"},[t("</"),s("span",{class:"hljs-name"},"template"),t(">")]),t(`
`)])],-1),g={class:"card"},f=s("h3",null,"24hr Format",-1),_=s("p",null,[t("Use "),s("code",null,"format"),t(" prop to change the format of the picker. The default value of "),s("code",null,"format"),t(" is "),s("code",null,"ampm"),t(".")],-1),v=s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-tag"},[t("<"),s("span",{class:"hljs-name"},"script"),t(),s("span",{class:"hljs-attr"},"setup"),t(">")]),s("span",{class:"javascript"},[t(`
`),s("span",{class:"hljs-keyword"},"import"),t(" { ref } "),s("span",{class:"hljs-keyword"},"from"),t(),s("span",{class:"hljs-string"},"'vue'"),t(`

`),s("span",{class:"hljs-keyword"},"const"),t(" date = ref("),s("span",{class:"hljs-string"},"'15:20'"),t(`)
`)]),s("span",{class:"hljs-tag"},[t("</"),s("span",{class:"hljs-name"},"script"),t(">")]),t(`

`),s("span",{class:"hljs-tag"},[t("<"),s("span",{class:"hljs-name"},"template"),t(">")]),t(`
  `),s("span",{class:"hljs-tag"},[t("<"),s("span",{class:"hljs-name"},"var-time-picker"),t(),s("span",{class:"hljs-attr"},"v-model"),t("="),s("span",{class:"hljs-string"},'"date"'),t(),s("span",{class:"hljs-attr"},"format"),t("="),s("span",{class:"hljs-string"},'"24hr"'),t(),s("span",{class:"hljs-attr"},"elevation"),t(" />")]),t(`
`),s("span",{class:"hljs-tag"},[t("</"),s("span",{class:"hljs-name"},"template"),t(">")]),t(`
`)])],-1),b={class:"card"},y=s("h3",null,"Show Seconds",-1),w=s("p",null,[t("use "),s("code",null,"use-seconds"),t(" prop to show seconds")],-1),x=s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-tag"},[t("<"),s("span",{class:"hljs-name"},"script"),t(),s("span",{class:"hljs-attr"},"setup"),t(">")]),s("span",{class:"javascript"},[t(`
`),s("span",{class:"hljs-keyword"},"import"),t(" { ref } "),s("span",{class:"hljs-keyword"},"from"),t(),s("span",{class:"hljs-string"},"'vue'"),t(`

`),s("span",{class:"hljs-keyword"},"const"),t(" date = ref("),s("span",{class:"hljs-string"},"'17:36:22'"),t(`)
`)]),s("span",{class:"hljs-tag"},[t("</"),s("span",{class:"hljs-name"},"script"),t(">")]),t(`

`),s("span",{class:"hljs-tag"},[t("<"),s("span",{class:"hljs-name"},"template"),t(">")]),t(`
  `),s("span",{class:"hljs-tag"},[t("<"),s("span",{class:"hljs-name"},"var-time-picker"),t(),s("span",{class:"hljs-attr"},"v-model"),t("="),s("span",{class:"hljs-string"},'"date"'),t(),s("span",{class:"hljs-attr"},"format"),t("="),s("span",{class:"hljs-string"},'"24hr"'),t(),s("span",{class:"hljs-attr"},"use-seconds"),t(" />")]),t(`
`),s("span",{class:"hljs-tag"},[t("</"),s("span",{class:"hljs-name"},"template"),t(">")]),t(`
`)])],-1),S={class:"card"},T=s("h3",null,"Readonly",-1),P=s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-tag"},[t("<"),s("span",{class:"hljs-name"},"script"),t(),s("span",{class:"hljs-attr"},"setup"),t(">")]),s("span",{class:"javascript"},[t(`
`),s("span",{class:"hljs-keyword"},"import"),t(" { ref } "),s("span",{class:"hljs-keyword"},"from"),t(),s("span",{class:"hljs-string"},"'vue'"),t(`

`),s("span",{class:"hljs-keyword"},"const"),t(" date = ref("),s("span",{class:"hljs-string"},"'07:10'"),t(`)
`)]),s("span",{class:"hljs-tag"},[t("</"),s("span",{class:"hljs-name"},"script"),t(">")]),t(`

`),s("span",{class:"hljs-tag"},[t("<"),s("span",{class:"hljs-name"},"template"),t(">")]),t(`
  `),s("span",{class:"hljs-tag"},[t("<"),s("span",{class:"hljs-name"},"var-time-picker"),t(),s("span",{class:"hljs-attr"},"v-model"),t("="),s("span",{class:"hljs-string"},'"date"'),t(),s("span",{class:"hljs-attr"},"readonly"),t(),s("span",{class:"hljs-attr"},"elevation"),t(" />")]),t(`
`),s("span",{class:"hljs-tag"},[t("</"),s("span",{class:"hljs-name"},"template"),t(">")]),t(`
`)])],-1),D={class:"card"},I=s("h3",null,"Time Limit",-1),U=s("p",null,[t("Use "),s("code",null,"min"),t(", "),s("code",null,"max"),t(" and "),s("code",null,"allowed-time"),t(" prop to allow the maximum and minimum time.")],-1),V=s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-tag"},[t("<"),s("span",{class:"hljs-name"},"script"),t(),s("span",{class:"hljs-attr"},"setup"),t(">")]),s("span",{class:"javascript"},[t(`
`),s("span",{class:"hljs-keyword"},"import"),t(" { ref } "),s("span",{class:"hljs-keyword"},"from"),t(),s("span",{class:"hljs-string"},"'vue'"),t(`

`),s("span",{class:"hljs-keyword"},"const"),t(" date = ref("),s("span",{class:"hljs-string"},"'07:10:12'"),t(`)

`),s("span",{class:"hljs-keyword"},"const"),t(` allowedTime = {
  `),s("span",{class:"hljs-attr"},"hours"),t(": "),s("span",{class:"hljs-function"},[t("("),s("span",{class:"hljs-params"},"hour"),t(") =>")]),t(" hour % "),s("span",{class:"hljs-number"},"2"),t(" === "),s("span",{class:"hljs-number"},"0"),t(`,
  `),s("span",{class:"hljs-attr"},"minutes"),t(": "),s("span",{class:"hljs-function"},[t("("),s("span",{class:"hljs-params"},"minute"),t(") =>")]),t(" minute % "),s("span",{class:"hljs-number"},"15"),t(" !== "),s("span",{class:"hljs-number"},"0"),t(`,
  `),s("span",{class:"hljs-attr"},"seconds"),t(": "),s("span",{class:"hljs-function"},[t("("),s("span",{class:"hljs-params"},"second"),t(") =>")]),t(" second % "),s("span",{class:"hljs-number"},"2"),t(" !== "),s("span",{class:"hljs-number"},"0"),t(`,
}
`)]),s("span",{class:"hljs-tag"},[t("</"),s("span",{class:"hljs-name"},"script"),t(">")]),t(`

`),s("span",{class:"hljs-tag"},[t("<"),s("span",{class:"hljs-name"},"template"),t(">")]),t(`
  `),s("span",{class:"hljs-tag"},[t("<"),s("span",{class:"hljs-name"},"var-time-picker"),t(`
    `),s("span",{class:"hljs-attr"},"v-model"),t("="),s("span",{class:"hljs-string"},'"date"'),t(`
    `),s("span",{class:"hljs-attr"},"format"),t("="),s("span",{class:"hljs-string"},'"24hr"'),t(`
    `),s("span",{class:"hljs-attr"},"use-seconds"),t(`
    `),s("span",{class:"hljs-attr"},"min"),t("="),s("span",{class:"hljs-string"},'"2:28:38"'),t(`
    `),s("span",{class:"hljs-attr"},"max"),t("="),s("span",{class:"hljs-string"},'"19:40:22"'),t(`
    `),s("span",{class:"hljs-attr"},":allowed-time"),t("="),s("span",{class:"hljs-string"},'"allowedTime"'),t(`
  />`)]),t(`
`),s("span",{class:"hljs-tag"},[t("</"),s("span",{class:"hljs-name"},"template"),t(">")]),t(`
`)])],-1),C={class:"card"},H=s("h3",null,"Custom",-1),z=s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-tag"},[t("<"),s("span",{class:"hljs-name"},"script"),t(),s("span",{class:"hljs-attr"},"setup"),t(">")]),s("span",{class:"javascript"},[t(`
`),s("span",{class:"hljs-keyword"},"import"),t(" { ref } "),s("span",{class:"hljs-keyword"},"from"),t(),s("span",{class:"hljs-string"},"'vue'"),t(`

`),s("span",{class:"hljs-keyword"},"const"),t(" date = ref("),s("span",{class:"hljs-string"},"'05:10'"),t(`)

`),s("span",{class:"hljs-keyword"},"const"),t(" change = "),s("span",{class:"hljs-function"},[t("("),s("span",{class:"hljs-params"},"time"),t(") =>")]),t(` {
  `),s("span",{class:"hljs-built_in"},"console"),t(`.log(time)
}
`)]),s("span",{class:"hljs-tag"},[t("</"),s("span",{class:"hljs-name"},"script"),t(">")]),t(`

`),s("span",{class:"hljs-tag"},[t("<"),s("span",{class:"hljs-name"},"template"),t(">")]),t(`
  `),s("span",{class:"hljs-tag"},[t("<"),s("span",{class:"hljs-name"},"var-time-picker"),t(`
    `),s("span",{class:"hljs-attr"},"v-model"),t("="),s("span",{class:"hljs-string"},'"date"'),t(`
    `),s("span",{class:"hljs-attr"},"header-color"),t("="),s("span",{class:"hljs-string"},'"purple"'),t(`
    `),s("span",{class:"hljs-attr"},"color"),t("="),s("span",{class:"hljs-string"},'"#7bb872"'),t(`
    `),s("span",{class:"hljs-attr"},"min"),t("="),s("span",{class:"hljs-string"},'"2:28:38"'),t(`
    `),s("span",{class:"hljs-attr"},"max"),t("="),s("span",{class:"hljs-string"},'"19:40:22"'),t(`
    `),s("span",{class:"hljs-attr"},"elevation"),t(`
    @`),s("span",{class:"hljs-attr"},"change"),t("="),s("span",{class:"hljs-string"},'"change"'),t(`
  />`)]),t(`
`),s("span",{class:"hljs-tag"},[t("</"),s("span",{class:"hljs-name"},"template"),t(">")]),t(`
`)])],-1),B=r('<h2>API</h2><div class="card"><h3>Props</h3><table><thead><tr><th>Prop</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>v-model</code></td><td>Selected time\uFF08ISO 8601 format, <code>HH:mm</code> or <code>HH:mm:ss</code>\uFF09</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>format</code></td><td>Picker type, optional values <code>ampm, 24hr</code></td><td><em>string</em></td><td><code>ampm</code></td></tr><tr><td><code>color</code></td><td>Picker color</td><td><em>string</em></td><td><code>#2979ff</code></td></tr><tr><td><code>header-color</code></td><td>Color of picker header. If not specified it will use the color defined by color prop or the default picker color.</td><td><em>string</em></td><td><code>#2979ff</code></td></tr><tr><td><code>elevation</code></td><td>Whether to enable shadows</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>min</code></td><td>Minimum allowed time (ISO 8601 format)</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>max</code></td><td>Maximum allowed time (ISO 8601 format)</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>allowed-time</code></td><td>Restricts which time can be selected</td><td><em>AllowedTime</em></td><td><code>-</code></td></tr><tr><td><code>readonly</code></td><td>Readonly</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>use-seconds</code></td><td>Whether to display seconds</td><td><em>boolean</em></td><td><code>false</code></td></tr></tbody></table></div><div class="card"><h3>TimePicker AllowedTime</h3><table><thead><tr><th>Prop</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>hours</code></td><td>Limit the optional <code>hour</code></td><td><em>Function: hour =&gt; boolean</em></td><td><code>-</code></td></tr><tr><td><code>minutes</code></td><td>Limit the optional <code>minute</code></td><td><em>Function: minute =&gt; boolean</em></td><td><code>-</code></td></tr><tr><td><code>seconds</code></td><td>Limit the optional <code>second</code></td><td><em>Function: second =&gt; boolean</em></td><td><code>-</code></td></tr></tbody></table></div><div class="card"><h3>Events</h3><table><thead><tr><th>Event</th><th>Description</th><th>arguments</th></tr></thead><tbody><tr><td><code>change</code></td><td>Emitted after time changed</td><td><code>value: string</code></td></tr></tbody></table></div><div class="card"><h3>Style Variables</h3><p>Here are the CSS variables used by the component, Styles can be customized using <a href="#/en-US/style-provider">StyleProvider</a></p><table><thead><tr><th>Variable</th><th>Default</th></tr></thead><tbody><tr><td><code>--time-picker-border-radius</code></td><td><code>4px</code></td></tr><tr><td><code>--time-picker-font-size</code></td><td><code>var(--font-size-md)</code></td></tr><tr><td><code>--time-picker-min-width</code></td><td><code>290px</code></td></tr><tr><td><code>--time-picker-height</code></td><td><code>385px</code></td></tr><tr><td><code>--time-picker-title-padding</code></td><td><code>16px</code></td></tr><tr><td><code>--time-picker-title-color</code></td><td><code>#fff</code></td></tr><tr><td><code>--time-picker-title-background</code></td><td><code>var(--color-primary)</code></td></tr><tr><td><code>--time-picker-title-time-font-size</code></td><td><code>50px</code></td></tr><tr><td><code>--time-picker-title-time-margin</code></td><td><code>0 5px</code></td></tr><tr><td><code>--time-picker-title-ampm-margin-left</code></td><td><code>5px</code></td></tr><tr><td><code>--time-picker-clock-left</code></td><td><code>27px</code></td></tr><tr><td><code>--time-picker-clock-right</code></td><td><code>27px</code></td></tr><tr><td><code>--time-picker-clock-top</code></td><td><code>27px</code></td></tr><tr><td><code>--time-picker-clock-bottom</code></td><td><code>27px</code></td></tr><tr><td><code>--time-picker-clock-container-width</code></td><td><code>270px</code></td></tr><tr><td><code>--time-picker-clock-container-height</code></td><td><code>270px</code></td></tr><tr><td><code>--time-picker-clock-container-background</code></td><td><code>#e0e0e0</code></td></tr><tr><td><code>--time-picker-clock-hand-height</code></td><td><code>calc(50% - 4px)</code></td></tr><tr><td><code>--time-picker-clock-hand-width</code></td><td><code>2px</code></td></tr><tr><td><code>--time-picker-clock-hand-bottom</code></td><td><code>50%</code></td></tr><tr><td><code>--time-picker-clock-hand-left</code></td><td><code>calc(50% - 1px)</code></td></tr><tr><td><code>--time-picker-clock-hand-background</code></td><td><code>var(--color-primary)</code></td></tr><tr><td><code>--time-picker-clock-hand-border-color</code></td><td><code>var(--color-primary)</code></td></tr><tr><td><code>--time-picker-clock-hand-before-width</code></td><td><code>10px</code></td></tr><tr><td><code>--time-picker-clock-hand-before-height</code></td><td><code>10px</code></td></tr><tr><td><code>--time-picker-clock-hand-before-border-width</code></td><td><code>2px</code></td></tr><tr><td><code>--time-picker-clock-hand-after-width</code></td><td><code>4px</code></td></tr><tr><td><code>--time-picker-clock-hand-after-height</code></td><td><code>4px</code></td></tr><tr><td><code>--time-picker-clock-item-height</code></td><td><code>32px</code></td></tr><tr><td><code>--time-picker-clock-item-width</code></td><td><code>32px</code></td></tr><tr><td><code>--time-picker-clock-item-active-background</code></td><td><code>var(--color-primary)</code></td></tr><tr><td><code>--time-picker-clock-item-active-color</code></td><td><code>#fff</code></td></tr><tr><td><code>--time-picker-clock-item-disable-color</code></td><td><code>rgba(0, 0, 0, 0.26)</code></td></tr><tr><td><code>--time-picker-inner-left</code></td><td><code>36px</code></td></tr><tr><td><code>--time-picker-inner-right</code></td><td><code>36px</code></td></tr><tr><td><code>--time-picker-inner-top</code></td><td><code>36px</code></td></tr><tr><td><code>--time-picker-inner-bottom</code></td><td><code>36px</code></td></tr><tr><td><code>--time-picker-body-background</code></td><td><code>transparent</code></td></tr></tbody></table></div>',5);function E(F,L,N,$,A,M){const e=l("var-site-code-example");return o(),n("div",i,[h,m,s("div",j,[u,d(e,null,{default:a(()=>[k]),_:1})]),s("div",g,[f,_,d(e,null,{default:a(()=>[v]),_:1})]),s("div",b,[y,w,d(e,null,{default:a(()=>[x]),_:1})]),s("div",S,[T,d(e,null,{default:a(()=>[P]),_:1})]),s("div",D,[I,U,d(e,null,{default:a(()=>[V]),_:1})]),s("div",C,[H,d(e,null,{default:a(()=>[z]),_:1})]),B])}const R=c(p,[["render",E]]);export{R as default};
