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
import DeleteIcon from "@material-ui/icons/Delete"
import textField from "@material-ui/core/TextField"
import SelectControl from "./SelectControl"


const style = {
    Typography: { padding: "5px" },
    Typographybouton: { margin: "10px" },
    Button: {
        padding: "3px",
        margin: "10px",
    },
    VarCodeexistant: {
        fontWeight: "bold",
        color: "#A6A00C",
        textDecoration: "underline",
        // lineHeight: '10px',
        padding: "5px",
        margin: "10px",
    },
    InputSeuil: {
        fontSize: "20px",
		    width:"70px"
    },
    InputTaux: {
        fontSize: "20px",
        width:"30px"
    }

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
    this.props.onChange(e);
  }
  
  render() {
    const value = this.props.value;
    const name = this.props.name;
    return (
            <input type="text" value={value} name={name}
                     onChange={this.handleChange} size="4" style={this.props.style}/> 
      
    );
  }
}

class OutputField extends React.Component{
  constructor(props) {
    super(props);
  }
  
  render() {
    const value = this.props.value;
    return (
    	<Typography inline style={this.props.style}> {value}</Typography>
    );
  }
}

class Article extends React.Component {
	
  constructor(props) {
    super(props);
	const nbt= props.reformebase.impot_revenu.bareme.seuils.length;
	console.log("I did stuff.",props,nbt);
	  this.state = {
		expanded: 'null', // état de l'extansion panel null = contenu 
		reforme:props.reforme,		
		basecode:props.reformebase,// Jamais modifié, utilisé pour montrer l'existant,
	  };
	this.handleS1Change=this.handleS1Change.bind(this);
	this.handleAddTranche=this.handleAddTranche.bind(this);
  this.handleRemoveTranche=this.handleRemoveTranche.bind(this);
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
	console.log(this.state);
  };

  UpdateTaux = (i,value) => {
	  const ref= this.state.reforme
      const list = this.state.reforme.impot_revenu.bareme.taux.map((item, j) => {
        if (j === i) {
          return value;
        } else {
          return item;
        }
      });
	  ref.impot_revenu.bareme.taux=list;
    this.setState({reforme:ref});
  };
  
 handleS1Change(e) {
	  console.log(e.target.value);
	  console.log(this.props);
    this.props.onChange(e);
  }
 
 handleAddTranche(e){
	console.log("j'ajoute une tranche");
	  console.log(this.props);
    this.props.addTranche(e);
	
 }
  
  handleRemoveTranche(e){
  console.log("je retire une tranche");
    console.log(this.props);
    this.props.removeTranche(e);
  
 }


/*  handleS1Change(e){
	const name=e.target.name;
	const success=false;
	if (name.substring(0,5)=="seuil"){
		const numb= parseInt(name.substring(5),10);
		this.UpdateBareme(numb,e.target.value);
		//success=true;
	}
	if (name.substring(0,4)=="taux"){
		const numb= parseInt(name.substring(4),10);
		this.UpdateTaux(numb,e.target.value);
		//success=true;
	}
	if (success){
		console.log("j'ai reussi");
		
	}
	else{
		console.log("j'ai echoue",e.target.name);
	}
	//this.handleSeuilChange(0)(value);
	console.log(this.state);
  }*/
  
  gimmeIRPartsOfArticle(i){
	const s=this.state.reforme.impot_revenu.bareme.seuils;
	const t=this.state.reforme.impot_revenu.bareme.taux;
	const bases=this.state.basecode.impot_revenu.bareme.seuils;
	const baset=this.state.basecode.impot_revenu.bareme.taux;
	const nbt=s.length;
	//Part 1
	if (i==0) {
		return(
			<Typography variant="body2" color="inherit" style={style.Typography}>
                    1. L&#39;impôt est calculé en appliquant à la fraction de chaque part de revenu qui excède 
					<OutputField value={bases[i]} style={style.VarCodeexistant}/> 
					<InputField value={s[i]} onChange={this.handleS1Change} name={"seuil"+i} style={style.InputSeuil}/>€ le taux de :
            </Typography>
		);
	}
	//Last part
	if (i==nbt){
		return(
              <Typography variant="body2" color="inherit" style={style.Typography}>
                    – <OutputField value={baset[i-1]} style={style.VarCodeexistant}/> 
					<InputField value={t[i-1]} onChange={this.handleS1Change} name={"taux"+(i-1)} style={style.InputTaux}/>% pour la fraction supérieure à 
					{/*<OutputField value={bases[i-1]} style={style.VarCodeexistant}/>*/}
					 <OutputField value={s[i-1]}/> €.
              </Typography>
		);
	}
	//Other parts :
	return( <Typography variant="body2" color="inherit" style={style.Typography}>
			– <OutputField value={baset[i-1]} style={style.VarCodeexistant}/> <InputField value={t[i-1]} onChange={this.handleS1Change} name={"taux"+(i-1)} style={style.InputTaux}/> % pour la fraction supérieure à 
				<OutputField value={s[i-1]}/> €
			et inférieure ou égale à 
				<OutputField value={bases[i]} style={style.VarCodeexistant}/> 
				<InputField value={s[i]} onChange={this.handleS1Change} name={"seuil"+(i)} style={style.InputSeuil}/> € ;
     </Typography>
	);
	
  }
  
  render() {
      const { expanded ,reforme,basecode} = this.state
	  console.log("et je rends article",this.state);
      const styleExpansionpanel = {
          padding: "1px",
      }
	  
	  let articleTranches=[]
	  for ( let i=0;i<=reforme.impot_revenu.bareme.seuils.length;i++){
		articleTranches.push(this.gimmeIRPartsOfArticle(i));
	  }
	  
      return (
          <div>

              <Typography variant="h2" color="inherit">
                    Article 197
              </Typography>

              <Typography variant="overline" color="inherit">
                    - Code général des impôts
              </Typography>
              {/*`
              <SelectControl />*/}

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
                               visés à l&#39;article 4 B, il est fait application des règles suivantes pour le calcul de l&#39;impôt sur le revenu :
                      </Typography>
                  </ExpansionPanelDetails>

              </ExpansionPanel>
              {articleTranches}
              <Button style={style.Button} onClick={this.handleAddTranche}>
                  <Fab size="small" color="primary">
                      <AddIcon />
                  </Fab>
                  <Typography variant="overline" color="primary" style={style.Typographybouton}>
                            Ajouter une tranche
                  </Typography>
              </Button>

              <Button style={style.Button} onClick={this.handleRemoveTranche}>
                  <Fab size="small" color="primary">
                      <DeleteIcon />
                  </Fab>
                  <Typography variant="overline" color="primary" style={style.Typographybouton}>
                            Supprimer une tranche
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
                                    2. La réduction d&#39;impôt résultant de l&#39;application du quotient familial ...
                      </Typography>

                  </ExpansionPanelSummary>

                  <ExpansionPanelDetails style={styleExpansionpanel}>
                      <Typography variant="body2" color="inherit">
                                ... ne peut excéder 1 551 € par demi-part ou la moitié de cette somme par quart de part s&#39;ajoutant à une part pour les contribuables célibataires, divorcés, veufs ou soumis à l&#39;imposition distincte prévue au 4 de l&#39;article 6 et à deux parts pour les contribuables mariés soumis à une imposition commune.
                                Toutefois, pour les contribuables célibataires, divorcés, ou soumis à l&#39;imposition distincte prévue au 4 de l&#39;article 6 qui répondent aux conditions fixées au II de l&#39;article 194, la réduction d&#39;impôt correspondant à la part accordée au titre du premier enfant à charge est limitée à 3 660 € Lorsque les contribuables entretiennent uniquement des enfants dont la charge est réputée également partagée entre l&#39;un et l&#39;autre des parents, la réduction d&#39;impôt correspondant à la demi-part accordée au titre de chacun des deux premiers enfants est limitée à la moitié de cette somme.
                                Par dérogation aux dispositions du premier alinéa, la réduction d&#39;impôt résultant de l&#39;application du quotient familial, accordée aux contribuables qui bénéficient des dispositions des a, b et e du 1 de l&#39;article 195, ne peut excéder 927 € ;
                      </Typography>
                  </ExpansionPanelDetails>

              </ExpansionPanel>


          </div>

      )
  }
}

export default Article
