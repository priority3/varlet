import{_ as e,p as c,f as r,h as d,M as a,q as n,S as l,P as s,at as o}from"./vue-router.esm-bundler.786782d7.js";const p={components:{}},h={class:"varlet-site-doc"},i=a("h1",null,"Picker",-1),j=a("div",{class:"card"},[a("h3",null,"Intro"),a("p",null,"Provides two kinds of function and component call mode support cascading mode at the same time, can handle multilevel linkage.")],-1),m=a("h2",null,"Function Call",-1),u={class:"card"},b=a("h3",null,"Single-column Picker",-1),g=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"javascript"},[s(`
`),a("span",{class:"hljs-keyword"},"import"),s(" { Picker } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'@varlet/ui'"),s(`

`),a("span",{class:"hljs-keyword"},"const"),s(" columns = ["),a("span",{class:"hljs-built_in"},"Array"),s(".from({ "),a("span",{class:"hljs-attr"},"length"),s(": "),a("span",{class:"hljs-number"},"20"),s(" }).map("),a("span",{class:"hljs-function"},[s("("),a("span",{class:"hljs-params"},"_, index"),s(") =>")]),s(` index)]

`),a("span",{class:"hljs-keyword"},"const"),s(" picker = "),a("span",{class:"hljs-keyword"},"async"),s(` () => {
  `),a("span",{class:"hljs-keyword"},"await"),s(` Picker(columns)
}
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-button"),s(),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"primary"'),s(),a("span",{class:"hljs-attr"},"block"),s(" @"),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},'"picker"'),s(">")]),s("Single Column Picker"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-button"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),y={class:"card"},k=a("h3",null,"Multi-column Picker",-1),f=a("p",null,"A two-dimensional array is passed in, and each entry of the array is the contents of each column. Returns the user triggered status, selected text, and selected index.",-1),x=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"javascript"},[s(`
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
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-button"),s(),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"primary"'),s(),a("span",{class:"hljs-attr"},"block"),s(" @"),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},'"picker"'),s(">")]),s("Multiple Column Picker"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-button"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),w={class:"card"},_=a("h3",null,"Cascade Picker",-1),v=a("p",null,[s("Passing in a "),a("code",null,"cascade"),s(" attribute starts cascading. Built-in component library provides a three-level linkage between provinces and municipalities, import "),a("code",null,"area.json"),s(".")],-1),C=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"javascript"},[s(`
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
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-button"),s(),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"primary"'),s(),a("span",{class:"hljs-attr"},"block"),s(" @"),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},'"picker"'),s(">")]),s("Cascade Column Picker"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-button"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),S={class:"card"},P=a("h3",null,"Text Formatter",-1),T=a("p",null,[s("Picker passes in a "),a("code",null,"textFormatter"),s(" attribute to customize the text. "),a("code",null,"textFormatter"),s(" accepts two parameters. The first parameter "),a("code",null,"text"),s(" is the current text, and the second parameter "),a("code",null,"columnIndex"),s(" is the subscript of the column where the current text is located. The following is the case of year month day selection")],-1),D=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"javascript"},[s(`
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
  `),a("span",{class:"hljs-keyword"},"if"),s(" (columnIndex === "),a("span",{class:"hljs-number"},"0"),s(") "),a("span",{class:"hljs-keyword"},"return"),s(),a("span",{class:"hljs-string"},[s("`"),a("span",{class:"hljs-subst"},"${text}"),s(" YEAR`")]),s(`
  `),a("span",{class:"hljs-keyword"},"else"),s(),a("span",{class:"hljs-keyword"},"if"),s(" (columnIndex === "),a("span",{class:"hljs-number"},"1"),s(") "),a("span",{class:"hljs-keyword"},"return"),s(),a("span",{class:"hljs-string"},[s("`"),a("span",{class:"hljs-subst"},"${text}"),s(" MONTH`")]),s(`
  `),a("span",{class:"hljs-keyword"},"else"),s(),a("span",{class:"hljs-keyword"},"if"),s(" (columnIndex === "),a("span",{class:"hljs-number"},"2"),s(") "),a("span",{class:"hljs-keyword"},"return"),s(),a("span",{class:"hljs-string"},[s("`"),a("span",{class:"hljs-subst"},"${text}"),s(" DATE`")]),s(`
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
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-button"),s(),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"primary"'),s(),a("span",{class:"hljs-attr"},"block"),s(" @"),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},'"picker"'),s(">")]),s("Text Formatter"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-button"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),M={class:"card"},E=a("h3",null,"Mapping of values",-1),Y=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"javascript"},[s(`
`),a("span",{class:"hljs-keyword"},"import"),s(" { Picker, Snackbar } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'@varlet/ui'"),s(`

`),a("span",{class:"hljs-keyword"},"const"),s(` rawColumns = [
  [
    { `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'Ember Spirit'"),s(", "),a("span",{class:"hljs-attr"},"id"),s(": "),a("span",{class:"hljs-number"},"1"),s(` },
    { `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'Storm Spirit'"),s(", "),a("span",{class:"hljs-attr"},"id"),s(": "),a("span",{class:"hljs-number"},"2"),s(` },
    { `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'Earth Spirit'"),s(", "),a("span",{class:"hljs-attr"},"id"),s(": "),a("span",{class:"hljs-number"},"3"),s(` },
    { `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'Void Spirit'"),s(", "),a("span",{class:"hljs-attr"},"id"),s(": "),a("span",{class:"hljs-number"},"4"),s(` },
  ],
  [
    { `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'Ember Spirit'"),s(", "),a("span",{class:"hljs-attr"},"id"),s(": "),a("span",{class:"hljs-number"},"1"),s(` },
    { `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'Storm Spirit'"),s(", "),a("span",{class:"hljs-attr"},"id"),s(": "),a("span",{class:"hljs-number"},"2"),s(` },
    { `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'Earth Spirit'"),s(", "),a("span",{class:"hljs-attr"},"id"),s(": "),a("span",{class:"hljs-number"},"3"),s(` },
    { `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'Void Spirit'"),s(", "),a("span",{class:"hljs-attr"},"id"),s(": "),a("span",{class:"hljs-number"},"4"),s(` },
  ],
  [
    { `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'Ember Spirit'"),s(", "),a("span",{class:"hljs-attr"},"id"),s(": "),a("span",{class:"hljs-number"},"1"),s(` },
    { `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'Storm Spirit'"),s(", "),a("span",{class:"hljs-attr"},"id"),s(": "),a("span",{class:"hljs-number"},"2"),s(` },
    { `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'Earth Spirit'"),s(", "),a("span",{class:"hljs-attr"},"id"),s(": "),a("span",{class:"hljs-number"},"3"),s(` },
    { `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'Void Spirit'"),s(", "),a("span",{class:"hljs-attr"},"id"),s(": "),a("span",{class:"hljs-number"},"4"),s(` },
  ],
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
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-button"),s(),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"primary"'),s(),a("span",{class:"hljs-attr"},"block"),s(" @"),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},'"picker"'),s(">")]),s("Mapping of values"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-button"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),I=a("h2",null,"Component Call",-1),A={class:"card"},F=a("h3",null,"Single-column Picker",-1),N=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"javascript"},[s(`
`),a("span",{class:"hljs-keyword"},"import"),s(" { ref } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`

`),a("span",{class:"hljs-keyword"},"const"),s(" columns = ref(["),a("span",{class:"hljs-built_in"},"Array"),s(".from({ "),a("span",{class:"hljs-attr"},"length"),s(": "),a("span",{class:"hljs-number"},"20"),s(" }).map("),a("span",{class:"hljs-function"},[s("("),a("span",{class:"hljs-params"},"_, index"),s(") =>")]),s(` index)])
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-picker"),s(),a("span",{class:"hljs-attr"},":columns"),s("="),a("span",{class:"hljs-string"},'"columns"'),s(" />")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),V={class:"card"},O=a("h3",null,"Multi-column Picker",-1),z=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"javascript"},[s(`
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
`)])],-1),$={class:"card"},B=a("h3",null,"Cascade Picker",-1),L=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"javascript"},[s(`
`),a("span",{class:"hljs-keyword"},"import"),s(" { ref } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`
`),a("span",{class:"hljs-keyword"},"import"),s(" area "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'@varlet/ui/json/area.json'"),s(`

`),a("span",{class:"hljs-keyword"},"const"),s(` columns = ref(area)
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-picker"),s(),a("span",{class:"hljs-attr"},"cascade"),s(),a("span",{class:"hljs-attr"},":columns"),s("="),a("span",{class:"hljs-string"},'"columns"'),s(" />")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),H={class:"card"},R=a("h3",null,"Text Formatter",-1),W=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"javascript"},[s(`
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
  `),a("span",{class:"hljs-keyword"},"if"),s(" (columnIndex === "),a("span",{class:"hljs-number"},"0"),s(") "),a("span",{class:"hljs-keyword"},"return"),s(),a("span",{class:"hljs-string"},[s("`"),a("span",{class:"hljs-subst"},"${text}"),s(" YEAR`")]),s(`
  `),a("span",{class:"hljs-keyword"},"else"),s(),a("span",{class:"hljs-keyword"},"if"),s(" (columnIndex === "),a("span",{class:"hljs-number"},"1"),s(") "),a("span",{class:"hljs-keyword"},"return"),s(),a("span",{class:"hljs-string"},[s("`"),a("span",{class:"hljs-subst"},"${text}"),s(" MONTH`")]),s(`
  `),a("span",{class:"hljs-keyword"},"else"),s(),a("span",{class:"hljs-keyword"},"if"),s(" (columnIndex === "),a("span",{class:"hljs-number"},"2"),s(") "),a("span",{class:"hljs-keyword"},"return"),s(),a("span",{class:"hljs-string"},[s("`"),a("span",{class:"hljs-subst"},"${text}"),s(" DATE`")]),s(`
}
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-picker"),s(),a("span",{class:"hljs-attr"},"cascade"),s(),a("span",{class:"hljs-attr"},":columns"),s("="),a("span",{class:"hljs-string"},'"columns"'),s(),a("span",{class:"hljs-attr"},":text-formatter"),s("="),a("span",{class:"hljs-string"},'"textFormatter"'),s(" />")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),U={class:"card"},q=a("h3",null,"Mapping of values",-1),K=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"javascript"},[s(`
`),a("span",{class:"hljs-keyword"},"import"),s(" { ref } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(` 
`),a("span",{class:"hljs-keyword"},"import"),s(" { Snackbar } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'@varlet/ui'"),s(`

`),a("span",{class:"hljs-keyword"},"const"),s(` rawColumns = [
  [
    { `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'Ember Spirit'"),s(", "),a("span",{class:"hljs-attr"},"id"),s(": "),a("span",{class:"hljs-number"},"1"),s(` },
    { `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'Storm Spirit'"),s(", "),a("span",{class:"hljs-attr"},"id"),s(": "),a("span",{class:"hljs-number"},"2"),s(` },
    { `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'Earth Spirit'"),s(", "),a("span",{class:"hljs-attr"},"id"),s(": "),a("span",{class:"hljs-number"},"3"),s(` },
    { `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'Void Spirit'"),s(", "),a("span",{class:"hljs-attr"},"id"),s(": "),a("span",{class:"hljs-number"},"4"),s(` },
  ],
  [
    { `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'Ember Spirit'"),s(", "),a("span",{class:"hljs-attr"},"id"),s(": "),a("span",{class:"hljs-number"},"1"),s(` },
    { `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'Storm Spirit'"),s(", "),a("span",{class:"hljs-attr"},"id"),s(": "),a("span",{class:"hljs-number"},"2"),s(` },
    { `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'Earth Spirit'"),s(", "),a("span",{class:"hljs-attr"},"id"),s(": "),a("span",{class:"hljs-number"},"3"),s(` },
    { `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'Void Spirit'"),s(", "),a("span",{class:"hljs-attr"},"id"),s(": "),a("span",{class:"hljs-number"},"4"),s(` },
  ],
  [
    { `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'Ember Spirit'"),s(", "),a("span",{class:"hljs-attr"},"id"),s(": "),a("span",{class:"hljs-number"},"1"),s(` },
    { `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'Storm Spirit'"),s(", "),a("span",{class:"hljs-attr"},"id"),s(": "),a("span",{class:"hljs-number"},"2"),s(` },
    { `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'Earth Spirit'"),s(", "),a("span",{class:"hljs-attr"},"id"),s(": "),a("span",{class:"hljs-number"},"3"),s(` },
    { `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'Void Spirit'"),s(", "),a("span",{class:"hljs-attr"},"id"),s(": "),a("span",{class:"hljs-number"},"4"),s(` },
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
`)])],-1),G=o('<h2>API</h2><div class="card"><h3>Props</h3><table><thead><tr><th>Prop</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>columns</code></td><td>Column content</td><td><em>NormalColumn[] | CascadeColumn[] | Texts</em></td><td><code>[]</code></td></tr><tr><td><code>title</code></td><td>title</td><td><em>string</em></td><td><code>Pick it</code></td></tr><tr><td><code>text-key</code></td><td>The attribute key of the text</td><td><em>string</em></td><td><code>text</code></td></tr><tr><td><code>toolbar</code></td><td>Whether to display the top toolbar</td><td><em>string</em></td><td><code>true</code></td></tr><tr><td><code>cascade</code></td><td>Whether to enable cascading mode</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>cascade-initial-indexes</code></td><td>List of initialization indices for cascade mode</td><td><em>number[]</em></td><td><code>-</code></td></tr><tr><td><code>text-formatter</code></td><td>Text formatter</td><td><em>(text: any, columnIndex: number) =&gt; any</em></td><td><code>text =&gt; text</code></td></tr><tr><td><code>option-height</code></td><td>Option height(px rem)</td><td><em>string | number</em></td><td><code>44</code></td></tr><tr><td><code>option-count</code></td><td>Number of options visible</td><td><em>string | number</em></td><td><code>6</code></td></tr><tr><td><code>confirm-button-text</code></td><td>Confirm button text</td><td><em>string</em></td><td><code>Confirm</code></td></tr><tr><td><code>cancel-button-text</code></td><td>Cancel button text</td><td><em>string</em></td><td><code>Cancel</code></td></tr><tr><td><code>confirm-button-text-color</code></td><td>Confirm the button text color</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>cancel-button-text-color</code></td><td>Cancel button text color</td><td><em>string</em></td><td><code>-</code></td></tr></tbody></table></div><div class="card"><h3>Picker Options</h3><table><thead><tr><th>Prop</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>columns</code></td><td>Column content</td><td><em>NormalColumn[] | CascadeColumn[] | Texts</em></td><td><code>[]</code></td></tr><tr><td><code>title</code></td><td>title</td><td><em>string</em></td><td><code>Pick it</code></td></tr><tr><td><code>textKey</code></td><td>The attribute key of the text</td><td><em>string</em></td><td><code>text</code></td></tr><tr><td><code>toolbar</code></td><td>Whether to display the top toolbar</td><td><em>string</em></td><td><code>true</code></td></tr><tr><td><code>cascade</code></td><td>Whether to enable cascading mode</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>cascadeInitialIndexes</code></td><td>List of initialization indices for cascade mode</td><td><em>number[]</em></td><td><code>-</code></td></tr><tr><td><code>textFormatter</code></td><td>Text formatter</td><td><em>(text: any, columnIndex: number) =&gt; any</em></td><td><code>text =&gt; text</code></td></tr><tr><td><code>optionHeight</code></td><td>Option height</td><td><em>string | number</em></td><td><code>44</code></td></tr><tr><td><code>optionCount</code></td><td>Number of options visible</td><td><em>string | number</em></td><td><code>6</code></td></tr><tr><td><code>confirmButtonText</code></td><td>Confirm button text</td><td><em>string</em></td><td><code>Confirm</code></td></tr><tr><td><code>cancelButtonText</code></td><td>Cancel button text</td><td><em>string</em></td><td><code>Cancel</code></td></tr><tr><td><code>confirmButtonTextColor</code></td><td>Confirm the button text color</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>cancelButtonTextColor</code></td><td>Cancel button text color</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>onOpen</code></td><td>Popup open callback</td><td><em>() =&gt; void</em></td><td><code>-</code></td></tr><tr><td><code>onOpened</code></td><td>Popup open-animation ends callback</td><td><em>() =&gt; void</em></td><td><code>-</code></td></tr><tr><td><code>onClose</code></td><td>Popup close callback</td><td><em>() =&gt; void</em></td><td><code>-</code></td></tr><tr><td><code>onClosed</code></td><td>Close pop-up layer callback when animation ends</td><td><em>(texts: Texts, indexes: number[]) =&gt; void</em></td><td><code>() =&gt; void</code></td></tr><tr><td><code>onChange</code></td><td>Pick callbacks when content changes</td><td><em>(texts: Texts, indexes: number[]) =&gt; void</em></td><td><code>() =&gt; void</code></td></tr><tr><td><code>onConfirm</code></td><td>Pick callbacks when confirm</td><td><em>(texts: Texts, indexes: number[]) =&gt; void</em></td><td><code>() =&gt; void</code></td></tr><tr><td><code>onCancel</code></td><td>Pick callbacks when cancel</td><td><em>(texts: Texts, indexes: number[]) =&gt; void</em></td><td><code>() =&gt; void</code></td></tr></tbody></table></div><div class="card"><h3>Picker NormalColumn</h3><table><thead><tr><th>Prop</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>texts</code></td><td>Text array</td><td><em>Texts</em></td><td><code>-</code></td></tr><tr><td><code>initialIndex</code></td><td>Initialize index</td><td><em>number</em></td><td><code>0</code></td></tr></tbody></table></div><div class="card"><h3>Picker CascadeColumn</h3><table><thead><tr><th>Prop</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>text</code></td><td>Each line of text</td><td><em>any</em></td><td><code>-</code></td></tr><tr><td><code>children</code></td><td>children tree</td><td><em>CascadeColumn[]</em></td><td><code>-</code></td></tr></tbody></table></div><div class="card"><h3>Methods</h3><table><thead><tr><th>Method</th><th>Description</th><th>Arguments</th><th>Return</th></tr></thead><tbody><tr><td><code>confirm</code></td><td>Immediately stop scrolling and trigger the <code>confirm</code> event</td><td><code>-</code></td><td><code>-</code></td></tr><tr><td><code>cancel</code></td><td>Immediately stop scrolling and trigger the <code>cancel</code> event</td><td><code>-</code></td><td><code>-</code></td></tr></tbody></table></div><div class="card"><h3>Events</h3><table><thead><tr><th>Event</th><th>Description</th><th>Arguments</th></tr></thead><tbody><tr><td><code>change</code></td><td>Triggered when the pick content changes</td><td><code>texts: Texts</code> Text array <br> <code>indexes: number[]</code> picked index array</td></tr><tr><td><code>cancel</code></td><td>Triggered when you click the cancel button</td><td><code>texts: Texts</code> Text array <br> <code>indexes: number[]</code> picked index array</td></tr><tr><td><code>confirm</code></td><td>Triggered when you click the confirm button</td><td><code>texts: Texts</code> Text array <br> <code>indexes: number[]</code> picked index array</td></tr></tbody></table></div><div class="card"><h3>Slots</h3><table><thead><tr><th>Name</th><th>Description</th><th>SlotProps</th></tr></thead><tbody><tr><td><code>cancel</code></td><td>cancel button content</td><td><code>-</code></td></tr><tr><td><code>title</code></td><td>title content</td><td><code>-</code></td></tr><tr><td><code>confirm</code></td><td>confirm button content</td><td><code>-</code></td></tr></tbody></table></div><div class="card"><h3>Style Variables</h3><p>Here are the CSS variables used by the component, Styles can be customized using <a href="#/en-US/style-provider">StyleProvider</a></p><table><thead><tr><th>Variable</th><th>Default</th></tr></thead><tbody><tr><td><code>--picker-background</code></td><td><code>#fff</code></td></tr><tr><td><code>--picker-toolbar-height</code></td><td><code>44px</code></td></tr><tr><td><code>--picker-confirm-button-text-color</code></td><td><code>var(--color-primary)</code></td></tr><tr><td><code>--picker-cancel-button-text-color</code></td><td><code>#888</code></td></tr><tr><td><code>--picker-picked-border</code></td><td><code>1px solid rgba(0, 0, 0, 0.12)</code></td></tr><tr><td><code>--picker-title-font-size</code></td><td><code>16px</code></td></tr><tr><td><code>--picker-toolbar-padding</code></td><td><code>0 4px</code></td></tr><tr><td><code>--picker-mask-background-image</code></td><td><code>linear-gradient(180deg, hsla(0, 0%, 100%, 0.9), hsla(0, 0%, 100%, 0.4)),linear-gradient(0deg, hsla(0, 0%, 100%, 0.9), hsla(0, 0%, 100%, 0.4))</code></td></tr></tbody></table></div>',9);function J(Q,X,Z,ss,as,ts){const t=c("var-site-code-example");return r(),d("div",h,[i,j,m,a("div",u,[b,n(t,null,{default:l(()=>[g]),_:1})]),a("div",y,[k,f,n(t,null,{default:l(()=>[x]),_:1})]),a("div",w,[_,v,n(t,null,{default:l(()=>[C]),_:1})]),a("div",S,[P,T,n(t,null,{default:l(()=>[D]),_:1})]),a("div",M,[E,n(t,null,{default:l(()=>[Y]),_:1})]),I,a("div",A,[F,n(t,null,{default:l(()=>[N]),_:1})]),a("div",V,[O,n(t,null,{default:l(()=>[z]),_:1})]),a("div",$,[B,n(t,null,{default:l(()=>[L]),_:1})]),a("div",H,[R,n(t,null,{default:l(()=>[W]),_:1})]),a("div",U,[q,n(t,null,{default:l(()=>[K]),_:1})]),G])}const ls=e(p,[["render",J]]);export{ls as default};
