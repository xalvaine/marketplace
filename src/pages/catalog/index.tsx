import Head from 'next/head'
import api from '@/api'
import { CatalogItem } from '@/interfaces'
import Catalog from '@/views/pages/Catalog'
import { GetStaticProps } from 'next'

interface Props {
  catalog: CatalogItem[]
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const { data } = await api.get(`/catalog`)
  return { props: { catalog: data.items }, revalidate: 60 }
}

const CatalogPage = (props: Props) => {
  const { catalog } = props

  return (
    <>
      <Head>
        <title>Каталог</title>
      </Head>
      <Catalog catalog={catalog} />
    </>
  )
}

export default CatalogPage
