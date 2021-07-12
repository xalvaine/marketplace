import { Address } from '@/interfaces'

export interface UserAddress {
  id: number
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
  courier_code?: string
  name: string
  type?: string
  work_time?: string
  payment_methods: ('COD_CASH' | 'COD_CARD')[]
}
