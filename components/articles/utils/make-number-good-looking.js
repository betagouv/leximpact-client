const makeNumberGoodLooking = (initialNumber) => {
  // prend un nombre, et retourne l'arrondi
  // avec le moins de chiffres qui a moins de limdiff
  // de différence avec le nombre initial.
  let currfact = 1;
  let nbchiffres = 0;
  const limdiff = 0.00001;
  while (true) {
    const numnow = Math.round(initialNumber * currfact) / currfact;
    if (Math.abs(numnow - initialNumber) < limdiff || nbchiffres >= 5) {
      return initialNumber.toFixed(nbchiffres);
    }
    currfact *= 10;
    nbchiffres += 1;
  }
};

export default makeNumberGoodLooking;
