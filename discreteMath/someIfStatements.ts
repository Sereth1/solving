function skilled(arr: string): string {
    let conclusion: string = ''
    if (arr.includes('won' || 'win' || 'profit') || arr.includes('Won' || "won money")) {
        conclusion = 'I just got lucky'

    } else if (arr.includes('years' && 'experience' || 'training' || 'lot of work' || 'mastering')) { conclusion = 'I am good at poker' }
    else { conclusion = 'I have no clue how to play' }
    return conclusion;

}
console.log(skilled('I played poker and I won a lot of money'))
console.log(skilled('I have years of experience '))

function try2(arr1: string): string {
    let conclusion: string = '';

    if (arr1.toLocaleLowerCase().includes('skilled' || 'good' || 'best ')) {
        conclusion = 'Then I will win'
    }



    return conclusion
}


function countWords(str: string): number {
    let wordsToFind: string[] = ["fb"
        , "fuk",
        "lol",
        "sup",
        "donk",
        "doa",
        "daa",]

    let count: number = 0
    for (let i = 0; i < 100; i++) {
        if (str.includes(wordsToFind[i])) {

            count++
        }
    }
    return count
}
console.log(try2('I AM SKILLED AT PLAYING POKER'))
console.log(countWords('fuk sup lol donk doa'));

function factor(num: number) {
    let factors: number[] = []
    for (let i = 0; i <= num; i++) {
        if (num % i === 0)

            factors.push(i)
    }

    return factors
}


console.log(factor(9));


function isEven(x: number) {
    return x % 2 === 0;
}

function hasNick(x: string) {
    return x === 'nick'
}

const arp = ['', 'malakas', 'poustis']

const itHasNick = arp.some(hasNick)

if (itHasNick) {
    console.log('the arr has nick');

} else {
    console.log('the array doent have nick');
}

const numbers = [1, 3, 5, 7, 8];

const existsEvenNumber = numbers.some(isEven);
console.log(numbers.some(isEven));

if (existsEvenNumber) {
    console.log("There exists at least one even number in the array.");
} else {
    console.log("No even numbers found in the array.");
}

function fig(n: number): number[] {

    const ar: number[] = [0, 1]
    for (let i = 2; i < n; i++) {
        ar[i] = ar[i - 1] + ar[i - 2]


    }


    return ar
}
console.log(fig(10));


function negateCondition() {
    const randomNumbers = Array(100).fill(0);
    const filled = randomNumbers.map(() => Math.floor(Math.random() * 10) + 1);

    let existsSmallerOrEqualTo3 = false;
    for (let i = 0; i < filled.length; i++) {
        if (filled[i] <= 3) {
            console.log(`Found a number <= 3: ${filled[i]}`);
            existsSmallerOrEqualTo3 = true;
            break;
        }
    }

    if (!existsSmallerOrEqualTo3) {
        console.log("All numbers are greater than 3.");
    } else {
        console.log("There exists at least one number less than or equal to 3.");
    }
}

negateCondition();

function skipSimilarNumber() {
    const nums = [1, 2, 2, 3, 3, 4, 4, 5, 5, 5, 5, 5, 5, 5, 5, 5, 6, 6, 7].sort();
    let count = 0;

    for (let i = 0; i < nums.length; i++) {

        while (nums[i] === nums[i + 1]) {
            i++;
        }
        count++;
    }

    console.log(count);
}

skipSimilarNumber();

function numberWhile() {
    const randomNumbers = Array(4).fill(0).map(() => Math.floor(Math.random() * 4) + 1).sort((a, b) => a - b)
    let count = 0
    let result = ''
    for (let i = 0; i < randomNumbers.length; i++) {
        if (randomNumbers[i] <= 3) {

            result = 'all the numbers are bellow 3 so the function is correctly putted'
        } else { result = 'there are numbers that are higher than the 3' }
    }
    console.log(count);
    return console.log(result);

}

numberWhile()

let randomNums = Array(100).fill(0).map(el => Math.floor(Math.random() * 10))


function seeThePowers(num: number[], times: number) {
    let res: number[] = []
    let countZerosOnes = 0
    for (let i = 0; i < randomNums.length; i++) {
        let nums = Math.pow(num[i], times)
        res.push(nums)
        if (res[i] <= 1) {
            countZerosOnes++

        }

    }
    console.log(res);
    console.log(`we counted zeros and ones ${countZerosOnes}`);




}

seeThePowers(randomNums, 5)

