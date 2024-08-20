function recursiveFib(n: number): number {
    return n <= 1 ? n : recursiveFib(n - 1) + recursiveFib(n - 2);
}
console.log(recursiveFib(10));



