import api from '@/api'
import { useQuery } from 'react-query'
import { Product } from '@/interfaces'

const getProducts = async () => {
  const { data } = await api.get(`/products`)
  return data.items
}

const useProducts = () => useQuery<Product[]>(`products`, getProducts)

export { getProducts, useProducts }
