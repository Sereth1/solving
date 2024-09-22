let arr1: number[] = [3, 3, 2, 1, 3]

function deleteNums(arr: number[]) {
    let sortedAr = arr.sort((a, b) => a - b);
    let similar: number[] = [];
    let deletedNums: number[] = [];

    for (let i = 0; i < sortedAr.length; i++) {
        if (sortedAr[i] === sortedAr[i + 1]) {
            similar.push(sortedAr[i]);
        } else {
            if (similar.includes(sortedAr[i])) {
                similar.push(sortedAr[i]);
            } else {
                deletedNums.push(sortedAr[i]);
            }
            similar = [];
        }
    }

    return deletedNums.length
}

deleteNums(arr1);
console.log(deleteNums(arr1));
