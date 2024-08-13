

function kangaroo(x1: number, v1: number, x2: number, v2: number): string {
    if (v1 === v2) {
        if (x1 === x2) {
            return "YES"
        } else {
            return "NO"
        }
    } else {
        if ((x2 - x1) % (v1 - v2) === 0 && (x2 - x1) / (v1 - v2) >= 0) {
            return "YES"
        } else {
            return "NO"
        }
    }
}

function kangarooo(x1: number, v1: number, x2: number, v2: number) {

    console.log((x2 - x1) % (v1 - v2) === 0);



}

console.log(kangaroo(1, 3, 2, 2))
