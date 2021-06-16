export interface Category<T = never> {
  id: number
  name: string
  categories: T[]
}
