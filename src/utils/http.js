import axios from 'axios'

// const baseURL = 'https://draw-game.be.wizzstudio.com'
// const testURL = 'https://dev-60000.be.wizzstudio.com'

const instance = axios.create({
  baseURL: 'https://draw-game.be.wizzstudio.com',
  timeout: 2500
})

instance.interceptors.request.use((config) => {
  if (config.url !== '/api/user/login' && config.url !== '/api/user/redirect') {
    config.headers.token = window.localStorage.getItem('uuid')
  }
  return config
}, error => Promise.reject(error))

instance.interceptors.response.use((response) => {
  return response
}, error => Promise.reject(error))

export default instance
