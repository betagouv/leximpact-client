const tranformCarteImpactToData = (casType) => {
  const { persons, revenusNetMensuel } = casType;
  const nombreDeclarants = persons.parents.length;
  const nombrePersonnesACharge = persons.childs.length;
  const revenu = revenusNetMensuel * 12;
  return {
    nombre_declarants: nombreDeclarants,
    nombre_declarants_retraites: 0,
    nombre_personnes_a_charge: nombrePersonnesACharge,
    outre_mer: 0,
    revenu,
  };
};

export default tranformCarteImpactToData;
