import{B as h,O as r}from"./ResponsiveObject.7060c3a3.js";import{_ as o,p as c,f as j,h as d,M as a,q as l,S as t,P as s,at as i}from"./vue-router.esm-bundler.786782d7.js";import"./index.23e67665.js";import"./components.5becca44.js";import"./elements.c4571a13.js";import"./shared.ca7a1081.js";import"./index.1bb7d12f.js";const m={components:{BasicExample:h,ObjectExample:r}},g={class:"varlet-site-doc"},u=a("h1",null,"Layout",-1),b=a("div",{class:"card"},[a("h3",null,"Intro"),a("p",null,[s("The component library provides two auxiliary layout components, "),a("code",null,"<var-row/>"),s(" and "),a("code",null,"<var-col/>"),s(", so that you can layout more efficiently.")])],-1),v={class:"card"},f=a("h3",null,"Gird System",-1),_=a("pre",{class:"hljs"},[a("code",null,[s("The `"),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-row"),s(" />")]),s("` component divides a row into an average grid of 24 columns (24 pieces). The `"),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-col"),s(" />")]),s("` provides the\nspan property to set the number of pieces in the column and the `offset` property to set the number of pieces `offset`\nin the column.\n")])],-1),x=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-row"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-col"),s(),a("span",{class:"hljs-attr"},":span"),s("="),a("span",{class:"hljs-string"},'"8"'),s(">")]),s("span: 8"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-col"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-col"),s(),a("span",{class:"hljs-attr"},":span"),s("="),a("span",{class:"hljs-string"},'"8"'),s(">")]),s("span: 8"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-col"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-col"),s(),a("span",{class:"hljs-attr"},":span"),s("="),a("span",{class:"hljs-string"},'"8"'),s(">")]),s("span: 8"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-col"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-col"),s(),a("span",{class:"hljs-attr"},":span"),s("="),a("span",{class:"hljs-string"},'"8"'),s(">")]),s("span: 8"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-col"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-col"),s(),a("span",{class:"hljs-attr"},":span"),s("="),a("span",{class:"hljs-string"},'"8"'),s(">")]),s("span: 8"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-col"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-col"),s(),a("span",{class:"hljs-attr"},":span"),s("="),a("span",{class:"hljs-string"},'"8"'),s(">")]),s("span: 8"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-col"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-row"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"style"),s(">")]),a("span",{class:"css"},[s(`
`),a("span",{class:"hljs-selector-class"},".var-col"),s(` {
  `),a("span",{class:"hljs-attribute"},"justify-content"),s(`: center;
  `),a("span",{class:"hljs-attribute"},"align-items"),s(`: center;
  `),a("span",{class:"hljs-attribute"},"height"),s(": "),a("span",{class:"hljs-number"},"36px"),s(`;
  `),a("span",{class:"hljs-attribute"},"margin-bottom"),s(": "),a("span",{class:"hljs-number"},"10px"),s(`;
  `),a("span",{class:"hljs-attribute"},"color"),s(": "),a("span",{class:"hljs-number"},"#fff"),s(`;
  `),a("span",{class:"hljs-attribute"},"text-align"),s(`: center;
  `),a("span",{class:"hljs-attribute"},"background-clip"),s(": content-box "),a("span",{class:"hljs-meta"},"!important"),s(`;
  `),a("span",{class:"hljs-attribute"},"background"),s(": "),a("span",{class:"hljs-number"},"#3a7afe"),s(`;
}
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"style"),s(">")]),s(`
`)])],-1),y={class:"card"},w=a("h3",null,"Offset",-1),k=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-row"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-col"),s(),a("span",{class:"hljs-attr"},":span"),s("="),a("span",{class:"hljs-string"},'"16"'),s(),a("span",{class:"hljs-attr"},":offset"),s("="),a("span",{class:"hljs-string"},'"8"'),s(">")]),s("offset: 8 span: 16"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-col"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-col"),s(),a("span",{class:"hljs-attr"},":span"),s("="),a("span",{class:"hljs-string"},'"8"'),s(">")]),s("span: 8"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-col"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-col"),s(),a("span",{class:"hljs-attr"},":span"),s("="),a("span",{class:"hljs-string"},'"8"'),s(">")]),s("span: 8"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-col"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-col"),s(),a("span",{class:"hljs-attr"},":span"),s("="),a("span",{class:"hljs-string"},'"8"'),s(">")]),s("span: 8"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-col"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-row"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"style"),s(">")]),a("span",{class:"css"},[s(`
`),a("span",{class:"hljs-selector-class"},".var-col"),s(` {
  `),a("span",{class:"hljs-attribute"},"justify-content"),s(`: center;
  `),a("span",{class:"hljs-attribute"},"align-items"),s(`: center;
  `),a("span",{class:"hljs-attribute"},"height"),s(": "),a("span",{class:"hljs-number"},"36px"),s(`;
  `),a("span",{class:"hljs-attribute"},"margin-bottom"),s(": "),a("span",{class:"hljs-number"},"10px"),s(`;
  `),a("span",{class:"hljs-attribute"},"color"),s(": "),a("span",{class:"hljs-number"},"#fff"),s(`;
  `),a("span",{class:"hljs-attribute"},"text-align"),s(`: center;
  `),a("span",{class:"hljs-attribute"},"background-clip"),s(": content-box "),a("span",{class:"hljs-meta"},"!important"),s(`;
  `),a("span",{class:"hljs-attribute"},"background"),s(": "),a("span",{class:"hljs-number"},"#3a7afe"),s(`;
}
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"style"),s(">")]),s(`
`)])],-1),R={class:"card"},C=a("h3",null,"Alignment",-1),E=a("p",null,[s("The layout component is laid out in "),a("code",null,"flex"),s(" by default, using the "),a("code",null,"<var-row/>"),s(),a("code",null,"justify"),s(" and "),a("code",null,"align"),s(" properties to set the alignment of the main and cross axes.")],-1),P=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-row"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-col"),s(),a("span",{class:"hljs-attr"},":span"),s("="),a("span",{class:"hljs-string"},'"8"'),s(">")]),s("span: 8"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-col"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-col"),s(),a("span",{class:"hljs-attr"},":span"),s("="),a("span",{class:"hljs-string"},'"8"'),s(">")]),s("span: 8"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-col"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-row"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-row"),s(),a("span",{class:"hljs-attr"},"justify"),s("="),a("span",{class:"hljs-string"},'"center"'),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-col"),s(),a("span",{class:"hljs-attr"},":span"),s("="),a("span",{class:"hljs-string"},'"8"'),s(">")]),s("span: 8"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-col"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-col"),s(),a("span",{class:"hljs-attr"},":span"),s("="),a("span",{class:"hljs-string"},'"8"'),s(">")]),s("span: 8"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-col"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-row"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-row"),s(),a("span",{class:"hljs-attr"},"justify"),s("="),a("span",{class:"hljs-string"},'"flex-end"'),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-col"),s(),a("span",{class:"hljs-attr"},":span"),s("="),a("span",{class:"hljs-string"},'"8"'),s(">")]),s("span: 8"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-col"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-col"),s(),a("span",{class:"hljs-attr"},":span"),s("="),a("span",{class:"hljs-string"},'"8"'),s(">")]),s("span: 8"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-col"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-row"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-row"),s(),a("span",{class:"hljs-attr"},"justify"),s("="),a("span",{class:"hljs-string"},'"space-around"'),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-col"),s(),a("span",{class:"hljs-attr"},":span"),s("="),a("span",{class:"hljs-string"},'"8"'),s(">")]),s("span: 8"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-col"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-col"),s(),a("span",{class:"hljs-attr"},":span"),s("="),a("span",{class:"hljs-string"},'"8"'),s(">")]),s("span: 8"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-col"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-row"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-row"),s(),a("span",{class:"hljs-attr"},"justify"),s("="),a("span",{class:"hljs-string"},'"space-between"'),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-col"),s(),a("span",{class:"hljs-attr"},":span"),s("="),a("span",{class:"hljs-string"},'"8"'),s(">")]),s("span: 8"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-col"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-col"),s(),a("span",{class:"hljs-attr"},":span"),s("="),a("span",{class:"hljs-string"},'"8"'),s(">")]),s("span: 8"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-col"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-row"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"style"),s(">")]),a("span",{class:"css"},[s(`
`),a("span",{class:"hljs-selector-class"},".var-col"),s(` {
  `),a("span",{class:"hljs-attribute"},"justify-content"),s(`: center;
  `),a("span",{class:"hljs-attribute"},"align-items"),s(`: center;
  `),a("span",{class:"hljs-attribute"},"height"),s(": "),a("span",{class:"hljs-number"},"36px"),s(`;
  `),a("span",{class:"hljs-attribute"},"margin-bottom"),s(": "),a("span",{class:"hljs-number"},"10px"),s(`;
  `),a("span",{class:"hljs-attribute"},"color"),s(": "),a("span",{class:"hljs-number"},"#fff"),s(`;
  `),a("span",{class:"hljs-attribute"},"text-align"),s(`: center;
  `),a("span",{class:"hljs-attribute"},"background-clip"),s(": content-box "),a("span",{class:"hljs-meta"},"!important"),s(`;
  `),a("span",{class:"hljs-attribute"},"background"),s(": "),a("span",{class:"hljs-number"},"#3a7afe"),s(`;
}
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"style"),s(">")]),s(`
`)])],-1),S={class:"card"},T=a("h3",null,"Gutter",-1),D=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-row"),s(),a("span",{class:"hljs-attr"},":gutter"),s("="),a("span",{class:"hljs-string"},'"10"'),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-col"),s(),a("span",{class:"hljs-attr"},":span"),s("="),a("span",{class:"hljs-string"},'"8"'),s(">")]),s("span: 8"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-col"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-col"),s(),a("span",{class:"hljs-attr"},":span"),s("="),a("span",{class:"hljs-string"},'"8"'),s(">")]),s("span: 8"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-col"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-col"),s(),a("span",{class:"hljs-attr"},":span"),s("="),a("span",{class:"hljs-string"},'"8"'),s(">")]),s("span: 8"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-col"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-col"),s(),a("span",{class:"hljs-attr"},":span"),s("="),a("span",{class:"hljs-string"},'"8"'),s(">")]),s("span: 8"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-col"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-col"),s(),a("span",{class:"hljs-attr"},":span"),s("="),a("span",{class:"hljs-string"},'"8"'),s(">")]),s("span: 8"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-col"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-col"),s(),a("span",{class:"hljs-attr"},":span"),s("="),a("span",{class:"hljs-string"},'"8"'),s(">")]),s("span: 8"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-col"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-row"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"style"),s(">")]),a("span",{class:"css"},[s(`
`),a("span",{class:"hljs-selector-class"},".var-col"),s(` {
  `),a("span",{class:"hljs-attribute"},"justify-content"),s(`: center;
  `),a("span",{class:"hljs-attribute"},"align-items"),s(`: center;
  `),a("span",{class:"hljs-attribute"},"height"),s(": "),a("span",{class:"hljs-number"},"36px"),s(`;
  `),a("span",{class:"hljs-attribute"},"margin-bottom"),s(": "),a("span",{class:"hljs-number"},"10px"),s(`;
  `),a("span",{class:"hljs-attribute"},"color"),s(": "),a("span",{class:"hljs-number"},"#fff"),s(`;
  `),a("span",{class:"hljs-attribute"},"text-align"),s(`: center;
  `),a("span",{class:"hljs-attribute"},"background-clip"),s(": content-box "),a("span",{class:"hljs-meta"},"!important"),s(`;
  `),a("span",{class:"hljs-attribute"},"background"),s(": "),a("span",{class:"hljs-number"},"#3a7afe"),s(`;
}
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"style"),s(">")]),s(`
`)])],-1),N={class:"card"},B=a("h3",null,"Responsive Layout",-1),A=a("h4",null,"Basic Usage",-1),O={class:"varlet-component-preview"},V=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-row"),s(),a("span",{class:"hljs-attr"},":gutter"),s("="),a("span",{class:"hljs-string"},'"10"'),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-col"),s(),a("span",{class:"hljs-attr"},"class"),s("="),a("span",{class:"hljs-string"},'"col"'),s(),a("span",{class:"hljs-attr"},":xs"),s("="),a("span",{class:"hljs-string"},'"8"'),s(),a("span",{class:"hljs-attr"},":sm"),s("="),a("span",{class:"hljs-string"},'"6"'),s(),a("span",{class:"hljs-attr"},":md"),s("="),a("span",{class:"hljs-string"},'"4"'),s(),a("span",{class:"hljs-attr"},":lg"),s("="),a("span",{class:"hljs-string"},'"3"'),s(),a("span",{class:"hljs-attr"},":xl"),s("="),a("span",{class:"hljs-string"},'"1"'),s(">")]),s("1"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-col"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-col"),s(),a("span",{class:"hljs-attr"},"class"),s("="),a("span",{class:"hljs-string"},'"col"'),s(),a("span",{class:"hljs-attr"},":xs"),s("="),a("span",{class:"hljs-string"},'"4"'),s(),a("span",{class:"hljs-attr"},":sm"),s("="),a("span",{class:"hljs-string"},'"6"'),s(),a("span",{class:"hljs-attr"},":md"),s("="),a("span",{class:"hljs-string"},'"8"'),s(),a("span",{class:"hljs-attr"},":lg"),s("="),a("span",{class:"hljs-string"},'"9"'),s(),a("span",{class:"hljs-attr"},":xl"),s("="),a("span",{class:"hljs-string"},'"11"'),s(">")]),s("2"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-col"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-col"),s(),a("span",{class:"hljs-attr"},"class"),s("="),a("span",{class:"hljs-string"},'"col"'),s(),a("span",{class:"hljs-attr"},":xs"),s("="),a("span",{class:"hljs-string"},'"4"'),s(),a("span",{class:"hljs-attr"},":sm"),s("="),a("span",{class:"hljs-string"},'"6"'),s(),a("span",{class:"hljs-attr"},":md"),s("="),a("span",{class:"hljs-string"},'"8"'),s(),a("span",{class:"hljs-attr"},":lg"),s("="),a("span",{class:"hljs-string"},'"9"'),s(),a("span",{class:"hljs-attr"},":xl"),s("="),a("span",{class:"hljs-string"},'"11"'),s(">")]),s("3"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-col"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-col"),s(),a("span",{class:"hljs-attr"},"class"),s("="),a("span",{class:"hljs-string"},'"col"'),s(),a("span",{class:"hljs-attr"},":xs"),s("="),a("span",{class:"hljs-string"},'"8"'),s(),a("span",{class:"hljs-attr"},":sm"),s("="),a("span",{class:"hljs-string"},'"6"'),s(),a("span",{class:"hljs-attr"},":md"),s("="),a("span",{class:"hljs-string"},'"4"'),s(),a("span",{class:"hljs-attr"},":lg"),s("="),a("span",{class:"hljs-string"},'"3"'),s(),a("span",{class:"hljs-attr"},":xl"),s("="),a("span",{class:"hljs-string"},'"1"'),s(">")]),s("4"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-col"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-row"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"style"),s(">")]),a("span",{class:"css"},[s(`
`),a("span",{class:"hljs-selector-class"},".var-col"),s(` {
  `),a("span",{class:"hljs-attribute"},"justify-content"),s(`: center;
  `),a("span",{class:"hljs-attribute"},"align-items"),s(`: center;
  `),a("span",{class:"hljs-attribute"},"height"),s(": "),a("span",{class:"hljs-number"},"36px"),s(`;
  `),a("span",{class:"hljs-attribute"},"margin-bottom"),s(": "),a("span",{class:"hljs-number"},"10px"),s(`;
  `),a("span",{class:"hljs-attribute"},"color"),s(": "),a("span",{class:"hljs-number"},"#fff"),s(`;
  `),a("span",{class:"hljs-attribute"},"text-align"),s(`: center;
  `),a("span",{class:"hljs-attribute"},"background-clip"),s(": content-box "),a("span",{class:"hljs-meta"},"!important"),s(`;
  `),a("span",{class:"hljs-attribute"},"background"),s(": "),a("span",{class:"hljs-number"},"#3a7afe"),s(`;
}
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"style"),s(">")]),s(`
`)])],-1),$=a("h4",null,"Column Props Object",-1),G={class:"varlet-component-preview"},I=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-row"),s(),a("span",{class:"hljs-attr"},":gutter"),s("="),a("span",{class:"hljs-string"},'"10"'),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-col"),s(`
      `),a("span",{class:"hljs-attr"},"class"),s("="),a("span",{class:"hljs-string"},'"col"'),s(`
      `),a("span",{class:"hljs-attr"},":xs"),s("="),a("span",{class:"hljs-string"},'"{ span: 12, offset: 6 }"'),s(`
      `),a("span",{class:"hljs-attr"},":sm"),s("="),a("span",{class:"hljs-string"},'"{ span: 6 }"'),s(`
      `),a("span",{class:"hljs-attr"},":md"),s("="),a("span",{class:"hljs-string"},'"{ span: 4, offset: 4 }"'),s(`
      `),a("span",{class:"hljs-attr"},":lg"),s("="),a("span",{class:"hljs-string"},'"{ span: 3, offset: 3 }"'),s(`
      `),a("span",{class:"hljs-attr"},":xl"),s("="),a("span",{class:"hljs-string"},'"{ span: 2, offset: 2 }"'),s(`
    >`)]),s(`
      1
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-col"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-col"),s(`
      `),a("span",{class:"hljs-attr"},"class"),s("="),a("span",{class:"hljs-string"},'"col"'),s(`
      `),a("span",{class:"hljs-attr"},":xs"),s("="),a("span",{class:"hljs-string"},'"{ span: 12, offset: 6 }"'),s(`
      `),a("span",{class:"hljs-attr"},":sm"),s("="),a("span",{class:"hljs-string"},'"{ span: 6 }"'),s(`
      `),a("span",{class:"hljs-attr"},":md"),s("="),a("span",{class:"hljs-string"},'"{ span: 4, offset: 4 }"'),s(`
      `),a("span",{class:"hljs-attr"},":lg"),s("="),a("span",{class:"hljs-string"},'"{ span: 3, offset: 3 }"'),s(`
      `),a("span",{class:"hljs-attr"},":xl"),s("="),a("span",{class:"hljs-string"},'"{ span: 2, offset: 2 }"'),s(`
    >`)]),s(`
      2
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-col"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-col"),s(`
      `),a("span",{class:"hljs-attr"},"class"),s("="),a("span",{class:"hljs-string"},'"col"'),s(`
      `),a("span",{class:"hljs-attr"},":xs"),s("="),a("span",{class:"hljs-string"},'"{ span: 12, offset: 6 }"'),s(`
      `),a("span",{class:"hljs-attr"},":sm"),s("="),a("span",{class:"hljs-string"},'"{ span: 6 }"'),s(`
      `),a("span",{class:"hljs-attr"},":md"),s("="),a("span",{class:"hljs-string"},'"{ span: 4, offset: 4 }"'),s(`
      `),a("span",{class:"hljs-attr"},":lg"),s("="),a("span",{class:"hljs-string"},'"{ span: 3, offset: 3 }"'),s(`
      `),a("span",{class:"hljs-attr"},":xl"),s("="),a("span",{class:"hljs-string"},'"{ span: 2, offset: 2 }"'),s(`
    >`)]),s(`
      3
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-col"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-col"),s(`
      `),a("span",{class:"hljs-attr"},"class"),s("="),a("span",{class:"hljs-string"},'"col"'),s(`
      `),a("span",{class:"hljs-attr"},":xs"),s("="),a("span",{class:"hljs-string"},'"{ span: 12, offset: 6 }"'),s(`
      `),a("span",{class:"hljs-attr"},":sm"),s("="),a("span",{class:"hljs-string"},'"{ span: 6 }"'),s(`
      `),a("span",{class:"hljs-attr"},":md"),s("="),a("span",{class:"hljs-string"},'"{ span: 4, offset: 4 }"'),s(`
      `),a("span",{class:"hljs-attr"},":lg"),s("="),a("span",{class:"hljs-string"},'"{ span: 3, offset: 3 }"'),s(`
      `),a("span",{class:"hljs-attr"},":xl"),s("="),a("span",{class:"hljs-string"},'"{ span: 2, offset: 2 }"'),s(`
    >`)]),s(`
      4
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-col"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-row"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"style"),s(">")]),a("span",{class:"css"},[s(`
`),a("span",{class:"hljs-selector-class"},".var-col"),s(` {
  `),a("span",{class:"hljs-attribute"},"justify-content"),s(`: center;
  `),a("span",{class:"hljs-attribute"},"align-items"),s(`: center;
  `),a("span",{class:"hljs-attribute"},"height"),s(": "),a("span",{class:"hljs-number"},"36px"),s(`;
  `),a("span",{class:"hljs-attribute"},"margin-bottom"),s(": "),a("span",{class:"hljs-number"},"10px"),s(`;
  `),a("span",{class:"hljs-attribute"},"color"),s(": "),a("span",{class:"hljs-number"},"#fff"),s(`;
  `),a("span",{class:"hljs-attribute"},"text-align"),s(`: center;
  `),a("span",{class:"hljs-attribute"},"background-clip"),s(": content-box "),a("span",{class:"hljs-meta"},"!important"),s(`;
  `),a("span",{class:"hljs-attribute"},"background"),s(": "),a("span",{class:"hljs-number"},"#3a7afe"),s(`;
}
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"style"),s(">")]),s(`
`)])],-1),L=i('<h2>API</h2><div class="card"><h3>Props</h3><h4>Row Props</h4><table><thead><tr><th>Prop</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>gutter</code></td><td>Col gutter</td><td><em>string | number</em></td><td><code>0</code></td></tr><tr><td><code>justify</code></td><td>Spindle alignment, optional value is <code>flex-start</code> <code>flex-end</code> <code>center</code> <code>space-between</code> <code>space-around</code></td><td><em>string</em></td><td><code>flex-start</code></td></tr><tr><td><code>align</code></td><td>Cross axis alignment, optional value is <code>flex-start</code> <code>flex-end</code> <code>center</code></td><td><em>string</em></td><td><code>flex-start</code></td></tr></tbody></table><h4>Col Props</h4><table><thead><tr><th>Prop</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>span</code></td><td>Number of grids occupied by columns</td><td><em>string | number</em></td><td><code>24</code></td></tr><tr><td><code>offset</code></td><td>Number of grids for column offsets</td><td><em>string | number</em></td><td><code>0</code></td></tr><tr><td><code>direction</code></td><td>The optional value of layout direction is <code>row</code> <code>column</code></td><td><em>string</em></td><td><code>row</code></td></tr><tr><td><code>xs</code></td><td><code>&lt;768px</code> Responsive columns or column props object</td><td><em>string | number | { span?: number | string, offset?: number | string }</em></td><td><code>-</code></td></tr><tr><td><code>sm</code></td><td><code>\u2265768px</code> Responsive columns or column props object</td><td><em>string | number | { span?: number | string, offset?: number | string }</em></td><td><code>-</code></td></tr><tr><td><code>md</code></td><td><code>\u2265992px</code> Responsive columns or column props object</td><td><em>string | number | { span?: number | string, offset?: number | string }</em></td><td><code>-</code></td></tr><tr><td><code>lg</code></td><td><code>\u22651200px</code> Responsive columns or column props object</td><td><em>string | number | { span?: number | string, offset?: number | string }</em></td><td><code>-</code></td></tr><tr><td><code>xl</code></td><td><code>\u22651920px</code> Responsive columns or column props object</td><td><em>string | number | { span?: number | string, offset?: number | string }</em></td><td><code>-</code></td></tr></tbody></table></div><div class="card"><h3>Events</h3><h4>Row Events</h4><table><thead><tr><th>Event</th><th>Description</th><th>Arguments</th></tr></thead><tbody><tr><td><code>click</code></td><td>Triggered when you click Row</td><td><code>event: Event</code></td></tr></tbody></table><h4>Col Events</h4><table><thead><tr><th>Event</th><th>Description</th><th>Arguments</th></tr></thead><tbody><tr><td><code>click</code></td><td>Triggered when you click Col</td><td><code>event: Event</code></td></tr></tbody></table></div><div class="card"><h3>Slots</h3><h4>Row Slots</h4><table><thead><tr><th>Name</th><th>Description</th><th>SlotProps</th></tr></thead><tbody><tr><td><code>default</code></td><td>Row content</td><td><code>-</code></td></tr></tbody></table><h4>Col Slots</h4><table><thead><tr><th>Name</th><th>Description</th><th>SlotProps</th></tr></thead><tbody><tr><td><code>default</code></td><td>Col content</td><td><code>-</code></td></tr></tbody></table></div>',4);function U(q,M,z,F,H,J){const n=c("var-site-code-example"),e=c("basic-example"),p=c("object-example");return j(),d("div",g,[u,b,a("div",v,[f,l(n,null,{default:t(()=>[_]),_:1}),l(n,null,{default:t(()=>[x]),_:1})]),a("div",y,[w,l(n,null,{default:t(()=>[k]),_:1})]),a("div",R,[C,E,l(n,null,{default:t(()=>[P]),_:1})]),a("div",S,[T,l(n,null,{default:t(()=>[D]),_:1})]),a("div",N,[B,A,a("div",O,[l(e)]),l(n,null,{default:t(()=>[V]),_:1}),$,a("div",G,[l(p)]),l(n,null,{default:t(()=>[I]),_:1})]),L])}const as=o(m,[["render",U]]);export{as as default};
