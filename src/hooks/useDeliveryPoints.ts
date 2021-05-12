import { useQuery } from 'react-query'
import { cartAPI } from '@/api'
import { DeliveryPoint } from '@/interfaces'

const getDeliveryPoints = async (address: unknown) => {
  const { data } = await cartAPI.post(`/delivery_points`, address)
  return data.list
}

const useDeliveryPoints = (address: unknown) =>
  useQuery<DeliveryPoint[]>([`deliveryPoints`, address], () =>
    getDeliveryPoints(address),
  )

export { useDeliveryPoints }
