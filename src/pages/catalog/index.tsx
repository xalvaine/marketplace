import Head from 'next/head'
import { GetStaticProps } from 'next'
import api from '@/api'
import { CatalogItem } from '@/interfaces'
import Catalog from '@/views/pages/Catalog'
import { useDispatch } from 'react-redux'
import { layout } from '@/reducers'
import Layout from '@/views/common/Layout'

interface Props {
  catalog: CatalogItem[]
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const { data } = await api.get(`/catalog`)
  return { props: { catalog: data.items }, revalidate: 60 }
}

const CatalogPage = (props: Props) => {
  const { catalog } = props
  const dispatch = useDispatch()
  dispatch(layout.setShowSearch(true))

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
