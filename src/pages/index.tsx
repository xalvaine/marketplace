import Head from 'next/head'
import Products from '@/views/pages/Home'
import { useDispatch } from 'react-redux'
import { layout } from '@/reducers'
import { useEffect } from 'react'

const HomePage = () => {
  const dispatch = useDispatch()
  useEffect(
    () =>
      void dispatch(
        layout.setLayoutParams({ showSearch: true, showCategories: true }),
      ),
  )

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
