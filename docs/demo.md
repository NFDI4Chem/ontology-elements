---
outline: deep
---

<script setup lang="ts">
import "./../dist/index.js";
</script>

# Demo

## Ontology Annotation

<ontology-annotation 
    annotation="Macrobrachium nipponense	NCBITAXON	http://purl.obolibrary.org/obo/NCBITaxon_159736">
</ontology-annotation>

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