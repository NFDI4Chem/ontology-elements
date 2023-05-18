---
outline: deep
---

# Annotate - Textarea

<script setup lang="ts">
import "./../dist/index.js";
import { ref } from 'vue';
let value = ref("Seven previously undescribed diterpenoids, tinocrisposides A–D (1–4) and borapetic acids A (5), B (6), and C (7), together with 16 known compounds, were isolated from the stem of Tinospora crispa (Menispermaceae). The structures of the new isolates were elucidated by spectroscopic and chemical methods. The β-cell protective effect of the tested compounds was examined on insulin-secreting BRIN-BD11 cells under dexamethasone treatment. Diterpene glycosides 12, 14–16, and 18 presented a substantial protective effect on BRIN-BD11 cells treated with dexamethasone in a dose-dependent manner. Compounds 4 and 17 with two sugar moieties exhibited clear protective effects on β-cells.")
</script>

<br/>

<div>
<ontology-annotate
    format="text"
    label="Input field (ontology driven)"
    info="Search terms across ontologies"
    modelValue="value"
    @change="value = $event.detail[0]"
></ontology-annotate>
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
<ontology-annotate
    format="text"
    label="Input field (ontology driven)"
    info="Search terms across ontologies"
    modelValue="value"
></ontology-annotate>
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