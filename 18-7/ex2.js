const arr = [1, 2, 2, 3, 3, 3, 4, 3, 3, 3, 2, 2, 1];

function findOddOccurrence(arr) {
  let result = 0;
  for (let number of arr) {
    result ^= number;
  }
  return result;
}

console.log(findOddOccurrence(arr));
