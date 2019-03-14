/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
    let charString = s.replace(/[^A-Z0-9a-z]/g, '').toLowerCase();
    let charReversed = charString.split('').reverse().join('');

    if (!charString || charString.length < 2) return true;
    if (charString !== charReversed) return false;

    return true;
};