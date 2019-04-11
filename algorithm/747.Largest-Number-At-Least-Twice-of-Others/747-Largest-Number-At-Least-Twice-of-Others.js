/**
 * @param {number[]} nums
 * @return {number}
 */
var dominantIndex = function (nums) {
    let firstMax = nums[0],
        secMax = -Infinity;

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] > firstMax) {
            let temp = firstMax;
            firstMax = nums[i];
            secMax = Math.max(secMax, temp);
        } else {
            if (nums[i] > secMax) {
                secMax = nums[i];
            }
        }
    }
    
    if ((secMax * 2) <= firstMax) {
        return nums.indexOf(firstMax);
    }
    return -1;
};