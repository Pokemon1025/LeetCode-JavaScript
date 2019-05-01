/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 * 执行用时 : 92 ms, 在Leaf-Similar Trees的JavaScript提交中击败了89.29% 的用户
 * 内存消耗 : 35.2 MB, 在Leaf-Similar Trees的JavaScript提交中击败了35.71% 的用户
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */
var leafSimilar = function (root1, root2) {
    let dfs = (node, leaves) => {
        if (!node) return;
        if (!node.left && !node.right) {
            leaves.push(node.val);
        }
        dfs(node.left, leaves);
        dfs(node.right, leaves);
        return leaves;
    }
    const leaves1 = dfs(root1, []);
    const leaves2 = dfs(root2, []);
    if (leaves1.length !== leaves2.length) {
        return false;
    }
    for (let i = 0; i < leaves1.length; i++) {
        if (leaves1[i] !== leaves2[i]) {
            return false;
        }
    }
    return true;
};