/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 * 执行用时 : 116 ms, 在Convert Sorted Array to Binary Search Tree的JavaScript提交中击败了85.71% 的用户
 * 内存消耗 : 37.5 MB, 在Convert Sorted Array to Binary Search Tree的JavaScript提交中击败了70.21% 的用户
 * 方法：分治
 * 其实就是二叉树中序遍历的逆过程
 * 二分法 + 递归
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function (nums) {
    function sortedArrayToBSTOverride(nums, left, right) {
        if (left > right) {
            return null;
        }
        let mid = left + parseInt((right - left) / 2); // 需要在防止溢出的情况下求中位数
        const root = new TreeNode(nums[mid]);
        root.left = sortedArrayToBSTOverride(nums, left, mid - 1);
        root.right = sortedArrayToBSTOverride(nums, mid + 1, right);
        return root;
    }
    return sortedArrayToBSTOverride(nums, 0, nums.length - 1);
};