import { cloneDeep } from "lodash";

import { SIMULATE_CAS_TYPES_FAILURE, SIMULATE_CAS_TYPES_REQUEST, SIMULATE_CAS_TYPES_SUCCESS } from "../../actions";

const wprm = [1, 1, 1, 1, 1, 1];
const apres = [0, -1336, -1068, 0, -1723, -820];
const avant = [0, -1336, -1068, 0, -1723, -820];

// Create a map of objects which key is the index of the array.
const toIndexedObject = arr => arr.reduce((acc, v, i) => ({ ...acc, [i]: v }), {});

const initialState = {
  didInvalidate: false,
  isFetching: false,
  items: {
    apres: toIndexedObject(apres),
    avant: toIndexedObject(avant),
    wprm: toIndexedObject(wprm),
  },
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
      items: cloneDeep(action.data),
    });
  case SIMULATE_CAS_TYPES_FAILURE:
    // The console.log is temporary.
    console.log(action.error);
    return Object.assign({}, state, {
      didInvalidate: true,
      isFetching: false,
    });
  case "onCreateCasType":
    const nextKey = Object.keys(state.wprm).length;
    return Object.assign({}, state, {
      items: {
        apres: { ...state.apres, [nextKey]: 0 },
        avant: { ...state.avant, [nextKey]: 0 },
        plf: state.plf ? { ...state.plf, [nextKey]: 0 } : null,
        wprm: { ...state.wprm, [nextKey]: 1 },
      },
    });
  default:
    return state;
  }
}

export default casTypes;
