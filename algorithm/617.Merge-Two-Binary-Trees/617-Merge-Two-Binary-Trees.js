/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 * 执行用时 : 160 ms, 在Merge Two Binary Trees的JavaScript提交中击败了79.14% 的用户
 * 内存消耗 : 40.3 MB, 在Merge Two Binary Trees的JavaScript提交中击败了44.68% 的用户
 * && 和 || 运算符会返回一个指定操作数的值
 * 若t1不存在则返回t2，其他情况下都返回原始或处理后的t1
 */
/**
 * @param {TreeNode} t1
 * @param {TreeNode} t2
 * @return {TreeNode}
 */
var mergeTrees = function (t1, t2) {
    if (t1 && t2) {
        t1.val += t2.val;
        t1.left = mergeTrees(t1.left, t2.left);
        t1.right = mergeTrees(t1.right, t2.right);
    }
    return t1 || t2;
};