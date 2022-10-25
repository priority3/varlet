import{_ as n,p as c,f as d,h as o,M as s,q as e,S as l,P as t,at as r}from"./vue-router.esm-bundler.786782d7.js";const h={components:{}},p={class:"varlet-site-doc"},i=s("h1",null,"Pagination",-1),j=s("div",{class:"card"},[s("h3",null,"Intro"),s("p",null,"You may need it when you need to process large amounts of data.")],-1),g=s("h2",null,"Simple Mode",-1),m=s("div",{class:"card"},[s("h3",null,"Intro"),s("p",null,"The default display mode is recommended for small-screen devices. See the mobile phone emulator on the right for a preview of the components.")],-1),u={class:"card"},_=s("h3",null,"Basic Usage",-1),b=s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-tag"},[t("<"),s("span",{class:"hljs-name"},"template"),t(">")]),t(`
  `),s("span",{class:"hljs-tag"},[t("<"),s("span",{class:"hljs-name"},"var-pagination"),t(),s("span",{class:"hljs-attr"},":current"),t("="),s("span",{class:"hljs-string"},'"3"'),t(),s("span",{class:"hljs-attr"},":total"),t("="),s("span",{class:"hljs-string"},'"120"'),t(" />")]),t(`
`),s("span",{class:"hljs-tag"},[t("</"),s("span",{class:"hljs-name"},"template"),t(">")]),t(`
`)])],-1),v={class:"card"},f=s("h3",null,"Hide Size Changer",-1),y=s("p",null,[t("Use "),s("code",null,"show-size-changer"),t(" prop to hide size changer.")],-1),w=s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-tag"},[t("<"),s("span",{class:"hljs-name"},"template"),t(">")]),t(`
  `),s("span",{class:"hljs-tag"},[t("<"),s("span",{class:"hljs-name"},"var-pagination"),t(),s("span",{class:"hljs-attr"},":current"),t("="),s("span",{class:"hljs-string"},'"3"'),t(),s("span",{class:"hljs-attr"},":total"),t("="),s("span",{class:"hljs-string"},'"120"'),t(),s("span",{class:"hljs-attr"},":show-size-changer"),t("="),s("span",{class:"hljs-string"},'"false"'),t("/>")]),t(`
`),s("span",{class:"hljs-tag"},[t("</"),s("span",{class:"hljs-name"},"template"),t(">")]),t(`
`)])],-1),z={class:"card"},x=s("h3",null,"Show Total",-1),S=s("p",null,[t("Use "),s("code",null,"showTatol"),t(" prop to show custom total text.")],-1),T=s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-tag"},[t("<"),s("span",{class:"hljs-name"},"template"),t(">")]),t(`
  `),s("span",{class:"hljs-tag"},[t("<"),s("span",{class:"hljs-name"},"var-pagination"),t(`
    `),s("span",{class:"hljs-attr"},":current"),t("="),s("span",{class:"hljs-string"},'"3"'),t(`
    `),s("span",{class:"hljs-attr"},":total"),t("="),s("span",{class:"hljs-string"},'"66"'),t(`
    `),s("span",{class:"hljs-attr"},":show-total"),t("="),s("span",{class:"hljs-string"},'"total => `Total ${total} items`"'),t(`
  />`)]),t(`
`),s("span",{class:"hljs-tag"},[t("</"),s("span",{class:"hljs-name"},"template"),t(">")]),t(`
`)])],-1),C={class:"card"},$=s("h3",null,"Disabled",-1),k=s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-tag"},[t("<"),s("span",{class:"hljs-name"},"template"),t(">")]),t(`
  `),s("span",{class:"hljs-tag"},[t("<"),s("span",{class:"hljs-name"},"var-pagination"),t(),s("span",{class:"hljs-attr"},":current"),t("="),s("span",{class:"hljs-string"},'"3"'),t(),s("span",{class:"hljs-attr"},":total"),t("="),s("span",{class:"hljs-string"},'"115"'),t(),s("span",{class:"hljs-attr"},"disabled"),t(" />")]),t(`
`),s("span",{class:"hljs-tag"},[t("</"),s("span",{class:"hljs-name"},"template"),t(">")]),t(`
`)])],-1),D=s("h2",null,"Basic Mode",-1),U=s("div",{class:"card"},[s("h3",null,"Intro"),s("p",null,[t("Set "),s("code",null,"simple"),t(" to "),s("code",null,"false"),t(" when you use medium and large screen devices, preview see "),s("code",null,"playground")])],-1),N={class:"card"},P=s("h3",null,"Basic Usage",-1),q=s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-tag"},[t("<"),s("span",{class:"hljs-name"},"template"),t(">")]),t(`
  `),s("span",{class:"hljs-tag"},[t("<"),s("span",{class:"hljs-name"},"var-pagination"),t(),s("span",{class:"hljs-attr"},"current"),t("="),s("span",{class:"hljs-string"},'"6"'),t(),s("span",{class:"hljs-attr"},"total"),t("="),s("span",{class:"hljs-string"},'"115"'),t(),s("span",{class:"hljs-attr"},":simple"),t("="),s("span",{class:"hljs-string"},'"false"'),t("/>")]),t(`
`),s("span",{class:"hljs-tag"},[t("</"),s("span",{class:"hljs-name"},"template"),t(">")]),t(`
`)])],-1),B={class:"card"},V=s("h3",null,"Enable page number to jump quickly",-1),E=s("p",null,[t("Use "),s("code",null,"show-quick-jumper"),t(" prop to enable page number to jump quickly.")],-1),I=s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-tag"},[t("<"),s("span",{class:"hljs-name"},"template"),t(">")]),t(`
  `),s("span",{class:"hljs-tag"},[t("<"),s("span",{class:"hljs-name"},"var-pagination"),t(`
    `),s("span",{class:"hljs-attr"},":current"),t("="),s("span",{class:"hljs-string"},'"3"'),t(`
    `),s("span",{class:"hljs-attr"},":total"),t("="),s("span",{class:"hljs-string"},'"120"'),t(`
    `),s("span",{class:"hljs-attr"},":simple"),t("="),s("span",{class:"hljs-string"},'"false"'),t(`
    `),s("span",{class:"hljs-attr"},"show-quick-jumper"),t(`
  />`)]),t(`
`),s("span",{class:"hljs-tag"},[t("</"),s("span",{class:"hljs-name"},"template"),t(">")]),t(`
`)])],-1),M={class:"card"},W=s("h3",null,"Size Option",-1),H=s("p",null,[t("Use "),s("code",null,"show-size-changer"),t(" hide size changer and use "),s("code",null,"size-option"),t(" prop set the number of "),s("code",null,"size"),t(" that can be chosen.")],-1),A=s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-tag"},[t("<"),s("span",{class:"hljs-name"},"template"),t(">")]),t(`
  `),s("span",{class:"hljs-tag"},[t("<"),s("span",{class:"hljs-name"},"var-space"),t(),s("span",{class:"hljs-attr"},"direction"),t("="),s("span",{class:"hljs-string"},'"column"'),t(),s("span",{class:"hljs-attr"},":size"),t("="),s("span",{class:"hljs-string"},'"[14, 14]"'),t(">")]),t(`
    `),s("span",{class:"hljs-tag"},[t("<"),s("span",{class:"hljs-name"},"var-pagination"),t(`
      `),s("span",{class:"hljs-attr"},":current"),t("="),s("span",{class:"hljs-string"},'"3"'),t(`
      `),s("span",{class:"hljs-attr"},":total"),t("="),s("span",{class:"hljs-string"},'"120"'),t(`
      `),s("span",{class:"hljs-attr"},":simple"),t("="),s("span",{class:"hljs-string"},'"false"'),t(`
      `),s("span",{class:"hljs-attr"},":show-size-changer"),t("="),s("span",{class:"hljs-string"},'"false"'),t(`
    />`)]),t(`
    `),s("span",{class:"hljs-tag"},[t("<"),s("span",{class:"hljs-name"},"var-pagination"),t(`
      `),s("span",{class:"hljs-attr"},":current"),t("="),s("span",{class:"hljs-string"},'"3"'),t(`
      `),s("span",{class:"hljs-attr"},":total"),t("="),s("span",{class:"hljs-string"},'"120"'),t(`
      `),s("span",{class:"hljs-attr"},":simple"),t("="),s("span",{class:"hljs-string"},'"false"'),t(`
      `),s("span",{class:"hljs-attr"},":size-option"),t("="),s("span",{class:"hljs-string"},'"[10, 20, 30, 40]"'),t(`
    />`)]),t(`
  `),s("span",{class:"hljs-tag"},[t("</"),s("span",{class:"hljs-name"},"var-space"),t(">")]),t(`
`),s("span",{class:"hljs-tag"},[t("</"),s("span",{class:"hljs-name"},"template"),t(">")]),t(`
`)])],-1),O={class:"card"},Y=s("h3",null,"Show Total",-1),F=s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-tag"},[t("<"),s("span",{class:"hljs-name"},"template"),t(">")]),t(`
  `),s("span",{class:"hljs-tag"},[t("<"),s("span",{class:"hljs-name"},"var-space"),t(),s("span",{class:"hljs-attr"},"direction"),t("="),s("span",{class:"hljs-string"},'"column"'),t(),s("span",{class:"hljs-attr"},":size"),t("="),s("span",{class:"hljs-string"},'"[14, 14]"'),t(">")]),t(`
    `),s("span",{class:"hljs-tag"},[t("<"),s("span",{class:"hljs-name"},"var-pagination"),t(`
      `),s("span",{class:"hljs-attr"},":current"),t("="),s("span",{class:"hljs-string"},'"3"'),t(`
      `),s("span",{class:"hljs-attr"},":size"),t("="),s("span",{class:"hljs-string"},'"10"'),t(`
      `),s("span",{class:"hljs-attr"},":total"),t("="),s("span",{class:"hljs-string"},'"120"'),t(`
      `),s("span",{class:"hljs-attr"},":simple"),t("="),s("span",{class:"hljs-string"},'"false"'),t(`
      `),s("span",{class:"hljs-attr"},":show-total"),t("="),s("span",{class:"hljs-string"},'"total => `Total ${total} items`"'),t(`
    />`)]),t(`
    `),s("span",{class:"hljs-tag"},[t("<"),s("span",{class:"hljs-name"},"var-pagination"),t(`
      `),s("span",{class:"hljs-attr"},":current"),t("="),s("span",{class:"hljs-string"},'"3"'),t(`
      `),s("span",{class:"hljs-attr"},":size"),t("="),s("span",{class:"hljs-string"},'"10"'),t(`
      `),s("span",{class:"hljs-attr"},":total"),t("="),s("span",{class:"hljs-string"},'"120"'),t(`
      `),s("span",{class:"hljs-attr"},":simple"),t("="),s("span",{class:"hljs-string"},'"false"'),t(`
      `),s("span",{class:"hljs-attr"},":show-total"),t("="),s("span",{class:"hljs-string"},'"(total, range) => `Total ${total}, current ${range[0]}-${range[1]}`"'),t(`
    />`)]),t(`
  `),s("span",{class:"hljs-tag"},[t("</"),s("span",{class:"hljs-name"},"var-space"),t(">")]),t(`
`),s("span",{class:"hljs-tag"},[t("</"),s("span",{class:"hljs-name"},"template"),t(">")]),t(`
`)])],-1),G={class:"card"},J=s("h3",null,"Disabled",-1),K=s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-tag"},[t("<"),s("span",{class:"hljs-name"},"template"),t(">")]),t(`
  `),s("span",{class:"hljs-tag"},[t("<"),s("span",{class:"hljs-name"},"var-pagination"),t(),s("span",{class:"hljs-attr"},":current"),t("="),s("span",{class:"hljs-string"},'"6"'),t(),s("span",{class:"hljs-attr"},":total"),t("="),s("span",{class:"hljs-string"},'"120"'),t(),s("span",{class:"hljs-attr"},":simple"),t("="),s("span",{class:"hljs-string"},'"false"'),t(),s("span",{class:"hljs-attr"},"disabled"),t(" />")]),t(`
`),s("span",{class:"hljs-tag"},[t("</"),s("span",{class:"hljs-name"},"template"),t(">")]),t(`
`)])],-1),L=r('<h2>API</h2><div class="card"><h3>Props</h3><table><thead><tr><th>Prop</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>v-model: current</code></td><td>Current page number</td><td><em>string | number</em></td><td><code>1</code></td></tr><tr><td><code>v-model: size</code></td><td>Number of data items per page</td><td><em>string | number</em></td><td><code>10</code></td></tr><tr><td><code>total</code></td><td>Total number of data items</td><td><em>string | number</em></td><td><code>0</code></td></tr><tr><td><code>simple</code></td><td>Whether to use simple mode</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>disabled</code></td><td>Disable pagination</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>show-size-changer</code></td><td>Whether to show <code>size</code> select</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>show-quick-jumper</code></td><td>Whether you can jump to pages directly</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>max-pager-count</code></td><td>Number of buttons displayed between ellipses</td><td><em>number</em></td><td><code>3</code></td></tr><tr><td><code>size-option</code></td><td>Specify the sizeChanger options</td><td><em>number[]</em></td><td><code>[10, 20, 50, 100]</code></td></tr><tr><td><code>show-total</code></td><td>Show page item\u2019s title</td><td><em>function(total, range)</em></td><td><code>-</code></td></tr></tbody></table></div><div class="card"><h3>Events</h3><table><thead><tr><th>Event</th><th>Description</th><th>arguments</th></tr></thead><tbody><tr><td><code>change</code></td><td>Callback after <code>current</code> or <code>size</code> changes</td><td><code>current: number</code> <br><code>size: number</code></td></tr></tbody></table></div><div class="card"><h3>Slots</h3><table><thead><tr><th>Name</th><th>Description</th><th>SlotProps</th></tr></thead><tbody><tr><td><code>prev</code></td><td>Content of previous button</td><td><code>-</code></td></tr><tr><td><code>next</code></td><td>Content of next button</td><td><code>-</code></td></tr></tbody></table></div><div class="card"><h3>Style Variables</h3><p>Here are the CSS variables used by the component, Styles can be customized using <a href="#/en-US/style-provider">StyleProvider</a></p><table><thead><tr><th>Variable</th><th>Default</th></tr></thead><tbody><tr><td><code>--pagination-font-size</code></td><td><code>var(--font-size-md)</code></td></tr><tr><td><code>--pagination-active-color</code></td><td><code>#fff</code></td></tr><tr><td><code>--pagination-active-bg-color</code></td><td><code>var(--color-primary)</code></td></tr><tr><td><code>--pagination-hover-bg-color</code></td><td><code>#edf5ff</code></td></tr><tr><td><code>--pagination-total-margin</code></td><td><code>0 12px</code></td></tr><tr><td><code>--pagination-total-line-height</code></td><td><code>24px</code></td></tr><tr><td><code>--pagination-item-width</code></td><td><code>32px</code></td></tr><tr><td><code>--pagination-item-height</code></td><td><code>32px</code></td></tr><tr><td><code>--pagination-item-margin</code></td><td><code>0 6px</code></td></tr><tr><td><code>--pagination-item-border-radius</code></td><td><code>4px</code></td></tr><tr><td><code>--pagination-list-bg-color</code></td><td><code>#fff</code></td></tr><tr><td><code>--pagination-list-active-bg-color</code></td><td><code>#edf5ff</code></td></tr><tr><td><code>--pagination-list-active-color</code></td><td><code>var(--color-primary)</code></td></tr><tr><td><code>--pagination-input-width</code></td><td><code>32px</code></td></tr><tr><td><code>--pagination-disabled-color</code></td><td><code>var(--color-text-disabled)</code></td></tr><tr><td><code>--pagination-bg-disabled-color</code></td><td><code>var(--color-disabled)</code></td></tr><tr><td><code>--pagination-size-line-height</code></td><td><code>24px</code></td></tr></tbody></table></div>',5);function Q(R,X,Z,ss,ts,as){const a=c("var-site-code-example");return d(),o("div",p,[i,j,g,m,s("div",u,[_,e(a,null,{default:l(()=>[b]),_:1})]),s("div",v,[f,y,e(a,null,{default:l(()=>[w]),_:1})]),s("div",z,[x,S,e(a,null,{default:l(()=>[T]),_:1})]),s("div",C,[$,e(a,null,{default:l(()=>[k]),_:1})]),D,U,s("div",N,[P,e(a,null,{default:l(()=>[q]),_:1})]),s("div",B,[V,E,e(a,null,{default:l(()=>[I]),_:1})]),s("div",M,[W,H,e(a,null,{default:l(()=>[A]),_:1})]),s("div",O,[Y,e(a,null,{default:l(()=>[F]),_:1})]),s("div",G,[J,e(a,null,{default:l(()=>[K]),_:1})]),L])}const ls=n(h,[["render",Q]]);export{ls as default};
