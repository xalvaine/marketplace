import { useQuery } from 'react-query'
import { cartAPI } from '@/api'
import { Address, DeliveryPoint } from '@/interfaces'

const getDeliveryPoints = async (address: Address) => {
  const { data } = await cartAPI.post(`/delivery_points`, address)
  return data.list
}

const useDeliveryPoints = (address: Address = {}) =>
  useQuery<DeliveryPoint[]>([`deliveryPoints`, address], () =>
    getDeliveryPoints(address),
  )

export { useDeliveryPoints }
