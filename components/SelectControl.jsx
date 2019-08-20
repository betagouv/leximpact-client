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
import React from "react";
import FormControl from "@material-ui/core/FormControl";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";

class SwitchesGroup extends React.Component {
  state = {
    tranche1: true,
    tranche2: false,
    // tranche3: true,
  }

  handleChange = name => (event) => {
    this.setState({ [name]: event.target.checked });
  }

  render() {
    const { tranche1, tranche2 } = this.state;
    return (
      <FormControl component="fieldset">
        <FormGroup>
          <FormControlLabel
            control={(
              <Switch
                checked={tranche1}
                onChange={this.handleChange("tranche1")}
                value="tranche1"
                color="primary"
                colortype="dark"
              />
            )}
          />
          <FormControlLabel
            control={(
              <Switch
                checked={tranche2}
                onChange={this.handleChange("tranche2")}
                value="tranche2"
                color="primary"
                colortype="light"
              />
            )}
          />
        </FormGroup>
      </FormControl>
    );
  }
}

export default SwitchesGroup;
