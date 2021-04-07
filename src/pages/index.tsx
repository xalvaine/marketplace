import Head from 'next/head'
import Products from '@/views/pages/Home'
import { useDispatch } from 'react-redux'
import { layout } from '@/reducers'
import Layout from '@/views/common/Layout'

const HomePage = () => {
  const dispatch = useDispatch()
  dispatch(layout.setShowSearch(true))

  return (
    <Layout>
      <Head>
        <title>Продукты</title>
      </Head>
      <Products />
    </Layout>
  )
}

export default HomePage
