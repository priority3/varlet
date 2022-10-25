import{_ as e,p as a,f as c,h as o,M as s,q as l,S as n,at as r,P as t}from"./vue-router.esm-bundler.786782d7.js";const h={components:{}},p={class:"varlet-site-doc"},i=s("h1",null,"\u56DE\u5230\u9876\u90E8",-1),m=s("div",{class:"card"},[s("h3",null,"\u4ECB\u7ECD"),s("p",null,"\u8FD4\u56DE\u9875\u9762\u9876\u90E8\u7684\u64CD\u4F5C\u6309\u94AE\u3002")],-1),b={class:"card"},j=s("h3",null,"\u57FA\u672C\u4F7F\u7528",-1),_=s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-tag"},[t("<"),s("span",{class:"hljs-name"},"script"),t(),s("span",{class:"hljs-attr"},"setup"),t(">")]),s("span",{class:"javascript"},[t(`
`),s("span",{class:"hljs-keyword"},"const"),t(" lists = [...Array("),s("span",{class:"hljs-number"},"100"),t(`).keys()]
`)]),s("span",{class:"hljs-tag"},[t("</"),s("span",{class:"hljs-name"},"script"),t(">")]),t(`

`),s("span",{class:"hljs-tag"},[t("<"),s("span",{class:"hljs-name"},"template"),t(">")]),t(`
  `),s("span",{class:"hljs-tag"},[t("<"),s("span",{class:"hljs-name"},"div"),t(">")]),t(`
    `),s("span",{class:"hljs-tag"},[t("<"),s("span",{class:"hljs-name"},"var-cell"),t(),s("span",{class:"hljs-attr"},"v-for"),t("="),s("span",{class:"hljs-string"},'"list in lists"'),t(),s("span",{class:"hljs-attr"},":key"),t("="),s("span",{class:"hljs-string"},'"list"'),t(">")]),t("Scroll to bottom {{ list }}"),s("span",{class:"hljs-tag"},[t("</"),s("span",{class:"hljs-name"},"var-cell"),t(">")]),t(`
    `),s("span",{class:"hljs-tag"},[t("<"),s("span",{class:"hljs-name"},"var-back-top"),t(),s("span",{class:"hljs-attr"},":duration"),t("="),s("span",{class:"hljs-string"},'"300"'),t(" />")]),t(`
  `),s("span",{class:"hljs-tag"},[t("</"),s("span",{class:"hljs-name"},"div"),t(">")]),t(`
`),s("span",{class:"hljs-tag"},[t("</"),s("span",{class:"hljs-name"},"template"),t(">")]),t(`
`)])],-1),v=r('<h2>API</h2><div class="card"><h3>\u5C5E\u6027</h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td><code>target</code></td><td>\u89E6\u53D1\u6EDA\u52A8\u7684\u5BF9\u8C61\uFF0C\u5982\u679C\u4E3A undefined \u4F1A\u76D1\u542C\u8DDD\u79BB\u6700\u8FD1\u7684\u4E00\u4E2A\u53EF\u6EDA\u52A8\u7684\u7956\u5148\u8282\u70B9</td><td><em>string | HTMLElement</em></td><td><code>-</code></td></tr><tr><td><code>visibility-height</code></td><td>\u6EDA\u52A8\u9AD8\u5EA6\u8FBE\u5230\u6B64\u53C2\u6570\u503C\u624D\u51FA\u73B0</td><td><em>string | number</em></td><td><code>200</code></td></tr><tr><td><code>bottom</code></td><td><code>BackTop</code> \u8DDD\u79BB\u9875\u9762\u5E95\u90E8\u7684\u8DDD\u79BB</td><td><em>string | number</em></td><td><code>40</code></td></tr><tr><td><code>right</code></td><td><code>BackTop</code> \u8DDD\u79BB\u9875\u9762\u53F3\u4FA7\u7684\u8DDD\u79BB</td><td><em>string | number</em></td><td><code>40</code></td></tr><tr><td><code>duration</code></td><td>\u56DE\u5230\u9876\u90E8\u6240\u9700\u65F6\u95F4\uFF08ms\uFF09</td><td><em>number</em></td><td><code>300</code></td></tr></tbody></table></div><div class="card"><h3>\u4E8B\u4EF6</h3><table><thead><tr><th>\u4E8B\u4EF6\u540D</th><th>\u8BF4\u660E</th><th>\u56DE\u8C03\u53C2\u6570</th></tr></thead><tbody><tr><td><code>click</code></td><td>\u70B9\u51FB\u6309\u94AE\u89E6\u53D1\u7684\u4E8B\u4EF6</td><td><code>event: Event</code></td></tr></tbody></table></div><div class="card"><h3>\u63D2\u69FD</h3><table><thead><tr><th>\u540D\u79F0</th><th>\u8BF4\u660E</th><th>\u53C2\u6570</th></tr></thead><tbody><tr><td><code>default</code></td><td>\u81EA\u5B9A\u4E49\u6309\u94AE\u5185\u5BB9</td><td><code>-</code></td></tr></tbody></table></div><div class="card"><h3>\u6837\u5F0F\u53D8\u91CF</h3><p>\u4EE5\u4E0B\u4E3A\u7EC4\u4EF6\u4F7F\u7528\u7684 css \u53D8\u91CF\uFF0C\u53EF\u4EE5\u4F7F\u7528 <a href="#/zh-CN/style-provider">StyleProvider \u7EC4\u4EF6</a> \u8FDB\u884C\u6837\u5F0F\u5B9A\u5236</p><table><thead><tr><th>\u53D8\u91CF\u540D</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td><code>--back-top-right</code></td><td><code>40px</code></td></tr><tr><td><code>--back-top-bottom</code></td><td><code>40px</code></td></tr><tr><td><code>--back-top-button-size</code></td><td><code>40px</code></td></tr></tbody></table></div>',5);function u(g,y,f,k,x,N){const d=a("var-site-code-example");return c(),o("div",p,[i,m,s("div",b,[j,l(d,null,{default:n(()=>[_]),_:1})]),v])}const C=e(h,[["render",u]]);export{C as default};
