const k = 1
const height = [1, 2, 3, 4]
function hurdleRace(k: number, height: number[]): number {
    const maxHurdle = Math.max(...height)

    if (maxHurdle > k) {
        return maxHurdle - k
    } else {
        return 0
    }


}
console.log(hurdleRace(k, height));

