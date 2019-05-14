/**
 * @param {string} S
 * @return {string}
 * 执行用时 : 76 ms, 在Remove Outermost Parentheses的JavaScript提交中击败了100.00% 的用户
 * 内存消耗 : 35.8 MB, 在Remove Outermost Parentheses的JavaScript提交中击败了76.92% 的用户
 */
var removeOuterParentheses = function (S) {
    let i = 0,
        j = 0,
        k = 0;
    let ans = '';
    let len = S.length;
    while (k < len) {
        if (S[k] == '(') {
            i++;
        } else {
            j++;
        }
        if (i == j) {
            ans += S.slice(k - 2 * (i - 1), k);
            j = 0;
            i = 0;
        }
        k += 1;
    }
    return ans;
}