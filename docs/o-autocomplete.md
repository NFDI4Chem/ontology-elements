---
outline: deep
---

# Autocomplete - Input

<script setup lang="ts">
import "./../dist/index.js";
import { ref } from 'vue';
let value = ref("")
</script>

<br/>

<ontology-autocomplete 
    format="text"
    label="Input field (ontology driven)"
    info="Search terms across ontologies. Example: Homo sapiens, obi:Homo sapiens"
    @change="value = $event.detail[0]"
    placeholder="search term"
></ontology-autocomplete>

<span v-if="value && value != ''">
<br/>Output:

**#text**
<pre style="margin:0"><code>{{ value }}</code></pre>

**#rich**
<ontology-term-annotation 
    :annotation="value">
</ontology-term-annotation>
</span>
<br/>
<br/>


#### Code sample

```html
<ontology-autocomplete 
    format="text"
    label="Input field (ontology driven)"
    info="Search terms across ontologies. Example: Homo sapiens, obi:Homo sapiens"
    @change="value = $event.detail[0]"
    placeholder="search term"
></ontology-autocomplete>
```

## Search filters - Ontologies 

<ontology-autocomplete 
    format="text"
    label=""
    info="Limiting search to - chmo,ncbitaxon,pato,efo,mtbls,bto,chebi,ncit,uo"
    @change="value = $event.detail[0]"
    ontologies="chmo,ncbitaxon,pato,efo,mtbls,bto,chebi,ncit,uo"
    placeholder="search term"
></ontology-autocomplete>

<br/>

#### Code sample

```html
<ontology-autocomplete 
    format="text"
    label=""
    info="Limiting search to - chmo,ncbitaxon,pato,efo,mtbls,bto,chebi,ncit,uo"
    @change="value = $event.detail[0]"
    ontologies="chmo,ncbitaxon,pato,efo,mtbls,bto,chebi,ncit,uo"
    placeholder="search term"
></ontology-autocomplete>
```

## Overriding Search filters 

<ontology-autocomplete 
    format="text"
    label=""
    info="Prefix search value to override default ontologies. Try searching for 'chmo:homogenisation'"
    @change="value = $event.detail[0]"
    ontologies="ncbitaxon,pato,efo,mtbls,bto,chebi,ncit,uo"
    placeholder="search term"
></ontology-autocomplete>

## props

| Name        |      Type      |  Default | Description |
| ----------- | :------------: | :------: | :---------- |
| format      |    string      |     -    |             |
| label       |    string      |     -    |             |
| info        |    string      |     -    |             |
| placeholder |    string      |     -    |             |
| value       |    string      |     -    | default value |
| ontologies  |    string      |     -    | Comma separated values of ontologies to restrict the OLS look up. |

## events

| Name        |      Type      |  Default | Description |
| ----------- | :------------: | :------: | :---------- |
| change      |      event     |    -     |       Events emitted via OE are dispatched as native CustomEvents. Additional event arguments (payload) will be exposed as an array on the CustomEvent object as its detail property - ```$event.detail[0] ```     |

## styling

*coming soon*