# 面试题库

## Part 1

1. 实现下列功能：
    ```js
    const a = [1, 2, 3, 4, 5]
    a.multiply()
    console.log(a) // [1, 2, 3, 4, 5, 1, 4, 9, 16, 25]
    ```
    原型上新增一个方法：
    ```js
    // 不能用箭头函数，否则 this 将指向 window
    Array.prototype.mutiply = function() {
        return this.concat(this.map(i) => Math.pow(i, 2))
    }
    ```

2. JS有两种类型：主要数据类型和引用类型（对象）。有六种主要类型：String、Number、Boolean、Symbol、Null、Undefined

3. 使用 JavaScript Proxy 实现简单的数据绑定：
    ```js
    const a = {x: 1}

    const proxy = new Proxy(a, {
      get: function(target, key, receiver) {
        return Reflect.get(target, key, receiver);
      },
      set: function (target, key, value, receiver) {
        // 在这里更新 DOM
        return Reflect.set(target, key, value, receiver);
      }
    })

    proxy.x = 2 // 赋值后 DOM 也跟着改变
    ```

4. JSON.stringify 会过滤掉 Symbol 值：
    ```js
    const a = {
      x: Symbol(),
      y: 10
    }

    console.log(JSON.stringify(a)) // {"y":10}
    ```

5. [类型数组](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Typed_arrays)是用来操作二进制数据的一种类数组

6. 使函数式编程与面向对象或命令式编程不同的关键因素是什么：Currying（柯里化），point-free 函数，partial function 应用，高阶函数，纯函数，独立副作用，record 类型（联合，代数数据类型）等。

7. 在 JavaScript 和前端的上下文中，函数式编程与响应式编程有什么关系：函数式编程是关于小型编码，编写纯函数和响应式编程是大型编码，即模块之间的数据流，连接以 FP 风格编写的组件。 FRP - 功能响应式编程（ Functional Reactive Programming）是另一个不同但相关的概念。

8. 不可变数据结构（immutable data structures）解决了哪些问题：线程安全，无副作用的函数，更好的状态管理等。

9. 使用单页应用将文件上传到服务器的有哪些方法：XMLHttpRequest2（streaming），fetch（non-streaming），File API

10. 什么是 sectioning 算法：它也被称为 [HTML5 大纲算法](https://rainylog.com/post/html5-outline/)。特别是在构建具有语义结构的网站时非常重要。

11. 触摸和点击事件的发生顺序为：

    * touchstart
    * 零个或多个touchmove事件，取决于手指的移动
    * touchend
    * mousemove
    * mousedown
    * mouseup
    * click

    如果 touchstart, touchmove or touchend 被取消了(preventDefault)，则不会触发后面的其他事件

12. 动态加载 JS 时的事件处理：
    ```js
    // 绑定资源加载成功事件
    script.onreadystatechange = function( ){
    // 判断资源加载状态是否为加载成功或加载完成
      if(/^(onloaded|complete)$/. test (script.readyState)) {
        script.onreadystatechange = null;
      }
    };
    // 绑定资源加载失败事件
    script.onerror = function( ) {};
    ```

13. 实现一个 parse 函数，作用如下：
    ```js
    var object = {
    b: { c: 4 }, d: [{ e: 5 }, { e: 6 }]
    };
    console.log( parse(object, ‘b.c’) == 4 ) //true
    console.log( parse(object, ‘d[0].e’) == 5 ) //true
    console.log( parse(object, ‘d.0.e’) == 5 ) //true
    console.log( parse(object, ‘d[1].e’) == 6 ) //true
    console.log( parse(object, ‘d.1.e’) == 6 ) //true
    console.log( parse(object, ‘f’) == ‘undefined’ ) //true
    ```
    先解析传入的字符串为一维数组，然后循环该数组来取值：
    ```js
    function parse(obj, str) {
      str.replace(/\[/g, '.').replace(/\]/g, '').split('.').map((ele) => obj = obj[ele.trim()]);
      return obj || 'undefined';
    }
    ```

14. 请问何为混合应用 (Hybrid APP) ，与原生 Native 应用相比它的优劣势：[连接](https://segmentfault.com/a/1190000011154120)

## Part 2

1. [CSS重排重绘及其性能优化](https://segmentfault.com/a/1190000000490328#articleHeader10)

2. [数组扁平化](http://www.cnblogs.com/caihg/p/6519422.html)

3. [复杂判断优化](https://juejin.im/post/5bdfef86e51d453bf8051bf8)

4. 函数节流是指一定时间内js方法只跑一次。比如人的眨眼睛，就是一定时间内眨一次。这是函数节流最形象的解释。 函数防抖是指频繁触发的情况下，只有足够的空闲时间，才执行代码一次。比如生活中的坐公交，就是一定时间内，如果有人陆续刷卡上车，司机就不会开车。只有别人没刷卡了，司机才开车。

5. [观察者模式和发布订阅模式有什么不同](https://www.zhihu.com/question/23486749)

6. [Vue proxy](https://juejin.im/post/5bf3e632e51d452baa5f7375)