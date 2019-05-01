/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 * 执行用时 : 96 ms, 在Cousins in Binary Tree的JavaScript提交中击败了87.76% 的用户
 * 内存消耗 : 34.8 MB, 在Cousins in Binary Tree的JavaScript提交中击败了40.00% 的用户
 */
/**
 * @param {TreeNode} root
 * @param {number} x
 * @param {number} y
 * @return {boolean}
 */
var isCousins = function (root, x, y) {
    let depth = new Map();
    let parent = new Map();
    let dfs = (node, par) => {
        if (node) {
            depth.set(node.val, par ? 1 + depth.get(par.val) : 0);
            parent.set(node.val, par);
            dfs(node.left, node);
            dfs(node.right, node);
        }
    }
    dfs(root, null);
    return (depth.get(x) === depth.get(y) && parent.get(x) !== parent.get(y));
};