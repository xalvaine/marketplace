export interface Catalog<T = never> {
  id: number
  name: 'string'
  description: 'string'
  slug: 'string'
  default_image: 'string'
  collections: [
    {
      id: number
      name: 'string'
      description: 'string'
      slug: 'string'
    },
  ]
  catalogs: T[]
}
