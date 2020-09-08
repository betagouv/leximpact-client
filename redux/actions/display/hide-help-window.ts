export interface HideHelpWindowAction {
  type: "HIDE_HELP_WINDOW",
}

export function hideHelpWindow(): HideHelpWindowAction {
  return {
    type: "HIDE_HELP_WINDOW",
  };
}
