import { PureComponent } from "react";

// eslint-disable-next-line no-unused-vars
import { DotationsState } from "../../../../../redux/reducers/results";
import { ResultValues } from "../../../../common";
import styles from "./DotationParHab.module.scss";

interface Props {
  index: number;
  dotation: keyof DotationsState["communes"];
}

export class DotationParHab extends PureComponent<Props> {
  render() {
    const { dotation, index } = this.props;
    return (
      <div className={styles.text}>
        <ResultValues
          decimals={0}
          path={`dotations.state.communes.${dotation}.communes.${index}.${dotation === "dsr" ? "dotationParHabAnneeSuivante" : "dotationParHab"}`}
        />
        <span>&nbsp;&nbsp;€ /hab.</span>
      </div>
    );
  }
}
