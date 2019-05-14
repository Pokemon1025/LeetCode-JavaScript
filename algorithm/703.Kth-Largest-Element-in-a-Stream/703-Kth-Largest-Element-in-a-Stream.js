/**
 * @param {number} k
 * @param {number[]} nums
 * 方法：维护一个大小为K的小顶堆
 * 时间复杂度：O(n)
 */
var KthLargest = function (k, nums) {
    this.k = k;
    this.nums = nums;
    this.heap = [];
    nums.forEach((item) => {
        this.heapInsert(item);
    })
}
/**
 * @param {number} val
 * @return {number}
 */
KthLargest.prototype.add = function (val) {
    this.nums.push(val);
    this.heapInsert(val);
    if (this.nums.length < this.k) return;
    return this.heap[0];
}

KthLargest.prototype.heapInsert = function (val) {
    this.heap.push(val);
    let currentIndex = this.heap.length - 1;
    let parentIndex = Math.floor((currentIndex - 1) / 2);
    if (this.heap.length <= this.k) {
        while (parentIndex >= 0 && (this.heap[currentIndex] < this.heap[parentIndex])) {
            [this.heap[currentIndex], this.heap[parentIndex]] = [this.heap[parentIndex], this.heap[currentIndex]]
            currentIndex = parentIndex;
            parentIndex = Math.floor((currentIndex - 1) / 2);
        }
    } else {
        if (val > this.heap[0]) {
            [this.heap[0], this.heap[currentIndex]] = [this.heap[currentIndex], this.heap[0]];
            let root = 0,
                left = 2 * root + 1,
                right = 2 * root + 2,
                smaller = left;
            while (left < this.heap.length - 1) {
                if (right < this.heap.length - 1) {
                    smaller = this.heap[left] < this.heap[right] ? left : right;
                }
                smaller = this.heap[root] < this.heap[smaller] ? root : smaller;
                if (smaller === root) {
                    break;
                }
                [this.heap[root], this.heap[smaller]] = [this.heap[smaller], this.heap[root]];
                root = smaller;
                left = 2 * root + 1;
                right = 2 * root + 2;
            }

        }
        this.heap.pop();
    }
}
/** 
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */