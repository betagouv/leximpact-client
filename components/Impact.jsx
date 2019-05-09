import { Component } from "react"
import { render } from "react-dom"
import { Grid } from "@material-ui/core"
import fetch from "isomorphic-fetch"
import SimpleCard from "./SimpleCard"
import RecettesCard from "./RecettesCard"


class Impact extends Component {
	state={revenus_cas_types: {
                0: 195,
                1: 552,
                2: 552,
                3: 320,
                4: 319,
                5: 1505,
            },
            loading: false
			}
	
    constructor(props) {
        super(props);
    }

     componentDidMount(){
      this.setState({loading: true})
      fetch('http://127.0.0.1:5000/calculate/revenus',{
              method:"POST",
              headers: {
                'Content-Type': 'application/json'
                      },
              body: JSON.stringify({}),
              }
          )
          .then(response => response.json())
          .then(json => this.setState({revenus_cas_types: json , loading : false} ))
          //.catch(() => console.log("Can’t access  response. Blocked by browser?"))//json.map(country => country.name))
          //.then(countryNames => this.setState({countryNames, loading: false}))
      console.log("C'est fait ! ")
          //.then(json => this.setState({revenus_cas_types: json , loading : false} ))
     /**/
	}
	

    render() {
		
		console.log("et un render");
        const { revenus_cas_types, loading} = this.state
		const res_brut=this.props.res_brut;
        return (loading)
            ? <div> Loading ...</div>
            : (
                <Grid container sm={12} spacing={32}>
                    {Object.values(revenus_cas_types).map((revenu, i) => (
                        <Grid item key={i} sm={6}>
                            <SimpleCard revenu={revenu} impots_avant={res_brut.avant[i]} delta={res_brut.apres[i] - res_brut.avant[i]} />
                        </Grid>
                    ))}
                    <Grid item sm={6}>
						
                        <RecettesCard />
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
