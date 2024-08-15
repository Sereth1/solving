function breakingRecords(scores: number[]): number[] {
    let highest = scores[0];
    let lowest = scores[0];
    let highBreaks = 0;
    let lowestBreaks = 0;

    for (let i = 1; i < scores.length; i++) {
        if (scores[i] > highest) {
            highest = scores[i];
            highBreaks++;
        } else if (scores[i] < lowest) {
            lowest = scores[i];
            lowestBreaks++;
        }
    }
    return [highBreaks, lowestBreaks];
}

const scores1 = [10, 5, 20, 20, 4, 5, 2, 25, 1];
console.log(breakingRecords(scores1));


