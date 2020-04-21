const formatMilliers = (nombre) => {
  let result = nombre;
  result += "";
  const sep = " ";
  const reg = /(\d+)(\d{3})/;
  while (reg.test(result)) {
    result = result.replace(reg, `$1${sep}$2`);
  }
  return result;
};

export default formatMilliers;
