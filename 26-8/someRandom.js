function ab() {
  const ar = [1, 2, 4, 5, 6, 1, 2, 3, 4, 5, 6];
  let count = 0;
  console.log(ar.sort((a, b) => a - b));

  let p = ar
    .sort((a, b) => a - b)
    .map((el, i) => {
      ar[i] === ar[i - 1] && count++;
    });

  return count;
}

console.log(ab());
