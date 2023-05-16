import { defineCustomElement } from 'vue'
import VueOntologyAnnotation from './components/ontology-annotation.ce.vue'
import VueOntologyAutoComplete from './components/ontology-autocomplete.ce.vue'

export const OntologyAnnotation = defineCustomElement(VueOntologyAnnotation)
export const OntologyAutoComplete = defineCustomElement(VueOntologyAutoComplete)

customElements.define('ontology-annotation', OntologyAnnotation)
customElements.define('ontology-autocomplete', OntologyAutoComplete)
