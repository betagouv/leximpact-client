# Introduction

## [FR] Introduction

Ceci est le code source de l'interface utilisateur de LexImpact.

LexImpact permet aux administrations, aux parlementaires et à la société civile de simuler l'impact _ex ante_ des réformes au système socio-fiscal.
* [Appels à candidatures](https://entrepreneur-interet-general.etalab.gouv.fr/defis/2019/leximpact.html)
* [Fiche produit](https://beta.gouv.fr/startups/leximpact.html)
* [LexImpact Beta](https://leximpact.beta.gouv.fr)

Leximpact est constitué de deux parties :
- [Leximpact-server](https://github.com/betagouv/leximpact-server/) : interface en python utilisant openfisca permettant de mettre en place une API répondant à des questions sur l'impact de modifications de la loi fiscale
- [Leximpact-client](https://github.com/betagouv/leximpact-client/) : interface web communiquant avec l'API qui met à disposition des usagers un site web permettant de visulaliser les résultats des calculs de l'API


## [EN] Introduction

This is the source code of LexImpact user interface.

LexImpact allows civil servants, policy makers and citizens to simulate the _ex ante_ impact of a reform to a country's tax-benefit system.
* [Call for candidates (FR)](https://entrepreneur-interet-general.etalab.gouv.fr/defis/2019/leximpact.html)
* [Elevator pitch (FR)](https://beta.gouv.fr/startups/leximpact.html)
* [LexImpact Beta](https://leximpact.beta.gouv.fr)


# How to use

```
npm install
npm run dev
```

## Configuration file `.env`

A file name .env is necessary for the client to work properly. The file .env.example can be copied into it.

Variables of environment that should be set are:
- API_URL : leximpact-client is just a web interface, that does not do computations by itself, but needs to be provided a working [Leximpact-server](https://github.com/betagouv/leximpact-server/) endpoint to fetch results. As of 2019-11-06, a working API example can be found on the endpoint https://api.leximpact.beta.gouv.fr 
- PORT : describes the port that the client will be setup to (e.g. the website will be accessible from http://127.0.0.1:<PORT> if the client is run locally). If ommited, defaults to 9001


# Snapshots Jest (Tests)

```
Snapshot tests are a very useful tool whenever you want to make sure your UI does not change unexpectedly.

A typical snapshot test case for a mobile app renders a UI component, takes a snapshot, then compares it to a reference snapshot file stored alongside the test. The test will fail if the two snapshots do not match: either the change is unexpected, or the reference snapshot needs to be updated to the new version of the UI component.
```

[Documentation Officielle](https://jestjs.io/docs/en/snapshot-testing)

```bash
./node_modules/.bin/jest --updateSnapshots
```

# Icons & Emoji

- [Twitter Emoji](https://iconify.design/icon-sets/twemoji/)
- [MaterialUI Icons](https://material.io/resources/icons)

# Screenshot

<img width="1280" alt="Capture d’écran 2019-11-06" src="https://user-images.githubusercontent.com/17675313/68288289-6a75a780-0084-11ea-9bab-addb613cd2a4.png">


# Documentation

- [MaterialUI v3.9.9 Documentation](https://v3.material-ui.com/getting-started/installation/)
