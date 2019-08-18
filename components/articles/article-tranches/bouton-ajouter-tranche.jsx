/* eslint
    indent: [2, 2],
    semi: [2, "always"],
    react/jsx-fragments: [2, "element"],
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
    }]
*/
import PropTypes from "prop-types";
import { Fab, Typography } from "@material-ui/core";
import { Add as AddIcon } from "@material-ui/icons";

const AddTrancheButton = ({ onClick, style }) => (
  <div>
    <Fab style={style.Button} size="small" onClick={onClick} color="primary">
      <AddIcon />
    </Fab>
    <Typography
      inline
      variant="overline"
      color="primary"
      style={style.Typographybouton}>
      Ajouter une tranche
    </Typography>
  </div>
);

AddTrancheButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  style: PropTypes.shape().isRequired,
};

export default AddTrancheButton;
