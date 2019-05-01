/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 * 执行用时 : 316 ms, 在Longest Univalue Path的JavaScript提交中击败了38.23% 的用户
 * 内存消耗 : 52.5 MB, 在Longest Univalue Path的JavaScript提交中击败了25.00% 的用户
 * 注意：计算的时候用多边，返回的时候用单边
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var longestUnivaluePath = function (root) {
    let res = 0;
    if (!root) return 0;
    let getMaxPath = (r, v) => {
        if (!r) return 0;
        let left = getMaxPath(r.left, r.val);
        let right = getMaxPath(r.right, r.val);
        res = Math.max(res, left + right);
        if (r.val === v) {
            return Math.max(left, right) + 1;
        }
        return 0;
    }
    getMaxPath(root, root.val);
    return res;
}