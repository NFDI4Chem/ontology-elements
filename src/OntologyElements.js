import { defineCustomElement } from 'vue'
import VueOntologyAnnotation from './components/ontology-annotation.ce.vue'
import VueOntologyAutoComplete from './components/ontology-autocomplete.ce.vue'
import VueOntologyAnnotate from './components/ontology-annotate.ce.vue'
import VueOntologyCompose from './components/ontology-compose.ce.vue'

export const OntologyAnnotation = defineCustomElement(VueOntologyAnnotation)
export const OntologyAutoComplete = defineCustomElement(VueOntologyAutoComplete)
export const OntologyAnnotate = defineCustomElement(VueOntologyAnnotate)
export const OntologyCompose = defineCustomElement(VueOntologyCompose)

OntologyAnnotation.define('ontology-annotation', OntologyAnnotation)
OntologyAutoComplete.define('ontology-autocomplete', OntologyAutoComplete)
OntologyAnnotate.define('ontology-annotate', OntologyAnnotate)
OntologyCompose.define('ontology-compose', OntologyCompose)

