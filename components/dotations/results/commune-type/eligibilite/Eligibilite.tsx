import { PureComponent } from "react";
// eslint-disable-next-line no-unused-vars
import { connect, ConnectedProps } from "react-redux";

// eslint-disable-next-line no-unused-vars
import { RootState } from "../../../../../redux/reducers";
// eslint-disable-next-line no-unused-vars
import { DotationsState } from "../../../../../redux/reducers/results";
import { getResultBoolValues } from "../../../../../redux/utils";
import { Values } from "../../../../common";
import styles from "./Eligibilite.module.scss";

function getEligibilite(value: boolean|undefined): "éligible"|"non éligible"|undefined {
  if (value === undefined) {
    return undefined;
  }
  return value ? "éligible" : "non éligible";
}

interface Props {
  index: number;
  dotation: keyof DotationsState["communes"];
}

const mapStateToProps = ({ results }: RootState, { dotation, index }: Props) => getResultBoolValues(results, `dotations.state.communes.${dotation}.communes.${index}.eligible`);

const connector = connect(mapStateToProps);

type PropsFromRedux = ConnectedProps<typeof connector>

class Eligibilite extends PureComponent<Props & PropsFromRedux> {
  render() {
    const { amendementValue, baseValue, plfValue } = this.props;
    return (
      <div className={styles.container}>
        <div>
          {/* Hack: Values only accepts numbers */}
          <Values
            amendementValue={getEligibilite(amendementValue) as any}
            baseValue={getEligibilite(baseValue) as any}
            plfValue={getEligibilite(plfValue) as any} />
        </div>
      </div>

    );
  }
}

const ConnectedEligibilite = connector(Eligibilite);

export { ConnectedEligibilite as Eligibilite };
