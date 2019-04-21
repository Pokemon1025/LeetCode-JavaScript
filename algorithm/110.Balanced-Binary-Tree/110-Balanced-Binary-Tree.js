/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 * 执行用时 : 116 ms, 在Balanced Binary Tree的JavaScript提交中击败了91.05% 的用户
 * 内存消耗 : 38 MB, 在Balanced Binary Tree的JavaScript提交中击败了11.88% 的用户
 * 方法：DFS
 * 在求解高度的同时判断子树是否平衡，若不平衡则退出
 * 时间复杂度：O(n)
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isBalanced = function (root) {
    if (!root) {
        return true;
    }
    let isBalance = true;
    // 计算树的层高
    let check = function (node) {
        if (!node) return 0;
        let leftHeight = check(node.left);
        let rightHeight = check(node.right);
        if (Math.abs(leftHeight - rightHeight) > 1) isBalance = false;
        return (leftHeight > rightHeight ? leftHeight : rightHeight) + 1;
    }
    check(root);
    return isBalance;
};