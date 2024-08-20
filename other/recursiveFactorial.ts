function sfactorial(n: number): number {

    if (n === 0) {
        return 1
    }
    return n * sfactorial(n - 1)



}

console.log(sfactorial(5));

