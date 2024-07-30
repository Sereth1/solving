const arr = [1, 2, 3, 4, 44, , 55, 55, 88, 88, 200, 200];

const set = new Set();

for (const num of arr) {
  set.has(Math.max(num)) ? duplicates.push(num) : set.add(num);
}

console.log(Math.max(...duplicates));

const seen = [];
const duplicates = [];

for (let i = 0; i < arr.length; i++) {
  if (seen.includes(arr[i])) {
    if (!duplicates.includes(arr[i])) {
      duplicates.push(arr[i]);
    }
  } else {
    seen.push(arr[i]);
  }
}

console.log(duplicates);
