/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumProduct = function (nums) {
    //先排序，然后比较三个最大的正数的乘积和最小的两个负数及最大正数的乘积即可
    let len = nums.length;
    nums.sort((a, b) => b - a);
    return Math.max(nums[0] * nums[1] * nums[2], nums[len - 1] * nums[len - 2] * nums[0]);
};