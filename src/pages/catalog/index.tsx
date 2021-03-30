import Head from 'next/head'
import Catalog from '@/components/Catalog'

const CatalogPage = () => {
  return (
    <>
      <Head>
        <title>Каталог</title>
      </Head>
      <Catalog />
    </>
  )
}

export default CatalogPage
