export interface Tariff {
  minDeliveryTime: number
  maxDeliveryTime: number
  courier: string
  courierCode: string
  deliveryCode: string
  type: string
  dlvPrice: null
  price: number
  codPrice: number
  deliveryPrice: number
  insurancePrice: number
  contractNumber: string
  fioCyrillic: boolean
  product?: string
}
