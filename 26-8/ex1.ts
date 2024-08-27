const arr = [1, 1, 2, 3, 4, 6, 6, 3, 2, 1];

function lonelyintegear(a: number[]): number[] {
    return a.filter(num => a.indexOf(num) === a.lastIndexOf(num))
}


console.log(lonelyintegear(arr));
