/**
 * @param {string} s
 * @return {string}
 * 执行用时 : 136 ms, 在Reverse Vowels of a String的JavaScript提交中击败了84.67% 的用户
 * 内存消耗 : 39.2 MB, 在Reverse Vowels of a String的JavaScript提交中击败了47.37% 的用户
 */
var reverseVowels = function (s) {
    s = s.split('');
    const set = new Set('aeiouAEIOU');
    // 双指针
    let start = 0;
    let end = s.length - 1;
    while (start < end) {
        if (!set.has(s[start]) && !set.has(s[end])) {
            start++;
            end--;
        } else if (!set.has(s[start])) {
            start++;
        } else if (!set.has(s[end])) {
            end--;
        } else {
            [s[start], s[end]] = [s[end], s[start]];
            start++;
            end--;
        }
    }
    return s.join('');
}