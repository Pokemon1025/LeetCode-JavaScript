/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
    let target = digits.reverse();
        target[0] += 1;
    for (let i = 0; i < target.length; i++) {
        if (target[i] > 9) {
            if (target[i + 1]) {
                target[i + 1] += 1;
            } else {
                target.push(1);
            }
            target[i] = 0;
        }
    }
    return target.reverse();
};