const array = [-5, 10, 7, 4, 6, 9]


function bubbleSort(arr: number[]): number[] {

    let swapped: boolean;
    for (let i = 0; i < arr.length; i++) {
        do {
            swapped = false

            if (arr[i] > arr[i + 1]) {
                let temp: number = arr[i + 1]
                arr[i] = arr[i + 1]
                arr[i + 1] = temp
                swapped = true
            }

        } while (swapped)


    }

    return arr

}

console.log(bubbleSort(array));


function toyBox() {
    let toys: number[] = [2, 8, 1, 4];
    let swap: boolean;
    do {
        swap = false
        for (let i = 0; i < toys.length; i++)
            if (toys[i] > toys[i + 1]) {
                let temp = toys[i]
                toys[i] = toys[i + 1]
                toys[i + 1] = temp
                swap = true
            }
    } while (swap)

    return toys



}

console.log(toyBox());


function someMore() {
    let arr: number[] = [3, 5, 7]
    // 3 = pos 0   5=1 and 7 = 2
    for (let i = 0; i < 1; i++) {
        let temp = arr[i]//3 //5
        arr[i] = arr[2]//7 
        arr[2] = temp //3

    }
    console.log(arr);


}
someMore()





