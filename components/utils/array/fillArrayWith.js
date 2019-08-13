/* eslint
    indent: [2, 2],
    semi: [2, "always"]
    implicit-arrow-linebreak: [2, "below"]
*/
const fillArrayWith = (length, iteratorFunc) =>
  Array(length)
    .fill()
    .map((value, index) =>
      (iteratorFunc && iteratorFunc(index)) || index);

export default fillArrayWith;
