let arr = [-4, 3, -9, 0, 4, 1];

function fok(arr: number[]): void {
    let counts = [0, 0, 0];

    arr.map(num => {
        if (num > 0) {
            counts[0]++;
        } else if (num < 0) {
            counts[1]++;
        } else {
            counts[2]++;
        }
    });

    let total = arr.length;
    let ratios = counts.map(count => (count / total).toFixed(6));

    ratios.map(ratio => console.log(ratio));
}

fok(arr);
