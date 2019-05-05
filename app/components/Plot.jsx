import React from "react"
import PropTypes from "prop-types"
import Paper from "@material-ui/core/Paper"
import { withStyles } from "@material-ui/core/styles/"
import Plotly from "plotly.js/dist/plotly"
import createPlotComponent from "react-plotly.js/factory"
import { bar, layout } from "plotly-js-material-design-theme"

const Graph = createPlotComponent(Plotly)

function styles(theme) {
    const { mixins, spacing } = theme

    return ({
        root: {
            ...mixins.gutters(),
            paddingBottom: spacing.unit * 2,
            paddingTop: spacing.unit * 2,
            margin: `${spacing.unit / 2}em auto`,
            width: "25em",
        },
    })
}

function Plot(props) {
    const { classes } = props

    return (
        <Paper className={classes.root} elevation={1}>
            <Graph
                data={[
                    bar({
                        type: "bar",
                        x: ["Avant"],
                        y: [700],
                        marker: { color: "E5DC07" },
                        showlegend: false,
                        hoverinfo: ["y"],
                    }),
                    bar({
                        type: "bar",
                        x: ["Après"],
                        y: [900],
                        marker: { color: "00A3FF" },
                        showlegend: false,
                        hoverinfo: ["y"],
                    }),
                ]}

                layout={
                    layout({
                        width: 320,
                        height: 240,
                        title: "Effet redistributif",
                        legend: {
                            orientation: "h",
                        },
                    })
                }

                config={{
                    displayModeBar: false,
                }}
            />
        </Paper>
    )
}

Plot.propTypes = {
    classes: PropTypes.object.isRequired,
}

export default (
    styles
    |> withStyles
    |> (_ => _(Plot))
)
