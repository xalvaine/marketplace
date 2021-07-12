import { useQuery } from 'react-query'
import { showcaseAPI } from '@/api'
import { Products } from '@/interfaces'

interface Params {
  category_id: string
  limit?: number
}

const getProducts = async (params: Params) => {
  const { data } = await showcaseAPI.get(`/products`, { params })
  return data
}

const useProducts = (params: Params) =>
  useQuery<{ items: Products; total: number }>(
    [`products`, params],
    () => getProducts(params),
    {
      enabled: !!params.category_id,
    },
  )

export { getProducts, useProducts }
