import { get } from "lodash";

const DEFAULT_STATE = {
    deciles: [
    {
        poids: 2971038.6480677444,
        plf: 0.0,
        avant: 0.0,
        apres: 0.0
    },
    {
        poids: 2962840.746460729,
        plf: 0.0,
        avant: 0.0,
        apres: 0.0
    },
    {
        poids: 2967129.315827479,
        plf: 0.0,
        avant: 0.0,
        apres: 0.0
    },
    {
        poids: 2966845.592316038,
        plf: 0.0,
        avant: 0.0,
        apres: 0.0
    },
    {
        poids: 2967125.3488782085,
        plf: 0.0,
        avant: 0.0,
        apres: 0.0
    },
    {
        poids: 2966646.022710837,
        plf: 264142075.05016974,
        avant: 306068246.60108936,
        apres: 306068246.60108936
    },
    {
        poids: 2966908.6123303366,
        plf: 1817256265.032196,
        avant: 2260836186.190928,
        apres: 2260836186.190928
    },
    {
        poids: 2967395.335913088,
        plf: 4374855103.596021,
        avant: 5670033112.047076,
        apres: 5670033112.047076
    },
    {
        poids: 2967642.6940996028,
        plf: 9750617624.959183,
        avant: 11211262531.556978,
        apres: 11211262531.556978
    },
    {
        poids: 2965679.207943237,
        plf: 53075090261.219604,
        avant: 53551799923.60412,
        apres: 53551799923.60412
    }
    ],
  total: {
    avant: 73000000000.0,
    plf: 69281961329.85715,
    apres: 73000000000.0
  },
};

const totalPop = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
  case "onSimPopFetchResult":
    return {
      deciles: get(action, "data.deciles"),
      total: get(action, "data.total"),
    };
  default:
    return state;
  }
};

export default totalPop;
