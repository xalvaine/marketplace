import { useMutation, useQuery, useQueryClient } from 'react-query'
import { cartAPI } from '@/api'
import { UserAddress } from '@/interfaces'

const getUserAddresses = async () => {
  const { data } = await cartAPI.get(`/user-address`)
  return data
}

const useUserAddresses = () =>
  useQuery<UserAddress[]>(`userAddresses`, getUserAddresses)

const postUserAddress = async (values: unknown) => {
  const { data } = await cartAPI.post(`/user-address`, values)
  return data
}

const usePostUserAddress = () => {
  const queryClient = useQueryClient()
  return useMutation(postUserAddress, {
    onSuccess: () => void queryClient.invalidateQueries([`userAddresses`]),
  })
}

const patchUserAddress = async (values: UserAddress) => {
  const { data } = await cartAPI.patch(`/user-address/${values.id}`, values)
  return data
}

const usePatchUserAddress = () => {
  const queryClient = useQueryClient()
  return useMutation(patchUserAddress, {
    onSuccess: () => void queryClient.invalidateQueries([`userAddresses`]),
  })
}

const deleteUserAddress = async (id: number) => {
  const { data } = await cartAPI.delete(`/user-address/${id}`)
  return data
}

const useDeleteUserAddress = () => {
  const queryClient = useQueryClient()
  return useMutation(deleteUserAddress, {
    onSuccess: () => void queryClient.invalidateQueries([`userAddresses`]),
  })
}

export {
  useUserAddresses,
  usePostUserAddress,
  usePatchUserAddress,
  useDeleteUserAddress,
}
