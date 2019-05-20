/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 * 执行用时 : 192 ms, 在Add Two Numbers的JavaScript提交中击败了87.47% 的用户
 * 内存消耗 : 38.1 MB, 在Add Two Numbers的JavaScript提交中击败了88.00% 的用户
 * 方法：双指针同时走，sum = l1 + l2 + 进位
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
    const addNumbers = (l1, l2, extra) => {
        let sum = (l1 ? l1.val : 0) + (l2 ? l2.val : 0) + extra;
        const node = new ListNode(sum % 10);
        let nl1 = l1 ? l1.next : null;
        let nl2 = l2 ? l2.next : null;
        if (nl1 || nl2 || sum > 9) {
            node.next = addNumbers(nl1, nl2, Math.floor(sum / 10));
        }
        return node;
    };
    return addNumbers(l1, l2, 0);
};