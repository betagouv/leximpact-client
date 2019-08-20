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
import { Grid } from "@material-ui/core";

import SimpleCard from "./SimpleCard";
import RecettesCard from "./RecettesCard";

export default () => (
  <Grid container sm={12} spacing={32}>
    <Grid item sm={6}>
      <RecettesCard />
    </Grid>
    <Grid item sm={6}>
      <SimpleCard />
    </Grid>
    <Grid item sm={6}>
      <SimpleCard />
    </Grid>
    <Grid item sm={6}>
      <SimpleCard />
    </Grid>
    <Grid item sm={6}>
      <SimpleCard />
    </Grid>
    <Grid item sm={6}>
      <SimpleCard />
    </Grid>
    <Grid item sm={6}>
      <SimpleCard />
    </Grid>
  </Grid>
);
