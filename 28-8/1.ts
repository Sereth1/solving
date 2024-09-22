

let num: number[] = [1, 3, 4, 5, 6, 7]
function a(arr: number[]): number[][] {

    let tempArr: number[] = []
    let sum: number[][] = []


    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            let temp = arr[i] + arr[j]
            tempArr.push(temp)
            if (tempArr.length === num.length) {

                sum.push(tempArr)
                tempArr = []
            }

        }

    }
    let n = sum.map(el => el.reduce((a, b) => a + b))
    console.log(n);

    return sum
}
console.log(a(num))


