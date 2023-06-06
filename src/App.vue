<script setup lang="ts">
import OntologyTermAnnotation from './components/ontology-term-annotation.ce.vue'
import OntologyTextAnnotation from './components/ontology-text-annotation.ce.vue'
import OntologyAutoComplete from './components/ontology-autocomplete.ce.vue'
import OntologyCompose from './components/ontology-compose.ce.vue'
import OntologyAnnotate from './components/ontology-annotate.ce.vue'
import { ref } from 'vue'
let autoCompleteValue = ref('Homo sapiens	OBI	http://purl.obolibrary.org/obo/NCBITaxon_9606	class')
let annotatedTerm = ref('Homo sapiens	OBI	http://purl.obolibrary.org/obo/NCBITaxon_9606	class')
let annotatedText =
  ref(`Seven previously undescribed diterpenoids, tinocrisposides A–D (1–4) and borapetic acids A (5), B (6), and C (7), together with 16 known compounds, were isolated from the stem of Tinospora crispa (Menispermaceae). The structures of the new isolates were elucidated by spectroscopic and chemical methods. The β-cell protective effect of the tested compounds was examined on insulin-secreting BRIN-BD11 cells under dexamethasone treatment. Diterpene glycosides 12, 14–16, and 18 presented a substantial protective effect on BRIN-BD11 cells treated with dexamethasone in a dose-dependent manner. Compounds 4 and 17 with two sugar moieties exhibited clear protective effects on β-cells.
$$$$
c	HP 29 41	diterpenoid	http://purl.obolibrary.org/obo/CHEBI_23849
c	SNOMEDCT 197 211	Family Menispermaceae (organism)	http://snomed.info/id/107532005
c	BTO 391 400	BRIN-BD11 cell	http://purl.obolibrary.org/obo/BTO_0002142`)
let annotatedContent = ref('')
let composedContent = ref('')
</script>
<template>
  <header>
    <div class="wrapper">
      <h2>Ontology Term Annotation</h2>
      <ontology-term-annotation :annotation="annotatedTerm"></ontology-term-annotation>
      <hr />
      <h2>Ontology Text Annotation</h2>
      <ontology-text-annotation :annotation="annotatedText"></ontology-text-annotation>
      <hr />
      <h2>Ontology Autocomplete / Type ahead</h2>
      <ontology-auto-complete
        @change="autoCompleteValue = $event"
        format="text"
        label="Input field (ontology driven)"
        info="Search terms across ontologies"
        placeholder="search term"
        :value="autoCompleteValue"
      ></ontology-auto-complete>
      <button @click="autoCompleteValue = ''">CLEAR</button>
      <br />
      <ontology-auto-complete
        @change="autoCompleteValue = $event"
        format="text"
        label="Input field (ontology driven)"
        info="Search terms across ontologies"
        placeholder="search term"
        :value="autoCompleteValue"
      ></ontology-auto-complete>
      <br />
      <code v-if="autoCompleteValue">
        Value:
        <pre>{{ autoCompleteValue }}</pre>
      </code>
      <hr />
      <h2>Ontology Annotate</h2>
      <div>
        <ontology-annotate
          format="text"
          label="Input field (ontology driven)"
          info="Search terms across ontologies"
          @change="annotatedContent = $event"
        ></ontology-annotate>
      </div>
      <div>
        <code>
          <pre>{{ annotatedContent }}</pre>
        </code>
      </div>
      <hr />
      <div>
        <h2>Ontology Compose</h2>
        <ontology-compose
          format="text"
          label="Input field (ontology driven)"
          info="Search terms across ontologies"
          @change="composedContent = $event"
        ></ontology-compose>
        <div>
          <code>
            <pre>{{ annotatedContent }}</pre>
          </code>
        </div>
      </div>
    </div>
  </header>
</template>
