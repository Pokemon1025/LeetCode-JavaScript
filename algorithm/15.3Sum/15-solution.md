#### 解题关键

控制时间复杂度，找出所有满足条件且不重复的三元组，注意避免重复。

#### 解题思路

**方法一：Brute Force - 三重循环**

此方法虽然能得到正确的答案，但是会导致time limit exceeded而编译不通过。

时间复杂度：O(n^3)

**方法二：二重循环**

使用二重循环固定两个数，通过查找的方式匹配第三个数。

此方法仍然会导致time limit exceeded。

时间复杂度：O(n^2logn)

**方法三：K-Sum**

1. 通过一个外层的循环分别固定数组中的每一个数字，将3Sum问题变成多个2Sum问题
2. 检测是否有重复

此方法仍然会导致time limit exceeded。

**方法四：操作指针 (最优)**

1. 判断数组的长度是否小于3
2. 将数组sort排序 

3. 定义三个指针 i，j，k。遍历i，那么这个问题就可以转化为在i之后的数组中寻找`nums[i]+nums[j]+nums[k]===0`这个问题，将3Sum问题转变为2Sum问题。

#### 注意

> 方法四中内层循环中的两个指针j，k可能会碰到相同的数字进而导致重复。所以，每次外层循环的时候，都要检测`nums[i]和nums[i - 1]` 是否相等，如果相等的话，很可能会造成重复；在内层循环中，当找到目标数字的时候，需要进行`j++`和`k--`来跳过临近的相同数字。内层循环也要添加该检测重复的机制。

