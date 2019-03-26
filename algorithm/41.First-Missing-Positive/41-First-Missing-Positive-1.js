/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function (nums) {
    let len = nums.length
    if (!nums || len == 0) {
        return 1;
    }
    for (let i = 0; i < nums.length; i++) {
        while (nums[i] > 0 && nums[i] <= len && nums[nums[i] - 1] != nums[i]) {
            let temp = nums[nums[i] - 1];
            nums[nums[i] - 1] = nums[i];
            nums[i] = temp;
        }
    }
    for (let i = 0; i < len; i++) {
        if (nums[i] != i + 1) {
            return i + 1;
        }
    }
    return len + 1;
};