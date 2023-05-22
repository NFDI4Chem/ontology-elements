---
outline: deep
---

# Compose - Textarea

<script setup lang="ts">
import "./../dist/index.js";
import { ref } from 'vue';
let value = ref("")
</script>

<br/>

<div>
<ontology-compose
    format="text"
    label="Input field (ontology driven)"
    info="Search terms across ontologies"
    modelValue="value"
    @change="value = $event.detail[0]"
></ontology-compose>
</div>

<br/>

<span v-if="value && value != ''">
<br/>Output:

---

<pre class="custom-code-block"><code>{{ value }}</code></pre>

</span>
<br/>

---

#### Code sample

```html
<ontology-compose
    format="text"
    label="Input field (ontology driven)"
    info="Search terms across ontologies"
    modelValue="value"
    @change="value = $event.detail[0]"
></ontology-compose>
```

## props

| Name        |      Type      |  Default | Description |
| ----------- | :------------: | :------: | :---------- |
| format      |                |          |             |
| label       |                |          |             |
| info        |                |          |             |

## events

| Name        |      Type      |  Default | Description |
| ----------- | :------------: | :------: | :---------- |
| change      |                |          |             |

## styling

*coming soon*