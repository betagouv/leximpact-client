import { get } from "lodash";

const DEFAULT_STATE = {
  deciles: [
    {
      apres: 0.0,
      avant: 0.0,
      plf: 0.0,
      poids: 4202923.2244321145,
    },
    {
      apres: 0.0,
      avant: 0.0,
      plf: 0.0,
      poids: 4202870.357143037,
    },
    {
      apres: 0.0,
      avant: 0.0,
      plf: 0.0,
      poids: 4202604.771478591,
    },
    {
      apres: 0.0,
      avant: 0.0,
      plf: 0.0,
      poids: 4202985.20342632,
    },
    {
      apres: 0.0,
      avant: 0.0,
      plf: 0.0,
      poids: 4203176.505567464,
    },
    {
      apres: 399098268.00357205,
      avant: 399098268.00357205,
      plf: 344539729.5199344,
      poids: 4202773.543496567,
    },
    {
      apres: 3127941261.891757,
      avant: 3127941261.891757,
      plf: 2526194334.849532,
      poids: 4202422.196443077,
    },
    {
      apres: 7858262084.85734,
      avant: 7858262084.85734,
      plf: 5897457852.908185,
      poids: 4206377.572458202,
    },
    {
      apres: 14747750663.295225,
      avant: 14747750663.295225,
      plf: 12713038604.241426,
      poids: 4199337.446525509,
    },
    {
      apres: 51866947721.95205,
      avant: 51866947721.95205,
      plf: 51159236532.16132,
      poids: 4202354.988462872,
    },
  ],
  total: {
    apres: 78000000000.0,
    avant: 78000000000.0,
    plf: 72640467053.68044,
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
