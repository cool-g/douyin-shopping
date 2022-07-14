import React,{ Suspense} from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import './assets/styles/reset.css'
import 'font-awesome/css/font-awesome.min.css'
import './assets/iconfont/iconfont.css'
import { HashRouter,BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <HashRouter>
      <App />
    </HashRouter>
  </Provider>
)
