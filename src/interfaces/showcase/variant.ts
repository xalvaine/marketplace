export interface Variant {
  id: number
  dimensions: { depth: number; width: number; height: number }
  prices?: {
    code: string
    name: string
    value: string
  }[]
  options?: {
    code: string
    title: string
    type: string
    value: string
  }[]
  weight: number
}
