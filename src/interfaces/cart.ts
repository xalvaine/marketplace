export interface CartItem {
  id: number
  quantity: number
  name: string
  is_available: boolean
  price: string | null
}

export interface Cart {
  created_at: string
  items: CartItem[]
  total_price: number
}
