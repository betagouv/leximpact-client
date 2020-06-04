import { getIn } from "immutable";
import { connect, ConnectedProps } from "react-redux";
import { updateParameter } from "redux/actions/parameters/update-parameter";
import { RootState } from "types";

import { Parameter } from "./Parameter";

const mapStateToProps = ({ parameters }: RootState, { path }) => {
  const propertNames = path.split(".");
  const defaultValue = undefined;
  return {
    amendementValue: getIn(parameters.amendement, propertNames, defaultValue),
    baseValue: getIn(parameters.base, propertNames, defaultValue),
    plfValue: getIn(parameters.plf, propertNames, defaultValue),
  };
};

const mapDispatchToProps = (dispatch, { path }) => ({
  onAmendementChange: value => dispatch(updateParameter(path, value)),
});

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>

type Props = PropsFromRedux & {
  editable?: boolean;
  path: string;
  plfTitle?: string|JSX.Element;
  reformInputSize?: "small"|"large";
  reformTitle?: string|JSX.Element;
}

function StateParameter(props: Props) {
  return <Parameter {...props} />;
}

const ConnectedStateParameter = connector(StateParameter);

export { ConnectedStateParameter as StateParameter };
