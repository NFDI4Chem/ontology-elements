import{d as i,K as s,a7 as u,u as c,p as l,k as d,a8 as f,a9 as m,aa as h,ab as A,ac as g,ad as P,ae as v,af as C,ag as y,ah as w,ai as E,aj as _,ak as b,al as R}from"./chunks/framework.60ec2bf9.js";import{t as r}from"./chunks/theme.e307a289.js";r.enhanceApp=({app:e})=>{e.config.compilerOptions={isCustomElement:a=>a.includes("-")}};function p(e){if(e.extends){const a=p(e.extends);return{...a,...e,async enhanceApp(t){a.enhanceApp&&await a.enhanceApp(t),e.enhanceApp&&await e.enhanceApp(t)}}}return e}const n=p(r),D=i({name:"VitePressApp",setup(){const{site:e}=c();return l(()=>{d(()=>{document.documentElement.lang=e.value.lang,document.documentElement.dir=e.value.dir})}),f(),m(),h(),n.setup&&n.setup(),()=>A(n.Layout)}});async function O(){const e=S(),a=j();a.provide(g,e);const t=P(e.route);return a.provide(v,t),a.component("Content",C),a.component("ClientOnly",y),Object.defineProperties(a.config.globalProperties,{$frontmatter:{get(){return t.frontmatter.value}},$params:{get(){return t.page.value.params}}}),n.enhanceApp&&await n.enhanceApp({app:a,router:e,siteData:w}),{app:a,router:e,data:t}}function j(){return E(D)}function S(){let e=s,a;return _(t=>{let o=b(t);return e&&(a=o),(e||a===o)&&(o=o.replace(/\.js$/,".lean.js")),s&&(e=!1),R(()=>import(o),[])},n.NotFound)}s&&O().then(({app:e,router:a,data:t})=>{a.go().then(()=>{u(a.route,t.site),e.mount("#app")})});export{O as createApp};
