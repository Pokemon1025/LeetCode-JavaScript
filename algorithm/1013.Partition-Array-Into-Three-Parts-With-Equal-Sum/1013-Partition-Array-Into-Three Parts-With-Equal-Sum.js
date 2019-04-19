/**
 * @param {number[]} A
 * @return {boolean}
 */
var canThreePartsEqualSum = function (A) {
    let sum = A.reduce((a, b) => a + b);
    if (sum % 3 !== 0) {
        return false;
    }
    let avg = sum / 3;

    let i = 0;
    let j = A.length - 1;

    let res = false;
    let leftSum = 0;
    let rigthSum = 0;

    while (i < j) {
        if (leftSum !== avg) {
            leftSum += A[i];
            i++;
        }
        if (rigthSum !== avg) {
            rigthSum += A[j];
            j--;
        }
        if (leftSum == avg && rigthSum == avg) {
            res = true;
            break;
        }
    }
    return res;
};