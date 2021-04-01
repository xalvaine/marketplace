import Head from 'next/head'
import Products from '@/views/Home'

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
