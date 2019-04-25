/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */
/**
 * @param {Node} root
 * @return {number}
 */
var maxDepth = function (root) {

    if (!root) return 0;
    if (!root.children) return 1;
    let depth = 1;
    for (let i = 0; i < root.children.length; i++) {
        depth = Math.max(maxDepth(root.children[i]) + 1, depth);
    }
    return depth;
};