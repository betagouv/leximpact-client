import { PureComponent } from "react";

import styles from "./DotationParHab.module.scss";
import { ResultValues } from "../../../../articles-inputs/parameter";

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
