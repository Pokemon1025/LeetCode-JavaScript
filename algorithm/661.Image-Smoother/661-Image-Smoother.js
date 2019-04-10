/**
 * @param {number[][]} M
 * @return {number[][]}
 */
var imageSmoother = function (M) {
    let res = [];
    let row = M.length;
    let col = M[0].length;
    for (let i = 0; i < row; i++) {
        res[i] = [];
        for (let j = 0; j < col; j++) {
            let sum = 0;
            let count = 0;
            for (let m = -1; m < 2; m++) {
                for (let n = -1; n < 2; n++) {
                    let x = i + m;
                    let y = j + n;
                    if (isValid(x, y, row, col)) {
                        sum += M[x][y];
                        count++;
                    }
                }
            }
            res[i][j] = Math.floor(sum / count);
        }
    }
    return res;
};

function isValid(x, y, row, col) {
    return x >= 0 && x < row && y >= 0 && y < col;
}