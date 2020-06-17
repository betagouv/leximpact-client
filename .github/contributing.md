# Contribuer au développement de LexImpact

Très heureux de vous voir sur cette page !

## Convention de nommage

| Français | Anglais |
| --- | --- |
| Les mots *métier* (ex : `base`, `plf`, `amendement`) | Les mots du code sauf mots *métier* (ex : `amendementColor`) |
| Le README et la documentation | Les noms des commits |
| Le nom des PR et les discussions Github | |

### Raisons de cette convention

- La langue du pays doit être promue donc la documentation et les dialogues sur Github sont en français.
- Les mots *métier* sont en français pour éviter d'avoir des subtilités de traduction à gérer.
- Les noms des commits sont en anglais car la langue est plus concise.
- Le code est en anglais car le language, la documentation technique, les outils et les librairies utilisés sont anglais.

## Règles de codage

- Préférez les imports nommés aux imports par défaut pour faciliter les re-factorisations de code.
- Les noms des fichiers des composants React sont en **C**amelCase pour suivre au plus près la documentation officielle de React.
- Les noms des fichiers des reducers (et des créateurs d'action) sont en **c**amelCase pour suivre au plus près la documentation officielle de redux.
- Les noms des dossiers sont de ce format : `ddd-eee-yyy`.