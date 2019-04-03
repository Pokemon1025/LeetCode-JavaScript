/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findPairs = function (nums, k) {
    let map = new Map();
    let count = 0;

    if (k < 0) {
        return 0;
    }

    nums.forEach(num => {
        const com1 = num - k;
        const com2 = num + k;

        if (k === 0 && map.get(num) === 1) {
            count++;
        } else if (!map.has(num)) {
            if (map.has(com1)) {
                count++;
            };
            if (map.has(com2)) {
                count++;
            };
        };
        let numCount = map.get(num) || 0;
        map.set(num, numCount + 1);
    });
    return count;
};