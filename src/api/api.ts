import axios from 'axios'

export const showcaseAPI = axios.create({
  baseURL: process.env.NEXT_PUBLIC_HOSTNAME_SHOWCASE,
})

export const cartAPI = axios.create({
  baseURL: process.env.NEXT_PUBLIC_HOSTNAME_CART,
})
