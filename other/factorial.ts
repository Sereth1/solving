function factorial(n: number) {
    let result = 1

    for (let index = 1; index <= n; index++) {
        result = result * index
    }
    return result

}
console.log(factorial(5));

/*
Explanation 

The for loop is going to start from 1

                  and
The loop is going to do calculations from 1 until the index is the same number as the
n
so every time the loop until the index reach the number n 

it's going to multiply the result with the result and the index 

Example if we have n = 5

1. result = 1 * 1 = 1
2. result = 1 * 2 = 2
3. result = 2 * 3 = 6
4. result = 6 * 4 = 24
5. result = 24 * 5 = 120


*/




