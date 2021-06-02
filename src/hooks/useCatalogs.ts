import { useQuery } from 'react-query'
import { showcaseAPI } from '@/api'
import { Catalog } from '@/interfaces'

const getCatalogs = async () => {
  try {
    const { data } = await showcaseAPI.get(`/catalogs`)
    return data.items
  } catch (error) {
    console.error(error)
    return []
  }
}

const useCatalogs = () =>
  useQuery<Catalog<Catalog<Catalog>>[]>(`catalogs`, getCatalogs)

export { getCatalogs, useCatalogs }
