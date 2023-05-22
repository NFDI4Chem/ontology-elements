<script lang="ts" setup>
import { computed } from 'vue'

const props = defineProps<{
  annotation?: string
}>()

const term = computed(() => {
  return props.annotation ? props.annotation.split('\t')[0] : ''
})
const iri = computed(() => {
  return props.annotation ? props.annotation.split('\t')[2] : ''
})
const source = computed(() => {
  return props.annotation ? props.annotation.split('\t')[1] : ''
})
</script>
<template>
  <a v-if="annotation && annotation != ''" :href="iri" target="_blank">
    {{ source }}: {{ term }}
  </a>
</template>
