import { useQuery } from 'react-query'
import { cartAPI } from '@/api'
import { Address, Tariff } from '@/interfaces'

const getTariffs = async (address?: Address) => {
  const { data } = await cartAPI.post(`/tariffs`, address)
  return data?.items
}

const useTariffs = (address?: Address) =>
  useQuery<Tariff[]>([`tariffs`, address], () => getTariffs(address), {
    enabled: !!address,
  })

export { useTariffs }
