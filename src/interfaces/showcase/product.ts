import { Image, Variant } from '@/interfaces'

export interface Product {
  id: number
  name: string
  brand_name: string
  origin: string
  description: string
  images: Image[]
  variants: Variant[]
  attributes?: [
    {
      code: string
      value: string
      title: string
      type: string
    },
  ]
}
