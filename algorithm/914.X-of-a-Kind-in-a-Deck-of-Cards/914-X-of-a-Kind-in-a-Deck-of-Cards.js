/**
 * @param {number[]} deck
 * @return {boolean}
 */
var hasGroupsSizeX = function (deck) {
    const counter = {};
    deck.forEach(card => {
        if (!counter[card]) {
            counter[card] = 0;
        }
        counter[card]++;
    });
    // 求卡片数量的最小值
    const counts = Object.values(counter);
    const min = Math.min.apply(null, counts);
    if (min < 2) {
        return false;
    }
    // 判断是否存在公约数大于等于2 
    for (let j = 2; j <= min; j++) {
        let flag = true;
        for (let i = 0; i < counts.length; i++) {
            if (counts[i] % j !== 0) {
                flag = false;
                break;
            }
        }
        if (flag) {
            return true;
        }
    }

    return false;
};