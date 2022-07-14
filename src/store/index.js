import { createStore,compose,applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import reducer from './reducer'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; 

const store = createStore(reducer,
    // 组合函数    
    // devtool   
    composeEnhancers(    
        // 异步  
    applyMiddleware(thunk)  
))

export default store