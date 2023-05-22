<template>
  <div>
    <label v-if="label">{{ label }}</label>
    <div>
      <textarea
        v-model="autocompleteText"
        id="autocomplete"
        type="text"
        class="o_annotate_textarea"
        line="10"
      ></textarea>
      <textarea
        id="mainInput"
        @keyup.stop="processInput"
        @change.stop="propogateData"
        v-model="inputText"
        type="text"
        class="o_annotate_textarea"
      ></textarea>
    </div>
    <p v-if="info && matches.length == 0">{{ info }}</p>
    <span v-if="currentMatchedOntologyTerm">
      <code>
        <pre>{{ currentMatchedOntologyTermValue }}</pre>
      </code>
    </span>
    <span v-if="annotatedTerms && annotatedTerms.length > 0">
      <code>
        <pre>{{ bratOnto }}</pre>
      </code>
    </span>
  </div>
</template>

<script lang="ts" setup>
import { ref, computed } from 'vue'

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
  format: {
    type: String,
    required: false,
    default: 'text'
  }
})

let inputText = ref('')
let autocompleteText = ref('')
let typingTimer = -1
let doneTypingInterval = 100
let currentMatchIndex = 0
let matches = ref([])
let lastW = ''
let last2W = ''
let queryLastTwoTerms = false
let annotatedTerms: any = ref([])
let annotatedTermsJSON: any = ref([])
let currentMatchedOntologyTerm: any = ref(null)

const currentMatchedOntologyTermValue = computed(() => {
  if (!currentMatchedOntologyTerm.value) {
    return null
  }

  return currentMatchedOntologyTerm.value
    ? currentMatchedOntologyTerm.value['label'] +
        '\t' +
        currentMatchedOntologyTerm.value['ontology_prefix'] +
        '\t' +
        currentMatchedOntologyTerm.value['iri'] +
        '\t' +
        currentMatchedOntologyTerm.value['type']
    : ''
})

const emit = defineEmits(['change'])

const bratOnto = computed(() => {
  if (!inputText.value) {
    return null
  }
  if (props.format && props.format == 'json') {
    return {
      text: inputText.value,
      ontology: annotatedTerms.value
    }
  } else {
    return inputText.value + '\n$$$$\n' + annotatedTerms.value.join('\n')
  }
})

async function processInput(e: any) {
  if (inputText.value == '') {
    autocompleteText.value = ''
    return
  }

  if (typingTimer > -1) {
    clearTimeout(typingTimer)
  }

  if (e.key == 'ArrowDown') {
    if (currentMatchIndex == 9) {
      reset()
    }
    currentMatchIndex += 1
    updateAutoCompleteText()
    e.preventDefault()
    return
  } else if (e.key == 'ArrowUp') {
    if (currentMatchIndex == 0) {
      reset()
    }
    currentMatchIndex -= 1
    updateAutoCompleteText()
    e.preventDefault()
    return
  } else if (e.key == 'ArrowRight') {
    e.preventDefault()
    tabkeyPressed()
  } else {
    if (inputText.value) {
      let wordsArray = inputText.value.split(' ')
      if (wordsArray.length > 1) {
        lastW = wordsArray.slice(-1)[0]
        last2W = wordsArray.slice(-2).join(' ')
      } else {
        lastW = wordsArray[0]
        last2W = lastW
      }
      if (lastW == '') {
        queryLastTwoTerms = false
        currentMatchedOntologyTerm.value = null
        autocompleteText.value = inputText.value
      }
      if (queryLastTwoTerms) {
        lastW = last2W
      }
      searchDB()
    }
  }
}

function propogateData() {
  emit('change', bratOnto.value)
}

function reset() {
  queryLastTwoTerms = true
  lastW = last2W
  currentMatchIndex = 0
  searchDB()
}

function searchDB() {
  typingTimer = setTimeout(function () {
    CallMLDataSetAPI()
  }, doneTypingInterval)
}

function tabkeyPressed() {
  inputText.value = autocompleteText.value
  annotatedTerms.value.push(currentMatchedOntologyTermValue.value)
  annotatedTermsJSON.value.push(currentMatchedOntologyTerm.value)
}

async function CallMLDataSetAPI() {
  const url = 'https://service.tib.eu/ts4tib/api/select?q='
  const queries = encodeURI('&obsoletes=false&local=false&rows=10')

  let response = (await fetch(`${url}${lastW}${queries}`)).json()
  response.then((body) => {
    matches.value = body.response.docs
    if (matches.value.length > 0) {
      currentMatchIndex = 0
      updateAutoCompleteText()
    }
  })
}

function updateAutoCompleteText() {
  let matchedTerm = ''
  currentMatchedOntologyTerm.value = matches.value[currentMatchIndex]
  matchedTerm = currentMatchedOntologyTerm.value['label']
  let term = matchedTerm.toLowerCase().replace(lastW, '')
  if (term != undefined) {
    autocompleteText.value = inputText.value + term
  }
}
</script>
<style scoped>
.o_annotate_textarea {
  min-height: 100px;
  width: 100%;
  border: 1px solid #d7d7d7;
  box-shadow: none;
  box-sizing: border-box;
  padding: 12px 10px 12px 10px;
  resize: none;
}

#mainInput {
  background: transparent;
  color: black;
  opacity: 100;
}

#autocomplete {
  opacity: 0.6;
  background: transparent;
  position: absolute;
  box-sizing: border-box;
  cursor: text;
  pointer-events: none;
  color: black;
  opacity: 0.6;
  background: transparent;
}
</style>
