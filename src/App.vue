<script setup lang="ts">
import OntologyAnnotation from './components/ontology-annotation.ce.vue'
import OntologyAutoComplete from './components/ontology-autocomplete.ce.vue'
import OntologyCompose from './components/ontology-compose.ce.vue'
import OntologyAnnotate from './components/ontology-annotate.ce.vue'
import { ref } from 'vue'
let autoCompleteValue = ref('')
let selectedValue = ref('Homo sapiens	OBI	http://purl.obolibrary.org/obo/NCBITaxon_9606	class')
let annotatedContent = ref('')
let composedContent = ref('')
</script>
<template>
  <header>
    <div class="wrapper">
      <h2>Ontology Annotation</h2>
      <ontology-annotation :annotation="selectedValue"></ontology-annotation>
      <hr />
      <h2>Ontology Autocomplete / Type ahead</h2>
      <ontology-auto-complete
        @change="autoCompleteValue = $event"
        format="text"
        label="Input field (ontology driven)"
        info="Search terms across ontologies"
        placeholder="search term"
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
