// eslint-disable-next-line no-unused-vars
import { connect, ConnectedProps } from "react-redux";

// eslint-disable-next-line no-unused-vars
import { RootState } from "../../../../redux/reducers";
import { getResultNumberValues } from "../../../../redux/utils";
import { Values } from "./Values";

const mapStateToProps = ({ results }: RootState, { path }) => getResultNumberValues(results, path);

const connector = connect(mapStateToProps);

type PropsFromRedux = ConnectedProps<typeof connector>

type Props = PropsFromRedux & {
  decimals?: number;
  path: string;
  plfTitle?: string|JSX.Element;
  amendementInputSize?: "small"|"xl";
  amendementTitle?: string|JSX.Element;
}

function ResultValues(props: Props) {
  return <Values {...props} />;
}

const ConnectedResultValues = connector(ResultValues);

export { ConnectedResultValues as ResultValues };
