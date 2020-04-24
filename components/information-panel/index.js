import { connect } from "react-redux";

import { expandArticlePanel, hideInformationPanel } from "../../redux/actions";
import InformationPanel from "./InformationPanel";

const PANEL_NAME = "information";

const mapStateToProps = ({ currentExpandedArticlePanel }) => {
  const isPanelExpanded = currentExpandedArticlePanel === PANEL_NAME;
  return {
    isPanelExpanded,
  };
};

const mapDispatchToProps = dispatch => ({
  onClose: () => dispatch(hideInformationPanel()),
  onExpandPanel: () => dispatch(expandArticlePanel(PANEL_NAME)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(InformationPanel);
