import { defineCustomElement } from 'vue'
import VueOntologyAnnotation from './components/ontology-annotation.ce.vue'

export const OntologyAnnotation = defineCustomElement(VueOntologyAnnotation)

// Optional: Provide an easy way to register the custom element.
export function register(tagName = 'ontology-annotation') {
  customElements.define(tagName, OntologyAnnotation)
}
