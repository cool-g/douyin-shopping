import * as actionTypes from './constants'

const defaultState = {
    addressList:[],
    enterloading:true,
    submitGoods:[]
}

export default (state = defaultState,action) => {
    switch(action.type){
        case actionTypes.CHANGE_ADDRESS_LIST:
            state.addressList.push(action.data);
            return {
                ...state,
                addressList:state.addressList
            }
        case actionTypes.CHANGE_ENTER_LOADING:
            return {
                ...state,
                enterloading:action.data
            }
        case actionTypes.CHANGE_SUBMIT_GOODS:
            return {
                ...state,
                submitGoods:action.data
            }
        default:
            return state;
    }
}