export interface Product {
  id: number
  name: string
  brand_name: string
  origin: string
  description: string
  images: []
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
