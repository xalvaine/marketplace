import Head from 'next/head'
import Layout from '@/components/Layout'
import { QueryClient } from 'react-query'
import { dehydrate } from 'react-query/hydration'
import { getProducts } from '@/hooks'
import Products from '@/components/Products'

export const getStaticProps = async () => {
  const queryClient = new QueryClient()

  await queryClient.prefetchQuery(`products`, getProducts)

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
    revalidate: 15,
  }
}

const ProductsPage = () => {
  return (
    <Layout>
      <>
        <Head>
          <title>Продукты</title>
        </Head>
        <Products />
      </>
    </Layout>
  )
}

export default ProductsPage
