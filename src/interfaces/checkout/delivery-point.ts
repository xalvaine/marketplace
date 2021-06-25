import { Address } from '@/interfaces'

export interface DeliveryPoint {
  address: Address
  code: string
  id: string
  courier: string
  courierCode: string
  courierPostamatType: string
  description?: string
  latitude: string
  longitude: string
  maxSize: string
  maxWeight: number
  metroStation: string
  paymentMethods: ('COD_CASH' | 'COD_CARD')[]
  postOfficeNumber: null
  type: string
  workTime: string
}
