/**
 * @param {number[]} A
 * @return {boolean}
 */
var validMountainArray = function (A) {
    // 找出数组中最大值，和最大值的索引
    const max = Math.max(...A);
    const index = A.indexOf(max);
    // 如果最大值的位置在数组的头部或尾部，则一定不是山脉数组
    if (index === 0 || index === A.length - 1) return false;
    // 以最大值为索引分别向前、向后遍历
    for (let i = 0; i < index; i++) {
        if (A[i] >= A[i + 1]) return false;
    }
    for (let i = index; i < A.length - 1; i++) {
        if (A[i] <= A[i + 1]) return false;
    }
    // 都符合条件，则为山脉数组
    return true;
};