/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 * 执行用时 : 96 ms, 在Binary Tree Level Order Traversal的JavaScript提交中击败了83.02% 的用户
 * 内存消耗 : 34.6 MB, 在Binary Tree Level Order Traversal的JavaScript提交中击败了73.63% 的用户
 * 方法：DFS
 * 先前序遍历
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function (root, list = [], level = 0) {
    let size = list.length;
    if (!root) {
        return list;
    }
    // 如果数组长度没有那么多层时，要添加空的数组进去
    if (size <= level) {
        list.push([]);
    }
    list[level].push(root.val);
    levelOrder(root.left, list, level + 1);
    levelOrder(root.right, list, level + 1);
    return list;
};