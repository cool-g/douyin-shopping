import { axiosInstance } from './config'

// 获取我的订单数据
export const getOrder = () => 
    axiosInstance.get('/order') 


// 获取推荐列表数据
export const getCommend = () => {
    return axiosInstance.get('/goods')
}
    

// 获取指定某个id的个商品
export const getBuy = ({id}) => 
    axiosInstance
    .get('/order') 
    .then((data) => {
            let goods = data.filter(item => item.id==id)
            return Promise.resolve({
                goods
            })
        }
    )