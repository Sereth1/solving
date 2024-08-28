function nthUglyNumber(n: number): number {
    const uglyNumbers = new Array(n)

    let i2 = 0, i3 = 0, i5 = 0
    let nextMultiply2 = 2;
    let nextMultiply3 = 3;
    let nextMultiply5 = 5;

    for (let i = 1; i < n; i++) {
        const nextUgly = Math.min(nextMultiply2, nextMultiply3, nextMultiply5);
        uglyNumbers[i] = nextUgly;
        if (nextUgly === nextMultiply2) {
            i2++
            nextMultiply2 = uglyNumbers[i2] * 2
        }
        if (nextUgly === nextMultiply3) {
            i3++
            nextMultiply3 = uglyNumbers[i3] * 3
        }
        if (nextUgly === nextMultiply5) {
            i5++
            nextMultiply5 = uglyNumbers[i5] * 5


        }

    }
    if (n === 1) return 1

    return uglyNumbers.pop()
}


console.log(nthUglyNumber(10));
