/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 * 执行用时 : 88 ms, 在Invert Binary Tree的JavaScript提交中击败了91.67% 的用户
 * 内存消耗 : 33.7 MB, 在Invert Binary Tree的JavaScript提交中击败了39.65% 的用户
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTree = function (root) {
    if (!root) return null;
    if (!root.left && !root.right) return root;
    
    let temp = root.left;
    root.left = invertTree(root.right);
    root.right = invertTree(temp);
    return root;
};