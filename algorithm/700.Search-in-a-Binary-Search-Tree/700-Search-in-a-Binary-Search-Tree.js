/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 * 执行用时 : 136 ms, 在Search in a Binary Search Tree的JavaScript提交中击败了84.17% 的用户
 * 内存消耗 : 41.8 MB, 在Search in a Binary Search Tree的JavaScript提交中击败了55.95% 的用户
 */
/**
 * @param {TreeNode} root
 * @param {number} val
 * @return {TreeNode}
 */
var searchBST = function (root, val) {
    if (!root) return null;
    if (root.val === val) return root;
    if (root.val < val) return searchBST(root.right, val);
    return searchBST(root.left, val);
};