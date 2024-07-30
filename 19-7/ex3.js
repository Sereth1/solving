let arr1 = [13, 64, 15, 17, 88];
let arr2 = [23, 14, 53, 17, 80];

const getLargerNumbers = (a, b) => a.map((v, i) => Math.max(v, b[i]));

console.log(getLargerNumbers(arr1, arr2));
