/*
  nombre_declarants: 1 , // par adulte
  nombre_personnes_a_charge: 1, // par enfant
  nombre_declarants_retraites: 1, // par case +65 ans cochée
  outre_mer: 0, // (métropole),  1 (outre-mer 1) ou 2 (outremer 2)
  revenu: 15600, //revenu par mois multiplié par 12
  // ------------------------
  nb_decl_parent_isole  :  1 ,// si case "parent isolé/seul" cochée, 0 sinon
  nb_decl_veuf : 1 ,// si veuf est cochée, 0 sinon
  nb_decl_invalides : 1 ,// par case "invalide" cochée sous les adultes
  nb_pac_invalides : 1 ,// par case "invalide" cochée sous les enfants
  nb_anciens_combattants : 1,// nombre de cases "ancien combattant" cochées
  nb_pac_charge_partagee : 1,// nombre de cases "charge partagée" cochées
*/
import { get } from "lodash";

const DEFAULT_NAME = "Foyer fiscal type";

// export uniquement pour les tests
export const generateRandomGender = () => Number(Math.random() < 0.49);

const createPersons = (length, data, defaultValues, quantities) => {
  const cloneQuantities = { ...quantities };
  const childs = Array.from({ length })
    .map(() => defaultValues)
    .map((obj) => {
      const nextObj = { ...obj };
      Object.keys(cloneQuantities).forEach((key) => {
        const count = cloneQuantities[key];
        const hasMoreQuantity = count >= 1;
        if (hasMoreQuantity) {
          nextObj[key] = 1;
          cloneQuantities[key] -= 1;
        }
      });
      return nextObj;
    });
  return childs;
};

export const transformDataToCarteImpact = datas => datas.map((data) => {
  const name = DEFAULT_NAME;
  const revenusAnnuel = get(data, "revenu");
  const lieuResidence = get(data, "outre_mer");
  const nbCouple = get(data, "nombre_declarants");
  const nbEnfants = get(data, "nombre_personnes_a_charge");

  const childs = createPersons(
    nbEnfants,
    data,
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
      chargePartagee: get(data, "nb_pac_charge_partagee") || 0,
      invalide: get(data, "nb_pac_invalides") || 0,
    },
  );

  const parents = createPersons(
    nbCouple,
    data,
    {
      ancienCombattant: 0,
      chargePartagee: 0,
      gender: generateRandomGender(),
      invalide: 0,
      isChild: 0,
      parentIsole: 0,
      plus65ans: 0,
      veufVeuve: 0,
    },
    {
      ancienCombattant: get(data, "nb_anciens_combattants") || 0,
      invalide: get(data, "nb_decl_invalides") || 0,
      parentIsole: get(data, "nb_decl_parent_isole") || 0,
      plus65ans: get(data, "nombre_declarants_retraites") || 0,
      veufVeuve: get(data, "nb_decl_veuf") || 0,
    },
  );

  return {
    lieuResidence,
    name,
    nbCouple,
    nbEnfants,
    persons: { childs, parents },
    revenusNetMensuel: revenusAnnuel / 12,
  };
});

export default transformDataToCarteImpact;
