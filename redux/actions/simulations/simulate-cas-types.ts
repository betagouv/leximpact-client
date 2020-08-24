import request from "../../../components/common/utils/request";
import { transformCasTypesToData } from "../../../components/common/utils/transform-cas-types-to-data";
// eslint-disable-next-line no-unused-vars
import { RootState } from "../../reducers";
import { formatReforme } from "../format-reforme";

export interface SimulateCasTypesRequestAction {
  type: "SIMULATE_CAS_TYPES_REQUEST"
}

function simulateCasTypesRequest(): SimulateCasTypesRequestAction {
  return {
    type: "SIMULATE_CAS_TYPES_REQUEST",
  };
}

export interface SimulateCasTypesFailureAction {
  error: any,
  type: "SIMULATE_CAS_TYPES_FAILURE",
}

function simulateCasTypesFailure(error): SimulateCasTypesFailureAction {
  return {
    error,
    type: "SIMULATE_CAS_TYPES_FAILURE",
  };
}

interface ResponseBody {
  nbreParts: {
    apres: {
      [index: number]: number;
    },
    avant: {
      [index: number]: number;
    }
    plf?: {
      [index: number]: number;
    },
  },
  // eslint-disable-next-line camelcase
  res_brut: {
    apres: {
      [index: number]: number;
    },
    plf?: {
      [index: number]: number;
    },
    avant: {
      [index: number]: number;
    }
  },
  total: {
    apres: number;
    avant: number;
    plf?: number;
  }
}

export interface SimulateCasTypesSuccessAction {
  type: "SIMULATE_CAS_TYPES_SUCCESS",
  data: ResponseBody,
}

function simulateCasTypesSuccess(data: ResponseBody): SimulateCasTypesSuccessAction {
  return {
    data,
    type: "SIMULATE_CAS_TYPES_SUCCESS",
  };
}

const simulateCasTypes = () => (dispatch, getState) => {
  dispatch(simulateCasTypesRequest());

  const { descriptions, parameters } = getState() as RootState;
  const body = {
    description_cas_types: transformCasTypesToData(descriptions.ir.casTypes),
    reforme: formatReforme(parameters.amendement),
  };

  return request
    .post("/calculate/compare", body)
    .then(payload => dispatch(simulateCasTypesSuccess(payload.res_brut)))
    .catch(err => dispatch(simulateCasTypesFailure(err)));
};

export default simulateCasTypes;
