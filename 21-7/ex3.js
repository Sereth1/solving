const b = 60;
const keyboards = [40, 50, 60];
const drives = [5, 8, 12];

function getMoneySpent(keyboards, drives, b) {
  let sum = [];

  for (let i = 0; i < keyboards.length; i++) {
    for (let j = 0; j < drives.length; j++) {
      let total = keyboards[i] + drives[j];
      if (total <= b) {
        sum.push(total);
      }
    }
    if (sum.length === 0) {
      return -1;
    }
  }
  return Math.max(...sum);
}

console.log(getMoneySpent(keyboards, drives, b));
