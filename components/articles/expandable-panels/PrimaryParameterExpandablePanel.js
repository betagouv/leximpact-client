import { connect } from "react-redux";

import { expandArticlePanel } from "../../../redux/actions";
import { PrimaryExpandablePanel } from "./PrimaryExpandablePanel";

const mapStateToProps = ({ currentExpandedArticlePanel }, { title }) => ({
  expanded: currentExpandedArticlePanel === title,
});

const mapDispatchToProps = (dispatch, { title }) => ({
  onExpandedChange: () => dispatch(expandArticlePanel(title)),
});

export const PrimaryParameterExpandablePanel = connect(
  mapStateToProps,
  mapDispatchToProps,
)(PrimaryExpandablePanel);
