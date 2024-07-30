function romanToInt(s) {
  const romanMap = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let total = 0;
  for (let i = 0; i < s.length; i++) {
    let currentVal = romanMap[s[i]];
    let nextVal = romanMap[s[i + 1]];
    console.log(currentVal);
    console.log(nextVal);
    if (nextVal > currentVal) {
      total -= currentVal;
    } else {
      total += currentVal;
    }
  }
  return;
}

console.log(romanToInt("III"));
