import { Variant, Image } from '@/interfaces'

export type Products = {
  brand_name: string
  description: string
  ext_id: null
  id: number
  images: Image[]
  name: string
  origin: unknown
  variants: Variant[]
}[]
