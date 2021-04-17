import Head from 'next/head'
import Category from '@/views/pages/Category'
import { useDispatch } from 'react-redux'
import { layout } from '@/reducers'
import { useEffect } from 'react'
import { GetStaticPaths, GetStaticProps } from 'next'
import { getCatalog } from '@/hooks'
import { Catalog } from '@/interfaces'

interface Props {
  catalog: Catalog<Catalog>
}

export const getStaticProps: GetStaticProps<Props> = async (context) => {
  if (!context.params?.category) return { revalidate: 60, notFound: true }
  const catalog = await getCatalog(context.params.category as string)
  return { props: { catalog }, revalidate: 60 }
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
