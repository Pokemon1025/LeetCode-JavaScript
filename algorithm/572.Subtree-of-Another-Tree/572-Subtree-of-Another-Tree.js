/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 * 
 * 执行用时 : 148 ms, 在Subtree of Another Tree的JavaScript提交中击败了66.18% 的用户
 * 内存消耗 : 38.4 MB, 在Subtree of Another Tree的JavaScript提交中击败了83.72% 的用户
 */
/**
 * @param {TreeNode} s
 * @param {TreeNode} t
 * @return {boolean}
 */
const isSubtree = (s, t) => {
    if (!t) return true;
    if (!s) return false;
    if (isSameTree(s, t)) return true;
    return isSubtree(s.left, t) || isSubtree(s.right, t);
};
const isSameTree = (s, t) => {
    if (!s || !t) return !s && !t;
    if (s.val !== t.val) return false;
    return isSameTree(s.left, t.left) && isSameTree(s.right, t.right);
}