import { PureComponent } from "react";
// eslint-disable-next-line no-unused-vars
import { connect, ConnectedProps } from "react-redux";

// eslint-disable-next-line no-unused-vars
import { RootState } from "../../../../../redux/reducers";
import { getResultBoolValues } from "../../../../../redux/utils";
import { Parameter } from "../../../../articles-inputs";
import { EligibiliteSpot } from "../../common";
import styles from "./Eligibilite.module.scss";

function getEligibilite(value: boolean|undefined): "éligible"|"non éligible"|undefined {
  if (value === undefined) {
    return undefined;
  }
  return value ? "éligible" : "non éligible";
}

const mapStateToProps = ({ results }: RootState, { index }: { index: number }) => getResultBoolValues(results, `dotations.state.communes.dsr.communes.${index}.eligible`);

const connector = connect(mapStateToProps);

type PropsFromRedux = ConnectedProps<typeof connector>

type Props = PropsFromRedux & {
  index: number;
}

class Eligibilite extends PureComponent<Props> {
  render() {
    const { amendementValue, baseValue, plfValue } = this.props;
    return (
      <div className={styles.container}>
        <div>
          {/* Hack: Parameter only accepts numbers */}
          <Parameter
            amendementValue={getEligibilite(amendementValue) as any}
            baseValue={getEligibilite(baseValue) as any}
            plfValue={getEligibilite(plfValue) as any} />
        </div>
        {
          typeof amendementValue !== "undefined" && (
            <EligibiliteSpot eligible={amendementValue} />
          )
        }
      </div>

    );
  }
}

const ConnectedEligibilite = connector(Eligibilite);

export { ConnectedEligibilite as Eligibilite };
