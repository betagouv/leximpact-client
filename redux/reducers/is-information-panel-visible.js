const isInformationPanelVisible = (state = true, action) => {
  switch (action.type) {
  case "hideInformationPanel":
    return false;
  default:
    return state;
  }
};

export default isInformationPanelVisible;
