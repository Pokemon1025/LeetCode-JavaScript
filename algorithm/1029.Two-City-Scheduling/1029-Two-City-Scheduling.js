/**
 * @param {number[][]} costs
 * @return {number}
 */
var twoCitySchedCost = function (costs) {
    let diff = [];
    let ans = 0;
    for (let i = 0; i < costs.length; i++) {
        diff.push(costs[i][1] - costs[i][0]);
        ans += costs[i][0];
    }
    diff.sort((a, b) => (a - b));
    let n = diff.length / 2;
    for (let i = 0; i < n;i++) {
        ans += diff[i];
    }
    return ans;
};