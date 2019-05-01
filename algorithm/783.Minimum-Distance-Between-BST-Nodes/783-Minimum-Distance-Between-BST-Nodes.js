/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 * 执行用时 : 92 ms, 在Minimum Distance Between BST Nodes的JavaScript提交中击败了79.17% 的用户
 * 内存消耗 : 34.5 MB, 在Minimum Distance Between BST Nodes的JavaScript提交中击败了50.00% 的用户
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var minDiffInBST = function (root) {
    let res = Infinity,
        prev = null;
    const traverse = (node) => {
        node.left && traverse(node.left);
        if (prev) {
            res = Math.min(res, Math.abs(prev - node.val));
            if (res === 1) return 1;
        }
        prev = node.val;
        node.right && traverse(node.right);
    }
    traverse(root);
    return res;
};