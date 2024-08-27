function findMedian(arr: number[]): number {
    let sortedArray = arr.sort((a, b) => a - b);

    let middleIndex = Math.floor(sortedArray.length / 2);

    if (sortedArray.length % 2 === 0) {
        let median = (sortedArray[middleIndex - 1] + sortedArray[middleIndex]) / 2;
        return median;
    } else {
        let median = sortedArray[middleIndex];
        return median;
    }
}


const arr: number[] = [1, 240, 506, 699, 1233];
console.log(findMedian(arr)); 
