import { cloneDeep } from "lodash";

const wprm = [1, 1, 1, 1, 1, 1];
const apres = [0, -1327, -1062, 0, -1712, -816];
const avant = [0, -1839, -1292, 0, -2545, -1206];
const plf = [0, -1327, -1062, 0, -1712, -816];

// cree une map d'objet
// dont la cle est l'index dans un array
const toIndexedObject = arr => arr.reduce((acc, v, i) => ({ ...acc, [i]: v }), {});

const DEFAULT_STATE = {
  apres: toIndexedObject(avant),
  avant: toIndexedObject(apres),
  plf: toIndexedObject(plf),
  wprm: toIndexedObject(wprm),
};

const getNextStateKey = (state) => {
  const nextKey = Object.keys(state.wprm).length;
  return nextKey;
};

const resBrut = (state = DEFAULT_STATE, action) => {
  let nextKey = null;
  let nextState = null;
  switch (action.type) {
  case "onCalculateCompareLoaded":
    return cloneDeep(action.data);
  case "onCreateCasType":
    nextKey = getNextStateKey(state);
    nextState = {
      apres: { ...state.apres, [nextKey]: 0 },
      avant: { ...state.avant, [nextKey]: 0 },
      plf: { ...state.plf, [nextKey]: 0 },
      wprm: { ...state.wprm, [nextKey]: 1 },
    };
    return nextState;
  default:
    return state;
  }
};

export default resBrut;
