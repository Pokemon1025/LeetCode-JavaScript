/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 * 执行用时 : 148 ms, 在Assign Cookies的JavaScript提交中击败了90.78% 的用户
 * 内存消耗 : 37.4 MB, 在Assign Cookies的JavaScript提交中击败了50.00% 的用户
 * 贪心算法：用最小的饼干满足胃口最小的孩子
 */
var findContentChildren = function (g, s) {
    let child = 0,
        cookie = 0;
    g.sort((a, b) => a - b);
    s.sort((a, b) => a - b);
    while (child < g.length && cookie < s.length) {
        if (s[cookie] >= g[child]) {
            child++;
        }
        cookie++;
    }
    return child;
};