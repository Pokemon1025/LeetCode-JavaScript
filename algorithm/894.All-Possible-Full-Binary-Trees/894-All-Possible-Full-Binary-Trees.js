
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 * 执行用时 : 192 ms, 在All Possible Full Binary Trees的JavaScript提交中击败了95.65% 的用户
 * 内存消耗 : 44.9 MB, 在All Possible Full Binary Trees的JavaScript提交中击败了100.00% 的用户
 * 方法：递归
 * 数据集大的时候可以借助dp或cache优化
 */
/**
 * @param {number} N
 * @return {TreeNode[]}
 */
const cache = [];

function allPossibleFBT(N) {
    if (cache[N]) return cache[N];
    // 节点数量一定是奇数才有解
    if (N % 2 === 0) return [];
    if (N === 1) return [new TreeNode(0)];
    const res = [];
    for (let i = 1; i < N - 1; i += 2) {
        // 枚举所有可能的左子树和右子树的情况
        const leftTree = allPossibleFBT(i);
        const rightTree = allPossibleFBT(N - i - 1);
        for (let l = 0; l < leftTree.length; l++) {
            for (let r = 0; r < rightTree.length; r++) {
                const root = new TreeNode(0);
                root.left = rightTree[r];
                root.right = leftTree[l];
                res.push(root);
            }
        }
    }
    if (!cache[N]) cache[N] = res;
    return res;
}