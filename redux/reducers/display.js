// import { combineReducers } from "redux";

import { EXPAND_ARTICLE_PANEL, HIDE_INFORMATION_PANEL } from "../actions";

const initialState = {
  currentExpandedArticlePanel: null,
  isInformationPanelVisible: true,
};

const display = (state = initialState, action) => {
  switch (action.type) {
  case EXPAND_ARTICLE_PANEL: {
    const panel = action.name === state.currentExpandedArticlePanel ? null : action.name;
    return Object.assign({}, state, {
      currentExpandedArticlePanel: panel,
    });
  }
  case HIDE_INFORMATION_PANEL:
    return Object.assign({}, state, {
      isInformationPanelVisible: false,
    });
  default:
    return state;
  }
};


export default display;

// Other possible version:

// function currentExpandedArticlePanel(state = null, action) {
//   switch (action.type) {
//   case EXPAND_ARTICLE_PANEL:
//     return state !== action.name ? action.name : null;
//   default:
//     return state;
//   }
// }

// function isInformationPanelVisible(state = true, action) {
//   switch (action.type) {
//   case HIDE_INFORMATION_PANEL:
//     return false;
//   default:
//     return state;
//   }
// }

// export default combineReducers({
//   currentExpandedArticlePanel,
//   isInformationPanelVisible,
// });
