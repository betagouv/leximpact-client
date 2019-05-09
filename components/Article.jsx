import React from "react"
import { withStyles } from "@material-ui/core/styles"
import MuiExpansionPanel from "@material-ui/core/ExpansionPanel"
import MuiExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary"
import MuiExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails"
import Typography from "@material-ui/core/Typography"
import Button from "@material-ui/core/Button"
import Fab from "@material-ui/core/Fab"
import ExpandMoreIcon from "@material-ui/icons/ExpandMore"
import AddIcon from "@material-ui/icons/Add"
import textField from "@material-ui/core/TextField"
import SelectControl from "./SelectControl"


const style = {
    Typography: { padding: "5px" },
    Typographybouton: { margin: "10px" },
    Button: {
        padding: "3px",
        margin: "10px",
    },
    VarCodeextistant: {
        fontWeight: "bold",
        color: "#A6A00C",
        textDecoration: "underline",
        // lineHeight: '10px',
        padding: "5px",
        margin: "10px",
    },

}


const ExpansionPanel = withStyles({
    root: {
        border: "0px solid rgba(0,0,0,.125)",
        boxShadow: "none",
        "&:not(:last-child)": {
            borderBottom: 0,
        },
        "&:before": {
            display: "none",
        },
    },
    expanded: {
        margin: "auto",
        padding: "1px",
    },
})(MuiExpansionPanel)

const ExpansionPanelSummary = withStyles({
    root: {
        backgroundColor: "rgba(0,0,0,0)",
        borderBottom: "0px solid rgba(0,0,0,.125)",
        marginBottom: -1,
        minHeight: 32,
        "&$expanded": {
            minHeight: 20,
        },
    },
    content: {
        "&$expanded": {
            margin: "3px 0",
            padding: "1px",
        },
    },
    expanded: {},
})(props => <MuiExpansionPanelSummary {...props} />)

ExpansionPanelSummary.muiName = "ExpansionPanelSummary"

const ExpansionPanelDetails = withStyles(theme => ({
    root: {
        padding: theme.spacing.unit * 2,
    },
}))(MuiExpansionPanelDetails)

class InputField extends React.Component{
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }
  
  handleChange(e) {
	  console.log(e.target.value);
	  console.log(this.props);
    this.props.onChange(e.target.value);
  }
  
  render() {
    const value = this.props.value;
    return (
      <Typography inline>
          <form>
            <div className= "form-group">
              <input className="form-control container text-center" id="focusedInputed" type="number" value={value}
                     onChange={this.handleChange} />
            </div>
          </form>
        </Typography>
      
    );
  }
}

class OutputField extends React.Component{
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }
  
  handleChange(e) {
    this.props.onChange(e.target.value);
  }
  
  render() {
    const value = this.props.value;
    return (
    	<Typography inline>{value}</Typography>
    );
  }
}

class CustomizedExpansionPanel extends React.Component {
	
  constructor(props) {
    super(props);
	  this.state = {
		expanded: 'null', // état de l'extansion panel null = contenu 
		reforme:{
			impot_revenu:{
				bareme:{
					seuils:[9964,27519,73779,156244],
					taux:[14,30,41,45]
				},
				decote:{
					seuil_celib : 1196,
					seuil_couple : 1906 
				}
				
			}
					
		}
		
	  };
	this.handleS1Change=this.handleS1Change.bind(this);
	this.handleSeuilChange=this.handleSeuilChange.bind(this);
  }
  

  handleChange = panel => (event, expanded) => {
      this.setState({
          expanded: expanded ? panel : false,
  })};
  
  UpdateBareme = (i,value) => {
	  const ref= this.state.reforme
      const list = this.state.reforme.impot_revenu.bareme.seuils.map((item, j) => {
        if (j === i) {
          return value;
        } else {
          return item;
        }
      });
	  ref.impot_revenu.bareme.seuils=list;
    this.setState({reforme:ref});
  };

  
  handleSeuilChange(i) {
	  console.log("j'essaie");
	  function funcres(value){
	  console.log("j'essaie vraiment");
		this.UpdateBareme(i,value);
	  }
	  return funcres;
  }

  handleS1Change(value){
	this.UpdateBareme(0,value);
	//this.handleSeuilChange(0)(value);
	console.log(this.state);
  }
  render() {
      const { expanded ,reforme} = this.state
      const styleExpansionpanel = {
          padding: "1px",
      }
      return (
          <div>

              <Typography variant="h2" color="inherit">
                    Article 197
              </Typography>

              <Typography variant="overline" color="inherit">
                    - Code général des impôts
              </Typography>

              <SelectControl />


              <ExpansionPanel
                  style={style.Typography}
                  square
                  expanded={expanded === "panel1"}
                  onChange={this.handleChange("panel1")}
              >

                  <ExpansionPanelSummary style={styleExpansionpanel} expandIcon={<ExpandMoreIcon />}>
                      <Typography variant="body2" color="inherit">
                                    I. En ce qui concerne les contribuables ...
                      </Typography>

                  </ExpansionPanelSummary>

                  <ExpansionPanelDetails style={styleExpansionpanel}>
                      <Typography variant="body2" color="inherit">
                               visés à l'article 4 B, il est fait application des règles suivantes pour le calcul de l'impôt sur le revenu :
                      </Typography>
                  </ExpansionPanelDetails>

              </ExpansionPanel>

              <Typography variant="body2" color="inherit" style={style.Typography}>
                    1. L'impôt est calculé en appliquant à la fraction de chaque part de revenu qui excède <InputField value={reforme.impot_revenu.bareme.seuils[0]} onChange={this.handleS1Change}/>€ le taux de :
              </Typography>


              <Typography variant="body2" color="inherit" style={style.Typography}>
                    – 14 % pour la fraction supérieure à <OutputField value={reforme.impot_revenu.bareme.seuils[0]}/> € et inférieure ou égale à 27 519 € ;
              </Typography>

              <Typography variant="body2" color="inherit" style={style.VarCodeextistant}>
                    – 30 % pour la fraction supérieure à 27 519 €
et inférieure ou égale à 73 779 € ;
              </Typography>

              <Typography variant="body2" color="inherit" style={style.Typography}>
                    – 41 % pour la fraction supérieure à 73 779 €
et inférieure ou égale à 156 244 € ;
              </Typography>

              <Typography variant="body2" color="inherit" style={style.Typography}>
                    – 45 % pour la fraction supérieure à 156 244 €.
              </Typography>


              <Button style={style.Button}>
                  <Fab size="small" color="primary" aria-label="Add">
                      <AddIcon />
                  </Fab>
                  <Typography variant="overline" color="primary" style={style.Typographybouton}>
                            Ajouter une tranche
                  </Typography>
              </Button>


              <ExpansionPanel
                  style={style.Typography}
                  square
                  expanded={expanded === "panel1"}
                  onChange={this.handleChange("panel1")}
              >

                  <ExpansionPanelSummary style={styleExpansionpanel} expandIcon={<ExpandMoreIcon />}>
                      <Typography variant="body2" color="inherit">
                                    2. La réduction d'impôt résultant de l'application du quotient familial ...
                      </Typography>

                  </ExpansionPanelSummary>

                  <ExpansionPanelDetails style={styleExpansionpanel}>
                      <Typography variant="body2" color="inherit">
                                ... ne peut excéder 1 551 € par demi-part ou la moitié de cette somme par quart de part s'ajoutant à une part pour les contribuables célibataires, divorcés, veufs ou soumis à l'imposition distincte prévue au 4 de l'article 6 et à deux parts pour les contribuables mariés soumis à une imposition commune.
                                Toutefois, pour les contribuables célibataires, divorcés, ou soumis à l'imposition distincte prévue au 4 de l'article 6 qui répondent aux conditions fixées au II de l'article 194, la réduction d'impôt correspondant à la part accordée au titre du premier enfant à charge est limitée à 3 660 € Lorsque les contribuables entretiennent uniquement des enfants dont la charge est réputée également partagée entre l'un et l'autre des parents, la réduction d'impôt correspondant à la demi-part accordée au titre de chacun des deux premiers enfants est limitée à la moitié de cette somme.
                                Par dérogation aux dispositions du premier alinéa, la réduction d'impôt résultant de l'application du quotient familial, accordée aux contribuables qui bénéficient des dispositions des a, b et e du 1 de l'article 195, ne peut excéder 927 € ;
                      </Typography>
                  </ExpansionPanelDetails>

              </ExpansionPanel>


          </div>

      )
  }
}

export default CustomizedExpansionPanel
