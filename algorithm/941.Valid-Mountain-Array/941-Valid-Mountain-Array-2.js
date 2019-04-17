/**
 * @param {number[]} A
 * @return {boolean}
 * 
 * 可以设置两个标志符，分别表示上升和下降。
 * 在上升序列中将up置为true，若发现down是true，那么不是山脉数组
 * 同理，如果在下降序列中将down置为true，若发现up是true，也排除
 * 最后，取两个标志符交集
 * 
 * 
 */
var validMountainArray = function (A) {
    let up = false,
        down = false;

    for (let i = 0; i < A.length - 1; i++) {
        if (A[i] - A[i + 1] < 0) {
            up = true;
            if (down) {
                return false;
            }
        } else if (A[i] - A[i + 1] > 0) {
            down = true;
            if (!up) {
                return false;
            }
        } else {
            return false;
        }
    }
    return up && down;
};