import { useMutation, useQuery, useQueryClient } from 'react-query'
import { cartAPI } from '@/api'
import { UserAddress } from '@/interfaces'

const getUserAddresses = async () => {
  const { data } = await cartAPI.get(`/user-address`)
  return data
}

const useUserAddresses = () =>
  useQuery<UserAddress[]>(`userAddresses`, getUserAddresses)

const postUserAddress = async (values: UserAddress) => {
  const { data } = await cartAPI.post(`/user-address`, values)
  return data
}

const usePostUserAddress = () => {
  const queryClient = useQueryClient()
  return useMutation(postUserAddress, {
    onSuccess: () => void queryClient.invalidateQueries([`userAddresses`]),
  })
}

export { useUserAddresses, usePostUserAddress }
