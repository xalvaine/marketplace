import { useQuery } from 'react-query'
import api from '@/api'
import { Catalog } from '@/interfaces'

const getCatalog = async (id: string) => {
  const { data } = await api.get(`/catalogs/${id}`)
  return data.items[0]
}

interface Params {
  id: string
}

const useCatalog = ({ id }: Params) =>
  useQuery<Catalog<Catalog>[]>(`catalog`, () => getCatalog(id))

export { getCatalog, useCatalog }
