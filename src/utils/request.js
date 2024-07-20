// 首先导入 axios
import axios from "axios"

// 自己创建一个axios对象
const request = axios.create({
  baseURL: "/", // 基础路径，默认是/ ，如果改了，会自动添加到你请求url前面
  timeout: 5000, // 请求超时，5000毫秒
})

// 请求拦截器
request.interceptors.request.use(
  (config) => {
    // 在发送请求之前做些什么
    return config
  },
  function (error) {
    // 处理请求错误
    return Promise.reject(error)
  }
)

// 相应拦截器
request.interceptors.response.use(
  (response) => {
    // 在2xx范围内的任何状态代码都会触发此功能
    // 处理响应数据
    return response
  },
  function (error) {
    // 任何超出2xx范围的状态代码都会触发此功能
    // 处理响应错误
    return Promise.reject(error)
  }
)

export default request // 导出自定义创建的 axios 对象
