/* eslint
    indent: [2, 2],
    semi: [2, "always"],
    react/jsx-indent: [2, 2],
    react/jsx-indent-props: [2, 2]
    max-nested-callbacks: [2, { "max": 4 }]
*/
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const styles = {
  links: {
    fontSize: "16px",
    fontWeight: "light",
    textTransform: "uppercase",
    textDecoration: "underline",
    textUnderlinePosition: "under",
    paddingleft: 30,
    paddingRight: 30,
    marginLeft: 30,
  },
};

function Links({ classes }) {
  return (
    <div>
      <Button color="inherit" className={classes.links}>
        Impôt sur le revenu
      </Button>
    </div>
  );
}

Links.propTypes = {
  classes: PropTypes.shape().isRequired,
};

export default withStyles(styles)(Links);
