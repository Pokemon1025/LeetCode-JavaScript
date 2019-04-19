/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function (root) {
    if (!root) return true;
    return check(root.left, root.right);

    function check(leftNode, rightNode) {
        if (!leftNode && !rightNode) return true;
        if (!leftNode || !rightNode) return false;
        if (leftNode.val !== rightNode.val) return false;
        return check(leftNode.left, rightNode.right) && check(rightNode.left, leftNode.right)
    }
};