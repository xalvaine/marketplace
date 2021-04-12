import { Image } from '@/interfaces'

export interface Product {
  id: number
  name: string
  brand_name: string
  origin: string
  description: string
  images: Image[]
  variants: []
  attributes: [
    {
      code: string
      value: string
      title: string
      type: string
    },
  ]
}
