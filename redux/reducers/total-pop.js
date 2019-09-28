import { get } from "lodash";

const DEFAULT_STATE = {
    deciles: [
      {
        poids: 3790318.404267467,
        avant: 0.0,
        plf: 0.0,
        apres: 0.0
    },
    {
        poids: 3789118.836624674,
        avant: 0.0,
        plf: 0.0,
        apres: 0.0
    },
    {
        poids: 3787611.404160033,
        avant: 0.0,
        plf: 0.0,
        apres: 0.0
    },
    {
        poids: 3789131.9413505066,
        avant: 130529223.28736839,
        plf: 90259844.3994426,
        apres: 90259844.3994426
    },
    {
        poids: 3789129.8620169386,
        avant: 915878481.1840031,
        plf: 715076167.475686,
        apres: 715076167.475686
    },
    {
        poids: 3788211.74545642,
        avant: 1936007011.413307,
        plf: 1319089582.546457,
        apres: 1319089582.546457
    },
    {
        poids: 3789998.7926673517,
        avant: 2581476315.1936817,
        plf: 2142000506.9459217,
        apres: 2142000506.9459217
    },
    {
        poids: 3788155.8052604534,
        avant: 4995858508.366554,
        plf: 4399563634.591989,
        apres: 4399563634.591989
    },
    {
        poids: 3788976.9748057947,
        avant: 10870614271.16802,
        plf: 9304623539.17901,
        apres: 9304623539.17901
    },
    {
        poids: 3788527.2333903834,
        avant: 51569636189.38726,
        plf: 50021283237.5902,
        apres: 50021283200.82546
    }
    ],
  total: {
    avant: 73000000000.0,
    plf: 67991896512.728615,
    apres: 67991896475.9639
  },
  frontieres_deciles: [
      3281.0,
      9158.46875,
      12705.041015625,
      16302.861328125,
      19609.0,
      24169.1484375,
      29796.68359375,
      37248.7109375,
      51702.984375,
      4792564.0
  ]
};


const totalPop = (state = DEFAULT_STATE, action) => {
  console.log("total-pop")
  console.log(action)
  switch (action.type) {
  case "onSimPopFetchResult":
    return {
      deciles: get(action, "data.deciles"),
      frontieres_deciles: get(action, "data.frontieres_deciles"),
      total: get(action, "data.total"),
    };
  default:
    return state;
  }
};

export default totalPop;
