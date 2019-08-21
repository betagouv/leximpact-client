const updateCasTypeRevenusAnnuel = (casTypeIndex, casTypeRevenusMensuel) => {
  const casTypeRevenusAnnuel = casTypeRevenusMensuel * 12;
  return {
    type: "onUpdateCasTypeRevenusAnnuel",
    casTypeIndex,
    casTypeRevenusAnnuel,
  };
};

export default updateCasTypeRevenusAnnuel;
