import axios from 'axios'
import { PATH } from '@/config'

const showcaseAPI = axios.create({
  baseURL: process.env.NEXT_PUBLIC_HOSTNAME_SHOWCASE,
})

const cartAPI = axios.create({
  baseURL: process.env.NEXT_PUBLIC_HOSTNAME_CART,
  withCredentials: true,
})

const authorizationAPI = axios.create({
  baseURL: process.env.NEXT_PUBLIC_HOSTNAME_AUTHORIZATION,
  withCredentials: true,
})

cartAPI.interceptors.response.use(undefined, (error) => {
  if (error.response.status === 401 && error.response.config.url !== `/cart`) {
    window.history.replaceState(null, ``, PATH.LOGIN)
  }
})

export { showcaseAPI, cartAPI, authorizationAPI }
