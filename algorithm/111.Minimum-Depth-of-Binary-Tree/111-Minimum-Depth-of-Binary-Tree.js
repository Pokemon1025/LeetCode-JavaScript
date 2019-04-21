/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 * 执行用时 : 108 ms, 在Minimum Depth of Binary Tree的JavaScript提交中击败了85.87% 的用户
 * 内存消耗 : 37.6 MB, 在Minimum Depth of Binary Tree的JavaScript提交中击败了11.73% 的用户
 * 方法：
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var minDepth = function(root) {
    if(!root) return 0;
    // 只有一个根节点
    if(!root.left && !root.right) return 1;
    // 右子树非空
    if(!root.left) return minDepth(root.right) + 1;
    // 左子树非空
    if(!root.right) return minDepth(root.left) + 1;
    // 左右子树都不为空
    return Math.min(minDepth(root.left), minDepth(root.right)) + 1;
};