import * as actionTypes from './constants'

export const changeAddressList = (data) => ({
    type:actionTypes.CHANGE_ADDRESS_LIST,
    data
})
export const changeEnterLoading = (data) => ({
    type:actionTypes.CHANGE_ENTER_LOADING,
    data
})
export const changeSubmitGoods = (data) => ({
    type:actionTypes.CHANGE_SUBMIT_GOODS,
    data
})