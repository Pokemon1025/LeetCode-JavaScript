/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 * 执行用时 : 956 ms, 在N-ary Tree Preorder Traversal的JavaScript提交中击败了89.36% 的用户
 * 内存消耗 : 81.8 MB, 在N-ary Tree Preorder Traversal的JavaScript提交中击败了27.37% 的用户
 * 方法：递归
 */
/**
 * @param {Node} root
 * @return {number[]}
 */
var preorder = function (root) {
    let res = [];
    let postorderNode = (root) => {
        if (root !== null) {
            res.push(root.val);
            if (root.children) {
                root.children.forEach(item => {
                    postorderNode(item);
                });
            }
        }
    }
    postorderNode(root);
    return res;
};