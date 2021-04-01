import Head from 'next/head'
import Product from '@/views/pages/Product'

const CategoryPage = () => {
  return (
    <>
      <Head>
        <title>Арахисовая паста</title>
      </Head>
      <Product />
    </>
  )
}

export default CategoryPage
