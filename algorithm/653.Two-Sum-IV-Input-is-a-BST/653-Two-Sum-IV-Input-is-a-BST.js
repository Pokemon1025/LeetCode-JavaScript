/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 * 方法一：先中序遍历输出升序数组，然后双指针查找
 * 双指针分别指向头尾，如果索引的两数之和大于target，尾指针前移
 * 如果索引的两数之和小于target，首指针后移
 * 当两指针相遇时，退出查找
 * 方法二：DFS遍历，set判断
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {boolean}
 */

var findTarget = function (root, k) {
    let s = new Set();
    let dfs = (node) => {
        if (!node) return false;
        if (s.has(k - node.val)) return true;
        s.add(node.val);
        return dfs(node.left) || dfs(node.right);
    }
    return dfs(root);
};