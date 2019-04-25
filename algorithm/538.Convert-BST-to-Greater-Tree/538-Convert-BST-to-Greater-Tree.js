/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * } 
 * 执行用时 : 152 ms, 在Convert BST to Greater Tree的JavaScript提交中击败了79.17% 的用户
 * 内存消耗 : 40 MB, 在Convert BST to Greater Tree的JavaScript提交中击败了55.17% 的用户
 * 方法：逆中序遍历
 * 右→中→左的顺序遍历二叉搜索树，每个节点累加 sum
 * 注：二叉搜索树中序遍历是升序序列，改为该方法即可得到逆序序列
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var convertBST = function (root) {
    let sum = 0;
    const reverseInOrder = node => {
        if (node) {
            reverseInOrder(node.right);
            node.val += sum;
            sum = node.val;
            reverseInOrder(node.left);
        }
    }
    reverseInOrder(root);
    return root;
};