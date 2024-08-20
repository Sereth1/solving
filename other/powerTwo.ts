function powerTwo(n: number): boolean {
    if (n <= 0) return false;
    if (n === 1) return true;

    if (n % 2 !== 0) {
        return false;
    } else {
        return powerTwo(n / 2);
    }
}

console.log(powerTwo(4)); 