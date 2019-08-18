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
import { Delete as DeleteIcon } from "@material-ui/icons";

const RemoveTrancheButton = ({ onClick, style }) => (
  <div>
    <Fab style={style.Button} size="small" onClick={onClick} color="primary">
      <DeleteIcon />
    </Fab>
    <Typography
      inline
      variant="overline"
      color="primary"
      style={style.Typographybouton}>
      Supprimer une tranche
    </Typography>
  </div>
);

RemoveTrancheButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  style: PropTypes.shape().isRequired,
};

export default RemoveTrancheButton;
