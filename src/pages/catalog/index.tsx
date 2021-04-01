import Head from 'next/head'
import Catalog from '@/views/Catalog'

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
