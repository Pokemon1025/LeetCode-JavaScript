/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 * 执行用时 : 124 ms, 在Minimum Absolute Difference in BST的JavaScript提交中击败了75.41% 的用户
 * 内存消耗: 38.4 MB, 在Minimum Absolute Difference in BST的JavaScript提交中击败了37.93% 的用户
 * 方法：中序遍历过程加判断
 * /
/**
 * @param {TreeNode} root
 * @return {number}
 */
var getMinimumDifference = function (root) {
    let curr = null,
        minDiff = Number.MAX_SAFE_INTEGER;
    const dfs = node => {
        if (!node) return [];
        if (node.left) dfs(node.left);
        if (curr == null) {
            curr = node.val;
        } else {
            minDiff = Math.min(minDiff, node.val - curr);
            curr = node.val;
        }
        if (node.right) dfs(node.right);
    }
    dfs(root);
    return minDiff;
};