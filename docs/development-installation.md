---
outline: deep
---

# Development setup

## Installation

### Local Development

```bash
git clone https://github.com/NFDI4Chem/ontology-elements.git
cd ontology-elements
git checkout development
npm install
npm run dev
```
Go to http://127.0.0.1:5173 to interact with the components (vue application).

### Build

```bash
npm run build
```

To build the components run the above command and the components are built to a dist directory. You may distribute the contents of the dist folder.

## Pull requests

- Create a fork of the ontology-elements.git
- Create a new branch and start working on your changes / development
- Once complete please format the code and lint it
- Upon testing, create a pull request to the ontology-elements.git repository development branch. Once reviewed and approved your pull request is merged into the development branch and will be distribute in the next production release.

## Tests

*todo*

## Documentation updates

```bash
git clone https://github.com/NFDI4Chem/ontology-elements.git
cd ontology-elements
git checkout development
npm install
npm run docs:dev
```

Go to http://localhost:5173/ontology-elements/ to view docs

If you update the docs 

```bash
npm run docs:build
```

Make sure there are no issues in the build process and submit a pull request (see above)