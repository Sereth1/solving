let list1 = [1, 2, 4]
let list2 = [1, 3, 4]


var mergeTwoLists = function (list1: number[], list2: number[]): number[] {

    let mergedArr = list1.concat(list2).sort((a, b) => a - b)



    return mergedArr


};
console.log(mergeTwoLists(list1, list2))