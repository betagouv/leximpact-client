import { Component,Fragment } from 'react'
import Article from "../components/Article"
import Impact from "../components/Impact"
import fetch from "isomorphic-fetch"
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import MediaQuery from 'react-responsive';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import SwipeableViews from 'react-swipeable-views';
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
import ArticleHeader from "components/ArticleHeader"

const styles = theme => ({
    

        paper: {
        	padding: 0,
        	margin: "1em",  	
        }
		
})


function TabContainer({ children, dir }) {
  return (
    <Typography component="div" dir={dir} style={{ padding: 8 * 3 }}>
      {children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
  dir: PropTypes.string.isRequired,
};



class Reformeur extends Component{
	

	
	constructor(props) {
	const baseseuils=[9964,27519,73779,156244];
	const basetaux=[14,30,41,45];
	
	
	  super(props);
	  this.state = {
		reforme:{
			impot_revenu:{
				bareme:{
					seuils:baseseuils,
					taux:basetaux
				}
				/*,
				decote:{
					seuil_celib : 1196,
					seuil_couple : 1906 
				}*/
				
			}
					
		},
		reformebase:{
			impot_revenu:{
				bareme:{
					seuils:baseseuils,
					taux:basetaux
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
		total_pop:{
			avant: 78000000000,
			apres: 78000000001,
		},
		indextab : 0,
		cas_types:[
			{
				guadeloupe: false,
				nombre_declarants: 1,
				nombre_declarants_retraites: 0,
				nombre_personnes_a_charge: 0,
				revenu: 190
			},
			{
				guadeloupe: false,
				nombre_declarants: 2,
				nombre_declarants_retraites: 0,
				nombre_personnes_a_charge: 2,
				revenu: 55238
			},
			{
				guadeloupe: true,
				nombre_declarants: 2,
				nombre_declarants_retraites: 0,
				nombre_personnes_a_charge: 2,
				revenu: 55238
			},
			{
				guadeloupe: false,
				nombre_declarants: 2,
				nombre_declarants_retraites: 2,
				nombre_personnes_a_charge: 0,
				revenu: 32000
			},
			{
				guadeloupe: false,
				nombre_declarants: 1,
				nombre_declarants_retraites: 0,
				nombre_personnes_a_charge: 1,
				revenu: 31914
			},
			{
				guadeloupe: false,
				nombre_declarants: 1,
				nombre_declarants_retraites: 0,
				nombre_personnes_a_charge: 1,
				revenu: 1505370
			}
		],
		cas_types_defaut: true
	  };
	this.handleChange=this.handleChange.bind(this);
	this.addTranche=this.addTranche.bind(this);
	this.removeTranche=this.removeTranche.bind(this);
	this.simPop=this.simPop.bind(this);
	this.handleRevenuChange=this.handleRevenuChange.bind(this);
	}
  
     componentDidMount(){
      const endpoint = this.endpoint();//execlocale?'http://127.0.0.1:5000':'https://leximpact-server.scalingo.io';
      fetch(endpoint+'/metadata/description_cas_types',{
              method:"POST",
              headers: {
                'Content-Type': 'application/json'
                      },
              body: JSON.stringify({}),
              }
          )
          .then(response => response.json())
          .then(json => {this.setState({cas_types: json} );})
          .catch(() => console.log("Can’t access  response. Blocked by browser?"))//json.map(country => country.name))
          //.then(countryNames => this.setState({countryNames, loading: false}))
      console.log("C'est fait ! ")
      //.then(json => this.setState({revenus_cas_types: json , loading : false} ))
     /**/
	}
	
  UpdateBareme = (i,value) => {
	  const ref= this.state.reforme
      const list = this.state.reforme.impot_revenu.bareme.seuils.map((item, j) => {
        if (j === i) {
        	const valchiffre=parseInt(value,10);
          return isNaN(valchiffre)? item:valchiffre;
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
        	const valchiffre=parseInt(value,10);
          return isNaN(valchiffre)? item:valchiffre;
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
	 const lastseuil = refbase.impot_revenu.bareme.seuils[newnbt-2];
	 refbase.impot_revenu.bareme.seuils = this.state.reforme.impot_revenu.bareme.seuils.concat(lastseuil+1);
	 const lasttaux = refbase.impot_revenu.bareme.taux[newnbt-2];
	 refbase.impot_revenu.bareme.taux = this.state.reforme.impot_revenu.bareme.taux.concat(lasttaux);
	 this.setState({reforme:refbase});
  }

  removeTranche(e){

	 const refbase=this.state.reforme;
	 const newnbt=refbase.impot_revenu.bareme.seuils.length-1;
	 if (newnbt>0){
		 refbase.impot_revenu.bareme.seuils = this.state.reforme.impot_revenu.bareme.seuils.slice(0,newnbt)
		 refbase.impot_revenu.bareme.taux = this.state.reforme.impot_revenu.bareme.taux.slice(0,newnbt)
		 this.setState({reforme:refbase});
	 }
  }



  handleTabChange = (event, value) => {
    this.setState({ indextab: value });
  };

  handleIndexChange = index => {
    this.setState({ indextab: index });
  };
  
  endpoint= () => {
	const execlocale=false;
    return execlocale?'http://127.0.0.1:5000':'https://leximpact-server.scalingo.io';
	
	}
	
	updateCompare(bodyreq){
		console.log(bodyreq)
	  fetch(this.endpoint()+'/calculate/compare',{
			  method:"POST",
			  headers: {
				'Content-Type': 'application/json'
					  },
			  body: bodyreq,
			  }
		  )
		  .then(response => response.json())
		  .then(json => { this.setState({res_brut:json.res_brut});})
	}

  handleChange(e){
		const name=e.target.name;
		const success=false;
		const newvalue = (e.target.value== "") ? 0:e.target.value;
		if (name.substring(0,5)=="seuil"){
			const numb= parseInt(name.substring(5),10);
			this.UpdateBareme(numb,newvalue);
			//success=true;
		}
		if (name.substring(0,4)=="taux"){
			const numb= parseInt(name.substring(4),10);
			this.UpdateTaux(numb,newvalue);
			//success=true;
		}
		const bodyreq=this.cas_types_defaut?JSON.stringify({
			deciles:false,
			reforme:this.state.reforme
		}):
		JSON.stringify({
			reforme:this.state.reforme,
			description_cas_types:this.state.cas_types
		});
		this.updateCompare(bodyreq);
  }

  simPop(e){
	  fetch(this.endpoint()+'/calculate/compare',{
			  method:"POST",
			  headers: {
				'Content-Type': 'application/json'
					  },
			  body: JSON.stringify({
				  deciles:true,
				  reforme:this.state.reforme
			  }),
			  }
		  )
		  .then(response => response.json())
		  .then(json => { this.setState({total_pop:json.total});})
  }
  handleRevenuChange = (i,value) => {
		const arrayrev=this.state.cas_types;
		arrayrev[i].revenu=value*12;
		this.setState({cas_types:arrayrev,cas_types_defaut:false})
		const bodyreq=JSON.stringify({
			reforme:this.state.reforme,
			description_cas_types:this.state.cas_types
		});
		this.updateCompare(bodyreq);
	}
	/*render2(){
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
					<Impact res_brut={this.state.res_brut} total_pop={this.state.total_pop} onClick={this.simPop}/>
				</div>
				<div className="clearfix"></div>
			</div>
	}*/
	
	render(){
		const { classes, theme } = this.props;
		console.log("et je rends reformeur nouveau",this.state);
		const desktop = 1025
		const tablet = 768 //and max-width: 1024px
		const phone = 767
		return(
		<Fragment>
	            <div className="main-index">
                <MediaQuery minDeviceWidth={phone} values={{ deviceWidth: tablet }}>
                    {/*<div>You are a desktop or laptop</div>*/}
                    <MediaQuery minDeviceWidth={1824}>
                      {/*<div>You also have a huge screen</div>*/}
                    </MediaQuery>
                    <MediaQuery maxWidth={phone}>
                        {(matches) => {
                          if (matches) {
                            return (
                                <div>
                                    {/*<div>You are sized like a tablet or mobile phone though</div>*/}
                                          <div className={classes.root}>
											<AppBar position="static" color="default">
											  <Tabs
												value={this.state.indextab}
												onChange={this.handleTabChange}
												indicatorColor="primary"
												textColor="primary"
												variant="fullWidth"
											  >
												<Tab label="Loi" />
												<Tab label="Impacts" />
											  </Tabs>
											</AppBar>
											<SwipeableViews
											  axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
											  index={this.state.indextab}
											  onChangeIndex={this.handleIndexChange}
											>
												  <TabContainer dir={theme.direction}>
												  		
												  		<Paper>
												  		<ArticleHeader/>
															<Article reforme={this.state.reforme} reformebase={this.state.reformebase} onChange={this.handleChange} addTranche={this.addTranche}  removeTranche={this.removeTranche}/>
														</Paper>
												  </TabContainer>
												  <TabContainer dir={theme.direction}>
															<Impact onRevenuChange={this.handleRevenuChange} res_brut={this.state.res_brut} total_pop={this.state.total_pop} onClick={this.simPop} cas_types={this.state.cas_types}/>
												  </TabContainer>
											</SwipeableViews>
										  </div>
                                </div>
                            );
                          } else {
                            return (
                                <div>
                                    {/*<div>You also have a good screen</div>*/}
                                    <div className="moitie-gauche">
                                    	
										<Paper className={this.props.classes.paper}>
										 <ArticleHeader/>
										
											<Article reforme={this.state.reforme} reformebase={this.state.reformebase} onChange={this.handleChange} addTranche={this.addTranche} removeTranche={this.removeTranche}/>
                                        </Paper>
                                    </div>
                                    <div className="moitie-droite">
										<Impact onRevenuChange={this.handleRevenuChange} res_brut={this.state.res_brut} total_pop={this.state.total_pop} onClick={this.simPop} cas_types={this.state.cas_types}/>
                                    </div>
                                    <div className="clearfix"></div>
                                </div>
                            );
                          }
                        }}
                      
                    </MediaQuery>
                </MediaQuery>

                <MediaQuery maxDeviceWidth={phone}>
                   {/*<div>You are a tablet or mobile phone</div>*/}
						<div>
                                    {/*<div>You are sized like a tablet or mobile phone though</div>*/}
                                          <div className={classes.root}>
											<AppBar position="static" color="default">
											  <Tabs
												value={this.state.indextab}
												onChange={this.handleTabChange}
												indicatorColor="primary"
												textColor="primary"
												variant="fullWidth"
											  >
												<Tab label="Loi" />
												<Tab label="Impacts" />
											  </Tabs>
											</AppBar>
											<SwipeableViews
											  axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
											  index={this.state.indextab}
											  onChangeIndex={this.handleIndexChange}
											>
												  <TabContainer dir={theme.direction}>
												  	<ArticleHeader/>
													  <Article reforme={this.state.reforme} reformebase={this.state.reformebase} onChange={this.handleChange} addTranche={this.addTranche}/>
												  </TabContainer>
												  <TabContainer dir={theme.direction}>
													  <Impact res_brut={this.state.res_brut} total_pop={this.state.total_pop} onClick={this.simPop}/>
												  </TabContainer>
											</SwipeableViews>
										  </div>
                                </div>
                </MediaQuery>

                <MediaQuery orientation="portrait">
                  <div>You are portrait</div>
                </MediaQuery>

                <MediaQuery orientation="landscape">
                  <div>You are landscape</div>
                </MediaQuery>

                <MediaQuery minResolution="2dppx">
                  <div>You are retina</div>
                </MediaQuery>
            </div>
		</Fragment>);
	}
	
	
}

export default withStyles(styles, { withTheme: true })(Reformeur);