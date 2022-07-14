import * as actionTypes from './constants'
import { getCommend } from '@/api/request'

export const changeCartList = (data) => ({
    type:actionTypes.CHANGE_CART_LIST,
    data
})
// 商品选中 | 取消选中
export const changeSelectedGoods = (data) => ({
    type:actionTypes.CHANGE_SELECTED_GOODS,
    data
})
// 全选
export const changeSelectAll = () => ({
    type:actionTypes.CHANGE_SELECT_ALL
})
// 更改总价
export const changeTotle = () => ({
    type:actionTypes.CHANGE_TOTLE
})
// 从购物车删除商品
export const deleteGoods = () => ({
    type:actionTypes.DELETE_GOODS
})
// 更改商品数量
export const changeGoodsAcount = (data) => ({
    type:actionTypes.CHANGE_GOODS_ACOUNT,
    data
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
                dispatch(changeEnterLoading(false));
            })
    }
}
export const changeEnterLoading = (data) => ({
    type:actionTypes.CHANGE_ENTER_LOADING,
    data
})