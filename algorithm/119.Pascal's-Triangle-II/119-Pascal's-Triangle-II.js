/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function (n) {
    if (n <= 0) {
        return false;
    } 
    console.log(n&(n-1))

    return (!(n & (n - 1)));
};
console.log(isPowerOfTwo(5))