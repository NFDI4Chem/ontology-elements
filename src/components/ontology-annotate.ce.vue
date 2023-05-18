<template>
  <div>
    <label v-if="label">{{ label }}</label>
    <div>
      <div
        @mouseup="checkSelection"
        @keyup="checkSelection"
        @input="onInput"
        class="vc_textarea"
        contenteditable="true"
      >
        {{ content }}
      </div>
      <div class="contextmenu" :style="'left:' + cords.x + 'px; top:' + cords.y + 'px'">
      <div class="contextmenu-item" v-if="matches.length == 0 && !loading">No matches found</div>
      <div v-else>
        <div
          class="contextmenu-item"
          v-for="doc in matches"
          :key="doc['short_label']"
          role="option"
          tabindex="-1"
          aria-selected="false"
          aria-setsize="3"
          aria-posinset="0"
          @click.capture.stop.prevent="selectTerm(doc)"
        >
          <p v-html="highlight(doc['label'])"></p>
          <small class="iri">{{ doc['ontology_prefix'] }}:{{ doc['iri'] }}</small>
        </div>
      </div>
    </div>
    </div>
    <div>
      <div v-if="loading" style="float: right">
        <i>...loading</i>
      </div>
      <div>
        <span v-if="info">{{ info }}</span>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { ref, computed, reactive } from 'vue'

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
  ontologies: {
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

let content = ref('')

const bratOnto = computed(() => {
  if (!content.value) {
    return null
  }
  if (props.format && props.format == 'json') {
    return {
      text: content.value,
      ontology: selectedTerms
    }
  } else {
    return (
      content.value +
      '\n$$$$\n' +
      selectedTerms
        .map(
          (t) =>
            t.ontology['type'][0] +
            '\t' +
            t.ontology['ontology_prefix'] +
            ' ' +
            t.context['start'] +
            ' ' +
            t.context['end'] +
            '\t' +
            t.ontology['label'] +
            '\t' +
            t.ontology['iri']
        )
        .join('\n')
    )
  }
})

let searchTerm = ref('')

let loading = ref(false)

let matches = ref([])

type MyType = {
  ontology: any
  context: any
}

let selectedTerms: Array<MyType> = reactive([])

const pendingRequests = new WeakMap()

let cords: any = ref({ x: -1000, y: 0, start: -1, end: -1 })

function onInput(e: any) {
  content.value = e.target.innerText
  emit('change', bratOnto.value)
}

function selectTerm(doc: any) {
  let data = { ontology: doc, context: cords.value }
  selectedTerms.push(data)
  cords.value = { x: -1000, y: 0, start: -1, end: -1 }
  matches.value = []
  searchTerm.value = ''
  emit('change', bratOnto.value)
  // var selectionRange = window.getSelection()?.getRangeAt(0);
  // var selectedText = selectionRange?.extractContents();
  // var span = document.createElement("span");
  // span.style.backgroundColor = "yellow";
  // span.appendChild(selectedText!);
  // selectionRange?.insertNode(span);
}

// function onBlur() {
//   searchTerm.value = ''
//   matches.value = []
//   cords.value = { x: -1000, y: 0, start: -1, end: -1 }
// }

function checkSelection(e: any) {
  searchTerm.value = ''
  if (window.getSelection) {
    var selection = window.getSelection()
    console.log(selection)
    searchTerm.value = selection?.toString()!
    if (searchTerm.value && searchTerm.value != '') {
      matches.value = []
      cords.value = { x: -1000, y: 0, start: -1, end: -1 }
      getSelectionCoords(selection)
      getSelectOptions(e)
    } else {
      cords.value = { x: -1000, y: 0, start: -1, end: -1 }
      matches.value = []
    }
  }
}

function highlight(content: string) {
  if (!searchTerm.value) {
    return content
  }
  return content.replace(new RegExp(searchTerm.value, 'gi'), (match) => {
    return '<span class="highlightText">' + match + '</span>'
  })
}

function getSelectionCoords(sel: any, atStart: boolean = true) {
  if (!sel?.rangeCount) return null
  let range = sel.getRangeAt(0).cloneRange()
  console.log(range.getClientRects())
  if (!range.getClientRects) return null
  range.collapse(atStart)
  let rects = range.getClientRects()
  if (rects.length <= 0){
    cords.value.x = 0
    cords.value.y = 0
  }else{
    let rect = rects[0]
    cords.value.start = sel.anchorOffset
    cords.value.end = sel.focusOffset
    cords.value.x = rect.x
    cords.value.y = rect.y + rects[0]?.height
  }
}

async function getSelectOptions(event: any) {
  if (searchTerm.value === '') {
    matches.value = []
    return []
  }
  let ontologiesExists = searchTerm.value.indexOf(':')
  let ontologies = ''
  let term = null
  if (ontologiesExists < 0) {
    ontologies = props.ontologies
    term = searchTerm.value
  } else {
    term = searchTerm.value.split(':')[1]
    ontologies = searchTerm.value.split(':')[0]
  }

  const ele = event.currentTarget
  const previousController = pendingRequests.get(ele)

  if (previousController) {
    previousController.abort()
  }

  const controller = new AbortController()
  pendingRequests.set(ele, controller)

  const url = 'https://service.tib.eu/ts4tib/api/select?q='
  const queries = encodeURI(
    '&ontology=' +
      ontologies +
      '&fieldList=iri,label,short_form,obo_id,ontology_name,ontology_prefix,description,type&obsoletes=false&local=false&rows=10'
  )

  loading.value = true

  let response = (await fetch(`${url}${term}${queries}`, { signal: controller.signal })).json()

  response.then((body) => {
    pendingRequests.delete(ele)
    matches.value = body.response.docs
    loading.value = false
  })
}
</script>
<style scoped>
.vc_textarea {
  min-height: 100px;
  width: 100%;
  border: 1px solid #d7d7d7;
  box-shadow: none;
  box-sizing: border-box;
  padding: 12px 45px 12px 10px;
  width: 100%;
}

#mainInput {
  background: transparent;
  color: black;
  opacity: 1;
}

.contextmenu {
  position: absolute;
  background: #ffffff;
  color: #000;
  margin-top: 5px;
  border: 1px solid #f1f1f2;
  box-shadow: 0 0.5rem 1.5rem rgba(0, 0, 0, 0.2);
  border-radius: 0.2rem;
  width: 15rem;
  max-width: calc(100vw - 2rem);
  max-height: 300px;
  overflow-y: scroll;
  overflow-x: hidden;
  z-index: 100;
}

.contextmenu .contextmenu-item {
  border-bottom: 1px solid #c3c3c3;
  padding: 8px;
}

.contextmenu .contextmenu-item:hover {
  cursor: pointer;
  background-color: #f1f1f2;
}

.contextmenu .contextmenu-item p {
  margin: 0;
  padding: 0;
}

.contextmenu .contextmenu-item .iri {
  margin: 0;
  width: 15rem;
  white-space: nowrap;
  text-overflow: ellipsis;
  word-wrap: break-word;
  padding: 0;
}
</style>
