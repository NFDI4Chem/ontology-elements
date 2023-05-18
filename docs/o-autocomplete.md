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

#text
<pre style="margin:0">
<code>
{{ value }}
</code>
</pre>

#rich
<ontology-annotation 
    :annotation="value">
</ontology-annotation>
</span>
<br/>
<br/>

---

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

## props

| Name        |      Type      |  Default | Description |
| ----------- | :------------: | :------: | :---------- |
| format      |                |          |             |
| label       |                |          |             |
| info        |                |          |             |
| placeholder |                |          |             |

## events

| Name        |      Type      |  Default | Description |
| ----------- | :------------: | :------: | :---------- |
| change      |                |          |             |

## styling

*coming soon*