/**
 * @param {number[]} seats
 * @return {number}
 */
var maxDistToClosest = function (seats) {
    let max = 0;
    let start = -1,
        end = -1;
    for (let i = 0; i < seats.length; i++) {
        end++;
        if (seats[i]) {
            if (start === -1) {
                max = Math.max(end - start - 1, max);
            } else {
                max = Math.max(Math.floor((end - start) / 2), max);
            }
            start = i;
        }
    }
    return Math.max(end - start, max);
};
