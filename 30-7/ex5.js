function findDigits(n) {
  const digits = n.toString().split("");
  let count = 0;
  for (let i = 0; i < digits.length; i++) {
    const digit = parseInt(digits[i]);

    if (digit !== 0 && n % digit === 0) {
      count++;
    }
  }

  return count;
}
