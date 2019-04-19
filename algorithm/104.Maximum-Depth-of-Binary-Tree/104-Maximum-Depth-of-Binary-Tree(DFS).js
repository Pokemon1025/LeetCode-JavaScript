/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 * 方法：DFS
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function (root) {
    if (root === null) {
        return 0;
    }
    const depth = Math.max(maxDepth(root.left), maxDepth(root.right)) + 1;
    return depth;
};