function countingSort(arr: number[]): number[] {
    let count = new Array(100).fill(0);

    for (let i = 0; i < arr.length; i++) {

        console.log(
            count[arr[i]]++)
    }

    return count;
}

let a = [1, 10, 21, 3, 45, 1, 2, 1, 45, 2, 1, 3, 3];
console.log(countingSort(a));
