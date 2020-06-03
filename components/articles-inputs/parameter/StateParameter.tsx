import { getIn } from "immutable";
import { connect, ConnectedProps } from "react-redux";
import { updateParameter } from "redux/actions/parameters/update-parameter";
import { RootState } from "types";

import { Parameter } from "./Parameter";

const mapStateToProps = ({ parameters }: RootState, { path }) => ({
  amendementValue: getIn(parameters.amendement, path.split("."), -1),
  baseValue: getIn(parameters.base, path.split("."), -1),
  plfValue: parameters.plf && getIn(parameters.plf, path.split("."), -1),
});

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
