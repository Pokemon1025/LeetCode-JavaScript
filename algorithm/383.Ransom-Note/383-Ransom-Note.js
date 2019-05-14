/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 * 执行用时 : 100 ms, 在Ransom Note的JavaScript提交中击败了99.60% 的用户
 * 内存消耗 : 36.8 MB, 在Ransom Note的JavaScript提交中击败了73.16% 的用户
 * 方法：indexOf
 */
var canConstruct = function (ransomNote, magazine) {
    let strArr = magazine.split('');
    let index = -1;
    for (let i = 0, len = ransomNote.length; i < len; i++) {
        let str = ransomNote[i];
        if ((index = strArr.indexOf(str)) > -1) {
            strArr[index] = '';
        } else {
            return false;
        }
    }
    return true;
}