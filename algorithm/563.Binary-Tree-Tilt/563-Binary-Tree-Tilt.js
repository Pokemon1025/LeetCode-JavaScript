/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 * 执行用时 : 120 ms, 在Binary Tree Tilt的JavaScript提交中击败了78.79% 的用户
 * 内存消耗 : 38.2 MB, 在Binary Tree Tilt的JavaScript提交中击败了26.67% 的用户
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var findTilt = function (root) {
    let res = 0;
    let countTilt = root => {
        if (!root) return 0;
        let left = countTilt(root.left),
            right = countTilt(root.right);
        res += Math.abs(right - left);
        return left + right + root.val;
    }
    countTilt(root);
    return res;
};