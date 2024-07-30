const birds = [1, 4, 4, 4, 5, 3];

function migratoryBirds(arr) {
  const count = arr.reduce((acc, num) => {
    acc[num] = (acc[num] || 0) + 1;
    return acc;
  }, {});
  const n = new Set(arr.filter((num) => count[num] !== 1));
  p = [...n];


  
  return p;
}
const birds2 = [1, 2, 3, 4, 5, 4, 3, 2, 1, 3, 4];
console.log(migratoryBirds(birds2)); // Output: 3

console.log(migratoryBirds(birds));
