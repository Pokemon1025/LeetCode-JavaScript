/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
    return [...new Set(nums.concat(target))].sort((a, b) => (a - b)).findIndex((v) => (v == target));
};