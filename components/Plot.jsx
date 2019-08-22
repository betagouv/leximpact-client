import Paper from "@material-ui/core/Paper";
import { withStyles } from "@material-ui/core/styles/";
import { bar, layout } from "plotly-js-material-design-theme";
import Plotly from "plotly.js/dist/plotly";
import PropTypes from "prop-types";
import createPlotComponent from "react-plotly.js/factory";

function styles(theme) {
  const { mixins, spacing } = theme;

  return {
    root: {
      ...mixins.gutters(),
      margin: `${spacing.unit / 2}em auto`,
      paddingBottom: spacing.unit * 2,
      paddingTop: spacing.unit * 2,
      width: "25em",
    },
  };
}

function Plot({ classes }) {
  const Graph = createPlotComponent(Plotly);

  return (
    <Paper className={classes.root} elevation={1}>
      <Graph
        config={{
          displayModeBar: false,
        }}
        data={[
          bar({
            hoverinfo: ["y"],
            marker: { color: "E5DC07" },
            showlegend: false,
            type: "bar",
            x: ["Avant"],
            y: [700],
          }),
          bar({
            hoverinfo: ["y"],
            marker: { color: "00A3FF" },
            showlegend: false,
            type: "bar",
            x: ["Après"],
            y: [900],
          }),
        ]}
        layout={layout({
          height: 240,
          legend: {
            orientation: "h",
          },
          title: "Effet redistributif",
          width: 320,
        })}
      />
    </Paper>
  );
}

Plot.propTypes = {
  classes: PropTypes.shape().isRequired,
};

export default styles |> withStyles |> (_ => _(Plot));
