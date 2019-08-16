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
const DEFAULT_STATE = null;

const currentExpandedArticlePanel = (state = DEFAULT_STATE, action) => {
  let nextState = null;
  let shouldTogglePanel = null;
  switch (action.type) {
  case "onExpandArticlePanel":
    shouldTogglePanel = action.name === state;
    nextState = (!shouldTogglePanel && action.name) || null;
    return nextState;
  default:
    return state;
  }
};

export default currentExpandedArticlePanel;
