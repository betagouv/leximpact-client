import FormControl from "@material-ui/core/FormControl";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormGroup from "@material-ui/core/FormGroup";
import Switch from "@material-ui/core/Switch";
import React from "react";

class SwitchesGroup extends React.Component {
  state = {
    tranche1: true,
    tranche2: false,
  };

  handleChange = name => (event) => {
    this.setState({ [name]: event.target.checked });
  };

  render() {
    const { tranche1, tranche2 } = this.state;
    return (
      <FormControl component="fieldset">
        <FormGroup>
          <FormControlLabel
            control={(
              <Switch
                checked={tranche1}
                color="primary"
                colortype="dark"
                value="tranche1"
                onChange={this.handleChange("tranche1")}
              />
            )}
          />
          <FormControlLabel
            control={(
              <Switch
                checked={tranche2}
                color="primary"
                colortype="light"
                value="tranche2"
                onChange={this.handleChange("tranche2")}
              />
            )}
          />
        </FormGroup>
      </FormControl>
    );
  }
}

export default SwitchesGroup;
