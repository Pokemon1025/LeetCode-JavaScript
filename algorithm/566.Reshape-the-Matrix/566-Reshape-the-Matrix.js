/**
 * @param {number[][]} nums
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
var matrixReshape = function (nums, r, c) {
    let rowLen = nums.length;
    let colLen = nums[0].length;
    var oneDNum = [];
    var resNum = [];
    if (rowLen * colLen != r * c) {
        return nums;
    }
    for (let i = 0; i < rowLen; i++) {
        for (let j = 0; j < colLen; j++) {
            oneDNum.push(nums[i][i, j]);
        }
    }

    for (let i = 0; i < r; i++) {
        resNum[i] = [];
        for (let j = 0; j < c; j++) {
            resNum[i][j] = oneDNum[j + i * c]
        }
    }
    return resNum;
};