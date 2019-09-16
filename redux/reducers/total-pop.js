import { get } from "lodash";

const DEFAULT_STATE = {
    deciles: [
    {
      apres: 0.0,
      avant: 0.0,
      plf: 0.0,
      poids: 3331061.0258954954
    },
    {
      apres: 0.0,
      avant: 0.0,
      plf: 0.0,
      poids: 3324862.56582528
    },
    {
      apres: 0.0,
      avant: 0.0,
      plf: 0.0,
      poids: 3326696.3910753205
    },
    {
      apres: 0.0,
      avant: 0.0,
      plf: 0.0,
      poids: 3330268.7108581136
    },
    {
      apres: 0.0,
      avant: 0.0,
      plf: 0.0,
      poids: 3328852.877470625
    },
    {
      apres: 373735681.3030028,
      avant: 435985991.0536429,
      plf: 373735681.3030028,
      poids: 3324595.5792387263
    },
    {
      apres: 2198575181.8267617,
      avant: 2742617178.68527,
      plf: 2198575181.8267617,
      poids: 3324009.7004330344
    },
    {
      apres: 4930025401.62899,
      avant: 6547183782.884228,
      plf: 4930025401.62899,
      poids: 3362312.6499443427
    },
    {
      apres: 10534326095.735968,
      avant: 12208816539.15219,
      plf: 10534326095.735968,
      poids: 3293736.581623566
    },
    {
      apres: 50486065752.53808,
      avant: 51065396508.224655,
      plf: 50486065752.53808,
      poids: 3324532.0967062595
    }
  ],
  total: {
    apres: 68522728113.03286,
    avant: 73000000000.0,
    plf: 68522728113.03286
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
