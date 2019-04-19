/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 * 
 * 方法：迭代
 * 创建一个队列，用 push() 方法模仿入列，用 shift() 方法模仿出列
 * 队列中每两个连续的结点应该是相等的，而且它们的子树互为镜像
 * 该算法的工作原理和 BFS 类似，但存在一些关键差异
 * 每次提取两个结点并比较它们的值
 * 然后，将两个结点的左右子结点按相反的顺序插入队列中
 * 当队列为空时，或者检测到队列中取出两个不相等的连续结点时结束
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function (root) {
    if (root === null) return true;
    let queue = [];
    queue.push(root.left);
    queue.push(root.right);
    while (queue.length !== 0) {
        let leftNode = queue.shift();
        let rightNode = queue.shift();
        if (leftNode === null && rightNode === null) continue;
        if (leftNode === null || rightNode === null) return false;
        if (leftNode.val !== rightNode.val) return false;
        queue.push(leftNode.left);
        queue.push(rightNode.right);
        queue.push(leftNode.right);
        queue.push(rightNode.left);
    }
    return true;
}