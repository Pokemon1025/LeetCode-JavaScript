/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortArrayByParity = function (A) {
    for (let i = 0; i < A.length - 1; i++) {
        for (let j = i + 1; j <= A.length; j++) {
            if (A[i] % 2 != 0 && A[j] % 2 == 0) {
                let tmp = A[i];
                A[i] = A[j];
                A[j] = tmp;
            }
        }
    }
    return A;
};