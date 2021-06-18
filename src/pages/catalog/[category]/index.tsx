import Head from 'next/head'
import Category from '@/views/pages/showcase/Category'
import { useDispatch } from 'react-redux'
import { layout } from '@/reducers'
import { useEffect } from 'react'
import { GetStaticPaths, GetStaticProps } from 'next'
import { Catalog } from '@/interfaces'
import { showcaseAPI } from '@/api'

interface Props {
  catalog: Catalog<Catalog>
}

export const getStaticProps: GetStaticProps<Props> = async (context) => {
  if (!context.params?.category) return { revalidate: 60, notFound: true }
  try {
    const { data } = await showcaseAPI.get(
      `/catalogs/${context.params.category}`,
    )
    return { props: { catalog: data.items[0] }, revalidate: 60 }
  } catch (error) {
    console.error(error)
    return { notFound: true, revalidate: true }
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  return { paths: [], fallback: `blocking` }
}

const CategoryPage = (props: Props) => {
  const { catalog } = props

  const dispatch = useDispatch()
  useEffect(() => void dispatch(layout.setLayoutParams({ showSearch: true })))

  return (
    <>
      <Head>
        <title>{catalog.name}</title>
      </Head>
      <Category catalog={catalog} />
    </>
  )
}

export default CategoryPage
