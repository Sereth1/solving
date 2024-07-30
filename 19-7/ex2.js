//find the odd or the even

const findOutlier = (integers) =>
  integers.filter((val) => val % 2 !== 0).length === 1
    ? integers.find((val) => val % 2 !== 0)
    : integers.find((val) => val % 2 === 0);
