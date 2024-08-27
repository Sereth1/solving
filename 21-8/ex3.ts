function miniMaxSum(arr: number[]): void {
    arr.sort((a, b) => a - b);

    let minSum: number = arr.slice(0, 4).reduce((a, b) => a + b, 0);
    let maxSum: number = arr.slice(1).reduce((a, b) => a + b, 0);

    console.log(minSum, maxSum);
}

let array: number[] = [1, 4, 5, 6, 10];
miniMaxSum(array);
