const updateCasTypeRevenusAnnuel = (casTypeIndex, casTypeRevenusMensuel) => {
  const casTypeRevenusAnnuel = casTypeRevenusMensuel * 12;
  return {
    casTypeIndex,
    casTypeRevenusAnnuel,
    type: "onUpdateCasTypeRevenusAnnuel",
  };
};

export default updateCasTypeRevenusAnnuel;
