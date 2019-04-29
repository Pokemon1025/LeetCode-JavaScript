/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 * 方法：二叉树的层序遍历
 * 执行用时 : 124 ms, 在Average of Levels in Binary Tree的JavaScript提交中击败了69.86% 的用户
 * 内存消耗 : 38.7 MB, 在Average of Levels in Binary Tree的JavaScript提交中击败了14.71% 的用户
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var averageOfLevels = function (root) {
    let res = [],
        queue = [];
    queue.push(root);
    while (queue.length) {
        let size = queue.length,
            sum = 0;
        for (let i = 0; i < size; i++) {
            let tempNode = queue.shift();
            if (tempNode.left) queue.push(tempNode.left);
            if (tempNode.right) queue.push(tempNode.right);
            sum += tempNode.val;
        }
        res.push(sum / size);
    }
    return res;
};