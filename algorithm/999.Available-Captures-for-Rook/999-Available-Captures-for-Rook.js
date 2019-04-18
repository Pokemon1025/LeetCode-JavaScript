/**
 * @param {character[][]} board
 * @return {number}
 */
var numRookCaptures = function (board) {
    let count = 0;
    for (let i = 0; i < 8; i++) {
        let xState = 0;
        let yState = 0;
        for (let j = 0; j < 8; j++) {

            if (board[i][j] === 'p') {
                if (xState === 3) {
                    count++;
                }
                xState = 1;
            }
            if (board[i][j] === 'B') {
                xState = 2;
            }
            if (board[i][j] === 'R') {
                if (xState === 1) {
                    count++;
                }
                xState = 3;
            }
        }
        for (let m = 0; m < 8; m++) {
            if (board[m][i] === 'p') {
                if (yState === 3) {
                    count++;
                }
                yState = 1;
            }
            if (board[m][i] === 'B') {
                yState = 2;
            }
            if (board[m][i] === 'R') {
                if (yState === 1) {
                    count++;
                }
                yState = 3;
            }
        }
    }
    return count;
};