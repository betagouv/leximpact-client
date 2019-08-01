/* eslint
    indent: [2, 2],
    semi: [2, "always"],
    react/jsx-fragments: [2, "element"],
    react/jsx-indent: [2, 2],
    react/jsx-indent-props: [2, 2],
    max-nested-callbacks: [2, { "max": 4 }],
    react/jsx-closing-bracket-location: [2, {
        "nonEmpty": false,
        "selfClosing": false
    }],
    "jsx-a11y/anchor-is-valid": [2, {
      "components": ["Link"],
      "specialLink": ["hrefLeft", "hrefRight"]
    }],
    import/order: [2, {
      newlines-between: "always",
      groups: ["builtin", "external", "parent", "sibling", "index"]
    }]
*/
const makeNumberGoodLooking = (initialNumber) => {
  // prend un nombre, et retourne l'arrondi
  // avec le moins de chiffres qui a moins de limdiff
  // de différence avec le nombre initial.
  let currfact = 1;
  let nbchiffres = 0;
  const limdiff = 0.00001;
  while (true) {
    const numnow = Math.round(initialNumber * currfact) / currfact;
    if (Math.abs(numnow - initialNumber) < limdiff || nbchiffres >= 5) {
      return initialNumber.toFixed(nbchiffres);
    }
    currfact *= 10;
    nbchiffres += 1;
  }
};

export default makeNumberGoodLooking;
