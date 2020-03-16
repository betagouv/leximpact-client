const formatMilliers = (nombre) => {
  // eslint-disable-next-line prefer-template
  let resultat = nombre + "";
  const sep = " ";
  const reg = /(\d+)(\d{3})/;
  while (reg.test(nombre)) {
    resultat = nombre.replace(reg, `$1${sep}$2`);
  }
  return resultat;
};

export default formatMilliers;
