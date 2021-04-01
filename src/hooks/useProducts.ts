import api from '@/api/api'
import { useQuery } from 'react-query'
import { Products } from '@/interfaces'

const getProducts = async () => {
  const { data } = await api.get(`/products`)
  return data.items
}

const useProducts = () => useQuery<Products>(`products`, getProducts)

export { getProducts, useProducts }
