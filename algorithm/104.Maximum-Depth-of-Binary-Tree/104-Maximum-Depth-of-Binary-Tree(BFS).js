/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 * 方法：BFS
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function (root) {
    let stack = [{
        c: 0,
        node: root
    }];
    if (root == null) {
        return 0;
    }
    let depth = 0;
    while (stack.length) {
        const {
            c,
            node
        } = stack.shift();
        node.left && stack.push({
            c: c + 1,
            node: node.left
        });
        node.right && stack.push({
            c: c + 1,
            node: node.right
        });
        depth = Math.max(depth, c + 1);
    }
    return depth;
};