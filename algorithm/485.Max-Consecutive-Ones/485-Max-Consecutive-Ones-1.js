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
            globalMax = Math.max(globalMax, curMax);
        } else {
            curMax = 0;
        }
    }
    return globalMax;
};