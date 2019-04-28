/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 * 执行用时 : 120 ms, 在Construct String from Binary Tree的JavaScript提交中击败了83.33% 的用户
 * 内存消耗 : 38 MB, 在Construct String from Binary Tree的JavaScript提交中击败了84.38% 的用户
 */
/**
 * @param {TreeNode} t
 * @return {string}
 */
var tree2str = function (t) {
    if (!t) return "";
    let res = "";
    if (t.left && t.right) {
        res = `${t.val}(${tree2str(t.left)})(${tree2str(t.right)})`;
    }
    if (!(t.left && t.right)) {
        res = `${t.val}()(${tree2str(t.right)})`;
    }
    if (t.left && !t.right) {
        res = `${t.val}(${tree2str(t.left)})`;
    }
    if (!t.left && !t.right) {
        res = `${t.val}`;
    }
    return res;
};