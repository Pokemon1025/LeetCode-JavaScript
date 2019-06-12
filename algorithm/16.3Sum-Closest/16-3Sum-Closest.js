/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 * 执行用时 :104 ms,在所有JavaScript提交中击败了 94.06% 的用户
 * 内存消耗 :34.9 MB,在所有JavaScript提交中击败了 58.82% 的用户
 */
var threeSumClosest = function (nums, target) {
    // 1.数组排序，时间复杂度 O(nlogn)
    nums.sort((a, b) => a - b);
    let closestNum = nums[0] + nums[1] + nums[2];

    for (let i = 0; i < nums.length - 2; i++) {
        let left = i + 1,
            right = nums.length - 1;
        while (left < right) {
            let threeSum = nums[left] + nums[right] + nums[i];
            if (Math.abs(threeSum - target) < Math.abs(closestNum - target)) {
                closestNum = threeSum;
            }
            if (threeSum > target) {
                right--;
            } else if (threeSum < target) {
                left++;
            } else {
                return target;
            }
        }
    }
    return closestNum;
};