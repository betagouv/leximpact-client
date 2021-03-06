import { transformCasTypesToData } from "../transform-cas-types-to-data";

const DEFAULT_DATA_FROM_CAS_TYPES = [
  [
    // ------------------------------------------------
    // Cas 1
    // ------------------------------------------------
    {
      nb_anciens_combattants: 0,
      nb_decl_invalides: 0,
      nb_decl_parent_isole: 0,
      nb_decl_veuf: 0,
      nb_pac_charge_partagee: 0,
      nb_pac_invalides: 0,
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
            gender: 0,
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
      nb_anciens_combattants: 0,
      nb_decl_invalides: 0,
      nb_decl_parent_isole: 0,
      nb_decl_veuf: 0,
      nb_pac_charge_partagee: 0,
      nb_pac_invalides: 0,
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
            gender: 0,
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
      nb_anciens_combattants: 0,
      nb_decl_invalides: 0,
      nb_decl_parent_isole: 0,
      nb_decl_veuf: 0,
      nb_pac_charge_partagee: 0,
      nb_pac_invalides: 0,
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
            gender: 0,
            invalide: 0,
            isChild: 0,
            parentIsole: 0,
            plus65ans: 0,
            veufVeuve: 0,
          },
          {
            ancienCombattant: 0,
            chargePartagee: 0,
            gender: 0,
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
      nb_anciens_combattants: 0,
      nb_decl_invalides: 0,
      nb_decl_parent_isole: 0,
      nb_decl_veuf: 0,
      nb_pac_charge_partagee: 0,
      nb_pac_invalides: 0,
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
            gender: 0,
            invalide: 0,
            isChild: 0,
            parentIsole: 0,
            plus65ans: 1,
            veufVeuve: 0,
          },
          {
            ancienCombattant: 0,
            chargePartagee: 0,
            gender: 0,
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
      nb_anciens_combattants: 0,
      nb_decl_invalides: 0,
      nb_decl_parent_isole: 0,
      nb_decl_veuf: 0,
      nb_pac_charge_partagee: 0,
      nb_pac_invalides: 0,
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
            gender: 0,
            invalide: 0,
            isChild: 0,
            parentIsole: 0,
            plus65ans: 0,
            veufVeuve: 0,
          },
          {
            ancienCombattant: 0,
            chargePartagee: 0,
            gender: 0,
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
      nb_anciens_combattants: 0,
      nb_decl_invalides: 0,
      nb_decl_parent_isole: 0,
      nb_decl_veuf: 0,
      nb_pac_charge_partagee: 0,
      nb_pac_invalides: 0,
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
            gender: 0,
            invalide: 0,
            isChild: 0,
            parentIsole: 0,
            plus65ans: 0,
            veufVeuve: 0,
          },
          {
            ancienCombattant: 0,
            chargePartagee: 0,
            gender: 0,
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
      nb_anciens_combattants: 0,
      nb_decl_invalides: 0,
      nb_decl_parent_isole: 1,
      nb_decl_veuf: 0,
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
            gender: 0,
            invalide: 0,
            isChild: 0,
            parentIsole: 1,
            plus65ans: 0,
            veufVeuve: 0,
          },
          {
            ancienCombattant: 0,
            chargePartagee: 0,
            gender: 0,
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

describe("components | utils | tranform-cas-type-to-data", () => {
  it("doit correspondre a la structure", () => {
    const datas = DEFAULT_DATA_FROM_CAS_TYPES.reduce((acc, [raw, ct]) => {
      const api = [...(acc.api || []), raw];
      const casTypes = [...(acc.casTypes || []), ct];
      return { api, casTypes };
    }, {});
    const result = transformCasTypesToData(datas.casTypes);
    expect(result).toStrictEqual(datas.api);
  });
});
