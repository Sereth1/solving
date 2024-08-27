const arr = [1, 4, 7, 2]
let k = 2
function maxMin(k: number, arr: number[]): number {

    let sorted = arr.sort((a, b) => a - b)
    let min = sorted.slice(0, k)
    let max = sorted.slice(-k)
    console.log(max);



    return k
}


maxMin(k, arr)