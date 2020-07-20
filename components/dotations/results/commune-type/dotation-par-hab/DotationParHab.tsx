import { PureComponent } from "react";

import { ResultValues } from "../../../../articles-inputs/parameter";
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
          path={`dotations.state.communes.dsr.communes.${index}.dotationParHab`}
        />
        <span> €/hab</span>
      </div>
    );
  }
}
