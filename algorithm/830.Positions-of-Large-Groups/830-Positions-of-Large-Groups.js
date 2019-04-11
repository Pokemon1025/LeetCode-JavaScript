/**
 * @param {string} S
 * @return {number[][]}
 */
var largeGroupPositions = function (S) {
    const result = [];
    const reg = /(\w)\1{2,}/g;
    let arr = [];
    while ((arr = reg.exec(S)) !== null) {
        result.push([reg.lastIndex - arr[0].length, reg.lastIndex - 1]);
    }
    return result;
};