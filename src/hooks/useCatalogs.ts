import { useQuery } from 'react-query'
import { showcaseAPI } from '@/api'
import { Catalog } from '@/interfaces'

const getCatalogs = async () => {
  const { data } = await showcaseAPI.get(`/catalogs`)
  return data.items
}

const useCatalogs = () =>
  useQuery<Catalog<Catalog<Catalog>>[]>(`catalogs`, getCatalogs)

export { getCatalogs, useCatalogs }
