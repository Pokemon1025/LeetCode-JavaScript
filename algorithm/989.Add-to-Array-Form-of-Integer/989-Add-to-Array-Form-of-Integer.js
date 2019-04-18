/**
 * @param {number[]} A
 * @param {number} K
 * @return {number[]}
 * 方法：逐位相加法
 * 将初始数组反转
 * 将整个加数加入数组表示的数的最低位
 * 将计算得出的最后一位留在 A[i]
 * 保留剩余位重复这个过程
 */
var addToArrayForm = function (A, K) {
    let i = 0;
    A.reverse();
    while (K) {
        K += (A[i] || 0);
        A[i] = K % 10;
        K = ~~(K / 10);
        i++;
    }
    return A.reverse();
};