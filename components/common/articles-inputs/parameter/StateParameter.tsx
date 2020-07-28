import { getIn } from "immutable";
// eslint-disable-next-line no-unused-vars
import { connect, ConnectedProps } from "react-redux";

import { updateParameter } from "../../../../redux/actions/parameters/update-parameter";
// eslint-disable-next-line no-unused-vars
import { RootState } from "../../../../redux/reducers";
import { Parameter } from "./Parameter";

const mapStateToProps = ({ parameters }: RootState, { path }) => {
  const propertNames = path.split(".");

  const amendementValue = getIn(parameters.amendement, propertNames, undefined);
  if (amendementValue === undefined) {
    throw new Error(`No parameter value found at ${path}. Are you sure the path is correct?`);
  }

  const baseValue = getIn(parameters.base, propertNames, undefined);
  const plfValue = getIn(parameters.plf, propertNames, undefined);

  return { amendementValue, baseValue, plfValue };
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
  amendementInputSize?: "small"|"xl";
  amendementTitle?: string|JSX.Element;
}

function StateParameter(props: Props) {
  return <Parameter {...props} />;
}

const ConnectedStateParameter = connector(StateParameter);

export { ConnectedStateParameter as StateParameter };
