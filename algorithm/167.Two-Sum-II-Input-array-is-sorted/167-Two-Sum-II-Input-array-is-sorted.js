/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (numbers, target) {
    let idx1 = 1,
        idx2 = numbers.length + 1;

    while (idx1 < idx2) {
        if (numbers[idx1 - 1] + numbers[idx2 - 1] === target) {
            let res = [idx1, idx2];
            return res;
        } else if (numbers[idx1 - 1] + numbers[idx2 - 1] < target) {
            idx1++;
        } else {
            idx2--;
        }
    }
};