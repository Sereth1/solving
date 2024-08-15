const example = [30, 25, 35, 40, 38, 20, 42];

function trackTemperatureRecords(temperatures: number[]): number[] {
    let highestTemp = temperatures[0]
    let lowestTemp = temperatures[0]
    let highest: number = 0
    let lowest: number = 0

    for (let i = 1; i < temperatures.length; i++) {

        if (temperatures[i] > highestTemp) {
            highestTemp = temperatures[i];
            highest++;
        } else if (temperatures[i] < lowestTemp) {
            lowestTemp = temperatures[i];
            lowest++;

        }

    }
    return [highest, lowest]

}

console.log(trackTemperatureRecords(example));

