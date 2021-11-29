import axios from 'axios'
import config from '@/settings.js'
// 创建一个axios实例


let apiBaseUrl = config.baseUrl || "";//例如 '/shuishuaijie+接口'
// console.log(apiBaseUrl)
const service = axios.create({
  headers: {
    // 'content-type': 'application/x-www-form-urlencoded',
    // // 'token': localStorage.getItem("token")
    // 'Accept':'*/*'
  },
  baseURL: apiBaseUrl,
  withCredentials: false, //请求可以携带cookie  send cookies when cross-domain requests
  timeout: 60000 // 如果请求话费了超过 `timeout` 的时间，请求将被中断
})

// 添加请求拦截器
service.interceptors.request.use(config => {
  // 在发送请求之前做某事，比如说 设置token
  // config.headers['token'] = 'token';
  let token = localStorage.getItem("token") //获取token
  // console.log(token)
  if (token) {
    // config.ContentType = ''
    config.headers['token'] = token // 让每个请求携带自定义 token 请根据实际情况自行修改

  }
  return config;
}, error => {
  console.log(error)
  // 请求错误时做些事
  return Promise.reject(error);
});

// 添加响应拦截器
service.interceptors.response.use(response => {
  const res = response.data;
  // 如果返回的状态不是200 就主动报错
  // if (res.state != 200) {
  //   return Promise.reject(res.msg || 'error')
  // }
  return response;
}, error => {
  console.log(error)
  let data = error.response.data
  if (data.status === 500 && data.message.includes("Token失效")) {
    window.location.href = '/Login'
  }
  return Promise.reject(error.response.data); // 返回接口返回的错误信息

})

export default service