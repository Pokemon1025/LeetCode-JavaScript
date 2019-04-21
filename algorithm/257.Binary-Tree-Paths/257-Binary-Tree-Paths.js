/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 * 执行用时 : 100 ms, 在Binary Tree Paths的JavaScript提交中击败了74.29% 的用户
 * 内存消耗 : 34.2 MB, 在Binary Tree Paths的JavaScript提交中击败了80.00% 的用户
 */
/**
 * @param {TreeNode} root
 * @return {string[]}
 */
var binaryTreePaths = function (root) {
    let res = [];
    const dfs = (node, path) => {
        if (!node) return null;
        if (!node.left && !node.right) {
            res.push(path + node.val);
            return null;
        }
        dfs(node.left, `${path}${node.val}->`);
        dfs(node.right, `${path}${node.val}->`);
    }
    dfs(root, '');
    return res;
}