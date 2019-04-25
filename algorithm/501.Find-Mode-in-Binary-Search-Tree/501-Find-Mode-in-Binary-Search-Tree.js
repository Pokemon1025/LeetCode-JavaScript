/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 * 执行用时 : 132 ms, 在Find Mode in Binary Search Tree的JavaScript提交中击败了72.50% 的用户
 * 内存消耗 : 41.9 MB, 在Find Mode in Binary Search Tree的JavaScript提交中击败了50.00% 的用户
 * 方法：使用hash表，将二叉搜索树中各个结点与其出现的次数进行关联，动态更新结点出现次数的最大值
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var findMode = function (root) {
    const map = {};
    let maxTimes = -Infinity;
    const traverseNode = node => {
        if (node) {
            map[node.val] = (map[node.val] || 0) + 1;
            if (map[node.val] > maxTimes) maxTimes = map[node.val];
            traverseNode(node.left);
            traverseNode(node.right);
        }
    }
    traverseNode(root);
    const res = [];
    Object.keys(map).forEach(key => {
        if (map[key] == maxTimes) {
            res.push(key);
        }
    });
    return res;
}