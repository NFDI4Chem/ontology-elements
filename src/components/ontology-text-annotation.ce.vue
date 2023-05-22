<script lang="ts" setup>
import { computed } from 'vue'

const props = defineProps<{
  annotation?: string
}>()

const content = computed(() => {
  return props.annotation ? props.annotation.split('$$$$')[0] : ''
})

const contentHTML = computed(() => {
    let _content = `${content.value}`
    let annotatedTerms = props.annotation ? props.annotation.split('$$$$')[1].split(/\r?\n/).filter(n => n) : []
    let terms: any[] = [];
    annotatedTerms.forEach(annotation => {
      let annotationDetails = annotation.split("\t")
      let indexes = annotationDetails[1].split(" ")
      let _term : any = {}
      _term['value'] = _content.substring(parseInt(indexes[1]), parseInt(indexes[2]))
      _term['class'] = annotationDetails[0]
      _term['ontology'] = indexes[0]
      _term['ontology_term'] = annotationDetails[2]
      _term['iri'] = annotationDetails[3]
      terms.push(_term)
    })
    terms.forEach(term => {
      _content = _content.replace(term.value, '<span class="o_term"><a target="_blank" href='+term.iri+'>'+term.value+'</a></span>')
    })
    return _content
})

</script>
<template>
  <div v-html="contentHTML"></div>
</template>
<style scoped>
.o_term{
  background-color: #cdcdcd;
  border-radius: 4px;;
  padding: 1px 3px;
}
</style>