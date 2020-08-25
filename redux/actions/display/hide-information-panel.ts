export interface HideInformationPanelAction {
  type: "HIDE_INFORMATION_PANEL",
}

export function hideInformationPanel(): HideInformationPanelAction {
  return {
    type: "HIDE_INFORMATION_PANEL",
  };
}
