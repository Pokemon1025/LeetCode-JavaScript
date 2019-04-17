/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortedSquares = function (A) {
    let len = A.length;
    let j = 0;
    // 找到第一个正数索引
    while (j < len && A[j] < 0) {
        j++;
    }
    let i = j - 1; // 最后一个负数索引
    let res = [];
    let k = 0;

    while (i >= 0 && j < len) {
        if (Math.pow(A[i], 2) < Math.pow(A[j], 2)) {
            res[k++] = Math.pow(A[i], 2);
            i--;
        } else {
            res[k++] = Math.pow(A[j], 2);
            j++;
        }
    }
    // 两边数量不一致，只有一边有剩余的数
    while (i >= 0) {
        res[k++] = A[i] * A[i];
        i--
    }
    while (j < len) {
        res[k++] = A[j] * A[j];
        j++
    }
    return res;
};