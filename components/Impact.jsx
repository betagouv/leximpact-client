import { Component } from "react"
import { render } from "react-dom"
import { Grid } from "@material-ui/core"
import { withStyles } from "@material-ui/core/styles"
import fetch from "isomorphic-fetch"
import SimpleCard from "./SimpleCard"
import RecettesCard from "./RecettesCard"




class Impact extends Component {
    constructor(props) {
        super(props)
        this.state = {
            revenus_cas_types: {
                0: 195,
                1: 552,
                2: 552,
                3: 320,
                4: 319,
                5: 1505,
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
            loading: false,
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
        }
    }

    // componentDidMount(){
    //  this.setState({loading: true})
    //  fetch('http://127.0.0.1:5000/calculate/revenus',{
    //          method:"POST",
    //          headers: {
    //            'Content-Type': 'application/json'
    //                  },
    //          body: JSON.stringify({}),
    //          }
    //      )
    //      .then(response => response.json())
    //      .then(json => this.setState({revenus_cas_types: json , loading : false} ))
    //      //.catch(() => console.log("Can’t access  response. Blocked by browser?"))//json.map(country => country.name))
    //      //.then(countryNames => this.setState({countryNames, loading: false}))
    //  console.log("C'est fait ! ")
    // }


    render() {
        const { revenus_cas_types, res_brut, loading , reforme} = this.state
        return (loading)
            ? <div> Loading ...</div>
            : (
                <Grid container spacing={24}>
                    {Object.values(revenus_cas_types).map((revenu, i) => (
                        <Grid item key={i} xs={6} sm={12} md={6} lg={4} xl={3}>
                            <SimpleCard revenu={revenu} impots_avant={res_brut.avant[i]} delta={res_brut.apres[i] - res_brut.avant[i]}/>
                        </Grid>
                    ))}
                    <Grid item xs={6} sm={12} md={6} lg={4} xl={3}>
						le seuil est : {reforme.impot_revenu.bareme.seuils[0]}
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
