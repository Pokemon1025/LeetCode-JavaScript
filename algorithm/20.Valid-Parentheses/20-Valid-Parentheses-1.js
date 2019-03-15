/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    var len = s.length / 2;
    for (var i = 0; i < len; i++) {
        s = s.replace("[]", '');
        s = s.replace("()", '');
        s = s.replace("{}", '');
    }
    return s.length > 0 ? false : true;
};