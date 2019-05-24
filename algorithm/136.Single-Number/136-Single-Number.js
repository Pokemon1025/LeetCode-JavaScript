/**
 * @param {number[]} nums
 * @return {number}
 * 方法：异或运算符特性
 * 相同的数异或为0，任何数于0异或为任何数
 * 执行用时 : 76 ms, 在Single Number的JavaScript提交中击败了99.16% 的用户
 * 内存消耗 : 37.1 MB, 在Single Number的JavaScript提交中击败了25.60% 的用户
 */
var singleNumber = function (nums) {
    let res = 0;
    for (num of nums) {
        res = res ^ num;
    }
    return res;
};
console.log(singleNumber([2,2,1]))