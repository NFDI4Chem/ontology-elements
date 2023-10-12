---
outline: deep
---

# Select - Dropdown

<script setup lang="ts">
import "./../dist/index.js";
import { ref } from 'vue';
let value = ref("")
</script>

<br/>

<ontology-select
@change="value = $event"
format="text"
label="Select field (ontology driven)"
info="Search terms across ontologies"
placeholder="search term"
ontology="chmo"
:value="value"
></ontology-select>

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
<ontology-select
@change="value = $event"
format="text"
label="Select field (ontology driven)"
info="Search terms across ontologies"
placeholder="search term"
ontology="chmo"
:value="value"
></ontology-select>
```


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