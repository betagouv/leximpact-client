# Introduction

LexImpact - Client

# How to use

```
npm install
npm run dev
```

# Mettre à jour les Snapshots Jest (Tests)

```
Snapshot tests are a very useful tool whenever you want to make sure your UI does not change unexpectedly.

A typical snapshot test case for a mobile app renders a UI component, takes a snapshot, then compares it to a reference snapshot file stored alongside the test. The test will fail if the two snapshots do not match: either the change is unexpected, or the reference snapshot needs to be updated to the new version of the UI component.
```

[Documentation Officielle](https://jestjs.io/docs/en/snapshot-testing)

```bash
./node_modules/.bin/jest --updateSnapshots
```

# Screenshot

<img width="1280" alt="Capture d’écran 2019-04-25 à 03 08 30" src="https://user-images.githubusercontent.com/329236/56703045-6517c780-6707-11e9-9947-9f4e3d72aac2.png">

# Documentation

- [MaterialUI v3.9.9 Documentation](https://v3.material-ui.com/getting-started/installation/)
