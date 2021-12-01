import axios from 'axios'

const baseURL = process.env.NUXT_ENV_API_URL

const axiosClient = axios.create({
  baseURL,
  timeout: 30000,
})

axiosClient.interceptors.request.use(
  (config) => {
    const token = null //localStorage.getItem('auth-token');
    const newConfig = config

    if (token) newConfig.headers.Authorization = `Bearer ${token}`
    return newConfig
  },
  (error) => {
    console.log('Axios. Same errors!', error)
  }
)

axiosClient.interceptors.response.use(
  (res) => {
    if (res.data.error) {
      return Promise.reject(res.data.error)
    }
    return res
  },
  (error) => {
    console.log('Axios. Same errors!', error)
    if (error.response && 401 === error.response.status) {
      //localStorage.removeItem("auth-token");
      if (location.pathname !== '/login') location.href = '/login'
    }

    if (error.response && 422 === error.response.status) {
      return Promise.reject(error)
    }
    return Promise.reject(error.response)
  }
)

export default axiosClient
