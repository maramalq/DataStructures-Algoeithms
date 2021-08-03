/**
 * @param {number[]} nums
 * @return {boolean}
 */

function containsDuplicate(nums) {
    // first sort the array
    nums.sort((a,b)=>a-b);
    // loop through the array
    for(let i=0; i<nums.length-1; i++){
        if(nums[i] === nums[i+1]) return true;
    }
    return false;
}

console.log(containsDuplicate([1,2,3,1]));

console.log(containsDuplicate([1,2,3,4]));

console.log(containsDuplicate([1,1,1,3,3,4,3,2,4,2]));