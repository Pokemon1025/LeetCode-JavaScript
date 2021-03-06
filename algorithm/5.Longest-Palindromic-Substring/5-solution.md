### 图解最长回文子串 - 中心拓展算法

#### 方法一：中心拓展算法

观察回文数可以找到规律，回文数可以找到一个中心，其两侧互为镜像。假设`n`是输入字符串的长度，回文可以从中间展开，回文的中心可取的值是`2n-1`个。

#### ![回文可取的值](https://zhuyue-1257159284.cos.ap-chengdu.myqcloud.com/LeetCode/LeetCode5.png?q-sign-algorithm=sha1&q-ak=AKIDCQYGpV59vjVASnoZRMwLEBWmJkHoAzwb&q-sign-time=1558413989;1558414889&q-key-time=1558413989;1558414889&q-header-list=&q-url-param-list=&q-signature=2d6ada112359610ad89fa31d32a30ce6afed6af8)

所以偶数个元素时以两个元素为中心，奇数元素时以一个元素为中心，以中心元素为基准向两侧拓展。若左右指针相等，将左指针向左移动一位，将右指针向右移动一位，返回判定的回文数组长度为右指针 - 左指针 - 1，递归得出最长回文数组长度len，如果len大于终止位置减去起始位置更新起终点位置。最后截取回文字符串。

##### 复杂度分析

- 时间复杂度：*O*(*n*2)，围绕中心来扩展回文会耗去*O*(*n*) 的时间，所以总的复杂度为 *O*(*n*2)
- 空间复杂度：*O*(1)
