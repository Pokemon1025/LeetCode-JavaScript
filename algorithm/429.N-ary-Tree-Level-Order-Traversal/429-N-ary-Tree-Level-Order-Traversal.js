/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 * 执行用时 : 968 ms, 在N-ary Tree Level Order Traversal的JavaScript提交中击败了88.50% 的用户
 * 内存消耗 : 81.9 MB, 在N-ary Tree Level Order Traversal的JavaScript提交中击败了67.11% 的用户
 */
/**
 * @param {Node} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
    let res = [],
        queue = [root];
    if (!root) return res;
    while (queue.length) {
        let temp = [];
        let newQueue = [];
        queue.map(item => {
            temp.push(item.val);
            newQueue.push(...item.children);
        })
        queue = newQueue;
        res.push(temp);
    }

    return res;
};