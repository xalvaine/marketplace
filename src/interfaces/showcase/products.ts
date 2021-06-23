import { Variant, Image } from '@/interfaces'

export type Products = {
  id: number
  images: Image[]
  name: string
  variants: Variant[]
}[]
