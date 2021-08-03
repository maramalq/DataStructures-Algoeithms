/**
 * @param {number[]} nums
 * @return {number}
 */

function maxSubArray(nums) {
    let max_so_far = Number.NEGATIVE_INFINITY;
    let leftIndex = 0,
        rightIndex = nums.length - 1,
        len = nums.length;

    for (let i = 0; i < len; i++) {
        for (let j = i; j < len; j++) {
            maxSum = 0;
            for (let k = i; k <= j; k++) {
                // console.log("i = "+i+", j = "+j+", k = "+k);
                maxSum += nums[k];
                if (max_so_far < maxSum) {
                    leftIndex = i;
                    max_so_far = maxSum;
                    rightIndex = j;
                }
            }
        }
    }

    return max_so_far;
}

const nums1 = [-2,1,-3,4,-1,2,1,-5,4]; // [4,-1,2,1] has the largest sum = 6
console.log(maxSubArray(nums1));

const nums2 = [1]; // 1
console.log(maxSubArray(nums2));

const nums3 = [5,4,-1,7,8]; // 23
console.log(maxSubArray(nums3));

console.log(maxSubArray([-1]))