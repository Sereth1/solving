function staircase(n) {
  let result = "";
  for (let i = 1; i <= n; i++) {
    let spaces = " ".repeat(n - i);
    let hashes = "#".repeat(i);
    result += spaces + hashes + "\n";
  }
  return result;
}

// Example usage:
console.log(staircase(6));
