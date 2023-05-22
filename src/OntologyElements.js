import { defineCustomElement } from 'vue'
import VueOntologyTermAnnotation from './components/ontology-term-annotation.ce.vue'
import VueOntologyTextAnnotation from './components/ontology-text-annotation.ce.vue'
import VueOntologyAutoComplete from './components/ontology-autocomplete.ce.vue'
import VueOntologyAnnotate from './components/ontology-annotate.ce.vue'
import VueOntologyCompose from './components/ontology-compose.ce.vue'

export const OntologyTermAnnotation = defineCustomElement(VueOntologyTermAnnotation)
export const OntologyTextAnnotation = defineCustomElement(VueOntologyTextAnnotation)
export const OntologyAutoComplete = defineCustomElement(VueOntologyAutoComplete)
export const OntologyAnnotate = defineCustomElement(VueOntologyAnnotate)
export const OntologyCompose = defineCustomElement(VueOntologyCompose)

if (typeof window !== "undefined") {
    let customElementRegistry = window.customElements;
    customElementRegistry.define('ontology-term-annotation', OntologyTermAnnotation)
    customElementRegistry.define('ontology-text-annotation', OntologyTextAnnotation)
    customElementRegistry.define('ontology-autocomplete', OntologyAutoComplete)
    customElementRegistry.define('ontology-annotate', OntologyAnnotate)
    customElementRegistry.define('ontology-compose', OntologyCompose)
}
