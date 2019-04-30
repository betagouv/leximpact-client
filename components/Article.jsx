import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import MuiExpansionPanel from '@material-ui/core/ExpansionPanel';
import MuiExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import MuiExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';

const ExpansionPanel = withStyles({
  root: {
    border: '0px solid rgba(0,0,0,.125)',
    boxShadow: 'none',
    '&:not(:last-child)': {
      borderBottom: 0,
    },
    '&:before': {
      display: 'none',
    },
  },
  expanded: {
    margin: 'auto',
    padding: '1px',
  },
})(MuiExpansionPanel);

const ExpansionPanelSummary = withStyles({
  root: {
    backgroundColor: 'rgba(0,0,0,0)',
    borderBottom: '0px solid rgba(0,0,0,.125)',
    marginBottom: -1,
    minHeight: 32,
    '&$expanded': {
      minHeight: 20,
    },
  },
  content: {
    '&$expanded': {
      margin: '3px 0',
      padding: '1px',
    },
  },
  expanded: {},
})(props => <MuiExpansionPanelSummary {...props} />);

ExpansionPanelSummary.muiName = 'ExpansionPanelSummary';

const ExpansionPanelDetails = withStyles(theme => ({
  root: {
    padding: theme.spacing.unit * 2,
  },
}))(MuiExpansionPanelDetails);

class CustomizedExpansionPanel extends React.Component {
  state = {
    expanded: 'panel1',
  };

  handleChange = panel => (event, expanded) => {
    this.setState({
      expanded: expanded ? panel : false,
    });
  };

  render() {
    const { expanded } = this.state;
    return (
      <div>

      	<Typography variant="h2" color="inherit">
            Article 197 - code général des impôts
        </Typography>


        <ExpansionPanel
          square
          expanded={expanded === 'panel1'}
          onChange={this.handleChange('panel1')}
        >
          <ExpansionPanelSummary>
            <Typography>I. En ce qui concerne les contribuables ... </Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography>
               visés à l'article 4 B, il est fait application des règles suivantes pour le calcul de l'impôt sur le revenu :
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>

        <Typography variant="body2" color="inherit">
            1. L'impôt est calculé en appliquant à la fraction de chaque part de revenu qui excède 9 964€ le taux de :
        </Typography>

      </div>
    );
  }
}

export default CustomizedExpansionPanel;