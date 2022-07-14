import { getCommend } from '@/api/request'
import * as actionTypes from './constants'

export const changeGoodsList = (data) => ({
    type:actionTypes.CHANGE_GOODS_LIST,
    data
})
export const getGoodsList = () => {
    return (dispatch) => {
        getCommend()
            .then(data => {
                const action = changeGoodsList(data)
                dispatch(action);
                dispatch(changeEnterLoadng(false))
            })
    }
}
export const changeEnterLoadng = (data) => ({
    type:actionTypes.CHANGE_ENTER_LOADING,
    data
})