/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 * 执行用时 : 1004 ms, 在N-ary Tree Postorder Traversal的JavaScript提交中击败了72.27% 的用户
 * 内存消耗 : 87 MB, 在N-ary Tree Postorder Traversal的JavaScript提交中击败了9.76% 的用户
 */
/**
 * @param {Node} root
 * @return {number[]}
 */
var postorder = function (root) {
    let res = [];
    let postOrderNode = (root) => {
        if (!root) return [];
        if (root.children) {
            root.children.forEach(item => {
                postOrderNode(item);
            });
        }
        res.push(root.val);
    }
    postOrderNode(root);
    return res;
};