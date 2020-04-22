import { SIMULATE_CAS_TYPES_FAILURE, SIMULATE_CAS_TYPES_REQUEST, SIMULATE_CAS_TYPES_SUCCESS } from "../../actions";

const initialState = {
  didInvalidate: false,
  isFetching: false,
  // items: [],
};

function casTypes(state = initialState, action) {
  switch (action.type) {
  case SIMULATE_CAS_TYPES_REQUEST:
    return Object.assign({}, state, {
      didInvalidate: false,
      isFetching: true,
    });
  case SIMULATE_CAS_TYPES_SUCCESS:
    return Object.assign({}, state, {
      didInvalidate: false,
      isFetching: false,
    });
  case SIMULATE_CAS_TYPES_FAILURE:
    // The console.log is temporary.
    console.log(action.error);
    return Object.assign({}, state, {
      didInvalidate: true,
      isFetching: false,
    });
  default:
    return state;
  }
}

export default casTypes;
