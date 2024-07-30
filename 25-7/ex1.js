function climbStairs(n) {
  if (n <= 2) {
    return n;
  }
  let a = 1;
  let b = 2;

  for (let i = 3; i <= n; i++) {
    let temp = a + b;
    a = b;
    b = temp;
  }
  return b;
}

console.log(climbStairs(4));
