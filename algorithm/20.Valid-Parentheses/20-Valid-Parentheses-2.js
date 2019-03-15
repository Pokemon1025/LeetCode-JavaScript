/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    let stack = [];
    let len = s.length;
    let open = {
        '{': '}',
        '[': ']',
        '(': ')',
    }
    let closed = {
        '}': true,
        ']': true,
        ')': true,
    }
    for (let i = 0; i < len; i++) {
        let curr = s[i];
        if (open[curr]) {
            stack.push(curr);
        } else if (closed[curr]) {
            let last = stack.pop();
            if (open[last] !== curr) {
                return false;
            }
        }
    }
    return stack.length == 0;
};