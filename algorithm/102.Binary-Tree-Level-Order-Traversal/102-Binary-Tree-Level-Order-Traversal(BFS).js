/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 * 方法：BFS
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
    let res = [];
    let queue = [root];

    if (!root) {
        return res;
    }

    while (queue.length > 0) {
        let size = queue.length;
        let temp = [];
        for (let i = 0; i < size; i++) {
            let cur = queue.shift();
            temp.push(cur.val);

            if (cur.left) {
                queue.push(cur.left);

            }
            if (cur.right) {
                queue.push(cur.right);
            }
        }
        res.push(temp);
    }
    return res;
};