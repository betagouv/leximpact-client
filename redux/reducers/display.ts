// eslint-disable-next-line no-unused-vars
import { HideHelpWindowAction, HideInformationPanelAction, ShowHelpWindowAction } from "../actions";

interface State {
  currentHelpWindow: string|null;
  isInformationPanelVisible: boolean;
}

const DEFAULT_STATE: State = {
  currentHelpWindow: null,
  isInformationPanelVisible: true,
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
      isInformationPanelVisible: false,
    };
  default:
    return state;
  }
}
