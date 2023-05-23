import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "ontology-elements",
  description: "ontology-elements docs",
  base: '/ontology-elements/',
  themeConfig: {
    logo: '/oe-logo-color.svg',

    siteTitle: '',

    nav: [
      { text: 'Home', link: '/' },
      { text: 'Docs', link: '/introduction' },
      { text: 'Demo', link: '/demo' }
    ],

    sidebar: [
      {
        text: 'Introduction',
        items: [
          { text: 'What are ontology elements?', link: '/introduction' },
          { text: 'Ontology Lookup Service (OLS)', link: '/ols' },
        ]
      },
      {
        text: 'Components',
        items: [
          { text: 'Annotated Term', link: '/o-term-annotation' },
          { text: 'Text Annotation', link: '/o-text-annotation' },
          { text: 'Autocomplete (Input)', link: '/o-autocomplete' },
          { text: 'Compose (Textarea)', link: '/o-compose' },
          { text: 'Annotate (Textarea)', link: '/o-annotate' },
        ]
      },
      {
        text: 'Usage',
        items: [
          { text: 'React', link: '/react' },
          { text: 'Angular', link: '/angular' },
          { text: 'Vuejs', link: '/vuejs' },
          { text: 'Svelte', link: '/svelte' },
          { text: 'No framework (static)', link: '/static-html' },
        ]
      },
      {
        text: 'Development',
        items: [
          { text: 'Local setup', link: '/development-installation' },
          { text: 'FAQs', link: '/faqs' },
          { text: 'License', link: '/license' },
          { text: 'Issues / Feature requests', link: '/issues' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/NFDI4Chem/ontology-elements' }
    ],

    footer: {
      message: 'Licensed under the <a href="https://github.com/NFDI4Chem/ontology-elements/blob/main/LICENSE">MIT License</a>.',
    }
  },
})
