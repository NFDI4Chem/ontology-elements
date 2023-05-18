import { defineCustomElement } from 'vue'
import VueOntologyAnnotation from './components/ontology-annotation.ce.vue'
import VueOntologyAutoComplete from './components/ontology-autocomplete.ce.vue'
import VueOntologyAnnotate from './components/ontology-annotate.ce.vue'
import VueOntologyCompose from './components/ontology-compose.ce.vue'

export const OntologyAnnotation = defineCustomElement(VueOntologyAnnotation)
export const OntologyAutoComplete = defineCustomElement(VueOntologyAutoComplete)
export const OntologyAnnotate = defineCustomElement(VueOntologyAnnotate)
export const OntologyCompose = defineCustomElement(VueOntologyCompose)

customElements.define('ontology-annotation', OntologyAnnotation)
customElements.define('ontology-autocomplete', OntologyAutoComplete)
customElements.define('ontology-annotate', OntologyAnnotate)
customElements.define('ontology-compose', OntologyCompose)

