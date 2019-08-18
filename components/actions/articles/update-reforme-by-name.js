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
    }],
    camelcase: 0,
*/
const updateReformeByName = (name, prevValue) => {
  let type = null;
  const value = prevValue === "" ? 0 : prevValue;

  const shouldUpdateSeuil = name.substring(0, 5) === "seuil";
  if (shouldUpdateSeuil) type = "onUpdateReformeBareme";

  const shouldUpdateDecote = name.substring(0, 6) === "decote";
  if (shouldUpdateDecote) type = "onUpdateReformeDecote";

  const shouldUpdateTaux = name.substring(0, 4) === "taux";
  if (shouldUpdateTaux) type = "onUpdateReformeTaux";

  const shouldUpdatePlafond = name.substring(0, 10) === "plafond_qf";
  if (shouldUpdatePlafond) type = "onUpdateReformePlafond";

  return { type, value, name };
};

export default updateReformeByName;
