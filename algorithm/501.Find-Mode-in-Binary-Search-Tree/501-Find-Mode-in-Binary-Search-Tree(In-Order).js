/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 * 执行用时 : 116 ms, 在Find Mode in Binary Search Tree的JavaScript提交中击败了92.50% 的用户
 * 内存消耗 : 41 MB, 在Find Mode in Binary Search Tree的JavaScript提交中击败了61.54% 的用户
 * 方法：二叉搜索树中序遍历是一个递增序列
 * 对比当前 node 的值与前驱结点 prev 的值，更新当前节点值出现次数及最大出现次数
 * 注：不需要额外的空间
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var findMode = function (root) {
    let maxTimes = -Infinity,
        curTimes = 1
    let prev = [];
    const res = [];
    const traverseNode = node => {
        if (!node) return res;
        traverseNode(node.left);
        if (prev) {
            curTimes = (prev.val === node.val) ? curTimes + 1 : 1;
        }
        if (curTimes >= maxTimes) {
            // 若curTimes > maxTimes，清空res
            if (curTimes > maxTimes) res.length = 0;
            // 将 node 的值加入到 res 中，更新 maxTimes 为 curTimes
            res.push(node.val);
            maxTimes = curTimes;
        }
        prev = node;
        traverseNode(node.right);
    }
    traverseNode(root);
    return res;
};