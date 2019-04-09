/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
const FLOWER = 1;
const SPACE = 0;

const canPlaceFlowers = (flowerbed, n) => {
    let count = 0;
    for (let i = 0; i < flowerbed.length; i++) {
        if (flowerbed[i] !== FLOWER && flowerbed[i + 1] !== FLOWER && flowerbed[i - 1] !== FLOWER) {
            count++;
            i++;
            if (count >= n) {
                break;
            }
        }
    }
    return count >= n;
};