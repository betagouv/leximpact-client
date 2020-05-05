import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import PropTypes from "prop-types";
import { PureComponent } from "react";

import LexExpansionPanel from "../expandable-panels/expansion-panel";
import LexExpansionPanelDetails from "../expandable-panels/expansion-panel-details";
import LexExpansionPanelSummary from "../expandable-panels/expansion-panel-summary";

const styleExpansionpanel = {
  padding: "1px",
};

class Alinea2 extends PureComponent {
  constructor(props) {
    super(props);
    this.state = { expanded: false };
    this.onExpandedChange = this.onExpandedChange.bind(this);
  }

  onExpandedChange() {
    const { expanded } = this.state;
    this.setState({ expanded: !expanded });
  }

  render() {
    const { style } = this.props;
    const { expanded } = this.state;
    return (
      <LexExpansionPanel
        square
        expanded={expanded}
        style={style.Typography}
        onChange={this.onExpandedChange}>
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
  style: PropTypes.shape().isRequired,
};

export default Alinea2;
