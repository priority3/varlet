import{_ as e,p as c,f as d,h as r,M as a,q as t,S as l,P as s,at as o}from"./vue-router.esm-bundler.786782d7.js";const h={components:{}},p={class:"varlet-site-doc"},j=a("h1",null,"\u591A\u5217\u9009\u62E9\u5668",-1),i=a("div",{class:"card"},[a("h3",null,"\u4ECB\u7ECD"),a("p",null,"\u63D0\u4F9B\u4E86\u51FD\u6570\u548C\u7EC4\u4EF6\u4E24\u79CD\u8C03\u7528\u65B9\u5F0F\u3002\u540C\u65F6\u652F\u6301\u7EA7\u8054\u6A21\u5F0F\uFF0C\u53EF\u4EE5\u5904\u7406\u591A\u7EA7\u8054\u52A8\u3002")],-1),m=a("h2",null,"\u51FD\u6570\u8C03\u7528",-1),u={class:"card"},b=a("h3",null,"\u5355\u5217\u9009\u62E9",-1),y=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"javascript"},[s(`
`),a("span",{class:"hljs-keyword"},"import"),s(" { Picker } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'@varlet/ui'"),s(`

`),a("span",{class:"hljs-keyword"},"const"),s(" columns = ["),a("span",{class:"hljs-built_in"},"Array"),s(".from({ "),a("span",{class:"hljs-attr"},"length"),s(": "),a("span",{class:"hljs-number"},"20"),s(" }).map("),a("span",{class:"hljs-function"},[s("("),a("span",{class:"hljs-params"},"_, index"),s(") =>")]),s(` index)]

`),a("span",{class:"hljs-keyword"},"const"),s(" picker = "),a("span",{class:"hljs-keyword"},"async"),s(` () => {
  `),a("span",{class:"hljs-keyword"},"await"),s(` Picker(columns)
}
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-button"),s(),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"primary"'),s(),a("span",{class:"hljs-attr"},"block"),s(" @"),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},'"picker"'),s(">")]),s("\u5355\u5217\u9009\u62E9"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-button"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),g={class:"card"},k=a("h3",null,"\u591A\u5217\u9009\u62E9",-1),w=a("p",null,[s("Picker \u4F20\u5165\u4E00\u4E2A\u4E8C\u7EF4\u6570\u7EC4 "),a("code",null,"columns"),s(", "),a("code",null,"columns"),s(" \u7684\u6BCF\u4E00\u9879\u5C31\u662F\u6BCF\u4E00\u5217\u7684\u5185\u5BB9\u3002 Picker \u8FD4\u56DE\u7528\u6237\u89E6\u53D1\u72B6\u6001\uFF0C\u9009\u62E9\u7684\u6587\u672C\uFF0C\u9009\u62E9\u7684\u4E0B\u6807\u3002")],-1),x=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"javascript"},[s(`
`),a("span",{class:"hljs-keyword"},"import"),s(" { Picker } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'@varlet/ui'"),s(`

`),a("span",{class:"hljs-keyword"},"const"),s(` columns = [
  `),a("span",{class:"hljs-built_in"},"Array"),s(".from({ "),a("span",{class:"hljs-attr"},"length"),s(": "),a("span",{class:"hljs-number"},"20"),s(" }).map("),a("span",{class:"hljs-function"},[s("("),a("span",{class:"hljs-params"},"_, index"),s(") =>")]),s(` index),
  `),a("span",{class:"hljs-built_in"},"Array"),s(".from({ "),a("span",{class:"hljs-attr"},"length"),s(": "),a("span",{class:"hljs-number"},"20"),s(" }).map("),a("span",{class:"hljs-function"},[s("("),a("span",{class:"hljs-params"},"_, index"),s(") =>")]),s(` index),
  `),a("span",{class:"hljs-built_in"},"Array"),s(".from({ "),a("span",{class:"hljs-attr"},"length"),s(": "),a("span",{class:"hljs-number"},"20"),s(" }).map("),a("span",{class:"hljs-function"},[s("("),a("span",{class:"hljs-params"},"_, index"),s(") =>")]),s(` index)
]

`),a("span",{class:"hljs-keyword"},"const"),s(" picker = "),a("span",{class:"hljs-keyword"},"async"),s(` () => {
  `),a("span",{class:"hljs-keyword"},"const"),s(" { state, texts, indexes } = "),a("span",{class:"hljs-keyword"},"await"),s(` Picker(columns)
}
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-button"),s(),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"primary"'),s(),a("span",{class:"hljs-attr"},"block"),s(" @"),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},'"picker"'),s(">")]),s("\u591A\u5217\u9009\u62E9"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-button"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),_={class:"card"},f=a("h3",null,"\u7EA7\u8054\u9009\u62E9",-1),v=a("p",null,[s("Picker \u4F20\u5165\u4E00\u4E2A "),a("code",null,"cascade"),s(" \u5C5E\u6027\u5F00\u542F\u7EA7\u8054\u6EDA\u52A8\u3002 \u7EC4\u4EF6\u5E93\u5185\u7F6E\u63D0\u4F9B\u4E86\u7701\u5E02\u533A\u4E09\u7EA7\u8054\u52A8\uFF0C\u5F15\u5165 "),a("code",null,"area.json"),s("\u3002")],-1),C=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"javascript"},[s(`
`),a("span",{class:"hljs-keyword"},"import"),s(" { Picker } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'@varlet/ui'"),s(`
`),a("span",{class:"hljs-keyword"},"import"),s(" columns "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'@varlet/ui/json/area.json'"),s(`

`),a("span",{class:"hljs-keyword"},"const"),s(" picker = "),a("span",{class:"hljs-keyword"},"async"),s(` () => {
  `),a("span",{class:"hljs-keyword"},"const"),s(" { state, texts, indexes } = "),a("span",{class:"hljs-keyword"},"await"),s(` Picker({
    `),a("span",{class:"hljs-attr"},"cascade"),s(": "),a("span",{class:"hljs-literal"},"true"),s(`,
    columns
  })
}
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-button"),s(),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"primary"'),s(),a("span",{class:"hljs-attr"},"block"),s(" @"),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},'"picker"'),s(">")]),s("\u7EA7\u8054\u9009\u62E9"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-button"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),D={class:"card"},P=a("h3",null,"\u6587\u672C\u683C\u5F0F\u5316",-1),Y=a("p",null,[s("Picker \u4F20\u5165\u4E00\u4E2A "),a("code",null,"textFormatter"),s(" \u5C5E\u6027\u53EF\u5BF9\u6587\u672C\u8FDB\u884C\u81EA\u5B9A\u4E49\u3002 "),a("code",null,"textFormatter"),s(" \u63A5\u53D7\u4E24\u4E2A\u53C2\u6570, \u7B2C\u4E00\u4E2A\u53C2\u6570 "),a("code",null,"text"),s(" \u662F\u5F53\u524D\u6587\u672C, \u7B2C\u4E8C\u4E2A\u53C2\u6570 "),a("code",null,"columnIndex"),s(" \u662F\u5F53\u524D\u6587\u672C\u6240\u5728\u5217\u7684\u4E0B\u6807\u3002 \u4E0B\u9762\u662F\u5E74\u6708\u65E5\u9009\u62E9\u7684\u6848\u4F8B\u3002")],-1),I=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"javascript"},[s(`
`),a("span",{class:"hljs-keyword"},"import"),s(" { Picker } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'@varlet/ui'"),s(`

`),a("span",{class:"hljs-keyword"},"const"),s(" genCounts = "),a("span",{class:"hljs-function"},[a("span",{class:"hljs-params"},"length"),s(" =>")]),s(),a("span",{class:"hljs-built_in"},"Array"),s(".from({ length }, "),a("span",{class:"hljs-function"},[s("("),a("span",{class:"hljs-params"},"_, index"),s(") =>")]),s(" index + "),a("span",{class:"hljs-number"},"1"),s(`)

`),a("span",{class:"hljs-keyword"},"const"),s(" months = genCounts("),a("span",{class:"hljs-number"},"12"),s(`)
`),a("span",{class:"hljs-keyword"},"const"),s(" leapYearFebruaryDates = genCounts("),a("span",{class:"hljs-number"},"29"),s(`)
`),a("span",{class:"hljs-keyword"},"const"),s(" februaryDates = genCounts("),a("span",{class:"hljs-number"},"28"),s(`)
`),a("span",{class:"hljs-keyword"},"const"),s(" oddMonthDates = genCounts("),a("span",{class:"hljs-number"},"31"),s(`)
`),a("span",{class:"hljs-keyword"},"const"),s(" evenMonthDates = genCounts("),a("span",{class:"hljs-number"},"30"),s(`)

`),a("span",{class:"hljs-keyword"},"const"),s(" isOddMonth = "),a("span",{class:"hljs-function"},[a("span",{class:"hljs-params"},"month"),s(" =>")]),s(" ["),a("span",{class:"hljs-number"},"1"),s(", "),a("span",{class:"hljs-number"},"3"),s(", "),a("span",{class:"hljs-number"},"5"),s(", "),a("span",{class:"hljs-number"},"7"),s(", "),a("span",{class:"hljs-number"},"8"),s(", "),a("span",{class:"hljs-number"},"10"),s(", "),a("span",{class:"hljs-number"},"12"),s(`].includes(month)

`),a("span",{class:"hljs-keyword"},"const"),s(" isLeapYear = "),a("span",{class:"hljs-function"},[a("span",{class:"hljs-params"},"year"),s(" =>")]),s(" (year % "),a("span",{class:"hljs-number"},"4"),s(" === "),a("span",{class:"hljs-number"},"0"),s(" && year % "),a("span",{class:"hljs-number"},"100"),s(" !== "),a("span",{class:"hljs-number"},"0"),s(") || year % "),a("span",{class:"hljs-number"},"400"),s(" === "),a("span",{class:"hljs-number"},"0"),s(`

`),a("span",{class:"hljs-keyword"},"const"),s(" genDates = "),a("span",{class:"hljs-function"},[s("("),a("span",{class:"hljs-params"},"year, month"),s(") =>")]),s(` {
  `),a("span",{class:"hljs-keyword"},"if"),s(" (isLeapYear(year) && month === "),a("span",{class:"hljs-number"},"2"),s(`) {
    `),a("span",{class:"hljs-keyword"},"return"),s(` leapYearFebruaryDates
  }

  `),a("span",{class:"hljs-keyword"},"if"),s(" (!isLeapYear(year) && month === "),a("span",{class:"hljs-number"},"2"),s(`) {
    `),a("span",{class:"hljs-keyword"},"return"),s(` februaryDates
  }

  `),a("span",{class:"hljs-keyword"},"if"),s(` (isOddMonth(month)) {
    `),a("span",{class:"hljs-keyword"},"return"),s(` oddMonthDates
  }

  `),a("span",{class:"hljs-keyword"},"return"),s(` evenMonthDates
}

`),a("span",{class:"hljs-keyword"},"const"),s(" genColumns = "),a("span",{class:"hljs-function"},[s("("),a("span",{class:"hljs-params"},"startYear, endYear"),s(") =>")]),s(` {
  `),a("span",{class:"hljs-keyword"},"const"),s(` columns = []
  
  `),a("span",{class:"hljs-keyword"},"for"),s(" ("),a("span",{class:"hljs-keyword"},"let"),s(` year = startYear; year < endYear; year++) {
    columns.push({
      `),a("span",{class:"hljs-attr"},"text"),s(`: year,
      `),a("span",{class:"hljs-attr"},"children"),s(": months.map("),a("span",{class:"hljs-function"},[s("("),a("span",{class:"hljs-params"},"month"),s(") =>")]),s(` {
        `),a("span",{class:"hljs-keyword"},"return"),s(` {
          `),a("span",{class:"hljs-attr"},"text"),s(`: month,
          `),a("span",{class:"hljs-attr"},"children"),s(": genDates(year, month).map("),a("span",{class:"hljs-function"},[a("span",{class:"hljs-params"},"date"),s(" =>")]),s(" ({ "),a("span",{class:"hljs-attr"},"text"),s(`: date }))
        }
      })
    })
  }

  `),a("span",{class:"hljs-keyword"},"return"),s(` columns
}

`),a("span",{class:"hljs-keyword"},"const"),s(" columns = genColumns("),a("span",{class:"hljs-number"},"1970"),s(", "),a("span",{class:"hljs-number"},"2100"),s(`)

`),a("span",{class:"hljs-keyword"},"const"),s(" textFormatter = "),a("span",{class:"hljs-function"},[s("("),a("span",{class:"hljs-params"},"text, columnIndex"),s(") =>")]),s(` {
  `),a("span",{class:"hljs-keyword"},"if"),s(" (columnIndex === "),a("span",{class:"hljs-number"},"0"),s(") "),a("span",{class:"hljs-keyword"},"return"),s(),a("span",{class:"hljs-string"},[s("`"),a("span",{class:"hljs-subst"},"${text}"),s("\u5E74`")]),s(`
  `),a("span",{class:"hljs-keyword"},"else"),s(),a("span",{class:"hljs-keyword"},"if"),s(" (columnIndex === "),a("span",{class:"hljs-number"},"1"),s(") "),a("span",{class:"hljs-keyword"},"return"),s(),a("span",{class:"hljs-string"},[s("`"),a("span",{class:"hljs-subst"},"${text}"),s("\u6708`")]),s(`
  `),a("span",{class:"hljs-keyword"},"else"),s(),a("span",{class:"hljs-keyword"},"if"),s(" (columnIndex === "),a("span",{class:"hljs-number"},"2"),s(") "),a("span",{class:"hljs-keyword"},"return"),s(),a("span",{class:"hljs-string"},[s("`"),a("span",{class:"hljs-subst"},"${text}"),s("\u65E5`")]),s(`
}

`),a("span",{class:"hljs-keyword"},"const"),s(" picker = "),a("span",{class:"hljs-keyword"},"async"),s(` () => {
  `),a("span",{class:"hljs-keyword"},"const"),s(" { state, texts, indexes } = "),a("span",{class:"hljs-keyword"},"await"),s(` Picker({
    `),a("span",{class:"hljs-attr"},"cascade"),s(": "),a("span",{class:"hljs-literal"},"true"),s(`,
    columns,
    textFormatter,
  })
}
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-button"),s(),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"primary"'),s(),a("span",{class:"hljs-attr"},"block"),s(" @"),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},'"picker"'),s(">")]),s("\u6587\u672C\u683C\u5F0F\u5316"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-button"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),T={class:"card"},M=a("h3",null,"\u503C\u6620\u5C04",-1),A=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"javascript"},[s(`
`),a("span",{class:"hljs-keyword"},"import"),s(" { Picker, Snackbar } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'@varlet/ui'"),s(`

`),a("span",{class:"hljs-keyword"},"const"),s(` rawColumns = [
  [
    { `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'\u7070\u70EC\u4E4B\u7075'"),s(", "),a("span",{class:"hljs-attr"},"id"),s(": "),a("span",{class:"hljs-number"},"1"),s(` },
    { `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'\u98CE\u66B4\u4E4B\u7075'"),s(", "),a("span",{class:"hljs-attr"},"id"),s(": "),a("span",{class:"hljs-number"},"2"),s(` },
    { `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'\u5927\u5730\u4E4B\u7075'"),s(", "),a("span",{class:"hljs-attr"},"id"),s(": "),a("span",{class:"hljs-number"},"3"),s(` },
    { `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'\u865A\u7A7A\u4E4B\u7075'"),s(", "),a("span",{class:"hljs-attr"},"id"),s(": "),a("span",{class:"hljs-number"},"4"),s(` },
  ],
  [
    { `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'\u7070\u70EC\u4E4B\u7075'"),s(", "),a("span",{class:"hljs-attr"},"id"),s(": "),a("span",{class:"hljs-number"},"1"),s(` },
    { `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'\u98CE\u66B4\u4E4B\u7075'"),s(", "),a("span",{class:"hljs-attr"},"id"),s(": "),a("span",{class:"hljs-number"},"2"),s(` },
    { `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'\u5927\u5730\u4E4B\u7075'"),s(", "),a("span",{class:"hljs-attr"},"id"),s(": "),a("span",{class:"hljs-number"},"3"),s(` },
    { `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'\u865A\u7A7A\u4E4B\u7075'"),s(", "),a("span",{class:"hljs-attr"},"id"),s(": "),a("span",{class:"hljs-number"},"4"),s(` },
  ],
  [
    { `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'\u7070\u70EC\u4E4B\u7075'"),s(", "),a("span",{class:"hljs-attr"},"id"),s(": "),a("span",{class:"hljs-number"},"1"),s(` },
    { `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'\u98CE\u66B4\u4E4B\u7075'"),s(", "),a("span",{class:"hljs-attr"},"id"),s(": "),a("span",{class:"hljs-number"},"2"),s(` },
    { `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'\u5927\u5730\u4E4B\u7075'"),s(", "),a("span",{class:"hljs-attr"},"id"),s(": "),a("span",{class:"hljs-number"},"3"),s(` },
    { `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'\u865A\u7A7A\u4E4B\u7075'"),s(", "),a("span",{class:"hljs-attr"},"id"),s(": "),a("span",{class:"hljs-number"},"4"),s(` },
  ]
]

`),a("span",{class:"hljs-keyword"},"const"),s(" normalizedColumns = rawColumns.map("),a("span",{class:"hljs-function"},[s("("),a("span",{class:"hljs-params"},"column"),s(") =>")]),s(" column.map("),a("span",{class:"hljs-function"},[a("span",{class:"hljs-params"},"option"),s(" =>")]),s(` option.label))

`),a("span",{class:"hljs-keyword"},"const"),s(" handleChange = "),a("span",{class:"hljs-function"},[s("("),a("span",{class:"hljs-params"},"_, [i1, i2, i3]"),s(") =>")]),s(` {
  `),a("span",{class:"hljs-keyword"},"const"),s(` [c1, c2, c3] = rawColumns
  `),a("span",{class:"hljs-keyword"},"const"),s(` ids = [c1[i1].id, c2[i2].id, c3[i3].id]
  Snackbar(ids.toString())
}

`),a("span",{class:"hljs-keyword"},"const"),s(" picker = "),a("span",{class:"hljs-keyword"},"async"),s(` () => {
  `),a("span",{class:"hljs-keyword"},"const"),s(" { state, texts, indexes } = "),a("span",{class:"hljs-keyword"},"await"),s(` Picker({
    `),a("span",{class:"hljs-attr"},"columns"),s(`: normalizedColumns,
    `),a("span",{class:"hljs-attr"},"onChange"),s(`: handleChange
  })
}
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-button"),s(),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"primary"'),s(),a("span",{class:"hljs-attr"},"block"),s(" @"),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},'"picker"'),s(">")]),s("\u503C\u7684\u6620\u5C04"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-button"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),F=a("h2",null,"\u7EC4\u4EF6\u8C03\u7528",-1),$={class:"card"},N=a("h3",null,"\u5355\u5217\u9009\u62E9",-1),S=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"javascript"},[s(`
`),a("span",{class:"hljs-keyword"},"import"),s(" { ref } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`

`),a("span",{class:"hljs-keyword"},"const"),s(" columns = ref(["),a("span",{class:"hljs-built_in"},"Array"),s(".from({ "),a("span",{class:"hljs-attr"},"length"),s(": "),a("span",{class:"hljs-number"},"20"),s(" }).map("),a("span",{class:"hljs-function"},[s("("),a("span",{class:"hljs-params"},"_, index"),s(") =>")]),s(` index)])
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-picker"),s(),a("span",{class:"hljs-attr"},":columns"),s("="),a("span",{class:"hljs-string"},'"columns"'),s(" />")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),z={class:"card"},B=a("h3",null,"\u591A\u5217\u9009\u62E9",-1),O=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"javascript"},[s(`
`),a("span",{class:"hljs-keyword"},"import"),s(" { ref } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`

`),a("span",{class:"hljs-keyword"},"const"),s(` columns = ref([
  `),a("span",{class:"hljs-built_in"},"Array"),s(".from({ "),a("span",{class:"hljs-attr"},"length"),s(": "),a("span",{class:"hljs-number"},"20"),s(" }).map("),a("span",{class:"hljs-function"},[s("("),a("span",{class:"hljs-params"},"_, index"),s(") =>")]),s(` index),
  `),a("span",{class:"hljs-built_in"},"Array"),s(".from({ "),a("span",{class:"hljs-attr"},"length"),s(": "),a("span",{class:"hljs-number"},"20"),s(" }).map("),a("span",{class:"hljs-function"},[s("("),a("span",{class:"hljs-params"},"_, index"),s(") =>")]),s(` index),
  `),a("span",{class:"hljs-built_in"},"Array"),s(".from({ "),a("span",{class:"hljs-attr"},"length"),s(": "),a("span",{class:"hljs-number"},"20"),s(" }).map("),a("span",{class:"hljs-function"},[s("("),a("span",{class:"hljs-params"},"_, index"),s(") =>")]),s(` index)
])
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-picker"),s(),a("span",{class:"hljs-attr"},":columns"),s("="),a("span",{class:"hljs-string"},'"columns"'),s(" />")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),L={class:"card"},V=a("h3",null,"\u7EA7\u8054\u9009\u62E9",-1),q=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"javascript"},[s(`
`),a("span",{class:"hljs-keyword"},"import"),s(" { ref } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`
`),a("span",{class:"hljs-keyword"},"import"),s(" area "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'@varlet/ui/json/area.json'"),s(`

`),a("span",{class:"hljs-keyword"},"const"),s(` columns = ref(area)
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-picker"),s(),a("span",{class:"hljs-attr"},"cascade"),s(),a("span",{class:"hljs-attr"},":columns"),s("="),a("span",{class:"hljs-string"},'"columns"'),s(" />")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),E={class:"card"},H=a("h3",null,"\u6587\u672C\u683C\u5F0F\u5316",-1),K=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"javascript"},[s(`
`),a("span",{class:"hljs-keyword"},"import"),s(" { ref } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`

`),a("span",{class:"hljs-keyword"},"const"),s(" genCounts = "),a("span",{class:"hljs-function"},[a("span",{class:"hljs-params"},"length"),s(" =>")]),s(),a("span",{class:"hljs-built_in"},"Array"),s(".from({ length }, "),a("span",{class:"hljs-function"},[s("("),a("span",{class:"hljs-params"},"_, index"),s(") =>")]),s(" index + "),a("span",{class:"hljs-number"},"1"),s(`)

`),a("span",{class:"hljs-keyword"},"const"),s(" months = genCounts("),a("span",{class:"hljs-number"},"12"),s(`)
`),a("span",{class:"hljs-keyword"},"const"),s(" leapYearFebruaryDates = genCounts("),a("span",{class:"hljs-number"},"29"),s(`)
`),a("span",{class:"hljs-keyword"},"const"),s(" februaryDates = genCounts("),a("span",{class:"hljs-number"},"28"),s(`)
`),a("span",{class:"hljs-keyword"},"const"),s(" oddMonthDates = genCounts("),a("span",{class:"hljs-number"},"31"),s(`)
`),a("span",{class:"hljs-keyword"},"const"),s(" evenMonthDates = genCounts("),a("span",{class:"hljs-number"},"30"),s(`)

`),a("span",{class:"hljs-keyword"},"const"),s(" isOddMonth = "),a("span",{class:"hljs-function"},[a("span",{class:"hljs-params"},"month"),s(" =>")]),s(" ["),a("span",{class:"hljs-number"},"1"),s(", "),a("span",{class:"hljs-number"},"3"),s(", "),a("span",{class:"hljs-number"},"5"),s(", "),a("span",{class:"hljs-number"},"7"),s(", "),a("span",{class:"hljs-number"},"8"),s(", "),a("span",{class:"hljs-number"},"10"),s(", "),a("span",{class:"hljs-number"},"12"),s(`].includes(month)

`),a("span",{class:"hljs-keyword"},"const"),s(" isLeapYear = "),a("span",{class:"hljs-function"},[a("span",{class:"hljs-params"},"year"),s(" =>")]),s(" (year % "),a("span",{class:"hljs-number"},"4"),s(" === "),a("span",{class:"hljs-number"},"0"),s(" && year % "),a("span",{class:"hljs-number"},"100"),s(" !== "),a("span",{class:"hljs-number"},"0"),s(") || year % "),a("span",{class:"hljs-number"},"400"),s(" === "),a("span",{class:"hljs-number"},"0"),s(`

`),a("span",{class:"hljs-keyword"},"const"),s(" genDates = "),a("span",{class:"hljs-function"},[s("("),a("span",{class:"hljs-params"},"year, month"),s(") =>")]),s(` {
  `),a("span",{class:"hljs-keyword"},"if"),s(" (isLeapYear(year) && month === "),a("span",{class:"hljs-number"},"2"),s(`) {
    `),a("span",{class:"hljs-keyword"},"return"),s(` leapYearFebruaryDates
  }

  `),a("span",{class:"hljs-keyword"},"if"),s(" (!isLeapYear(year) && month === "),a("span",{class:"hljs-number"},"2"),s(`) {
    `),a("span",{class:"hljs-keyword"},"return"),s(` februaryDates
  }

  `),a("span",{class:"hljs-keyword"},"if"),s(` (isOddMonth(month)) {
    `),a("span",{class:"hljs-keyword"},"return"),s(` oddMonthDates
  }

  `),a("span",{class:"hljs-keyword"},"return"),s(` evenMonthDates
}

`),a("span",{class:"hljs-keyword"},"const"),s(" genColumns = "),a("span",{class:"hljs-function"},[s("("),a("span",{class:"hljs-params"},"startYear, endYear"),s(") =>")]),s(` {   
  `),a("span",{class:"hljs-keyword"},"const"),s(` columns = []

  `),a("span",{class:"hljs-keyword"},"for"),s(" ("),a("span",{class:"hljs-keyword"},"let"),s(` year = startYear; year < endYear; year++) {
    columns.push({
      `),a("span",{class:"hljs-attr"},"text"),s(`: year,
      `),a("span",{class:"hljs-attr"},"children"),s(": months.map("),a("span",{class:"hljs-function"},[s("("),a("span",{class:"hljs-params"},"month"),s(") =>")]),s(` {
        `),a("span",{class:"hljs-keyword"},"return"),s(` {
          `),a("span",{class:"hljs-attr"},"text"),s(`: month,
          `),a("span",{class:"hljs-attr"},"children"),s(": genDates(year, month).map("),a("span",{class:"hljs-function"},[a("span",{class:"hljs-params"},"date"),s(" =>")]),s(" ({ "),a("span",{class:"hljs-attr"},"text"),s(`: date }))
        }
      })
    })
  }

  `),a("span",{class:"hljs-keyword"},"return"),s(` columns
}

`),a("span",{class:"hljs-keyword"},"const"),s(" columns = ref(genColumns("),a("span",{class:"hljs-number"},"1970"),s(", "),a("span",{class:"hljs-number"},"2100"),s(`))

`),a("span",{class:"hljs-keyword"},"const"),s(" textFormatter = "),a("span",{class:"hljs-function"},[s("("),a("span",{class:"hljs-params"},"text, columnIndex"),s(") =>")]),s(` {
  `),a("span",{class:"hljs-keyword"},"if"),s(" (columnIndex === "),a("span",{class:"hljs-number"},"0"),s(") "),a("span",{class:"hljs-keyword"},"return"),s(),a("span",{class:"hljs-string"},[s("`"),a("span",{class:"hljs-subst"},"${text}"),s("\u5E74`")]),s(`
  `),a("span",{class:"hljs-keyword"},"else"),s(),a("span",{class:"hljs-keyword"},"if"),s(" (columnIndex === "),a("span",{class:"hljs-number"},"1"),s(") "),a("span",{class:"hljs-keyword"},"return"),s(),a("span",{class:"hljs-string"},[s("`"),a("span",{class:"hljs-subst"},"${text}"),s("\u6708`")]),s(`
  `),a("span",{class:"hljs-keyword"},"else"),s(),a("span",{class:"hljs-keyword"},"if"),s(" (columnIndex === "),a("span",{class:"hljs-number"},"2"),s(") "),a("span",{class:"hljs-keyword"},"return"),s(),a("span",{class:"hljs-string"},[s("`"),a("span",{class:"hljs-subst"},"${text}"),s("\u65E5`")]),s(`
}
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-picker"),s(),a("span",{class:"hljs-attr"},"cascade"),s(),a("span",{class:"hljs-attr"},":columns"),s("="),a("span",{class:"hljs-string"},'"columns"'),s(),a("span",{class:"hljs-attr"},":text-formatter"),s("="),a("span",{class:"hljs-string"},'"textFormatter"'),s(" />")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),G={class:"card"},J=a("h3",null,"\u503C\u7684\u6620\u5C04",-1),Q=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"javascript"},[s(`
`),a("span",{class:"hljs-keyword"},"import"),s(" { ref } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`
`),a("span",{class:"hljs-keyword"},"import"),s(" { Snackbar } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'@varlet/ui'"),s(`

`),a("span",{class:"hljs-keyword"},"const"),s(` rawColumns = [
  [
    { `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'\u7070\u70EC\u4E4B\u7075'"),s(", "),a("span",{class:"hljs-attr"},"id"),s(": "),a("span",{class:"hljs-number"},"1"),s(` },
    { `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'\u98CE\u66B4\u4E4B\u7075'"),s(", "),a("span",{class:"hljs-attr"},"id"),s(": "),a("span",{class:"hljs-number"},"2"),s(` },
    { `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'\u5927\u5730\u4E4B\u7075'"),s(", "),a("span",{class:"hljs-attr"},"id"),s(": "),a("span",{class:"hljs-number"},"3"),s(` },
    { `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'\u865A\u7A7A\u4E4B\u7075'"),s(", "),a("span",{class:"hljs-attr"},"id"),s(": "),a("span",{class:"hljs-number"},"4"),s(` },
  ],
  [
    { `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'\u7070\u70EC\u4E4B\u7075'"),s(", "),a("span",{class:"hljs-attr"},"id"),s(": "),a("span",{class:"hljs-number"},"1"),s(` },
    { `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'\u98CE\u66B4\u4E4B\u7075'"),s(", "),a("span",{class:"hljs-attr"},"id"),s(": "),a("span",{class:"hljs-number"},"2"),s(` },
    { `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'\u5927\u5730\u4E4B\u7075'"),s(", "),a("span",{class:"hljs-attr"},"id"),s(": "),a("span",{class:"hljs-number"},"3"),s(` },
    { `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'\u865A\u7A7A\u4E4B\u7075'"),s(", "),a("span",{class:"hljs-attr"},"id"),s(": "),a("span",{class:"hljs-number"},"4"),s(` },
  ],
  [
    { `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'\u7070\u70EC\u4E4B\u7075'"),s(", "),a("span",{class:"hljs-attr"},"id"),s(": "),a("span",{class:"hljs-number"},"1"),s(` },
    { `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'\u98CE\u66B4\u4E4B\u7075'"),s(", "),a("span",{class:"hljs-attr"},"id"),s(": "),a("span",{class:"hljs-number"},"2"),s(` },
    { `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'\u5927\u5730\u4E4B\u7075'"),s(", "),a("span",{class:"hljs-attr"},"id"),s(": "),a("span",{class:"hljs-number"},"3"),s(` },
    { `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'\u865A\u7A7A\u4E4B\u7075'"),s(", "),a("span",{class:"hljs-attr"},"id"),s(": "),a("span",{class:"hljs-number"},"4"),s(` },
  ]
]

`),a("span",{class:"hljs-keyword"},"const"),s(" normalizedColumns = rawColumns.map("),a("span",{class:"hljs-function"},[a("span",{class:"hljs-params"},"column"),s(" =>")]),s(" column.map("),a("span",{class:"hljs-function"},[a("span",{class:"hljs-params"},"option"),s(" =>")]),s(` option.label))

`),a("span",{class:"hljs-keyword"},"const"),s(` columns = ref(normalizedColumns)

`),a("span",{class:"hljs-keyword"},"const"),s(" handleChange = "),a("span",{class:"hljs-function"},[s("("),a("span",{class:"hljs-params"},"_, [i1, i2, i3]"),s(") =>")]),s(` {
  `),a("span",{class:"hljs-keyword"},"const"),s(` [c1, c2, c3] = rawColumns
  `),a("span",{class:"hljs-keyword"},"const"),s(` ids = [c1[i1].id, c2[i2].id, c3[i3].id]
  Snackbar(ids.toString())
}
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-picker"),s(),a("span",{class:"hljs-attr"},":columns"),s("="),a("span",{class:"hljs-string"},'"columns"'),s(" @"),a("span",{class:"hljs-attr"},"change"),s("="),a("span",{class:"hljs-string"},'"handleChange"'),s(" />")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),R=o('<h2>API</h2><div class="card"><h3>\u5C5E\u6027</h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td><code>columns</code></td><td>\u5217\u5185\u5BB9</td><td><em>NormalColumn[] | CascadeColumn[] | Texts</em></td><td><code>[]</code></td></tr><tr><td><code>title</code></td><td>\u6807\u9898</td><td><em>string</em></td><td><code>\u63D0\u793A</code></td></tr><tr><td><code>text-key</code></td><td>\u6587\u672C\u7684\u5C5E\u6027 key</td><td><em>string</em></td><td><code>text</code></td></tr><tr><td><code>toolbar</code></td><td>\u662F\u5426\u663E\u793A\u4E0A\u65B9\u5DE5\u5177\u680F</td><td><em>string</em></td><td><code>true</code></td></tr><tr><td><code>cascade</code></td><td>\u662F\u5426\u5F00\u542F\u7EA7\u8054\u6A21\u5F0F</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>cascade-initial-indexes</code></td><td>\u7EA7\u8054\u6A21\u5F0F\u7684\u521D\u59CB\u5316\u7D22\u5F15\u5217\u8868</td><td><em>number[]</em></td><td><code>-</code></td></tr><tr><td><code>text-formatter</code></td><td>\u6587\u672C\u683C\u5F0F\u5316</td><td><em>(text: any, columnIndex: number) =&gt; any</em></td><td><code>text =&gt; text</code></td></tr><tr><td><code>option-height</code></td><td>\u9009\u9879\u7684\u9AD8\u5EA6(px rem)</td><td><em>string | number</em></td><td><code>44</code></td></tr><tr><td><code>option-count</code></td><td>\u53EF\u89C1\u7684\u9009\u9879\u4E2A\u6570</td><td><em>string | number</em></td><td><code>6</code></td></tr><tr><td><code>confirm-button-text</code></td><td>\u786E\u8BA4\u6309\u94AE\u6587\u5B57</td><td><em>string</em></td><td><code>\u786E\u8BA4</code></td></tr><tr><td><code>cancel-button-text</code></td><td>\u53D6\u6D88\u6309\u94AE\u6587\u5B57</td><td><em>string</em></td><td><code>\u53D6\u6D88</code></td></tr><tr><td><code>confirm-button-text-color</code></td><td>\u786E\u8BA4\u6309\u94AE\u6587\u5B57\u989C\u8272</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>cancel-button-text-color</code></td><td>\u53D6\u6D88\u6309\u94AE\u6587\u5B57\u989C\u8272</td><td><em>string</em></td><td><code>-</code></td></tr></tbody></table></div><div class="card"><h3>Picker Options</h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td><code>columns</code></td><td>\u5217\u5185\u5BB9</td><td><em>NormalColumn[] | CascadeColumn[] | Texts</em></td><td><code>[]</code></td></tr><tr><td><code>title</code></td><td>\u6807\u9898</td><td><em>string</em></td><td><code>\u63D0\u793A</code></td></tr><tr><td><code>textKey</code></td><td>\u6587\u672C\u7684\u5C5E\u6027 key</td><td><em>string</em></td><td><code>text</code></td></tr><tr><td><code>toolbar</code></td><td>\u662F\u5426\u663E\u793A\u4E0A\u65B9\u5DE5\u5177\u680F</td><td><em>string</em></td><td><code>true</code></td></tr><tr><td><code>cascade</code></td><td>\u662F\u5426\u5F00\u542F\u7EA7\u8054\u6A21\u5F0F</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>cascadeInitialIndexes</code></td><td>\u7EA7\u8054\u6A21\u5F0F\u7684\u521D\u59CB\u5316\u7D22\u5F15\u5217\u8868</td><td><em>number[]</em></td><td><code>-</code></td></tr><tr><td><code>textFormatter</code></td><td>\u6587\u672C\u683C\u5F0F\u5316</td><td><em>(text: any, columnIndex: number) =&gt; any</em></td><td><code>text =&gt; text</code></td></tr><tr><td><code>optionHeight</code></td><td>\u9009\u9879\u7684\u9AD8\u5EA6</td><td><em>string | number</em></td><td><code>44</code></td></tr><tr><td><code>optionCount</code></td><td>\u53EF\u89C1\u7684\u9009\u9879\u4E2A\u6570</td><td><em>string | number</em></td><td><code>6</code></td></tr><tr><td><code>confirmButtonText</code></td><td>\u786E\u8BA4\u6309\u94AE\u6587\u5B57</td><td><em>string</em></td><td><code>\u786E\u8BA4</code></td></tr><tr><td><code>cancelButtonText</code></td><td>\u53D6\u6D88\u6309\u94AE\u6587\u5B57</td><td><em>string</em></td><td><code>\u53D6\u6D88</code></td></tr><tr><td><code>confirmButtonTextColor</code></td><td>\u786E\u8BA4\u6309\u94AE\u6587\u5B57\u989C\u8272</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>cancelButtonTextColor</code></td><td>\u53D6\u6D88\u6309\u94AE\u6587\u5B57\u989C\u8272</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>onOpen</code></td><td>\u5F39\u51FA\u5C42\u5F00\u542F\u56DE\u8C03</td><td><em>() =&gt; void</em></td><td><code>-</code></td></tr><tr><td><code>onOpened</code></td><td>\u5F39\u51FA\u5C42\u5F00\u542F\u52A8\u753B\u7ED3\u675F\u56DE\u8C03</td><td><em>() =&gt; void</em></td><td><code>-</code></td></tr><tr><td><code>onClose</code></td><td>\u5F39\u51FA\u5C42\u5173\u95ED\u56DE\u8C03</td><td><em>() =&gt; void</em></td><td><code>-</code></td></tr><tr><td><code>onClosed</code></td><td>\u5173\u95ED\u5F39\u51FA\u5C42\u52A8\u753B\u7ED3\u675F\u65F6\u56DE\u8C03</td><td><em>(texts: Texts, indexes: number[]) =&gt; void</em></td><td><code>() =&gt; void</code></td></tr><tr><td><code>onChange</code></td><td>\u9009\u62E9\u5185\u5BB9\u53D8\u5316\u65F6\u56DE\u8C03</td><td><em>(texts: Texts, indexes: number[]) =&gt; void</em></td><td><code>() =&gt; void</code></td></tr><tr><td><code>onConfirm</code></td><td>\u70B9\u51FB\u786E\u8BA4\u6309\u94AE\u65F6\u89E6\u53D1</td><td><em>(texts: Texts, indexes: number[]) =&gt; void</em></td><td><code>() =&gt; void</code></td></tr><tr><td><code>onCancel</code></td><td>\u70B9\u51FB\u53D6\u6D88\u6309\u94AE\u65F6\u89E6\u53D1</td><td><em>(texts: Texts, indexes: number[]) =&gt; void</em></td><td><code>() =&gt; void</code></td></tr></tbody></table></div><div class="card"><h3>Picker NormalColumn</h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td><code>texts</code></td><td>\u6587\u672C\u6570\u7EC4</td><td><em>Texts</em></td><td><code>-</code></td></tr><tr><td><code>initialIndex</code></td><td>\u521D\u59CB\u5316\u7D22\u5F15</td><td><em>number</em></td><td><code>0</code></td></tr></tbody></table></div><div class="card"><h3>Picker CascadeColumn</h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td><code>text</code></td><td>\u6BCF\u4E00\u884C\u7684\u6587\u672C</td><td><em>any</em></td><td><code>-</code></td></tr><tr><td><code>children</code></td><td>\u5B50\u7EA7</td><td><em>CascadeColumn[]</em></td><td><code>-</code></td></tr></tbody></table></div><div class="card"><h3>\u65B9\u6CD5</h3><table><thead><tr><th>\u65B9\u6CD5\u540D</th><th>\u8BF4\u660E</th><th>\u53C2\u6570</th><th>\u8FD4\u56DE\u503C</th></tr></thead><tbody><tr><td><code>confirm</code></td><td>\u7ACB\u523B\u505C\u6B62\u6EDA\u52A8\u5E76\u89E6\u53D1 confirm \u4E8B\u4EF6</td><td><code>-</code></td><td><code>-</code></td></tr><tr><td><code>cancel</code></td><td>\u7ACB\u523B\u505C\u6B62\u6EDA\u52A8\u5E76\u89E6\u53D1 cancel \u4E8B\u4EF6</td><td><code>-</code></td><td><code>-</code></td></tr></tbody></table></div><div class="card"><h3>\u4E8B\u4EF6</h3><table><thead><tr><th>\u4E8B\u4EF6\u540D</th><th>\u8BF4\u660E</th><th>\u53C2\u6570</th></tr></thead><tbody><tr><td><code>change</code></td><td>\u9009\u62E9\u5185\u5BB9\u53D8\u5316\u65F6\u89E6\u53D1</td><td><code>texts: Texts</code> \u9009\u62E9\u7684\u5185\u5BB9\u6570\u7EC4 <br> <code>indexes: number[]</code> \u9009\u62E9\u7684\u4E0B\u6807\u6570\u7EC4</td></tr><tr><td><code>cancel</code></td><td>\u70B9\u51FB\u53D6\u6D88\u6309\u94AE\u65F6\u89E6\u53D1</td><td><code>texts: Texts</code> \u9009\u62E9\u7684\u5185\u5BB9\u6570\u7EC4 <br> <code>indexes: number[]</code> \u9009\u62E9\u7684\u4E0B\u6807\u6570\u7EC4</td></tr><tr><td><code>confirm</code></td><td>\u70B9\u51FB\u786E\u8BA4\u6309\u94AE\u65F6\u89E6\u53D1</td><td><code>texts: Texts</code> \u9009\u62E9\u7684\u5185\u5BB9\u6570\u7EC4 <br> <code>indexes: number[]</code> \u9009\u62E9\u7684\u4E0B\u6807\u6570\u7EC4</td></tr></tbody></table></div><div class="card"><h3>\u63D2\u69FD</h3><table><thead><tr><th>\u63D2\u69FD\u540D</th><th>\u8BF4\u660E</th><th>\u53C2\u6570</th></tr></thead><tbody><tr><td><code>cancel</code></td><td>\u53D6\u6D88\u6309\u94AE\u5185\u5BB9</td><td><code>-</code></td></tr><tr><td><code>title</code></td><td>\u6807\u9898\u5185\u5BB9</td><td><code>-</code></td></tr><tr><td><code>confirm</code></td><td>\u786E\u8BA4\u6309\u94AE\u5185\u5BB9</td><td><code>-</code></td></tr></tbody></table></div><div class="card"><h3>\u6837\u5F0F\u53D8\u91CF</h3><p>\u4EE5\u4E0B\u4E3A\u7EC4\u4EF6\u4F7F\u7528\u7684 css \u53D8\u91CF\uFF0C\u53EF\u4EE5\u4F7F\u7528 <a href="#/zh-CN/style-provider">StyleProvider \u7EC4\u4EF6</a> \u8FDB\u884C\u6837\u5F0F\u5B9A\u5236</p><table><thead><tr><th>\u53D8\u91CF\u540D</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td><code>--picker-background</code></td><td><code>#fff</code></td></tr><tr><td><code>--picker-toolbar-height</code></td><td><code>44px</code></td></tr><tr><td><code>--picker-confirm-button-text-color</code></td><td><code>var(--color-primary)</code></td></tr><tr><td><code>--picker-cancel-button-text-color</code></td><td><code>#888</code></td></tr><tr><td><code>--picker-picked-border</code></td><td><code>1px solid rgba(0, 0, 0, 0.12)</code></td></tr><tr><td><code>--picker-title-font-size</code></td><td><code>16px</code></td></tr><tr><td><code>--picker-toolbar-padding</code></td><td><code>0 4px</code></td></tr><tr><td><code>--picker-mask-background-image</code></td><td><code>linear-gradient(180deg, hsla(0, 0%, 100%, 0.9), hsla(0, 0%, 100%, 0.4)),linear-gradient(0deg, hsla(0, 0%, 100%, 0.9), hsla(0, 0%, 100%, 0.4))</code></td></tr></tbody></table></div>',9);function U(W,X,Z,ss,as,ns){const n=c("var-site-code-example");return d(),r("div",p,[j,i,m,a("div",u,[b,t(n,null,{default:l(()=>[y]),_:1})]),a("div",g,[k,w,t(n,null,{default:l(()=>[x]),_:1})]),a("div",_,[f,v,t(n,null,{default:l(()=>[C]),_:1})]),a("div",D,[P,Y,t(n,null,{default:l(()=>[I]),_:1})]),a("div",T,[M,t(n,null,{default:l(()=>[A]),_:1})]),F,a("div",$,[N,t(n,null,{default:l(()=>[S]),_:1})]),a("div",z,[B,t(n,null,{default:l(()=>[O]),_:1})]),a("div",L,[V,t(n,null,{default:l(()=>[q]),_:1})]),a("div",E,[H,t(n,null,{default:l(()=>[K]),_:1})]),a("div",G,[J,t(n,null,{default:l(()=>[Q]),_:1})]),R])}const ls=e(h,[["render",U]]);export{ls as default};
