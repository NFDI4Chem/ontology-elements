---
outline: deep
---

<script setup lang="ts">
import "./../dist/index.js";

const annotatedText = `Seven previously undescribed diterpenoids, tinocrisposides A–D (1–4) and borapetic acids A (5), B (6), and C (7), together with 16 known compounds, were isolated from the stem of Tinospora crispa (Menispermaceae). The structures of the new isolates were elucidated by spectroscopic and chemical methods. The β-cell protective effect of the tested compounds was examined on insulin-secreting BRIN-BD11 cells under dexamethasone treatment. Diterpene glycosides 12, 14–16, and 18 presented a substantial protective effect on BRIN-BD11 cells treated with dexamethasone in a dose-dependent manner. Compounds 4 and 17 with two sugar moieties exhibited clear protective effects on β-cells.
$$$$
c	HP 29 41	diterpenoid	http://purl.obolibrary.org/obo/CHEBI_23849
c	SNOMEDCT 197 211	Family Menispermaceae (organism)	http://snomed.info/id/107532005
c	BTO 391 400	BRIN-BD11 cell	http://purl.obolibrary.org/obo/BTO_0002142`
</script>

# Demo

## Ontology Term Annotation

<ontology-term-annotation 
    annotation="Macrobrachium nipponense	NCBITAXON	http://purl.obolibrary.org/obo/NCBITaxon_159736">
</ontology-term-annotation>

## Ontology Text Annotation

<ontology-text-annotation :annotation="annotatedText"></ontology-text-annotation>

## Ontology Autocomplete

<ontology-autocomplete 
    format="text"
    label="Input field (ontology driven)"
    info="Example: Homo sapiens, obi:Homo sapiens"
    @change="value = $event.detail[0]"
    placeholder="search term"
></ontology-autocomplete>

## Ontology Annotate

<ontology-annotate
    format="text"
    label="Input field (ontology driven)"
    info="Search terms across ontologies"
    modelValue="value"
    @change="value = $event.detail[0]"
></ontology-annotate>

## Ontology Compose

<ontology-compose
    format="text"
    label="Input field (ontology driven)"
    info="Search terms across ontologies"
    modelValue="value"
    @change="value = $event.detail[0]"
></ontology-compose>