import axios from 'axios'
import store from '@/store'
import router from '../router'
import { Message, MessageBox } from 'element-ui'

const service = axios.create({
  // baseURL: '',
  timeout: 30000 // request timeout
})

// request interceptor
service.interceptors.request.use(
  config => {
    config.headers['Content-Type'] = 'application/json'
    config.headers['Access-Control-Allow-Origin'] = '*'
    config.headers['Access-Control-Allow-Methods'] = 'GET, POST, OPTIONS, PUT, DELETE'
    config.headers.Authorization = 'Bearer ' + window.localStorage.getItem('token')
    // config.headersAuthorization = 'Bearer ' + store.getters.token
    return config
  },
  error => {
    // do something with request error
    console.log(error) // for debug
    return Promise.reject(error)
  }
)

// Response interceptors
service.interceptors.response.use(
  (response) => {
    return response
  },
  async (error) => {
    return Promise.reject(error)
  }
)

export default service
