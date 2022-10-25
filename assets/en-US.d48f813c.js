import{_ as d,p as n,f as c,h as o,M as t,q as e,S as l,P as s,at as r}from"./vue-router.esm-bundler.786782d7.js";const p={components:{}},h={class:"varlet-site-doc"},i=t("h1",null,"Input",-1),j={class:"card"},u=t("h3",null,"Basic Usage",-1),m=t("p",null,"The behavior of the input box is consistent with the basic content, and the user can always get a string that conforms to the `type rule when inputting",-1),g=t("pre",{class:"hljs"},[t("code",null,[t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"script"),s(),t("span",{class:"hljs-attr"},"setup"),s(">")]),t("span",{class:"javascript"},[s(`
`),t("span",{class:"hljs-keyword"},"import"),s(" { ref } "),t("span",{class:"hljs-keyword"},"from"),s(),t("span",{class:"hljs-string"},"'vue'"),s(`

`),t("span",{class:"hljs-keyword"},"const"),s(" value = ref("),t("span",{class:"hljs-string"},"''"),s(`)
`)]),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-input"),s(),t("span",{class:"hljs-attr"},"placeholder"),s("="),t("span",{class:"hljs-string"},'"Please enter text"'),s(),t("span",{class:"hljs-attr"},"v-model"),s("="),t("span",{class:"hljs-string"},'"value"'),s(" />")]),s(`
`),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),v={class:"card"},_=t("h3",null,"Plain Mode",-1),f=t("p",null,"If you only need the basic functionality of the component, you can remove some styles through attributes.",-1),y=t("pre",{class:"hljs"},[t("code",null,[t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"script"),s(),t("span",{class:"hljs-attr"},"setup"),s(">")]),t("span",{class:"javascript"},[s(`
`),t("span",{class:"hljs-keyword"},"import"),s(" { ref } "),t("span",{class:"hljs-keyword"},"from"),s(),t("span",{class:"hljs-string"},"'vue'"),s(`

`),t("span",{class:"hljs-keyword"},"const"),s(" value = ref("),t("span",{class:"hljs-string"},"''"),s(`)
`)]),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-input"),s(` 
    `),t("span",{class:"hljs-attr"},":hint"),s("="),t("span",{class:"hljs-string"},'"false"'),s(` 
    `),t("span",{class:"hljs-attr"},":line"),s("="),t("span",{class:"hljs-string"},'"false"'),s(` 
    `),t("span",{class:"hljs-attr"},"placeholder"),s("="),t("span",{class:"hljs-string"},'"Please enter text"'),s(`
    `),t("span",{class:"hljs-attr"},"v-model"),s("="),t("span",{class:"hljs-string"},'"value"'),s(`
  />`)]),s(`
`),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),b={class:"card"},x=t("h3",null,"Textarea",-1),w=t("pre",{class:"hljs"},[t("code",null,[t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"script"),s(),t("span",{class:"hljs-attr"},"setup"),s(">")]),t("span",{class:"javascript"},[s(`
`),t("span",{class:"hljs-keyword"},"import"),s(" { ref } "),t("span",{class:"hljs-keyword"},"from"),s(),t("span",{class:"hljs-string"},"'vue'"),s(`

`),t("span",{class:"hljs-keyword"},"const"),s(" value = ref("),t("span",{class:"hljs-string"},"''"),s(`)
`)]),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-input"),s(),t("span",{class:"hljs-attr"},"placeholder"),s("="),t("span",{class:"hljs-string"},'"Please enter text"'),s(),t("span",{class:"hljs-attr"},"textarea"),s(),t("span",{class:"hljs-attr"},"v-model"),s("="),t("span",{class:"hljs-string"},'"value"'),s(" />")]),s(`
`),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),k={class:"card"},T=t("h3",null,"Maxlength",-1),P=t("pre",{class:"hljs"},[t("code",null,[t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"script"),s(),t("span",{class:"hljs-attr"},"setup"),s(">")]),t("span",{class:"javascript"},[s(`
`),t("span",{class:"hljs-keyword"},"import"),s(" { ref } "),t("span",{class:"hljs-keyword"},"from"),s(),t("span",{class:"hljs-string"},"'vue'"),s(`

`),t("span",{class:"hljs-keyword"},"const"),s(" value = ref("),t("span",{class:"hljs-string"},"''"),s(`)
`)]),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-input"),s(),t("span",{class:"hljs-attr"},"placeholder"),s("="),t("span",{class:"hljs-string"},'"Please enter text"'),s(),t("span",{class:"hljs-attr"},":maxlength"),s("="),t("span",{class:"hljs-string"},'"10"'),s(),t("span",{class:"hljs-attr"},"v-model"),s("="),t("span",{class:"hljs-string"},'"value"'),s(" />")]),s(`
`),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),C={class:"card"},I=t("h3",null,"Disabled",-1),S=t("pre",{class:"hljs"},[t("code",null,[t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"script"),s(),t("span",{class:"hljs-attr"},"setup"),s(">")]),t("span",{class:"javascript"},[s(`
`),t("span",{class:"hljs-keyword"},"import"),s(" { ref } "),t("span",{class:"hljs-keyword"},"from"),s(),t("span",{class:"hljs-string"},"'vue'"),s(`

`),t("span",{class:"hljs-keyword"},"const"),s(" value = ref("),t("span",{class:"hljs-string"},"''"),s(`)
`)]),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-input"),s(),t("span",{class:"hljs-attr"},"placeholder"),s("="),t("span",{class:"hljs-string"},'"Please enter text"'),s(),t("span",{class:"hljs-attr"},"disabled"),s(),t("span",{class:"hljs-attr"},"v-model"),s("="),t("span",{class:"hljs-string"},'"value"'),s(" />")]),s(`
`),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),V={class:"card"},D=t("h3",null,"Readonly",-1),E=t("pre",{class:"hljs"},[t("code",null,[t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"script"),s(),t("span",{class:"hljs-attr"},"setup"),s(">")]),t("span",{class:"javascript"},[s(`
`),t("span",{class:"hljs-keyword"},"import"),s(" { ref } "),t("span",{class:"hljs-keyword"},"from"),s(),t("span",{class:"hljs-string"},"'vue'"),s(`

`),t("span",{class:"hljs-keyword"},"const"),s(" value = ref("),t("span",{class:"hljs-string"},"''"),s(`)
`)]),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-input"),s(),t("span",{class:"hljs-attr"},"placeholder"),s("="),t("span",{class:"hljs-string"},'"Please enter text"'),s(),t("span",{class:"hljs-attr"},"readonly"),s(),t("span",{class:"hljs-attr"},"v-model"),s("="),t("span",{class:"hljs-string"},'"value"'),s(" />")]),s(`
`),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),z={class:"card"},W=t("h3",null,"Clearable",-1),B=t("pre",{class:"hljs"},[t("code",null,[t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"script"),s(),t("span",{class:"hljs-attr"},"setup"),s(">")]),t("span",{class:"javascript"},[s(`
`),t("span",{class:"hljs-keyword"},"import"),s(" { ref } "),t("span",{class:"hljs-keyword"},"from"),s(),t("span",{class:"hljs-string"},"'vue'"),s(`

`),t("span",{class:"hljs-keyword"},"const"),s(" value = ref("),t("span",{class:"hljs-string"},"''"),s(`)
`)]),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-input"),s(),t("span",{class:"hljs-attr"},"placeholder"),s("="),t("span",{class:"hljs-string"},'"Please enter text"'),s(),t("span",{class:"hljs-attr"},"clearable"),s(),t("span",{class:"hljs-attr"},"v-model"),s("="),t("span",{class:"hljs-string"},'"value"'),s(" />")]),s(`
`),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),M={class:"card"},N=t("h3",null,"Display Icon",-1),A=t("pre",{class:"hljs"},[t("code",null,[t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"script"),s(),t("span",{class:"hljs-attr"},"setup"),s(">")]),t("span",{class:"javascript"},[s(`
`),t("span",{class:"hljs-keyword"},"import"),s(" { ref } "),t("span",{class:"hljs-keyword"},"from"),s(),t("span",{class:"hljs-string"},"'vue'"),s(`

`),t("span",{class:"hljs-keyword"},"const"),s(" value = ref("),t("span",{class:"hljs-string"},"''"),s(`)
`)]),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-input"),s(),t("span",{class:"hljs-attr"},"placeholder"),s("="),t("span",{class:"hljs-string"},'"Please enter text"'),s(),t("span",{class:"hljs-attr"},"v-model"),s("="),t("span",{class:"hljs-string"},'"value"'),s(">")]),s(`
    `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"template"),s(" #"),t("span",{class:"hljs-attr"},"prepend-icon"),s(">")]),s(`
      `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-icon"),s(),t("span",{class:"hljs-attr"},"name"),s("="),t("span",{class:"hljs-string"},'"plus"'),s("/>")]),s(`
    `),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
    `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"template"),s(" #"),t("span",{class:"hljs-attr"},"append-icon"),s(">")]),s(`
      `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-icon"),s(),t("span",{class:"hljs-attr"},"name"),s("="),t("span",{class:"hljs-string"},'"minus"'),s("/>")]),s(`
    `),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"var-input"),s(">")]),s(`
`),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),$={class:"card"},R=t("h3",null,"Validate",-1),U=t("p",null,[s("The values are validated by passing in an array of validators\uFF0CIf the validator returns "),t("code",null,"true"),s(", the validation passes. Other values are converted to text as a user prompt.")],-1),F=t("pre",{class:"hljs"},[t("code",null,[t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"script"),s(),t("span",{class:"hljs-attr"},"setup"),s(">")]),t("span",{class:"javascript"},[s(`
`),t("span",{class:"hljs-keyword"},"import"),s(" { ref } "),t("span",{class:"hljs-keyword"},"from"),s(),t("span",{class:"hljs-string"},"'vue'"),s(`

`),t("span",{class:"hljs-keyword"},"const"),s(" value = ref("),t("span",{class:"hljs-string"},"''"),s(`)
`)]),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-input"),s(`
    `),t("span",{class:"hljs-attr"},"placeholder"),s("="),t("span",{class:"hljs-string"},'"Please enter text"'),s(`
    `),t("span",{class:"hljs-attr"},":rules"),s("="),t("span",{class:"hljs-string"},`"[v => v.length > 6 || 'Text length must be greater than 6']"`),s(`
    `),t("span",{class:"hljs-attr"},"v-model"),s("="),t("span",{class:"hljs-string"},'"value"'),s(`
  />`)]),s(`
`),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),q=r('<h2>API</h2><div class="card"><h3>Props</h3><table><thead><tr><th>Prop</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>v-model</code></td><td>The value of the binding</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>placeholder</code></td><td>placeholder</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>type</code></td><td>Input type, The optional value is <code>text</code> <code>password</code> <code>number</code> <code>tel</code></td><td><em>string</em></td><td><code>text</code></td></tr><tr><td><code>maxlength</code></td><td>Maxlength</td><td><em>string | number</em></td><td><code>-</code></td></tr><tr><td><code>textarea</code></td><td>Is it a textarea</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>rows</code></td><td>Number of lines to display in the textarea</td><td><em>string | number</em></td><td><code>8</code></td></tr><tr><td><code>line</code></td><td>Whether to display a dividing line</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>hint</code></td><td>Whether to use placeholder as hint</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>text-color</code></td><td>Text color</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>focus-color</code></td><td>The primary color in focus</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>blur-color</code></td><td>The primary color in blur</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>readonly</code></td><td>Whether the readonly</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>disabled</code></td><td>Whether the disabled</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>clearable</code></td><td>Whether the clearable</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>resize</code></td><td>Whether textarea can be dragged to resize</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>autofocus</code></td><td>Whether the autofocus</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>validate-trigger</code></td><td>Timing to trigger validation, The optional value is <code>onFocus</code> <code>onBlur</code> <code>onChange</code> <code>onClick</code> <code>onClear</code> <code>onInput</code></td><td><em>ValidateTriggers[]</em></td><td><code>[&#39;onInput&#39;, &#39;onClear&#39;]</code></td></tr><tr><td><code>rules</code></td><td>The validation rules, Returns <code>true</code> to indicate that the validation passed,The remaining values are converted to text as user prompts</td><td><em>Array&lt;(v: string) =&gt; any&gt;</em></td><td><code>-</code></td></tr></tbody></table></div><div class="card"><h3>Methods</h3><table><thead><tr><th>Method</th><th>Description</th><th>Arguments</th><th>Return</th></tr></thead><tbody><tr><td><code>focus</code></td><td>Focus</td><td><code>-</code></td><td><code>-</code></td></tr><tr><td><code>blur</code></td><td>Blur</td><td><code>-</code></td><td><code>-</code></td></tr><tr><td><code>validate</code></td><td>Trigger validate</td><td><code>-</code></td><td><code>valid: Promise&lt;boolean&gt;</code></td></tr><tr><td><code>resetValidation</code></td><td>Clearing validate messages</td><td><code>-</code></td><td><code>-</code></td></tr><tr><td><code>reset</code></td><td>Clear the value of the binding and validate messages</td><td><code>-</code></td><td><code>-</code></td></tr></tbody></table></div><div class="card"><h3>Events</h3><table><thead><tr><th>Event</th><th>Description</th><th>Arguments</th></tr></thead><tbody><tr><td><code>focus</code></td><td>Trigger while focusing</td><td><code>event: Event</code></td></tr><tr><td><code>blur</code></td><td>Triggered when out of focus</td><td><code>event: Event</code></td></tr><tr><td><code>click</code></td><td>Triggered on Click</td><td><code>event: Event</code></td></tr><tr><td><code>clear</code></td><td>Triggered on Clearance</td><td><code>value: string</code></td></tr><tr><td><code>input</code></td><td>Trigger on input</td><td><code>value: string</code>, <code>event: Event</code></td></tr><tr><td><code>change</code></td><td>Trigger on change</td><td><code>value: string</code>, <code>event: Event</code></td></tr></tbody></table></div><div class="card"><h3>Slots</h3><table><thead><tr><th>Name</th><th>Description</th><th>SlotProps</th></tr></thead><tbody><tr><td><code>prepend-icon</code></td><td>Prepend Icon</td><td><code>-</code></td></tr><tr><td><code>append-icon</code></td><td>Append Icon</td><td><code>-</code></td></tr></tbody></table></div><div class="card"><h3>Style Variables</h3><p>Here are the CSS variables used by the component, Styles can be customized using <a href="#/en-US/style-provider">StyleProvider</a></p><table><thead><tr><th>Variable</th><th>Default</th></tr></thead><tbody><tr><td><code>--input-input-text-color</code></td><td><code>#555</code></td></tr><tr><td><code>--input-error-color</code></td><td><code>var(--color-danger)</code></td></tr><tr><td><code>--input-blur-color</code></td><td><code>#888</code></td></tr><tr><td><code>--input-focus-color</code></td><td><code>var(--color-primary)</code></td></tr><tr><td><code>--input-placeholder-size</code></td><td><code>16px</code></td></tr><tr><td><code>--input-textarea-height</code></td><td><code>auto</code></td></tr><tr><td><code>--input-textarea-padding-top</code></td><td><code>8px</code></td></tr><tr><td><code>--input-icon-padding</code></td><td><code>16px 0 0</code></td></tr><tr><td><code>--input-icon-size</code></td><td><code>20px</code></td></tr><tr><td><code>--input-line-size</code></td><td><code>1px</code></td></tr><tr><td><code>--input-line-spread-size</code></td><td><code>2px</code></td></tr><tr><td><code>--input-disabled-color</code></td><td><code>var(--color-text-disabled)</code></td></tr></tbody></table></div>',6);function H(O,G,J,K,L,Q){const a=n("var-site-code-example");return c(),o("div",h,[i,t("div",j,[u,m,e(a,null,{default:l(()=>[g]),_:1})]),t("div",v,[_,f,e(a,null,{default:l(()=>[y]),_:1})]),t("div",b,[x,e(a,null,{default:l(()=>[w]),_:1})]),t("div",k,[T,e(a,null,{default:l(()=>[P]),_:1})]),t("div",C,[I,e(a,null,{default:l(()=>[S]),_:1})]),t("div",V,[D,e(a,null,{default:l(()=>[E]),_:1})]),t("div",z,[W,e(a,null,{default:l(()=>[B]),_:1})]),t("div",M,[N,e(a,null,{default:l(()=>[A]),_:1})]),t("div",$,[R,U,e(a,null,{default:l(()=>[F]),_:1})]),q])}const Y=d(p,[["render",H]]);export{Y as default};
