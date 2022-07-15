import { getOrder,getCommend } from '@/api/request'
import * as actionTypes from './constants'

// 获取我的订单列表
export const changeOrderList = (data) => ({
    type:actionTypes.CHANGE_ORDER_LIST,
    data
})
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
// const changeTabCount = () => {

// }
// 同步 删除某个id的订单
export const deleteOrder = (id) => ({
    type:actionTypes.DELETE_ORDER,
    id
})
// 获取推荐商品列表
export const changeRecommendList = (data) => ({
    type:actionTypes.CHANGE_RECOMMEND_LIST,
    data
})
export const getRecommendList = () => {
    return (dispatch) => {
        getCommend()
            .then(data => {
                const action = changeRecommendList(data)
                dispatch(action);
            })
    }
}
export const changeEnterLoading = (data) => ({
    type:actionTypes.CHANGE_ENTER_LOADING,
    data
})

// 增加订单
export const addOrder = (data) => ({
    type:actionTypes.ADD_ORDER,
    data
})