const wprm = [1, 1, 1, 1, 1];
const apres = [0, -600, 0, 0, -492, 0];
const avant = [0, -600, 0, 0, -492, 0];

const toIndexedObject = arr => arr.reduce((acc, v, i) => ({ ...acc, [i]: v }), {});

const DEFAULT_STATE = {
  apres: toIndexedObject(avant),
  avant: toIndexedObject(apres),
  wprm: toIndexedObject(wprm),
};

const resBrut = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
  case "onCalculateCompareLoaded":
    return action.data;
  default:
    return state;
  }
};

export default resBrut;
