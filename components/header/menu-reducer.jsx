/* eslint
    indent: [2, 2],
    semi: [2, "always"],
    react/jsx-indent: [2, 2],
    react/jsx-indent-props: [2, 2]
    max-nested-callbacks: [2, { "max": 4 }]
*/
function initialState() {
  return { isOpen: false };
}

function open(anchorEl = false) {
  return {
    type: "header/menu/open",
    anchorEl,
  };
}

function close() {
  return { type: "header/menu/close" };
}

function reducer(state, { type, anchorEl }) {
  if (type === open().type) {
    return {
      isOpen: true,
      anchorEl,
    };
  }

  if (type === close().type) {
    return { isOpen: false };
  }

  return state;
}

export {
  open, close, reducer, initialState,
};
