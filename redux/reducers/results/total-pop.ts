import { get } from "lodash";

// Contient les résultats pour l'état retournées par le serveur
// avec les réformes par défaut, pour éviter de faire tourner
// le serveur au premier chargement

const DEFAULT_STATE = {
  deciles: [
    {
      apres: 0.0,
      avant: 0.0,
      poids: 3833871.886958,
      // plf: 0.0, inclure les résultats du plf pour afficher un plf par défaut.
    },
    {
      apres: 0.0,
      avant: 0.0,
      poids: 3832963.945698686,
      // plf: 0.0,
    },
    {
      apres: 0.0,
      avant: 0.0,
      poids: 3833357.0055688582,
    },
    {
      apres: 123466276.84286052,
      avant: 123466276.84915376,
      poids: 3833360.010276884,
    },
    {
      apres: 740207103.8879,
      avant: 740207103.8879,
      poids: 3833722.412513,
    },
    {
      apres: 1277361495.89866,
      avant: 1277361495.9637687,
      poids: 3832534.702,
    },
    {
      apres: 2139264978.356839,
      avant: 2139264978.4658802,
      poids: 3833666.176925782,
    },
    {
      apres: 4537396613.109134,
      avant: 4537396613.340411,
      poids: 3832703.38691251,
      // plf: 4527385336.07527,
    },
    {

      apres: 8858402198.081877,
      avant: 8858402198.533401,
      poids: 3832580.199351348,
    },
    {
      apres: 49223901332.959435,
      avant: 49223901332.959435,
      poids: 3833003.6956836134,
    },
  ],
  foyersFiscauxTouches: {
    // avant_to_plf: {
    //     neutre_zero: 20245399,
    //     gagnant: 18087578
    // },
    avant_to_apres: {
      neutre: 17935460,
      neutre_zero: 20397517,
    },
    // plf_to_apres: {
    //  neutre: 17842026,
    //  neutre_zero: 20490951,
    // },
  },
  frontieresDeciles: [
    3568.34521484375,
    9481.0546875,
    13182.486328125,
    16690.232421875,
    20167.837890625,
    24732.361328125,
    30657.201171875,
    38476.640625,
    53462.8203125,
    6514120.0,
  ],
  total: {
    apres: 66899999990.1038,
    avant: 66900000000.0,
    // plf: 66909549705.9914,
  },
};


const totalPop = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
  case "onSimPopFetchResult":
    return {
      deciles: get(action, "data.deciles"),
      foyersFiscauxTouches: get(action, "data.foyers_fiscaux_touches"),
      frontieresDeciles: get(action, "data.frontieres_deciles"),
      total: get(action, "data.total"),
    };
  default:
    return state;
  }
};

export default totalPop;
