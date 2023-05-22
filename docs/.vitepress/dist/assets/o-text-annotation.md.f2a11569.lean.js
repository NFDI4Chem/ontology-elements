import"./chunks/index.807766c5.js";import{d as a,c as o,E as s,b as l,O as e,G as i,o as r}from"./chunks/framework.5904c5cc.js";const p=e(`<h1 id="annotation-text-read-only" tabindex="-1">Annotation Text (read-only) <a class="header-anchor" href="#annotation-text-read-only" aria-label="Permalink to &quot;Annotation Text (read-only)&quot;">​</a></h1><p>Ontology elements provide an text annotation component that renders the text in a user-friendly format.</p><p>Annotated text below</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">Seven previously undescribed diterpenoids, tinocrisposides A–D (1–4) and borapetic acids A (5), B (6), and C (7), together with 16 known compounds, were isolated from the stem of Tinospora crispa (Menispermaceae). The structures of the new isolates were elucidated by spectroscopic and chemical methods. The β-cell protective effect of the tested compounds was examined on insulin-secreting BRIN-BD11 cells under dexamethasone treatment. Diterpene glycosides 12, 14–16, and 18 presented a substantial protective effect on BRIN-BD11 cells treated with dexamethasone in a dose-dependent manner. Compounds 4 and 17 with two sugar moieties exhibited clear protective effects on β-cells.</span></span>
<span class="line"><span style="color:#A6ACCD;">$$$$</span></span>
<span class="line"><span style="color:#A6ACCD;">c	HP 29 41	diterpenoid	http://purl.obolibrary.org/obo/CHEBI_23849</span></span>
<span class="line"><span style="color:#A6ACCD;">c	SNOMEDCT 197 211	Family Menispermaceae (organism)	http://snomed.info/id/107532005</span></span>
<span class="line"><span style="color:#A6ACCD;">c	BTO 391 400	BRIN-BD11 cell	http://purl.obolibrary.org/obo/BTO_0002142</span></span></code></pre></div><p>will be rendered as the following</p>`,5),c=e(`<br><h4 id="code-sample" tabindex="-1">Code sample <a class="header-anchor" href="#code-sample" aria-label="Permalink to &quot;Code sample&quot;">​</a></h4><div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">ontology-text-annotation</span><span style="color:#89DDFF;"> </span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#C792EA;">annotation</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Macrobrachium nipponense	NCBITAXON	http://purl.obolibrary.org/obo/NCBITaxon_159736</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">ontology-text0annotation</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div><h2 id="props" tabindex="-1">props <a class="header-anchor" href="#props" aria-label="Permalink to &quot;props&quot;">​</a></h2><table><thead><tr><th>Name</th><th style="text-align:center;">Type</th><th style="text-align:center;">Default</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td>annotation</td><td style="text-align:center;">string</td><td style="text-align:center;">null</td><td style="text-align:left;">annotated text output from ontology-annotate component</td></tr></tbody></table><h2 id="events" tabindex="-1">events <a class="header-anchor" href="#events" aria-label="Permalink to &quot;events&quot;">​</a></h2><p><em>no events</em></p><h2 id="styling" tabindex="-1">styling <a class="header-anchor" href="#styling" aria-label="Permalink to &quot;styling&quot;">​</a></h2><p><em>coming soon</em></p>`,9),g=JSON.parse('{"title":"Annotation Text (read-only)","description":"","frontmatter":{"outline":"deep"},"headers":[],"relativePath":"o-text-annotation.md","filePath":"o-text-annotation.md"}'),d={name:"o-text-annotation.md"},f=a({...d,setup(h){let t=`Seven previously undescribed diterpenoids, tinocrisposides A–D (1–4) and borapetic acids A (5), B (6), and C (7), together with 16 known compounds, were isolated from the stem of Tinospora crispa (Menispermaceae). The structures of the new isolates were elucidated by spectroscopic and chemical methods. The β-cell protective effect of the tested compounds was examined on insulin-secreting BRIN-BD11 cells under dexamethasone treatment. Diterpene glycosides 12, 14–16, and 18 presented a substantial protective effect on BRIN-BD11 cells treated with dexamethasone in a dose-dependent manner. Compounds 4 and 17 with two sugar moieties exhibited clear protective effects on β-cells.
$$$$
c	HP 29 41	diterpenoid	http://purl.obolibrary.org/obo/CHEBI_23849
c	SNOMEDCT 197 211	Family Menispermaceae (organism)	http://snomed.info/id/107532005
c	BTO 391 400	BRIN-BD11 cell	http://purl.obolibrary.org/obo/BTO_0002142`;return(m,u)=>{const n=i("ontology-text-annotation");return r(),o("div",null,[p,s(n,{annotation:l(t)},null,8,["annotation"]),c])}}});export{g as __pageData,f as default};
