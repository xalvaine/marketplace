import { cartAPI } from '@/api'
import { Cart } from '@/interfaces'
import { useMutation, useQueryClient } from 'react-query'

interface PatchParams {
  id: number
  quantity: number
  productId: number
}

const patchCartItem = async ({ id, quantity, productId }: PatchParams) => {
  const { data } = await cartAPI.patch(`/cart/${id}`, {
    quantity,
    product_id: productId,
  })
  return data as Cart
}

const useCartItemPatch = () => {
  const queryClient = useQueryClient()
  return useMutation<Cart, unknown, PatchParams>(patchCartItem, {
    onSuccess: (data) => void queryClient.setQueryData([`cart`], data),
  })
}

const deleteCartItem = async (id: number) => {
  const { data } = await cartAPI.delete(`/cart/${id}`)
  return data as Cart
}

const useCartItemDelete = () => {
  const queryClient = useQueryClient()
  return useMutation<Cart, unknown, number>(deleteCartItem, {
    onSuccess: (data) => void queryClient.setQueryData([`cart`], data),
  })
}

export { useCartItemPatch, useCartItemDelete }
