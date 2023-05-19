---
outline: deep
---
<script setup lang="ts">
import "./../dist/index.js";
</script>

# Annotation (read-only)

Ontology elements provide an annotation component that renders the annotation in a user-friendly format.

Annotated term below

```
Macrobrachium nipponense	NCBITAXON	http://purl.obolibrary.org/obo/NCBITaxon_159736
```

 will be rendered as the following

<ontology-annotation 
    annotation="Macrobrachium nipponense	NCBITAXON	http://purl.obolibrary.org/obo/NCBITaxon_159736">
</ontology-annotation>

<br/>

#### Code sample

```html
 <ontology-annotation 
    annotation="Macrobrachium nipponense	NCBITAXON	http://purl.obolibrary.org/obo/NCBITaxon_159736">
</ontology-annotation>
```

## props

| Name        |      Type      |  Default | Description |
| ----------- | :------------: | :------: | :---------- |
| annotation  | string         |   null   | Single term annotation output from ontology-autocomplete component |

## events

*no events*

## styling

*coming soon*