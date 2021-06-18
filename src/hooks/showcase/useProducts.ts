import { useQuery } from 'react-query'
import { showcaseAPI } from '@/api'
import { Products } from '@/interfaces'

const getProducts = async () => {
  const { data } = await showcaseAPI.get(`/products`)
  return data.items
}

const useProducts = () => useQuery<Products>(`products`, getProducts)

export { getProducts, useProducts }
