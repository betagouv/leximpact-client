import { Typography } from "@material-ui/core";
import { ExpandMore as ExpandMoreIcon } from "@material-ui/icons";
import PropTypes from "prop-types";
import { PureComponent } from "react";

import LexExpansionPanel from "../expandable-panels/expansion-panel";
import LexExpansionPanelDetails from "../expandable-panels/expansion-panel-details";
import LexExpansionPanelSummary from "../expandable-panels/expansion-panel-summary";

const styleExpansionpanel = {
  padding: "1px",
};

class Alinea2 extends PureComponent {
  render() {
    const { expandArticlePanelHandler, isPanelExpanded, style } = this.props;
    return (
      <LexExpansionPanel
        square
        expanded={isPanelExpanded}
        style={style.Typography}
        onChange={expandArticlePanelHandler}>
        <LexExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          style={styleExpansionpanel}>
          <Typography color="inherit" variant="body2">
            I. En ce qui concerne les contribuables ...
          </Typography>
        </LexExpansionPanelSummary>

        <LexExpansionPanelDetails style={styleExpansionpanel}>
          <Typography color="inherit" variant="body2">
            visés à l&apos;article 4 B, il est fait application des règles
            suivantes pour le calcul de l&apos;impôt sur le revenu :
          </Typography>
        </LexExpansionPanelDetails>
      </LexExpansionPanel>
    );
  }
}

Alinea2.propTypes = {
  expandArticlePanelHandler: PropTypes.func.isRequired,
  isPanelExpanded: PropTypes.bool.isRequired,
  style: PropTypes.shape().isRequired,
};

export default Alinea2;
