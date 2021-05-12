import { useQuery } from 'react-query'
import { cartAPI } from '@/api'
import { Tariff } from '@/interfaces'

const getTariffs = async () => {
  const { data } = await cartAPI.get(`/tariffs`)
  return data.items
}

const useTariffs = () => useQuery<Tariff[]>(`tariffs`, getTariffs)

export { useTariffs }
