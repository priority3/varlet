import{_ as n,p as l,f as c,h as p,M as s,q as o,S as a,P as e,at as r}from"./vue-router.esm-bundler.786782d7.js";const d={components:{}},i={class:"varlet-site-doc"},h=s("h1",null,"Browser Adaptation",-1),u=s("div",{class:"card"},[s("h3",null,"Intro"),s("p",null,[e("The component library provides mobile and desktop adaptations, scheme "),s("code",null,"varlet-touch-emulator"),e(" is used for mobile terminal adaptation, scheme "),s("code",null,"varlet-touch-emulator"),e(" is used for mobile terminal adaptation.")])],-1),m={class:"card"},_=r("<h3>Mobile Adaptation</h3><p>The component library design is based on the <code>375px</code> width design draft. It is recommended to use PostCSS plugin to convert <code>px</code> units into <code>vw</code> units to achieve mobile terminal adaptation. Create <code>postcss.config.js</code> under the <code>Webpack/Vite</code> project root path And do the following configuration <code>375px -&gt; 100vw</code></p>",2),v=s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-meta"},"#"),s("span",{class:"bash"}," npm"),e(`
npm i postcss-px-to-viewport -D
`),s("span",{class:"hljs-meta"},`
#`),s("span",{class:"bash"}," yarn"),e(`
yarn add postcss-px-to-viewport -D
`),s("span",{class:"hljs-meta"},`
#`),s("span",{class:"bash"}," pnpm"),e(`
pnpm add postcss-px-to-viewport -D
`)])],-1),j=s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-comment"},"// postcss.config.js"),e(`
`),s("span",{class:"hljs-built_in"},"module"),e(`.exports = {
  `),s("span",{class:"hljs-attr"},"plugins"),e(`: {
    `),s("span",{class:"hljs-string"},"'postcss-px-to-viewport'"),e(`: {
      `),s("span",{class:"hljs-attr"},"viewportWidth"),e(": "),s("span",{class:"hljs-number"},"375"),e(`,
      `),s("span",{class:"hljs-attr"},"unitPrecision"),e(": "),s("span",{class:"hljs-number"},"6"),e(`,
      `),s("span",{class:"hljs-attr"},"unitToConvert"),e(": "),s("span",{class:"hljs-string"},"'px'"),e(`,
      `),s("span",{class:"hljs-attr"},"propList"),e(": ["),s("span",{class:"hljs-string"},"'*'"),e(`],
    }
  }
}
`)])],-1),g={class:"card"},b=s("h3",null,"Desktop Adaptation",-1),f=s("p",null,[e("Because component library interaction events are developed using "),s("code",null,"touch"),e(" events, "),s("code",null,"mouse"),e(" events on the desktop side are not supported. It is recommended to use "),s("code",null,"@varlet/touch-emulator"),e(" to set "),s("code",null,"touch -> mouse"),e(" for desktop adaptation.")],-1),x=s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-meta"},"#"),s("span",{class:"bash"}," npm"),e(`
npm i @varlet/touch-emulator
`),s("span",{class:"hljs-meta"},"#"),s("span",{class:"bash"}," yarn"),e(`
yarn add @varlet/touch-emulator
`),s("span",{class:"hljs-meta"},"#"),s("span",{class:"bash"}," pnpm"),e(`
pnpm add @varlet/touch-emulator
`)])],-1),w=s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-keyword"},"import"),e(),s("span",{class:"hljs-string"},"'@varlet/touch-emulator'"),e(`
`)])],-1);function y(k,A,B,C,S,V){const t=l("var-site-code-example");return c(),p("div",i,[h,u,s("div",m,[_,o(t,{"playground-ignore":""},{default:a(()=>[v]),_:1}),o(t,{"playground-ignore":""},{default:a(()=>[j]),_:1})]),s("div",g,[b,f,o(t,{"playground-ignore":""},{default:a(()=>[x]),_:1}),o(t,{"playground-ignore":""},{default:a(()=>[w]),_:1})])])}const N=n(d,[["render",y]]);export{N as default};
