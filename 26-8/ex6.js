n = 7;
ar = [1, 2, 1, 1, 1, 2, 1, 3, 2];
function sockMerchant(n, ar) {
  let pairs = 0;
  p = ar.sort((a, b) => a - b);
  lo = [];
  for (i = 0; i < ar.length; i++) {
    if (p[i] === p[i + 1]) {
      lo.push(p[i]);
      pairs++;
      i++;
    }
  }
  return pairs;
}
console.log(sockMerchant(n, ar));
