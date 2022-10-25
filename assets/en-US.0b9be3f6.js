import{_ as e,p as c,f as h,h as d,M as a,q as l,S as n,P as s,at as o}from"./vue-router.esm-bundler.786782d7.js";const r={components:{}},p={class:"varlet-site-doc"},i=a("h1",null,"Tabs",-1),j=a("div",{class:"card"},[a("h3",null,"Intro"),a("p",null,[s("Use "),a("code",null,"Tabs, Tab"),s(" to switch between tabbed groups and Use "),a("code",null,"TabsItems"),s(", "),a("code",null,"TabItem"),s(" to achieve view linkage with Tabs.")])],-1),m={class:"card"},b=a("h3",null,"Basic Usage",-1),g=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"javascript"},[s(`
`),a("span",{class:"hljs-keyword"},"import"),s(" { ref } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`

`),a("span",{class:"hljs-keyword"},"const"),s(" active = ref("),a("span",{class:"hljs-number"},"0"),s(`)
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-tabs"),s(),a("span",{class:"hljs-attr"},"v-model:active"),s("="),a("span",{class:"hljs-string"},'"active"'),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-tab"),s(">")]),s("Option1"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-tab"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-tab"),s(">")]),s("Option2"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-tab"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-tab"),s(">")]),s("Option3"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-tab"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-tabs"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),v={class:"card"},u=a("h3",null,"Named TAB",-1),f=a("p",null,[s("The Tabs decide which tab is activated by default by matching the "),a("code",null,"active"),s(" to the Tab\u2019s "),a("code",null,"index"),s(" You can also name a Tab by setting the "),a("code",null,"name"),s(" to the Tab, in which case the Tabs will match the name first.")],-1),y=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"javascript"},[s(`
`),a("span",{class:"hljs-keyword"},"import"),s(" { ref } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`

`),a("span",{class:"hljs-keyword"},"const"),s(" active = ref("),a("span",{class:"hljs-string"},"'Option1'"),s(`)
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-tabs"),s(),a("span",{class:"hljs-attr"},"v-model:active"),s("="),a("span",{class:"hljs-string"},'"active"'),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-tab"),s(),a("span",{class:"hljs-attr"},"name"),s("="),a("span",{class:"hljs-string"},'"Option1"'),s(">")]),s("Option1"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-tab"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-tab"),s(),a("span",{class:"hljs-attr"},"name"),s("="),a("span",{class:"hljs-string"},'"Option2"'),s(">")]),s("Option2"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-tab"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-tab"),s(),a("span",{class:"hljs-attr"},"name"),s("="),a("span",{class:"hljs-string"},'"Option3"'),s(">")]),s("Option3"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-tab"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-tabs"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),_={class:"card"},w=a("h3",null,"Modify Style",-1),T=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"javascript"},[s(`
`),a("span",{class:"hljs-keyword"},"import"),s(" { ref } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`

`),a("span",{class:"hljs-keyword"},"const"),s(" active = ref("),a("span",{class:"hljs-number"},"0"),s(`)
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-tabs"),s(`
    `),a("span",{class:"hljs-attr"},"elevation"),s(`
    `),a("span",{class:"hljs-attr"},"color"),s("="),a("span",{class:"hljs-string"},'"#2979ff"'),s(`
    `),a("span",{class:"hljs-attr"},"active-color"),s("="),a("span",{class:"hljs-string"},'"#fff"'),s(`
    `),a("span",{class:"hljs-attr"},"inactive-color"),s("="),a("span",{class:"hljs-string"},'"hsla(0, 0%, 100%, .6)"'),s(`
    `),a("span",{class:"hljs-attr"},"v-model:active"),s("="),a("span",{class:"hljs-string"},'"active"'),s(`
  >`)]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-tab"),s(">")]),s("Option1"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-tab"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-tab"),s(">")]),s("Option2"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-tab"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-tab"),s(">")]),s("Option3"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-tab"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-tabs"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),k={class:"card"},O=a("h3",null,"Tab Disabled",-1),x=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"javascript"},[s(`
`),a("span",{class:"hljs-keyword"},"import"),s(" { ref } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`

`),a("span",{class:"hljs-keyword"},"const"),s(" active = ref("),a("span",{class:"hljs-number"},"0"),s(`)
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-tabs"),s(`
    `),a("span",{class:"hljs-attr"},"elevation"),s(`
    `),a("span",{class:"hljs-attr"},"color"),s("="),a("span",{class:"hljs-string"},'"#2979ff"'),s(`
    `),a("span",{class:"hljs-attr"},"active-color"),s("="),a("span",{class:"hljs-string"},'"#fff"'),s(`
    `),a("span",{class:"hljs-attr"},"inactive-color"),s("="),a("span",{class:"hljs-string"},'"hsla(0, 0%, 100%, .6)"'),s(`
    `),a("span",{class:"hljs-attr"},"disabled-color"),s("="),a("span",{class:"hljs-string"},'"#aaa"'),s(`
    `),a("span",{class:"hljs-attr"},"v-model:active"),s("="),a("span",{class:"hljs-string"},'"active"'),s(`
  >`)]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-tab"),s(">")]),s("Option1"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-tab"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-tab"),s(">")]),s("Option2"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-tab"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-tab"),s(),a("span",{class:"hljs-attr"},"disabled"),s(">")]),s("disabled"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-tab"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-tabs"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),S={class:"card"},D=a("h3",null,"Enable Scroll",-1),P=a("p",null,[s("Start scrolling automatically when the number of tabs is "),a("code",null,"more than four"),s(". Click the Tab to scroll automatically to the center of the viewport.")],-1),I=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"javascript"},[s(`
`),a("span",{class:"hljs-keyword"},"import"),s(" { ref } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`

`),a("span",{class:"hljs-keyword"},"const"),s(" active = ref("),a("span",{class:"hljs-number"},"0"),s(`)
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-tabs"),s(`
    `),a("span",{class:"hljs-attr"},"elevation"),s(`
    `),a("span",{class:"hljs-attr"},"color"),s("="),a("span",{class:"hljs-string"},'"#2979ff"'),s(`
    `),a("span",{class:"hljs-attr"},"active-color"),s("="),a("span",{class:"hljs-string"},'"#fff"'),s(`
    `),a("span",{class:"hljs-attr"},"inactive-color"),s("="),a("span",{class:"hljs-string"},'"hsla(0, 0%, 100%, .6)"'),s(`
    `),a("span",{class:"hljs-attr"},"v-model:active"),s("="),a("span",{class:"hljs-string"},'"active"'),s(`
  >`)]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-tab"),s(">")]),s("Option1"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-tab"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-tab"),s(">")]),s("Option2"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-tab"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-tab"),s(">")]),s("Option3"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-tab"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-tab"),s(">")]),s("Option4"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-tab"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-tab"),s(">")]),s("Option5"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-tab"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-tab"),s(">")]),s("Option6"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-tab"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-tab"),s(">")]),s("Option7"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-tab"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-tab"),s(">")]),s("Option8"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-tab"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-tabs"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),z={class:"card"},V=a("h3",null,"Tab Vertical Layout",-1),N=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"javascript"},[s(`
`),a("span",{class:"hljs-keyword"},"import"),s(" { ref } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`

`),a("span",{class:"hljs-keyword"},"const"),s(" active = ref("),a("span",{class:"hljs-number"},"0"),s(`)
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-tabs"),s(`
    `),a("span",{class:"hljs-attr"},"elevation"),s(`
    `),a("span",{class:"hljs-attr"},"item-direction"),s("="),a("span",{class:"hljs-string"},'"vertical"'),s(`
    `),a("span",{class:"hljs-attr"},"color"),s("="),a("span",{class:"hljs-string"},'"#2979ff"'),s(`
    `),a("span",{class:"hljs-attr"},"active-color"),s("="),a("span",{class:"hljs-string"},'"#fff"'),s(`
    `),a("span",{class:"hljs-attr"},"inactive-color"),s("="),a("span",{class:"hljs-string"},'"hsla(0, 0%, 100%, .6)"'),s(`
    `),a("span",{class:"hljs-attr"},"v-model:active"),s("="),a("span",{class:"hljs-string"},'"active"'),s(`
  >`)]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-tab"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-icon"),s(),a("span",{class:"hljs-attr"},"class"),s("="),a("span",{class:"hljs-string"},'"tabs-example-icon"'),s(),a("span",{class:"hljs-attr"},"name"),s("="),a("span",{class:"hljs-string"},'"information"'),s(" />")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"div"),s(">")]),s("Option1"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"div"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-tab"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-tab"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-icon"),s(),a("span",{class:"hljs-attr"},"class"),s("="),a("span",{class:"hljs-string"},'"tabs-example-icon"'),s(),a("span",{class:"hljs-attr"},"name"),s("="),a("span",{class:"hljs-string"},'"warning"'),s(" />")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"div"),s(">")]),s("Option2"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"div"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-tab"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-tab"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-icon"),s(),a("span",{class:"hljs-attr"},"class"),s("="),a("span",{class:"hljs-string"},'"tabs-example-icon"'),s(),a("span",{class:"hljs-attr"},"name"),s("="),a("span",{class:"hljs-string"},'"error"'),s(" />")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"div"),s(">")]),s("Option3"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"div"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-tab"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-tabs"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"style"),s(">")]),a("span",{class:"css"},[s(`
`),a("span",{class:"hljs-selector-class"},".tabs-example-icon"),s(` {
  `),a("span",{class:"hljs-attribute"},"margin-bottom"),s(": "),a("span",{class:"hljs-number"},"5px"),s(`;
}
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"style"),s(">")]),s(`
`)])],-1),E={class:"card"},M=a("h3",null,"Tabs Vertical Layout",-1),W=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"javascript"},[s(`
`),a("span",{class:"hljs-keyword"},"import"),s(" { ref } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`

`),a("span",{class:"hljs-keyword"},"const"),s(" active = ref("),a("span",{class:"hljs-number"},"0"),s(`)
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-tabs"),s(`
    `),a("span",{class:"hljs-attr"},"class"),s("="),a("span",{class:"hljs-string"},'"tabs-example-vertical"'),s(`
    `),a("span",{class:"hljs-attr"},"elevation"),s(`
    `),a("span",{class:"hljs-attr"},"layout-direction"),s("="),a("span",{class:"hljs-string"},'"vertical"'),s(`
    `),a("span",{class:"hljs-attr"},"color"),s("="),a("span",{class:"hljs-string"},'"#2979ff"'),s(`
    `),a("span",{class:"hljs-attr"},"active-color"),s("="),a("span",{class:"hljs-string"},'"#fff"'),s(`
    `),a("span",{class:"hljs-attr"},"inactive-color"),s("="),a("span",{class:"hljs-string"},'"hsla(0, 0%, 100%, .6)"'),s(`
    `),a("span",{class:"hljs-attr"},"v-model:active"),s("="),a("span",{class:"hljs-string"},'"active"'),s(`
  >`)]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-tab"),s(">")]),s("Option1"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-tab"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-tab"),s(">")]),s("Option2"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-tab"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-tab"),s(">")]),s("Option3"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-tab"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-tabs"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"style"),s(">")]),a("span",{class:"css"},[s(`
`),a("span",{class:"hljs-selector-class"},".tabs-example-vertical"),s(` {
  `),a("span",{class:"hljs-attribute"},"width"),s(": "),a("span",{class:"hljs-number"},"80px"),s(),a("span",{class:"hljs-meta"},"!important"),s(`;
  `),a("span",{class:"hljs-attribute"},"height"),s(": "),a("span",{class:"hljs-number"},"120px"),s(),a("span",{class:"hljs-meta"},"!important"),s(`;
}
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"style"),s(">")]),s(`
`)])],-1),A={class:"card"},B=a("h3",null,"View Relation",-1),U=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"javascript"},[s(`
`),a("span",{class:"hljs-keyword"},"import"),s(" { ref } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`

`),a("span",{class:"hljs-keyword"},"const"),s(" active = ref("),a("span",{class:"hljs-number"},"0"),s(`)
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-tabs"),s(`
    `),a("span",{class:"hljs-attr"},"elevation"),s(`
    `),a("span",{class:"hljs-attr"},"color"),s("="),a("span",{class:"hljs-string"},'"#2979ff"'),s(`
    `),a("span",{class:"hljs-attr"},"active-color"),s("="),a("span",{class:"hljs-string"},'"#fff"'),s(`
    `),a("span",{class:"hljs-attr"},"inactive-color"),s("="),a("span",{class:"hljs-string"},'"hsla(0, 0%, 100%, .6)"'),s(`
    `),a("span",{class:"hljs-attr"},"v-model:active"),s("="),a("span",{class:"hljs-string"},'"active"'),s(`
  >`)]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-tab"),s(">")]),s("Option1"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-tab"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-tab"),s(">")]),s("Option2"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-tab"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-tab"),s(">")]),s("Option3"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-tab"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-tabs"),s(">")]),s(`

  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-tabs-items"),s(),a("span",{class:"hljs-attr"},"v-model:active"),s("="),a("span",{class:"hljs-string"},'"active"'),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-tab-item"),s(">")]),s(`
      The way she came into the place. I knew right then and there. there was something different about this girl.
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-tab-item"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-tab-item"),s(">")]),s(`
      The girl was persuasive. the girl I could not trust. The girl was bad. the girl was dangerous. I never know.
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-tab-item"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-tab-item"),s(">")]),s(`
      She's so dangerous. the girl is so dangerous. Take away my money, throw away my time. You can call me honey. but
      you're no damn good for me.
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-tab-item"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-tabs-items"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),C={class:"card"},$=a("h3",null,"Sticky Layout",-1),L=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"javascript"},[s(`
`),a("span",{class:"hljs-keyword"},"import"),s(" { ref } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`

`),a("span",{class:"hljs-keyword"},"const"),s(" active = ref("),a("span",{class:"hljs-number"},"0"),s(`)
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"div"),s(),a("span",{class:"hljs-attr"},"class"),s("="),a("span",{class:"hljs-string"},'"sticky-example"'),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-tabs"),s(`
      `),a("span",{class:"hljs-attr"},"sticky"),s(`
      `),a("span",{class:"hljs-attr"},"elevation"),s(`
      `),a("span",{class:"hljs-attr"},"color"),s("="),a("span",{class:"hljs-string"},'"#2979ff"'),s(`
      `),a("span",{class:"hljs-attr"},"active-color"),s("="),a("span",{class:"hljs-string"},'"#fff"'),s(`
      `),a("span",{class:"hljs-attr"},"inactive-color"),s("="),a("span",{class:"hljs-string"},'"hsla(0, 0%, 100%, .6)"'),s(`
      `),a("span",{class:"hljs-attr"},"v-model:active"),s("="),a("span",{class:"hljs-string"},'"active"'),s(`
    >`)]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-tab"),s(">")]),s("Option1"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-tab"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-tab"),s(">")]),s("Option2"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-tab"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-tab"),s(">")]),s("Option3"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-tab"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-tabs"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"div"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"style"),s(">")]),a("span",{class:"css"},[s(`
`),a("span",{class:"hljs-selector-class"},".sticky-example"),s(` {
  `),a("span",{class:"hljs-attribute"},"height"),s(": "),a("span",{class:"hljs-number"},"200vh"),s(`;
}
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"style"),s(">")]),s(`
`)])],-1),R=o('<h2>API</h2><div class="card"><h3>Props</h3><h4>Tabs Props</h4><table><thead><tr><th>Prop</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>v-model:active</code></td><td>The <code>active</code> tab identifier matches <code>name</code> first, followed by <code>index</code></td><td><em>string</em></td><td><code>index</code></td></tr><tr><td><code>layout-direction</code></td><td>The layout direction of the tabs, optional value of <code>horizontal</code> <code>vertical</code></td><td><em>string</em></td><td><code>horizontal</code></td></tr><tr><td><code>item-direction</code></td><td>The layout direction of the tab, optional value of <code>horizontal</code> <code>vertical</code></td><td><em>string</em></td><td><code>horizontal</code></td></tr><tr><td><code>fixed-bottom</code></td><td>Whether fixed to the bottom of the window, can be used for bottom navigation</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>color</code></td><td>The background color of the tabs</td><td><em>string</em></td><td><code>#fff</code></td></tr><tr><td><code>active-color</code></td><td>The primary color that the tab is activates</td><td><em>string</em></td><td><code>#2979ff</code></td></tr><tr><td><code>inactive-color</code></td><td>The primary color that the tab is not activated</td><td><em>string</em></td><td><code>#646566</code></td></tr><tr><td><code>disabled-color</code></td><td>The primary color that the tab is disabled</td><td><em>string</em></td><td><code>#e0e0e0</code></td></tr><tr><td><code>indicator-color</code></td><td>The tab activates the color of the indicator</td><td><em>string</em></td><td><code>#2979ff</code></td></tr><tr><td><code>indicator-size</code></td><td>Tab activates the size of the indicator</td><td><em>string | number</em></td><td><code>2px</code></td></tr><tr><td><code>elevation</code></td><td>Whether to enable shadows</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>sticky</code></td><td>Whether to enable sticky layouts</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>safe-area</code></td><td>Whether to enable bottom safe area adaptation</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>offset-top</code></td><td>Distance offset top</td><td><em>string | number</em></td><td><code>0</code></td></tr></tbody></table><h4>Tab Props</h4><table><thead><tr><th>Prop</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>name</code></td><td>tab\u2019s name</td><td><em>string | number</em></td><td><code>index</code></td></tr><tr><td><code>disabled</code></td><td>Whether to disable tab</td><td><em>boolean</em></td><td><code>false</code></td></tr></tbody></table><h4>TabsItems Props</h4><table><thead><tr><th>Prop</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>v-model:active</code></td><td>The identity of the active tab</td><td><em>string | number</em></td><td><code>-</code></td></tr><tr><td><code>can-swipe</code></td><td>Whether to allow swipe switch</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>loop</code></td><td>Whether to allow cycle switching</td><td><em>boolean</em></td><td><code>false</code></td></tr></tbody></table><h4>TabItem Props</h4><table><thead><tr><th>Prop</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>name</code></td><td>view\u2019s name</td><td><em>string | number</em></td><td><code>index</code></td></tr></tbody></table></div><div class="card"><h3>Methods</h3><h4>Tabs Methods</h4><table><thead><tr><th>Method</th><th>Description</th><th>Arguments</th><th>Return</th></tr></thead><tbody><tr><td><code>resize</code></td><td>You can call this method to redraw when a tabs changes position size</td><td><code>-</code></td><td><code>-</code></td></tr></tbody></table><h4>TabsItems Methods</h4><table><thead><tr><th>Method</th><th>Description</th><th>Arguments</th><th>Return</th></tr></thead><tbody><tr><td><code>getSwipe</code></td><td>Get the <code>swipe</code> component instance</td><td><code>-</code></td><td><code>-</code></td></tr></tbody></table></div><div class="card"><h3>Events</h3><h4>Tabs Events</h4><table><thead><tr><th>Event</th><th>Description</th><th>Arguments</th></tr></thead><tbody><tr><td><code>click</code></td><td>Triggered when the tab is clicked, but not when the tab <code>disabled</code> status is <code>true</code></td><td><code>active: string | number</code></td></tr><tr><td><code>change</code></td><td>Triggered when switching tab</td><td><code>active: string | number</code></td></tr></tbody></table><h4>Tab Events</h4><table><thead><tr><th>Event</th><th>Description</th><th>Arguments</th></tr></thead><tbody><tr><td><code>click</code></td><td>Triggered when the tab is clicked, but not when the tab <code>disabled</code> status is <code>true</code></td><td><code>active: string | number</code> <br> <code>event: Event</code></td></tr></tbody></table></div><div class="card"><h3>Slots</h3><h4>Tabs Slots</h4><table><thead><tr><th>Name</th><th>Description</th><th>SlotProps</th></tr></thead><tbody><tr><td><code>default</code></td><td>tabs content</td><td><code>-</code></td></tr></tbody></table><h4>Tab Slots</h4><table><thead><tr><th>Name</th><th>Description</th><th>SlotProps</th></tr></thead><tbody><tr><td><code>default</code></td><td>tab\u2019s content</td><td><code>-</code></td></tr></tbody></table><h4>TabsItems Slots</h4><table><thead><tr><th>Name</th><th>Description</th><th>SlotProps</th></tr></thead><tbody><tr><td><code>default</code></td><td>TabsItems content</td><td><code>-</code></td></tr></tbody></table><h4>TabItem Slots</h4><table><thead><tr><th>Name</th><th>Description</th><th>SlotProps</th></tr></thead><tbody><tr><td><code>default</code></td><td>tabItem\u2019s content</td><td><code>-</code></td></tr></tbody></table></div><div class="card"><h3>Style Variables</h3><p>Here are the CSS variables used by the component, Styles can be customized using <a href="#/en-US/style-provider">StyleProvider</a></p><h4>Tabs Variables</h4><table><thead><tr><th>Variable</th><th>Default</th></tr></thead><tbody><tr><td><code>--tabs-item-horizontal-height</code></td><td><code>44px</code></td></tr><tr><td><code>--tabs-item-vertical-height</code></td><td><code>66px</code></td></tr><tr><td><code>--tabs-radius</code></td><td><code>2px</code></td></tr><tr><td><code>--tabs-padding</code></td><td><code>12px</code></td></tr><tr><td><code>--tabs-indicator-size</code></td><td><code>2px</code></td></tr><tr><td><code>--tabs-indicator-background</code></td><td><code>var(--color-primary)</code></td></tr><tr><td><code>--tabs-background</code></td><td><code>#fff</code></td></tr></tbody></table><h4>Tab Variables</h4><table><thead><tr><th>Variable</th><th>Default</th></tr></thead><tbody><tr><td><code>--tab-padding</code></td><td><code>12px</code></td></tr><tr><td><code>--tab-active-color</code></td><td><code>var(--color-primary)</code></td></tr><tr><td><code>--tab-inactive-color</code></td><td><code>#646566</code></td></tr><tr><td><code>--tab-disabled-color</code></td><td><code>var(--color-text-disabled)</code></td></tr><tr><td><code>--tab-font-size</code></td><td><code>var(--font-size-md)</code></td></tr></tbody></table></div>',6);function Y(q,G,H,F,J,K){const t=c("var-site-code-example");return h(),d("div",p,[i,j,a("div",m,[b,l(t,null,{default:n(()=>[g]),_:1})]),a("div",v,[u,f,l(t,null,{default:n(()=>[y]),_:1})]),a("div",_,[w,l(t,null,{default:n(()=>[T]),_:1})]),a("div",k,[O,l(t,null,{default:n(()=>[x]),_:1})]),a("div",S,[D,P,l(t,null,{default:n(()=>[I]),_:1})]),a("div",z,[V,l(t,null,{default:n(()=>[N]),_:1})]),a("div",E,[M,l(t,null,{default:n(()=>[W]),_:1})]),a("div",A,[B,l(t,null,{default:n(()=>[U]),_:1})]),a("div",C,[$,l(t,null,{default:n(()=>[L]),_:1})]),R])}const X=e(r,[["render",Y]]);export{X as default};
