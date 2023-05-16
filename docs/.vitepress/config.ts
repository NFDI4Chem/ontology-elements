import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "ontology-elements",
  description: "ontology-elements docs",
  base: '/ontology-elements/',
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Docs', link: '/docs' },
      { text: 'Demo', link: '/demo' }
    ],

    sidebar: [
      {
        text: 'Introduction',
        items: [
          { text: 'What are ontology elements?', link: '/markdown-examples' },
          { text: 'Getting started', link: '/api-examples' },
          { text: 'Ontology Lookup Service (OLS)', link: '/api-examples' },
        ]
      },
      {
        text: 'Components',
        items: [
          { text: 'Annotation', link: '/markdown-examples' },
          { text: 'Autocomplete (Input)', link: '/api-examples' },
          { text: 'Compose (Textarea)', link: '/api-examples' },
          { text: 'Annotate (Textarea)', link: '/api-examples' },
        ]
      },
      {
        text: 'Usage',
        items: [
          { text: 'React', link: '/markdown-examples' },
          { text: 'Angular', link: '/api-examples' },
          { text: 'Vuejs', link: '/api-examples' },
          { text: 'No framework', link: '/api-examples' },
        ]
      },
      {
        text: 'Development',
        items: [
          { text: 'Local setup', link: '/markdown-examples' },
          { text: 'FAQs', link: '/api-examples' },
          { text: 'License', link: '/api-examples' },
          { text: 'Issues / Feature requests', link: '/api-examples' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/NFDI4Chem/ontology-elements' }
    ],

    footer: {
      message: 'Licensed under the <a href="https://github.com/NFDI4Chem/ontology-elements/blob/main/LICENSE">MIT License</a>.',
    }
  }
})
