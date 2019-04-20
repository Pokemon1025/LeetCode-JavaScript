/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 * 执行用时 : 100 ms, 在Binary Tree Level Order Traversal II的JavaScript提交中击败了64.18% 的用户
 * 内存消耗 : 34.6 MB, 在Binary Tree Level Order Traversal II的JavaScript提交中击败了55.90% 的用户
 * 方法：BFS
 * 层次遍历，结果返回相反顺序
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrderBottom = function (root) {
    let res = [],
        queue = [root]; // 设置一个辅助队列，每次都将下一层要访问的节点压入队列中
    // 判断根节点是否为空
    if (!root) {
        return res;
    }
    while (queue.length > 0) {
        let temp = [];
        let size = queue.length;
        for (let i = 0; i < size; i++) {
            // 将队列中的首元素取出，圧入 temp 数组
            let cur = queue.shift();
            temp.push(cur.val);
            // 判断该元素是否有子节点，有的话重新压入到辅助队列末尾
            if (cur.left) {
                queue.push(cur.left);
            }
            if (cur.right) {
                queue.push(cur.right);
            }
        }
        res.unshift(temp);
    }
    return res;
};