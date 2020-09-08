export interface ShowHelpWindowAction {
  type: "SHOW_HELP_WINDOW",
  window: string,
}

export function showHelpWindow(window: string): ShowHelpWindowAction {
  return {
    type: "SHOW_HELP_WINDOW",
    window,
  };
}
