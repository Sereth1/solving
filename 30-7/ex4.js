const arr = [1, 2, 3, 4, 5];

function miniMaxSum(arr) {
  const totalSum = arr.reduce((a, b) => a + b);
  const maxElement = Math.max(...arr);
  const minElement = Math.min(...arr);

  const minSum = totalSum - maxElement;
  const maxSum = totalSum - minElement;

  console.log(minSum + " " + maxSum);
}

miniMaxSum(arr);
