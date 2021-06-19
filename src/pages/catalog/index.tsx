import Head from 'next/head'
import { GetStaticProps } from 'next'
import { Category } from '@/interfaces'
import Catalog from '@/views/pages/showcase/Catalog'
import { useDispatch } from 'react-redux'
import { layout } from '@/reducers'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { useMediaQuery } from '@/utils'
import { PATH } from '@/config'
import { showcaseAPI } from '@/api'

interface Props {
  categories: Category<Category<Category>>[]
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  try {
    const { data } = await showcaseAPI.get(`/categories`)
    return { props: { categories: data.items }, revalidate: 60 }
  } catch (error) {
    console.error(error)
    return { props: { categories: [] }, revalidate: 60 }
  }
}

const CatalogPage = (props: Props) => {
  const { categories } = props
  const dispatch = useDispatch()
  const router = useRouter()
  const { matches } = useMediaQuery(`(min-width: 1024px)`)

  useEffect(() => void dispatch(layout.setLayoutParams({ showSearch: true })))
  useEffect(() => void (matches && router.push(PATH.HOME)), [matches, router])

  return (
    <>
      <Head>
        <title>Каталог</title>
      </Head>
      <Catalog categories={categories} />
    </>
  )
}

export default CatalogPage
