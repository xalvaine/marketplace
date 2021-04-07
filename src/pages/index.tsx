import Head from 'next/head'
import Products from '@/views/pages/Home'
import { useDispatch } from 'react-redux'
import { layout } from '@/reducers'

const HomePage = () => {
  const dispatch = useDispatch()
  dispatch(layout.setShowSearch(true))

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
