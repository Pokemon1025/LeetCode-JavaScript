/**
 * @param {number[]} A
 * @return {boolean[]}
 * 执行用时 : 132 ms, 在Binary Prefix Divisible By 5的JavaScript提交中击败了52.73% 的用户
 * 内存消耗 : 37.7 MB, 在Binary Prefix Divisible By 5的JavaScript提交中击败了86.36% 的用户
 * 方法：
 * 迭代映射，每次将操作数向左移动一位，并加上对应的 value 值
 */
var prefixesDivBy5 = function (A) {
    let num = 0;
    return A.map((v) => {
        // 按照正常的累加思路，必定导致数据溢出，所以这里做取余运算
        num = ((num << 1) + v) % 5;
        return num % 5 === 0;
    })
};