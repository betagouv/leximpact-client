import { PureComponent } from "react";

import { ResultValues } from "../../../../common";
import styles from "./DotationParHab.module.scss";

interface Props {
  index: number;
}

export class DotationParHab extends PureComponent<Props> {
  render() {
    const { index } = this.props;
    return (
      <div className={styles.text}>
        <ResultValues
          decimals={0}
          path={`dotations.state.communes.dsr.communes.${index}.dotationParHab`}
        />
        <span> € /hab.</span>
      </div>
    );
  }
}
