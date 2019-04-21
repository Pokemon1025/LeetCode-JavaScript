/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 * 执行用时 : 112 ms, 在Path Sum的JavaScript提交中击败了88.04% 的用户
 * 内存消耗 : 37.9 MB, 在Path Sum的JavaScript提交中击败了5.17% 的用户
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {boolean}
 */
var hasPathSum = function (root, sum) {
    if (!root) return false;
    if (sum == root.val && !root.left && !root.right) return true;
    return hasPathSum(root.left, sum - root.val) || hasPathSum(root.right, sum - root.val);
};