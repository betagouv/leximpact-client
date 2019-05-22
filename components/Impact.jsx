import { Component } from "react"
import { render } from "react-dom"
import { Grid } from "@material-ui/core"
import fetch from "isomorphic-fetch"
import SimpleCard from "./SimpleCard"
import RecettesCard from "./RecettesCard"

class Impact extends Component {
    constructor(props) {
        super(props)
        this.handleClick = this.handleClick.bind(this)
        this.handleChangeRevenu = this.handleChangeRevenu.bind(this)
    }

    handleClick(e) {
        console.log("oui2", e, this.props)
        this.props.onClick(e)
    }

    handleChangeRevenu(i, e) {
        this.props.onRevenuChange(i, e.target.value)
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
                    <Grid item key={i} xs={6} sm={12} md={6} lg={4} xl={3}>
                        <SimpleCard
                            loading={loading}
                            onChange={this.handleChangeRevenu}
                            index={i}
                            desc_cas_type={ct}
                            impots_avant={res_brut.avant[i]}
                            delta={res_brut.apres[i] - res_brut.avant[i]}
                        />
                    </Grid>
                ))}
                <Grid item xs={6} sm={12} md={6} lg={4} xl={3}>
                    {includepopulation ? (
                        <RecettesCard
                            impots_avant={total_pop.avant}
                            delta={total_pop.apres - total_pop.avant}
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
