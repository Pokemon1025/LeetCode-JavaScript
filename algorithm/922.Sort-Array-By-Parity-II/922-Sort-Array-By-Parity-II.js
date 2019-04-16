/*
 * @param {number[]} A
 * @return {number[]}
 */
var sortArrayByParityII = function (A) {
    if (!A) return null;

    let indexX = 0,
        indexY = 1;
    let res = [];

    A.forEach(item => {
        if (item % 2 == 0) {
            res[indexX] = item;
            indexX += 2;
        } else {
            res[indexY] = item;
            indexY += 2;
        }
        
    });
    return res;
};