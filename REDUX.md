# Principes Redux (Action, Reducer, Dispatch...)

Le concept Redux peut se résumer par

- `action, réaction, observer`

  ou encore

- `abonnement, observer`

![Redux Schéma](https://www.softfluent.fr/blog/expertise/118329abbbfe_A564_ReduxGraph_e45016dc-618e-405e-9470-0712f613547c.png)

## En résumé

1. je clique sur composant (_view_)
2. cela dispatch une action avec un type (_dispatch_ / _mapDispatchToProps_)
3. réception dans un ou plusieurs reducers, modification en regard d'un `(action.type)` si nécessaire (_reducer_)
4. les vues connectées sont automatiquement mise à jour avec les nouvelles valeur des reducers (_store_ / _mapStateToProps_)

## Les Reducers

Les reducers servent de stockage des informations

Par exemple on dit qu'ils sont _abonnés_ au dispatcher par des _action.type_

Les reducers prennent en arguments

- l'etat précédent/actuel de ce reducer (state)
- un objet action contentant obligatoirement une propriété `type`

Exemple ci dessous avec l'état de chargement d'une application

```javascript
const monReducerLoading = (etatPrecedent, action) => {
  let etatChargement = etatPrecedent;
  switch (action.type) {
    case "enCoursDeChargement":
      etatChargement = true;
      return etatChargement;
    case "finDuChargement":
      etatChargement = false;
      return etatChargement;
    default:
      return etatChargement;
  }
};
```

Dans un composant/vue connecté on aura donc accès à la valeur de `monReducerLoading` dans la méthode `mapStateToProps`

```javascript
const mapStateToProps = state => {
  const { monReducerLoading } = state;
  return {
    isLoading: monReducerLoading === true,
  };
};

export default connect(mapStateToProps)(monComposant);
```

## Les actions

Les actions permettent de faire le pont entre un composant connecté _connect_ et les reducers

Ce sont des fonctions basiques, qui au minimum doivent retourner une `action.type`, une chaine de caractère, un identifiant qui permettra d'agir en fonction dans un reducer.

Ce pattern est aussi connu sous le nom de _signal_, cela est comparable aux différentes fréquences radio

- Mon auto radio est sur la fréquence 107,7 je capte les Infos Autoroute
- Mais je ne peux pas capter pas Radio Nostalgie qui est sur une autre fréquence

Elles doivent retourner un objet

Les actions peuvent transmettre d'autres arguments au reducer en plus du type (optionnel)

```javascript
const monActionDeClickBouton = argumentOptionnel => {
  return {
    type: "QuandJaiCliqueSurLeBoutonJeDoisFaireX",
    argumentOptionnel,
  };
};

// Notation courte
// const monActionDeClickBouton = (argumentOptionnel) => ({
//  type: 'QuandJaiCliqueSurLeBoutonJeDoisFaireX'
//  argumentOptionnel
// });

export default monActionDeClickBouton;
```

## Description d'un composant connecté à Redux

**Un composant connecté se compose de deux fichiers**

#### `./mon-fichier-component.jsx` (_vue_)

Un composant contenant uniquement de l'affichage ou de l'expérience user (click et autres actions faites par l'user)

#### `./index.js` (_connecteur_)

Ce fichier va connecter un composant à Redux, via la méthode `connect`

Exemple:

```javascript
export default connect(
  mapStateToProps,
  mapDispacthToProps
)(MonFichierComponent);
```

## Description du fichier `index.js` (_connecteur_)

#### La méthode `mapStateToProps` (_récepteur_)

Elle correspond au store dans le schéma ci dessus

C'est dans cette fonction que l'on va affecter de nouvelles props

Qui seront créées en fonction de l'état d'un ou plusieurs reducers en particulier, _je suis en train de charger, désactive le bouton_ par exemple

Elle recoit en arguments:

- Tous les reducers
- Les props du composant passées depuis le composant contenant/parent (optionnel)

Elle doit retourner un objet de props `return { disabled, prop1, prop2 }`

Exemple:

```javascript
const mapStateToProps = ({ loading, loadingEtat, ... }, props) => {
  const isDisabled = loading && loadingEtat
  return { isDisabled }
}

export default connect(
  mapStateToProps,
  mapDispacthToProps
)(MonFichierComponent);
```

#### La méthode `mapDispatchToProps` (_émétteur_)

Elle correspond au dispatch dans le schéma ci dessus

Permet de connecter les actions user depuis la vue vers les reducers, par le biais des _actions_

C'est dans cette fonction que l'on va définir des fonctions qui seront appelées depuis la _vue_ et qui doivent avoir un impact sur la globalité de l'application

Cela permet ainsi de connecter différentes vues entre elles sans qu'il ait connaissance les unes des autres

Elle reçoit en arguments

- une function `dispatch`
- Les props du composant passées depuis le composant contenant/parent (optionnel)

Elle retourne un objet contenant uniquement des fonctions

Ces fonctions vont permettre de _dispatcher_ des actions afin de modifier les reducers

Préfixer ces fonctions avec `handle` cela rendra le code d'un composant plus lisible

Ces fonctions acceptent des arguments provenant de la vue (optionnel)

```javascript
const mapStateToProps = () => {};

const mapDispatchToProps = (dispatch, props) => ({
  handleJaiCliqueSurLaBoutonX: () => {
    dispatch(jaiCliqueSurLaBoutonX());
  },
  handleJaiCliqueSurLaBoutonY: couleurApplicable => {
    const couleur = couleurApplicable;
    dispatch(jaiCliqueSurLaBoutonY(couleur));
  },
});

export default connect(
  mapStateToProps,
  mapDispacthToProps
)(MonFichierComponent);
```
