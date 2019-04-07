/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function (nums) {
    let numSet = new Set(nums);
    
    if (numSet.size < 3) {
        return Math.max(...numSet);
    }
    numSet.delete(Math.max(...numSet));
    numSet.delete(Math.max(...numSet));

    return Math.max(...numSet);
};