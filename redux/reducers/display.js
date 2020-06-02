import { HIDE_INFORMATION_PANEL } from "../actions";

const initialState = {
  isInformationPanelVisible: true,
};

const display = (state = initialState, action) => {
  switch (action.type) {
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
