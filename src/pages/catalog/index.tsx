import Head from 'next/head'
import { GetStaticProps } from 'next'
import api from '@/api'
import { CatalogItem } from '@/interfaces'
import Catalog from '@/views/pages/Catalog'
import { useDispatch } from 'react-redux'
import { layout } from '@/reducers'
import Layout from '@/views/common/Layout'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { useMediaQuery } from '@/utils'
import { PATH } from '@/config'

interface Props {
  catalog: CatalogItem[]
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  try {
    const { data } = await api.get(`/catalog`)
    return { props: { catalog: data.items }, revalidate: 60 }
  } catch (error) {
    console.error(error)
    return { props: { catalog: [] }, revalidate: 60 }
  }
}

const CatalogPage = (props: Props) => {
  const { catalog } = props
  const dispatch = useDispatch()
  const router = useRouter()
  const isDesktop = useMediaQuery(`(min-width: 1024px)`)

  useEffect(() => void dispatch(layout.setLayoutParams({ showSearch: true })))
  useEffect(() => void (isDesktop && router.push(PATH.HOME)), [
    isDesktop,
    router,
  ])

  return (
    <Layout>
      <Head>
        <title>Каталог</title>
      </Head>
      <Catalog catalog={catalog} />
    </Layout>
  )
}

export default CatalogPage
