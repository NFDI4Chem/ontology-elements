<script setup lang="ts">
import OntologyAnnotation from './components/ontology-annotation.ce.vue'
</script>
<template>
  <header>
    <div class="wrapper">
      <ontology-annotation
        :annotation="'Macrobrachium nipponense	NCBITAXON	http://purl.obolibrary.org/obo/NCBITaxon_159736'"
      ></ontology-annotation>
    </div>
  </header>
</template>
