import { useQuery } from 'react-query'
import { cartAPI } from '@/api'
import { City } from '@/interfaces'
import { Debouncer } from '@/utils'
import { useEffect, useState } from 'react'

const debouncer = new Debouncer()

const getCities = async (address: string) => {
  if (address.length < 3) return []
  const { data } = await cartAPI.get(`/address`, {
    params: { query: address },
  })
  return data.suggestions
}

const useCities = (value: string) => {
  const [address, setAddress] = useState<string>(``)
  useEffect(
    () =>
      debouncer.debounce(async () => {
        setAddress(value)
      }, 300),
    [value],
  )

  return useQuery<City[]>([`cities`, address], () => getCities(address))
}

export { useCities }
