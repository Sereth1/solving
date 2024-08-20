const arr = [1, 2, 3, 5, 6, 7,]


function test(arr: number[]): { maxNumber: number, minNumber: number } {
    let min = arr[0]
    let max = arr[0]
    let count = 1
    for (let i = 0; i < arr.length; i++) {
        if (min > arr[i]) {
            min = arr[i]
        } else if (max < arr[i]) {
            max = arr[i]
            count++
        }



    }

    console.log(count);

    return { maxNumber: max, minNumber: min }


}

console.log(test(arr));
