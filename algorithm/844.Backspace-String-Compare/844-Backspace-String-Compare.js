/**
 * @param {string} S
 * @param {string} T
 * @return {boolean}
 * 执行用时 : 72 ms, 在Backspace String Compare的JavaScript提交中击败了100.00% 的用户
 * 内存消耗 : 34.2 MB, 在Backspace String Compare的JavaScript提交中击败了91.18% 的用户 
 * 方法：倒序遍历
 */
var backspaceCompare = function (S, T) {
    let j = T.length - 1;
    for (let i = S.length - 1; i >= 0; i--) {
        if (T[j] == "#") {
            j = backSpace(T, j);
        }
        if (S[i] == "#") {
            i = backSpace(S, i);
        }
        if (T[j] == S[i]) {
            j--;
        } else {
            return false;
        }
    }
    return true;
};
function backSpace(S, i) {
    let step = 0;
    while (S[i] == "#" || step > 0) {
        if (S[i] == "#") {
            step++;
        } else {
            step--;
        }
        i--;
    }
    return i;
}