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