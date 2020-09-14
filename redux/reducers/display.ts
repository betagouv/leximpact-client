// eslint-disable-next-line no-unused-vars
import { Action } from "../actions";

interface State {
  currentHelpWindow: string|null;
  currentInformationPanels: string[];
}

const DEFAULT_STATE: State = {
  currentHelpWindow: null,
  currentInformationPanels: ["ir", "dotations"],
};

export function display(state = DEFAULT_STATE, action: Action): State {
  switch (action.type) {
  case "HIDE_HELP_WINDOW":
    return {
      ...state,
      currentHelpWindow: null,
    };
  case "SHOW_HELP_WINDOW":
    return {
      ...state,
      currentHelpWindow: action.window,
    };
  case "HIDE_INFORMATION_PANEL":
    return {
      ...state,
      currentInformationPanels: state.currentInformationPanels.filter(name => name !== action.name),
    };
  default:
    return state;
  }
}
