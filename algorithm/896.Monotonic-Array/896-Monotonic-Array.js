/**
 * @param {number[]} A
 * @return {boolean}
 */
var isMonotonic = function (A) {
    let store = 0;
    let cmp = (a, b) => {
        const c = a - b;
        if (c > 0) return 1;
        if (c < 0) return -1;
        return 0;
    }
    for (let i = 0; i < A.length - 1; i++) {
        let c = cmp(A[i], A[i + 1]);
        if (c) {
            if (store != 0 && c != store) {
                return false;
            }
            store = c;
        }
    }
    return true;
};