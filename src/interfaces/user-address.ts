import { Address } from '@/interfaces/address'

export interface UserAddress {
  additional_addr?: {
    flat: string
    floor: string
    house: string
    street: string
    entrance: string
    intercom?: string
  }
  address?: Address
  is_primary: boolean
  name: string
  type?: string
  work_time?: string
}
