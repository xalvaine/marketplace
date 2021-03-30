import Head from 'next/head'
import Layout from '@/components/Layout'
import Products from '@/components/Home'

const HomePage = () => {
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

export default HomePage
