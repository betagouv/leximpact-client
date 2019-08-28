import { transformDataToCarteImpact } from "../transform-data-to-carte-impact";

const DEFAULT_DATA_FROM_API = [
  [
    // ------------------------------------------------
    // Cas 1
    // ------------------------------------------------
    {
      nombre_declarants: 1,
      nombre_declarants_retraites: 0,
      nombre_personnes_a_charge: 0,
      outre_mer: 0,
      revenu: 15600,
    },
    {
      lieuResidence: 0,
      name: "Foyer fiscal type",
      nbCouple: 1,
      nbEnfants: 0,
      persons: {
        childs: [],
        parents: [
          {
            ancienCombattant: 0,
            chargePartagee: 0,
            gender: expect.any(Number),
            invalide: 0,
            isChild: 0,
            parentIsole: 0,
            plus65ans: 0,
            veufVeuve: 0,
          },
        ],
      },
      revenusNetMensuel: 15600 / 12,
    },
  ],
  // ------------------------------------------------
  // Cas 2
  // ------------------------------------------------
  [
    {
      nombre_declarants: 1,
      nombre_declarants_retraites: 0,
      nombre_personnes_a_charge: 1,
      outre_mer: 0,
      revenu: 31200,
    },
    {
      lieuResidence: 0,
      name: "Foyer fiscal type",
      nbCouple: 1,
      nbEnfants: 1,
      persons: {
        childs: [
          {
            ancienCombattant: 0,
            chargePartagee: 0,
            gender: 0,
            invalide: 0,
            isChild: 1,
            parentIsole: 0,
            plus65ans: 0,
            veufVeuve: 0,
          },
        ],
        parents: [
          {
            ancienCombattant: 0,
            chargePartagee: 0,
            gender: expect.any(Number),
            invalide: 0,
            isChild: 0,
            parentIsole: 0,
            plus65ans: 0,
            veufVeuve: 0,
          },
        ],
      },
      revenusNetMensuel: 31200 / 12,
    },
  ],
  // ------------------------------------------------
  // Cas 3
  // ------------------------------------------------
  [
    {
      nombre_declarants: 2,
      nombre_declarants_retraites: 0,
      nombre_personnes_a_charge: 0,
      outre_mer: 0,
      revenu: 38400,
    },
    {
      lieuResidence: 0,
      name: "Foyer fiscal type",
      nbCouple: 2,
      nbEnfants: 0,
      persons: {
        childs: [],
        parents: [
          {
            ancienCombattant: 0,
            chargePartagee: 0,
            gender: expect.any(Number),
            invalide: 0,
            isChild: 0,
            parentIsole: 0,
            plus65ans: 0,
            veufVeuve: 0,
          },
          {
            ancienCombattant: 0,
            chargePartagee: 0,
            gender: expect.any(Number),
            invalide: 0,
            isChild: 0,
            parentIsole: 0,
            plus65ans: 0,
            veufVeuve: 0,
          },
        ],
      },
      revenusNetMensuel: 38400 / 12,
    },
  ],
  // ------------------------------------------------
  // Cas 4
  // ------------------------------------------------
  [
    {
      nombre_declarants: 2,
      nombre_declarants_retraites: 2,
      nombre_personnes_a_charge: 0,
      outre_mer: 0,
      revenu: 15600,
    },
    {
      lieuResidence: 0,
      name: "Foyer fiscal type",
      nbCouple: 2,
      nbEnfants: 0,
      persons: {
        childs: [],
        parents: [
          {
            ancienCombattant: 0,
            chargePartagee: 0,
            gender: expect.any(Number),
            invalide: 0,
            isChild: 0,
            parentIsole: 0,
            plus65ans: 1,
            veufVeuve: 0,
          },
          {
            ancienCombattant: 0,
            chargePartagee: 0,
            gender: expect.any(Number),
            invalide: 0,
            isChild: 0,
            parentIsole: 0,
            plus65ans: 1,
            veufVeuve: 0,
          },
        ],
      },
      revenusNetMensuel: 15600 / 12,
    },
  ],
  // ------------------------------------------------
  // Cas 5
  // ------------------------------------------------
  [
    {
      nombre_declarants: 2,
      nombre_declarants_retraites: 0,
      nombre_personnes_a_charge: 2,
      outre_mer: 0,
      revenu: 55200,
    },
    {
      lieuResidence: 0,
      name: "Foyer fiscal type",
      nbCouple: 2,
      nbEnfants: 2,
      persons: {
        childs: [
          {
            ancienCombattant: 0,
            chargePartagee: 0,
            gender: 0,
            invalide: 0,
            isChild: 1,
            parentIsole: 0,
            plus65ans: 0,
            veufVeuve: 0,
          },
          {
            ancienCombattant: 0,
            chargePartagee: 0,
            gender: 0,
            invalide: 0,
            isChild: 1,
            parentIsole: 0,
            plus65ans: 0,
            veufVeuve: 0,
          },
        ],
        parents: [
          {
            ancienCombattant: 0,
            chargePartagee: 0,
            gender: expect.any(Number),
            invalide: 0,
            isChild: 0,
            parentIsole: 0,
            plus65ans: 0,
            veufVeuve: 0,
          },
          {
            ancienCombattant: 0,
            chargePartagee: 0,
            gender: expect.any(Number),
            invalide: 0,
            isChild: 0,
            parentIsole: 0,
            plus65ans: 0,
            veufVeuve: 0,
          },
        ],
      },
      revenusNetMensuel: 55200 / 12,
    },
  ],
  // ------------------------------------------------
  // Cas 6
  // ------------------------------------------------
  [
    {
      nombre_declarants: 2,
      nombre_declarants_retraites: 0,
      nombre_personnes_a_charge: 2,
      outre_mer: 1,
      revenu: 55200,
    },
    {
      lieuResidence: 1,
      name: "Foyer fiscal type",
      nbCouple: 2,
      nbEnfants: 2,
      persons: {
        childs: [
          {
            ancienCombattant: 0,
            chargePartagee: 0,
            gender: 0,
            invalide: 0,
            isChild: 1,
            parentIsole: 0,
            plus65ans: 0,
            veufVeuve: 0,
          },

          {
            ancienCombattant: 0,
            chargePartagee: 0,
            gender: 0,
            invalide: 0,
            isChild: 1,
            parentIsole: 0,
            plus65ans: 0,
            veufVeuve: 0,
          },
        ],
        parents: [
          {
            ancienCombattant: 0,
            chargePartagee: 0,
            gender: expect.any(Number),
            invalide: 0,
            isChild: 0,
            parentIsole: 0,
            plus65ans: 0,
            veufVeuve: 0,
          },
          {
            ancienCombattant: 0,
            chargePartagee: 0,
            gender: expect.any(Number),
            invalide: 0,
            isChild: 0,
            parentIsole: 0,
            plus65ans: 0,
            veufVeuve: 0,
          },
        ],
      },
      revenusNetMensuel: 55200 / 12,
    },
  ],
  // ------------------------------------------------
  // Cas 7
  // ------------------------------------------------
  [
    {
      nb_decl_parent_isole: 1,
      nb_pac_charge_partagee: 1,
      nb_pac_invalides: 1,
      nombre_declarants: 2,
      nombre_declarants_retraites: 0,
      nombre_personnes_a_charge: 2,
      outre_mer: 2,
      revenu: 55200,
    },
    {
      lieuResidence: 2,
      name: "Foyer fiscal type",
      nbCouple: 2,
      nbEnfants: 2,
      persons: {
        childs: [
          {
            ancienCombattant: 0,
            chargePartagee: 1,
            gender: 0,
            invalide: 1,
            isChild: 1,
            parentIsole: 0,
            plus65ans: 0,
            veufVeuve: 0,
          },

          {
            ancienCombattant: 0,
            chargePartagee: 0,
            gender: 0,
            invalide: 0,
            isChild: 1,
            parentIsole: 0,
            plus65ans: 0,
            veufVeuve: 0,
          },
        ],
        parents: [
          {
            ancienCombattant: 0,
            chargePartagee: 0,
            gender: expect.any(Number),
            invalide: 0,
            isChild: 0,
            parentIsole: 1,
            plus65ans: 0,
            veufVeuve: 0,
          },
          {
            ancienCombattant: 0,
            chargePartagee: 0,
            gender: expect.any(Number),
            invalide: 0,
            isChild: 0,
            parentIsole: 0,
            plus65ans: 0,
            veufVeuve: 0,
          },
        ],
      },
      revenusNetMensuel: 55200 / 12,
    },
  ],
];

describe("components | utils | tranform-data-to-carte-impact", () => {
  it("doit correspondre a la structure", () => {
    const datas = DEFAULT_DATA_FROM_API.reduce((acc, [raw, expect]) => {
      const api = [...(acc.api || []), raw];
      const expected = [...(acc.expected || []), expect];
      return { api, expected };
    }, {});

    const result = transformDataToCarteImpact(datas.api);
    expect(result).toStrictEqual(datas.expected);
  });
});
