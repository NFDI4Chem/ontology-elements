<template>
  <div>
    <div>
      <div
        @mouseup="checkSelection"
        @keyup="checkSelection"
        @input="onInput"
        type="text"
        class="vc_textarea"
        contenteditable="true"
      >
        {{ content }}
      </div>
    </div>
    <div class="contextmenu" :style="'left:' + cords.x + 'px; top:' + cords.y + 'px'">
      <div
        class="contextmenu-item"
        v-for="doc in matches"
        :key="doc['short_label']"
        role="option"
        tabindex="-1"
        aria-selected="false"
        aria-setsize="3"
        aria-posinset="0"
        @click="selectTerm(doc)"
      >
        <p v-html="highlight(doc['label'])"></p>
        <small class="iri">{{ doc["ontology_prefix"] }}:{{ doc["iri"] }}</small>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { ref } from "vue";

const props = defineProps({
  label: {
    type: String,
    required: false,
    default: "",
  },
  info: {
    type: String,
    required: false,
    default: "",
  },
  placeholder: {
    type: String,
    required: false,
    default: "",
  },
  ontologies: {
    type: String,
    required: false,
    default: "",
  },
  format: {
    type: String,
    required: false,
    default: "text",
  },
});

let content = ref(
  "The lichen natural products pulvinamide, rhizocarpic acid, and epanorin have been synthesized and characterized spectroscopically and by X-ray crystallography. The syntheses, by ring-opening of pulvinic acid dilactone (PAD), may well be biomimetic, given the well-known occurrence of PAD in lichen. The enantiomers, ent-rhizocarpic acid and ent-epanorin, and corresponding carboxylic acids, norrhizocarpic acid and norepanorin, were similarly prepared. All compounds were assessed for growth inhibitory activity against selected bacteria, fungi, a protist, a mammalian tumor cell line, and normal cells. Rhizocarpic acid is weakly antibacterial (Bacillus subtilis MIC = 50 μg/mL) and possesses modest but selective antitumor activity (NS-1 murine myeloma MIC = 3.1 μg/mL) with >10-fold potency relative to its enantiomer (MIC = 50 μg/mL)."
);

let searchTerm = ref("");

let matches = ref([]);

let cords: any = ref({ x: -1000, y: 0, start: -1, end: -1 });

function onInput(e: any) {
  content.value = e.target.innerText;
}

function selectTerm() {}

function checkSelection() {
  if (window.getSelection) {
    searchTerm.value = window.getSelection()?.toString()!;
    var selection = window.getSelection()?.getRangeAt(0);
    var selectedText = selection?.extractContents();
    var span = document.createElement("span");
    span.style.backgroundColor = "yellow";
    span.appendChild(selectedText!);
    selection?.insertNode(span);

    if (searchTerm.value) {
      getSelectOptions();
      getSelectionCoords();
    } else {
      cords.value = { x: -1000, y: 0 };
    }
  }
}

function highlight(content: string) {
  if (!searchTerm.value) {
    return content;
  }
  return content.replace(new RegExp(searchTerm.value, "gi"), (match) => {
    return '<span class="highlightText">' + match + "</span>";
  });
}

function getSelectionCoords(atStart: boolean = true) {
  const sel = window.getSelection();
  if (!sel?.rangeCount) return null;
  let range = sel.getRangeAt(0).cloneRange();
  if (!range.getClientRects) return null;
  range.collapse(atStart);
  let rects = range.getClientRects();
  if (rects.length <= 0) return null;
  let rect = rects[0];
  cords.value.start = sel.anchorOffset;
  cords.value.end = sel.focusOffset;
  cords.value.x = rect.x;
  cords.value.y = rect.y + rects[0]?.height;
}

async function getSelectOptions() {
  if (searchTerm.value === "") {
    matches.value = [];
    return [];
  }
  let ontologiesExists = searchTerm.value.indexOf(":");
  let ontologies = "";
  let term = null;
  if (ontologiesExists < 0) {
    ontologies = props.ontologies;
    term = searchTerm.value;
  } else {
    term = searchTerm.value.split(":")[1];
    ontologies = searchTerm.value.split(":")[0];
  }

  const url = "https://service.tib.eu/ts4tib/api/select?q=";
  const queries = encodeURI(
    "&ontology=" +
      ontologies +
      "&fieldList=iri,label,short_form,obo_id,ontology_name,ontology_prefix,description,type&obsoletes=false&local=false&rows=10"
  );

  let response = (await fetch(`${url}${term}${queries}`)).json();
  response.then((body) => {
    matches.value = body.response.docs;
  });
}
</script>
<style></style>
