export interface HideInformationPanelAction {
  type: "HIDE_INFORMATION_PANEL",
  name: string;
}

export function hideInformationPanel(name: string): HideInformationPanelAction {
  return {
    name,
    type: "HIDE_INFORMATION_PANEL",
  };
}
