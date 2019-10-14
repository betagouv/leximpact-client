import { get } from "lodash";

const DEFAULT_STATE = {
    deciles: [
      {
        poids: 3834714.40603221,
        avant: 0.0,
        plf: 0.0,
        apres: 0.0
    },
    {
        poids: 3831960.2492622985,
        avant: 0.0,
        plf: 0.0,
        apres: 0.0
    },
    {
        poids: 3833726.4703578306,
        avant: 0.0,
        plf: 0.0,
        apres: 0.0
    },
    {
        poids: 3832971.825893659,
        avant: 163196274.10982284,
        plf: 114554346.13898255,
        apres: 114554346.16869165
    },
    {
        poids: 3833478.2128502205,
        avant: 924238835.8803272,
        plf: 700550832.3500898,
        apres: 700550832.5317743
    },
    {
        poids: 3833205.1052852534,
        avant: 1841104027.3011975,
        plf: 1231096628.1030228,
        apres: 1231096628.4223018
    },
    {
        poids: 3833344.0956197158,
        avant: 2449848201.521758,
        plf: 2022036293.2370403,
        apres: 2022036293.7614455
    },
    {
        poids: 3833783.1450037025,
        avant: 4861705729.17865,
        plf: 4207966088.5442514,
        apres: 4207966089.635567
    },
    {
        poids: 3832931.768407434,
        avant: 10502441818.647232,
        plf: 8848283177.56762,
        apres: 8848283179.862377
    },
    {
        poids: 3832861.7212873846,
        avant: 52257465113.36083,
        plf: 49867394307.35378,
        apres: 49867394356.74171
    }
    ],
  total: {
    avant: 73000000000.00002,
    plf: 66991881673.294815,
    apres: 66991881727.12388
  },
  frontieres_deciles: [
        3281.0,
        9349.404296875,
        13054.375,
        16583.2890625,
        19990.078125,
        24683.095703125,
        30344.03515625,
        38166.0078125,
        53047.2109375,
        6719365.5
    ],
  foyers_fiscaux_touches: {
        avant_to_plf: {
            neutre_zero: 20658801,
            gagnant: 17674176
        },
        avant_to_apres: {
            neutre_zero: 20658801,
            gagnant: 17674176
        },
        plf_to_apres: {
            neutre_zero: 20911118,
            neutre: 17421859
        }
  }
};


const totalPop = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
  case "onSimPopFetchResult":
    return {
      deciles: get(action, "data.deciles"),
      frontieres_deciles: get(action, "data.frontieres_deciles"),
      total: get(action, "data.total"),
      foyers_fiscaux_touches: get(action, "data.foyers_fiscaux_touches"),
      frontieres_deciles: get(action, "data.frontieres_deciles"),
    };
  default:
    return state;
  }
};

export default totalPop;
