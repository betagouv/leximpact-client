import { Component } from "react"
import { Grid } from "@material-ui/core"
import fetch from "isomorphic-fetch"
import SimpleCard from "components/SimpleCard"
import CarteEtat from "components/CarteEtat"

class Impact extends Component {
    constructor(props) {
        super(props)
        this.handleClick = this.handleClick.bind(this)
        this.handleChangeRevenu = this.handleChangeRevenu.bind(this)
        this.handleChangeOutreMer = this.handleChangeOutreMer.bind(this)
    }

    handleClick(e) {
        console.log("oui2", e, this.props)
        this.props.onClick(e)
    }

    handleChangeRevenu(i, e) {
        this.props.onRevenuChange(i, e.target.value)
    }

    handleChangeOutreMer(i, v) {
        this.props.onOutreMerChange(i, v)
    }

    render() {
        // include should be false to remove the graph of recettes
        const includepopulation = false
        console.log("et un render")
        const { loading } = this.props
        const { res_brut } = this.props
        const { total_pop } = this.props
        return (
            <Grid container spacing={24}>
                {this.props.cas_types.map((ct, i) => (
                    <Grid item key={"grid" + i} xs={6} sm={12} md={6} lg={4} xl={3}>
                        <SimpleCard
                            key={"card" + i}
                            loading={loading}
                            onChange={this.handleChangeRevenu}
                            onOutreMerChange={this.handleChangeOutreMer}
                            index={i}
                            desc_cas_type={ct}
                            impots_avant={res_brut.avant[i]}
                            impots_apres={res_brut.apres[i]}
                        />
                    </Grid>
                ))}
                <Grid item key="stateBudget" xs={12} sm={12} md={12} lg={12} xl={12}>
                    {includepopulation ? (
                        <CarteEtat
                            resultat={total_pop}
                            onClick={this.handleClick}
                        />
                    ) : (
                        <div />
                    )}
                </Grid>
            </Grid>
        )
    }
}

export default Impact

/*
render(
    <CountryList />,
    document.getElementById('react-container')
) */
