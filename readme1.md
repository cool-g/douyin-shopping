---
theme: cyanosis
highlight: a11y-dark
---
## 前言
前段时间笔者在掘金上分享了一篇 [仿抖音-我的订单-页面组件](https://juejin.cn/post/7112254955632721957)的文章，很多朋友帮我指正了不够完善的地方。正好最近学习了`redux`，于是笔者在上个组件的基础上进行完善并增加新页面，使用**React+Redux**打造了一个较为完整的抖音商城项目。  

笔者的上篇文章已经分享过了如何设计一个组件(有兴趣的朋友可以去看看哦)

所以在这篇文章中，笔者将会分享如何完整的实现一个**React+Redux**项目，主要介绍如何使用`redux`实现数据流管理，以及项目优化和笔者遇到的坑。希望对你有帮助~


## 技术栈简介
-   `react v18.0.0`全家桶(react,react-router) : 用于构建用户界面的 **MVVM 框架**
-   `redux`: 著名JavaScript**状态管理容器**
-   `redux-thunk`: 处理异步逻辑的redux中间件
-   `styled-components` 称之为**css in js**，现在正在成为在 React 中设计组件样式的新方法。
-   `axios` 它是一个基于 promise 的网络请求库，用于获取后端数据，是前端常用的数据请求工具；
-   `react-lazyload`: react懒加载库
-   `better-scroll`: 提升移动端滑动体验的知名库
-   `antd-mobile`：蚂蚁金融团队推出开源组件库。
-   `react-transition-group`：css动画过度库

## 项目展示

我们先来展示一下最后的实现效果吧：

- **首页效果：** 

<img src='https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/7f66aa3f60c44ff78d0e38106ea5df9f~tplv-k3u1fbpfcp-watermark.image?' width="55%">

---

- **我的订单页面效果**

<img src='https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/16c80576899346dbb17f4d0984694b9b~tplv-k3u1fbpfcp-watermark.image?' width="55%">

---

- **购物车+订单提交页面效果**

<img src='https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/8f008b9fd08a44b6820c388d43395f12~tplv-k3u1fbpfcp-watermark.image?' width="55%">



## 项目实现

### 项目结构
```js
├─ public                  // 移动端自适应配置            
├─ src
    ├─api                   // 网路请求及相关配置
       config.js            // 接口配置文件
       request.js           // 接口请求文件
    ├─assets                // 字体配置及全局样式
    ├─components            // 可复用的 UI 组件
        ├─common            // 通用组件
    ├─pages                 // 页面级别组件
        home                // 首页组件
        myorder             // 我的订单页面组件
        place-order         // 提交订单页面组件
        shopping-cart       // 购物车页面组件
    ├─routes                // 路由配置文件
    ├─utils                 // 工具函数
    └─store                 // redux 相关文件
App.jsx                     // 根组件
main.jsx                    // 入口文件
```

### 路由配置
本项目使用 react-router-config 对路由进行配置。 
这里有一个可以优化的地方：**使用页面懒加载 lazy**，这样页面只会在需要打开它时才进行加载，不会在加载根组件时同时加载。  

注意：使用`lazy懒加载`后，要记得在路由最外层加上 `Suspense` 组件。它的作用是**划分页面中需要并发渲染的部分**  
 - routes/index.js 具体实现代码如下：
```js
import React,{ lazy,Suspense } from 'react'
import { Routes, Route,Navigate } from 'react-router-dom'
import Home from '@/pages/home'
const Myorder = lazy(()=>import('@/pages/myorder'))
const PlaceOrder = lazy(()=>import('@/pages/place-order'))
const ShoppingCart = lazy(() =>import('@/pages/shopping-cart'))

export default function RoutesConfig() {
  return (
    <Suspense fallback={<div>loading...</div>}>
        <Routes>
            <Route path="/" element={<Navigate to="/home" replace={true}/>}></Route>
            <Route path="/home" element={<Home/>}></Route>
            <Route path="/myorder" element={<Myorder/>}></Route>
            <Route path="/shoppingcart" element={<ShoppingCart/>}></Route>
            <Route path="/buy" element={<PlaceOrder/>}></Route>
        </Routes>
    </Suspense>
  )
}
```


### 接口配置
本项目的数据使用在线接口工具 `faskmock` 模拟ajax请求获取，下面配置了数据地址的 `baseUrl`以及数据截拦，方便以后更改数据地址。

- api/config.js 代码如下
```js
import axios from 'axios'
export const baseUrl = "https://www.fastmock.site/mock/759aba4bef0b02794e330cccc1c88555/beers";

const axiosInstance = axios.create({
    baseURL:baseUrl
})

axiosInstance.interceptors.response.use(
    res => res.data,
    err => {
        console.log(err,'网络错误')
    }
)

export { axiosInstance }
```

 
- api/request.js 接口文件代码如下：

```js
import { axiosInstance } from './config'

// 获取我的订单数据
export const getOrder = () => 
    axiosInstance.get('/order') 

// 获取推荐列表数据
export const getCommend = () => {
    return axiosInstance.get('/goods')
}
```

### 添加 redux 数据流管理
本项目中除了**父子组件间的数据共享**外，还包含了**跨页面级别组件的数据共享**，比如：在首页将商品加入购物车时，购物车组件中的商品数量+1。因此我们就需要一个专门的工具进行数据流管理，这时就到了`redux`出场的时候了。  

本项目中我们拆分了`reducer`，每个页面都拥有一个独立管理`state`的`reducer`函数，然后再合并为一个总的`reducer`。

> 在开始之前，我们要先在入口文件`main.jsx`最外层包裹一层`react-redux`提供的`Provide`声明。这样每次`store`数据改变时才能通知到每个组件。

```js
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
)
```
> 暴露store对象文件，整个应用只有一个store对象

```js
import { createStore,compose,applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import reducer from './reducer'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; 

const store = createStore(reducer, 
    composeEnhancers(    
    applyMiddleware(thunk)  
))

export default store
```

1. `redux-thunk` 可以实现`redux`处理异步`action`。  

2. `applyMiddleware` 就是增强了原始`createStore`返回的`dispatch`的功能。   

3. `const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose`;可以让浏览器插件 Redux DevTools 生效，以便开发人员模式运行应用。


> 创建一个**中央reducer**

```js
import { combineReducers } from "redux";
import { reducer as orderReducer } from '@/pages/myorder/store/index'
import { reducer as homeReducer } from '@/pages/home/store/index'
import { reducer as placeorderReducer } from '@/pages/place-order/store/index'
import { reducer as shoppingcartReducer } from '@/pages/shopping-cart/store/index'

export default combineReducers({
    order:orderReducer,
    home:homeReducer,
    placeorder:placeorderReducer,
    shoppingcart:shoppingcartReducer
})
```
在这个中央`reducer`中，我们可以合并所有页面的`reducer`，组成整个项目的`store`。当某个页面组件`dispatch`一个`action`时，就可以改变`store`中的数据。因此就可以很容易的实现父子组件以及跨页面级别组件之间的数据共享了。

中央`reducer`建好之后，我们现在只需要在每个页面中加上地区`reducer`啦

### 实现 myorder 页面
在[我的上篇文章]('https://juejin.cn/post/7112254955632721957')中，已经详细介绍了该组件的设计以及实现过程了，我们现在只需要稍微修改一下加上`reducer`即可。

首先在`myorder`组件目录下新建一个文件夹`store`，接着添加 4 个必备文件，结构如下：

```js
├─ myorder
    ├─ store
        actionCreators.js     // 定义action函数
        constants.js          // 定义所有type类型
        index.js              // 出口
        reducer.js            // 当前页面的rducer
```

先来分析一下 **myorder组件**需要管理哪些数据吧：  
先看页面：

<img src='https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/0362ac66c8144956ac5a14b56245816e~tplv-k3u1fbpfcp-watermark.image?' width="50%">



（上篇文章中，每次`tab`切换都要访问一次接口，这里我们做了优化，只要访问接口一次，每次`tab`切换只需要筛选本地缓存的数据）
- 全部订单 -- 通过远程接口获取；
- 当前`tab`下显示的订单 -- 通过筛选`全部订单`得到；
- tab列表
- loading显示
- 推荐列表 -- 通过远程接口获取；



> 编写 **actionCreators**  

在该文件中主要写页面需要 `dispatch` 的 `action` 函数，这里展示一部分，具体请看源码：

```js
import { getOrder,getCommend } from '@/api/request'
import * as actionTypes from './constants'

// 获取我的订单列表 同步
export const changeOrderList = (data) => ({
    type:actionTypes.CHANGE_ORDER_LIST,
    data
})
// 获取我的订单列表 异步
export const getOrderList = ({tab='',query=''}) => {
    return (dispatch) => {
        getOrder()
            .then(data => {
                const action = changeOrderList(data);
                dispatch(action);
                dispatch(updateOrderList({tab:tab,query:query}));
                dispatch(changeEnterLoading(false));
            })
    }
}
// tab 切换、搜索 变更订单列表
export const updateOrderList = (data) => ({
    type:actionTypes.UPDATE_ORDER_LIST,
    data
})
...
```

> 编写 **constants**  

该文件用来定义不同 `action` 的 `type`，统一管理，便于维护，增强可读性。

```js
export const CHANGE_ORDER_LIST = 'CHANGE_ORDER_LIST';
export const DELETE_ORDER = 'DELETE_ORDER';
export const CHANGE_RECOMMEND_LIST = 'CHANGE_RECOMMEND_LIST'
export const CHANGE_ENTER_LOADING = 'CHANGE_ENTER_LOADING';
export const UPDATE_ORDER_LIST = 'UPDATE_ORDER_LIST'
```

> 编写 **reducer**  

reducer的本质就是一个纯函数， reducer函数会接到两个参数，分别为：之前的状态（state），动作对象（action）。这里只展示部分代码哦~


```js
import * as actionTypes from './constants'

// 初始 state
const defaultState = {
    // 所有订单列表
    orderList:[],
    // 展示的订单列表
    showOrderList:[],
    // 推荐列表
    recommendList:[],
    // 显示加载中
    enterloading:true,
    // tab 列表
    tabList:[
        {id:1,name:'全部',count:0},
        {id:2,name:'待支付',count:0},
        {id:3,name:'待发货',count:0},
        {id:4,name:'待收货/使用',count:0},
        {id:5,name:'评价',count:0},
        {id:6,name:'退款',count:0}
    ]
}

export default (state = defaultState,action) => {
    switch(action.type){
        case actionTypes.CHANGE_RECOMMEND_LIST:
        return {
            ...state,
            recommendList:action.data
        }
        ...
        default:
            return state;
    }
}
```

> 编写 **index**  

该文件用于导出该组件的 `reducer` 和 `action` 文件，用于报告中央`reducer`以及其他页面使用。

```js
import reducer from './reducer'
import * as actionCreators from './actionCreators'

export {
    reducer,
    actionCreators
}
```

> **连接store**

仓库建好之后，现在我们需要将组件和仓库连接起来，使组件能够使用仓库中的数据；  

这里 **connect** 可以为我们的组件和仓库建立连接，每次仓库发生改变时，我们之前在入口文件最外层包裹的`Provide`都会通知到该组件的`connect`，而`connect`会以`props`的方式将数据传给组件使用

```js
import React from 'react';

function  Myorder(props) {
  return (
    <div></div>
  );
}
//这个函数允许我们将 store 中的数据作为 props 绑定到组件上
const mapStateToPorps = (state) => {
  return {
    showOrderList:state.order.showOrderList,
    ...
  }
}

//这个函数将 action 作为 props 绑定到组件中
const mapStateToDispatch = (dispatch) => {
  return {
    getOrderListDispatch(data){
      dispatch(actionCreators.getOrderList(data))
    }
    ...
  }
}

export default connect(mapStateToPorps, mapStateToDispatch)(memo(Tesla))

```

这里我们用到了 `connect` 的两个参数：   
- `mapStateToProps`:状态树，允许组件对`store`进行读操作的函数。
- `mapDispatchToProps`:对`store`进行写操作的派发函数.

以上，就是给组件加上 `reducer`的整个过程啦。后面页面的实现就不再叙述啦~

### 实现 home 页面
这里就分享部分重要部分的实现吧
#### 下拉刷新
这里用到了`antd-mobile`的 `PullToRefresh` 组件，自定义下拉时以及下拉完成时的显示内容。每次下拉触发函数重新拉取远程数据：

```js
import { PullToRefresh,DotLoading } from 'antd-mobile'
import { sleep } from 'antd-mobile/es/utils/sleep'

function Home(props) {
    async function doRefresh() {
        await sleep(1000);
        // diapatch 拉取远程商品列表的 action
        getGoodsListDispatch()  
    }

    return(
        <PullToRefresh
                    onRefresh={doRefresh}
                    refreshingText={<DotLoading color='#fe2d54'/>}
                    completeText={ <h3>美好生活&nbsp;&nbsp;触手可得</h3>}
                >
                ...
        </PullToRefresh>
    )
}
```

实现效果如下：

<img src='https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/0684009c746c43f8925af563053ae32d~tplv-k3u1fbpfcp-watermark.image?' width="65%">


#### 上拉加载 + 图片懒加载
抖音商城首页展示的大部分是图片数据，所以加上图片懒加载是非常有必要的。这里我使用了优秀博主`神三元`写的[非常好用的`Scroll`组件]('https://juejin.cn/book/6844733816460804104/section/6844733816557273102')，搭配`LazyLoad `一起使用实现图片懒加载。  
另外我自己封装了一个简单的`MyImg`组件，当网速比较慢或者网络出错时，会显示默认图片。  

```js
import Scroll from '@/components/common/scroll'
import { forceCheck } from 'react-lazyload'
import MyImg from '@/components/common/MyImg';
import LazyLoad from 'react-lazyload'
import DefaultImg from '@/assets/images/default.webp'

function Home(props) {
    return(
        ...
        <Scroll onScroll={forceCheck}>
            ...
             <LazyLoad 
                  placeholder={<img className='img' src={DefaultImg}/>}>
                  <MyImg 
                    src={data.img} 
                    defaultImg={DefaultImg}
                    className="img"
                  />
                </LazyLoad>
        </Scroll>
        ...
    )
}
```

#### 加入购物车
这里主要涉及到对跨页面数据流的操作，  
我们先在购物车组件`actionCreators`文件中添加一个增加商品的函数`changeCartList`：  

```js
export const changeCartList = (data) => ({
    type:actionTypes.CHANGE_CART_LIST,
    data
})
```
购物车组件`reducer` 文件中加上：

```js
...
const addGoods = (list,data) => {
  let newList=list;
  newList.push(data);
  return newList;
}
export default (state = defaultState,action) => {
    switch(action.type){
        case actionTypes.CHANGE_CART_LIST:
          return {
            ...state,
            cartList:addGoods(Object.assign([],state.cartList),action.data)
          }
```

在购物车组件加完以上内容后，在`home`组件
中就可以`dispatch`刚刚加上的`changeCartList`，完成加入购物车功能啦  

```js
import React, { memo } from 'react'
import { Toast } from 'antd-mobile'
import { connect } from 'react-redux'
import { changeCartList } from '@/pages/shopping-cart/store/actionCreators'

function Home(props) { 
  const putinCart = (item) => {
    changeCartListDispatch(item);
    Toast.show({
      content: '加入购物车成功'
    })
  }
  
    return(
        ...
          {/* 加入购物车 */}
          <div className='cart-icon' onClick={putinCart.bind(null,item)}>
            <i className='fa fa-shopping-cart'/>
          </div>
        ...
    )
}
```

### 实现购物车页面
#### 【删除/结算】显示 + 【进入/退出】页面的动画
【进入/退出】页面的动画效果我们通过`react-transition-group`提供的`CSSTransition`实现  

进入页面动画定定义在类名`fly-enter`、`fly-enter-active`上，退出页面动画效果定义在`fly-exit`、`fly-exit-active`上

- shopping-cart/index.jsx 部分代码如下：
```js
 <CSSTransition
    in={show}
    timeout={300}
    appear={true}
    classNames="fly"
    unmountOnExit
    onExit={() => {navigate(-1)}}
    >
    ...
<CSSTransition/>
```

【删除/结算】显示要实现的是：  
点击`管理`后，Footer部分出现`删除`按钮。再次点击完成后，Footer部分出现`结算`按钮，并出现金额数。

我实现的方法是：定义一个状态控制样式的的显示与不显示，再结合`classnames`，为盒子动态的加上样式。


```js
function ShoppingCart(props) {
 const [showDelete,setShowDelete] = useState(false);
 return (
    <div className={classnames({notshow:showDelete})}>
        <span>合计：</span>
            ...
        <button onClick={()=>onSubmit()}>结算</button>
    </div>
    <div className={classnames({notshow:!showDelete})}>
        <Button  block  onClick={()=>deleteproduce()}>删除</Button> 
    </div>
 )
}
```


实现效果如下：

<img src="https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/78fecb311fe94920a71e584500d7fe00~tplv-k3u1fbpfcp-watermark.image?" width="300px">


#### 选中/取消选中/全选商品
将每个商品的复选框与`store`中的数据进行双向绑定。 

每次选中某个商品的复选框时，`dispatch`改变该商品的`checked`属性取反，而每次`store`中的数据发发生改变时，页面中的复选框将会产生对应的效果。

全选则是通过改变所有商品的`chencked`值为`selectAll`取反。

[具体代码看这里哦]('https://gitee.com/fish-ball-fairy/lesson_fullstack/blob/master/react/react-myorder/src/pages/shopping-cart/index.jsx')

#### 购物车总价
**金额计算：**

首先购物车组件的**金额数值**作为该组件`reducer`中的一个状态保存，初始时为 0.每次选中商品时重新计算，计算方式为：使用`reduce`方法遍历购物车商品列表数组，`checked`值为`true`则加入计算金额。

- shoopng-cart/store/reducer.js 部分代码如下：

```js
import * as actionTypes from './constants'
// 初始状态
const defaultState = {
    ...
    totle:0
}
export default (state = defaultState,action) => {
    switch(action.type){
        // 计算总价
        case actionTypes.CHANGE_TOTLE:
        return {
            ...state,
            totle:state.cartList.reduce((pre,item) => 
              item.checked?pre+item.price*item.acount:pre, 0 )
        }
}
```

**金额显示**

购物车总价显示分为**整数部分**以及**小数部分**，但是获取的数据是不一定的，所以这里我们要对数值做个规范。

<img src='https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/76b5bfebd9254e7b992fd4833f54aac9~tplv-k3u1fbpfcp-watermark.image?' width="75%">

于是我写了一个工具函数，将任何形式的价格转换成保留两位小数的整数部分和小数部分。

```js
/**
 * @auther wsq
 * @func 把价格格式化成保留两位小数的价格
 * @param {String} Number 
 * @param {String} newPrice
 */
export const FormatPrice = (price) => {
    // price有小数部分
    let newPrice =[];
    // Number类型转为String类型
    price=price+'';
    if(price.indexOf('.') !== -1){
        let nums = price.split('.');
        newPrice[0]=nums[0];
        if(nums[1].length<2){
            newPrice[1] = `${nums[1].slice(0,1)}0`
        }else {
            newPrice[1] = `${nums[1].slice(0,2)}`
        }
    } else { // price为整数 没有小数部分
        newPrice[0] = price;
        newPrice[1] = '00'
    }
    return newPrice;
}

```
在页面中这样使用：

```js
<div className={classnames({notshow:showDelete})}>
      <span>合计：</span>
      <span className='total_price'>
          <i className='fa fa-jpy'/>
          // 整数部分
          <span>{FormatPrice(totle)[0]}</span>
          // 小数部分
          <span className='decimal'{`.${FormatPrice(totle)[1]}`}</span>
      </span>
     <button onClick={()=>onSubmit()}>结算</button>
</div>
```


增加商品数量同样是`dispatch`修改商品数量数据后，再`diapatch`重新计算金额即可，这里就不展示代码了。


### 实现提交订单页面
#### 数据交付  
该页面有两个入口，一个是`myorder`页面的**再次购买**按钮可以进入。另一个是购物车选中商品后按下**结算**按钮后可以进入。  
以购物车结算入口为例，当触发**结算**按钮时，将会`diapath`把选中的商品增加到提交订单组件的`reducer`中，再进行页面跳转，该页面将会以上个页面`dispatch`进来的数据为源渲染页面。

- shopping-cart/index.jsx 关于结算金额的部分代码如下：

```js
function ShoppingCart(props) {
  const onSubmit = () => {
        const selectedList=cartList.filter(item => item.checked==true);
        changeSubmitGoodsDispatch(selectedList)
        navigate('/buy')
  }
  ...
    return (
        <button onClick={()=>onSubmit()}>结算</button>
    )
}
const mapDispatchToProps = (dispatch) => {
  return {
     changeSubmitGoodsDispatch(data) {
          // 将选中商品加到提交订单组件的reducer中
          dispatch(changeSubmitGoods(data));
    }
  }
}
```

#### 地址选择
当地址为空时，自动弹出弹出框让用户新增地址

- place-order/address-select/index.jsx 部分代码如下：

```js
function AddressSelect(props) {
    const [visibleAdd,setVisibleAdd] = useState(false);

    useEffect(()=>{
        setTimeout(()=>{
              if(!alladdress.length){
                  setVisibleAdd(true);
              }
        },2000)
  },[])
  return (
  <Popup visible={visibleAdd} ></Popup>
 }
```

[具体代码实现看这里哦]('https://gitee.com/fish-ball-fairy/lesson_fullstack/blob/master/react/react-myorder/src/pages/place-order/address-select/index.jsx')

以上展示了项目的部分模块实现，下面我们来说说对项目优化的地方

## 优化
#### 移动端页面自适应 rem
为了更好的适配移动端屏幕大小，本项目中使用的所有样式均采用 **rem**单位。

首先做`html`的`font-size`的大小配置：  
在根目录下添加 public/js/adapter.js：
```js
var init = function () {
    var clientWidth = document.documentElement.clientWidth || document.body.clientWidth;
    if (clientWidth >= 640) {
      clientWidth = 640;
    }
    var fontSize = 16 / 375 * clientWidth;
    document.documentElement.style.fontSize = fontSize + "px";
  }
  
  init();
  
  window.addEventListener("resize", init);
```
在index.html中引入：

```js
<script src="/public/js/adapter.js"></script>
```
然后写样式的时候，根据设置根元素的`font-size`计算rem写上即可。这里推荐一个px一键转rem的插件：**px to rem & rpx & vw**

#### 图片懒加载
引入react-lazyload 实现图片懒加载，前面已经介绍过了，这里就不再陈述了。

#### 路由懒加载
使用React的`lazy`和`Suspense`组合了路由懒加载进行。具体可以看前面的路由配置部分哦。

#### 配置vite alias
当我们在页面引入其他文件时，如果文件间相隔太远就需要用相对路径`../../../`，可读性较差。因此这里我们配置一个代表`src`目录的`@`：

```js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve:{
    alias:{
    '@':path.resolve(__dirname,'src')
    }
  }
})
```
引入文件时就可以这样引入了：
```js
import Loading from '@/components/common/loading';
```

#### 组件性能优化memo
> 若是你的函数组件在给定相同props 的状况下渲染相同的结果，那么你能够经过将其包装在React.memo 中调用，以此经过记忆组件渲染结果的方式来提升组件的性能表现。这意味着在这种状况下，React将跳过渲染组件的操做并直接复用最近—次渲染的结果。

给每个组件添加memo。这样组件数据不变的情况下不会重新更新。


```js
import { memo } from "react";

const Home = () => {}

export default memo(Home)

```

#### 添加全局风格定义文件

添加全局风格定义文件：global-style.js。将项目风格颜色等定义成变量添加到css中，当风格改变时，可以统一更改。

比如：该项目大量用到了一个具有代表性的粉红色，我们就可以写进全局风格定义文件：

```js
export default {
    "primary-colour":"#ff244e"
}
```
使用：

```js
import styled from "styled-components";
import style from '@/assets/styles/global-style'

export const Footer = styled.div`
     color:${style["primary-colour"]};
`
```

## 遇到的坑
>  在完善代码期间笔者突然发现文件保存了但是项目页面没有改变，需要每次重新npm run dev，也就是react热更新失效了了  

**解决方案**：文件目录下的文件要规范命名，尽量不用使用大写，也不要使用驼峰式命名文件夹。我把文件夹名称改成小写之后问题解决了。

>  使用redux做复选框的时候，每次选中/取消选中时，state中的数据显示已经改变，但是页面不改变。 
   
**解决方案**：不要直接改变state，使用`Object.assign({},state)`新建一个副本。    
**原因**：`reducer`就是一个纯函数，接收旧的`state`和`action`，返回新的 `state`。保持`reducer`纯净非常重要。 `Store` 会把两个参数传入`reducer`: 当前的 `state`和 `action`，所以不能直接修改`state`,`redux`会比较新旧`state`的值，直接修改`state`会导致`store`内部的也发生改变，那么新旧`state`也就没有发生变化。页面就不会重新渲染。 