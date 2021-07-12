import { CartItem, Receiver, UserAddress } from '@/interfaces'

export interface Order {
  id: number
  total: string
  promocode: string
  items: CartItem[]
  code: string
  pickup_point_id: string
  desired_date: string
  desired_time_period_start: string
  desired_time_period_end: string
  payment_method: string
  comment: string
  receiver: Receiver
  user_address: UserAddress
  created_at: string
}
