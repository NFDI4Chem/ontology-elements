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
  <slot name="header"></slot>
  <a :href="iri" target="_blank"> {{ source }}: {{ term }} </a>
  <slot name="footer"></slot>
</template>
<style></style>
