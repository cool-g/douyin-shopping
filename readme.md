# 抖音订单管理组件开发
    
## 新 get 知识点

- react 中input绑定enter事件 (无onsubmit按钮情况)  
    - 在js里绑定onkeypress,onkeydown事件，判断e.keycode === 13即可  

    - 在React中不直接操作DOM，使用两种方式解决：
        1. 通过 e.nativeEvent 来获取  
            ```js
            onKeyPress={handleEnterKey}  

            const handleEnterKey = (e) => {
                if(e.nativeEvent.keyCode === 13){
                setQuery(e.target.value);
                }
            }
            ```
        
        2. 通过addEventListener注册事件 (慎用)

- css 实现文字超出显示省略号  
    1. 两行：
        ```css
            overflow:hidden; 
            text-overflow:ellipsis;
            display:-webkit-box; 
            -webkit-box-orient:vertical;
            -webkit-line-clamp:2; 
        ```
    
    2. 单行  
        ```css
            overflow:hidden;
            text-overflow:ellipsis; 
            white-space:nowrap;
        ```


## 时间线
----
更新于 2022-6-25

- 完善了 css ，适应移动端布局。  
    添加public文件夹适配手机宽度，将所有px 改为 rem   
    这里用到插件 `px to rem & rpx & vw (cssrem)`  可以一件转换  

- 配置了vite alias，引入文件简便，可读性更强。

- 增加删除提示  
    之前的删除没有提示，于是我在这里完善删除功能的交互。  

- 遇到的问题：  
    1. 在完善代码时发现文件保存了但是项目页面没用改变，需要每次重新npm run dev，也就是react热更新失效     
    - 解决方案：文件目录下的文件要规范命名，不用使用大写。我改成小写之后问题解决了。  

- 实现了下拉刷新效果，并重新拉取数据。

- 增加路由，实现页面跳转



----
更新于 2022-7-4
- 新增提交订单页面 
难点：计算价格，地址选择等


主要做一些优化工作：  
- 组件性能优化，给每个组件添加memo。组件数据不变的情况下不会重新更新。

- 添加全局风格定义文件: global-style.js。将项目风格颜色等定义成变量添加到css中，当风格改变时，可以统一更改。

- 配置路由，将路由配置添加到routes文件夹，以声明的方式添加到App

- 将非主页面的文件配置成懒加载,`lazy`，提升页面打开速度，加上 `Suspense`，在页面懒加载时显示指定文字  
    ```js
        <Suspense fallback={<div>loading...</div>}>
            <RoutesConfig />
         </Suspense>
    ````

- 添加上拉刷新、上拉加载。使用antd-mobile组件  

- 为图片设置懒加载 react-lazyload。页面范围外的图片显示定义的默认图片，避免首次打开页面的时候进行太多请求导致网页慢


----
更新于 2022-7-10
- 遇到问题:  
    使用redux做复选框的时候，每次选中/取消选中时，state中的数据显示已经改变，但是页面不改变。  
    - 解决：不要直接改变state，使用Object.assign({},state)新建一个副本。    
    - 原因：reducer就是一个纯函数，接收旧的state和action，返回新的 state。保持reducer纯净非常重要。 Store 会把两个参数传入reducer: 当前的 state和 action，所以不能直接修改state,redux会比较新旧state的值，直接修改state会导致store内部的也发生改变，那么新旧state也就没有发生变化。页面就不会重新渲染。   
 
