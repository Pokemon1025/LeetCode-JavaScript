/* 
 * @param {number[]} time
 * @return {number}
 */
var numPairsDivisibleBy60 = function (time) {
    const obj = {};
    let sum = 0;
    let len = time.length;
    for (let i = 0; i < len; i++) {
        let t = time[i] % 60;
        if (obj[t]) {
            sum += obj[t];
        }
        t = (60 - t) % 60;
        if (obj[t]) {
            obj[t]++;
        } else {
            obj[t] = 1;
        }
    }
    return sum;
};