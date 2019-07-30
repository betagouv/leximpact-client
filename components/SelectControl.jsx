import React from "react"
import FormControl from "@material-ui/core/FormControl"
import FormGroup from "@material-ui/core/FormGroup"
import FormControlLabel from "@material-ui/core/FormControlLabel"
import Switch from "@material-ui/core/Switch"

class SwitchesGroup extends React.Component {
  state = {
      tranche1: true,
      tranche2: false,
      tranche3: true,
  }

  handleChange = name => (event) => {
      this.setState({ [name]: event.target.checked })
  }

  render() {
      return (
          <FormControl component="fieldset">
              <FormGroup>
                  <FormControlLabel
                      control={(
                          <Switch
                              checked={this.state.tranche1}
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
                              checked={this.state.tranche2}
                              onChange={this.handleChange("tranche2")}
                              value="tranche2"
                              color="primary"
                              colortype="light"
                          />
                      )}
                  />
              </FormGroup>
          </FormControl>
      )
  }
}

export default SwitchesGroup
