---
outline: deep
---
<script setup lang="ts">
import "./../dist/index.js";
</script>

# Term Annotation (rich ontology annotation display)

Ontology elements provide a term annotation component that renders the annotation in a user-friendly format.

The following annotated term

```
Macrobrachium nipponense	NCBITAXON	http://purl.obolibrary.org/obo/NCBITaxon_159736
```

will be rendered as the following

<ontology-term-annotation 
    annotation="Macrobrachium nipponense	NCBITAXON	http://purl.obolibrary.org/obo/NCBITaxon_159736">
</ontology-term-annotation>

<br/><br/>

#### Code sample

```html
 <ontology-term-annotation 
    annotation="Macrobrachium nipponense	NCBITAXON	http://purl.obolibrary.org/obo/NCBITaxon_159736">
</ontology-term-annotation>
```

## props

| Name        |      Type      |  Default | Description |
| ----------- | :------------: | :------: | :---------- |
| annotation  | string         |   null   | Single term annotation output from ontology-autocomplete component |

## events

*no events*

## styling

*coming soon*