import{_ as n,p as c,f as d,h as o,M as t,q as e,S as l,at as r,P as s}from"./vue-router.esm-bundler.786782d7.js";const h={components:{}},p={class:"varlet-site-doc"},i=t("h1",null,"ImagePreview",-1),j=t("div",{class:"card"},[t("h3",null,"Intro"),t("p",null,"Image-Preview, Support double-click magnification, Support function call and component call two ways.")],-1),g={class:"card"},m=t("h3",null,"Function Call",-1),v=t("h4",null,"Basic Usage",-1),u=t("pre",{class:"hljs"},[t("code",null,[t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"script"),s(),t("span",{class:"hljs-attr"},"setup"),s(">")]),t("span",{class:"javascript"},[s(`
`),t("span",{class:"hljs-keyword"},"import"),s(" { ImagePreview } "),t("span",{class:"hljs-keyword"},"from"),s(),t("span",{class:"hljs-string"},"'@varlet/ui'"),s(`

`),t("span",{class:"hljs-keyword"},"const"),s(" preview = "),t("span",{class:"hljs-function"},"() =>"),s(` {
  ImagePreview(`),t("span",{class:"hljs-string"},"'https://varlet.gitee.io/varlet-ui/cat.jpg'"),s(`)
}
`)]),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-button"),s(),t("span",{class:"hljs-attr"},"type"),s("="),t("span",{class:"hljs-string"},'"primary"'),s(),t("span",{class:"hljs-attr"},"block"),s(" @"),t("span",{class:"hljs-attr"},"click"),s("="),t("span",{class:"hljs-string"},'"preview"'),s(">")]),s("Basic Use"),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"var-button"),s(">")]),s(`
`),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),w=t("h4",null,"Call Back",-1),b=t("pre",{class:"hljs"},[t("code",null,[t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"script"),s(),t("span",{class:"hljs-attr"},"setup"),s(">")]),t("span",{class:"javascript"},[s(`
`),t("span",{class:"hljs-keyword"},"import"),s(" { ImagePreview } "),t("span",{class:"hljs-keyword"},"from"),s(),t("span",{class:"hljs-string"},"'@varlet/ui'"),s(`

`),t("span",{class:"hljs-keyword"},"const"),s(" preview = "),t("span",{class:"hljs-function"},"() =>"),s(` {
  ImagePreview({
    `),t("span",{class:"hljs-attr"},"images"),s(`: [
      `),t("span",{class:"hljs-string"},"'https://varlet.gitee.io/varlet-ui/cat.jpg'"),s(`,
      `),t("span",{class:"hljs-string"},"'https://varlet.gitee.io/varlet-ui/cat2.jpg'"),s(`
    ],
    `),t("span",{class:"hljs-function"},[t("span",{class:"hljs-title"},"onChange"),s("("),t("span",{class:"hljs-params"},"index"),s(")")]),s(` {
      `),t("span",{class:"hljs-built_in"},"console"),s(`.log(index)
    }
  })
}
`)]),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-button"),s(),t("span",{class:"hljs-attr"},"type"),s("="),t("span",{class:"hljs-string"},'"primary"'),s(),t("span",{class:"hljs-attr"},"block"),s(" @"),t("span",{class:"hljs-attr"},"click"),s("="),t("span",{class:"hljs-string"},'"preview"'),s(">")]),s("Handle callback function"),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"var-button"),s(">")]),s(`
`),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),f=t("h2",null,"Component Call",-1),_={class:"card"},k=t("h3",null,"Basic Use",-1),y=t("pre",{class:"hljs"},[t("code",null,[t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"script"),s(),t("span",{class:"hljs-attr"},"setup"),s(">")]),t("span",{class:"javascript"},[s(`
`),t("span",{class:"hljs-keyword"},"import"),s(" { ref } "),t("span",{class:"hljs-keyword"},"from"),s(),t("span",{class:"hljs-string"},"'vue'"),s(`

`),t("span",{class:"hljs-keyword"},"const"),s(" show = ref("),t("span",{class:"hljs-literal"},"false"),s(`)
`),t("span",{class:"hljs-keyword"},"const"),s(` images = ref([
  `),t("span",{class:"hljs-string"},"'https://varlet.gitee.io/varlet-ui/cat.jpg'"),s(`,
  `),t("span",{class:"hljs-string"},"'https://varlet.gitee.io/varlet-ui/cat2.jpg'"),s(`,
])
`)]),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-button"),s(`
    `),t("span",{class:"hljs-attr"},"type"),s("="),t("span",{class:"hljs-string"},'"warning"'),s(`
    `),t("span",{class:"hljs-attr"},"block"),s(`
    @`),t("span",{class:"hljs-attr"},"click"),s("="),t("span",{class:"hljs-string"},'"show = true"'),s(`
  >`)]),s(`
    Basic Use
  `),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"var-button"),s(">")]),s(`
  `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-image-preview"),s(),t("span",{class:"hljs-attr"},":images"),s("="),t("span",{class:"hljs-string"},'"images"'),s(),t("span",{class:"hljs-attr"},"v-model:show"),s("="),t("span",{class:"hljs-string"},'"show"'),s(" />")]),s(`
`),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),x={class:"card"},S=t("h3",null,"Specify initial position",-1),C=t("pre",{class:"hljs"},[t("code",null,[t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"script"),s(),t("span",{class:"hljs-attr"},"setup"),s(">")]),t("span",{class:"javascript"},[s(`
`),t("span",{class:"hljs-keyword"},"import"),s(" { ref } "),t("span",{class:"hljs-keyword"},"from"),s(),t("span",{class:"hljs-string"},"'vue'"),s(`

`),t("span",{class:"hljs-keyword"},"const"),s(" show = ref("),t("span",{class:"hljs-literal"},"false"),s(`)
`),t("span",{class:"hljs-keyword"},"const"),s(` images = ref([
  `),t("span",{class:"hljs-string"},"'https://varlet.gitee.io/varlet-ui/cat.jpg'"),s(`,
  `),t("span",{class:"hljs-string"},"'https://varlet.gitee.io/varlet-ui/cat2.jpg'"),s(`,
])
`)]),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
 `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-button"),s(` 
    `),t("span",{class:"hljs-attr"},"type"),s("="),t("span",{class:"hljs-string"},'"warning"'),s(` 
    `),t("span",{class:"hljs-attr"},"block"),s(`
    @`),t("span",{class:"hljs-attr"},"click"),s("="),t("span",{class:"hljs-string"},'"show = true"'),s(`
  >`)]),s(`
    Specify initial position
  `),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"var-button"),s(">")]),s(`
  `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-image-preview"),s(`
    `),t("span",{class:"hljs-attr"},"current"),s("="),t("span",{class:"hljs-string"},'"https://varlet.gitee.io/varlet-ui/cat2.jpg"'),s(`
    `),t("span",{class:"hljs-attr"},":images"),s("="),t("span",{class:"hljs-string"},'"images"'),s(`
    `),t("span",{class:"hljs-attr"},"v-model:show"),s("="),t("span",{class:"hljs-string"},'"show"'),s(` 
  />`)]),s(`
`),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),P={class:"card"},T=t("h3",null,"Display the close button",-1),I=t("pre",{class:"hljs"},[t("code",null,[t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"script"),s(),t("span",{class:"hljs-attr"},"setup"),s(">")]),t("span",{class:"javascript"},[s(`
`),t("span",{class:"hljs-keyword"},"import"),s(" { ref } "),t("span",{class:"hljs-keyword"},"from"),s(),t("span",{class:"hljs-string"},"'vue'"),s(`

`),t("span",{class:"hljs-keyword"},"const"),s(" show = ref("),t("span",{class:"hljs-literal"},"false"),s(`)
`),t("span",{class:"hljs-keyword"},"const"),s(` images = ref([
  `),t("span",{class:"hljs-string"},"'https://varlet.gitee.io/varlet-ui/cat.jpg'"),s(`,
  `),t("span",{class:"hljs-string"},"'https://varlet.gitee.io/varlet-ui/cat2.jpg'"),s(`,
])
`)]),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
   `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-button"),s(` 
    `),t("span",{class:"hljs-attr"},"type"),s("="),t("span",{class:"hljs-string"},'"warning"'),s(` 
    `),t("span",{class:"hljs-attr"},"block"),s(` 
    @`),t("span",{class:"hljs-attr"},"click"),s("="),t("span",{class:"hljs-string"},'"show = true"'),s(`
  >`)]),s(`
    Display the close button
  `),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"var-button"),s(">")]),s(`
  `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-image-preview"),s(`
    `),t("span",{class:"hljs-attr"},"closeable"),s(`
    `),t("span",{class:"hljs-attr"},":images"),s("="),t("span",{class:"hljs-string"},'"images"'),s(`
    `),t("span",{class:"hljs-attr"},"v-model:show"),s("="),t("span",{class:"hljs-string"},'"show"'),s(` 
  />`)]),s(`
`),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),D={class:"card"},U=t("h3",null,"Listen for close event",-1),L=t("pre",{class:"hljs"},[t("code",null,[t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"script"),s(),t("span",{class:"hljs-attr"},"setup"),s(">")]),t("span",{class:"javascript"},[s(`
`),t("span",{class:"hljs-keyword"},"import"),s(" { ref } "),t("span",{class:"hljs-keyword"},"from"),s(),t("span",{class:"hljs-string"},"'vue'"),s(`
`),t("span",{class:"hljs-keyword"},"import"),s(" { Snackbar } "),t("span",{class:"hljs-keyword"},"from"),s(),t("span",{class:"hljs-string"},"'@varlet/ui'"),s(`

`),t("span",{class:"hljs-keyword"},"const"),s(" show = ref("),t("span",{class:"hljs-literal"},"false"),s(`)
`),t("span",{class:"hljs-keyword"},"const"),s(` images = ref([
  `),t("span",{class:"hljs-string"},"'https://varlet.gitee.io/varlet-ui/cat.jpg'"),s(`,
  `),t("span",{class:"hljs-string"},"'https://varlet.gitee.io/varlet-ui/cat2.jpg'"),s(`,
])
`),t("span",{class:"hljs-keyword"},"const"),s(" handleCloseEvent = "),t("span",{class:"hljs-function"},"() =>"),s(" Snackbar("),t("span",{class:"hljs-string"},"'The shutdown event was triggered.'"),s(`);
`)]),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-button"),s(`
    `),t("span",{class:"hljs-attr"},"block"),s(`
    `),t("span",{class:"hljs-attr"},"type"),s("="),t("span",{class:"hljs-string"},'"warning"'),s(`
    @`),t("span",{class:"hljs-attr"},"click"),s("="),t("span",{class:"hljs-string"},'"show = true"'),s(`
  >`)]),s(`
    Listen for close event
  `),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"var-button"),s(">")]),s(`
  `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-image-preview"),s(` 
    `),t("span",{class:"hljs-attr"},":images"),s("="),t("span",{class:"hljs-string"},'"images"'),s(`
    `),t("span",{class:"hljs-attr"},"v-model:show"),s("="),t("span",{class:"hljs-string"},'"show"'),s(`
    @`),t("span",{class:"hljs-attr"},"close"),s("="),t("span",{class:"hljs-string"},'"handleCloseEvent"'),s(` 
  />`)]),s(`
`),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),z={class:"card"},B=t("h3",null,"Show extra slots",-1),W=t("pre",{class:"hljs"},[t("code",null,[t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"script"),s(),t("span",{class:"hljs-attr"},"setup"),s(">")]),t("span",{class:"javascript"},[s(`
`),t("span",{class:"hljs-keyword"},"import"),s(" { ref } "),t("span",{class:"hljs-keyword"},"from"),s(),t("span",{class:"hljs-string"},"'vue'"),s(`

`),t("span",{class:"hljs-keyword"},"const"),s(" show = ref("),t("span",{class:"hljs-literal"},"false"),s(`)
`),t("span",{class:"hljs-keyword"},"const"),s(" menuShow = ref("),t("span",{class:"hljs-literal"},"false"),s(`)
`),t("span",{class:"hljs-keyword"},"const"),s(` images = ref([
  `),t("span",{class:"hljs-string"},"'https://varlet.gitee.io/varlet-ui/cat.jpg'"),s(`,
  `),t("span",{class:"hljs-string"},"'https://varlet.gitee.io/varlet-ui/cat2.jpg'"),s(`,
])
`),t("span",{class:"hljs-keyword"},"const"),s(` actions = [
  {
    `),t("span",{class:"hljs-attr"},"name"),s(": "),t("span",{class:"hljs-string"},"'operate'"),s(`,
    `),t("span",{class:"hljs-attr"},"icon"),s(": "),t("span",{class:"hljs-string"},"'wrench'"),s(`
  },
  {
    `),t("span",{class:"hljs-attr"},"name"),s(": "),t("span",{class:"hljs-string"},"'operate'"),s(`,
    `),t("span",{class:"hljs-attr"},"icon"),s(": "),t("span",{class:"hljs-string"},"'wrench'"),s(`
  }
]
`)]),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
   `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-button"),s(`
     `),t("span",{class:"hljs-attr"},"block"),s(`
     `),t("span",{class:"hljs-attr"},"type"),s("="),t("span",{class:"hljs-string"},'"warning"'),s(`
     @`),t("span",{class:"hljs-attr"},"click"),s("="),t("span",{class:"hljs-string"},'"show = true"'),s(`
  >`)]),s(`
    Show extra slots
  `),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"var-button"),s(">")]),s(`
  `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-image-preview"),s(),t("span",{class:"hljs-attr"},":images"),s("="),t("span",{class:"hljs-string"},'"images"'),s(),t("span",{class:"hljs-attr"},"v-model:show"),s("="),t("span",{class:"hljs-string"},'"show"'),s(">")]),s(`
    `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"template"),s(" #"),t("span",{class:"hljs-attr"},"extra"),s(">")]),s(`
      `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-icon"),s(`
        `),t("span",{class:"hljs-attr"},"name"),s("="),t("span",{class:"hljs-string"},'"menu"'),s(`
        `),t("span",{class:"hljs-attr"},":size"),s("="),t("span",{class:"hljs-string"},'"22"'),s(`
        `),t("span",{class:"hljs-attr"},"color"),s("="),t("span",{class:"hljs-string"},'"#fff"'),s(`
        @`),t("span",{class:"hljs-attr"},"click"),s("="),t("span",{class:"hljs-string"},'"menuShow = true"'),s(`
      />`)]),s(`
      `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-action-sheet"),s(),t("span",{class:"hljs-attr"},":actions"),s("="),t("span",{class:"hljs-string"},'"actions"'),s(),t("span",{class:"hljs-attr"},"v-model:show"),s("="),t("span",{class:"hljs-string"},'"menuShow"'),s(" />")]),s(`
    `),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"var-image-preview"),s(">")]),s(`
`),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),E=r('<h2>API</h2><div class="card"><h3>Props</h3><table><thead><tr><th>Prop</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>show</code></td><td>Whether or display</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>images</code></td><td>Need to preview the image URL</td><td><em>string[]</em></td><td><code>[]</code></td></tr><tr><td><code>current</code></td><td>URL from which the image preview starts</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>zoom</code></td><td>Double-click to zoom in</td><td><em>string | number</em></td><td><code>2</code></td></tr><tr><td><code>closeable</code></td><td>Whether to show the close button</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>loop</code></td><td>Whether to open loop playback</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>indicator</code></td><td>Whether to show paging</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>lock-scroll</code></td><td>Lock scroll</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>teleport</code></td><td>The location of the pop-up layer to mount</td><td><em>TeleportProps[\u2018to\u2019]</em></td><td><code>-</code></td></tr></tbody></table></div><div class="card"><h3>Events</h3><table><thead><tr><th>Event</th><th>Description</th><th>Arguments</th></tr></thead><tbody><tr><td><code>change</code></td><td>The callback function when switching images, the callback parameter is the current index</td><td><code>index: number</code> Image indexing</td></tr><tr><td><code>open</code></td><td>Triggered when Image-Preview is turned on</td><td><code>-</code></td></tr><tr><td><code>opened</code></td><td>Triggered at the end of the open image-preview animation</td><td><code>-</code></td></tr><tr><td><code>close</code></td><td>Triggered when Image-Preview is off</td><td><code>-</code></td></tr><tr><td><code>closed</code></td><td>Triggered when the animation that closes the image-preview ends</td><td><code>-</code></td></tr></tbody></table></div><div class="card"><h3>Slot</h3><table><thead><tr><th>Name</th><th>Description</th><th>SlotProps</th></tr></thead><tbody><tr><td><code>indicator</code></td><td>Paging indicator</td><td><code>index: number</code> Image indexing <br> <code>length: number</code> Total number of image</td></tr><tr><td><code>close-icon</code></td><td>Close button</td><td><code>-</code></td></tr><tr><td><code>extra</code></td><td>Extra slots</td><td><code>-</code></td></tr></tbody></table></div><div class="card"><h3>ImagePreview Options</h3><table><thead><tr><th>Prop</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>images</code></td><td>The image URL array or the URL of a single image to be previewed</td><td><em>string[] | string</em></td><td><code>[]</code></td></tr><tr><td><code>current</code></td><td>URL from which the image preview starts</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>zoom</code></td><td>Double-click to zoom in</td><td><em>string | number</em></td><td><code>2</code></td></tr><tr><td><code>closeable</code></td><td>Whether to show the close button</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>loop</code></td><td>Whether to open loop playback</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>indicator</code></td><td>Whether to show paging</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>lockScroll</code></td><td>Lock scroll</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>onChange</code></td><td>The callback function when switching images, the callback parameter is the current index</td><td><em>(index: number) =&gt; void</em></td><td><code>-</code></td></tr><tr><td><code>onOpen</code></td><td>Callback when image-preview is turned on</td><td><em>() =&gt; void</em></td><td><code>-</code></td></tr><tr><td><code>onOpened</code></td><td>Callback at the end of the animation that opened image-preview</td><td><em>() =&gt; void</em></td><td><code>-</code></td></tr><tr><td><code>onClose</code></td><td>Callback when image-preview is closed</td><td><em>() =&gt; void</em></td><td><code>-</code></td></tr><tr><td><code>onClosed</code></td><td>Callback at the end of the animation that closes the image-preview</td><td><em>() =&gt; void</em></td><td><code>-</code></td></tr></tbody></table></div><div class="card"><h3>Style Variables</h3><p>Here are the CSS variables used by the component, Styles can be customized using <a href="#/en-US/style-provider">StyleProvider</a></p><table><thead><tr><th>Variable</th><th>Default</th></tr></thead><tbody><tr><td><code>--image-preview-swipe-indicators-text-color</code></td><td><code>#ddd</code></td></tr><tr><td><code>--image-preview-swipe-indicators-padding</code></td><td><code>16px 0</code></td></tr><tr><td><code>--image-preview-zoom-container-background</code></td><td><code>#000</code></td></tr><tr><td><code>--image-preview-close-icon-top</code></td><td><code>14px</code></td></tr><tr><td><code>--image-preview-close-icon-right</code></td><td><code>14px</code></td></tr><tr><td><code>--image-preview-close-icon-size</code></td><td><code>22px</code></td></tr><tr><td><code>--image-preview-close-icon-color</code></td><td><code>#fff</code></td></tr><tr><td><code>--image-preview-extra-top</code></td><td><code>14px</code></td></tr><tr><td><code>--image-preview-extra-left</code></td><td><code>14px</code></td></tr></tbody></table></div>',6);function N(V,R,$,O,A,H){const a=c("var-site-code-example");return d(),o("div",p,[i,j,t("div",g,[m,v,e(a,null,{default:l(()=>[u]),_:1}),w,e(a,null,{default:l(()=>[b]),_:1})]),f,t("div",_,[k,e(a,null,{default:l(()=>[y]),_:1})]),t("div",x,[S,e(a,null,{default:l(()=>[C]),_:1})]),t("div",P,[T,e(a,null,{default:l(()=>[I]),_:1})]),t("div",D,[U,e(a,null,{default:l(()=>[L]),_:1})]),t("div",z,[B,e(a,null,{default:l(()=>[W]),_:1})]),E])}const F=n(h,[["render",N]]);export{F as default};
