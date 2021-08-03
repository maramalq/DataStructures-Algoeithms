/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

function moveZeroes(nums) {
    let countZero = 0;

    for(let i = 0; i < nums.length; i++) {
        if (nums[i] == 0) {
            nums.splice(i, 1);
            countZero++;
            i -= 1;
        }
    }

    while (countZero) {
        nums[nums.length] = 0;
        countZero--;
    }

    return nums;
}

console.log(moveZeroes([0,1,0,3,12])); // [1,3,12,0,0]

console.log(moveZeroes([0])); // 0