import { EXPAND_ARTICLE_PANEL, HIDE_INFORMATION_PANEL } from "../actions";

const initialState = {
  currentExpandedArticlePanel: null,
  isInformationPanelVisible: true,
};

const display = (state = initialState, action) => {
  switch (action.type) {
  case EXPAND_ARTICLE_PANEL: {
    const panel = action.name === state.currentExpandedArticlePanel ? null : action.name;
    return {
      ...state,
      currentExpandedArticlePanel: panel,
    };
  }
  case HIDE_INFORMATION_PANEL:
    return {
      ...state,
      isInformationPanelVisible: false,
    };
  default:
    return state;
  }
};


export default display;
