/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 * 执行用时 : 112 ms, 在Diameter of Binary Tree的JavaScript提交中击败了91.43% 的用户
 * 内存消耗 : 36.9 MB, 在Diameter of Binary Tree的JavaScript提交中击败了75.00% 的用户
 * 方法：将该问题转化为求二叉树的每个节点的左右子树的高度和的最大值
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var diameterOfBinaryTree = function (root) {
    let res = 0;
    const getDob = node => {
        if (!node) return 0;
        const left = getDob(node.left);
        const right = getDob(node.right);
        res = Math.max(res, left + right);
        return Math.max(left, right) + 1;
    }
    getDob(root);
    return res;
};