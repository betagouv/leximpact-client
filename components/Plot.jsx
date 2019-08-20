/* eslint
    indent: [2, 2],
    semi: [2, "always"],
    react/jsx-indent: [2, 2],
    react/jsx-indent-props: [2, 2],
    max-nested-callbacks: [2, { "max": 4 }],
    react/jsx-closing-bracket-location: [2, {
        "nonEmpty": false,
        "selfClosing": false
    }],
    "jsx-a11y/anchor-is-valid": [2, {
      "components": ["Link"],
      "specialLink": ["hrefLeft", "hrefRight"]
    }],
    import/order: [2, {
      newlines-between: "always",
      groups: ["builtin", "external", "parent", "sibling", "index"]
    }],
    camelcase: 0,
*/
import PropTypes from "prop-types";
import Paper from "@material-ui/core/Paper";
import { withStyles } from "@material-ui/core/styles/";
import Plotly from "plotly.js/dist/plotly";
import createPlotComponent from "react-plotly.js/factory";
import { bar, layout } from "plotly-js-material-design-theme";

function styles(theme) {
  const { mixins, spacing } = theme;

  return {
    root: {
      ...mixins.gutters(),
      paddingBottom: spacing.unit * 2,
      paddingTop: spacing.unit * 2,
      margin: `${spacing.unit / 2}em auto`,
      width: "25em",
    },
  };
}

function Plot({ classes }) {
  const Graph = createPlotComponent(Plotly);

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
        layout={layout({
          width: 320,
          height: 240,
          title: "Effet redistributif",
          legend: {
            orientation: "h",
          },
        })}
        config={{
          displayModeBar: false,
        }}
      />
    </Paper>
  );
}

Plot.propTypes = {
  classes: PropTypes.shape().isRequired,
};

export default styles |> withStyles |> (_ => _(Plot));
