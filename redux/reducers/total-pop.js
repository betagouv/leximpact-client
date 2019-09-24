import { get } from "lodash";

const DEFAULT_STATE = {
    deciles: [
    {
        poids: 3790318.404267467,
        avant: 0.0,
        apres: 0.0,
        plf: 0.0
    },
    {
        poids: 3789118.836624674,
        avant: 0.0,
        apres: 0.0,
        plf: 0.0
    },
    {
        poids: 3787611.404160033,
        avant: 0.0,
        apres: 0.0,
        plf: 0.0
    },
    {
        poids: 3789131.9413505066,
        avant: 130529223.28736839,
        apres: 112177659.09092839,
        plf: 112177659.09092839
    },
    {
        poids: 3789129.8620169386,
        avant: 915878481.1840031,
        apres: 744591358.4863179,
        plf: 744591358.4863179
    },
    {
        poids: 3788211.74545642,
        avant: 1936007011.413307,
        apres: 1340983575.0660133,
        plf: 1340983575.0660133
    },
    {
        poids: 3789998.7926673517,
        avant: 2581476315.1936817,
        apres: 2192715420.595252,
        plf: 2192715420.595252
    },
    {
        poids: 3788155.8052604534,
        avant: 4995858508.366554,
        apres: 4485662914.55573,
        plf: 4485662914.55573
    },
    {
        poids: 3788976.9748057947,
        avant: 10870614271.16802,
        apres: 9378724791.99699,
        plf: 9378724791.99699
    },
    {
        poids: 3788527.2333903834,
        avant: 51569636189.38726,
        apres: 50016857400.11626,
        plf: 50016857436.60406
    }
    ],
  total: {
    avant: 73000000000.0,
    plf: 68271713156.395226,
    apres: 68271713119.90739
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
