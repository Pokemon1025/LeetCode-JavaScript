#### 解题关键

运用位运算符`&`解题

#### 解题思路

判断`n&(n-1)`是不是为0，若n为2的幂次方，则**其二进制只有一位是1其余都是0**，而n-1的二进制把原本最低位为1的那位变为0，之后位填1，与n做位运算结果为0，如果不为零说明n不是2的幂次方。

图解：

* 2的三次方 - 8的二进制表示

![2的三次方 - 8的二进制表示](https://zhuyue-1257159284.cos.ap-chengdu.myqcloud.com/LeetCode231-1.png?q-sign-algorithm=sha1&q-ak=AKIDCQYGpV59vjVASnoZRMwLEBWmJkHoAzwb&q-sign-time=1554530294;1554531194&q-key-time=1554530294;1554531194&q-header-list=&q-url-param-list=&q-signature=1a6701543ebe01a8fed35a0131885a4e99b76086)

* 7的二进制表示

![7的二进制表示](https://zhuyue-1257159284.cos.ap-chengdu.myqcloud.com/LeetCode231-2.png?q-sign-algorithm=sha1&q-ak=AKIDCQYGpV59vjVASnoZRMwLEBWmJkHoAzwb&q-sign-time=1554529618;1554530518&q-key-time=1554529618;1554530518&q-header-list=&q-url-param-list=&q-signature=b5420dfae606b4f1a8662711d0b540205a9bd53d)



> `n&(n-1)`作用：将n的二进制中的最低位为1的改为0。如：n = 10100，(n-1) = 10011 则 n&(n-1) = 10000。

所以，对于2的幂次方的数，二进制表示只有一位是1，将这一位改为0之后，结果必为0。

#### 注意

> 按位与&：对于每一个比特位，只有两个操作数相应的比特位都是1时，结果才为1，否则为0。

真值表：

| a    | b    | a&b  |
| ---- | ---- | ---- |
| 0    | 0    | 0    |
| 1    | 0    | 0    |
| 0    | 1    | 0    |
| 1    | 1    | 1    |

