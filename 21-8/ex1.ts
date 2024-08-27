function pickingNumbers(arr: number[]): number {
    arr.sort((a, b) => a - b);

    let maxLength = 0;
    let start = 0;


    for (let end = 0; end < arr.length; end++) {

        while (arr[end] - arr[start] > 1) {
            start++;
        }


        maxLength = Math.max(maxLength, end - start + 1);
    }
    console.log(start);
    return maxLength;

}


pickingNumbers([4, 6, 5, 3, 3, 1])