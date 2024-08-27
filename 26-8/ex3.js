function twoArrays(k, A, B) {
  A.sort((a, b) => a - b);
  B.sort((a, b) => b - a);

  for (let i = 0; i < A.length; i++) {
    console.log(A[i] + B[i]);

    if (A[i] + B[i] < k) {
      return "NO";
    }
  }

  return "YES";
}
