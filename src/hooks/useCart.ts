import { useMutation, useQuery, useQueryClient } from 'react-query'
import { cartAPI } from '@/api'
import { Cart } from '@/interfaces'

const getCart = async () => {
  const { data } = await cartAPI.get(`/cart`)
  return data
}

const useCart = () => useQuery<Cart>(`cart`, getCart)

const postCart = async (values: unknown) => {
  const { data } = await cartAPI.post(`/cart`, values)
  return data as Cart
}

const useCartMutation = () => {
  const queryClient = useQueryClient()
  return useMutation<Cart, unknown, unknown>(postCart, {
    onSuccess: (data) => void queryClient.setQueryData([`cart`], data),
  })
}

export { useCart, useCartMutation }
