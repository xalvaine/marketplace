import Head from 'next/head'
import Category from '@/views/pages/Category'
import { useDispatch } from 'react-redux'
import { layout } from '@/reducers'
import Layout from '@/views/common/Layout'
import { useEffect } from 'react'

const CategoryPage = () => {
  const dispatch = useDispatch()
  useEffect(() => void dispatch(layout.setLayoutParams({ showSearch: true })))

  return (
    <Layout>
      <Head>
        <title>Продукты питания</title>
      </Head>
      <Category />
    </Layout>
  )
}

export default CategoryPage
