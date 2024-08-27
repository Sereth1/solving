const se = [2, 2, 1, 3, 2];
const de = 4; // Target sum
const me = 4; // Segment length

function cutChocolate(s, d, m) {
  let res = [];

  for (let i = 0; i <= s.length - m; i++) {
    let sum = 0;
    for (let j = 0; j < m; j++) {
      console.log((sum += s[i + j]));
      console.log(sum);
    }

    if (sum === d) {
      res.push(sum);
    }
  }

  return res.length;
}

cutChocolate(se, de, me);
