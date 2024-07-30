function checkSum(a, b) {
  return a === 100 || b === 100 || a + b === 100;
}

console.log(checkSum(10, 111));

function createString(str) {
  let newStr = str.slice(0, 3) + str.slice(-3);

  newStr < newStr.length === 3 ? console.log(str) : console.log(newStr);
}

createString("mas");

function halfStringIfEven(str) {
  if (str.length % 2 === 0) {
    return str.slice(0, str.length / 2);
  } else {
    return "The string length is not even.";
  }
}

console.log(halfStringIfEven("malakas"));
console.log(halfStringIfEven("evenword"));

function f(str) {
  str.length % 2 === 0
    ? console.log(str.slice(0, str.length / 2))
    : console.log("try an another word ");
}

f("evenw");
function yo(a, b) {
  a > 100 || b > 100
    ? console.log("invalid input choose a number less than 100 ")
    : a < b
    ? console.log(`a is closer to 100 by ${100 - a}`)
    : b < a
    ? console.log(`b is closer to 100 by ${100 - b}`)
    : console.log("Both numbers are equally close to 100");
}

yo(10, 20);
yo(110, 20);
yo(90, 90);
