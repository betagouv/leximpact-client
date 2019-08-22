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
