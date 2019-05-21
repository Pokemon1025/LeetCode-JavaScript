/*
 * param {string} s
 * @return {string}
 * 方法：中心拓展算法
 * 执行用时 : 132 ms, 在Longest Palindromic Substring的JavaScript提交中击败了88.08% 的用户
 * 内存消耗 : 35.1 MB, 在Longest Palindromic Substring的JavaScript提交中击败了96.98% 的用户
 */
var longestPalindrome = function (s) {
    if (!s) {
        return '';
    }
    let start = 0, // 记录回文串起始位置
        end = 0; // 记录回文串终止位置
    for (let i = 0, l = s.length; i < l; i++) {
        let len1 = expandAroundCenter(s, i, i); // 以一个元素为中心
        let len2 = expandAroundCenter(s, i, i + 1); // 以两个元素为中心
        let len = Math.max(len1, len2);
        if (len > end - start) {
            start = i - Math.floor((len - 1) / 2);
            end = i + Math.floor(len / 2);
        }
    }
    return s.substring(start, end + 1);
};

let expandAroundCenter = function (s, left, right) {
    while (left >= 0 && right < s.length && s[left] === s[right]) {
        left--;
        right++;
    }
    return right - left - 1;
};