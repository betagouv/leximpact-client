const updateReformeByName = (name, prevValue) => {
  let type = null;
  const value = prevValue === "" ? 0 : prevValue;

  const shouldUpdateSeuil = name.substring(0, 5) === "seuil";
  if (shouldUpdateSeuil) type = "onUpdateReformeBareme";

  const shouldUpdateDecote = name.substring(0, 6) === "decote";
  if (shouldUpdateDecote) type = "onUpdateReformeDecote";

  const shouldUpdateTaux = name.substring(0, 4) === "taux";
  if (shouldUpdateTaux) type = "onUpdateReformeTaux";

  const shouldUpdatePlafond = name.substring(0, 10) === "plafond_qf";
  if (shouldUpdatePlafond) type = "onUpdateReformePlafond";

  return { name, type, value };
};

export default updateReformeByName;
