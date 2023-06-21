<template>
  <div class="auto-search-wrapper">
    <label v-if="label">{{ label }}</label>
    <input
      type="text"
      id="search"
      v-model="searchTerm"
      @input.stop="getSelectOptions"
      @focusin="isFocused = true"
      :placeholder="placeholder"
      :class="styling"
      autocomplete="off"
    />
    <div v-if="tree.length > 0 && isFocused" class="auto-results-wrapper auto-is-active">
      <ul tabindex="0" role="listbox">
        <span
          v-for="doc in tree"
          role="option"
          tabindex="-1"
          aria-selected="false"
          aria-setsize="3"
          aria-posinset="0"
        >
          <ontology-tree :doc="doc" @selected="selectTerm($event)"></ontology-tree>
        </span>
      </ul>
    </div>
    <div v-else>
      <p>{{ info }}</p>
    </div>
    <button
      v-if="searchTerm != '' && matches.length > 0"
      type="button"
      aria-label="clear the search query"
    ></button>
  </div>
</template>

<script lang="ts" setup>
import { ref, computed, watch, onMounted } from 'vue'
import OntologyTree from './partials/ontology-tree.ce.vue'

const emit = defineEmits(['change'])

const props = defineProps({
  label: {
    type: String,
    required: false,
    default: ''
  },
  info: {
    type: String,
    required: false,
    default: ''
  },
  placeholder: {
    type: String,
    required: false,
    default: ''
  },
  ontology: {
    type: String,
    required: false,
    default: ''
  },
  value: {
    type: String,
    required: false,
    default: ''
  },
  styling: {
    type: String,
    required: false,
    default: ''
  },
  format: {
    type: String,
    required: false,
    default: 'text'
  }
})

let searchTerm = ref('')
let tree = ref([])
let matches = ref([])
let selectedTerm = ref(null)
let isFocused = ref(false)

const selectTerm = (term: any) => {
  if (term == '') {
    selectedTerm.value = null
    searchTerm.value = ''
  } else {
    selectedTerm.value = term
    searchTerm.value = term.label
    emit('change', selectedValue.value)
    matches.value = []
    isFocused.value = false
  }
}

const selectedValue = computed(() => {
  if (!selectedTerm.value) {
    return null
  }
  console.log(selectedTerm.value['type'])
  if (props.format && props.format == 'json') {
    return selectedTerm.value
  } else {
    return selectedTerm.value
      ? selectedTerm.value['label'] +
          '\t' +
          selectedTerm.value['ontology_prefix'] +
          '\t' +
          selectedTerm.value['iri'] +
          '\t' +
          (selectedTerm.value['type'] ? selectedTerm.value['type'] : '')
      : ''
  }
})

watch(
  () => props.value,
  (newValue) => {
    selectTerm(composeOntologyObject(newValue))
  }
)

onMounted(() => {
  loadRootTerms()
})

async function loadRootTerms() {
  const url = 'https://service.tib.eu/ts4tib/api/ontologies/'
  const queries = encodeURI('/terms/roots?includeObsoletes=false')

  let response = (await fetch(`${url}${props.ontology}${queries}`)).json()
  response.then((body) => {
    tree.value = body._embedded.terms
  })
}

async function getSelectOptions() {
  if (searchTerm.value === '') {
    matches.value = []
    return []
  }
  let ontologyExists = searchTerm.value.indexOf(':')
  let ontology = ''
  let term = null
  if (ontologyExists < 0) {
    ontology = props.ontology
    term = searchTerm.value
  } else {
    term = searchTerm.value.split(':')[1]
    ontology = searchTerm.value.split(':')[0]
  }

  const url = 'https://service.tib.eu/ts4tib/api/select?q='
  const queries = encodeURI(
    '&ontology=' +
      ontology +
      '&fieldList=iri,label,short_form,obo_id,ontology_name,ontology_prefix,description,type&obsoletes=false&local=false&rows=10'
  )

  let response = (await fetch(`${url}${term}${queries}`)).json()
  response.then((body) => {
    matches.value = body.response.docs
  })
}

function highlight(content: string) {
  if (!searchTerm.value) {
    return content
  }
  return content.replace(new RegExp(searchTerm.value, 'gi'), (match) => {
    return '<span class="highlightText">' + match + '</span>'
  })
}

function composeOntologyObject(content: string) {
  if (!content || content == '') {
    return ''
  }
  const data = content.split('\t')
  let _ontologyObject = {
    label: data[0],
    iri: data[2],
    ontology_prefix: data[1],
    type: data[3]
  }
  return _ontologyObject
}

function concat(data: Array<[]>) {
  return data ? data.join('') : ''
}
</script>

<style scoped>
:root {
  --close-button: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath d='M18.984 6.422 13.406 12l5.578 5.578-1.406 1.406L12 13.406l-5.578 5.578-1.406-1.406L10.594 12 5.016 6.422l1.406-1.406L12 10.594l5.578-5.578z'/%3E%3C/svg%3E");
  --loupe-icon: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath fill='%23929292' d='M16.041 15.856a.995.995 0 0 0-.186.186A6.97 6.97 0 0 1 11 18c-1.933 0-3.682-.782-4.95-2.05S4 12.933 4 11s.782-3.682 2.05-4.95S9.067 4 11 4s3.682.782 4.95 2.05S18 9.067 18 11a6.971 6.971 0 0 1-1.959 4.856zm5.666 4.437-3.675-3.675A8.967 8.967 0 0 0 20 11c0-2.485-1.008-4.736-2.636-6.364S13.485 2 11 2 6.264 3.008 4.636 4.636 2 8.515 2 11s1.008 4.736 2.636 6.364S8.515 20 11 20a8.967 8.967 0 0 0 5.618-1.968l3.675 3.675a.999.999 0 1 0 1.414-1.414z'/%3E%3C/svg%3E");
}

ul,
#myUL {
  list-style-type: none;
  padding-left: 10px;
}

#myUL {
  margin: 0;
  padding: 0;
}

.caret {
  cursor: pointer;
  -webkit-user-select: none; /* Safari 3.1+ */
  -moz-user-select: none; /* Firefox 2+ */
  -ms-user-select: none; /* IE 10+ */
  user-select: none;
}

.caret::before {
  content: '\25B6';
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

.auto-search-wrapper {
  display: block;
  position: relative;
  width: 100%;
}

.auto-search-wrapper p {
  margin: 0;
  padding: 0;
  font-size: 1.1em;
}

.auto-search-wrapper p .highlightText {
  font-weight: bold;
}

.auto-search-wrapper input {
  border: 1px solid #d7d7d7;
  box-shadow: none;
  box-sizing: border-box;
  font-size: 16px;
  padding: 12px 45px 12px 10px;
  width: 100%;
}

.auto-search-wrapper input:focus {
  border: 1px solid #d7d7d7;
  outline: none;
}

.auto-search-wrapper input::-ms-clear {
  display: none;
}

.auto-search-wrapper ul {
  list-style: none;
  margin: 0;
  overflow: auto;
  padding: 0;
}

.auto-search-wrapper ul li {
  cursor: pointer;
  margin: 0;
  overflow: hidden;
  padding: 10px;
  position: relative;
  border: 1px dotted #f1f1f2;
}

.auto-search-wrapper ul li:hover {
  background-color: #f1f1f2;
}

.auto-search-wrapper ul li:not(:last-child) {
  border-top: none;
}

.auto-search-wrapper ul li[disabled] {
  background: #ececec;
  opacity: 0.5;
  pointer-events: none;
}

.auto-search-wrapper .auto-expanded {
  border: 1px solid #d7d7d7;
  outline: none;
}

.auto-search-wrapper.loupe:before {
  filter: invert(60%);
}

.auto-is-loading:after {
  animation: auto-spinner 0.6s linear infinite;
  border-color: #d9d9d9 grey grey #d9d9d9;
  border-radius: 50%;
  border-style: solid;
  border-width: 2px;
  bottom: 0;
  box-sizing: border-box;
  content: '';
  height: 20px;
  margin: auto;
  position: absolute;
  right: 10px;
  top: 0;
  width: 20px;
}

.auto-is-loading .auto-clear {
  display: none;
}

@keyframes auto-spinner {
  to {
    transform: rotate(1turn);
  }
}

li.loupe:before {
  bottom: auto;
  top: 15px;
}

.loupe input {
  padding: 12px 45px 12px 35px;
}

.loupe:before {
  background-image: var(--loupe-icon);
  bottom: 0;
  content: '';
  height: 17px;
  left: 10px;
  margin: auto;
  position: absolute;
  top: 0;
  width: 17px;
}

.auto-selected:before {
  opacity: 1;
}

.auto-clear {
  align-items: center;
  background-color: transparent;
  border: none;
  bottom: 0;
  cursor: pointer;
  display: flex;
  height: auto;
  justify-content: center;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  width: 40px;
}

.auto-clear:before {
  content: var(--close-button);
  height: 24px;
  line-height: 100%;
  width: 24px;
}

.auto-clear span {
  display: none;
}

.auto-results-wrapper {
  background-color: #fff;
  border: 1px solid #d7d7d7;
  border-top: none;
  box-sizing: border-box;
  display: none;
  overflow: hidden;
}

.auto-results-wrapper ul > .loupe {
  padding-left: 40px;
}

.auto-results-wrapper.auto-is-active {
  display: block;
  margin-top: -1px;
  position: absolute;
  width: 100%;
  z-index: 99999;
}

.auto-selected {
  background-color: #e6e6e6;
}

.auto-selected + li:before {
  border-top: none;
}

.auto-error {
  border: 1px solid #ff3838;
}

.auto-error::placeholder {
  color: #f66;
  opacity: 1;
}

.hidden {
  display: none;
}

.icon {
  height: 1em;
  width: 1em;
  margin-bottom: 2px;
  cursor: pointer;
  fill: #d7d7d7;
}

.icon:hover {
  fill: #666;
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
