/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function (nums, k) {
    let hashMap = {};

    for (let i = 0; i <= nums.length; i++) {
        let num = nums[i]
        if (hashMap[num] != null) {
            if (i - hashMap[num] <= k) {
                return true;
            }
        }
        hashMap[num] = i;
    }

    return false;
};