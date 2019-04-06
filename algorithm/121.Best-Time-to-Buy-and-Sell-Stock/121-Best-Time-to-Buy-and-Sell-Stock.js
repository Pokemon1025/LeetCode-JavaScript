/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    let maxPrice = 0;
    let minPrice = Infinity;
    let diff = 0;

    for (let i = 0; i < prices.length; i++) {
        let price = prices[i];
        if (minPrice > price) {
            minPrice = price;
        }
        diff = price - minPrice;
        if (maxPrice < diff) {
            maxPrice = diff;
        }
    }

    return maxPrice;
};