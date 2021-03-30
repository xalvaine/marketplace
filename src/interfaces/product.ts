import { Variant } from '@/interfaces/variant'

interface Image {
  id: string
  pos: string
  url: string
  success: boolean
}

export interface Product {
  brand_name: string
  description: string
  ext_id: null
  id: number
  images: Image[]
  name: string
  origin: unknown
  variants: Variant[]
}
