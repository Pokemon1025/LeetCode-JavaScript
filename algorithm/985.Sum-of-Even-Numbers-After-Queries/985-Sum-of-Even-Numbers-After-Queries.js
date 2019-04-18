/**
 * @param {number[]} A
 * @param {number[][]} queries
 * @return {number[]}
 * 求出初始数组偶数和
 * 遍历查询数组，如果 A[index] 是偶数，就从 sum 中减去它
 * 把 val 加到 A[index] 上
 * 判断更新的 A[index] 是不是偶数
 * 将第 i 次计算的偶数和加入 res[i]
 */
var sumEvenAfterQueries = function (A, queries) {
    let sum = 0;
    let res = [];

    sum = A.reduce((acc, cur) => {
        return cur % 2 === 0 ? (acc + cur) : acc;
    }, 0);

    for (let i = 0; i < queries.length; ++i) {
        let val = queries[i][0],
            index = queries[i][1];
        if (A[index] % 2 == 0) {
            sum -= A[index];
        }
        A[index] += val;
        if (A[index] % 2 == 0) {
            sum += A[index];
        }
        res[i] = sum;
    }
    return res;
};