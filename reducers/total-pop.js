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
const DEFAULT_STATE = {
  total: {
    avant: 78000000000,
    apres: 78000000001,
  },
  deciles: [
    {
      apres: 0,
      avant: 0,
      poids: 64307.76825466227,
    },
    {
      apres: 0,
      avant: 0,
      poids: 64183.43260141487,
    },
    {
      apres: 0,
      avant: 0,
      poids: 64069.076685097796,
    },
    {
      apres: 0,
      avant: 0,
      poids: 64043.933126049116,
    },
    {
      apres: 13844921.403083913,
      avant: 5361568.370960628,
      poids: 64488.07944238707,
    },
    {
      apres: 84836413.06561384,
      avant: 56347916.71439952,
      poids: 63989.23676160828,
    },
    {
      apres: 165934580.50712466,
      avant: 135607522.52963728,
      poids: 64047.4107078861,
    },
    {
      apres: 278744596.67872584,
      avant: 236768570.59332725,
      poids: 64349.98292025551,
    },
    {
      apres: 505687176.9815335,
      avant: 458387176.6722295,
      poids: 63775.046068296535,
    },
    {
      apres: 2794871767.6868806,
      avant: 2740522398.065867,
      poids: 63647.22070607485,
    },
  ],
};

const totalPop = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
  default:
    return state;
  }
};

export default totalPop;
