function prime(n: number) {
    if (n <= 1) return 'not prime'
    if (n === 2) return prime


    for (let i = 1; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            console.log(n);

            return 'not prime'
        }
        else return 'prime'

    }


}
console.log(prime(6));


