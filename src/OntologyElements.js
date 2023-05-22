import { defineCustomElement } from 'vue'
import VueOntologyAnnotation from './components/ontology-annotation.ce.vue'
import VueOntologyAutoComplete from './components/ontology-autocomplete.ce.vue'
import VueOntologyAnnotate from './components/ontology-annotate.ce.vue'
import VueOntologyCompose from './components/ontology-compose.ce.vue'

export const OntologyAnnotation = defineCustomElement(VueOntologyAnnotation)
export const OntologyAutoComplete = defineCustomElement(VueOntologyAutoComplete)
export const OntologyAnnotate = defineCustomElement(VueOntologyAnnotate)
export const OntologyCompose = defineCustomElement(VueOntologyCompose)

if (typeof window !== "undefined") {
    let customElementRegistry = window.customElements;

    customElementRegistry.define('ontology-annotation', OntologyAnnotation)
    customElementRegistry.define('ontology-autocomplete', OntologyAutoComplete)
    customElementRegistry.define('ontology-annotate', OntologyAnnotate)
    customElementRegistry.define('ontology-compose', OntologyCompose)
}
