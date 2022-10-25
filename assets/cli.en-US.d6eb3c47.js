import{_ as s,p as c,f as a,h as r,M as e,q as n,S as l,at as d,P as t}from"./vue-router.esm-bundler.786782d7.js";const i={components:{}},h={class:"varlet-site-doc"},u=d('<h1>Components Library Tools(@varlet/cli)</h1><div class="card"><h3>Intro</h3><p>The out-of-the-box <code>Vue3 component library</code> rapid prototyping tool provides a series of commands and tools to solve the problem of component library development</p></div><div class="card"><h3>Features</h3><ul><li>\u{1F4E6} \xA0Out-of-the-box component library development environment</li><li>\u{1F4E6} \xA0An out-of-the-box component library compilation tool that supports exporting <code>esm</code>, <code>cjs</code>, <code>umd</code> module codes</li><li>\u{1F6E0}\uFE0F \xA0Configuration file-based component library documentation site, support Baidu statistics and theme customization</li><li>\u{1F6E0}\uFE0F \xA0Supports both <code>sfc</code> and <code>tsx</code> styles for writing component libraries</li><li>\u{1F4E6} \xA0Out-of-the-box code inspection tool</li><li>\u{1F4E6} \xA0Out-of-the-box unit testing tools</li><li>\u{1F4E6} \xA0Out-of-the-box code publishing tool, publishes to both <code>npm</code> and <code>github</code>, and automatically generates changelogs</li><li>\u{1F4AA} \xA0Support for <code>Typescript</code></li><li>\u{1F4AA} \xA0Support <code>Dark Mode</code></li><li>\u{1F30D} \xA0Support <code>Internationalization</code></li><li>\u{1F680} \xA0Based on <code>pnpm</code></li></ul></div>',3),p={class:"card"},m=e("h3",null,"Quickstart",-1),_=e("p",null,[e("code",null,"@varlet/cli"),t(" has built-in "),e("code",null,"sfc"),t(" and "),e("code",null,"tsx"),t(" style component library project templates, which can be generated directly by the "),e("code",null,"gen"),t(" command. It is convenient for you to directly enter the component library development.")],-1),g=e("pre",{class:"hljs"},[e("code",null,`pnpm add @varlet/cli -g
varlet-cli gen
`)],-1),f=d('<h2>Advanced customization</h2><div class="card"><h3>Configuration file</h3><p>The <code>varlet.config.js</code> in the project root directory is used to manage the specific details of the entire component library project. The default configuration can be viewed <a href="https://github.com/varletjs/varlet/blob/dev/packages/varlet-cli/varlet.default.config.js">varlet.default.config.js</a>\u3002 Also refer to <code>@varlet/ui</code> <a href="https://github.com/varletjs/varlet/blob/dev/packages/varlet-ui/varlet.config.js">varlet.config.js</a></p><table><thead><tr><th>Parameter</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>name</code></td><td>The full name of the component library, which will be used as the package name</td><td><em>string</em></td><td><code>Varlet</code></td></tr><tr><td><code>namespace</code></td><td>Component library namespace, which will be used as a component prefix</td><td><em>string</em></td><td><code>var</code></td></tr><tr><td><code>host</code></td><td>Development server host</td><td><em>number</em></td><td><code>localhost</code></td></tr><tr><td><code>port</code></td><td>Development server port</td><td><em>number</em></td><td><code>8080</code></td></tr><tr><td><code>title</code></td><td>The title of the component library in the documentation</td><td><em>string</em></td><td><code>VARLET</code></td></tr><tr><td><code>logo</code></td><td>The logo of the component library in the documentation</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>defaultLanguage</code></td><td>Documentation default language</td><td><em>string</em></td><td><code>zh-CN</code></td></tr><tr><td><code>useMobile</code></td><td>Whether to show the preview of the right mobile phone</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>lightTheme</code></td><td>Light Mode Documentation Theme</td><td><em>Record&lt;string, any&gt;</em></td><td><code>-</code></td></tr><tr><td><code>darkTheme</code></td><td>Dark Mode Documentation Theme</td><td><em>Record&lt;string, any&gt;</em></td><td><code>-</code></td></tr><tr><td><code>highlight</code></td><td>Documentation snippet style related</td><td><em>{ style: string }</em></td><td><code>-</code></td></tr><tr><td><code>analysis</code></td><td>Document statistics related</td><td><em>{ baidu: string }</em></td><td><code>-</code></td></tr><tr><td><code>pc</code></td><td>PC-side document structure configuration</td><td><em>Record&lt;string, any&gt;</em></td><td><code>-</code></td></tr><tr><td><code>mobile</code></td><td>Mobile side document structure configuration</td><td><em>Record&lt;string, any&gt;</em></td><td><code>-</code></td></tr><tr><td><code>moduleCompatible</code></td><td>Module Compatible Configurations</td><td><em>Record&lt;string, string&gt;</em></td><td><code>-</code></td></tr></tbody></table></div>',2),y={class:"card"},v=e("h3",null,"Custom pages",-1),b=e("p",null,[t("If you want to insert other pages into the component library, you can create a "),e("code",null,"pages"),t(" folder in the project root directory to write a vue component to generate other pages. The directory structure is as follows:")],-1),j=e("pre",{class:"hljs"},[e("code",null,`|-- varlet-ui
  |-- src
  |-- docs
  |-- pages
    |-- sponsor
      |-- index.vue
    |-- contributor
      |-- locale
        |-- en-US.ts
      |-- index.vue
    |-- changelog
      |-- locale
        |-- zh-CN.ts
        |-- en-US.ts
      |-- index.vue
      
`)],-1),w=e("p",null,"The resulting route is as follows:",-1),x=e("pre",{class:"hljs"},[e("code",null,`/zh-CN/sponsor
/en-US/contributor
/zh-CN/changelog
/en-US/changelog
`)],-1),C={class:"card"},T=e("h3",null,"Command related",-1),k=e("h4",null,"Start the development server",-1),S=e("pre",{class:"hljs"},[e("code",null,`varlet-cli dev
`)],-1),D=e("h4",null,"Build a documentation site",-1),N=e("pre",{class:"hljs"},[e("code",null,`varlet-cli build
`)],-1),z=e("h4",null,"Preview documentation site",-1),M=e("pre",{class:"hljs"},[e("code",null,`varlet-cli preview
`)],-1),R=e("h4",null,"Compile component library",-1),V=e("pre",{class:"hljs"},[e("code",null,`varlet-cli compile
`)],-1),B=e("h4",null,"Execute all unit tests",-1),G=e("pre",{class:"hljs"},[e("code",null,`varlet-cli test
`)],-1),I=e("h4",null,"Execute unit tests in watch mode",-1),L=e("pre",{class:"hljs"},[e("code",null,`varlet-cli test -w
or
varlet-cli test -wa
`)],-1),O=e("h4",null,"Lint the code",-1),E=e("pre",{class:"hljs"},[e("code",null,`varlet-cli lint
`)],-1),U=e("h4",null,"Lint git commit message",-1),A=e("pre",{class:"hljs"},[e("code",null,`varlet-cli commit-lint
`)],-1),P=e("h4",null,"Generate changelog",-1),$=e("pre",{class:"hljs"},[e("code",null,`varlet-cli changelog
`)],-1),F=e("h4",null,"Release component library",-1),q=e("pre",{class:"hljs"},[e("code",null,`varlet-cli release
`)],-1),Q=e("h4",null,"Generate a project template",-1),W=e("pre",{class:"hljs"},[e("code",null,[t(`varlet-cli gen
`),e("span",{class:"hljs-meta"},`
#`),e("span",{class:"bash"}," Options"),t(`
-n
--name
  project name
-s
--sfc
  Generate sfc-style project templates
-t
--tsx
  Generate tsx-style project templates
-l
--locale
  Need to support internationalization
`)])],-1),H=e("h4",null,"Create a component template file",-1),J=e("pre",{class:"hljs"},[e("code",null,[t(`varlet-cli create
`),e("span",{class:"hljs-meta"},`
#`),e("span",{class:"bash"}," Options"),t(`
-n
--name
  project name
-s
--sfc
  Generate sfc-style component
-t
--tsx
  Generate tsx-style component
-l
--locale
  Need to support internationalization
`)])],-1),K=e("div",{class:"card"},[e("h3",null,"Note before publish"),e("ul",null,[e("li",null,[t("1."),e("code",null,"npm"),t(" repository registry must set to "),e("code",null,"npm"),t(" official mirror")]),e("li",null,[t("2.Execute "),e("code",null,"npm login"),t(" to log in")])])],-1),X={class:"card"},Y=e("h3",null,"Module Compatible",-1),Z=e("p",null,[t("Some external dependencies may need to be compatible with module syntax to achieve the purpose of compiling correctly to "),e("code",null,"commonjs"),t(" and "),e("code",null,"esmodule"),t(". For example, the wording of "),e("code",null,"esmodule"),t(" of "),e("code",null,"dayjs"),t(" is")],-1),ee=e("pre",{class:"hljs"},[e("code",null,[e("span",{class:"hljs-keyword"},"import"),t(" dayjs "),e("span",{class:"hljs-keyword"},"from"),t(),e("span",{class:"hljs-string"},"'dayjs/esm'"),t(`
`)])],-1),te=e("p",null,[t("In order to build "),e("code",null,"commonjs"),t(", the writing method is")],-1),oe=e("pre",{class:"hljs"},[e("code",null,[e("span",{class:"hljs-keyword"},"import"),t(" * "),e("span",{class:"hljs-keyword"},"as"),t(" dayjs "),e("span",{class:"hljs-keyword"},"from"),t(),e("span",{class:"hljs-string"},"'dayjs'"),t(`
`)])],-1),ne=e("p",null,[t("In the project, we embrace the first way of writing the "),e("code",null,"esmodule"),t(" module, and make the following configuration for adaptation")],-1),le=e("pre",{class:"hljs"},[e("code",null,[e("span",{class:"hljs-comment"},"// varlet.config.js"),t(`
`),e("span",{class:"hljs-built_in"},"module"),t(`.exports = {
  `),e("span",{class:"hljs-attr"},"moduleCompatible"),t(`: {
    `),e("span",{class:"hljs-string"},`"import dayjs from 'dayjs/esm'\\n"`),t(": "),e("span",{class:"hljs-string"},`"import * as dayjs from 'dayjs'\\n"`),t(`
  }
}
`)])],-1);function de(se,ce,ae,re,ie,he){const o=c("var-site-code-example");return a(),r("div",h,[u,e("div",p,[m,_,n(o,{"playground-ignore":""},{default:l(()=>[g]),_:1})]),f,e("div",y,[v,b,n(o,{"playground-ignore":""},{default:l(()=>[j]),_:1}),w,n(o,{"playground-ignore":""},{default:l(()=>[x]),_:1})]),e("div",C,[T,k,n(o,{"playground-ignore":""},{default:l(()=>[S]),_:1}),D,n(o,{"playground-ignore":""},{default:l(()=>[N]),_:1}),z,n(o,{"playground-ignore":""},{default:l(()=>[M]),_:1}),R,n(o,{"playground-ignore":""},{default:l(()=>[V]),_:1}),B,n(o,{"playground-ignore":""},{default:l(()=>[G]),_:1}),I,n(o,{"playground-ignore":""},{default:l(()=>[L]),_:1}),O,n(o,{"playground-ignore":""},{default:l(()=>[E]),_:1}),U,n(o,{"playground-ignore":""},{default:l(()=>[A]),_:1}),P,n(o,{"playground-ignore":""},{default:l(()=>[$]),_:1}),F,n(o,{"playground-ignore":""},{default:l(()=>[q]),_:1}),Q,n(o,{"playground-ignore":""},{default:l(()=>[W]),_:1}),H,n(o,{"playground-ignore":""},{default:l(()=>[J]),_:1})]),K,e("div",X,[Y,Z,n(o,{"playground-ignore":""},{default:l(()=>[ee]),_:1}),te,n(o,{"playground-ignore":""},{default:l(()=>[oe]),_:1}),ne,n(o,{"playground-ignore":""},{default:l(()=>[le]),_:1})])])}const pe=s(i,[["render",de]]);export{pe as default};
