/**
 * @param {number} N
 * @return {number}
 */
var fib = function(N) {
    let [curr, next] = [0, 1];

    while (N--) {
        [curr, next] = [next, curr + next];
    }
    return curr;
};