/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayPairSum = function (nums) {
    return nums
        .sort((ai, bi) => ai - bi)
        .reduce((sum, cur, idx) => sum + (idx % 2 ? 0 : cur), 0);
};