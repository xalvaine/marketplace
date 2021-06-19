import { useQuery } from 'react-query'
import { showcaseAPI } from '@/api'
import { Products } from '@/interfaces'

interface Params {
  category_id: string
  limit?: number
}

const getProducts = async (params: Params) => {
  const { data } = await showcaseAPI.get(`/products`, { params })
  return data.items
}

const useProducts = (params: Params) =>
  useQuery<Products>([`products`, params], () => getProducts(params))

export { getProducts, useProducts }
