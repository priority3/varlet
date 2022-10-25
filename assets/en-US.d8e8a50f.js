import{_ as t,p as n,f as e,h as c,M as a,q as r,S as h,at as p,P as s}from"./vue-router.esm-bundler.786782d7.js";const o={components:{}},d={class:"varlet-site-doc"},j=a("h1",null,"Form",-1),i=a("div",{class:"card"},[a("h3",null,"Intro"),a("p",null,"Provides the ability to control all form components.")],-1),m={class:"card"},g=a("h3",null,"Form Example",-1),v=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"javascript"},[s(`
`),a("span",{class:"hljs-keyword"},"import"),s(" { reactive, ref } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`

`),a("span",{class:"hljs-keyword"},"const"),s(` formData = reactive({
  `),a("span",{class:"hljs-attr"},"username"),s(": "),a("span",{class:"hljs-string"},"''"),s(`,
  `),a("span",{class:"hljs-attr"},"password"),s(": "),a("span",{class:"hljs-string"},"''"),s(`,
  `),a("span",{class:"hljs-attr"},"department"),s(": "),a("span",{class:"hljs-string"},"''"),s(`,
  `),a("span",{class:"hljs-attr"},"gender"),s(": "),a("span",{class:"hljs-literal"},"undefined"),s(`,
  `),a("span",{class:"hljs-attr"},"license"),s(": "),a("span",{class:"hljs-literal"},"false"),s(`,
  `),a("span",{class:"hljs-attr"},"range"),s(": "),a("span",{class:"hljs-number"},"10"),s(`,
  `),a("span",{class:"hljs-attr"},"count"),s(": "),a("span",{class:"hljs-number"},"0"),s(`,
  `),a("span",{class:"hljs-attr"},"group"),s(`: [],
  `),a("span",{class:"hljs-attr"},"score"),s(":"),a("span",{class:"hljs-number"},"0"),s(`,
  `),a("span",{class:"hljs-attr"},"like"),s(`: [],
  `),a("span",{class:"hljs-attr"},"files"),s(`: []
})
`),a("span",{class:"hljs-keyword"},"const"),s(" form = ref("),a("span",{class:"hljs-literal"},"null"),s(`)
`),a("span",{class:"hljs-keyword"},"const"),s(" disabled = ref("),a("span",{class:"hljs-literal"},"false"),s(`)
`),a("span",{class:"hljs-keyword"},"const"),s(" readonly = ref("),a("span",{class:"hljs-literal"},"false"),s(`)
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-form"),s(),a("span",{class:"hljs-attr"},"ref"),s("="),a("span",{class:"hljs-string"},'"form"'),s(),a("span",{class:"hljs-attr"},":disabled"),s("="),a("span",{class:"hljs-string"},'"disabled"'),s(),a("span",{class:"hljs-attr"},":readonly"),s("="),a("span",{class:"hljs-string"},'"readonly"'),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-space"),s(),a("span",{class:"hljs-attr"},"direction"),s("="),a("span",{class:"hljs-string"},'"column"'),s(),a("span",{class:"hljs-attr"},":size"),s("="),a("span",{class:"hljs-string"},'"[14, 0]"'),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-input"),s(`
        `),a("span",{class:"hljs-attr"},"placeholder"),s("="),a("span",{class:"hljs-string"},'"Please input username"'),s(`
        `),a("span",{class:"hljs-attr"},":rules"),s("="),a("span",{class:"hljs-string"},`"[v => !!v || 'The username cannot be empty']"`),s(`
        `),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"formData.username"'),s(`
      />`)]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-input"),s(`
        `),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"password"'),s(`
        `),a("span",{class:"hljs-attr"},"placeholder"),s("="),a("span",{class:"hljs-string"},'"Please input password"'),s(`
        `),a("span",{class:"hljs-attr"},":rules"),s("="),a("span",{class:"hljs-string"},`"[v => !!v || 'The password cannot be empty']"`),s(`
        `),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"formData.password"'),s(`
      />`)]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-select"),s(`
        `),a("span",{class:"hljs-attr"},"placeholder"),s("="),a("span",{class:"hljs-string"},'"Please select department"'),s(`
        `),a("span",{class:"hljs-attr"},":rules"),s("="),a("span",{class:"hljs-string"},`"[v => !!v || 'The select cannot be empty']"`),s(`
        `),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"formData.department"'),s(`
      >`)]),s(`
        `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-option"),s(),a("span",{class:"hljs-attr"},"label"),s("="),a("span",{class:"hljs-string"},'"Eat department"'),s("  />")]),s(`
        `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-option"),s(),a("span",{class:"hljs-attr"},"label"),s("="),a("span",{class:"hljs-string"},'"Sleep department"'),s("  />")]),s(`
        `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-option"),s(),a("span",{class:"hljs-attr"},"label"),s("="),a("span",{class:"hljs-string"},'"Play game department"'),s(" />")]),s(`
      `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-select"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-select"),s(`
        `),a("span",{class:"hljs-attr"},"multiple"),s(`
        `),a("span",{class:"hljs-attr"},"placeholder"),s("="),a("span",{class:"hljs-string"},'"Please select group"'),s(`
        `),a("span",{class:"hljs-attr"},":rules"),s("="),a("span",{class:"hljs-string"},`"[v => v.length >= 1 || 'The select cannot be empty']"`),s(`
        `),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"formData.group"'),s(`
      >`)]),s(`
        `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-option"),s(),a("span",{class:"hljs-attr"},"label"),s("="),a("span",{class:"hljs-string"},'"Eat group"'),s("  />")]),s(`
        `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-option"),s(),a("span",{class:"hljs-attr"},"label"),s("="),a("span",{class:"hljs-string"},'"Sleep group"'),s("  />")]),s(`
        `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-option"),s(),a("span",{class:"hljs-attr"},"label"),s("="),a("span",{class:"hljs-string"},'"Play game group"'),s(" />")]),s(`
      `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-select"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-radio-group"),s(`
        `),a("span",{class:"hljs-attr"},":rules"),s("="),a("span",{class:"hljs-string"},`"[v => !!v || 'The gender cannot be empty']"`),s(`
        `),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"formData.gender"'),s(`
      >`)]),s(`
        `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-radio"),s(),a("span",{class:"hljs-attr"},":checked-value"),s("="),a("span",{class:"hljs-string"},'"1"'),s(">")]),s("Male"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-radio"),s(">")]),s(`
        `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-radio"),s(),a("span",{class:"hljs-attr"},":checked-value"),s("="),a("span",{class:"hljs-string"},'"2"'),s(">")]),s("Female"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-radio"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-radio-group"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-checkbox-group"),s(`
        `),a("span",{class:"hljs-attr"},":rules"),s("="),a("span",{class:"hljs-string"},`"[v => v.length > 0 || 'The select cannot be empty']"`),s(`
        `),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"formData.like"'),s(`
      >`)]),s(`
        `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-checkbox"),s(),a("span",{class:"hljs-attr"},":checked-value"),s("="),a("span",{class:"hljs-string"},'"1"'),s(">")]),s("Eat"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-checkbox"),s(">")]),s(`
        `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-checkbox"),s(),a("span",{class:"hljs-attr"},":checked-value"),s("="),a("span",{class:"hljs-string"},'"2"'),s(">")]),s("Sleep"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-checkbox"),s(">")]),s(`
        `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-checkbox"),s(),a("span",{class:"hljs-attr"},":checked-value"),s("="),a("span",{class:"hljs-string"},'"3"'),s(">")]),s("Play game"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-checkbox"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-checkbox-group"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-rate"),s(`
        `),a("span",{class:"hljs-attr"},":rules"),s("="),a("span",{class:"hljs-string"},`"[v => v >= 3 || 'It has to be greater than 2']"`),s(`
        `),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"formData.score"'),s(`
      />`)]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-switch"),s(`
        `),a("span",{class:"hljs-attr"},":rules"),s("="),a("span",{class:"hljs-string"},`"[v => !!v || 'You must turn on']"`),s(`
        `),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"formData.license"'),s(`
      />`)]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-counter"),s(`
        `),a("span",{class:"hljs-attr"},":rules"),s("="),a("span",{class:"hljs-string"},`"[v => v > 10 || 'It has to be greater than 10']"`),s(`
        `),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"formData.count"'),s(`
      />`)]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-slider"),s(`
        `),a("span",{class:"hljs-attr"},":rules"),s("="),a("span",{class:"hljs-string"},`"[v => v > 10 || 'It has to be greater than 10']"`),s(`
        `),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"formData.range"'),s(`
      />`)]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-uploader"),s(`
        `),a("span",{class:"hljs-attr"},":rules"),s("="),a("span",{class:"hljs-string"},`"[v => v.length >= 1 || 'Upload at least one picture']"`),s(`
        `),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"formData.files"'),s(`
      />`)]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-space"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-form"),s(">")]),s(`
  
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-space"),s(),a("span",{class:"hljs-attr"},"direction"),s("="),a("span",{class:"hljs-string"},'"column"'),s(),a("span",{class:"hljs-attr"},":size"),s("="),a("span",{class:"hljs-string"},'"[14, 0]"'),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-button"),s(),a("span",{class:"hljs-attr"},"block"),s(),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"danger"'),s(" @"),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},'"form.reset()"'),s(">")]),s(`
      Empty form
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-button"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-button"),s(),a("span",{class:"hljs-attr"},"block"),s(),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"warning"'),s(" @"),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},'"form.resetValidation()"'),s(">")]),s(`
      Empty the validation
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-button"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-button"),s(),a("span",{class:"hljs-attr"},"block"),s(),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"success"'),s(" @"),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},'"form.validate()"'),s(">")]),s(`
      Trigger validation
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-button"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-button"),s(),a("span",{class:"hljs-attr"},"block"),s(),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"info"'),s(" @"),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},'"disabled = !disabled"'),s(">")]),s(`
      Form disabled
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-button"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-button"),s(),a("span",{class:"hljs-attr"},"block"),s(),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"primary"'),s(" @"),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},'"readonly = !readonly"'),s(">")]),s(`
      Form readonly
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-button"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-space"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),u=p('<h2>API</h2><div class="card"><h3>Props</h3><table><thead><tr><th>Prop</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>readonly</code></td><td>Whether the readonly</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>disabled</code></td><td>Whether the disabled</td><td><em>boolean</em></td><td><code>false</code></td></tr></tbody></table></div><div class="card"><h3>Methods</h3><table><thead><tr><th>Method</th><th>Description</th><th>Arguments</th><th>Return</th></tr></thead><tbody><tr><td><code>validate</code></td><td>Trigger validation for all form components</td><td><code>-</code></td><td><code>valid: Promise&lt;boolean&gt;</code></td></tr><tr><td><code>resetValidation</code></td><td>Clear the validation messages for all form components</td><td><code>-</code></td><td><code>-</code></td></tr><tr><td><code>reset</code></td><td>Clears all form component bindings of values and validation messages</td><td><code>-</code></td><td><code>-</code></td></tr></tbody></table></div><div class="card"><h3>Slots</h3><table><thead><tr><th>Name</th><th>Description</th><th>SlotProps</th></tr></thead><tbody><tr><td><code>default</code></td><td>Form content</td><td><code>-</code></td></tr></tbody></table></div><div class="card"><h3>Style Variables</h3><p>Here are the CSS variables used by the component, Styles can be customized using <a href="#/en-US/style-provider">StyleProvider</a></p><table><thead><tr><th>Variable</th><th>Default</th></tr></thead><tbody><tr><td><code>--form-details-error-color</code></td><td><code>var(--color-danger)</code></td></tr><tr><td><code>--form-details-length-color</code></td><td><code>#888</code></td></tr><tr><td><code>--form-details-margin-top</code></td><td><code>6px</code></td></tr><tr><td><code>--form-details-font-size</code></td><td><code>12px</code></td></tr><tr><td><code>--form-details-message-margin-right</code></td><td><code>4px</code></td></tr></tbody></table></div>',5);function b(f,y,k,_,x,D){const l=n("var-site-code-example");return e(),c("div",d,[j,i,a("div",m,[g,r(l,null,{default:h(()=>[v]),_:1})]),u])}const w=t(o,[["render",b]]);export{w as default};
