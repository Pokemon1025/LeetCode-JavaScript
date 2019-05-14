/**
 * @param {string} s
 * @return {number}
 * 方法：判断一个元素前面未出现过，之后也不会出现
 * 执行用时 : 124 ms, 在First Unique Character in a String的JavaScript提交中击败了88.95% 的用户
 * 内存消耗 : 37.6 MB, 在First Unique Character in a String的JavaScript提交中击败了63.06% 的用户
 */
var firstUniqChar = function (s) {
    let set = new Set();
    for (let i = 0; i < s.length; i++) {
        if (!set.has(s[i]) && i === s.lastIndexOf(s[i])) {
            return i;
        } else {
            set.add(s[i]);
        }
    }
    return -1;
};