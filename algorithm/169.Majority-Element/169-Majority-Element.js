/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
    let majorityElm = nums[0],
        count = 0;

    nums.forEach(val => {
        if (val === majorityElm) {
            count++;
        } else if (count == 0) {
            majorityElm = val;
            count = 1;
        } else {
            count--;
        }
    })

    return majorityElm;
};