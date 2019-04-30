/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 * 执行用时 : 84 ms, 在Second Minimum Node In a Binary Tree的JavaScript提交中击败了96.77% 的用户
 * 内存消耗 : 33.8 MB, 在Second Minimum Node In a Binary Tree的JavaScript提交中击败了25.00% 的用户
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var findSecondMinimumValue = function (root) {
    if (!root || !root.left || !root.right) {
        return -1;
    }

    let min = Number.MAX_SAFE_INTEGER;
    const stack = [root];
    while (stack.length > 0) {
        const node = stack.pop();
        if (node.val < min && node.val > root.val) {
            min = node.val;
        }
        if (node.right) {
            stack.push(node.right);
        }
        if (node.left) {
            stack.push(node.left);
        }
    }
    return min === Number.MAX_SAFE_INTEGER ? -1 : min;
};