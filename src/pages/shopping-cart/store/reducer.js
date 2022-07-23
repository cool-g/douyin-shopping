import * as actionTypes from './constants'

const defaultState = {
    // 初始购物车状态
    cartList:[
        {
            "id": 111,
            "shop": "贝瑞尔食品",
            "state": "待支付",
            "title": "兰波路梦普奇曲奇饼干日式牛奶黄油芝士巧克力软香饼干小零食43g",
            "desc": "巧克力味",
            "acount": 1,
            "price": 49.8,
            "deliverytime": "48小时内发货",
            "insurance": [
              "7天无理由退货",
              "坏损包退"
            ],
            "img": "https://gd1.alicdn.com/imgextra/i2/1036190283/O1CN01K7o4qr1DxenNs7r8N_!!1036190283.jpg",
            "coupon": 5,
            "freight": 0,
            "checked":false
          },
          {
            "id": 112,
            "shop": "星辰梦下·原创手作",
            "state": "待发货",
            "title": "「多肉青提」原创14K天然白玉髓和田玉翡翠手绳手链绿水晶葡萄女",
            "desc": "葡萄款-手围15-17cm",
            "acount": 1,
            "price": 785.76,
            "deliverytime": "48小时内发货",
            "insurance": [
              "7天无理由退货",
              "坏损包退"
            ],
            "img": "https://gd4.alicdn.com/imgextra/i4/647065291/O1CN01TJmhuf1oxKHxvkoSx_!!647065291.jpg",
            "coupon": 20,
            "freight": 8,
            "checked":false
          }
    ],
    // 推荐列表
    recommendList:[],
    enterLoading:true
}

// 选中/取消选中商品
const changeCart = (list,id) => {
  let idx = list.findIndex(data => id == data.id);
  list[idx].checked=!list[idx].checked;
  return list;
}
// 删除某id的商品
const deletegoods = (list) => {
  let newlist=[];
  for(let item of list) {
    if(!item.checked){
      newlist.push(item)
    }
  }
  return newlist;
}
// 改变商品的数量
const changeacount = (list,data) => {
  let idx = list.findIndex(item => item.id==data.id);
  list[idx].acount = data.value;
  return list;
}
// 向购物车内添加商品
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
        case actionTypes.CHANGE_SELECTED_GOODS:
          return {
            ...state,
            // 不能直接修改 state
            cartList:changeCart(Object.assign([],state.cartList),action.data)
          }
        case actionTypes.CHANGE_SELECT_ALL:
          return {
            ...state,
            cartList:state.cartList.map(item=>{
              item.checked=!action.data
              return item;
            })
          }
        case actionTypes.DELETE_GOODS:
          return {
            ...state,
            cartList:deletegoods(state.cartList)
          }
        case actionTypes.CHANGE_GOODS_ACOUNT:
          return {
            ...state,
            cartList:changeacount(Object.assign([],state.cartList),action.data)
          }
        case actionTypes.CHANGE_RECOMMEND_LIST:
          return {
            ...state,
            recommendList:action.data
          }
        case actionTypes.CHANGE_ENTER_LOADING:
          return {
            ...state,
            enterLoading:action.data
          }
        default:
            return state;
    }
}