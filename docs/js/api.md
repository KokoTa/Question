# API

## encodeURIComponent

[encodeURIComponent](https://www.cnblogs.com/season-huang/p/3439277.html) 用于路由编码

## Element.closest

[Element.closest](https://developer.mozilla.org/zh-CN/docs/Web/API/Element/closest)

## apply

[关于apply的某用法](https://stackoverflow.com/questions/39906893/how-does-function-apply-bind-work-in-the-following-code)

## parseInt

parseInt 用于其他进制转十进制，第二个参数来指定这个原始值的基数：

```js
parseInt(1011101, 2) // 93

parseInt(1011101, 10) // 1011101

parseInt(12, 2) // 1

parseInt(12, 10) // 12

parseInt(12, 1) // NaN

parseInt(12, 0) // 12
```

十进制转其他进制：

```js
prseInt(数).toString(进制)
```

## target/currentTarget

事件对象中的 target 指向点击时的元素，currentTarget 指向绑定事件的元素

## Intersection Observer API

通过 [Intersection Observer API](http://www.ruanyifeng.com/blog/2016/11/intersectionobserver_api.html) 监听元素和其他元素交接，可以完成懒加载功能 [连接](https://www.zhihu.com/question/67328049)

## 浏览器路由的三种方式

1. 页面路由，页面重新加载，会有历史记录：

    ```js
    window.location.href = "http://www.baicu.com"
    history.back()
    ```

2. hash路由，页面不会重新加载，会有历史纪录：

    ```js
    window.location.href = "#hash"
    window.onhashchange = () => {
      console.log(window.location.hash)
    }

3. h5路由，页面不会重新加载，会有历史记录：

    ```js
    history.pushState('title', 'Title', '/title')
    history.replaceState('title', 'Title', '/title')
    window.onpopstate = () => {
      console.log(window.location.href)
      console.log(window.location.pathname)
      console.log(window.location.hash)
      console.log(window.location.search)
    }
    ```