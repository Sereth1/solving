const replaceFirstDigit = (str) => str.replace(/[0-9]/, "$");

const objA = { a: 1, b: 2, c: 3 };
const objB = { a: 1, b: 2, c: 3 };

const arr = ["a", "b", "c"];

arr.forEach((ar) => {
  console.log(objA[ar] === objB[ar]);
});

const keys = (a, b) => {
  Object.keys(a).every((key) => b[key]);
};
