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
        poids: 2967129.2783290534,
        plf: 0.0,
        avant: 0.0,
        apres: 0.0
    },
    {
        poids: 2966619.432890594,
        apres: 264134541.9746374,
        plf: 264134541.9746374,
        avant: 306060020.8869976
    },
    {
        poids: 2967181.855524203,
        apres: 1809376026.188569,
        plf: 1809376026.188569,
        avant: 2264075192.634069
    },
    {
        poids: 2966689.3811764154,
        apres: 4325404239.51606,
        plf: 4325404239.51606,
        avant: 5684269733.175324
    },
    {
        poids: 2967045.9925591336,
        apres: 9801924476.362955,
        plf: 9801924476.362955,
        avant: 11188403665.816338
    },
    {
        poids: 2966731.2813958987,
        apres: 53081122008.78722,
        plf: 53081122045.81495,
        avant: 53557191387.48746
    }
    ],
  total: {
    avant: 73000000000.0,
    plf: 69281961329.85715,
    apres: 69281961292.82938
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
