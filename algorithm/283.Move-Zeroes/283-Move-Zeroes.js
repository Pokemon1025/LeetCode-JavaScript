/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
    let curIndex = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] != 0) {
            nums[curIndex++] = nums[i];
        }
    }
    while (curIndex < nums.length) {
        nums[curIndex++] = 0;
    }
};