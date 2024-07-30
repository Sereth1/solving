function diagonalDifference(arr) {
  if (arr.length < 3) {
    let firstDiag = arr.map((el, i) => el[i]).reduce((a, b) => a + b);
    let secondDiag = arr
      .map((el, i) => el[arr.length - 1 - i])
      .reduce((a, b) => a + b);

    return Math.abs(firstDiag - secondDiag);
  } else {
    let primaryDiagonalSum = matrix
      .map((row, i) => row[i])
      .reduce((a, b) => a + b, 0);
    let secondaryDiagonalSum = matrix
      .map((row, i) => row[matrix.length - 1 - i])
      .reduce((a, b) => a + b, 0);

    return Math.abs(primaryDiagonalSum - secondaryDiagonalSum);
  }
}
