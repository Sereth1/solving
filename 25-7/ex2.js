//palidrome number

function palidromeNum(x) {
  let p = x.toString().split("").reverse().join("");

  if (p == x) {
    return true;
  }
  return false;
}

console.log(palidromeNum(2));
