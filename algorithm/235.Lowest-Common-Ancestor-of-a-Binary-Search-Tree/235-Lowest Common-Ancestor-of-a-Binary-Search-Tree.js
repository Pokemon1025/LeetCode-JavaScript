/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */

var lowestCommonAncestor = function (root, p, q) {
    if (!root) return null;

    function isLAC(crt, a, b) {
        if (a > crt.val && b > crt.val) return isLAC(crt.right, a, b);
        if (a < crt.val && b < crt.val) return isLAC(crt.left, a, b);
        return crt;
    }
    const res = isLAC(root, p.val, q.val);
    return res;
}