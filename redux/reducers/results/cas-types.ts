import { cloneDeep } from "lodash";

const apres = [0, -1336, -1068, 0, -1723, -820];
const avant = [0, -1336, -1068, 0, -1723, -820];

// Create a map of objects which key is the index of the array.
const toIndexedObject = arr => arr.reduce((acc, v, i) => ({ ...acc, [i]: v }), {});

const initialState: any = {
  didInvalidate: false,
  isFetching: false,
  items: {
    apres: toIndexedObject(apres),
    avant: toIndexedObject(avant),
  },
};

function casTypes(state = initialState, action) {
  switch (action.type) {
  case "SIMULATE_CAS_TYPES_REQUEST":
    return {
      ...state,
      didInvalidate: false,
      isFetching: true,
    };
  case "SIMULATE_CAS_TYPES_SUCCESS":
    return {
      didInvalidate: false,
      isFetching: false,
      items: cloneDeep(action.data),
    };
  case "SIMULATE_CAS_TYPES_FAILURE":
    // The console.log is temporary.
    console.log(action.error); // eslint-disable-line no-console
    return {
      ...state,
      didInvalidate: true,
      isFetching: false,
    };
  case "onCreateCasType":
    const nextKey = Object.keys(state.items.avant).length;
    return {
      ...state,
      items: {
        apres: { ...state.items.apres, [nextKey]: 0 },
        avant: { ...state.items.avant, [nextKey]: 0 },
        plf: state.items.plf ? { ...state.items.plf, [nextKey]: 0 } : null,
      },
    };
  default:
    return state;
  }
}

export default casTypes;
