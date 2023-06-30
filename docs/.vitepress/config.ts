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
      message: 'Ontology-Elements is developed and maintained by the <a style="color:#0284c7;" href="https://www.nfdi4chem.de/">NFDI4Chem partners</a> at the <a style="color:#0284c7;" href="https://www.uni-jena.de/en/">Friedrich Schiller University </a> Jena, Germany. <br/>The code for this web application is released under the <a style="color:#0284c7;" href="https://github.com/NFDI4Chem/ontology-elements/blob/main/LICENSE">MIT License</a>.<br/> <p align="center"><a href="https://nfdi4chem.de/" target="_blank"><img src="https://www.nfdi4chem.de/wp-content/themes/wptheme/assets/img/logo.svg" width="15%" alt="NFDI4Chem Logo"></a>.',
    }
  },
})
