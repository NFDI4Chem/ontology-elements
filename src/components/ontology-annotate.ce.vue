<template>
  <div :id="'o_annotate_wrapper_' + reference" class="o_annotate_wrapper">
    <label class="o_annotate_label" v-if="label">{{ label }}</label>
    <div v-if="!hasShadowDOM">
      <div
        @mouseup="checkSelection"
        @keyup="checkSelection"
        @input="onInput"
        class="o_annotate_textarea"
        ref="o_annotate_div"
        contenteditable="true"
      >
        {{ content }}
      </div>
    </div>
    <div v-else>
      <textarea
        ref="o_annotate_textarea"
        @mouseup="checkSelection"
        @keyup="checkSelection"
        @input="onInput"
        class="o_annotate_textarea"
        >{{ content }}</textarea
      >
    </div>
    <div v-if="searchTerm != ''" class="contextmenu" :style="context_menu_styling">
      <div class="contextmenu_item" v-if="matches.length == 0 && !loading">No matches found</div>
      <div v-else>
        <div
          class="contextmenu_item"
          v-for="doc in matches"
          :key="doc['short_label']"
          role="option"
          tabindex="_1"
          aria_selected="false"
          aria_setsize="3"
          aria_posinset="0"
          @click.capture.stop.prevent="selectTerm(doc)"
        >
          <p v-html="doc['label']"></p>
          <small>{{ doc['ontology_prefix'] }}:{{ doc['short_form'] }}</small>
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
import { ref, computed, reactive, onMounted, type HtmlHTMLAttributes } from 'vue'

const reference = (Math.random() + 1).toString(36).substring(7)
const o_annotate_textarea = ref<HTMLTextAreaElement | null>(null)
const hasShadowDOM = ref(false)
const emit = defineEmits(['change'])
let content = ref('')
let cords: any = ref({ x: -1000, y: 0, start: -1, end: -1 })
let searchTerm = ref('')
let loading = ref(false)
let matches = ref([])
type OntologyType = {
  ontology: any
  context: any
}
let selectedTerms: Array<OntologyType> = reactive([])
const pendingRequests = new WeakMap()
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

const context_menu_styling = computed(() => {
  return 'left:' + cords.value.x + 'px; top:' + cords.value.y + 'px'
})

const bratOnto = computed(() => {
  let _content = hasShadowDOM ? o_annotate_textarea.value?.value : content.value
  if (!_content) {
    return null
  }
  if (props.format && props.format == 'json') {
    return {
      text: _content,
      ontology: selectedTerms
    }
  } else {
    return (
      _content +
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

onMounted(() => {
  var el = document.getElementsByTagName('ontology-annotate')[0]
  if (!!el?.shadowRoot) {
    hasShadowDOM.value = true
  }
})

function onInput(e: any) {
  content.value = e.target.innerText
  emit('change', bratOnto.value)
}

function selectTerm(doc: any) {
  let data = {
    ontology: {},
    context: {}
  }
  if (!hasShadowDOM) {
    data = { ontology: doc, context: cords.value }
  } else {
    if(o_annotate_textarea){
      let _cords = { x: 0, y: 0, start: o_annotate_textarea.value?.selectionStart, end: o_annotate_textarea.value?.selectionEnd }
      data = { ontology: doc, context: _cords }
    }
  }
  selectedTerms.push(data)
  matches.value = []
  searchTerm.value = ''
  emit('change', bratOnto.value)
}

function checkSelection(e: any) {
  searchTerm.value = ''
  if (window.getSelection) {
    var selection = window.getSelection()
    searchTerm.value = selection?.toString()!
    if (searchTerm.value && searchTerm.value != '') {
      matches.value = []
      getSelectionCoords(selection)
      getSelectOptions(e)
    } else {
      cords.value = { x: -1000, y: 0, start: -1, end: -1 }
      matches.value = []
    }
  }
}

function getSelectionCoords(sel: any, atStart: boolean = true) {
  if (!sel?.rangeCount) return null
  let range = sel.getRangeAt(0).cloneRange()
  if (!range.getClientRects) return null
  range.collapse(atStart)
  let rects = range.getClientRects()
  if (rects.length <= 0) {
    cords.value.x = 0
    cords.value.y = 0
  } else {
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
    '&ontolog-y=' +
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
.o_annotate_textarea {
  min-height: 100px;
  width: 100%;
  border: 1px solid #d7d7d7;
  box-shadow: none;
  box-sizing: border_box;
  padding: 12px 10px 12px 10px;
  resize: none;
}

#mainInput {
  background: transparent;
  color: black;
  opacity: 1;
}

.contextmenu {
  position: absolute;
  top: 0;
  right: 0;
  background: #ffffff;
  color: #000;
  border: 1px solid #f1f1f2;
  width: 15rem;
  max-width: calc(100vw _ 2rem);
  max-height: 300px;
  overflow-y: scroll;
  overflow-x: hidden;
  z-index: 100;
  box-shadow: 0 0.5rem 1.5rem rgba(0, 0, 0, 0.2);
  border-radius: 0.2rem;
}

.contextmenu .contextmenu_item {
  border-bottom: 1px solid #c3c3c3;
  padding: 8px;
}

.contextmenu .contextmenu_item:hover {
  cursor: pointer;
  background-color: #f1f1f2;
}

.contextmenu .contextmenu_item p {
  margin: 0;
  padding: 0;
}

.contextmenu .contextmenu_item .iri {
  margin: 0;
  width: 15rem;
  white-space: nowrap;
  text-overflow: ellipsis;
  word-wrap: break_word;
  padding: 0;
}
</style>
