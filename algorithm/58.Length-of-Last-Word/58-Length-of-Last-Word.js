/**
 * @param {string} s
 * @return {number}
 * 执行用时 : 88 ms, 在Length of Last Word的JavaScript提交中击败了91.86% 的用户
 * 内存消耗 : 33.7 MB, 在Length of Last Word的JavaScript提交中击败了41.83% 的用户
 */
var lengthOfLastWord = function(s) {
    s = s.trim();
    return s.length - s.lastIndexOf(' ') - 1;
};