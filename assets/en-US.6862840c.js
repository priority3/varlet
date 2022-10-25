import{_ as n,p as d,f as c,h as o,M as t,q as e,S as l,P as s,at as r}from"./vue-router.esm-bundler.786782d7.js";const p={components:{}},i={class:"varlet-site-doc"},h=t("h1",null,"Uploader",-1),j=t("div",{class:"card"},[t("h3",null,"Intro"),t("p",null,[s("It provides the ability to read files and preview pictures and videos. Get the file upload server by listening for "),t("code",null,"after-read"),s(" events.")])],-1),u={class:"card"},g=t("h3",null,"Basic Usage",-1),m=t("pre",{class:"hljs"},[t("code",null,[t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"script"),s(),t("span",{class:"hljs-attr"},"setup"),s(">")]),t("span",{class:"javascript"},[s(`
`),t("span",{class:"hljs-keyword"},"import"),s(" { ref } "),t("span",{class:"hljs-keyword"},"from"),s(),t("span",{class:"hljs-string"},"'vue'"),s(`

`),t("span",{class:"hljs-keyword"},"const"),s(` files = ref([])
`),t("span",{class:"hljs-keyword"},"const"),s(" handleAfterRead = "),t("span",{class:"hljs-function"},[t("span",{class:"hljs-params"},"file"),s(" =>")]),s(),t("span",{class:"hljs-built_in"},"console"),s(`.log(file)
`)]),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-uploader"),s(),t("span",{class:"hljs-attr"},"v-model"),s("="),t("span",{class:"hljs-string"},'"files"'),s(" @"),t("span",{class:"hljs-attr"},"after-read"),s("="),t("span",{class:"hljs-string"},'"handleAfterRead"'),s("/>")]),s(`
`),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),f={class:"card"},v=t("h3",null,"File Preview",-1),_=t("p",null,"By analyzing the file URL suffix name to determine the file type, support image and video preview.",-1),b=t("pre",{class:"hljs"},[t("code",null,[t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"script"),s(),t("span",{class:"hljs-attr"},"setup"),s(">")]),t("span",{class:"javascript"},[s(`
`),t("span",{class:"hljs-keyword"},"import"),s(" { ref } "),t("span",{class:"hljs-keyword"},"from"),s(),t("span",{class:"hljs-string"},"'vue'"),s(`

`),t("span",{class:"hljs-keyword"},"const"),s(` files = ref([
  {
    `),t("span",{class:"hljs-attr"},"url"),s(": "),t("span",{class:"hljs-string"},"'https://varlet.gitee.io/varlet-ui/cat.jpg'"),s(`,
    `),t("span",{class:"hljs-attr"},"cover"),s(": "),t("span",{class:"hljs-string"},"'https://varlet.gitee.io/varlet-ui/cat.jpg'"),s(`
  },
  {
    `),t("span",{class:"hljs-attr"},"url"),s(": "),t("span",{class:"hljs-string"},"'https://www.runoob.com/try/demo_source/mov_bbb.mp4'"),s(`,
    `),t("span",{class:"hljs-attr"},"cover"),s(": "),t("span",{class:"hljs-string"},"'https://varlet.gitee.io/varlet-ui/cover.jpg'"),s(`
  }
])
`)]),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-uploader"),s(),t("span",{class:"hljs-attr"},"v-model"),s("="),t("span",{class:"hljs-string"},'"files"'),s("/>")]),s(`
`),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),y={class:"card"},w=t("h3",null,"Upload State",-1),k=t("p",null,[s("Three uploading states, "),t("code",null,"loading"),s(", "),t("code",null,"success"),s(" and "),t("code",null,"error"),s(", are provided, and tool functions are provided to quickly obtain files with corresponding states.")],-1),x=t("pre",{class:"hljs"},[t("code",null,[t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"script"),s(),t("span",{class:"hljs-attr"},"setup"),s(">")]),t("span",{class:"javascript"},[s(`
`),t("span",{class:"hljs-keyword"},"import"),s(" { ref } "),t("span",{class:"hljs-keyword"},"from"),s(),t("span",{class:"hljs-string"},"'vue'"),s(`

`),t("span",{class:"hljs-keyword"},"const"),s(` files = ref([
  {
    `),t("span",{class:"hljs-attr"},"url"),s(": "),t("span",{class:"hljs-string"},"'https://varlet.gitee.io/varlet-ui/cat.jpg'"),s(`,
    `),t("span",{class:"hljs-attr"},"cover"),s(": "),t("span",{class:"hljs-string"},"'https://varlet.gitee.io/varlet-ui/cat.jpg'"),s(`,
    `),t("span",{class:"hljs-attr"},"state"),s(": "),t("span",{class:"hljs-string"},"'loading'"),s(`
  },
  {
    `),t("span",{class:"hljs-attr"},"url"),s(": "),t("span",{class:"hljs-string"},"'https://varlet.gitee.io/varlet-ui/cat.jpg'"),s(`,
    `),t("span",{class:"hljs-attr"},"cover"),s(": "),t("span",{class:"hljs-string"},"'https://varlet.gitee.io/varlet-ui/cat.jpg'"),s(`,
    `),t("span",{class:"hljs-attr"},"state"),s(": "),t("span",{class:"hljs-string"},"'success'"),s(`
  },
  {
    `),t("span",{class:"hljs-attr"},"url"),s(": "),t("span",{class:"hljs-string"},"'https://varlet.gitee.io/varlet-ui/cat.jpg'"),s(`,
    `),t("span",{class:"hljs-attr"},"cover"),s(": "),t("span",{class:"hljs-string"},"'https://varlet.gitee.io/varlet-ui/cat.jpg'"),s(`,
    `),t("span",{class:"hljs-attr"},"state"),s(": "),t("span",{class:"hljs-string"},"'error'"),s(`
  }
])

`),t("span",{class:"hljs-keyword"},"const"),s(" handleAfterRead = "),t("span",{class:"hljs-function"},[s("("),t("span",{class:"hljs-params"},"file"),s(") =>")]),s(` {
  file.state = `),t("span",{class:"hljs-string"},"'loading'"),s(`

  `),t("span",{class:"hljs-built_in"},"setTimeout"),s("("),t("span",{class:"hljs-function"},"() =>"),s(` {
    file.state = `),t("span",{class:"hljs-string"},"'success'"),s(`
  }, `),t("span",{class:"hljs-number"},"1000"),s(`)
}
`)]),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-uploader"),s(),t("span",{class:"hljs-attr"},"v-model"),s("="),t("span",{class:"hljs-string"},'"files"'),s(" @"),t("span",{class:"hljs-attr"},"after-read"),s("="),t("span",{class:"hljs-string"},'"handleAfterRead"'),s("/>")]),s(`
`),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),F={class:"card"},V=t("h3",null,"File Maxlength",-1),z=t("pre",{class:"hljs"},[t("code",null,[t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"script"),s(),t("span",{class:"hljs-attr"},"setup"),s(">")]),t("span",{class:"javascript"},[s(`
`),t("span",{class:"hljs-keyword"},"import"),s(" { ref } "),t("span",{class:"hljs-keyword"},"from"),s(),t("span",{class:"hljs-string"},"'vue'"),s(`

`),t("span",{class:"hljs-keyword"},"const"),s(` files = ref([])
`)]),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-uploader"),s(),t("span",{class:"hljs-attr"},"v-model"),s("="),t("span",{class:"hljs-string"},'"files"'),s(),t("span",{class:"hljs-attr"},":maxlength"),s("="),t("span",{class:"hljs-string"},'"1"'),s("/>")]),s(`
`),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),S={class:"card"},T=t("h3",null,"File Size Limit",-1),R=t("p",null,[s("If the limit is exceeded, the file will be blocked. You can get the file by listening for the "),t("code",null,"oversize"),s(" event.")],-1),D=t("pre",{class:"hljs"},[t("code",null,[t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"script"),s(),t("span",{class:"hljs-attr"},"setup"),s(">")]),t("span",{class:"javascript"},[s(`
`),t("span",{class:"hljs-keyword"},"import"),s(" { ref } "),t("span",{class:"hljs-keyword"},"from"),s(),t("span",{class:"hljs-string"},"'vue'"),s(`
`),t("span",{class:"hljs-keyword"},"import"),s(" { Snackbar } "),t("span",{class:"hljs-keyword"},"from"),s(),t("span",{class:"hljs-string"},"'@varlet/ui'"),s(`

`),t("span",{class:"hljs-keyword"},"const"),s(` files = ref([])

`),t("span",{class:"hljs-keyword"},"const"),s(" handleOversize = "),t("span",{class:"hljs-function"},"() =>"),s(` {
  Snackbar.warning(`),t("span",{class:"hljs-string"},"'file size exceeds limit'"),s(`)
}
`)]),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-uploader"),s(),t("span",{class:"hljs-attr"},"v-model"),s("="),t("span",{class:"hljs-string"},'"files"'),s(),t("span",{class:"hljs-attr"},":maxsize"),s("="),t("span",{class:"hljs-string"},'"1024"'),s(" @"),t("span",{class:"hljs-attr"},"oversize"),s("="),t("span",{class:"hljs-string"},'"handleOversize"'),s(" />")]),s(`
`),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),C={class:"card"},P=t("h3",null,"Upload Preprocessing",-1),U=t("p",null,[s("Operate on a file by registering a "),t("code",null,"before-read"),s(" event that returns a false value to prevent the file from being read.")],-1),A=t("pre",{class:"hljs"},[t("code",null,[t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"script"),s(),t("span",{class:"hljs-attr"},"setup"),s(">")]),t("span",{class:"javascript"},[s(`
`),t("span",{class:"hljs-keyword"},"import"),s(" { ref } "),t("span",{class:"hljs-keyword"},"from"),s(),t("span",{class:"hljs-string"},"'vue'"),s(`
`),t("span",{class:"hljs-keyword"},"import"),s(" { Snackbar } "),t("span",{class:"hljs-keyword"},"from"),s(),t("span",{class:"hljs-string"},"'@varlet/ui'"),s(`

`),t("span",{class:"hljs-keyword"},"const"),s(` files = ref([])

`),t("span",{class:"hljs-keyword"},"const"),s(" handleBeforeRead = "),t("span",{class:"hljs-function"},[s("("),t("span",{class:"hljs-params"},"file"),s(") =>")]),s(` {
  `),t("span",{class:"hljs-keyword"},"if"),s(" (file.file.size <= "),t("span",{class:"hljs-number"},"1"),s(" * "),t("span",{class:"hljs-number"},"1024"),s(" * "),t("span",{class:"hljs-number"},"1024"),s(`) {
    Snackbar.success(`),t("span",{class:"hljs-string"},"'the file is less than 1M, the upload is successful'"),s(`)
    `),t("span",{class:"hljs-keyword"},"return"),s(),t("span",{class:"hljs-literal"},"true"),s(`
  } `),t("span",{class:"hljs-keyword"},"else"),s(` {
    Snackbar.warning(`),t("span",{class:"hljs-string"},"'the file is larger than 1M and cannot be uploaded'"),s(`)
    `),t("span",{class:"hljs-keyword"},"return"),s(),t("span",{class:"hljs-literal"},"false"),s(`
  }
}
`)]),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-uploader"),s(),t("span",{class:"hljs-attr"},"v-model"),s("="),t("span",{class:"hljs-string"},'"files"'),s(" @"),t("span",{class:"hljs-attr"},"before-read"),s("="),t("span",{class:"hljs-string"},'"handleBeforeRead"'),s("/>")]),s(`
`),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),B={class:"card"},M=t("h3",null,"Disabled",-1),G=t("pre",{class:"hljs"},[t("code",null,[t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"script"),s(),t("span",{class:"hljs-attr"},"setup"),s(">")]),t("span",{class:"javascript"},[s(`
`),t("span",{class:"hljs-keyword"},"import"),s(" { ref } "),t("span",{class:"hljs-keyword"},"from"),s(),t("span",{class:"hljs-string"},"'vue'"),s(`

`),t("span",{class:"hljs-keyword"},"const"),s(` files = ref([])
`)]),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-uploader"),s(),t("span",{class:"hljs-attr"},"disabled"),s(),t("span",{class:"hljs-attr"},"v-model"),s("="),t("span",{class:"hljs-string"},'"files"'),s("/>")]),s(`
`),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),W={class:"card"},E=t("h3",null,"Readonly",-1),N=t("pre",{class:"hljs"},[t("code",null,[t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"script"),s(),t("span",{class:"hljs-attr"},"setup"),s(">")]),t("span",{class:"javascript"},[s(`
`),t("span",{class:"hljs-keyword"},"import"),s(" { ref } "),t("span",{class:"hljs-keyword"},"from"),s(),t("span",{class:"hljs-string"},"'vue'"),s(`

`),t("span",{class:"hljs-keyword"},"const"),s(` files = ref([])
`)]),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-uploader"),s(),t("span",{class:"hljs-attr"},"readonly"),s(),t("span",{class:"hljs-attr"},"v-model"),s("="),t("span",{class:"hljs-string"},'"files"'),s("/>")]),s(`
`),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),O={class:"card"},I=t("h3",null,"Remove Preprocessing",-1),L=t("p",null,[s("Before deleting the file, the "),t("code",null,"before-remove"),s(" event is triggered, and a falsy value is returned to prevent the delete operation.")],-1),$=t("pre",{class:"hljs"},[t("code",null,[t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"script"),s(),t("span",{class:"hljs-attr"},"setup"),s(">")]),t("span",{class:"javascript"},[s(`
`),t("span",{class:"hljs-keyword"},"import"),s(" { ref } "),t("span",{class:"hljs-keyword"},"from"),s(),t("span",{class:"hljs-string"},"'vue'"),s(`
`),t("span",{class:"hljs-keyword"},"import"),s(" { Dialog } "),t("span",{class:"hljs-keyword"},"from"),s(),t("span",{class:"hljs-string"},"'@varlet/ui'"),s(`

`),t("span",{class:"hljs-keyword"},"const"),s(` files = ref([
  {
    `),t("span",{class:"hljs-attr"},"url"),s(": "),t("span",{class:"hljs-string"},"'https://varlet.gitee.io/varlet-ui/cat.jpg'"),s(`,
    `),t("span",{class:"hljs-attr"},"cover"),s(": "),t("span",{class:"hljs-string"},"'https://varlet.gitee.io/varlet-ui/cat.jpg'"),s(`
  }
])

`),t("span",{class:"hljs-keyword"},"const"),s(" handleBeforeRemove = "),t("span",{class:"hljs-keyword"},"async"),s(` () => {
  `),t("span",{class:"hljs-keyword"},"const"),s(" action = "),t("span",{class:"hljs-keyword"},"await"),s(` Dialog({
    `),t("span",{class:"hljs-attr"},"title"),s(": "),t("span",{class:"hljs-string"},"'Delete or not?'"),s(`,
    `),t("span",{class:"hljs-attr"},"message"),s(": "),t("span",{class:"hljs-string"},"'Cannot be withdrawn after deletion'"),s(`
  })

  `),t("span",{class:"hljs-keyword"},"return"),s(" action === "),t("span",{class:"hljs-string"},"'confirm'"),s(`
}
`)]),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-uploader"),s(),t("span",{class:"hljs-attr"},"v-model"),s("="),t("span",{class:"hljs-string"},'"files"'),s(" @"),t("span",{class:"hljs-attr"},"before-remove"),s("="),t("span",{class:"hljs-string"},'"handleBeforeRemove"'),s(" />")]),s(`
`),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),q={class:"card"},Y=t("h3",null,"Customize upload styles",-1),H=t("pre",{class:"hljs"},[t("code",null,[t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"script"),s(),t("span",{class:"hljs-attr"},"setup"),s(">")]),t("span",{class:"javascript"},[s(`
`),t("span",{class:"hljs-keyword"},"import"),s(" { ref } "),t("span",{class:"hljs-keyword"},"from"),s(),t("span",{class:"hljs-string"},"'vue'"),s(`

`),t("span",{class:"hljs-keyword"},"const"),s(` files = ref()
`)]),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-uploader"),s(),t("span",{class:"hljs-attr"},"v-model"),s("="),t("span",{class:"hljs-string"},'"files"'),s(">")]),s(`
    `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-button"),s(),t("span",{class:"hljs-attr"},"type"),s("="),t("span",{class:"hljs-string"},'"primary"'),s(">")]),s("Upload"),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"var-button"),s(">")]),s(`
  `),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"var-uploader"),s(">")]),s(`
`),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),J={class:"card"},K=t("h3",null,"Validate",-1),Q=t("p",null,[s("The values are validated by passing in an array of validator, If the validator returns "),t("code",null,"true"),s(", the validation passes. Other values are converted to text as a user prompt. The second argument is a collection of utility functions that can quickly get a collection of files that match the state.")],-1),X=t("pre",{class:"hljs"},[t("code",null,[t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"script"),s(),t("span",{class:"hljs-attr"},"setup"),s(">")]),t("span",{class:"javascript"},[s(`
`),t("span",{class:"hljs-keyword"},"import"),s(" { ref } "),t("span",{class:"hljs-keyword"},"from"),s(),t("span",{class:"hljs-string"},"'vue'"),s(`

`),t("span",{class:"hljs-keyword"},"const"),s(` files = ref([
  {
    `),t("span",{class:"hljs-attr"},"url"),s(": "),t("span",{class:"hljs-string"},"'https://varlet.gitee.io/varlet-ui/cat.jpg'"),s(`,
    `),t("span",{class:"hljs-attr"},"cover"),s(": "),t("span",{class:"hljs-string"},"'https://varlet.gitee.io/varlet-ui/cat.jpg'"),s(`,
    `),t("span",{class:"hljs-attr"},"state"),s(": "),t("span",{class:"hljs-string"},"'error'"),s(`,
  },
])
`)]),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-uploader"),s(`
    `),t("span",{class:"hljs-attr"},":rules"),s("="),t("span",{class:"hljs-string"},`"[(v, u) => u.getError().length === 0 || 'There is a file that failed to upload']"`),s(`
    `),t("span",{class:"hljs-attr"},"v-model"),s("="),t("span",{class:"hljs-string"},'"files"'),s(`
  />`)]),s(`
`),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),Z={class:"card"},ss=t("h3",null,"Custom render file list",-1),ts=t("p",null,[s("You can use the "),t("code",null,"hide-list"),s(" to hide component files list, then you can render this list by custom.")],-1),as=t("pre",{class:"hljs"},[t("code",null,[t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"script"),s(),t("span",{class:"hljs-attr"},"setup"),s(">")]),t("span",{class:"javascript"},[s(`
`),t("span",{class:"hljs-keyword"},"import"),s(" { ref } "),t("span",{class:"hljs-keyword"},"from"),s(),t("span",{class:"hljs-string"},"'vue'"),s(`

`),t("span",{class:"hljs-keyword"},"const"),s(` files = ref([
  {
    `),t("span",{class:"hljs-attr"},"url"),s(": "),t("span",{class:"hljs-string"},"'https://varlet.gitee.io/varlet-ui/cat.jpg'"),s(`,
    `),t("span",{class:"hljs-attr"},"cover"),s(": "),t("span",{class:"hljs-string"},"'https://varlet.gitee.io/varlet-ui/cat.jpg'"),s(`,
    `),t("span",{class:"hljs-attr"},"state"),s(": "),t("span",{class:"hljs-string"},"'loading'"),s(`,
  },
  {
    `),t("span",{class:"hljs-attr"},"url"),s(": "),t("span",{class:"hljs-string"},"'https://varlet.gitee.io/varlet-ui/cat.jpg'"),s(`,
    `),t("span",{class:"hljs-attr"},"cover"),s(": "),t("span",{class:"hljs-string"},"'https://varlet.gitee.io/varlet-ui/cat.jpg'"),s(`,
    `),t("span",{class:"hljs-attr"},"state"),s(": "),t("span",{class:"hljs-string"},"'success'"),s(`,
  },
  {
    `),t("span",{class:"hljs-attr"},"url"),s(": "),t("span",{class:"hljs-string"},"'https://varlet.gitee.io/varlet-ui/cat.jpg'"),s(`,
    `),t("span",{class:"hljs-attr"},"cover"),s(": "),t("span",{class:"hljs-string"},"'https://varlet.gitee.io/varlet-ui/cat.jpg'"),s(`,
    `),t("span",{class:"hljs-attr"},"state"),s(": "),t("span",{class:"hljs-string"},"'error'"),s(`,
  },
])
`)]),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-space"),s(">")]),s(`
    `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"img"),s(`
      `),t("span",{class:"hljs-attr"},"class"),s("="),t("span",{class:"hljs-string"},'"uploader-example-file"'),s(`
      `),t("span",{class:"hljs-attr"},"v-for"),s("="),t("span",{class:"hljs-string"},'"f in files"'),s(`
      `),t("span",{class:"hljs-attr"},":key"),s("="),t("span",{class:"hljs-string"},'"f.id"'),s(`
      `),t("span",{class:"hljs-attr"},":src"),s("="),t("span",{class:"hljs-string"},'"f.cover"'),s(`
    />`)]),s(`
    `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-uploader"),s(),t("span",{class:"hljs-attr"},"hide-list"),s(),t("span",{class:"hljs-attr"},"v-model"),s("="),t("span",{class:"hljs-string"},'"files"'),s(">")]),s(`
      `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-button"),s(),t("span",{class:"hljs-attr"},"round"),s(),t("span",{class:"hljs-attr"},"type"),s("="),t("span",{class:"hljs-string"},'"primary"'),s(">")]),s(`
        `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-icon"),s(),t("span",{class:"hljs-attr"},":size"),s("="),t("span",{class:"hljs-string"},'"28"'),s(),t("span",{class:"hljs-attr"},"name"),s("="),t("span",{class:"hljs-string"},'"upload"'),s(" />")]),s(`
      `),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"var-button"),s(">")]),s(`
    `),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"var-uploader"),s(">")]),s(`
  `),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"var-space"),s(">")]),s(`
`),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`

`),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"style"),s(">")]),t("span",{class:"css"},[s(`
`),t("span",{class:"hljs-selector-class"},".uploader-example-file"),s(` {
  `),t("span",{class:"hljs-attribute"},"width"),s(": "),t("span",{class:"hljs-number"},"40px"),s(`;
  `),t("span",{class:"hljs-attribute"},"height"),s(": "),t("span",{class:"hljs-number"},"40px"),s(`;
  `),t("span",{class:"hljs-attribute"},"border-radius"),s(": "),t("span",{class:"hljs-number"},"50%"),s(`;
  `),t("span",{class:"hljs-attribute"},"font-size"),s(": "),t("span",{class:"hljs-number"},"12px"),s(`;
  `),t("span",{class:"hljs-attribute"},"object-fit"),s(`: cover;
}
`)]),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"style"),s(">")]),s(`
`)])],-1),es=r('<h2>API</h2><div class="card"><h3>Props</h3><table><thead><tr><th>Prop</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>v-model</code></td><td>File list</td><td><em>VarFile[]</em></td><td><code>[]</code></td></tr><tr><td><code>accept</code></td><td>Accepted file type, consistent with the native attribute</td><td><em>string</em></td><td><code>image/*</code></td></tr><tr><td><code>capture</code></td><td>Get the file, the same as the native property</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>multiple</code></td><td>Whether to select multiple files</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>readonly</code></td><td>Whether the readonly</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>disabled</code></td><td>Whether the disabled</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>removable</code></td><td>Whether the removable</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>maxlength</code></td><td>Maximum number of files</td><td><em>string | number</em></td><td><code>-</code></td></tr><tr><td><code>maxsize</code></td><td>Maximum file size</td><td><em>string | number</em></td><td><code>-</code></td></tr><tr><td><code>previewed</code></td><td>Whether to allow preview</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>ripple</code></td><td>Whether to open ripple</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>hide-list</code></td><td>Whether to hide the file list</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>validate-trigger</code></td><td>Timing to trigger validation\uFF0C The optional value is <code>onChange</code> <code>onRemove</code></td><td><em>ValidateTriggers[]</em></td><td><code>[&#39;onChange&#39;, &#39;onRemove&#39;]</code></td></tr><tr><td><code>rules</code></td><td>The validation rules\uFF0CReturns <code>true</code> to indicate that the validation passed\uFF0CThe remaining values are converted to text as user prompts</td><td><em>Array&lt;(v: VarFile, u: VarFileUtils) =&gt; any&gt;</em></td><td><code>-</code></td></tr></tbody></table></div><div class="card"><h3>VarFile</h3><table><thead><tr><th>Prop</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>file</code></td><td>Native file</td><td><em>File</em></td><td><code>-</code></td></tr><tr><td><code>name</code></td><td>File name</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>url</code></td><td>File url</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>cover</code></td><td>File cover image</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>fit</code></td><td>Cover image fill mode, Optional value is <code>fill</code> <code>contain</code> <code>cover</code> <code>none</code> <code>scale-down</code></td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>state</code></td><td>File upload state, Optional value is <code>loading</code> <code>success</code> <code>error</code></td><td><em>string</em></td><td><code>-</code></td></tr></tbody></table></div><div class="card"><h3>VarFileUtils</h3><table><thead><tr><th>Method</th><th>Description</th><th>Arguments</th><th>Return</th></tr></thead><tbody><tr><td><code>getLoading</code></td><td>Gets a collection of files for <code>state</code> is <code>loading</code></td><td><code>-</code></td><td><code>VarFile[]</code></td></tr><tr><td><code>getSuccess</code></td><td>Gets a collection of files for <code>state</code> is <code>success</code></td><td><code>-</code></td><td><code>VarFile[]</code></td></tr><tr><td><code>getError</code></td><td>Gets a collection of files for <code>state</code> is <code>error</code></td><td><code>-</code></td><td><code>VarFile[]</code></td></tr></tbody></table></div><div class="card"><h3>Methods</h3><table><thead><tr><th>Method</th><th>Description</th><th>Arguments</th><th>Return</th></tr></thead><tbody><tr><td><code>getLoading</code></td><td>Gets a collection of files for <code>state</code> is <code>loading</code></td><td><code>-</code></td><td><code>VarFile[]</code></td></tr><tr><td><code>getSuccess</code></td><td>Gets a collection of files for <code>state</code> is <code>success</code></td><td><code>-</code></td><td><code>VarFile[]</code></td></tr><tr><td><code>getError</code></td><td>Gets a collection of files for <code>state</code> is <code>error</code></td><td><code>-</code></td><td><code>VarFile[]</code></td></tr><tr><td><code>validate</code></td><td>Trigger validate</td><td><code>-</code></td><td><code>valid: Promise&lt;boolean&gt;</code></td></tr><tr><td><code>resetValidation</code></td><td>Clearing validate messages</td><td><code>-</code></td><td><code>-</code></td></tr><tr><td><code>reset</code></td><td>Clear the value of the binding(set to <code>[]</code>)and validate messages</td><td><code>-</code></td><td><code>-</code></td></tr></tbody></table></div><div class="card"><h3>Events</h3><table><thead><tr><th>Event</th><th>Description</th><th>Arguments</th></tr></thead><tbody><tr><td><code>before-read</code></td><td>Trigger returns a false value before a file is read to prevent the file from being read(support promise)</td><td><code>file: VarFile</code></td></tr><tr><td><code>after-read</code></td><td>Triggered after the file is read</td><td><code>file: VarFile</code></td></tr><tr><td><code>oversize</code></td><td>Triggered when the file size limit is exceeded</td><td><code>file: VarFile</code></td></tr><tr><td><code>before-remove</code></td><td>Triggered before file deletion, return false value to prevent file deletion (support promise)</td><td><code>file: VarFile</code></td></tr><tr><td><code>remove</code></td><td>Triggered when deleting a file. There is a true value to prevent deleting a file (support promise)</td><td><code>file: VarFile</code></td></tr></tbody></table></div><div class="card"><h3>Slots</h3><table><thead><tr><th>Name</th><th>Description</th><th>SlotProps</th></tr></thead><tbody><tr><td><code>default</code></td><td>Upload action content</td><td><code>-</code></td></tr></tbody></table></div><div class="card"><h3>Style Variables</h3><p>Here are the CSS variables used by the component, Styles can be customized using <a href="#/en-US/style-provider">StyleProvider</a></p><table><thead><tr><th>Variable</th><th>Default</th></tr></thead><tbody><tr><td><code>--uploader-action-background</code></td><td><code>#f7f8fa</code></td></tr><tr><td><code>--uploader-action-icon-color</code></td><td><code>#888</code></td></tr><tr><td><code>--uploader-action-icon-size</code></td><td><code>24px</code></td></tr><tr><td><code>--uploader-action-margin</code></td><td><code>0 10px 10px 0</code></td></tr><tr><td><code>--uploader-file-size</code></td><td><code>80px</code></td></tr><tr><td><code>--uploader-file-margin</code></td><td><code>0 10px 10px 0</code></td></tr><tr><td><code>--uploader-file-name-background</code></td><td><code>#f7f8fa</code></td></tr><tr><td><code>--uploader-file-name-color</code></td><td><code>#888</code></td></tr><tr><td><code>--uploader-file-name-font-size</code></td><td><code>12px</code></td></tr><tr><td><code>--uploader-file-name-padding</code></td><td><code>10px</code></td></tr><tr><td><code>--uploader-file-text-align</code></td><td><code>center</code></td></tr><tr><td><code>--uploader-file-close-background</code></td><td><code>rgba(0, 0, 0, 0.3)</code></td></tr><tr><td><code>--uploader-file-close-size</code></td><td><code>24px</code></td></tr><tr><td><code>--uploader-file-close-icon-font-size</code></td><td><code>14px</code></td></tr><tr><td><code>--uploader-file-close-icon-color</code></td><td><code>#fff</code></td></tr><tr><td><code>--uploader-file-cover-fit</code></td><td><code>cover</code></td></tr><tr><td><code>--uploader-file-cover-background</code></td><td><code>#f7f8fa</code></td></tr><tr><td><code>--uploader-preview-video-width</code></td><td><code>100vw</code></td></tr><tr><td><code>--uploader-preview-video-height</code></td><td><code>100vw</code></td></tr><tr><td><code>--uploader-file-indicator-height</code></td><td><code>4px</code></td></tr><tr><td><code>--uploader-file-indicator-normal-color</code></td><td><code>var(--color-disabled)</code></td></tr><tr><td><code>--uploader-file-indicator-success-color</code></td><td><code>var(--color-success)</code></td></tr><tr><td><code>--uploader-file-indicator-error-color</code></td><td><code>var(--color-danger)</code></td></tr><tr><td><code>--uploader-disabled-color</code></td><td><code>#ddd</code></td></tr><tr><td><code>--uploader-disabled-text-color</code></td><td><code>var(--color-text-disabled)</code></td></tr><tr><td><code>--uploader-loading-background</code></td><td><code>linear-gradient(90deg, hsla(0, 0%, 100%, 0), hsla(0, 0%, 100%, 0.3), hsla(0, 0%, 100%, 0))</code></td></tr></tbody></table></div>',8);function ls(ns,ds,cs,os,rs,ps){const a=d("var-site-code-example");return c(),o("div",i,[h,j,t("div",u,[g,e(a,null,{default:l(()=>[m]),_:1})]),t("div",f,[v,_,e(a,null,{default:l(()=>[b]),_:1})]),t("div",y,[w,k,e(a,null,{default:l(()=>[x]),_:1})]),t("div",F,[V,e(a,null,{default:l(()=>[z]),_:1})]),t("div",S,[T,R,e(a,null,{default:l(()=>[D]),_:1})]),t("div",C,[P,U,e(a,null,{default:l(()=>[A]),_:1})]),t("div",B,[M,e(a,null,{default:l(()=>[G]),_:1})]),t("div",W,[E,e(a,null,{default:l(()=>[N]),_:1})]),t("div",O,[I,L,e(a,null,{default:l(()=>[$]),_:1})]),t("div",q,[Y,e(a,null,{default:l(()=>[H]),_:1})]),t("div",J,[K,Q,e(a,null,{default:l(()=>[X]),_:1})]),t("div",Z,[ss,ts,e(a,null,{default:l(()=>[as]),_:1})]),es])}const hs=n(p,[["render",ls]]);export{hs as default};
