<template>
  <span v-if="doc" tabindex="0" role="listbox">
    <li
      :key="doc['label']"
      role="option"
      tabindex="-1"
      aria-selected="false"
      aria-setsize="3"
      aria-posinset="0"
    >
      <span @click="expandSelection(doc)" :class="[doc['has_children'] ? 'caret' : 'nocaret']">
      </span>
      <span style="text-transform: capitalize" @click="selectTerm(doc)">{{ doc['label'] }}</span
      ><br />
      <p style="padding-left: 22px; color: #858484">
        <small>{{ doc['ontology_prefix'] }}:{{ doc['iri'] }}</small>
      </p>
      <span v-if="doc.children && doc.children.length > 0">
        <ul tabindex="0" role="listbox">
          <span
            v-for="child in doc.children"
            role="option"
            tabindex="-1"
            aria-selected="false"
            aria-setsize="3"
            aria-posinset="0"
          >
            <ontology-tree @selected="selectTerm($event)" :doc="child"></ontology-tree>
          </span>
        </ul>
      </span>
    </li>
  </span>
</template>

<script lang="ts" setup>
import { ref, computed, watch, onMounted } from 'vue'
import OntologyTree from './../partials/ontology-tree.ce.vue'

const emit = defineEmits(['selected'])

const props = defineProps({
  doc: {
    type: Object,
    required: true,
    default: {}
  }
})

let selectedTerm = ref('')

const selectTerm = (term: any) => {
  if (term) {
    emit('selected', term)
  }
}

async function expandSelection(doc: any) {
  const url = doc._links.children.href
  let response = (await fetch(`${url}`)).json()
  response.then((body) => {
    props.doc.children = body._embedded.terms
  })
}
</script>

<style scoped>
ul {
  padding-left: 10px !important;
}

li {
  border: none !important;
}

.nocaret {
  margin-right: 23px;
}

.caret {
  cursor: pointer;
  -webkit-user-select: none; /* Safari 3.1+ */
  -moz-user-select: none; /* Firefox 2+ */
  -ms-user-select: none; /* IE 10+ */
  user-select: none;
}

.caret::before {
  content: '\21E2';
  color: black;
  display: inline-block;
  margin-right: 6px;
}

.caret-down::before {
  -ms-transform: rotate(90deg); /* IE 9 */
  -webkit-transform: rotate(90deg); /* Safari */
  transform: rotate(90deg);
}

.nested {
  display: none;
}

.active {
  display: block;
}
</style>
