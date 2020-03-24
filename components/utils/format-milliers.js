const formatMilliers = (nombre) => {
  nombre += "";
  const sep = " ";
  const reg = /(\d+)(\d{3})/;
  while (reg.test(nombre)) {
    nombre = nombre.replace(reg, `$1${sep}$2`);
  }
  return nombre;
};

export default formatMilliers;
