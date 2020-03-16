import { connect } from "react-redux";

import { closeConsulterExpert, expandArticlePanel } from "../../redux/actions";
import ConsulterExpertCard from "./consulter-expert-component";

const PANEL_NAME = "consulter_expert";

const mapStateToProps = ({ currentExpandedArticlePanel }) => {
  const isPanelExpanded = currentExpandedArticlePanel === PANEL_NAME;
  return {
    isPanelExpanded,
  };
};

const mapDispatchToProps = dispatch => ({
  onRemoveConsulterExpert: () => dispatch(closeConsulterExpert()),
  onExpandPanel: () => dispatch(expandArticlePanel(PANEL_NAME)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ConsulterExpertCard);
