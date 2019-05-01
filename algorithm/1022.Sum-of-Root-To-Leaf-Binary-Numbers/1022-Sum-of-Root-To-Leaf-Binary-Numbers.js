/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 * 执行用时 : 100 ms, 在Sum of Root To Leaf Binary Numbers的JavaScript提交中击败了100.00% 的用户
 * 内存消耗 : 35.5 MB, 在Sum of Root To Leaf Binary Numbers的JavaScript提交中击败了100.00% 的用户
 * 当前sum = 上一层sum*2 + 当前node.val
 * 当node的左右子节点为空时将sum值加到结果res中。 
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var sumRootToLeaf = function (root) {
    let res = 0;
    let dfs = (root, sum) => {
        if (!root) return 0;
        sum = 2 * sum + root.val;
        if (!root.left && !root.right) {
            res += sum;
            return;
        }
        dfs(root.left, sum);
        dfs(root.right, sum);
    }
    dfs(root, 0);
    return res;
};