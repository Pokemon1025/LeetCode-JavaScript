/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
    s = s.toLowerCase();
    console.log(s)
    s = s.replace(/[^0-9a-z]/g, '');
    console.log(s)
    let i = 0;
    let j = s.length - 1;
    while (i < j) {
        if (s.charAt(i) == s.charAt(j)) {
            i++;
            j--;
        } else {
            return false;
        }
    }
    return true;
};