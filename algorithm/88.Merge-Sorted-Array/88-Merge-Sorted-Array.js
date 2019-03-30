/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
    let i = m + n - 1;
    for (m--, n--; m >= 0 && n >= 0; nums1[i--] = nums1[m] > nums2[n] ? nums1[m--] : nums2[n--]) {}
    while (n >= 0) nums1[i--] = nums2[n--];
};