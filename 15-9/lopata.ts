let random = 100
let pos = 1
let arPosEven: number[] = []
let arPosOdd: number[] = []
let scoreOdd: number = 0
let scoreEven: number = 0
let maxNumber: number[] = []

function Strange() {

    for (let i = 0; i < random; i++) {
        let newPos;
        newPos = Math.floor((Math.random() * 6) + pos)
        pos = newPos
        if (newPos > 10 && newPos % 2 === 0) { arPosEven.push(newPos) } else arPosOdd.push(newPos)

    }
    if (arPosEven.length === arPosOdd.length) return;
    if (arPosEven.length > arPosOdd.length) return scoreEven += 1;
    if (arPosEven.length < arPosOdd.length) return scoreOdd += 1;

}




for (let i = 0; i < 10; i++) {
    Strange()

}


console.log(maxNumber);


function fib(num: number): number[] {
    let arr: number[] = [0, 1]

    for (let i = 2; i < num; i++) {
        arr[i] = arr[i - 1] + arr[i - 2]


    }
    return arr

}

console.log(fib(10));


function fibFacto(num: number): number {
    if (num < 2) {
        return num
    }

    return fibFacto(num - 1) + fibFacto(num - 2)



}
console.log(fibFacto(10))
