/**
 * @param {number[]} nums
 * @return {number}
 */
var findUnsortedSubarray = function (nums) {
    let left = 0,
        right = -1;
    let max = nums[0];
    let min = nums[nums.length - 1];
    for (let i = 1; i < nums.length; i++) {
        if (max > nums[i]) {
            right = i;
        } else {
            max = nums[i];
        }
        if (min < nums[nums.length - 1 - i]) {
            left = nums.length - 1 - i;
        } else {
            min = nums[nums.length - 1 - i];
        }
    }
    return right - left + 1;
};