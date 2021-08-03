
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */

function rotate(nums, k) {
    let j = nums.length - k % nums.length;
    let arr = [...nums];
    for(let i=0; i<nums.length; i++) {
        if(j === nums.length) {
            j = 0;
        }
        nums[i] = arr[j];
        j++;
    }
}

rotate([1,2,3,4,5,6,7] , 3);