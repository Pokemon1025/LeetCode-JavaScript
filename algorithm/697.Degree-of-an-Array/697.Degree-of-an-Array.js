/**
 * @param {number[]} nums
 * @return {number}
 */
var findShortestSubArray = function (nums) {
    let map = new Map();
    for (let i = 0; i < nums.length; i++) {
        if (map.get(nums[i])) {
            map.get(nums[i]).push(i)
        } else {
            map.set(nums[i], [i])
        }
    }
    
    let len = [...map.values()].map(arr => arr.length);
    let maxLen = Math.max(...len);
    let res = [...map.values()].filter(a => a.length === maxLen).map(arr => (arr[arr.length - 1] - arr[0] + 1));
    return Math.min(...res);
};