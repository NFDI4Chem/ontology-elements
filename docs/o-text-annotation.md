---
outline: deep
---
<script setup lang="ts">
import "./../dist/index.js";
let annotatedText = `Seven previously undescribed diterpenoids, tinocrisposides A–D (1–4) and borapetic acids A (5), B (6), and C (7), together with 16 known compounds, were isolated from the stem of Tinospora crispa (Menispermaceae). The structures of the new isolates were elucidated by spectroscopic and chemical methods. The β-cell protective effect of the tested compounds was examined on insulin-secreting BRIN-BD11 cells under dexamethasone treatment. Diterpene glycosides 12, 14–16, and 18 presented a substantial protective effect on BRIN-BD11 cells treated with dexamethasone in a dose-dependent manner. Compounds 4 and 17 with two sugar moieties exhibited clear protective effects on β-cells.
$$$$
c	HP 29 41	diterpenoid	http://purl.obolibrary.org/obo/CHEBI_23849
c	SNOMEDCT 197 211	Family Menispermaceae (organism)	http://snomed.info/id/107532005
c	BTO 391 400	BRIN-BD11 cell	http://purl.obolibrary.org/obo/BTO_0002142`
</script>

# Annotation Text (rich ontology annotation display)

Ontology elements provide an text annotation component that renders the text in a user-friendly format.

The following annotated text below

```
Seven previously undescribed diterpenoids, tinocrisposides A–D (1–4) and borapetic acids A (5), B (6), and C (7), together with 16 known compounds, were isolated from the stem of Tinospora crispa (Menispermaceae). The structures of the new isolates were elucidated by spectroscopic and chemical methods. The β-cell protective effect of the tested compounds was examined on insulin-secreting BRIN-BD11 cells under dexamethasone treatment. Diterpene glycosides 12, 14–16, and 18 presented a substantial protective effect on BRIN-BD11 cells treated with dexamethasone in a dose-dependent manner. Compounds 4 and 17 with two sugar moieties exhibited clear protective effects on β-cells.
$$$$
c	HP 29 41	diterpenoid	http://purl.obolibrary.org/obo/CHEBI_23849
c	SNOMEDCT 197 211	Family Menispermaceae (organism)	http://snomed.info/id/107532005
c	BTO 391 400	BRIN-BD11 cell	http://purl.obolibrary.org/obo/BTO_0002142
```

 will be rendered as the following

<ontology-text-annotation 
    :annotation="`Seven previously undescribed diterpenoids, tinocrisposides A–D (1–4) and borapetic acids A (5), B (6), and C (7), together with 16 known compounds, were isolated from the stem of Tinospora crispa (Menispermaceae). The structures of the new isolates were elucidated by spectroscopic and chemical methods. The β-cell protective effect of the tested compounds was examined on insulin-secreting BRIN-BD11 cells under dexamethasone treatment. Diterpene glycosides 12, 14–16, and 18 presented a substantial protective effect on BRIN-BD11 cells treated with dexamethasone in a dose-dependent manner. Compounds 4 and 17 with two sugar moieties exhibited clear protective effects on β-cells.
$$$$
c	HP 29 41	diterpenoid	http://purl.obolibrary.org/obo/CHEBI_23849
c	SNOMEDCT 197 211	Family Menispermaceae (organism)	http://snomed.info/id/107532005
c	BTO 391 400	BRIN-BD11 cell	http://purl.obolibrary.org/obo/BTO_0002142`">
</ontology-text-annotation>

<br/>

#### Code sample

```html
 <ontology-text-annotation 
    annotation="text with annotations">
</ontology-text0annotation>
```

## props

| Name        |      Type      |  Default | Description |
| ----------- | :------------: | :------: | :---------- |
| annotation  | string         |   null   | annotated text output from ontology-annotate component |

## events

*no events*

## styling

*coming soon*