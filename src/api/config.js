import axios from 'axios'
export const baseUrl = "https://www.fastmock.site/mock/759aba4bef0b02794e330cccc1c88555/beers";

const axiosInstance = axios.create({
    baseURL:baseUrl
})

axiosInstance.interceptors.response.use(
    res => res.data,
    err => {
        console.log(err,'网络错误')
    }
)

export { axiosInstance }