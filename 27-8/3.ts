let art: number[] = [2, 7, 11, 15];
let t = 9;

const twoSum = function (nums: number[], target: number): number[] {
    let index: number[] = [];
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                index.push(i, j);
                break;
            }
        }
    }

    return index;
};

console.log(twoSum(art, t));

