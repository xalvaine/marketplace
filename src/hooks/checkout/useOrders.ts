import { useMutation, useQuery, useQueryClient } from 'react-query'
import { cartAPI } from '@/api'
import { Order } from '@/interfaces'

const getOrders = async () => {
  const { data } = await cartAPI.get(`/orders`)
  return data.items
}

const useOrders = () => useQuery<Order[]>(`orders`, getOrders)

const postOrders = async (values: unknown) => {
  const { data } = await cartAPI.post(`/orders`, values)
  return data.items as Order[]
}

const usePostOrders = () => {
  const queryClient = useQueryClient()
  return useMutation<Order[], unknown, unknown>(postOrders, {
    onSuccess: (data) => void queryClient.setQueryData([`orders`], data),
    retry: false,
  })
}

export { useOrders, usePostOrders }
