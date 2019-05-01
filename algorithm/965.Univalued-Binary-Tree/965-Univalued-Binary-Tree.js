/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 * 执行用时 : 88 ms, 在Univalued Binary Tree的JavaScript提交中击败了96.75% 的用户
 * 内存消耗 : 33.8 MB, 在Univalued Binary Tree的JavaScript提交中击败了37.21% 的用户
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isUnivalTree = function (root) {
    let preSearch = (root, val) => {
        if (!root) return true;
        if (root.val !== val) return false;
        return preSearch(root.left, val) && preSearch(root.right, val);
    }
    return preSearch(root, root.val);
};