const fillArrayWith = (length, iteratorFunc) => Array(length)
  .fill()
  .map((value, index) => (iteratorFunc && iteratorFunc(index)) || index);

export default fillArrayWith;
