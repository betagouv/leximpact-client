import { Component } from "react"
import { render } from "react-dom"
import { Grid } from "@material-ui/core"
import fetch from "isomorphic-fetch"
import SimpleCard from "./SimpleCard"
import RecettesCard from "./RecettesCard"
import Tooltip from '@material-ui/core/Tooltip';


class Impact extends Component {
	state={cas_types:[
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
				revenu: 150537
			}
		],
            loading: false
			}
	
    constructor(props) {
        super(props);
		this.handleClick=this.handleClick.bind(this);
    }

     componentDidMount(){
      const execlocale=true;
      const endpoint = execlocale?'http://127.0.0.1:5000':'https://leximpact-server.scalingo.io';
      this.setState({loading: true})
      fetch(endpoint+'/metadata/description_cas_types',{
              method:"POST",
              headers: {
                'Content-Type': 'application/json'
                      },
              body: JSON.stringify({}),
              }
          )
          .then(response => response.json())
          .then(json => {this.setState({cas_types: json, loading : false} );})
          .catch(() => console.log("Can’t access  response. Blocked by browser?"))//json.map(country => country.name))
          //.then(countryNames => this.setState({countryNames, loading: false}))
      console.log("C'est fait ! ")
      this.setState({loading: false})
          //.then(json => this.setState({revenus_cas_types: json , loading : false} ))
     /**/
	}
	
	handleClick(e){
		console.log("oui2",e,this.props);
		this.props.onClick(e);
	}

    render() {
		// include should be false to remove the graph of recettes
		const includepopulation=true;
		console.log("et un render");
        const { cas_types, loading} = this.state
		const res_brut=this.props.res_brut;
		const total_pop=this.props.total_pop;
        return (loading)
            ? <div> Loading ...</div>
            : (
                <Grid container spacing={24}>
                    {cas_types.map((ct, i) => (

                        <Grid item key={i} xs={6} sm={12} md={6} lg={4} xl={3}>
                            <SimpleCard desc_cas_type={ct} impots_avant={res_brut.avant[i]} delta={res_brut.apres[i] - res_brut.avant[i]} />
                        </Grid>
                    ))}
						<Grid item xs={6} sm={12} md={6} lg={4} xl={3}>
							{includepopulation?<RecettesCard impots_avant={total_pop.avant} delta = {total_pop.apres-total_pop.avant} onClick={this.handleClick}/>:<div/>}
                        </Grid>
                </Grid>
            )
        console.log("je suis là")
    }
}

export default Impact


/*
render(
    <CountryList />,
    document.getElementById('react-container')
) */
