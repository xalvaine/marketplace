import { Variant } from '@/interfaces/variant'

export interface Product {
  brand_name: string
  description: string
  ext_id: null
  id: number
  images: unknown[]
  name: string
  origin: unknown
  variants: Variant[]
}
