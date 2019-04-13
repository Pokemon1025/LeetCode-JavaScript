/**
 * @param {number[][]} A
 * @return {number[][]}
 */
var transpose = function (A) {
    // 先初始化一个二维数组，然后将原数组遍历后写入新的二维数组
    const row = A.length;
    const col = A[0].length;
    const T = [];
    for (let i = 0; i < row; i++) {
        for (let j = 0; j < col; j++) {
            if (!T[j]) {
                T[j] = [];
            }
            T[j].push(A[i][j]);
        }
    }
    return T;
};