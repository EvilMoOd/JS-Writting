# JS手写题

一些常见的JS手写题汇总，包括排序算法，数组字符串，对象函数和异步编程

## 十大排序算法

1. 冒泡排序
2. 插入排序
3. 选择排序
4. 快速排序
5. 归并排序

## 对象

1. 实现Object.create
2. 实现Object.entries
3. 实现Object.fromEntries
4. 实现Object.keys
5. 实现Object.values
6. 实现Object.is
7. 实现Object.assign
8. 实现new
9. 实现instancePf
10. 实现flat函数
11. 实现寄生组合继承
12. 判断对象层数
13. 判断对象是否环引用
14. 虚拟dom转换
15. 列表和树型结构转换

## 函数

1. 实现apply方法
2. 实现call方法
3. 实现bind方法
4. 实现防抖节流
5. 实现一个判断type的函数
6. 实现深浅克隆函数
7. 实现compose函数
8. 实现currying函数

## 数组

1. 实现forEach方法
2. 实现map方法
3. 实现filter方法
4. 实现every方法
5. 实现some方法
6. 实现reduce方法
7. 实现findIndex方法
8. 实现find方法
9. 实现fill方法
10. 实现includes方法
11. 实现join方法
12. 实现flat方法
13. 实现splice方法
14. 实现数组去重
15. 实现一个数组打乱函数
16. 产生一个不重复的随机数组-

## 字符串

1. 实现slice方法
2. 实现substr方法
3. 实现substring方法
4. 实现trim方法
5. 实现大数的加乘
6. 实现一个函数可以解析url
7. 实现模板引擎解析
8. 实现千分位格式化
9. 实现手机号的分割

## 异步编程

1. 实现promise （包括all race any allSettled resolve reject六个方法）
2. setTimeOut和setInterval的互相实现
3. 设计一个并发器
4. 设计一个发布订阅者函数
5. 设计一个异步串行函数
6. 设计一个LazyMan函数
7. 封装一个工具函数输入一个promiseA返回一个promiseB如果超过1s没返回则抛出异常如果正常则输出正确的值-
8. 请求5s未完成就终止
9. 异步任务：依次发送3次网络请求，拿到服务器数据
10. 实现网络请求超时判断，超过三秒视为超时
11. promise中断请求
12. 给定一系列的api，测量上传速度（实现的时候用的GET请求）并选择一个加载时间最短的api
13. 处理高并发, 100 条数据，带宽为 10， 跑满带宽
14. 实现 如果上一次的没请求完，之后的就无响应
15. Promise.retry 超时重新请求，并在重试一定次数依然失败时输出缓存内容

请实现一个模块 math，支持链式调用math.add(2,4).minus(3).times(2);
