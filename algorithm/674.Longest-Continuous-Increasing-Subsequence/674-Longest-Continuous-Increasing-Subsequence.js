/**
 * @param {number[]} nums
 * @return {number}
 */
var findLengthOfLCIS = function (nums) {
    if (!nums.length) {
        return 0;
    }

    let res = 1,
        count = 1;
    for (let i = 0; i < nums.length - 1; i++) {
        if (nums[i] < nums[i + 1]) {
            count++;
            res = Math.max(count, res);
        } else {
            count = 1;
        }
    }
    return res;
};