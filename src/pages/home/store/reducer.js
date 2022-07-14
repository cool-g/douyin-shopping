import * as actionTypes from './constants' 

 const defaultState = {
    goodsList:[],
    livelist:[
      {id:1,name:'J家女孩小店',img:'https://img1.baidu.com/it/u=592570905,1313515675&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500'},
      {id:2,name:'喜乐乐家的小铺',img:'https://img2.baidu.com/it/u=343850545,2320437498&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500'}
    ],
    brandlist:[
      {id:1,name:'乐町',img:'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.alicdn.com%2Ftfscom%2Fi2%2F2547976158%2FO1CN011vMPRXJJT3WWkCG_%21%212547976158.jpg&refer=http%3A%2F%2Fimg.alicdn.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1659604070&t=79779c302a27c3214aacc2c95e4eec07'},
      {id:2,name:'中国黄金',img:'http://t14.baidu.com/it/u=2003255969,2200183297&fm=224&app=112&f=JPEG?w=500&h=500'}
    ],
    enterloading:true
 }
 export default (state = defaultState,action) => {
    switch(action.type){
         case actionTypes.CHANGE_GOODS_LIST:
            return {
               ...state,
               goodsList:action.data
            }
         case actionTypes.CHANGE_ENTER_LOADING:
            return {
               ...state,
               enterloading:action.data
            }
         default:
            return state;
    }
 }