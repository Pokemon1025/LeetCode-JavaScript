/**
 * @param {number[][]} A
 * @return {number[][]}
 */
var flipAndInvertImage = function (A) {
    let start = 0,
        end = A.length - 1;
    // 按列遍历
    for (let i = 0; i < A.length; i++) {
        // 按行交换
        while (start < end) {
            let temp = A[i][start];
            A[i][start] = A[i][end];
            A[i][end] = temp;
            end--;
            start++;
        }
        start = 0;
        end = A.length - 1;
        // 按行取反
        for (let j = 0; j < A.length; j++) {
            A[i][j] = 1 ^ A[i][j];
        }
    }
    return A;
};