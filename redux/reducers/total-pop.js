import { get } from "lodash";

const DEFAULT_STATE = {
  deciles: [
    {
      apres: 0.0,
      avant: 0.0,
      plf: 0.0,
      poids: 3833578.90306241,
    },
    {
      apres: 0.0,
      avant: 0.0,
      plf: 0.0,
      poids: 3833264.4388383226,
    },
    {
      apres: 0.0,
      avant: 0.0,
      plf: 0.0,
      poids: 3833631.8839756316,
    },
    {
      apres: 115811037.80943377,
      avant: 164001319.59048647,
      plf: 115811037.84358248,
      poids: 3832892.3549305964,
    },
    {
      apres: 731273117.5135992,
      avant: 970227639.264436,
      plf: 731273117.5135992,
      poids: 3833672.7639545985,
    },
    {
      apres: 1273870922.324249,
      avant: 1908111531.5952158,
      plf: 1273870922.324249,
      poids: 3833159.90116705,
    },
    {
      apres: 2119574867.6788251,
      avant: 2566616490.24452,
      plf: 2119574868.303815,
      poids: 3833685.715508051,
    },
    {
      apres: 4527385334.740299,
      avant: 5203059566.623159,
      plf: 4527385336.07527,
      poids: 3832703.38691251,
    },
    {
      apres: 8812413183.012724,
      avant: 10433779986.085815,
      plf: 8812413185.611202,
      poids: 3833573.199351348,
    },
    {
      apres: 49329221184.494,
      avant: 51754203466.59627,
      plf: 49329221237.72847,
      poids: 3832814.4522994757,
    },
  ],
  foyers_fiscaux_touches: {
    avant_to_apres: {
      gagnant: 18087578,
      neutre_zero: 20245399,
    },
    avant_to_plf: {
      gagnant: 18087578,
      neutre_zero: 20245399,
    },
    plf_to_apres: {
      neutre: 17842026,
      neutre_zero: 20490951,
    },
  },
  frontieres_deciles: [
    3551.0,
    9446.478515625,
    13107.2734375,
    16618.578125,
    20083.369140625,
    24638.91796875,
    30562.720703125,
    38271.43359375,
    53215.9375,
    6513028.0,
  ],
  total: {
    apres: 66909549705.9914,
    avant: 73000000000.00002,
    plf: 66909549705.9914,
  },
};


const totalPop = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
  case "onSimPopFetchResult":
    return {
      deciles: get(action, "data.deciles"),
      foyers_fiscaux_touches: get(action, "data.foyers_fiscaux_touches"),
      frontieres_deciles: get(action, "data.frontieres_deciles"),
      total: get(action, "data.total"),
    };
  default:
    return state;
  }
};

export default totalPop;
