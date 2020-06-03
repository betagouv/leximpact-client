import request from "../../../components/utils/request";
import { transformCasTypesToData } from "../../../components/utils/transform-cas-types-to-data";
import { formatReforme } from "../format-reforme";

export const SIMULATE_CAS_TYPES_REQUEST = "SIMULATE_CAS_TYPES_REQUEST";
function simulateCasTypesRequest() {
  return {
    type: SIMULATE_CAS_TYPES_REQUEST,
  };
}

export const SIMULATE_CAS_TYPES_FAILURE = "SIMULATE_CAS_TYPES_FAILURE";
function simulateCasTypesFailure(error) {
  return {
    error,
    type: SIMULATE_CAS_TYPES_FAILURE,
  };
}

export const SIMULATE_CAS_TYPES_SUCCESS = "SIMULATE_CAS_TYPES_SUCCESS";
function simulateCasTypesSuccess(data) {
  return {
    data,
    type: SIMULATE_CAS_TYPES_SUCCESS,
  };
}

const simulateCasTypes = () => (dispatch, getState) => {
  dispatch(simulateCasTypesRequest());

  const { casTypes, parameters } = getState();
  const body = {
    description_cas_types: transformCasTypesToData(casTypes),
    reforme: formatReforme(parameters.amendement),
  };

  return request
    .post("/calculate/compare", body)
    .then(payload => dispatch(simulateCasTypesSuccess(payload.res_brut)))
    .catch(err => dispatch(simulateCasTypesFailure(err)));
};

export default simulateCasTypes;
