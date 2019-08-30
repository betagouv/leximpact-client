export const transformCasTypesToData = casTypes => casTypes.map((obj) => {
  const {
    lieuResidence,
    nbCouple,
    nbEnfants,
    persons,
    revenusNetMensuel,
  } = obj;
  const nombreDeclarants = nbCouple;
  const nombrePersonnesACharge = nbEnfants;
  const revenu = revenusNetMensuel * 12;
  const isoles = persons.parents.filter(p => Boolean(p.parentIsole));
  const retraites = persons.parents.filter(p => Boolean(p.plus65ans));
  const declinvalide = persons.parents.filter(p => Boolean(p.invalide));
  const acharges = persons.childs.filter(p => Boolean(p.chargePartagee));
  const pacinvalides = persons.childs.filter(p => Boolean(p.invalide));
  const veufs = persons.parents.filter(p => Boolean(p.veufVeuve));
  const combattants = persons.parents.filter(p => Boolean(p.ancienCombattant));
  return {
    nb_anciens_combattants: combattants.length,
    nb_decl_invalides: declinvalide.length,
    nb_decl_parent_isole: isoles.length,
    nb_decl_veuf: veufs.length,
    nb_pac_charge_partagee: acharges.length,
    nb_pac_invalides: pacinvalides.length,
    nombre_declarants: nombreDeclarants,
    nombre_declarants_retraites: retraites.length,
    nombre_personnes_a_charge: nombrePersonnesACharge,
    outre_mer: lieuResidence,
    revenu,
  };
});

export default transformCasTypesToData;
