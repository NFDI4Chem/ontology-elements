---
outline: deep
---

# OLS 

Ontology Lookup Services such as TIB Terminology Service and EMBL - EBI OLS offers API to query, retrieve ontology entries for annotating data. They do also offer mechanisms to suggest new terms and corrections to existing entries. 

Ontology elements can be configured to interact with either of the services.

## NFDI4Chem - TIB Terminology Service

With the [Terminology Service, TIB](https://terminology.tib.eu/ts/) – Leibniz Information Centre for Science and Technology and University Library provides a single point of access to terminologies from domains such as architecture, chemistry, computer science, mathematics and physics. You can browse ontologies through the website or use its API to retrieve terminological information and use it in your technical services.

### Ontologies

TIB Terminology Service - [Ontologies collection](https://terminology.tib.eu/ts/ontologies?page=1)

### API

TIB TS offers an intuitive search functionality which is based on a SOLR search index on identifiers and terms. TIB Terminology Service can be used both manually and programmatically.

**REST Interface for TIB Terminology Service**: The service offers an API that allows to retrieve information on terms and their relations as json data for use in other webservices, e.g. in services of the research data management infrastructure of various research communities. In applications like research data management systems, ontological terms and their unique identifiers can, for example, be used as metadata on research data artifacts - thereby making research (meta)data more findable and interoperable. The REST API interface of the TIB Central Terminology Service starts with http://service.tib.eu/ts4tib/api. This API enables to query all the terminologies of various research communities maintained by TIB. The methodology on how to use this interface is explained in the [Swagger Documentation](https://service.tib.eu/ts4tib/swagger-ui.html) in detail. The underlying models can also be viewed through this documentation for a deeper understanding of the API commands. Besides, it is possible to execute the publicly available API commands from the [Swagger Documentation](https://service.tib.eu/ts4tib/swagger-ui.html)

## EMBL - EBI OLS4

The Ontology Lookup Service (OLS) is a repository for biomedical ontologies that aims to provide a single point of access to the latest ontology versions.

- 241 ontologies
- 7,762,183 classes
- 42,013 properties
- 22,654 individuals

### Ontologies

OLS4 - [Ontologies collection](https://www.ebi.ac.uk/ols4/ontologies)

### API

[Swagger Documentation](https://www.ebi.ac.uk/ols4/swagger-ui/index.html)