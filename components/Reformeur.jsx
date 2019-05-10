import { Component,Fragment } from 'react'
import Article from "../components/Article"
import Impact from "../components/Impact"
import fetch from "isomorphic-fetch"
import {
    Dialog,
    DialogTitle,
    DialogContent,
    DialogContentText,
    DialogActions,
    Paper,
    Item,
} from "@material-ui/core"
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
        article: {
            margin: "1em",
            padding: "2em",
            opacity: 1,
        },
})

class Reformeur extends Component{
	constructor(props) {
    super(props);
	  this.state = {
		reforme:{
			impot_revenu:{
				bareme:{
					seuils:[9964,27519,73779,156244],
					taux:[14,30,41,45]
				}
				/*,
				decote:{
					seuil_celib : 1196,
					seuil_couple : 1906 
				}*/
				
			}
					
		},
		res_brut: {
			apres: {
				0: 0,
				1: -522,
				2: 0,
				3: -188,
				4: -797,
				5: -31750,
			},
			avant: {
				0: 0,
				1: -522,
				2: 0,
				3: -188,
				4: -797,
				5: -31759,
			},
			wprm: {
				0: 1,
				1: 1,
				2: 1,
				3: 1,
				4: 1,
				5: 1,
			},
		},
	  };
	this.handleChange=this.handleChange.bind(this);
	this.addTranche=this.addTranche.bind(this);
	}
  
  UpdateBareme = (i,value) => {
	  const ref= this.state.reforme
      const list = this.state.reforme.impot_revenu.bareme.seuils.map((item, j) => {
        if (j === i) {
          return parseInt(value,10);
        } else {
          return item;
        }
      });
	  ref.impot_revenu.bareme.seuils=list;
    this.setState({reforme:ref});
  };

  UpdateTaux = (i,value) => {
	  const ref= this.state.reforme
      const list = this.state.reforme.impot_revenu.bareme.taux.map((item, j) => {
        if (j === i) {
          return parseInt(value,10);
        } else {
          return item;
        }
      });
	  ref.impot_revenu.bareme.taux=list;
    this.setState({reforme:ref});
  };
  
  addTranche(e){
	 const refbase=this.state.reforme;
	 const newnbt=refbase.impot_revenu.bareme.seuils.length+1;
	 console.log(this.state, newnbt);
	 const lastseuil = refbase.impot_revenu.bareme.seuils[newnbt-2];
	 refbase.impot_revenu.bareme.seuils = this.state.reforme.impot_revenu.bareme.seuils.concat(lastseuil+1);
	 const lasttaux = refbase.impot_revenu.bareme.taux[newnbt-2];
	 refbase.impot_revenu.bareme.taux = this.state.reforme.impot_revenu.bareme.taux.concat(lasttaux);
	 this.setState({reforme:refbase});
	 console.log("state changed ",this.state);
  }

  handleChange(e){
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
			  
	  fetch('http://127.0.0.1:5000/calculate/compare',{
			  method:"POST",
			  headers: {
				'Content-Type': 'application/json'
					  },
			  body: JSON.stringify({
				  deciles:false,
				  reforme:this.state.reforme
			  }),
			  }
		  )
		  .then(response => response.json())
		  .then(json => { this.setState({res_brut:json.res_brut});})
	console.log(this.state);
  }
  
	render(){
		console.log("et je rends reformeur",this.state);
		return(
		<Fragment>
            <div className="main-index">
				<div className="moitie-gauche">
					<Paper className={this.props.classes.article}>
                        <Article reformebase={this.state.reforme} onChange={this.handleChange} addTranche={this.addTranche}/>
                    </Paper>
                </div>
				<div className="moitie-droite">
					<Impact res_brut={this.state.res_brut}/>
				</div>
				<div className="clearfix"></div>
			</div>
		</Fragment>);
	}
	
}

export default withStyles(styles)(Reformeur);