function maxSubArraySum(arr) {
    let maxSoFar = -Infinity;
    let maxEndingHere = 0;

    for (let i = 0; i < arr.length; i++) {
        maxEndingHere += arr[i];

        // Use Math.max to find the maximum 
        // of maxSoFar and maxEndingHere
        maxSoFar = Math.max(maxSoFar, maxEndingHere);

        // Use Math.max to reset maxEndingHere
        // to 0 if it becomes negative
        maxEndingHere = Math.max(maxEndingHere, 0);
    }

    return maxSoFar;
}

// Driver code
const arrays: number[] = [-2, -3, 4, -1, -2, 1, 5, -3];
console.log("Maximum contiguous sum is " +
    maxSubArraySum(arrays));