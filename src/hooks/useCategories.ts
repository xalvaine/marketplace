import { useQuery } from 'react-query'
import { showcaseAPI } from '@/api'
import { Category } from '@/interfaces'

const getCategories = async () => {
  try {
    const { data } = await showcaseAPI.get(`/categories`)
    return data.items
  } catch (error) {
    console.error(error)
    return []
  }
}

const useCategories = () =>
  useQuery<Category<Category<Category>>[]>(`categories`, getCategories)

export { getCategories, useCategories }
