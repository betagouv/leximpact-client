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
import { assign, isEmpty } from "lodash/fp";
import { createStore } from "redux";

function hasPageContext(state) {
  return !isEmpty(state) && state.pageContext;
}

function pageContext(state = {}, { callback }) {
  if (!callback) {
    return state;
  }

  return assign(state, { pageContext: callback() });
}

const { dispatch, getState } = createStore(pageContext, {});

function handleServerSide(callback) {
  return {
    type: "server-side",
    callback,
  };
}

function handleClientSide(callback) {
  return {
    type: "client-side",
    callback,
  };
}

function getPageContext(browser, createPageContext) {
  // Make sure to create a new context for every server-side request so that data
  // isn't shared between connections (which would be bad).
  if (!browser) {
    dispatch(handleServerSide(createPageContext));
  }

  // Reuse context on the client-side.
  if (browser && !hasPageContext(getState())) {
    dispatch(handleClientSide(createPageContext));
  }

  return getState().pageContext;
}

export default getPageContext;
