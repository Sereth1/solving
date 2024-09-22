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


// Predicate function to check if a number is even
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
