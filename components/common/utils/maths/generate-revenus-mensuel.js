const PALIER_MAP = [
  { max: 900, step: 100 },
  { max: 2000, step: 50 },
  { max: 3000, step: 100 },
  { max: 4000, step: 200 },
  { max: 10000, step: 500 },
  { max: 15000, step: 1000 },
  { max: 20000, step: 5000 },
  { max: 100000, step: 10000 },
  { max: 1000000, step: 100000 },
];
const STARTING_VALUE = 500;

function generateRevenusMensuel(startingValue = null) {
  const res = PALIER_MAP.reduce(
    (acc, { max, step }) => {
      const nextAcc = [];
      const maxWhileLimit = max - step;
      let nextWhileValue = acc[acc.length - 1];
      while (nextWhileValue <= maxWhileLimit) {
        nextWhileValue += step;
        nextAcc.push(nextWhileValue);
      }
      return [...acc, ...nextAcc];
    },
    [startingValue || STARTING_VALUE],
  );
  return res;
}

export default generateRevenusMensuel;
