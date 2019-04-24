/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 * 执行用时 : 116 ms, 在Path Sum III的JavaScript提交中击败了97.96% 的用户
 * 内存消耗 : 37.3 MB, 在Path Sum III的JavaScript提交中击败了12.50% 的用户
 * 方法：双重递归
 * /
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {number}
 */
var pathSum = function (root, sum) {
    if (!root) return 0;
    let count = 0;
    let stack = [];
    let dfs = function (root, cur) {
        // 当前路径和等于从根节点到此节点的val和
        let curSum = cur + root.val;
        if (curSum === sum) count++;
        // 遍历栈，子路径和 = 根到此节点的路径和 - 根到父节点的路径和
        for (let i = 0; i < stack.length; i++) {
            if (curSum - sumList[i] === sum)
                count++;
        }
        // 当前路径和入栈留作备用
        stack.push(curSum);
        // 弹出
        if (root.left) {
            dfs(root.left, cur + root.val);
            stack.pop();
        }
        if (root.right) {
            dfs(root.right, cur + root.val);
            stack.pop();
        }
    }
    dfs(root, 0);
    return count;
};
console.log(pathSum([10, 5, -3, 3, 2, null, 11, 3, -2, null, 1], 8))