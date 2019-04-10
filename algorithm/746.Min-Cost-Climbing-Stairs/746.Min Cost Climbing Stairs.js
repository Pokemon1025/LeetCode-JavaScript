/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function (cost) {
    let dp1 = 0,
        dp2 = 0;

    for (let i = cost.length - 1; i >= 0; i--) {
        let dp = cost[i] + Math.min(dp1, dp2);
        dp2 = dp1;
        dp1 = dp;
    }
    return Math.min(dp1, dp2);
};