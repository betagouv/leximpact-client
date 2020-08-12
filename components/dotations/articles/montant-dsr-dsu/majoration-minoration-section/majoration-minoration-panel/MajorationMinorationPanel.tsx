import Button from "@material-ui/core/Button";
import Checkbox from "@material-ui/core/Checkbox";
import { PureComponent } from "react";

import { ItemExpandablePanel, Values } from "../../../../../common";
import styles from "./MajorationMinorationPanel.module.scss";

interface Props {
  type: "majoration" | "minoration";
}

export class MajorationMinorationPanel extends PureComponent<Props> {
  render() {
    const { type } = this.props;
    return (
      <div>
        <br />
        <ItemExpandablePanel expanded title={`Ajouter une ${type} DSR/DSU en 2021`}>
          <div className={styles.container}>
            <div>
              <div>
                <Checkbox
                  checked
                  color="primary"
                  onChange={() => { }}
                />
                {`${type === "majoration" ? "majorer" : "minorer"} la dotation de solidarité rurale (DSR)`}
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
              </div>
              <div>
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
              </div>
              <div className={styles.btn}>
                <Button color="primary" variant="contained">Valider</Button>
              </div>
            </div>
          </div>
        </ItemExpandablePanel>
      </div>
    );
  }
}
