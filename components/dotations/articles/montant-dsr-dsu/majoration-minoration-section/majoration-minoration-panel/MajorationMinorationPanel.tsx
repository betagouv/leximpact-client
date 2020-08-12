import Button from "@material-ui/core/Button";
// import Checkbox from "@material-ui/core/Checkbox";
import { PureComponent } from "react";
// eslint-disable-next-line no-unused-vars
import { connect, ConnectedProps } from "react-redux";

import { updateParameter } from "../../../../../../redux/actions";
import { ItemExpandablePanel, Values } from "../../../../../common";
import styles from "./MajorationMinorationPanel.module.scss";

interface Props {
  type: "majoration" | "minoration";
}

interface State {
  value: number;
}

const mapDispatchToProps = dispatch => ({
  addVariation: value => dispatch(
    updateParameter("dotations.montants.dsr.variation", value),
  ),
});

const connector = connect(() => ({}), mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

class MajorationMinorationPanel extends PureComponent<PropsFromRedux & Props, State> {
  constructor(props) {
    super(props);
    this.state = {
      value: 90,
    };
    this.changeValue = this.changeValue.bind(this);
    this.add = this.add.bind(this);
  }

  changeValue(value: number) {
    this.setState({ value });
  }

  add() {
    const { addVariation, type } = this.props;
    const { value } = this.state;
    addVariation(type === "majoration" ? value : -value);
  }

  render() {
    const { type } = this.props;
    const { value } = this.state;
    return (
      <div>
        <br />
        <ItemExpandablePanel title={`Ajouter une ${type} DSR/DSU en 2021`}>
          <div className={styles.container}>
            <div>
              {/* <div>
                <Checkbox
                  checked
                  color="primary"
                  onChange={() => { }}
                />
                {`${type === "majoration" ? "majorer" : "minorer"} la dotation de solidarité rurale (DSR)`}
              </div> */}
              <div className={styles.values}>
              de
                {" "}
                <Values
                  editable
                  amendementInputSize="small"
                  amendementValue={value}
                  onAmendementChange={this.changeValue}
                />
                {" "}
              millions d&apos;euros chacune
              </div>
              {/* <div>
                <Checkbox
                  checked
                  color="primary"
                  onChange={() => { }}
                />
                {`${type === "majoration" ? "majorer" : "minorer"} la dotation de solidarité urbaine (DSU)`}
              </div>
              <div className={styles.values}>
              de
                {" "}
                <Values
                  editable
                  amendementInputSize="small"
                  amendementValue={90}
                  baseValue={90} />
                {" "}
              millions d&apos;euros
              </div> */}
              <div className={styles.btn}>
                <Button color="primary" variant="contained" onClick={this.add}>Valider</Button>
              </div>
            </div>
          </div>
        </ItemExpandablePanel>
      </div>
    );
  }
}


const Component = connector(MajorationMinorationPanel);

export { Component as MajorationMinorationPanel };
