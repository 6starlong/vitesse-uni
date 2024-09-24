// @see https://uni-helper.js.org/uni-network
import { un as uniNetwork, type UnResponse } from '@uni-helper/uni-network'

export interface ApiResponse<T = any> {
  code: string
  data: T
  message: string
}

// 创建实例
const instance = uniNetwork.create({
  baseUrl: 'https://some-domain.com/api/',
  timeout: 1000,
  headers: { 'X-Custom-Header': 'foobar' },
})

// 请求拦截器
instance.interceptors.request.use(
  (config) => {
    // 在发送请求之前做些什么
    return config
  },
  (error) => {
    // 对请求错误做些什么
    return Promise.reject(error)
  },
)

// 响应拦截器
instance.interceptors.response.use((response: UnResponse) => {
  const data = response.data as ApiResponse
  if (data.code === '1') {
    return data.data
  } else {
    uni.showToast({ title: data.message, icon: 'none' })
    return Promise.reject(data.message)
  }
})

export const un = instance
