/**
 * @param {number[][]} matrix
 * @return {boolean}
 */
var isToeplitzMatrix = function (matrix) {
    // 检查每个值是否等于它的右下角的值
    for(let i = 0;i < matrix.length - 1;i++){
        for(let j = 0;j<matrix[i].length - 1;j++){
            if(matrix[i][j] !== matrix[i+1][j+1]){
                return false;
            }            
        }
    }
    return true;
};