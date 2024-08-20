const array = [1, 3, 4, 5, 10, 23, 2];

function swap(arr: number[], i: number, j: number) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;

    return { temp }



}


function selectionSort(arr: number[]): number[] {

    let forthStep = []
    for (let i = 0; i < arr.length; i++) {

        let minIndex = i


        for (let j = 0; j < arr.length; j++) {
            if (arr[j] > arr[minIndex])

                if (minIndex !== i) {
                    console.log(arr[i]);

                    let temp = arr[i]

                    arr[i] = arr[minIndex]



                    arr[minIndex] = temp

                }



        }
    }





    return arr

}



const sortedArray = selectionSort(array);
console.log("Sorted Array:", sortedArray);