#### 解题关键

借助**哨兵**和**递归**实现归并排序，比较生成有序链表

#### 解题思路

方法一：

1. 如果 l1 为空，直接返回 l2 ，反之也如此
2. 如果 l1 的值小于 l2 的值，就将值加入到有序表中，l1 哨兵位置向后 +1，反之也如此
3. 递归直到归并排序完成

#### 注意

1. 直接比较节点生成有序链表要优于拷贝数组排序后转换为有序表
2. 本题用 JavaScript 刷的话，要注意 l1 l2 默认是数组



