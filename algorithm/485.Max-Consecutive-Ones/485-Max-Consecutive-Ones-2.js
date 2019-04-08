/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function (nums) {
    let curMax = 0,
        globalMax = 0;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] == 1) {
            curMax++;
        } else {
            if (curMax > globalMax) {
                globalMax = curMax;
            }
            curMax = 0;
        }
    }
    return curMax > globalMax ? curMax : globalMax;
};