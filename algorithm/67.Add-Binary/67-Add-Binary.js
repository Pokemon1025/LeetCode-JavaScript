/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 * 执行用时 : 108 ms, 在Add Binary的JavaScript提交中击败了88.17% 的用户
 * 内存消耗 : 35.3 MB, 在Add Binary的JavaScript提交中击败了87.34% 的用户
 */
var addBinary = function (a, b) {
    let i = a.length - 1,
        j = b.length - 1,
        carry = 0,
        res = '';
    while (i >= 0 || j >= 0 || carry > 0) {
        carry += i >= 0 ? parseInt(a[i--]) : 0;
        carry += j >= 0 ? parseInt(b[j--]) : 0;
        res = carry % 2 + res;
        carry = Math.floor(carry / 2);
    }
    return res;
};