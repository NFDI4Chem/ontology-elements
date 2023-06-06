import"./chunks/index.8b112050.js";import{d as i,h as c,c as l,z as t,E as y,b as a,a2 as h,a as r,t as u,C as g,O as d,G as m,o}from"./chunks/framework.5904c5cc.js";const D=t("h1",{id:"annotate-textarea",tabindex:"-1"},[r("Annotate - Textarea "),t("a",{class:"header-anchor",href:"#annotate-textarea","aria-label":'Permalink to "Annotate - Textarea"'},"​")],-1),x=t("br",null,null,-1),F=d('<p><strong>Sample text</strong></p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">Seven previously undescribed diterpenoids, tinocrisposides A–D (1–4) and borapetic acids A (5), B (6), and C (7), together with 16 known compounds, were isolated from the stem of Tinospora crispa (Menispermaceae). The structures of the new isolates were elucidated by spectroscopic and chemical methods. The β-cell protective effect of the tested compounds was examined on insulin-secreting BRIN-BD11 cells under dexamethasone treatment. Diterpene glycosides 12, 14–16, and 18 presented a substantial protective effect on BRIN-BD11 cells treated with dexamethasone in a dose-dependent manner. Compounds 4 and 17 with two sugar moieties exhibited clear protective effects on β-cells.</span></span></code></pre></div>',2),f=t("br",null,null,-1),b={key:0},v=t("br",null,null,-1),_={class:"custom-code-block"},C=d(`<br><hr><h4 id="code-sample" tabindex="-1">Code sample <a class="header-anchor" href="#code-sample" aria-label="Permalink to &quot;Code sample&quot;">​</a></h4><div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">ontology-annotate</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#C792EA;">format</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">text</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#C792EA;">label</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Input field (ontology driven)</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#C792EA;">info</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Search terms across ontologies</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#C792EA;">modelValue</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">value</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#C792EA;">@change</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">value = $event.detail[0]</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">&gt;&lt;/</span><span style="color:#F07178;">ontology-annotate</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div><h2 id="props" tabindex="-1">props <a class="header-anchor" href="#props" aria-label="Permalink to &quot;props&quot;">​</a></h2><table><thead><tr><th>Name</th><th style="text-align:center;">Type</th><th style="text-align:center;">Default</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td>format</td><td style="text-align:center;">string</td><td style="text-align:center;">-</td><td style="text-align:left;"></td></tr><tr><td>label</td><td style="text-align:center;">string</td><td style="text-align:center;">-</td><td style="text-align:left;"></td></tr><tr><td>info</td><td style="text-align:center;">string</td><td style="text-align:center;">-</td><td style="text-align:left;"></td></tr><tr><td>placeholder</td><td style="text-align:center;">string</td><td style="text-align:center;">-</td><td style="text-align:left;"></td></tr><tr><td>value</td><td style="text-align:center;">string</td><td style="text-align:center;">-</td><td style="text-align:left;">default value</td></tr><tr><td>ontologies</td><td style="text-align:center;">string</td><td style="text-align:center;">-</td><td style="text-align:left;">Comma separated values of ontologies to restrict the OLS look up.</td></tr></tbody></table><h2 id="events" tabindex="-1">events <a class="header-anchor" href="#events" aria-label="Permalink to &quot;events&quot;">​</a></h2><table><thead><tr><th>Name</th><th style="text-align:center;">Type</th><th style="text-align:center;">Default</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td>change</td><td style="text-align:center;">event</td><td style="text-align:center;">-</td><td style="text-align:left;">Events emitted via OE are dispatched as native CustomEvents. Additional event arguments (payload) will be exposed as an array on the CustomEvent object as its detail property - <code>$event.detail[0] </code></td></tr></tbody></table><h2 id="styling" tabindex="-1">styling <a class="header-anchor" href="#styling" aria-label="Permalink to &quot;styling&quot;">​</a></h2><p><em>coming soon</em></p>`,10),N=JSON.parse('{"title":"Annotate - Textarea","description":"","frontmatter":{"outline":"deep"},"headers":[],"relativePath":"o-annotate.md","filePath":"o-annotate.md"}'),q={name:"o-annotate.md"},T=i({...q,setup(E){let e=c("");return(k,s)=>{const p=m("ontology-annotate");return o(),l("div",null,[D,x,t("div",null,[F,y(p,{format:"text",label:"Input field (ontology driven)",info:"Search terms across ontologies",value:a(e),onChange:s[0]||(s[0]=n=>h(e)?e.value=n.detail[0]:e=n.detail[0])},null,8,["value"])]),f,a(e)&&a(e)!=""?(o(),l("span",b,[v,r("Output: "),t("pre",_,[t("code",null,u(a(e)),1)])])):g("",!0),C])}}});export{N as __pageData,T as default};