
const arr = [-5, 2, 10, 4, 6]
function linearSearch(arr: number[], t: number): number {

    for (let i = 0; i < arr.length; i++)
        if (arr[i] === t) {
            return i
        }

    return -1
}


console.log(linearSearch(arr, 6));


