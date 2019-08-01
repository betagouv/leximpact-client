/* eslint
  indent: [2, 2],
  semi: [2, "always"],
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
const wprm = [1, 1, 1, 1, 1];
const apres = [0, -600, 0, 0, -492, 0];
const avant = [0, -600, 0, 0, -492, 0];

const toIndexedObject = arr => arr.reduce((acc, v, i) => ({ ...acc, [i]: v }), {});

const DEFAULT_STATE = {
  apres: toIndexedObject(avant),
  avant: toIndexedObject(apres),
  wprm: toIndexedObject(wprm),
};

const resBrut = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
  case "onCalculateCompareLoaded":
    return action.data;
  default:
    return state;
  }
};

export default resBrut;
