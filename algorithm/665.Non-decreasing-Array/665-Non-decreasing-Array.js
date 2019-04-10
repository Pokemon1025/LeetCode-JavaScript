/**
 * @param {number[]} nums
 * @return {boolean}
 */
var checkPossibility = function (nums) {
    if (nums.length < 3) {
        return true;
    }

    // false条件:i元素大于i+1元素,并且i-1元素大于i+1元素且i元素大于i+2元素。
    let count = 0;
    for (let i = 0; i < nums.length - 1; i++) {
        if (nums[i] > nums[i + 1]) {
            count += 1;
            if (i === 0 || nums[i - 1] <= nums[i + 1]) {
                nums[i] = nums[i + 1];
            } else {
                nums[i + 1] = nums[i];
            }
        }
    }
    return count <= 1;
};