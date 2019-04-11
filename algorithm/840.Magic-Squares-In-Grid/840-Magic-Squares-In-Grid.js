var numMagicSquaresInside = function (grid) {
    let row = grid.length,
        column = grid[0].length,
        res = 0;

    // 判断对角为 [i-2][j-2] ~ [i][j] 的3阶矩阵是否为幻方
    for (let i = 2; i < row; i++) {
        for (let j = 2; j < column; j++) {
            // 若中间数不为5，跳过
            if (grid[i - 1][j - 1] != 5) {
                continue;
            }
            // 若行、列、斜线存在一个和不为15，跳过
            if ((grid[i - 2][j - 2] + grid[i - 2][j - 1] + grid[i - 2][j] != 15) ||
                (grid[i - 1][j - 2] + grid[i - 1][j] != 10) ||
                (grid[i][j - 2] + grid[i][j - 1] + grid[i][j] != 15) ||
                (grid[i - 2][j - 2] + grid[i - 1][j - 2] + grid[i][j - 2] != 15) ||
                (grid[i - 2][j - 1] + grid[i][j - 1] != 10) ||
                (grid[i - 2][j] + grid[i - 1][j] + grid[i][j] != 15) ||
                (grid[i - 2][j - 2] + grid[i][j] != 10) ||
                (grid[i - 2][j] + grid[i][j - 2] != 10)
            ) {
                continue;
            }
            // 若存在小于1的数直接跳过
            if (grid[i - 2][j - 2] < 1 || grid[i - 2][j - 1] < 1 || grid[i - 2][j] < 1 ||
                grid[i - 1][j - 2] < 1 || grid[i - 1][j] < 1 ||
                grid[i][j - 2] < 1 || grid[i][j - 1] < 1 || grid[i][j] < 1) {
                continue;
            }
            // 若全为5
            if (grid[i - 2][j - 2] == 5) {
                continue;
            }
            // 余下情况，满足三阶幻方
            res++;
        }
    }
    return res;
};