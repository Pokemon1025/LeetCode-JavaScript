/**
 * @param {string} s
 * @return {string}
 * 方法：遍历保存元音和地址，反转元音所在的数组
 * 遍历元音数组，将元音的值替换原数组对应位置的值，将数组转为字符串
 * 执行用时 : 132 ms, 在Reverse Vowels of a String的JavaScript提交中击败了87.33% 的用户
 * 内存消耗 : 38.7 MB, 在Reverse Vowels of a String的JavaScript提交中击败了57.89% 的用户
 */

var reverseVowels = function (s) {
    const set = new Set('aeiouAEIOU');
    s = s.split('')
    let val = [],
        idxs = [];
    s.forEach((char, idx) => {
        if (set.has(char)) {
            idxs.push(idx);
            val.push(char);
        }
    })
    if (val.length) {
        val.reverse();
        val.forEach((char, idx) => {
            s[idxs[idx]] = char;
        })
    }
    return s.join('');
};