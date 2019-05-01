/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 * 执行用时 : 244 ms, 在Increasing Order Search Tree的JavaScript提交中击败了80.00% 的用户
 * 内存消耗 : 42.5 MB, 在Increasing Order Search Tree的JavaScript提交中击败了100.00% 的用户
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var increasingBST = function (root) {
    const inOrder = (root, tail) => {
        if (!root) return tail;
        let node = inOrder(root.left, root);
        root.left = null;
        root.right = inOrder(root.right, tail);
        return node;
    }
    return inOrder(root, null);
};