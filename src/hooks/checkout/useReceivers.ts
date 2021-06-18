import { useMutation, useQuery, useQueryClient } from 'react-query'
import { cartAPI } from '@/api'
import { Receiver } from '@/interfaces'

const getReceivers = async () => {
  const { data } = await cartAPI.get(`/receivers`)
  return data
}

const useReceivers = () => useQuery<Receiver[]>(`receivers`, getReceivers)

const postReceiver = async (values: Receiver) => {
  const { data } = await cartAPI.post(`/receivers`, values)
  return data
}

const usePostReceiver = () => {
  const queryClient = useQueryClient()
  return useMutation(postReceiver, {
    onSuccess: () => void queryClient.invalidateQueries([`receivers`]),
  })
}

const patchReceiver = async (values: Receiver) => {
  const { data } = await cartAPI.patch(`/receivers/${values.id}`, values)
  return data
}

const usePatchReceiver = () => {
  const queryClient = useQueryClient()
  return useMutation(patchReceiver, {
    onSuccess: () => void queryClient.invalidateQueries([`receivers`]),
  })
}

export { useReceivers, usePostReceiver, usePatchReceiver }
