import classNames from "classnames";
import { PureComponent } from "react";

import styles from "./Eligibilite.module.scss";
import { getResultBoolValues } from "../../../../../redux/utils";
import { RootState } from "../../../../../redux/reducers";
import { connect, ConnectedProps } from "react-redux";
import { Parameter } from "../../../../articles-inputs";


const mapStateToProps = ({ results }: RootState, { index }: { index: number }) => getResultBoolValues(results, `dotations.state.communes.dsr.communes.${index}.eligible`);

const connector = connect(mapStateToProps);

type PropsFromRedux = ConnectedProps<typeof connector>

type Props = PropsFromRedux & {
  index: number;
}

class Eligibilite extends PureComponent<Props> {
  render() {
    const { amendementValue, plfValue, baseValue } = this.props;
    return (
      <div className={styles.container}>
        <div>
          {/* Hack: Parameter only accepts numbers */}
          <Parameter
            amendementValue={(amendementValue ? "éligible" : "non éligible") as any}
            baseValue={(baseValue ? "éligible" : "non éligible") as any}
            plfValue={(plfValue ? "éligible" : "non éligible") as any} />
        </div>
        {
          typeof amendementValue !== 'undefined' && (
            <div className={classNames({
              [styles.spot]: true,
              [styles.eligible]: amendementValue,
            })} />
          )
        }
      </div>

    );
  }
}

const ConnectedEligibilite = connector(Eligibilite);

export { ConnectedEligibilite as Eligibilite };

