import Head from 'next/head'
import Products from '@/components/Home'

const HomePage = () => {
  return (
    <>
      <Head>
        <title>Продукты</title>
      </Head>
      <Products />
    </>
  )
}

export default HomePage
