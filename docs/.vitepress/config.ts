import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "ontology-elements",
  description: "ontology-elements docs",
  base: '/ontology-elements/',
  themeConfig: {
    logo: { 
      light: 'oe-logo-color.svg',
      dark: 'oe-logo-light.svg'
    },

    siteTitle: '',

    nav: [
      { text: 'Home', link: '/' },
      { text: 'Documentation', link: '/introduction' },
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
          { text: 'Annotation', items: [
            { text: 'Terms', link: '/o-term-annotation' },
            { text: 'Text / Paragraphs', link: '/o-text-annotation' },
          ] },
          { text: 'Autocomplete (Input)', link: '/o-autocomplete' },
          { text: 'Annotate (Textarea)', link: '/o-annotate' },
          { text: 'Compose (Textarea)', link: '/o-compose' },
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
