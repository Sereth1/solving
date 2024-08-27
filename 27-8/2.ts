const arrow = [1, 1, 2, 1, 2, 1, 3, 2]
const no = 8
function sockMerchant(n: number, ar: number[]): number {
    ar.sort((a, b) => a - b)
    let countPairs = 0
    if (ar.length !== n) { return 0 }

    for (let i = 0; i < ar.length; i++) {
        if (ar[i] === ar[i - 1]) {
            countPairs++
            i++
        }


    }
    return countPairs


}

console.log(sockMerchant(no, arrow));
