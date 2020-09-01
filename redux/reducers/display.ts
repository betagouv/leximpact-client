// eslint-disable-next-line no-unused-vars
import { HideHelpWindowAction, HideInformationPanelAction, ShowHelpWindowAction } from "../actions";

interface State {
  currentHelpWindow: string|null;
  currentInformationPanels: string[];
}

const DEFAULT_STATE: State = {
  currentHelpWindow: null,
  currentInformationPanels: ["ir", "dotations"],
};

type DisplayAction =
  HideHelpWindowAction |
  HideInformationPanelAction |
  ShowHelpWindowAction;

export function display(state = DEFAULT_STATE, action: DisplayAction): State {
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
