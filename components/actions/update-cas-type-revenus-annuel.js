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
const updateCasTypeRevenusAnnuel = (casTypeIndex, casTypeRevenusMensuel) => {
  const casTypeRevenusAnnuel = casTypeRevenusMensuel * 12;
  return {
    type: "onUpdateCasTypeRevenusAnnuel",
    casTypeIndex,
    casTypeRevenusAnnuel,
  };
};

export default updateCasTypeRevenusAnnuel;
